import PillNav from '@/components/PillNav';
import logo from '@/assets/IMo-head.svg';

const Navigation = () => {

  return (
    <div className='sticky flex justify-center items-center w-full z-50 top-0 bg-transparent'>
      <PillNav
        logo={logo}
        logoAlt="Team Logo"
        items={[
          { label: 'Home', href: '#' },
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Tech Stack', href: '#tech' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
};

export default Navigation;
