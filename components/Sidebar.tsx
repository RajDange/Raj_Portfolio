"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TbLayoutGrid,
  TbStack2,
  TbBriefcase,
  TbCertificate,
  TbMail,
  TbMenu2,
  TbX,
} from "react-icons/tb";

const navItems = [
  { href: "#projects", label: "projects", icon: TbLayoutGrid },
  { href: "#stack", label: "stack", icon: TbStack2 },
  { href: "#experience", label: "experience", icon: TbBriefcase },
  { href: "#certs", label: "certs", icon: TbCertificate },
  { href: "#contact", label: "contact", icon: TbMail },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4 md:hidden">
        <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123A5E] font-mono text-xs text-accent-blue">
          RD
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="text-text-secondary"
        >
          {open ? <TbX size={22} /> : <TbMenu2 size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-b border-border bg-surface px-5 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 font-mono text-sm text-text-secondary hover:text-accent-blue"
            >
              <item.icon size={16} aria-hidden />
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="fixed hidden h-screen w-[150px] flex-col gap-5 border-r border-border bg-surface px-3 py-6 md:flex">
        <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123A5E] font-mono text-xs text-accent-blue">
          RD
        </Link>
        <nav className="flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 font-mono text-[11px] text-text-secondary transition-colors hover:text-accent-blue"
            >
              <item.icon size={15} aria-hidden />
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
