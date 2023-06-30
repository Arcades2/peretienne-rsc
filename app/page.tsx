import Image from 'next/image';

export const metadata = {
  title: 'Etienne Peret | Fullstack Dev',
  description: 'Etienne Peret | Fullstack Dev',
};

export default function Home() {
  return (
    <main className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
      <div className="flex flex-col justify-center items-center">
        <div className="text-right">
          <h1
            className="text-[3rem] leading-[4rem] sm:text-[7rem] sm:leading-[8rem] md:text-[10rem] md:leading-[11rem] font-bold bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 animate-[shine_25s_linear_infinite] bg-[length:200%_auto] select-none"
            style={{
              // @ts-ignore
              textFillColor: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            |- Etienne
            <br />
            Peret -|
          </h1>
        </div>
        <p className="p-2 text-center">
          💻 FullStack developer • ⚛️ React fan •{' '}
          <span className="ts-emoji">🟦</span> TS enthousiast
        </p>
        <div className="flex gap-4">
          <p className="mt-10 text-center">
            <a
              className="inline-flex flex-col items-center justify-center hover:underline"
              href="http://github.com/Arcades2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="GitHub logo"
                width={32}
                height={32}
                src="/GitHub-Mark-Light.png"
              />
              GitHub
            </a>
          </p>
          <p className="mt-10 text-center">
            <a
              className="inline-flex flex-col items-center justify-center hover:underline"
              href="https://www.linkedin.com/in/etienne-peret/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="LinkedIn logo"
                width={32}
                height={32}
                src={'/linkedin-logo.png'}
              />
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
