"use client";

import { SITE, NAV_LINKS, DISCLOSURE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-gradient text-lg font-bold">{SITE.name}</span>
            <p className="mt-3 text-sm text-muted">{SITE.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              Disclaimer
            </h4>
            <p className="text-xs leading-relaxed text-muted/60">
              {DISCLOSURE} This site is not affiliated with, endorsed by, or
              connected to Immutable Pty Ltd. All trademarks belong to their
              respective owners.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-muted/40">
            &copy; {new Date().getFullYear()} {SITE.name} &mdash; An
            independent community page
          </p>
        </div>
      </div>
    </footer>
  );
}
