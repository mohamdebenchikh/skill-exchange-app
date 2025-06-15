import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSupport() {
  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Contact Support" />
      
      <div className="p-4">
        <p className="text-muted-foreground text-base pb-3 pt-1">
          Having issues? We're here to help.
        </p>
        
        <div className="space-y-4 py-3">
          <div>
            <p className="text-foreground text-base font-medium pb-2">Email</p>
            <Input
              
            />
          </div>
          
          <div>
            <p className="text-foreground text-base font-medium pb-2">Subject</p>
            <Input
              placeholder="Subject"
              
            />
          </div>
          
          <div>
            <p className="text-foreground text-base font-medium pb-2">Message</p>
            <Textarea
              placeholder="Message"
              className="min-h-36 rounded-xl bg-muted"
            />
          </div>
        </div>
        
        <div className="py-3">
          <Button className="w-full h-10 rounded-full">
            Send Message
          </Button>
        </div>
        
        <p className="text-muted-foreground text-sm text-center py-2">
          Your message was sent. We'll get back to you soon.
        </p>
      </div>
    </div>
  );
}