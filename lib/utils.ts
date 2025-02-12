import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAppLink(): string {
  if (typeof window === "undefined") {
    return "https://app.draftai.io";
  }
  return `https://app.${window.location.hostname}`;
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    // Update URL hash without triggering scroll
    history.pushState(null, "", id);

    element.scrollIntoView({ behavior: "smooth" });
  }
}
