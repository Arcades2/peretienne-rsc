'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Button from '@/components/Button';
import Image from 'next/image';

export default function GoogleButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  return (
    <Button onClick={() => signIn('google', { callbackUrl })}>
      <Image alt="Google logo" width={32} height={32} src="/google-logo.png" />
      Sign in with Google
    </Button>
  );
}
