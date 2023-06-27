'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@/app/_components/Button';

export default function SigninButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  if (!session) {
    return <Button onClick={() => signIn()}>Sign in</Button>;
  }

  return (
    <div className="flex gap-2 items-baseline">
      <span>Connected as {session.user?.name}</span>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
