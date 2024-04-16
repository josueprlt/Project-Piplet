import { cva } from "class-variance-authority";
 
// Base definition
const base = "text-white text-center mt-2 hover:cursor-pointer"
 
const button = cva(base, {
  variants: {
    intent: {
      free: [
        "bg-clrButtonBg",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-clrButtonBgHover",
      ],
      sub: [
        "bg-clrButtonBg",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-clrButtonBgHover",
      ],
      rent: [
        "bg-clrButtonBg",
        "p-2",
        "rounded-md",
        "font-bold",
        "hover:bg-clrButtonBgHover",
      ],
      simple: [
 
      ],
    },
    border : {
      none: [""],
      solid: ["border-2", "border-white"]
    }
  }
});
 
 
 
export default function Button({ intent, border, className, ...rest }) {
  return <button {...rest} className={button({ intent, border, className })} />;
}