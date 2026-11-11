import React from "react";
import { Notification, notificationRef } from "../Notification";
import { globalBottom, globalTop } from "./styles.css";

const Global: React.FC = () => {
  return (
    <>
      <div className={globalTop}></div>
      <div className={globalBottom}>
        <Notification ref={notificationRef} />
      </div>
    </>
  );
};

export default Global;
