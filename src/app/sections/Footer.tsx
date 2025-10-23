import { MapPin } from "lucide-react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer id="contact" className="bg-[#d6d3b1ff] border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Imagine Monkeys</h3>
            <p className="text-muted-foreground mb-4">
              Building scalable software for a connected world.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Philippines</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="mb-4">
              <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <IoLogoGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <IoLogoFacebook className="w-5 h-5" />
              </a>
            </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Email</h4>
              <div className="flex">
                <a href="mailto:hnzlencore@gmail.com?subject=Inquiring Monkey">hanzel.mamarungkas09@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border border-t-black text-center text-muted-foreground">
          <p>© {currentYear} Imagine Monkeys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
