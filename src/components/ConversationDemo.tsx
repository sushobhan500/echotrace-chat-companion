import { useState } from "react";
import { sampleConversations } from "@/data/sampleConversations";
import { cn } from "@/lib/utils";
import { ChevronRight, AlertTriangle, CheckCircle, XCircle, ThumbsUp, MessageSquare } from "lucide-react";

const outcomeConfig = {
  resolved: { icon: CheckCircle, color: "text-green-400", bg: "bg-green-400/10", label: "Resolved" },
  escalation: { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10", label: "Escalation" },
  complaint: { icon: XCircle, color: "text-red-400", bg: "bg-red-400/10", label: "Complaint" },
  refund: { icon: XCircle, color: "text-orange-400", bg: "bg-orange-400/10", label: "Refund" },
  positive: { icon: ThumbsUp, color: "text-emerald-400", bg: "bg-emerald-400/10", label: "Positive" },
};

const ConversationDemo = () => {
  const [selectedConversation, setSelectedConversation] = useState(sampleConversations[0]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Analyze </span>
            <span className="text-gradient">Real Conversations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore sample customer service dialogues and see how EchoTrace identifies 
            causal patterns leading to different outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Conversation List */}
          <div className="lg:col-span-2 glass rounded-2xl p-4 space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
              Conversation Transcripts
            </h3>
            {sampleConversations.map((conv) => {
              const outcome = outcomeConfig[conv.outcome || 'resolved'];
              const OutcomeIcon = outcome.icon;
              const isSelected = selectedConversation.id === conv.id;
              
              return (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={cn(
                    "w-full p-4 rounded-xl text-left transition-all duration-200",
                    isSelected 
                      ? "bg-primary/10 border border-primary/30 shadow-glow" 
                      : "hover:bg-secondary/50"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-muted-foreground">{conv.id}</span>
                    <span className={cn("flex items-center gap-1 text-xs px-2 py-1 rounded-full", outcome.bg, outcome.color)}>
                      <OutcomeIcon className="w-3 h-3" />
                      {outcome.label}
                    </span>
                  </div>
                  <p className="text-sm text-foreground font-medium">{conv.category}</p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {conv.turns[0]?.content}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <MessageSquare className="w-3 h-3" />
                    {conv.turns.length} turns
                  </div>
                </button>
              );
            })}
          </div>

          {/* Conversation Detail */}
          <div className="lg:col-span-3 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{selectedConversation.id}</h3>
                <p className="text-sm text-muted-foreground">{selectedConversation.category}</p>
              </div>
              {selectedConversation.outcome && (
                <span className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  outcomeConfig[selectedConversation.outcome].bg,
                  outcomeConfig[selectedConversation.outcome].color
                )}>
                  {(() => {
                    const Icon = outcomeConfig[selectedConversation.outcome].icon;
                    return <Icon className="w-4 h-4" />;
                  })()}
                  <span className="font-medium">{outcomeConfig[selectedConversation.outcome].label}</span>
                </span>
              )}
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {selectedConversation.turns.map((turn, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex gap-3 animate-fade-in",
                    turn.speaker === 'customer' ? "flex-row-reverse" : ""
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold",
                    turn.speaker === 'customer' 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-foreground"
                  )}>
                    {turn.speaker === 'customer' ? 'C' : 'A'}
                  </div>
                  <div className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3",
                    turn.speaker === 'customer' 
                      ? "bg-primary/20 text-foreground rounded-tr-sm" 
                      : "bg-secondary text-foreground rounded-tl-sm"
                  )}>
                    <p className="text-sm">{turn.content}</p>
                    {turn.timestamp && (
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{turn.timestamp}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-primary text-sm">
                <ChevronRight className="w-4 h-4" />
                <span>Try asking the chatbot: "Why did this conversation result in a {selectedConversation.outcome}?"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationDemo;
