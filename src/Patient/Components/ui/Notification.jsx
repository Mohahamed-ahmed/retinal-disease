/* eslint-disable react/prop-types */
import classes from "./Notification.module.css";

import { useEffect } from "react";

import { useDispatch } from 'react-redux';
import { uiActions } from "../../../store/ui-slice";

const errorIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 512 512"
    version="1.1"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>error-filled</title>{" "}
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        {" "}
        <g id="add" fill="#F44336" transform="translate(42.666667, 42.666667)">
          {" "}
          <path
            d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M262.250667,134.250667 L213.333333,183.168 L164.416,134.250667 L134.250667,164.416 L183.168,213.333333 L134.250667,262.250667 L164.416,292.416 L213.333333,243.498667 L262.250667,292.416 L292.416,262.250667 L243.498667,213.333333 L292.416,164.416 L262.250667,134.250667 Z"
            id="Combined-Shape"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const successIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 512 512"
    version="1.1"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <title>success-filled</title>{" "}
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        {" "}
        <g
          id="add-copy-2"
          fill="#00C851"
          transform="translate(42.666667, 42.666667)"
        >
          {" "}
          <path
            d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
            id="Shape"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800px"
    height="800px"
    viewBox="0 0 16 16"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill="#3B88C3"
        fillRule="evenodd"
        d="M16,8 C16,12.4183 12.4183,16 8,16 C3.58172,16 0,12.4183 0,8 C0,3.58172 3.58172,0 8,0 C12.4183,0 16,3.58172 16,8 Z M9,5 C9,5.55228 8.55229,6 8,6 C7.44772,6 7,5.55228 7,5 C7,4.44772 7.44772,4 8,4 C8.55229,4 9,4.44772 9,5 Z M8,7 C7.44772,7 7,7.44772 7,8 L7,11 C7,11.5523 7.44772,12 8,12 C8.55229,12 9,11.5523 9,11 L9,8 C9,7.44772 8.55229,7 8,7 Z"
      />{" "}
    </g>
  </svg>
);

function Notification({ notification }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const notificationTime = setTimeout(() => {
      dispatch(uiActions.removeNotification({ id: notification.id }));
    }, 3000);
    return () => {
      clearTimeout(notificationTime);
    };
  }, [dispatch, notification]);

  let specialClasses, icon;

  if (notification?.status === "error") {
    specialClasses = classes.error;
    icon = errorIcon;
  } else if (notification?.status === "success") {
    specialClasses = classes.success;
    icon = successIcon;
  } else {
    specialClasses = classes.information;
    icon = infoIcon;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <div className={cssClasses}>
      {icon}
      <div className={classes.text}>
        <h2>{notification?.title}</h2>
        <p>{notification?.message}</p>
      </div>
    </div>
  );
}

export default Notification;
