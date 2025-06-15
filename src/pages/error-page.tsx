import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="flex flex-col w-full flex-1">
      <AppHeader title="Error" showBackButton />
      
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h2 className="text-foreground text-[28px] font-bold text-center pb-3 pt-5">
          Something Went Wrong
        </h2>
        <p className="text-muted-foreground text-base text-center pb-6">
          We couldn't load this page. Please try again.
        </p>
        
        <Button className="w-full rounded-full mb-4">
          Retry
        </Button>
        
        <button className="text-muted-foreground text-sm underline">
          Go Back
        </button>
      </div>
      
      <div className="h-5 bg-background"></div>
    </div>
  );
}