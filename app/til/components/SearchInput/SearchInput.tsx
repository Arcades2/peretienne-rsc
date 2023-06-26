'use client';

import { startTransition } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  };

  return (
    <input
      className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent text-rose-500 font-bold"
      type="text"
      placeholder="Search for posts..."
      defaultValue={searchParams.get('q') ?? ''}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
