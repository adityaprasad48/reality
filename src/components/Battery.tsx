import { useState, useEffect } from "react";

const Battery = () => {
  const [batteryPercentage, setBatteryPercentage] = useState(0);
  const [batteryBg, setBatterBg] = useState("");

  useEffect(() => {
    // Function to update battery percentage
    const updateBatteryStatus = async () => {
      try {
        const battery = await navigator.getBattery();
        setBatteryPercentage(Math.round(battery.level * 100));
      } catch (error) {
        console.error("Failed to get battery status:", error);
      }
    };

    // Update battery percentage on mount and whenever it changes
    updateBatteryStatus();

    navigator.getBattery().then((battery: any) => {
      battery.addEventListener("levelchange", updateBatteryStatus);
    });
  }, []);

  useEffect(() => {
    let bg;
    if (batteryPercentage <= 20) {
      bg = "bg-red-400";
    } else if (batteryPercentage > 20 && batteryPercentage < 50) {
      bg = "bg-orange-400";
    } else {
      bg = "bg-green-400";
    }
    setBatterBg(bg);
  }, [batteryPercentage]);

  return (
    <div className="flex flex-col justify-center items-center  gap-1 select-none mt-2">
      <div className="w-10 h-6 flex justify-center items-center relative outline rounded-md">
        <div
          style={{ width: batteryPercentage + "%" }}
          className={`absolute top-0 left-0 h-full ${batteryBg}  rounded-l-md`}
        ></div>
        <div className="text-sm font-bold z-20 dark:text-gray-100">
          {batteryPercentage}%
        </div>
      </div>
      <div className="text-xs text-gray-500 font-semibold dark:text-gray-200">
        Battery
      </div>
    </div>
  );
};

export default Battery;
