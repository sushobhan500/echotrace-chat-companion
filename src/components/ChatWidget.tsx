import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ChatMessage from "./ChatMessage";
import { chatbotResponses } from "@/data/sampleConversations";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send greeting when chat opens for the first time
      setTimeout(() => {
        setMessages([{
          id: Date.now().toString(),
          role: 'assistant',
          content: chatbotResponses.greeting[0]
        }]);
      }, 500);
    }
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('escalation') || lowerMessage.includes('escalate')) {
      return chatbotResponses.escalation_analysis;
    }
    if (lowerMessage.includes('refund') || lowerMessage.includes('return')) {
      return chatbotResponses.refund_analysis;
    }
    if (lowerMessage.includes('positive') || lowerMessage.includes('success') || lowerMessage.includes('good')) {
      return chatbotResponses.positive_analysis;
    }
    if (lowerMessage.includes('pattern') || lowerMessage.includes('summary') || lowerMessage.includes('analyze') || lowerMessage.includes('insight')) {
      return chatbotResponses.pattern_summary;
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return chatbotResponses.greeting[1];
    }
    
    return chatbotResponses.fallback;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(userMessage.content);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response
      }]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQueries = [
    "Analyze escalation patterns",
    "Why do refunds happen?",
    "Show positive outcomes",
    "Give me a summary"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
          "bg-gradient-primary shadow-glow hover:shadow-[0_0_60px_hsla(192,91%,52%,0.4)] hover:scale-110",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background animate-pulse" style={{ background: 'hsl(142 71% 45%)' }} />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[380px] h-[520px] rounded-2xl overflow-hidden transition-all duration-300 glass shadow-card",
          "flex flex-col",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-primary p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-foreground">EchoTrace AI</h3>
            <p className="text-xs text-primary-foreground/80">Conversational Intelligence</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(142 69% 58%)' }} />
            <span className="text-xs text-primary-foreground/80">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-subtle">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              role={message.role}
              content={message.content}
            />
          ))}
          {isTyping && (
            <ChatMessage role="assistant" content="" isTyping />
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {suggestedQueries.map((query, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(query);
                  inputRef.current?.focus();
                }}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about conversation patterns..."
              className="flex-1 bg-secondary rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              size="icon"
              variant="hero"
              className="rounded-lg"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
