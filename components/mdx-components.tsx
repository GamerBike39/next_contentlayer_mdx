import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import UnderlineVagueSvg from "./ui/specialWords/Underline_Vague";
import CircleText from "./ui/specialWords/CircleText";
import RedLine from "./ui/specialWords/RedLine";

const components = {
  UnderlineVagueSvg,
  CircleText,
  RedLine,
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
