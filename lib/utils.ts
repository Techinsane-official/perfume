import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for conditional class names
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the base URL for client-side API calls
 * Safe for SSR - returns consistent value on server and client
 */
export function getBaseUrl(): string {
  // Always return the environment variable to prevent hydration mismatches
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

/**
 * Create a full API URL for client-side fetches
 */
export function getApiUrl(path: string): string {
  const baseUrl = getBaseUrl();
  return `${baseUrl}${path}`;
}

/**
 * Safely serialize a date for client-side rendering
 * This prevents hydration mismatches by ensuring consistent date formatting
 */
export function serializeDate(date: Date): string {
  return date.toISOString();
}

/**
 * Format a date string for display on the client side
 * This should only be called on the client to prevent hydration mismatches
 */
export function formatDateForDisplay(dateString: string): string {
  // Use a consistent locale to prevent hydration mismatches
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Check if we're on the client side
 * Safe for SSR - returns false on server, true on client after hydration
 */
export function isClient(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return true;
}
