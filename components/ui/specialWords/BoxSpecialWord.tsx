interface BoxSpecialWordProps {
  text: string;
}

const BoxSpecialWord = ({ text }: BoxSpecialWordProps) => {
  return (
    <span className="inline-block bg-[#002f3c] rounded-sm -rotate-3 hover:rotate-0 transition-all px-2 text-[#fdf767] border-[#fdf76795] border font-semibold tracking-wider max-w-fit hover:text-white">
      {text}
    </span>
  );
};

export default BoxSpecialWord;
