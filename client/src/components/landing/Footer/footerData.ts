export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const productLinks: FooterLink[] = [
  {
    label: "AI Mock Interviews",
    href: "#",
  },
  {
    label: "Resume Analyzer",
    href: "#",
  },
  {
    label: "ATS Score",
    href: "#",
  },
  {
    label: "Coding Practice",
    href: "#",
  },
  {
    label: "Analytics Dashboard",
    href: "#",
  },
];
export const companyLinks: FooterLink[] = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Careers",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
export const resourceLinks: FooterLink[] = [
  {
    label: "Documentation",
    href: "#",
  },
  {
    label: "Help Center",
    href: "#",
  },
  {
    label: "Community",
    href: "#",
  },
  {
    label: "Interview Guide",
    href: "#",
  },
];
export const legalLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
  {
    label: "Cookies",
    href: "#",
  },
  {
    label: "Security",
    href: "#",
  },
];
export const footerLinks: FooterSection[] = [
  {
    title: "Product",
    links: productLinks,
  },
  {
    title: "Company",
    links: companyLinks,
  },
  {
    title: "Resources",
    links: resourceLinks,
  },
  {
    title: "Legal",
    links: legalLinks,
  },
];