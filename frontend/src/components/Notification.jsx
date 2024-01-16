/* eslint-disable no-unused-vars */
import React from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const Notification = () => {
  return (
    <div className="">
      <NovuProvider
        subscriberId={"65a54d91aeb88319dd3d857e"}
        applicationIdentifier={"eDGCaSBCSaoC"}
      >
        <PopoverNotificationCenter colorScheme={"light"}>
          {({ unseenCount }) => (
            <NotificationBell
              className="w-[32px] h-[32px] text-yellow-300"
              unseenCount={unseenCount}
            />
          )}
        </PopoverNotificationCenter>
      </NovuProvider>
    </div>
  );
};

export default Notification;
