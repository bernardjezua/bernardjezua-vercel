"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function FloatingActionButton() {
  return (
    <Button
      aria-label="Scroll to Top"
      onClick={() => {
        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-8 right-8 w-10 h-10 p-0 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-50 group"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
    </Button>
  );
}

