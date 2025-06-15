import AppHeader from "@/components/app-header";

export default function Maintenance() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <AppHeader title="Maintenance" showBackButton={false} />
      
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <h2 className="text-foreground text-2xl font-bold text-center pb-3 pt-5">
          We're Updating Things
        </h2>
        <p className="text-muted-foreground text-base text-center pb-3">
          The app is temporarily unavailable due to maintenance. We'll be back shortly.
        </p>
        <p className="text-muted-foreground text-sm text-center">
          Estimated time of availability: 2 hours
        </p>
      </div>
      
      <div className="py-6 text-center">
        <p className="text-muted-foreground text-sm">
          @2025 Skills Exchange
        </p>
      </div>
      
    </div>
  );
}