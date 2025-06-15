import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FilterDrawerProps {
  trigger: React.ReactNode;
}

export default function FilterDrawer({ trigger }: FilterDrawerProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [isRemote, setIsRemote] = useState(false);
  const [radius, setRadius] = useState(10);
  const [language, setLanguage] = useState("");
  const [isAvailableSoon, setIsAvailableSoon] = useState(false);

  const toggleCategory = (category: string) => {
    setCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleClearAll = () => {
    setCategories([]);
    setPriceRange([0, 100]);
    setIsRemote(false);
    setRadius(10);
    setLanguage("");
    setIsAvailableSoon(false);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {trigger}
      </DrawerTrigger>
      
      <DrawerContent className="h-[85vh] w-sm mx-auto max-h-[90vh] rounded-t-xl">        
        <div className="overflow-y-auto p-4">
          <DrawerHeader>
            <DrawerTitle className="text-left text-xl font-bold">Filter Listings</DrawerTitle>
            <DrawerDescription ></DrawerDescription>
          </DrawerHeader>
          
          {/* Category Section */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Category</h3>
            <div className="space-y-2">
              {['Design', 'Marketing', 'Technology', 'Writing', 'Photography'].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`cat-${category}`}
                    checked={categories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={`cat-${category}`} className="font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Price Range</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
              <Slider 
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={100}
                step={5}
                minStepsBetweenThumbs={1}
              />
            </div>
          </div>
          
          {/* Remote Toggle */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Remote</h3>
            </div>
            <Switch 
              checked={isRemote}
              onCheckedChange={setIsRemote}
            />
          </div>
          
          {/* Location Radius */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Location Radius</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Radius</span>
                <span className="text-sm">{radius} miles</span>
              </div>
              <Slider 
                value={[radius]}
                onValueChange={(value) => setRadius(value[0])}
                min={1}
                max={100}
                step={5}
              />
            </div>
          </div>
          
          {/* Language Select */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Language</h3>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Availability Toggle */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Available Soon</h3>
            </div>
            <Switch 
              checked={isAvailableSoon}
              onCheckedChange={setIsAvailableSoon}
            />
          </div>
          
          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleClearAll}
            >
              Clear All
            </Button>
            <Button className="flex-1">
              Apply Filters
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}