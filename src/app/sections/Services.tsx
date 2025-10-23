import { Card } from "@/components/Card";
import { Monitor, Smartphone, Palette, Server, Wrench } from "lucide-react";
import SplitText from "@/components/SplitText";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web apps, e-commerce sites, dashboards, and content management systems built with the latest frameworks like React, Next.js, and Laravel.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform apps built with Flutter or React Native — designed for speed, reliability, and seamless UX.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "From wireframes to final prototypes, we design interfaces that are both beautiful and functional.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust backend systems and REST/GraphQL APIs powered by Node.js, Django, or Laravel — secure and scalable.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Continuous improvement, bug fixing, and technical support to keep your product running smoothly.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SplitText
                text="What We Do"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                tag="h2"
                splitType='words'
            />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you&apos;re launching a startup or modernizing enterprise software, 
            we provide full-cycle development services tailored to your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="border-border p-6 group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,211,177,0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-[rgba(214,211,177)] group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
