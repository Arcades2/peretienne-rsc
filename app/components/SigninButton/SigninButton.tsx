'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '@/components/Button';

export default function SigninButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  if (!session) {
    return <Button onClick={() => signIn()}>Sign in</Button>;
  }

  return (
    <div className="flex gap-2">
      <span>Connected as {session.user?.name}</span>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
