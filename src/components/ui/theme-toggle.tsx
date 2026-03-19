"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Changer le thème"
      className="inline-flex cursor-pointer items-center justify-center rounded-md px-2 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Sun className="h-7 w-7 scale-100 rotate-0 transition-all sm:h-5 sm:w-5 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-7 w-7 scale-0 rotate-90 transition-all sm:h-5 sm:w-5 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
