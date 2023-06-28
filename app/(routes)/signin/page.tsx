import { Suspense } from 'react';
import GoogleButton from '@/app/_components/GoogleButton';

export default function SignInPage() {
  return (
    <div className="container mx-auto text-center">
      <h1>Sign In</h1>
      <div className="mt-10">
        <Suspense fallback={null}>
          <GoogleButton />
        </Suspense>
      </div>
    </div>
  );
}
