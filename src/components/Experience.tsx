import { experiences } from "@/lib/assets";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 pb-16">
      <div className="mb-20 flex gap-12">
        <div className="flex shrink-0 items-start gap-2 pt-14">
          <span className="mt-2 size-1 rounded-full bg-gray-400" />
          <span className="text-sm text-gray-400">Quote</span>
        </div>
        <h2 className="text-3xl font-medium leading-tight text-white md:text-4xl">
          Behind Every Smooth UI There is a
          <br />
          thousand lines of code and{" "}
          <span className="text-[#777]">thoughtful</span>
          <br />
          <span className="text-[#777]">decisions.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="border-b border-white/10 pb-8"
          >
            <p className="mb-1 text-sm text-gray-400">{item.company}</p>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-wide text-white">
                {item.role}
              </h3>
              <span className="shrink-0 rounded-full border border-white/5 bg-white/5 px-5 py-1.5 text-xs text-gray-300">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
