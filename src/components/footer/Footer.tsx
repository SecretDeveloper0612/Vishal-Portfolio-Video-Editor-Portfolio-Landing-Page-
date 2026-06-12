export default function Footer() {
  const links = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Behance", href: "#" },
  ];

  return (
    <footer className="bg-background pt-24 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-heading tracking-widest uppercase text-foreground mb-4">
              VISHAL VERMA
            </h2>
            <p className="text-muted-foreground font-sans text-sm uppercase tracking-widest max-w-xs mx-auto md:mx-0">
              Cinematic Video Editor & Motion Designer based in New York.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 w-full md:w-auto md:flex md:gap-16 text-left">
            <div>
              <h4 className="text-foreground font-heading tracking-wider uppercase mb-6">Navigation</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors font-sans text-sm uppercase tracking-wider">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-heading tracking-wider uppercase mb-6">Socials</h4>
              <ul className="space-y-4">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a href={social.href} className="text-muted-foreground hover:text-accent transition-colors font-sans text-sm uppercase tracking-wider">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex justify-center md:justify-between items-center gap-4 text-center">
          <p className="text-muted-foreground font-sans text-xs uppercase tracking-widest w-full md:w-auto">
            © 2026 Vishal Verma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
