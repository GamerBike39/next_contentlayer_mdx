interface underlineSvgProps {
  color?: string;
  className?: string;
  text: string;
}

const UnderlineVagueSvg = ({ color, text, className }: underlineSvgProps) => {
  return (
    <span className="relative w-fit inline-block">
      <strong>{text}</strong>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 114 7"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 w-full h-2.5"
      >
        <path
          strokeLinecap="round"
          strokeWidth="2"
          stroke={color ? color : "hsl(50deg 100% 50%)"}
          d="M1 2l4.935 1.763c1.261.45 2.669.133 3.615-.813v0a3.464 3.464 0 014.9 0l.8.8a4.596 4.596 0 006.5 0v0a4.596 4.596 0 016.5 0l.75.75a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0v0a3.536 3.536 0 015 0v0a3.536 3.536 0 005 0l.285-.285a3.938 3.938 0 014.872-.555l1.988 1.243A6.885 6.885 0 0098 5.157l2.454-1.291a11.712 11.712 0 017.49-1.17l4.555.804"
        ></path>
      </svg>
    </span>
  );
};

export default UnderlineVagueSvg;
