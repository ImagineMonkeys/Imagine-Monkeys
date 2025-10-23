import DotGrid from '@/components/DotGrid';
import SplitText from "@/components/SplitText";
import CircularText from '@/components/CircularText';
import CurvedLoop from '@/components/CurvedLoop';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
        <div className='absolute inset-0 z-0 h-screen'>
            <DotGrid
                dotSize={2}
                gap={15}
                baseColor="#d6d3b1ff"
                activeColor="#000000ff"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            />
        </div>

      {/* Content */}
      <CircularText
        text="🙉 IMAGINE MONKEYS 🙈 IMAGINE MONKEYS "
        onHover="speedUp"
        spinDuration={20}
        className="top-5 right-5 hidden md:flex"
      />
      <CurvedLoop marqueeText="🙉 IMAGINE MONKEYS 🙈 IMAGINE MONKEYS " className='md:hidden' curveAmount={250} />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">

        {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Building Scalable Software
          <br />
          <span className="gradient-text">for a Connected World</span>
        </h1> */}
        <div className="mb-6">
            <SplitText
                text={`Building Scalable Software\nfor a Connected World`}
                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight pb-1"
                tag="h1"
                splitType='words'
            />
        </div>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          We&apos;re a team of passionate developers, designers, and engineers crafting 
          high-quality digital products — from concept to deployment.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="group">
            <a href="#contact">
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#portfolio">View Our Work</a>
          </Button>
        </div> */}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">1 <span className="text-lg text-muted-foreground">Ongoing</span></div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold  mb-2">3</div>
            <div className="text-sm text-muted-foreground">Expert Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
