"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      const html = document.documentElement;
      const body = document.body;

      const previousHtmlBehavior = html.style.scrollBehavior;
      const previousBodyBehavior = body.style.scrollBehavior;

      html.style.scrollBehavior = "auto";
      body.style.scrollBehavior = "auto";

      window.scrollTo(0, 0);
      html.scrollTop = 0;
      body.scrollTop = 0;

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        html.scrollTop = 0;
        body.scrollTop = 0;

        html.style.scrollBehavior = previousHtmlBehavior;
        body.style.scrollBehavior = previousBodyBehavior;
      });
    };

    resetScroll();

    const firstFrame = requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 100);

    return () => {
      cancelAnimationFrame(firstFrame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}