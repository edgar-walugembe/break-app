/* eslint-disable no-unused-vars */
import React from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";

const Notification = () => {
  return (
    <NovuProvider
      subscriberId={"on-boarding-subscriber-id-123"}
      applicationIdentifier={"eVDxcxY37S_g"}
    >
      <PopoverNotificationCenter colorScheme={"light"}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default Notification;
