export const site = {
  name: "Alex Berger Consulting",
  email: "alex@berger.dk",
  mailto: "mailto:alex@berger.dk",
  githubUrl: "https://github.com/alexpberger",
  githubLabel: "github.com/alexpberger",
  linkedinUrl: "https://www.linkedin.com/in/alex-philip-berger-57a86948/",
  linkedinLabel: "LinkedIn",
  hero: {
    eyebrow: "Alex Berger Consulting",
    title: "Data & AI, taken through to production.",
    lead: "I combine consulting experience, product thinking and hands-on engineering to turn opportunities into working solutions.",
    cta: "Get in touch",
  },
  situations: {
    id: "work",
    label: "How I can help",
    items: [
      {
        verb: "Accelerate",
        object: "delivery",
        body: "Help move Data & AI initiatives forward with additional technical capacity, expertise and sustained momentum.",
      },
      {
        verb: "Build",
        object: "Data & AI solutions",
        body: "Design and build data pipelines, analytical models, applications and AI products that work in production.",
      },
      {
        verb: "Automate",
        object: "complex work",
        body: "Use AI-powered workflows and agents to automate complex, information-intensive work at scale.",
      },
    ],
  },
  introduction: {
    id: "about",
    label: "About",
    body: "I'm Alex Berger, an independent Data & AI consultant with 10+ years of experience. I've worked with organisations ranging from large financial institutions and public\u2011sector programmes to smaller and medium\u2011sized commercial teams. I combine consulting experience, product thinking and hands\u2011on software engineering to turn Data & AI opportunities into practical solutions and take them through implementation and adoption.",
  },
  credentials: {
    id: "experience",
    label: "Experience",
    items: [
      {
        title: "10+ years",
        subtitle: "Across Data, Analytics & AI",
        body: "Experience across consulting, banking, the public sector and commercial organisations.",
      },
      {
        title: "Production AI",
        subtitle: "Data to intelligent systems",
        body: "From data pipelines and machine learning to production\u2011ready applications, automation and multi\u2011agent AI systems.",
      },
      {
        title: "End-to-end delivery",
        subtitle: "Strategy through implementation",
        body: "Combining consulting, product ownership and hands\u2011on software engineering.",
      },
    ],
    certification:
      "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
  },
  contact: {
    id: "contact",
    label: "Contact",
    title: "Let's talk",
    lead: "Have a project, opportunity or idea you'd like to discuss? Get in touch at",
    follow: ", or connect with me on",
  },
  footer: {
    parts: [
      "© 2026 Alex Berger Consulting",
      "CVR 43 54 95 37",
      "Copenhagen, Denmark",
    ],
  },
  navigation: [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ],
} as const;
