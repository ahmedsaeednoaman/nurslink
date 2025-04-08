// src/lib/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and twMerge for optimal class handling
 * 
 * @param {...ClassValue[]} inputs - Array of class values to merge
 * @returns {string} - Merged and optimized Tailwind CSS classes
 * 
 * @example
 * // Basic usage
 * cn('px-2', 'py-4') // => 'px-2 py-4'
 * 
 * // Conditional classes
 * cn('text-red-500', isActive && 'font-bold') // => 'text-red-500 font-bold' (if isActive is true)
 * 
 * // Object syntax
 * cn({ 'bg-blue-500': isPrimary, 'bg-gray-500': !isPrimary }) 
 * 
 * // Array syntax
 * cn(['px-4', 'py-2'], ['text-center'])
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
