"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3 text-zinc-400">
          <div className="w-[18px] h-[18px]"></div>
          <span className="text-[14px] font-medium text-foreground">Theme</span>
        </div>
      </div>
    );
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center gap-3">
        <HugeiconsIcon icon={isDark ? Moon02Icon : Sun01Icon} className="w-[18px] h-[18px] text-zinc-400" />
        <span className="text-[14px] font-medium text-foreground">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
      
      {/* Custom Switch Toggle */}
      <div 
        className={`w-[34px] h-[20px] rounded-full flex items-center px-[2px] cursor-pointer transition-colors ${isDark ? "bg-white" : "bg-black"}`}
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <div 
          className={`w-4 h-4 rounded-full transition-transform ${isDark ? "bg-black translate-x-3.5" : "bg-white translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
}
