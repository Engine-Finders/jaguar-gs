// src/lib/blog.config.js
/**
 * Site-specific configuration for Headless CMS Blog & Lead Quote integration.
 * Tailored for Jaguar Garage UK.
 */

export const blogConfig = {
  // 1. Site Identity
  siteName: "Jaguar Garage UK",
  siteSlug: process.env.CMS_SITE_SLUG || "jaguargarage",
  siteDomain: "jaguargarage.co.uk",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://jaguargarage.co.uk").replace(/\/$/, ""),
  defaultAuthor: "Jaguar Master Technician",

  // 2. Headings & UI Copy
  copy: {
    metaTitle: "Jaguar Garage UK | Guides & Diagnostic Advice",
    metaDescription: "Specialist Jaguar servicing, repair walkthroughs, diagnostic fault codes, and independent garage guidance.",
    blogTitlePrefix: "Jaguar Garage UK",
    blogTitleAccent: "Service Guides & Insights",
    blogSubtitle: "Specialist Jaguar servicing, repair walkthroughs, diagnostic fault codes, and independent garage guidance.",
    emptyTitle: "No guides published yet",
    emptySubtitle: "Jaguar Garage UK technical articles and diagnostic guides published from the CMS will appear here.",
    readMoreText: "Read Guide",
    widgetTitle: "Instant Jaguar Service & Repair Quote",
    widgetSubtitle: "Enter your registration for fast pricing from approved Jaguar garage specialists.",
    widgetSubmitText: "Request Free Quote",
    widgetSuccessTitle: "Quote Request Received!",
    widgetSuccessSubtitle: "Our Jaguar Garage UK specialists will check stock and contact you shortly with the best pricing.",
    recentGuidesTitle: "Recent Guides",
    relatedGuidesTitle: "Related Guides",
    bottomCta: {
      enabled: true,
      badge: "Jaguar Garage Network",
      title: "Looking for an Approved Jaguar Garage?",
      subtitle: "Book professional diagnostics, servicing, or engine repairs with verified UK Jaguar specialists.",
      buttonText: "Get Free Jaguar Garage Quote »",
      buttonHref: "#sidebar-reg-input",
    },
  },

  // 3. Theme Colors
  theme: {
    fontFamily: "Arial, Helvetica, sans-serif",
    primaryColor: "#1a1a1a",
    primaryHover: "#2e2e2e",
    accentColor: "#2563eb",
    accentHover: "#1d4ed8",
    widgetBg: "#111210",
    widgetBorder: "#222320",
    widgetButtonBg: "#2563eb",
    widgetButtonHover: "#1d4ed8",
    ukBadgeBg: "#003399",
    fallbackThumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
  },
};
