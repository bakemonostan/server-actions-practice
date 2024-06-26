import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="bg-white shadow-lg p-4">
      <nav className="flex justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-3xl font-extrabold uppercase">
            <Link href="/">Logo</Link>
          </p>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
          <div>
            <Button>
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
