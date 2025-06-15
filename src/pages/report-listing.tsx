import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function ReportListing() {
  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader 
        title="Report Listing" 
      />

      <div className="space-y-4 p-4">
        <div>
          <h3 className="text-foreground text-lg font-bold pb-2">Listing</h3>
          <div className="flex items-center gap-4 min-h-[72px] py-2">
            <Avatar className="size-14 rounded-lg">
              <AvatarImage 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB67YGWFvsOAVTLyBMEWlQLghag8XrwOWkk1YF80CEXKiZ5JQPZT50bTz8t1uaf2nP271etan-FZ30adugRVyZvwvUl0BnqZu4GUfnDMGh9U55j0B4TO6u-rVXJUttX1gWYsY_agcgYfHZX4kpVDAY-McmU7vZvi9qnWKO3SK562OVvEg81Xs-S5NfGcGD2hCTrCouV3_DImfEY60w7DerZ0251O_ZbjsQzb0ex8WmRVGxq2NnAXQkpt8Z3dJqro9kYAd0h01AyDV15" 
                className="object-cover"
              />
              <AvatarFallback className="bg-muted rounded-lg">
                PW
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <p className="text-foreground text-base font-medium leading-normal line-clamp-1">
                Photography Workshop
              </p>
              <p className="text-muted-foreground text-sm font-normal leading-normal line-clamp-2">
                Photography
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-foreground text-lg font-bold pb-2">Reason</h3>
          <div className="py-2">
            <Select>
              <SelectTrigger className="w-full text-base">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spam">Spam</SelectItem>
                <SelectItem value="inappropriate">Inappropriate content</SelectItem>
                <SelectItem value="misleading">Misleading information</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="py-2">
          <Textarea
            placeholder="Additional comments (optional)"
            className="min-h-36 text-base p-4"
          />
        </div>

        <div className="py-2">
          <Button className="w-full h-10 rounded-full">
            Submit Report
          </Button>
        </div>

        <p className="text-muted-foreground text-xs text-center py-2">
          Thank you. We'll review your report.
        </p>
      </div>
    </div>
  );
}