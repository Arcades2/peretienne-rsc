import "./globals.css";
import { Fira_Code } from "next/font/google";
import classNames from "classnames";
import Link from "next/link";
import ProgressIndicator from "@/app/_components/ProgressIndicator";
import Providers from "./Providers";
import SigninButton from "@/app/_components/SigninButton";
import NavLink from "@/app/_components/NavLink";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Etienne Peret - Web developer",
  description: "Etienne Peret - Web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          firaCode.className,
          "bg-slate-900 pb-8 min-h-screen",
        )}
      >
        <Providers>
          <div className=" mb-8 sticky top-0 bg-slate-900">
            <div className="p-2">
              <div className="container mx-auto flex justify-between">
                <div className="flex gap-2">
                  <NavLink path="/">Home</NavLink>
                  <span>|</span>
                  <NavLink path="/cv">CV</NavLink>
                  <span>|</span>
                  <NavLink path="/til">Today I Learned</NavLink>
                </div>
                <div>
                  <SigninButton />
                </div>
              </div>
            </div>
            <ProgressIndicator />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
