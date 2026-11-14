import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./styles.css";

const PageLoading: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      setTotalWidth(Math.min(rect.width, rect.height));
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const weekText = useMemo(
    () => ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    [],
  );
  const monthText = useMemo(
    () => [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
    [],
  );
  const dayText = useMemo(
    () =>
      new Array(31)
        .fill("")
        .map((_, idx) => `${(idx + 1).toString().padStart(2, "0")}日`),
    [],
  );
  const hourText = useMemo(
    () =>
      new Array(24)
        .fill("")
        .map((_, idx) => `${idx.toString().padStart(2, "0")}时`),
    [],
  );
  const minuteText = useMemo(
    () =>
      new Array(60)
        .fill("")
        .map((_, idx) => `${idx.toString().padStart(2, "0")}分`),
    [],
  );
  const secondText = useMemo(
    () =>
      new Array(60)
        .fill("")
        .map((_, idx) => `${idx.toString().padStart(2, "0")}秒`),
    [],
  );
  const allText = useMemo(
    () => [monthText, dayText, weekText, hourText, minuteText, secondText],
    [],
  );
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const calcActiveIndex = useCallback(
    ({ now, next, max }: { now?: number; next: number; max: number }) => {
      if (now === undefined) {
        return next + max;
      }
      const remainder = now % max;
      return now + ((next - remainder + max) % max);
    },
    [],
  );
  const run = useCallback(() => {
    const now = new Date();
    setActiveIndex((activeIndex) => [
      calcActiveIndex({
        now: activeIndex[0],
        next: now.getMonth(),
        max: allText[0].length,
      }),
      calcActiveIndex({
        now: activeIndex[1],
        next: now.getDate() - 1,
        max: allText[1].length,
      }),
      calcActiveIndex({
        now: activeIndex[2],
        next: now.getDay(),
        max: allText[2].length,
      }),
      calcActiveIndex({
        now: activeIndex[3],
        next: now.getHours(),
        max: allText[3].length,
      }),
      calcActiveIndex({
        now: activeIndex[4],
        next: now.getMinutes(),
        max: allText[4].length,
      }),
      calcActiveIndex({
        now: activeIndex[5],
        next: now.getSeconds(),
        max: allText[5].length,
      }),
    ]);
  }, []);

  useEffect(() => {
    run();
    let timerRun: ReturnType<typeof setTimeout> | null = null;
    const timerStart = setTimeout(() => {
      timerRun = setInterval(() => {
        run();
      }, 100);
    }, 1200);
    return () => {
      if (timerRun) {
        clearInterval(timerRun);
      }
      if (timerStart) {
        clearTimeout(timerStart);
      }
    };
  }, []);

  return (
    <div ref={divRef} className={styles.container}>
      <div
        className={styles.box}
        style={{ width: `${totalWidth}px`, height: `${totalWidth}px` }}
      >
        {allText.map((list, typeIndex) =>
          list.map((text, textIndex) => {
            const activeTextIndex =
              activeIndex[typeIndex] !== undefined
                ? activeIndex[typeIndex]
                : textIndex;
            const deg = (360 / list.length) * (activeTextIndex - textIndex);
            const width = totalWidth / 18;
            const x = totalWidth / 2 + ((typeIndex + 1) * totalWidth) / 18;
            const y = totalWidth / 2 + 10;
            return (
              <div
                key={`${typeIndex}-${textIndex}`}
                className={styles.label({
                  active: textIndex === activeTextIndex % list.length,
                })}
                style={{
                  transform: `rotate(${deg}deg)`,
                  width: `${width}px`,
                  transformOrigin: `${totalWidth / 2 - x}px 50%`,
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              >
                {text}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
};

export default PageLoading;
