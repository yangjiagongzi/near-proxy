import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import { invoke } from "@tauri-apps/api/core";
import PageLoading from "~/components/PageLoading";

interface BackendReadyCtx {
  ready: boolean;
}
const BackendReadyContext = createContext<BackendReadyCtx>({ ready: false });

export function BackendReadyProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const poll = async () => {
      try {
        const ok = await invoke<boolean>("is_app_ready");
        if (ok) {
          setReady(true);
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
        }
      } catch (err) {
        console.error("poll is_app_ready error", err);
      }
    };

    poll();
    timerRef.current = setInterval(poll, 200);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <BackendReadyContext.Provider value={{ ready }}>
      {ready ? children : <PageLoading />}
    </BackendReadyContext.Provider>
  );
}

export const useBackendReady = () => useContext(BackendReadyContext);
