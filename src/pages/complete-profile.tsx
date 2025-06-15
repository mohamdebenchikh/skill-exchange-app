import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";

export default function CompleteProfile() {
  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Skills Exchange" />
      
      {/* Main Content */}
      <div className="flex-1 px-4 pt-5">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-left">
          Complete Your Profile
        </h2>
        <p className="text-base text-muted-foreground py-3">
          Add skills and location so others can find you more easily.
        </p>
        
        <div className="space-y-3 pt-4">
          <Button className="w-full">
            Complete Now
          </Button>
          
          <Button 
            variant="secondary" 
            className="w-full "
          >
            Remind Me Later
          </Button>
        </div>
      </div>
    </div>
  );
}