import GoogleButton from './components/GoogleButton';
export default function SignInPage() {
  return (
    <div className="container mx-auto text-center">
      <h1>Sign In</h1>
      <div className="mt-10">
        <GoogleButton />
      </div>
    </div>
  );
}
