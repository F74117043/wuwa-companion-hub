"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@/hooks/use-disclosure";
import { navigationItems } from "@/lib/navigation";

export function Navbar() {
  const pathname = usePathname();
  const menu = useDisclosure();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={menu.close}>
          <span className="grid size-10 place-items-center border border-cyan-300/50 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_40px_rgba(102,242,255,0.18)]">
            W
          </span>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Wuwa Hub
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-semibold transition ${
                  active ? "text-cyan-200" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menu.isOpen}
          onClick={menu.toggle}
          className="grid size-10 place-items-center border border-white/15 bg-white/5 text-white transition hover:border-cyan-300 hover:text-cyan-200 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                menu.isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${
                menu.isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                menu.isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menu.isOpen ? (
        <nav className="border-t border-white/10 bg-[#05070d]/95 px-6 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigationItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={menu.close}
                  className={`border px-4 py-3 text-sm font-bold transition ${
                    active
                      ? "border-cyan-300/45 bg-cyan-300/10 text-cyan-200"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
