import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

const ChatMessage = ({ role, content, isTyping }: ChatMessageProps) => {
  const isUser = role === 'user';

  return (
    <div
      className={cn(
        "flex gap-3 animate-message-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
          isUser 
            ? "bg-gradient-primary shadow-button" 
            : "bg-secondary border border-border"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <Bot className="w-4 h-4 text-primary" />
        )}
      </div>

      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-card",
          isUser
            ? "bg-gradient-primary text-primary-foreground rounded-tr-sm"
            : "bg-secondary text-foreground rounded-tl-sm"
        )}
      >
        {isTyping ? (
          <div className="flex gap-1 py-1">
            <span className="w-2 h-2 rounded-full bg-current animate-typing" style={{ animationDelay: '0s' }} />
            <span className="w-2 h-2 rounded-full bg-current animate-typing" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 rounded-full bg-current animate-typing" style={{ animationDelay: '0.4s' }} />
          </div>
        ) : (
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
              }
              return <span key={i}>{part}</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
