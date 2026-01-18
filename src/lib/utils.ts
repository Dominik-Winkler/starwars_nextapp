/* eslint-disable unicorn/prevent-abbreviations */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractPageNumber(url: string | null) {
  if (!url) return;
  try {
    const parsedUrl = new URL(url);
    const pageParam = parsedUrl.searchParams.get("page");
    return pageParam ? Number.parseInt(pageParam, 10) : undefined;
  } catch {
    return;
  }
}
