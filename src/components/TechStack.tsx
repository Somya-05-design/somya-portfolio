import { Coffee, Sun } from "lucide-react";
import { techStack } from "@/lib/assets";

const icons = [Sun, Coffee];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24">
      <h2 className="mb-16 text-center text-6xl font-medium tracking-tight text-white md:text-8xl">
        Tech Stack
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {techStack.map((tech, i) => {
          const Icon = icons[i] ?? Sun;
          return (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-3xl font-medium text-white">{tech.name}</h3>
              <div className="flex size-20 items-center justify-center">
                <Icon className="size-16 text-[#ff4d00]" strokeWidth={1.25} />
              </div>
              <p className="text-center text-sm text-gray-400">{tech.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
