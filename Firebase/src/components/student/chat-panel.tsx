'use client';
import { useState, useTransition } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, MessageSquare, Bot, AlertTriangle } from 'lucide-react';
import { getChatbotResponseAction } from '@/lib/actions';
import type { Topic } from '@/lib/definitions';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatPanelProps {
    topic: Topic;
}

export function ChatPanel({ topic }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: `Hello! How can I help you with ${topic.name} today?` },
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    startTransition(async () => {
        const result = await getChatbotResponseAction({ topicName: topic.name, question: currentInput });

        let botMessageText: string;
        if(result.error) {
            botMessageText = result.error;
        } else {
            botMessageText = result.data || "I'm not sure how to respond to that.";
        }
        
        const botMessage = { sender: 'bot' as const, text: botMessageText };
        setMessages(prev => [...prev, botMessage]);
    })
  };

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <MessageSquare />
          Course Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 ${
                  message.sender === 'user' ? 'justify-end' : ''
                }`}
              >
                {message.sender === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot size={20} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[75%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isPending && (
                <div className="flex items-end gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback><Bot size={20} /></AvatarFallback>
                    </Avatar>
                    <div className="max-w-[75%] rounded-lg p-3 bg-muted">
                        <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                            <div className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                            <div className="h-2 w-2 bg-foreground/50 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full items-center space-x-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about the material..."
            disabled={isPending}
          />
          <Button type="submit" size="icon" disabled={isPending}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
