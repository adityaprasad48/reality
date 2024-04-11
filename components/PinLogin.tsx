import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PinLogin = () => {
  const inputRefs = useRef([]);
  const pinCount = useRef(-1);
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [logger, setLogger] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/[0-9]/.test(event.key) || event.key === "Backspace") {
        setPin((pin) => {
          if (event.key === "Backspace") {
            return pin.slice(0, -1); // Remove the last character from pin
          }
          return pin + event.key;
        });

        // index starts from 0
        pinCount.current = pinCount.current + 1;
        const input = inputRefs.current[pinCount.current];
        if (input.value.length === 1) {
          input.value = "";
        }
        input.focus();
        if (pinCount.current === 3) {
          pinCount.current = -1;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  console.log({ pin });

  const isValidPin = (pin: string) => {
    const validPin = 4243;
    return validPin === Number(pin);
  };

  useEffect(() => {
    if (pin.length == 4) {
      if (isValidPin(pin)) {
        setLogger("Welcome Back!!!");
        navigate("/throw");
      } else {
        setLogger("Wrong Pin Try agin!!");
        setPin("");
      }
    }
  }, [pin, navigate]);

  return (
    <div>
      <div className="z-100 flex justify-center items-center h-[100%]">
        <div>
          <h1> Hi, User </h1>
          Enter your Reality PIN
          <div className="flex gap-2">
            <input
              className="border-2 border-gray-700 text-3xl w-[50px] h-[50px] text-center rounded-md"
              type="text"
              maxLength={1}
              pattern="[0-9]+"
              ref={(el) => (inputRefs.current[0] = el)}
            />
            <input
              className="border border-gray-200 text-3xl w-[50px] h-[50px] text-center rounded-md"
              type="text"
              maxLength={1}
              pattern="[0-9]+"
              ref={(el) => (inputRefs.current[1] = el)}
            />
            <input
              className="border border-gray-200 text-3xl w-[50px] h-[50px] text-center rounded-md"
              type="text"
              maxLength={1}
              pattern="[0-9]+"
              ref={(el) => (inputRefs.current[2] = el)}
            />
            <input
              className="border border-gray-200 text-3xl w-[50px] h-[50px] text-center rounded-md"
              type="text"
              maxLength={1}
              pattern="[0-9]+"
              ref={(el) => (inputRefs.current[3] = el)}
            />
          </div>
          {logger && <h1>{logger}</h1>}
        </div>
      </div>
      {/* <div className="fixed  inset-0 z-50 bg-white bg-opacity-50 backdrop-blur-md"></div> */}
    </div>
  );
};

export default PinLogin;
