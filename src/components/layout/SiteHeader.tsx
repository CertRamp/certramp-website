import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { DesktopNav, MobileNav } from "./Nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" className="-m-1 rounded-lg p-1" aria-label="CertRamp Learning — home">
          <Logo />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/practice-exams">Explore Practice Exams</ButtonLink>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
