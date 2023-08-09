"use client";
import { ArrowUp } from "lucide-react";
import { FC } from "react";

interface toTopProps {}

const ToTop: FC<toTopProps> = ({}) => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ArrowUp
        className="w-10 h-10 fixed bottom-5 right-5 z-50 cursor-pointer"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ToTop;
