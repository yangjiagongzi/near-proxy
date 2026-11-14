import React, { useEffect, useRef, useState } from "react";
import { themeVars } from "~/styles/theme.css";
import Triangle from "../Triangle";
import styles from "./styles.css";

type Item = { id: string; name: string };
type Props = {
  title?: string;
  data: Item[];
  value: Item;
  className?: string;
  onChange: (select: Item) => void;
};

const Select: React.FC<Props> = ({
  title,
  data,
  value,
  className = "",
  onChange,
}: Props) => {
  const [choose, setChoose] = useState(value);
  const [active, setActive] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxSize, setBoxSize] = useState(0);

  useEffect(() => {
    setBoxSize(boxRef.current?.offsetHeight || 0);
  }, []);

  useEffect(() => {
    setChoose(value);
  }, [value]);

  return (
    <div
      className={`${styles.selectBox} ${
        active ? styles.activeSelectBox : ""
      } ${className}`}
      onClick={() => setActive(!active)}
      onBlur={() => setActive(false)}
      ref={boxRef}
      tabIndex={0}
    >
      <div>
        {choose.name}
        {title ? <div className="layout-placeholder">{title}</div> : null}
        {data.map(({ id, name }) => (
          <div key={id} className="layout-placeholder">
            {name}
          </div>
        ))}
      </div>
      <Triangle
        size={themeVars.spacing.xxsmall.toString()}
        color={
          active
            ? themeVars.colors.active.toString()
            : themeVars.colors.textLight.toString()
        }
        className={`${styles.icon} ${active ? styles.activeIcon : ""}`}
      />
      {title ? <div className="title">{title}</div> : null}
      {active ? (
        <div className={styles.selectList} style={{ top: boxSize }}>
          {data.map((item) => (
            <div
              key={item.id}
              className={`selectItem ${choose.id === item.id ? "active" : ""}`}
              onClick={() => {
                setChoose(item);
                onChange(item);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
