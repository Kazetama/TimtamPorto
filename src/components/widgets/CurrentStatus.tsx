import * as React from "react";

export function CurrentStatus() {
  return (
    <div className="col-span-1 border border-border md:col-span-4 bg-card rounded-2xl p-8 min-h-[300px] flex flex-col hover:border-zinc-500 transition-colors">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-auto">Current Status</h3>
      <div className="flex items-center gap-3">
         <div className="relative flex h-4 w-4">
           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
           <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
         </div>
         <p className="text-card-foreground font-medium text-lg">Available for work</p>
      </div>
    </div>
  );
}
