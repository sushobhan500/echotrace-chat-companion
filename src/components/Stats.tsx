import { TrendingUp, Clock, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Fewer Escalations",
    description: "Reduction in customer escalations through pattern detection"
  },
  {
    icon: Clock,
    value: "2.5x",
    label: "Faster Resolution",
    description: "Quicker issue resolution with AI-guided insights"
  },
  {
    icon: Target,
    value: "95%",
    label: "Accuracy Rate",
    description: "Evidence-based causal analysis precision"
  },
  {
    icon: Zap,
    value: "10K+",
    label: "Conversations Analyzed",
    description: "Daily dialogue processing at enterprise scale"
  }
];

const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-button group-hover:shadow-glow transition-shadow">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
