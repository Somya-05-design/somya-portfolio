"use client";

import LineWaves from "@/components/LineWaves";

export default function BackgroundCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <LineWaves
        speed={0.25}
        innerLineCount={30}
        outerLineCount={30}
        warpIntensity={0.8}
        rotation={-45}
        edgeFadeWidth={0.1}
        colorCycleSpeed={0.5}
        brightness={0.15}
        color1="#ff4d00"
        color2="#c85014"
        color3="#e07a5f"
        enableMouseInteraction={true}
        mouseInfluence={4}
      />
    </div>
  );
}
