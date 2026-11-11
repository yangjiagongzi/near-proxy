import React from "react";
import { notification } from "./styles.css";

type Props = {};

type State = {
  text: string;
  error: boolean;
};

const notificationRef = React.createRef<Notification>();

class Notification extends React.Component<Props, State> {
  private timer: ReturnType<typeof setTimeout> | null = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "",
      error: false,
    };
  }

  show = (option: NotificationOption) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    const { message, duration = 2000, error = false } = option;
    this.setState(
      {
        text: "",
      },
      () => {
        this.setState(
          {
            text: message,
            error,
          },
          () => {
            this.timer = setTimeout(() => {
              this.setState({ text: "" });
            }, duration);
          },
        );
      },
    );
  };

  render() {
    const { text, error } = this.state;
    if (!text) {
      return null;
    }
    return <div className={notification({ error })}>{text}</div>;
  }
}

export { Notification, notificationRef };

type NotificationOption = {
  message: string;
  duration?: number;
  error?: boolean;
};

export default {
  show: (option: NotificationOption) => {
    notificationRef.current?.show(option);
  },
};
