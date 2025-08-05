import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-700 text-white py-10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto my-6 flex items-center justify-center">
        <div aria-label="Apply Digital logo">
          <Logo />
        </div>
      </div>
    </footer>
  );
}
