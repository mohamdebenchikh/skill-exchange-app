import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DeleteAccount() {
  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Delete Account" showBackButton />
      
      <div className="p-4">
        <p className="text-muted-foreground text-base pb-3">
          Deleting your account is permanent and irreversible. All your data, 
          including your profile, skills, and connections, will be permanently deleted.
        </p>
        
        <div className="py-3">
          <Input
            placeholder="Type DELETE to confirm"
          />
        </div>
        
        <div className="flex justify-between gap-3 py-3">
          <Button variant="secondary" className="flex-1 rounded-full">
            Cancel
          </Button>
          <Button className="flex-1 rounded-full">
            Confirm Deletion
          </Button>
        </div>
      </div>
      
      <div className="mt-auto py-3 text-center">
        <p className="text-muted-foreground text-sm">
          Account deleted. Sorry to see you go.
        </p>
      </div>
      
      <div className="h-5 bg-background"></div>
    </div>
  );
}