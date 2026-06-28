import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { assets, projects } from "@/lib/assets";

function ProjectCard({
  category,
  title,
  date,
}: {
  category: string;
  title: string;
  date: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={assets.printGo}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-8">
        <div>
          <p className="text-lg text-gray-400">{category}</p>
          <h3 className="text-4xl font-semibold text-white md:text-5xl">{title}</h3>
          <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm text-gray-300">
            {date}
          </span>
        </div>
        <button
          type="button"
          aria-label={`View ${title}`}
          className="flex size-20 items-center justify-center rounded-2xl border border-white/20 transition hover:bg-white/10"
        >
          <ArrowUpRight className="size-8 text-white" />
        </button>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-16 flex items-center justify-center gap-8 rounded-3xl border border-white/5 bg-white/5 px-6 py-12">
        <h2 className="text-6xl font-medium tracking-tight text-white/80 md:text-8xl">
          Selected
        </h2>
        <span className="size-8 shrink-0 rounded-full bg-[#ff4d00] shadow-[0_0_30px_rgba(255,77,0,0.6)]" />
        <h2 className="text-6xl font-medium tracking-tight text-white md:text-8xl">work</h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <ProjectCard key={`${project.title}-${i}`} {...project} />
        ))}
      </div>
    </section>
  );
}
