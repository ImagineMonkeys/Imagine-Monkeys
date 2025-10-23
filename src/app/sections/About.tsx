import { Card } from "@/components/Card";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import hanzelImg from "@/assets/Hanzel.png";
import clintImg from "@/assets/Clint.png"; 
import claudioImg from "@/assets/Claudio.png";
import Image from "next/image";
import SplitText from "@/components/SplitText";

const teamMembers = [
  {
    name: "Hanzel Mamarungkas",
    role: "Front-End Developer",
    description: "Creates responsive, high-performance interfaces with Vue (Quasar), Next.js, and React Native. Skilled in TypeScript and Tailwind CSS for clean, maintainable UI design.",
    image: hanzelImg,
    socials: {
      github: "https://github.com/MMRNGKS",
      linkedin: "https://www.linkedin.com/in/hanzel-mamarungkas-49029a299",
    },
  },
  {
    name: "Clint Egargo",
    role: "Back-End Developer",
    description: "Develops secure, scalable systems using Rust, Python, and JavaScript. Experienced in Linux and focused on performance and reliability.",
    image: clintImg,
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/clintegargo",
    },
  },
  {
    name: "Claudio Daruca",
    role: "Full Stack Developer",
    description: "Builds modern web and mobile apps with VueJS (Quasar), Next.js, and React Native. Experienced in PHP, Python, and JavaScript, delivering scalable, user-focused solutions.",
    image: claudioImg,
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/daruca-claudio",
    },
  },
];

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-32 bg-[#d6d3b1ff] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <SplitText
                text="Meet The Monkeys"
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 pb-2"
                tag="h2"
                splitType='words'
            />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re a multidisciplinary group of software developers and creatives who love 
            turning ideas into real-world applications. Our mission is simple — build efficient, 
            scalable, and user-focused solutions that empower businesses to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="border-border overflow-hidden group hover:border-[#676659] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={256} // same ratio as h-64 (16rem)
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                
                <div className="flex gap-3">
                  <a 
                    href={member.socials.github} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                  >
                    <IoLogoGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.socials.linkedin} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <IoLogoLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
