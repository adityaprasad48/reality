import { forwardRef } from "react";

interface SqrProps {
  className: string;
}

const Sqr = forwardRef<HTMLDivElement, SqrProps>(({ className }, ref) => {
  let existingCls = "border border-black ";

  if (className) {
    existingCls = existingCls.concat(className);
  }

  console.log(existingCls);
  return <div ref={ref} className={existingCls}></div>;
});

Sqr.displayName = "Sqr";
export default Sqr;
