import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import JourneyPreviewSection from './JourneyPreviewSection';
import ConversionSection from './ConversionSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const NavBar = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F4F4F5] dark:bg-[#18181B] border-b-[3px] border-[#18181B] dark:border-[#3F3F46] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Green and Purple dot logo */}
          <div className="flex items-center gap-[6px]">
             <div className="w-6 h-6 rounded-full bg-[#00E599] border-2 border-[#18181B] dark:border-[#18181B] shadow-[2px_2px_0_#18181B] dark:shadow-[2px_2px_0_#000000]"></div>
             <div className="w-6 h-6 rounded-full bg-[#8B5CF6] border-2 border-[#18181B] dark:border-[#18181B] shadow-[2px_2px_0_#18181B] dark:shadow-[2px_2px_0_#000000]"></div>
          </div>
          <span className="font-black text-2xl tracking-tight text-[#18181B] dark:text-white">PiggyPath</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold text-[#18181B] dark:text-gray-300">
          <button onClick={() => scrollTo('home')} className="hover:underline">Home</button>
          <button onClick={() => scrollTo('features')} className="hover:underline">Features</button>
          <button onClick={() => scrollTo('journey')} className="hover:underline">Journey</button>
          <button onClick={() => scrollTo('faq')} className="hover:underline">FAQ</button>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-xl transition-transform hover:-translate-y-1 bg-white dark:bg-[#27272A] text-[#18181B] dark:text-white border-[3px] border-[#18181B] dark:border-[#3F3F46] shadow-[4px_4px_0_#18181B] dark:shadow-[4px_4px_0_#000]">
            {isDark ? <Moon size={20} /> : <Sun size={20} className="text-yellow-500" />}
          </button>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/signin" className="font-bold px-5 py-2.5 rounded-xl transition-transform hover:-translate-y-1 bg-white dark:bg-[#27272A] text-[#18181B] dark:text-white border-[3px] border-[#18181B] dark:border-[#3F3F46] shadow-[4px_4px_0_#18181B] dark:shadow-[4px_4px_0_#000]">
              Sign in
            </Link>
            <Link to="/signup" className="flex items-center justify-center font-black px-6 py-2.5 rounded-xl transition-transform hover:-translate-y-1 bg-[#00E599] text-[#18181B] border-[3px] border-[#18181B] shadow-[4px_4px_0_#18181B] dark:shadow-[4px_4px_0_#000]">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div className="relative z-10 min-h-screen font-sans selection:bg-[#00E599] selection:text-[#18181B] bg-[#F4F4F5] dark:bg-[#18181B] text-[#18181B] dark:text-[#F4F4F5] transition-colors">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <JourneyPreviewSection />
        <ConversionSection />
      </main>
    </div>
  );
};

export default LandingPage;
