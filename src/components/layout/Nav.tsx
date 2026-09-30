"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main" className="hidden lg:block">
    <ul className="flex items-center gap-1">
      {mainNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                active ? "bg-surface text-ink" : "text-muted hover:bg-surface hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
    </nav>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu after navigation (state derived from props, no effect needed).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="grid size-11 place-items-center rounded-full text-ink hover:bg-surface"
      >
        <Icon name={open ? "close" : "menu"} className="size-6" />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        // The header uses backdrop-filter, which makes it the containing block for
        // this fixed panel — so height is set explicitly instead of bottom: 0.
        className="fixed inset-x-0 top-[4.25rem] z-40 h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-line bg-white"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-6">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 font-display text-lg font-semibold",
                      active ? "text-accent-600" : "text-ink",
                    )}
                  >
                    {item.label}
                    <Icon name="arrow-right" className="size-5 text-muted" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/practice-exams" className={buttonClasses("primary", "lg", "mt-8 w-full")}>
            Explore Practice Exams
          </Link>
        </nav>
      </div>
    </div>
  );
}
