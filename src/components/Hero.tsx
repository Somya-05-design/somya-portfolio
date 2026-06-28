import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { assets } from "@/lib/assets";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-32 pt-16">
      <div className="relative mb-16 w-full max-w-sm">
        <div className="relative aspect-square overflow-hidden rounded-sm shadow-2xl">
          <Image
            src="/images/1000000281.png"
            alt="Somya Tanwar"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <p className="font-signature absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-7xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] md:text-8xl">
          Somya
        </p>
      </div>

      <div className="mt-20 space-y-2 text-center text-lg text-gray-400">
        <p>
          Hi, I&apos;m <span className="font-medium text-white">Somya Tanwar</span>,
        </p>
        <p>
          Working as <span className="font-medium text-white">Web-designer</span> and{" "}
          <span className="font-medium text-white">Developer</span>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="flex items-center gap-3 rounded-full bg-[#2a2a2a] py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-[#333]"
        >
          Contact Me
          <span className="flex size-8 items-center justify-center rounded-full bg-white text-black">
            <ArrowUpRight className="size-4" />
          </span>
        </a>
        <a
          href="#"
          className="rounded-full border border-gray-600 px-8 py-3 text-sm font-medium text-white transition hover:border-gray-400"
        >
          See My Resume
        </a>
      </div>
    </section>
  );
}
