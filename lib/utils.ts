import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class CustomError extends Error {
  cause: string;
  constructor(message: string, cause: string) {
    super(message);
    this.name = 'CustomError';
    this.cause = cause ?? 'UNKNOWN_ERROR';
  }
}

export const formatAmount = (amount: number | string) => {
  if (amount === 0) return '0';
  if (typeof amount === 'string') amount = Number(amount).toFixed(3);
  else amount.toFixed(3);
  const formattedAmount = amount.toLocaleString('en-US');
  return formattedAmount;
};

export const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
