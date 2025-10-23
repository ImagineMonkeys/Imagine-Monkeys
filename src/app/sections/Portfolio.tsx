import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import webpatrolImg from "@/assets/webframes.png";
import mobilepatrolImg from "@/assets/deviceframes.png";
import SplitText from "@/components/SplitText";

const projects = [
  {
    title: "Patrol Web Dashboard",
    subtitle: "Attendance Monitoring System for Deployed Personnel",
    description: "A web dashboard built with Vue.js and Python Flask for monitoring attendance of deployed personnel.",
    image: webpatrolImg,
    techStack: ["Vue.js", "Python Flask", "MySQL"],
    outcome: "Enabled real-time attendance tracking and centralized reporting for management.",
    rating: null
  },
  {
    title: "Patrol Mobile App",
    subtitle: "Attendance Logging and Tracking App for Deployed Personnel",
    description: "A mobile app built with React Native for logging and tracking attendance of deployed personnel.",
    image: mobilepatrolImg,
    techStack: ["React Native", "Python Flask", "MySQL"],
    outcome: "Improved field personnel attendance accuracy and streamlined data syncing with the web dashboard.",
    rating: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-[#d6d3b1ff] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SplitText
                text="Our Work"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                tag="h2"
                splitType='words'
            />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of our featured projects — built with dedication, creativity, and clean code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary text-sm font-semibold">{project.subtitle}</p>
                  </div>
                  {project.rating && (
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{project.rating}</span>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm">
                    <span className="font-semibold">Outcome: </span>
                    <span className="text-muted-foreground">{project.outcome}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
