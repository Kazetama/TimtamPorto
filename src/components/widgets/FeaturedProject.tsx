import * as React from "react";

export function FeaturedProject() {
  return (
    <div className="col-span-1 border border-border md:col-span-8 bg-card rounded-2xl p-8 min-h-[300px] flex flex-col justify-end relative overflow-hidden group hover:border-zinc-500 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-50 dark:from-[#111111] dark:to-[#1e1e1e]"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-card-foreground mb-2">Featured Project</h3>
        <p className="text-muted-foreground">Timtam Porto v2.0 - A dark mode visual journey.</p>
      </div>
    </div>
  );
}
