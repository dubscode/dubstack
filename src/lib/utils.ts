import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
