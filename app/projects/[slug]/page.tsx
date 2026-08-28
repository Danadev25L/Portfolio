import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Layers3 } from "lucide-react";
import TokopediaCaseStudy from "@/components/projects/TokopediaCaseStudy";
import { getProject, PROJECTS } from "@/data/projects";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const title = `${project.title} — Dana Bestun`;

  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      images: [],
    },
    twitter: {
      card: "summary",
      title,
      description: project.description,
      images: [],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative z-10 min-h-screen overflow-hidden pb-28 pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[680px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-700/20 via-blue-700/10 to-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-white">
          <ArrowLeft size={17} /> All projects
        </Link>

        <section className="grid gap-12 pb-24 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{project.eyebrow}</p>
            <h1 className="max-w-4xl bg-gradient-to-r from-white via-white to-cyan-300 bg-clip-text text-5xl font-bold leading-[1.05] text-transparent sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-gray-300">{project.description}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#080818] transition hover:-translate-y-0.5">
                  Open production <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,#172554_0%,#0b0b21_62%)] p-8 shadow-2xl shadow-purple-950/30">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(34,211,238,.08),transparent_70%)]" />
            {project.images?.length ? (
              <div className="relative grid w-full grid-cols-3 gap-4">
                {project.images.map((image) => (
                  <figure key={image.label} className="flex flex-col items-center gap-4">
                    <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] p-4">
                      <Image src={image.src} alt={`${project.title} ${image.label} app`} width={220} height={220} className="h-auto w-full object-contain" />
                    </div>
                    <figcaption className="text-sm font-semibold text-gray-300">{image.label}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <Image src={project.src} alt={project.title} width={760} height={500} priority className="relative max-h-[430px] w-auto max-w-full object-contain" />
            )}
          </div>
        </section>

        <section className="mb-28 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-3">
          {[
            ["Role", project.role],
            ["Scope", project.engagement],
            ["Status", project.year],
          ].map(([label, value], index) => (
            <div key={label} className={`p-6 md:p-8 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </section>

        <section className="mb-28 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">Overview</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">The product story</h2>
          </div>
          <p className="text-xl leading-9 text-gray-300">{project.overview}</p>
        </section>

        {project.slug === "tokopedia-seller-platform" && <TokopediaCaseStudy />}

        {project.slug !== "tokopedia-seller-platform" && (
          <div className="space-y-28">
            <section>
              <div className="flex items-center gap-3 text-cyan-300"><Layers3 size={20} /><p className="text-xs font-semibold uppercase tracking-[0.28em]">Core capabilities</p></div>
              <h2 className="mt-5 max-w-3xl text-3xl font-bold md:text-5xl">What the product brings together.</h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.capabilities.map((capability, index) => (
                  <div key={capability} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="text-xs font-bold text-cyan-300">0{index + 1}</span>
                    <p className="mt-6 text-lg font-semibold text-white">{capability}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-purple-300/15 bg-purple-950/20 p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-purple-300">My contribution</p>
                <h2 className="mt-4 text-3xl font-bold">Work delivered</h2>
                <div className="mt-8 space-y-5">
                  {project.contributions.map((item) => (
                    <div key={item} className="flex gap-4 text-gray-300"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-400/15 text-purple-300"><Check size={14} /></span><p className="leading-7">{item}</p></div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-300/15 bg-cyan-950/20 p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-300">Product outcome</p>
                <h2 className="mt-4 text-3xl font-bold">What changed</h2>
                <div className="mt-8 space-y-5">
                  {project.outcomes.map((item) => (
                    <div key={item} className="flex gap-4 text-gray-300"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300"><Check size={14} /></span><p className="leading-7">{item}</p></div>
                  ))}
                </div>
              </div>
            </section>

            {project.videoSrc && (
              <section>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Product walkthrough</p>
                <video controls className="w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              </section>
            )}
          </div>
        )}

        <section className="mt-28 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-purple-900/35 to-cyan-900/25 p-8 text-center md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Next case study</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Explore the full collection.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">More product work across AI, commerce, delivery, payments, internal systems, and Kurdish digital experiences.</p>
          <Link href="/projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#080818] transition hover:-translate-y-0.5">All projects <ArrowUpRight size={17} /></Link>
        </section>
      </div>
    </main>
  );
}
