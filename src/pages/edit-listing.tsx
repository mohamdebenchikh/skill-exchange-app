import { ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import AppHeader from "@/components/app-header"

export function EditListing() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <AppHeader title="Edit listing"/>

      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <Label>Title</Label>
          <Input placeholder="Enter title" />
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea placeholder="Enter description" />
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one">One</SelectItem>
              <SelectItem value="two">Two</SelectItem>
              <SelectItem value="three">Three</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price</Label>
          <Input placeholder="Enter price" />
        </div>

        <div className="space-y-2">
          <Label>Type</Label>
          <RadioGroup defaultValue="remote" className="flex gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="remote" id="remote" className="peer hidden" />
              <Label
                htmlFor="remote"
                className="px-4 py-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-accent peer-data-[state=checked]:border-primary cursor-pointer"
              >
                Remote
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-person" id="in-person" className="peer hidden" />
              <Label
                htmlFor="in-person"
                className="px-4 py-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-accent peer-data-[state=checked]:border-primary cursor-pointer"
              >
                In-Person
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Location</Label>
          <Input placeholder="Enter location" />
        </div>

        <div className="flex items-center justify-between p-4 border rounded-lg">
          <span>Modify Availability</span>
          <ChevronRight className="h-5 w-5" />
        </div>

        <div className="space-y-2">
          <Label>Media</Label>
          <Card className="aspect-video  p-2 grid grid-cols-2 gap-1 overflow-hidden">
            <div className="bg-muted rounded-l-lg" />
            <div className="space-y-1">
              <div className="bg-muted h-full rounded-r-lg" />
            </div>
          </Card>
        </div>

        <Button className="w-full">Save Changes</Button>
      </div>
    </div>
  )
}