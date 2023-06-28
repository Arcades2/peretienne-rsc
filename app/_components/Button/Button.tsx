import React from 'react';
import { twMerge } from 'tailwind-merge';

const bgRx = /bg-([^\s]+)-(\d+)/g;

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const shouldDarkText =
    props.className?.includes('bg-white') ||
    Array.from(props.className?.matchAll(bgRx) ?? []).some(([, , shade]) => {
      return Number(shade) <= 400;
    });

  return (
    <button
      type="button"
      {...props}
      className={twMerge(
        'bg-teal-400 px-2 py-1 text-sm font-bold uppercase',
        `inline-flex
          flex-initial items-center
          justify-center gap-1.5
          whitespace-nowrap rounded-md bg-opacity-95
          shadow-sm transition duration-100
          ease-out hover:bg-opacity-100
          `,
        shouldDarkText ? 'text-balck dark:text-white' : 'text-white',
        props.disabled ? 'opacity-50 cursor-not-allowed' : '',
        props.className,
      )}
    />
  );
}
