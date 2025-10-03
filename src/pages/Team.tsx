import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Team = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Cursor Follower */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-lg"></div>
      </div>
      
      {/* Secondary Cursor Ring */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ease-out ${
          cursorVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-10 h-10 border-2 border-primary rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="billianceai logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">billianceai</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="https://billiance-teams-page.vercel.app/" className="text-sm text-foreground font-medium">Team</a>
              <a href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Company</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/40">
              <div className="flex flex-col gap-4 pt-4">
                <a 
                  href="/" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="https://billiance-teams-page.vercel.app/" 
                  className="text-sm text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </a>
                <a 
                  href="/#pricing" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="/#about" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Team Section */}
      <section className="py-24 bg-background pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind billianceai's innovative solutions
              </p>
            </div>

            {/* Figma Design Embed */}
            <div className="mb-16">
              <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    title="Team Figma Design"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FXkfzeoIyCWBLA6DfVEHHyz%2FUntitled%3Fnode-id%3D0-1%26t%3DVUWrvlv8KOlwEE1C-1"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Adhavan Section */}
            <div className="py-20">
              <div className="relative flex items-center justify-between">
                {/* Adhavan Image on the left side */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent rounded-3xl"></div>
                  <img 
                    src="/adhavan2.png" 
                    alt="Adhavan - Developer"
                    className="w-72 h-96 object-contain filter drop-shadow-2xl"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
                    }}
                  />
                </div>
                
                {/* Text positioned to the right */}
                <div className="flex-1 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    he develops websites in 5 mins
                  </h3>
                </div>
                
                {/* Curved Arrow Connector */}
                <div className="absolute bottom-4 right-1/3">
                  <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M10 85 Q 50 15 120 45" 
                      stroke="url(#arrowGradient1)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="6,4"
                      className="animate-pulse"
                    />
                    {/* Modern arrow head */}
                    <circle cx="120" cy="45" r="8" fill="url(#arrowGradient1)" className="animate-pulse"/>
                    <path 
                      d="M112 39 L128 45 L112 51" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Preethi Section */}
            <div className="py-20">
              <div className="relative flex items-center justify-between">
                {/* Text for Preethi positioned to the left */}
                <div className="flex-1 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    she deploys ai agents
                  </h3>
                </div>
                
                {/* Preethi Image on the right side */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-transparent rounded-3xl"></div>
                  <img 
                    src="/preethi.png" 
                    alt="Preethi - AI Agent Specialist"
                    className="w-72 h-96 object-contain filter drop-shadow-2xl"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
                    }}
                  />
                </div>
                
                {/* Curved Arrow Connector (Right to Left) */}
                <div className="absolute bottom-4 left-1/3">
                  <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="arrowGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M130 85 Q 90 15 20 45" 
                      stroke="url(#arrowGradient2)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="6,4"
                      className="animate-pulse"
                    />
                    {/* Modern arrow head */}
                    <circle cx="20" cy="45" r="8" fill="url(#arrowGradient2)" className="animate-pulse"/>
                    <path 
                      d="M28 39 L12 45 L28 51" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Kirthi Section */}
            <div className="py-20">
              <div className="relative flex items-center justify-between">
                {/* Kirthi Image on the left side */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent rounded-3xl"></div>
                  <img 
                    src="/kirthi.png" 
                    alt="Kirthi - Manager"
                    className="w-72 h-96 object-contain filter drop-shadow-2xl"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
                    }}
                  />
                </div>
                
                {/* Text for Kirthi positioned to the right */}
                <div className="flex-1 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    she manages everything
                  </h3>
                </div>
                
                {/* Curved Arrow Connector */}
                <div className="absolute bottom-4 right-1/3">
                  <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="arrowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M10 85 Q 50 15 120 45" 
                      stroke="url(#arrowGradient3)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeDasharray="6,4"
                      className="animate-pulse"
                    />
                    {/* Modern arrow head */}
                    <circle cx="120" cy="45" r="8" fill="url(#arrowGradient3)" className="animate-pulse"/>
                    <path 
                      d="M112 39 L128 45 L112 51" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="billianceai logo" className="w-6 h-6" />
              <span className="font-semibold">billianceai</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
