import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Luckiest_GuyFont } from "@/utils/fonts";

interface footerProps {}

const footer: FC<footerProps> = ({}) => {
  const date = new Date().getFullYear();

  return (
    <div className="relative w-screen h-[40vh] flex justify-center items-end">
      <Image
        src="/bg/footer.svg"
        fill
        alt=""
        sizes="100vw"
        className="object-cover"
      />
      <h2
        className={`relative z-10 pb-10 text-clamp3xl ${Luckiest_GuyFont.className}`}
      >
        Copyright JulDev {date}
      </h2>
      <div className="flex gap-10 absolute z-10 right-[25%] lg:right-[15%] top-36">
        <div className="rotate-12 hover:scale-110 transition">
          <Link href="https://github.com/gamerbike39" target="_blank">
            <Github className="w-10 h-10 lg:w-16 lg:h-16 z-10 dark:fill-white fill-black" />
          </Link>
        </div>
        <div className="rotate-12 hover:scale-110 transition">
          <Link href="https://twitter.com/gamerbike39" target="_blank">
            <Twitter className="w-10 h-10 lg:w-16 lg:h-16 z-10 dark:fill-white fill-black" />
          </Link>
        </div>
        <div className="rotate-12 hover:scale-110 transition">
          <Link href="https://twitter.com/gamerbike39" target="_blank">
            <Linkedin className="w-10 h-10 lg:w-16 lg:h-16 z-10 dark:fill-white fill-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default footer;
