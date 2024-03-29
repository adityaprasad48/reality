import { useState } from "react";

const Swipeable = (props: any) => {
  const _props = props
  console.log({_props})
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    const clientX = e.touches[0].clientX;
    setTouchStartX(clientX);
    console.log(clientX);
  };

  const handleTouchMove = (e: any) => {
    //  console.log({ index: index + 1 });
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 100) {
      // swipe length
      onSwipe();
    }
  };

  return (
    <div
      className="py-2 px-3 text-xl text-gray-500 mb-2 rounded-md bg-gray-100"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {props.children}
    </div>
  );
};

export default Swipeable;
