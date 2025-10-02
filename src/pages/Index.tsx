import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

const Index = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  const [proPrice, setProPrice] = useState(15);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const targetPrice = isAnnually ? 150 : 15;
      const startPrice = isAnnually ? 15 : 150;
      const duration = 600; // 0.6 second animation (faster)
      const steps = 30; // More steps for smoother transition
      const stepDuration = duration / steps;
      const priceIncrement = (targetPrice - startPrice) / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        // Use easing function for smoother animation
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        const newPrice = Math.round(startPrice + (priceIncrement * steps * easedProgress));
        setProPrice(newPrice);
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [isAnnually, isAnimating]);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnnually(!isAnnually);
    }, 50);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="billianceai logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">billianceai</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Company</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Introducing billianceai</span>
            </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[0.95] tracking-tight text-center">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">ideology meets internet</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            we "just" help people
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="text-base px-8 h-12 rounded-full font-medium" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
              get slot
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'var(--gradient-hero)', boxShadow: 'var(--shadow-glow)' }} />
            <div className="relative aspect-[4/3] rounded-2xl border border-border/30 backdrop-blur-xl bg-card/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/Gemini_Generated_Image_fqjrsifqjrsifqjr.png" 
                  alt="AI Generated Image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features that scale with your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "AI-First", 
                desc: "Built from the ground up with intelligence at its core"
              },
              { 
                title: "Real-time Collaboration", 
                desc: "Work together seamlessly across teams and time zones"
              },
              { 
                title: "Enterprise Ready", 
                desc: "Security and scale for organizations of any size"
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2.5K", label: "Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "3", label: "Countries" },
                { value: "24/7", label: "Support" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that's right for you
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium ${!isAnnually ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isAnnually ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-muted'
                }`}
                style={isAnnually ? { boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)' } : {}}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-all duration-300 ${
                    isAnnually 
                      ? 'translate-x-6 bg-gradient-to-br from-gray-200 to-gray-400 shadow-lg' 
                      : 'translate-x-1 bg-background'
                  }`}
                  style={isAnnually ? { 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  } : {}}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnually ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annually
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <p className="text-muted-foreground mb-6">All essential features</p>
              <Button className="w-full mb-8" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
                Get for Windows
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Limited AI responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Unlimited real-time meeting notetaking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Customize instructions & upload files</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Ask AI about all your past meetings</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl bg-card border-2 border-primary hover:border-primary/80 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$</span>
                  <span 
                    className={`text-4xl font-bold transition-all duration-200 ${
                      isAnimating ? 'animate-pulse' : ''
                    }`}
                    style={{
                      transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: isAnimating ? 'var(--primary)' : 'inherit'
                    }}
                  >
                    {proPrice}
                  </span>
                  <span className="text-muted-foreground">/{isAnnually ? 'year' : 'month'}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">Unlimited access</p>
              <Button className="w-full mb-8" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}>
                Subscribe
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Everything in Starter, plus...</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Unlimited AI responses</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Unlimited access to latest AI models</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Priority support</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-muted-foreground mb-6">Custom knowledge for teams</p>
              <Button className="w-full mb-8" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
                Talk to sales
              </Button>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Everything in Pro, plus...</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Post-call coaching and analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">RAG knowledge base</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">User provisioning & role-based access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Single sign-on & IDP integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </div>
                  <span className="text-sm">Enterprise security & no data training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              start building today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of teams already using billianceai to create stuff on the internet
            </p>
            <Button size="lg" className="text-base px-10 h-12 rounded-full font-medium" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
              get slot
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
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

export default Index;
