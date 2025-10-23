import { Card } from "@/components/Card";
import { Code2, Server, Smartphone, Database, Cloud } from "lucide-react";
import SplitText from "@/components/SplitText";

const techCategories = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "Vue", "TailwindCSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Ruby on Rails", "Django", "Laravel", "Rust", "Go" ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter", "React Native", "Swift", "Native Android"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "GitHub Actions", "Kubernetes", "DigitalOcean"],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 sm:py-32 bg-card/30 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SplitText
                text="Our Technology Stack"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2"
                tag="h2"
                splitType='words'
            />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use modern, reliable technologies to deliver fast, secure, and scalable products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="border-border p-6 text-center group hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-[#d6d3b1ff] group-hover:text-primary-foreground transition-colors duration-300 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
