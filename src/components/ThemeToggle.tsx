"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const renderIcon = () => {
    if (theme === "light") return <Sun className="h-5 w-5" />;
    if (theme === "dark") return <Moon className="h-5 w-5" />;
    return <Laptop2 className="h-5 w-5" />;
  };

  return (
    <DropdownMenu>
      {/* <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {renderIcon()}
        </Button>
      </DropdownMenuTrigger> */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-blue-700 dark:hover:bg-blue-900 rounded-full transition-colors duration-200"
        >
          {renderIcon()}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-[#F8F8F8] text-gray-900">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop2 className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
