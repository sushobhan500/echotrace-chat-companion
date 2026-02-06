import { ArrowRight, Sparkles, BarChart3, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">AI-Powered Conversation Intelligence</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Transform</span>
          <br />
          <span className="text-gradient">Customer Conversations</span>
          <br />
          <span className="text-foreground">Into Insights</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          EchoTrace uses causal AI to analyze support dialogues, identify patterns leading to 
          escalations, and help you deliver exceptional customer experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl" className="group">
            Start Analyzing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl">
            View Demo
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass rounded-xl p-6 text-left hover:shadow-glow transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Causal Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Identify the exact dialogue patterns that lead to escalations, refunds, and complaints.
            </p>
          </div>

          <div className="glass rounded-xl p-6 text-left hover:shadow-glow transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Multi-Turn Context</h3>
            <p className="text-sm text-muted-foreground">
              Ask follow-up questions and explore insights with full conversation memory.
            </p>
          </div>

          <div className="glass rounded-xl p-6 text-left hover:shadow-glow transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Evidence-Based</h3>
            <p className="text-sm text-muted-foreground">
              Every insight is grounded in specific dialogue spans with traceable evidence.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
