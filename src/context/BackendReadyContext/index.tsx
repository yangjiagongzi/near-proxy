import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { invoke } from "@tauri-apps/api/core";
import PageLoading from "~/components/PageLoading";

interface BackendReadyCtx {
  ready: boolean;
}
const BackendReadyContext = createContext<BackendReadyCtx>({ ready: false });

export function BackendReadyProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    const poll = async () => {
      try {
        const ok = await invoke<boolean>("is_app_ready");
        if (ok) {
          setReady(true);
          clearInterval(timer);
        }
      } catch (err) {
        console.error("poll is_app_ready error", err);
      }
    };

    poll();
    timer = setInterval(poll, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <BackendReadyContext.Provider value={{ ready }}>
      {ready ? children : <PageLoading />}
    </BackendReadyContext.Provider>
  );
}

export const useBackendReady = () => useContext(BackendReadyContext);
