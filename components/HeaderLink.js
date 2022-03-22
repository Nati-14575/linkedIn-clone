import React from "react";
import Avatar from "@mui/material";
import { useSession, signOut } from "next-auth/react";

function HeaderLink({ Icon, text, avatar, feed, hidden, active }) {
  const { data: session } = useSession();
  return (
    <div
      className={`${
        hidden && "hidden md:inline-flex"
      } cursor-pointer flex flex-col justify-center items-center ${
        active && "active"
      } ${feed ? "isFeed" : "notFeed"}`}
      onClick={() => avatar && signOut()}
    >
      {avatar ? (
        <Icon className='!h-7 !w-7 lg:!-mb-1' src={session.user.image} />
      ) : (
        <Icon />
      )}
      <h4
        className={`text-sm ${
          feed && "hidden lg:flex justify-center w-full mx-auto"
        }`}
      >
        {text}
      </h4>
      {active && (
        <span className='hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full' />
      )}
    </div>
  );
}

export default HeaderLink;
