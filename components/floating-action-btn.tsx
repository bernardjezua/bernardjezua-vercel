"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function FloatingActionButton() {
  return (
    <Button
      aria-label="Scroll to Top"
      variant="default"
      size="icon"
      onClick={() => {
        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-8 right-8 rounded-full shadow-md p-3 z-50">
      <ArrowUp size={20} />
    </Button>
  );
}

