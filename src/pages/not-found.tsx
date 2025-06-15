import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col w-full flex-1">
            <AppHeader title="Not Found" showBackButton />

            <div className="flex flex-col items-center justify-center flex-1 px-4">
                <h2 className="text-foreground text-[28px] font-bold text-center pb-3 pt-5">
                    Not Found
                </h2>
                <p className="text-muted-foreground text-base text-center pb-6">
                    The page you're looking for doesn't exist.
                </p>

                <Button className="w-full rounded-full">
                    Go Home
                </Button>
            </div>
        </div>
    );
}