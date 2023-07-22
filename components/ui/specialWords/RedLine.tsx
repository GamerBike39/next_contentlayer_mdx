interface RedLineProps {
  text: string;
  className?: string;
}

const RedLine = ({ text, className }: RedLineProps) => {
  return (
    <span
      className={`relative w-fit inline-block  ${className ? className : ""}`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 6"
        fill="none"
        width={90}
        height={8}
        preserveAspectRatio="none"
        className="stroke-[#C02950] absolute -bottom-1 w-fit"
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M1 4.034c8 .5 15.05-2.66 25-3 8.836-.302 22.5 1.5 22.5 1.5"
        ></path>
      </svg>
    </span>
  );
};

export default RedLine;
