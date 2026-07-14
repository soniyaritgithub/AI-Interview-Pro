import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070B16]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 xl:grid-cols-[1.2fr_1.6fr_1fr]">
          <FooterBrand />

          <FooterLinks />

          <FooterNewsletter />
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        <FooterBottom />
      </div>
    </footer>
  );
}