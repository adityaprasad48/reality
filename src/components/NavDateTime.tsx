import { useState, useEffect } from "react";

const NavDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      setCurrentDateTime(formattedDateTime);
    };

    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let time = currentDateTime.split(",")[2];
  let day = currentDateTime.split(",")[0];
  let date = currentDateTime.split(",")[1];

  return (
    <div className="flex flex-col justify-center items-left select-none">
      <div className="text-sm font-bold z-20">
        {day} {date}
      </div>
      <div className="text-md text-gray-500 dark:text-gray-300 font-bold">
        {time}
      </div>
    </div>
  );
};

export default NavDateTime;
