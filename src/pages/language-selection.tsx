import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const languages = [
    { id: "english", label: "English" },
    { id: "arabic", label: "Arabic" },
    { id: "french", label: "French" }
  ];

  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Select Language" />
      
      {/* Language Options */}
      <div className="flex-1 p-4">
        <Card className="p-0">
          <RadioGroup 
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
            className="space-y-3 p-4"
          >
            {languages.map((language) => (
              <div 
                key={language.id}
                className="flex items-center space-x-4 border rounded-lg p-4 hover:bg-accent transition-colors"
              >
                <RadioGroupItem 
                  value={language.id} 
                  id={language.id} 
                  className="h-5 w-5 border-2 text-primary"
                />
                <Label 
                  htmlFor={language.id} 
                  className="text-base font-medium flex-1 cursor-pointer"
                >
                  {language.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card>
      </div>
      
      {/* Save Button */}
      <div className="p-4 border-t">
        <Button className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
}