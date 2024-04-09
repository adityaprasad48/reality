import { useRef, useState, useEffect } from "react";

const TabsList = ({ tabs }: any) => {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    if (!tabsRef.current) return;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current as any;
      setScrollPosition(scrollLeft);
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollWidth - clientWidth - scrollLeft > 0);
    };

    tabsRef.current.addEventListener("scroll", handleScroll);

    // Initial check for arrow visibility
    handleScroll();
    return () => {
      tabsRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTabs = (direction: string) => {
    console.log("called");
    if (!tabsRef.current) return;
    const tabs = tabsRef.current;
    const scrollAmount = 100; // Adjust scroll amount as needed
    if (direction === "left") {
      tabs.scrollTo({
        left: tabs.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else {
      tabs.scrollTo({
        left: tabs.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden border">
      {showLeftArrow && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl border bg bg-transparent cursor-pointer"
          onClick={() => scrollTabs("left")}
        >
          &lt;
        </button>
      )}
      {showRightArrow && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl border"
          onClick={() => scrollTabs("right")}
        >
          &gt;
        </button>
      )}
      <div
        className="flex w-[300px] overflow-auto whitespace-nowrap"
        style={{ scrollbarWidth: "none" }}
        ref={tabsRef}
      >
        {tabs.map((tab: string, index: number) => (
          <div key={index} className="px-4 py-2">
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};
