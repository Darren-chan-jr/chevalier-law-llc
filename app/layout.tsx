import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin} from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Chevalier Law LLC",
  description: "Chevalier Law LLC — Singapore law firm",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        {/*Navbar*/}
        <Navbar />
        <main id="main-content">{children}</main>
        {/* Footer*/}
        <footer className="bg-gradient-to-r from-brand to-brand-light text-white text-sm">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand + short description + socials */}
              <div>
                <div className="flex items-center gap-2">
                  <Image src="/chevalier_law_white.png" alt="Chevalier Law LLC" width={28} height={28} />
                  <span className="font-semibold">Chevalier Law LLC</span>
                </div>
                <p className="mt-3 text-white/80">"Short Description Here"</p>
                <div className="mt-4 flex items-center gap-3">
                  <Link href="https://www.linkedin.com/company/chevalierlawllc" aria-label="LinkedIn" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                    <Linkedin size={16} />
                  </Link>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-semibold">Links</h4>
                <ul className="mt-3 space-y-2 text-white/80">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/people" className="hover:text-white">People</Link></li>
                  <li><Link href="/practice-areas" className="hover:text-white">Practice Areas</Link></li>
                  <li><Link href="/insights" className="hover:text-white">Knowledge &amp; Insights</Link></li>
                </ul>
              </div>

              {/* Find Us */}
              <div>
                <h4 className="font-semibold">Find Us</h4>
                <ul className="mt-3 space-y-1 text-white/80">
                  <li>112 Robinson Road #04-02</li>
                  <li>Singapore 068902</li>
                  <li className="mt-2">T: +65 6980 8710</li>
                  <li>F: +65 6980 8906</li>
                  <li>
                    E: <a href="mailto:info@chevalierlawllc.com" className="hover:text-white">info@chevalierlawllc.com</a>
                  </li>
                </ul>
              </div>

              {/* Practice Areas */}
              <div>
                <h4 className="font-semibold">Practice Areas</h4>
                <ul className="mt-3 space-y-2 text-white/80">
                  {practiceAreas.slice(0, 4).map(pa => (
                    <li key={pa.slug}>
                      <Link href={`/practice-areas/${pa.slug}`} className="hover:text-white">{pa.name}</Link>
                    </li>
                  ))}
                  {/* If you want the exact four from the screenshot, replace with hardcoded items */}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center text-white/80 text-xs">
              ©Copyright Chevalier Law LLC {new Date().getFullYear()}.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}