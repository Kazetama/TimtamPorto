import * as React from "react";

export function TechStack() {
  return (
    <div className="col-span-1 border border-border md:col-span-4 bg-card rounded-2xl p-8 min-h-[250px] hover:border-zinc-500 transition-colors">
       <h3 className="text-xl font-bold text-card-foreground mb-2">Tech Stack</h3>
       <p className="text-muted-foreground">Next.js, Tailwind CSS, TypeScript, Figma, UI/UX.</p>
    </div>
  );
}
