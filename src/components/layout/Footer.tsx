import Logo from "../icons/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-700 text-white py-10 mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto my-6 flex items-center justify-center">
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded-lg transition-opacity"
          aria-label="Go to homepage"
        >
          <Logo />
        </Link>
      </div>
    </footer>
  );
}
