import React, { ReactNode } from "react";
interface ButtonProps {
    label?: string;
    children?: ReactNode;
  }

function Button({ label = "Shop Now"  }: ButtonProps) {
return (
<div>
{/* hover:scale-105 makes the button slightly bigger on hover.
focus:outline-none removes the default outline that appears when the button is focused.
focus:ring-2 adds a ring around the button when it's focused, which can be customized with the focus:ring-color utility class. */}
<button className="mx-auto h-[39px] w-full rounded-[2px] bg-[#FB2E86] font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] lg:mx-0 lg:w-[135px]">
{label}
</button>
</div>
);
}

export default Button;
