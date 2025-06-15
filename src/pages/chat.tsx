import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Chat() {
  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Chat with Alex" />

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Message from Alex */}
        <div className="flex items-end gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJyyfXhYfufj75F0JXzQu-La8k7dsn6Fe5qdMkxxXbY6pBK5hxyMSOoW8-QXi32emj7xDlhyKlGE_O9_NQi3w_6YAffrPumWQnjbvZCs1wLou4CeHQpYuh-jUlqgi97EdVQCx0RYg4htHPWv333PgnmEab12QLom8P4by2zCfUslYqJIYjXFXsZ8xmqn1_Rf0jpFKYYndeVi47EcWwBFKXzK00b8taPJpaqtW_Rj1IWcQTOHurIdafRImcJ6E7CwklC8gOVLnw2rX4" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 items-start max-w-[80%]">
            <p className="text-muted-foreground text-xs">Alex</p>
            <div className="bg-muted rounded-xl px-4 py-3">
              <p className="text-base">
                Hey there! I'm excited to learn about your photography skills. When are you free for a session?
              </p>
            </div>
          </div>
        </div>

        {/* Message from You */}
        <div className="flex items-end gap-3 justify-end">
          <div className="flex flex-col gap-1 items-end max-w-[80%]">
            <p className="text-muted-foreground text-xs">You</p>
            <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3">
              <p className="text-base">
                Hi Alex! I'm available this weekend. How about Saturday afternoon?
              </p>
            </div>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuhgR9_C6YWq4vih5EmIJS3PKcOGqv_kYMT4fLD2QbJMBnjt9JoNphLuzVMq33livb_PSJt6hhgDDme7kMlnBXD0YLONHdQOaOx7rSxBBSSX-6ff7RMqkldMDttF5IC_SvfbGMTWR38RgsXMZk2IL0dZhhHzFgzDLFiEQJULy80H9iA_1NiMNMDnC93JavivoEfi6RqFK2pZI1Dlg26pdM1NR4p0-6zaRiq0RhfICm1NdR4c4XBdJcPOJSRs9IneNuf1ebyMJ_wb3-" />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
        </div>

        {/* Another message from Alex */}
        <div className="flex items-end gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd1gyA5mNx4Yth3KNlvHrt_JtOJe5i2bU6iHF0L21F9o8arhu572dIKRX0HtB2zLwEcQKWjQHW5hcd-h5oEd9tg0faJbcSGzLofFEWYkdgwfOUaMu3os-u5pzdWgrrsxK5yWz3pql_NcbWi6k7ZYPD85RywawDs_frDuft8z7ySNi8Tx6929jMM4Y5fbz7i7qCPzAn74lNLxvS0EiIe01AekTBBbtDic1xCb5ZG6ZZVwQWpV5LcMtpNDtvSYtFnl-2zag9gexFvD1w" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 items-start max-w-[80%]">
            <p className="text-muted-foreground text-xs">Alex</p>
            <div className="bg-muted rounded-xl px-4 py-3">
              <p className="text-base">
                Sounds perfect! Let's plan for 2 PM at the park. I'll bring my camera.
              </p>
            </div>
          </div>
        </div>

        {/* Another message from You */}
        <div className="flex items-end gap-3 justify-end">
          <div className="flex flex-col gap-1 items-end max-w-[80%]">
            <p className="text-muted-foreground text-xs">You</p>
            <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3">
              <p className="text-base">
                Great! I'll be there. Looking forward to it!
              </p>
            </div>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtG1OsgesfDsIyT_BarnSVMrhflBCDHovUxExnGahRGBlxjiKFpZS7PHzXrlGj4wEQgum7NGaV8RtE2ZYQ3KyMX5ugk5ECW3I6v0m0RTVjLYzqQSs4kOQ2W73Iwx2YhP8KDMhAh43rPvojVoADf_yYW6dV6Q-6V89P2or9qNIXD1mnpufpcn5SqbvwIrM6ZUcyJDa7CVOCc2JHSRk7MlIaMkZaQHDE08G4UylN6FpldGgTzGc2pXTtZVqtYwZgZ3sxXtjTtfT1c7i-" />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Message Input */}
      <div className="sticky bottom-0 bg-background border-t p-4">
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center bg-muted rounded-xl overflow-hidden">
            <Input
              placeholder="Write a message"
              className="border-0 bg-transparent focus-visible:ring-0 flex-1"
            />
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z" />
              </svg>
            </Button>
          </div>
          <Button className="hidden sm:flex">Send</Button>
        </div>
      </div>
    </div>
  );
}