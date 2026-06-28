import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 bg-black/40 px-8 py-6 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Sparkles className="size-6 text-white" strokeWidth={1.5} />
        <span className="text-xl font-semibold tracking-widest text-white">SOMYA</span>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
        <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
        <span className="text-sm text-gray-300">Available for Collab</span>
      </div>

      <span className="text-sm text-gray-300">Indore, India</span>
    </header>
  );
}
