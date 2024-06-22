import Notification from "./Notification";
import classes from "./Notification.module.css";

import { useSelector } from "react-redux";


function NotificationsList() {
  const notification = useSelector((state) => state.ui.notification);
  const uiChanged = useSelector((state) => state.ui.changed);

  return (
      <div className={classes["notifications-list"]}>
      {uiChanged && 
        notification.map((notification) => (
          <Notification notification={notification} key={notification.id} />
        ))}
    </div>
  );
}

export default NotificationsList;
