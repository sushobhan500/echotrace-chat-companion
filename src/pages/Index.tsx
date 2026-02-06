import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ConversationDemo from "@/components/ConversationDemo";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <ConversationDemo />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
