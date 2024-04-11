import React, { useEffect, useState } from "react";

export default function DragMove(props:any) {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className,
    isSvg = false,
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e:any) => {
    setIsDragging(true);

    onPointerDown && onPointerDown(e);
  };

  const handlePointerUp = (e:any) => {
    setIsDragging(false);

    onPointerUp && onPointerUp(e);
  };

  const handlePointerMove = (e:any) => {
    if (isDragging) onDragMove(e);

    onPointerMove(e);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  // Dynamically render a <g> or <div> tag
  const Tag = isSvg ? "g" : "div";

  return (
    <Tag
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
    </Tag>
  );
}

DragMove.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
