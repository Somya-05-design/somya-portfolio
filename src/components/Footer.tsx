import Image from "next/image";
import { Globe, Link2, Mail, Share2 } from "lucide-react";
import { assets } from "@/lib/assets";

const socials = [
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 pb-16 pt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="mb-8 flex items-center gap-2">
          <span className="size-1 rounded-full bg-gray-400" />
          <span className="text-xs text-gray-400">Get In Touch</span>
        </div>

        <div className="relative mb-6 size-40 overflow-hidden rounded-full border-4 border-white/10 p-1 shadow-[0_0_50px_rgba(255,77,0,0.3)]">
          <Image
            src={assets.profile}
            alt="Somya Tanwar"
            fill
            className="rounded-full object-cover"
            unoptimized
          />
        </div>

        <h3 className="text-2xl font-medium text-white">Somya Tanwar</h3>
        <p className="mb-16 text-sm text-gray-400">Developer</p>

        <div className="relative mb-16 w-full max-w-2xl">
          <p className="font-signature absolute -top-12 left-1/2 -translate-x-1/2 text-6xl text-white/90">
            Somya
          </p>
          <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 py-12 backdrop-blur-md">
            <p className="text-5xl font-medium text-white md:text-7xl">Book A Call</p>
          </div>
        </div>

        <div className="mb-8 flex gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-400">
          Copyright by <span className="font-medium text-white">Somyatanwar</span>
        </p>
      </div>
    </footer>
  );
}
