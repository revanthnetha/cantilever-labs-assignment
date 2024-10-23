import { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex justify-end">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isToggled}
            onChange={handleToggle}
          />

          <div
            className={`block w-14 h-8 rounded-full ${
              isToggled ? "bg-blue-500" : "bg-[#EBEBEB]"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 bg-[#CDCDCD] w-6 h-6 rounded-full transition transform ${
              isToggled ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
