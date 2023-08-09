import SVGHoverAnimation from "@/components/ui/Sounds/hover_sound_button/HoverSoundButton";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface projectsProps {}

const projectsData = [
  {
    title: "Pop Code",
    content:
      "Jeu de cherche et trouve où le but est de retrouver les langages de programmations cachés dans l'image",
    technologies: ["Javascript", "CSS"],
    link: "/popcode",
    picture: "/blog-post-1.jpg",
  },
  {
    title: "Mont Poupet Bike Park",
    content: "Site vitrine pour le bike park du Mont Poupet",
    technologies: ["NextJS", "Typescript", "TailwindCSS", "MDX"],
    link: "/mpbp",
    picture: "/blog-post-2.jpg",
  },
  {
    title: "Breadit",
    content: "mini-clone de Reddit",
    technologies: [
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "Redis",
      "PlanetScale",
      "Prisma",
    ],
    link: "/breadit",
    picture: "/blog-post-3.jpg",
  },
  {
    title: "ACSCape",
    content: "Escape Game",
    technologies: ["PHP", "Javascript", "Bootstrap", "MySQL"],
    link: "/acscape",
    picture: "/blog-post-4.jpg",
  },
];

const Projects: FC<projectsProps> = ({}) => {
  return (
    <div id="projets" className="w-full flex flex-col items-center gap-10">
      <div>
        <h2
          className={`text-clamp3xl font-bold relative flex justify-center h-fit w-full`}
        >
          Projets
        </h2>
        <h3 className="text-foreground/50 text-xl text-right">
          Quelques projets réalisés
        </h3>
        <p className="text-[10px] text-foreground/40">
          Listes non exhaustive 😅
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-center gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full h-full grid grid-cols-5 gap-10 px-3 border rounded-md shadow-md relative"
          >
            <Image
              src="noise/noise.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover -z-10"
            />
            <div className="col-span-5 lg:col-span-2 h-full py-10 items-center grid">
              <div>
                <h3 className="text-foreground text-3xl">{project.title}</h3>
                <p className="text-xl text-foreground/60 my-3">
                  {project.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Link
                      href={`/posts?tag=${tech}`}
                      key={index}
                      className="hover:border-gray-700 dark:hover:border-white border bg-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md px-2 py-1 text-xs font-medium text-gray-900 dark:text-gray-100 no-underline cursor-pointer"
                    >
                      {tech}
                    </Link>
                  ))}
                </div>

                <Link href={project.link}>
                  <Button className="flex w-full mt-3" size={"sm"}>
                    <SVGHoverAnimation text="Consulter" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-span-5 lg:col-span-3 h-64 lg:h-full w-full relative">
              <Image
                src={project.picture}
                alt={project.title}
                fill
                className="object-contain rounded-lg py-3"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
