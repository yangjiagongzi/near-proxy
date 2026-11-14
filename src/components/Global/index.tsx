import React from "react";
import { Notification, notificationRef } from "../Notification";
import { Modal, modalRef } from "../Modal";
import styles from "./styles.css";

const Global: React.FC = () => {
  return (
    <>
      <Modal ref={modalRef} />
      <div className={styles.globalTop}></div>
      <div className={styles.globalBottom}>
        <Notification ref={notificationRef} />
      </div>
    </>
  );
};

export default Global;
