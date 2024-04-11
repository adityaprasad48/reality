import { forwardRef } from "react";

interface BoxProps {
  className?: string;
  children: any;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ className, children }, ref) => {
    let existingCls = "border border-black ";
    if (className) {
      existingCls = existingCls.concat(className);
    }

    console.log(existingCls);

    return (
      <div ref={ref} className={existingCls}>
        {children}
      </div>
    );
  }
);

Box.displayName = 'Box';
export default Box;
