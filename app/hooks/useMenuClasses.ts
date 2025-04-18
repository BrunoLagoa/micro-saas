'use client';

import { usePathname } from 'next/navigation';

export function useMenuClasses() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const getLinkClassName = (path: string) =>
    `${isActive(path) ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`;

  return {
    getLinkClassName,
    isActive,
  };
}
