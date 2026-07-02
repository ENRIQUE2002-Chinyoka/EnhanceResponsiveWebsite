import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  from: 'rico' | 'user';
  text: string;
}

const QUICK_OPTIONS = [
  "Who is Enrique?",
  "What are his skills?",
  "View his projects",
  "How to contact him?",
  "Is he available for work?",
];

const getResponse = (input: string): string => {
  const msg = input.toLowerCase();

  if (msg.includes('who') || msg.includes('about') || msg.includes('enrique')) {
    return "Enrique is an IT specialist and aspiring developer with about 1 year of experience. He's passionate about web development, game development, and app development — always learning and building cool things!";
  }
  if (msg.includes('skill') || msg.includes('tech') || msg.includes('know')) {
    return "Enrique works with React, TypeScript, Tailwind CSS, Python, Pygame, Java, and more. He's also experienced in IT systems, networking, and cloud services.";
  }
  if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio') || msg.includes('built')) {
    return "He's built a 2D adventure game with Python/Pygame, a portfolio website, a task manager app, a data dashboard, a chat application, and an algorithm visualizer. Scroll up to check them out!";
  }
  if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('phone')) {
    return "You can reach Enrique at chinyokaenrique@gmail.com or call +27 81 424 4292. You can also use the contact form at the bottom of the page!";
  }
  if (msg.includes('available') || msg.includes('hire') || msg.includes('job') || msg.includes('freelance') || msg.includes('opportunity')) {
    return "Yes! Enrique is open to new opportunities and collaborations. Feel free to reach out through the contact section or email him directly.";
  }
  if (msg.includes('github') || msg.includes('code') || msg.includes('repo')) {
    return "You can find Enrique's code on GitHub at github.com/ENRIQUE2002-Chinyoka. Go check it out!";
  }
  if (msg.includes('game') || msg.includes('pygame')) {
    return "Enrique has a passion for game development! He builds 2D games using Python and Pygame, with custom physics, enemy AI, and level design.";
  }
  if (msg.includes('web') || msg.includes('react') || msg.includes('frontend')) {
    return "Enrique specializes in modern web development with React, TypeScript, and Tailwind CSS. He focuses on responsive design and clean, efficient code.";
  }
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('sup')) {
    return "Hey there! 👋 I'm Rico, Enrique's virtual assistant. Ask me anything about him — his skills, projects, or how to get in touch!";
  }
  if (msg.includes('thank') || msg.includes('thanks') || msg.includes('cool') || msg.includes('awesome') || msg.includes('great')) {
    return "Happy to help! Let me know if you have any other questions about Enrique.";
  }
  return "That's a great question! For more details, feel free to scroll through the portfolio or use the contact form to ask Enrique directly. Is there something specific I can help you with?";
};

export function RicoChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: 'rico',
      text: "Hey! I'm Rico 👋 Enrique's virtual assistant. What would you like to know about him?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), from: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        from: 'rico',
        text: getResponse(text),
      };
      setMessages(prev => [...prev, reply]);
      setIsTyping(false);
      if (!open) setUnread(prev => prev + 1);
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {open && (
        <div className="mb-4 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: '480px' }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground">
            <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
              <span className="text-lg">🤖</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">Rico</div>
              <div className="text-xs opacity-75">Enrique's Assistant</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.from === 'rico' && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-2 mt-1">
                    <span className="text-sm">🤖</span>
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-secondary text-secondary-foreground rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-2 mt-1">
                  <span className="text-sm">🤖</span>
                </div>
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-current rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-current rounded-full opacity-60 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-current rounded-full opacity-60 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Options */}
          <div className="px-3 py-2 border-t border-border overflow-x-auto flex gap-2 scrollbar-none">
            {QUICK_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => sendMessage(opt)}
                className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors whitespace-nowrap"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-border flex gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="px-3 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center"
        aria-label="Open chat with Rico"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </div>
  );
}
