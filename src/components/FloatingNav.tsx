"use client";

import {
  Briefcase,
  Home,
  Mail,
  User,
  Wrench,
} from "lucide-react";

const links = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "work", icon: User, label: "Work" },
  { id: "about", icon: Wrench, label: "About" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function FloatingNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-8 top-28 z-50 flex flex-col gap-4 rounded-full border border-white/10 bg-transparent p-2.5">
      {links.map(({ id, icon: Icon, label }, i) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          onClick={() => scrollTo(id)}
          className={`flex size-10 items-center justify-center rounded-full transition-colors ${i === 0
            ? "bg-white text-black shadow-lg"
            : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
        >
          <Icon className="size-[18px]" strokeWidth={1.5} />
        </button>
      ))}
    </nav>
  );
}
