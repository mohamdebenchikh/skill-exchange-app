import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";


export default function TermsOfService() {
  const [searchTerm, setSearchTerm] = useState("");

  const termsContent = [
    {
      title: "1. Acceptance of Terms",
      content: "By using SkillSwap, you agree to these terms. If you do not agree, please do not use our services."
    },
    {
      title: "2. Description of Service", 
      content: "SkillSwap is a platform that connects individuals to exchange skills. We provide tools for users to create profiles, list skills, and connect with others for skill exchange."
    },
    {
      title: "3. User Accounts",
      content: "• You must be at least 18 years old to use SkillSwap.\n• You are responsible for maintaining the confidentiality of your account.\n• You agree to provide accurate and complete information when creating your account."
    },
    {
      title: "4. Skill Exchange",
      content: "• SkillSwap facilitates connections but does not guarantee the quality of skills exchanged.\n• Users are responsible for their interactions and exchanges.\n• We are not liable for any disputes or issues arising from skill exchanges."
    },
    {
      title: "5. Prohibited Conduct",
      content: "• You agree not to use SkillSwap for any unlawful or prohibited activities.\n• This includes harassment, fraud, or any violation of others' rights.\n• We reserve the right to suspend or terminate accounts for violations."
    },
    {
      title: "6. Intellectual Property",
      content: "• All content on SkillSwap, including logos and trademarks, is owned by us.\n• Users retain ownership of their content but grant us a license to use it."
    },
    {
      title: "7. Disclaimers",
      content: "• SkillSwap is provided \"as is\" without warranties of any kind.\n• We do not guarantee uninterrupted or error-free service."
    },
    {
      title: "8. Limitation of Liability",
      content: "• We are not liable for any indirect, incidental, or consequential damages.\n• Our liability is limited to the extent permitted by law."
    },
    {
      title: "9. Changes to Terms",
      content: "• We may update these terms at any time.\n• We will notify users of significant changes.\n• Continued use of SkillSwap implies acceptance of the updated terms."
    },
    {
      title: "10. Governing Law",
      content: "These terms are governed by the laws of the jurisdiction in which we operate."
    },
    {
      title: "11. Contact Us",
      content: "If you have any questions, please contact us at support@skillswap.com."
    }
  ];

  // Filter content based on search term
  const filteredContent = termsContent.filter(section => 
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render content with proper line breaks
  const renderContent = (content: {split: (arg0: string) => string[]}) => {
    return content.split('\n').map((line, index) => (
      <div key={index} className="mb-1">
        {line}
      </div>
    ));
  };

  return (
    <div className="flex flex-col flex-1 w-full">
      {/* Header */}
      <AppHeader title="Terms of Service" />
      
      {/* Intro */}
      <div className="px-4 py-3">
        <p className="text-sm text-muted-foreground">
          Welcome to SkillSwap! By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>
      </div>
      
      {/* Search */}
      <div className="px-4 py-3">
        <Input 
          placeholder="Search terms"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Terms Content */}
      <ScrollArea className="flex-1 px-4 pb-4">
        <div className="space-y-6">
          {filteredContent.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-foreground text-base">
                {section.title}
              </h3>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {renderContent(section.content)}
              </div>
            </div>
          ))}
          
          {filteredContent.length === 0 && searchTerm && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Accept Button */}
      <div className="p-4 border-t">
        <Button className="w-full">
          Accept Terms
        </Button>
      </div>
    </div>
  );
}