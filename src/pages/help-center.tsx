import AppHeader from "@/components/app-header";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

export default function HelpCenter() {
  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Help Center" />
      
      <div className="p-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="size-5" />
          </div>
          <Input
            placeholder="Search FAQs"
            className="pl-10 rounded-xl bg-muted text-foreground"
          />
        </div>
        
        <div className="py-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="account" className="border-border">
              <AccordionTrigger className="text-foreground text-sm font-medium py-2">
                Account
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-2">
                To update your account information, navigate to your profile settings. 
                Here, you can modify your personal details, contact information, and 
                preferences. Ensure all changes are saved to reflect updates across 
                the platform.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="bookings" className="border-border">
              <AccordionTrigger className="text-foreground text-sm font-medium py-2">
                Bookings
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-2">
                To update your account information, navigate to your profile settings. 
                Here, you can modify your personal details, contact information, and 
                preferences. Ensure all changes are saved to reflect updates across 
                the platform.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="listings" className="border-border">
              <AccordionTrigger className="text-foreground text-sm font-medium py-2">
                Listings
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-2">
                To update your account information, navigate to your profile settings. 
                Here, you can modify your personal details, contact information, and 
                preferences. Ensure all changes are saved to reflect updates across 
                the platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}