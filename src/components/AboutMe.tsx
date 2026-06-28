export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <div className="flex gap-12">
        <div className="flex shrink-0 items-start gap-2 pt-20">
          <span className="mt-2 size-1 rounded-full bg-gray-400" />
          <span className="text-sm text-gray-400">About Me</span>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-medium leading-tight text-white md:text-5xl">
            Behind every great design
            <br />
            is an even greater story
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-gray-400">
            Every design has a starting point, and for truly impactful visuals. It&apos;s the
            narrative that guides the creative process, ensuring the final product resonates
            with meaning and purpose. We believe that understanding the story is paramount.
          </p>
        </div>
      </div>
    </section>
  );
}
