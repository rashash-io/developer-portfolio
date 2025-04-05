import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

