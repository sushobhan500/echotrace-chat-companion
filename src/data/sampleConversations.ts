// Sample conversation data for the EchoTrace chatbot
// This simulates customer service dialogue transcripts for causal analysis

export interface ConversationTurn {
  speaker: 'agent' | 'customer';
  content: string;
  timestamp?: string;
}

export interface Conversation {
  id: string;
  turns: ConversationTurn[];
  outcome?: 'resolved' | 'escalation' | 'complaint' | 'refund' | 'positive';
  category: string;
}

export const sampleConversations: Conversation[] = [
  {
    id: "CALL-001",
    category: "Order Issue",
    outcome: "resolved",
    turns: [
      { speaker: 'customer', content: "Hi, I placed an order 3 days ago and haven't received any shipping confirmation.", timestamp: "10:23:15" },
      { speaker: 'agent', content: "I apologize for the delay. Let me look into your order right away. Can you provide your order number?", timestamp: "10:23:45" },
      { speaker: 'customer', content: "It's ORDER-78523", timestamp: "10:24:02" },
      { speaker: 'agent', content: "Thank you! I found your order. It looks like there was a processing delay. I've expedited it and you'll receive shipping confirmation within 2 hours.", timestamp: "10:25:30" },
      { speaker: 'customer', content: "That's great, thank you for your help!", timestamp: "10:25:55" }
    ]
  },
  {
    id: "CALL-002",
    category: "Product Quality",
    outcome: "refund",
    turns: [
      { speaker: 'customer', content: "The product I received is completely different from what was shown on the website!", timestamp: "14:10:00" },
      { speaker: 'agent', content: "I'm so sorry to hear that. Can you describe the differences you noticed?", timestamp: "14:10:30" },
      { speaker: 'customer', content: "The color is wrong and the material feels cheap. This is not acceptable.", timestamp: "14:11:15" },
      { speaker: 'agent', content: "I completely understand your frustration. I'll process a full refund and send you a prepaid return label immediately.", timestamp: "14:12:00" },
      { speaker: 'customer', content: "Fine, but I'm disappointed with the quality control.", timestamp: "14:12:45" }
    ]
  },
  {
    id: "CALL-003",
    category: "Delivery",
    outcome: "escalation",
    turns: [
      { speaker: 'customer', content: "This is the THIRD time I'm calling about my missing package!", timestamp: "09:05:00" },
      { speaker: 'agent', content: "I sincerely apologize for the ongoing issue. Let me review all previous interactions.", timestamp: "09:05:30" },
      { speaker: 'customer', content: "I've been given the runaround for 2 weeks now. I want to speak to a supervisor.", timestamp: "09:06:15" },
      { speaker: 'agent', content: "I understand your frustration completely. Let me connect you with our senior team right away.", timestamp: "09:06:45" }
    ]
  },
  {
    id: "CALL-004",
    category: "Account",
    outcome: "positive",
    turns: [
      { speaker: 'customer', content: "I need help updating my payment method.", timestamp: "11:30:00" },
      { speaker: 'agent', content: "Of course! I'd be happy to help. For security, I'll send a verification code to your registered email.", timestamp: "11:30:20" },
      { speaker: 'customer', content: "Got it, the code is 847293.", timestamp: "11:31:15" },
      { speaker: 'agent', content: "Perfect! I've updated your payment method. Is there anything else I can help you with today?", timestamp: "11:32:00" },
      { speaker: 'customer', content: "No, that was super quick. Thanks!", timestamp: "11:32:20" }
    ]
  },
  {
    id: "CALL-005",
    category: "Technical Support",
    outcome: "complaint",
    turns: [
      { speaker: 'customer', content: "Your app keeps crashing whenever I try to checkout.", timestamp: "16:45:00" },
      { speaker: 'agent', content: "I'm sorry for the inconvenience. Have you tried clearing your cache or updating the app?", timestamp: "16:45:30" },
      { speaker: 'customer', content: "Yes, I've tried everything. This has been happening for a week!", timestamp: "16:46:00" },
      { speaker: 'agent', content: "I understand. Our technical team is aware of this issue and working on a fix.", timestamp: "16:46:30" },
      { speaker: 'customer', content: "That's not good enough. I'm losing sales because of this!", timestamp: "16:47:00" }
    ]
  }
];

// Predefined responses based on conversation analysis
export const chatbotResponses = {
  greeting: [
    "Hello! I'm EchoTrace AI, your intelligent customer support analyst. I can help you understand conversation patterns, analyze outcomes, and provide causal insights. How can I assist you today?",
    "Welcome to EchoTrace! I'm trained to analyze customer service conversations and identify patterns that lead to different outcomes. What would you like to explore?"
  ],
  escalation_analysis: "Based on my analysis of escalation cases, the primary causal factors include: **repeat contact attempts** (customers calling multiple times), **unresolved prior issues**, and **lack of proactive communication**. In CALL-003, the escalation was triggered by the customer having to call 3 times without resolution.",
  refund_analysis: "Refund outcomes are typically associated with: **product quality discrepancies**, **description mismatches**, and **initial customer frustration**. The key pattern is a gap between expectations set by product listings and actual delivery.",
  positive_analysis: "Positive outcomes correlate with: **quick response times**, **proactive verification**, and **single-contact resolution**. CALL-004 demonstrates this with efficient handling and clear communication.",
  pattern_summary: "Across all conversations, I've identified these key patterns:\n\n• **Escalations** often involve 3+ contacts or visible customer frustration keywords\n• **Refunds** correlate with product quality mentions in turn 1-2\n• **Positive outcomes** show resolution within 5 turns\n• **Agent empathy statements** reduce escalation probability by ~40%",
  fallback: "I can analyze conversation patterns related to escalations, refunds, complaints, and positive outcomes. Try asking me about specific outcomes or request a pattern analysis!"
};
