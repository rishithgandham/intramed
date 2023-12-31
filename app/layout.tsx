import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intramed',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>

      <body className={inter.className + ' w-screen h-screen'}>
        <nav className="h-14 flex justify-between items-center md:px-10 px-5">
          <a href="/" className="w-1/6 ">
            <img src="/intramedlogo.png" alt="" className="w-7 h-7"></img>
          </a>
          <div className="flex p-2 items-center justify-end w-5/6 bg-transparent ">
            <NavbarLink href="/#ourmission" name="About us" />
            <NavbarLink href="/events" name="Events" />

            
          </div>
        </nav>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/1000] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        {children}

        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          async
        ></script>
      </body>
    </html>
  );
}

export interface NavigationLink {
  icon?: JSX.Element;
  href: string;
  name: string;
}

function NavbarLink({ icon, href, name }: NavigationLink) {
  return (
    <Link
      href={href}
      className="flex p-2   rounded-xl  items-center transition-all ease-in-out  m-5 hover:scale-110 hover:translate-y-1   xl:mx-10"
    >
      {icon && <p className="mr-3">{icon}</p>}
      <p className="font-semibold text-xs">{name}</p>
    </Link>
  );
}
