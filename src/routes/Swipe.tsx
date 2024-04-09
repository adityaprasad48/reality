import { useState } from "react";
import Swipeable from "../components/Swipeable";

const Swipe = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleSwipe = (index: number) => {
    setItems(items.filter((_item, i) => i !== index));
  };

  return (
    <div className="bg-white-100 m-2">
      {items.map((item, index) => (
        <Swipeable onSwipe={handleSwipe} key={index}>
          {item}
        </Swipeable>
      ))}
    </div>
  );
};

export default Swipe;
