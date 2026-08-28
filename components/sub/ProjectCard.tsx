import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-purple-400/20 bg-[#0a0920]/90 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-950/30">
      <Link
        href={`/projects/${project.slug}`}
        className="relative flex h-60 w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#172554_0%,#0c0c24_58%)] p-5"
        aria-label={`Read the ${project.title} case study`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_25%,rgba(34,211,238,.08)_50%,transparent_75%)] opacity-0 transition duration-500 group-hover:opacity-100" />
        {project.images?.length ? (
          <div className="grid w-full grid-cols-3 gap-3">
            {project.images.map((image) => (
              <figure key={image.label} className="flex min-w-0 flex-col items-center gap-3">
                <div className="flex aspect-square w-full max-w-[124px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <Image
                    src={image.src}
                    alt={`${project.title} ${image.label} app`}
                    width={150}
                    height={150}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 768px) 28vw, 120px"
                  />
                </div>
                <figcaption className="text-center text-xs font-semibold text-gray-300">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <Image
            src={project.src}
            alt={project.title}
            width={520}
            height={300}
            className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
          {project.eyebrow}
        </p>
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
        <p className="mt-3 flex-1 leading-7 text-gray-300">{project.description}</p>

        <div className="mt-6 flex items-center border-t border-white/10 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-white transition group-hover:text-cyan-300"
          >
            View case study
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
