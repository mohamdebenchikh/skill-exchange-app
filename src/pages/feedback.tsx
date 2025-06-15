import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

export default function Feedback() {
    return (
        <div className="flex flex-col w-full flex-1">
            <AppHeader title="Send Feedback" />

            <div className="p-4">
                <h1 className="text-foreground text-2xl font-bold pb-3">
                    How satisfied are you with the app?
                </h1>

                <div className="flex justify-between py-4">
                    {[1, 2, 3, 4].map((rating) => (
                        <div
                            key={rating}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="text-muted-foreground">
                                <Star className="size-6" />
                            </div>
                            <p className="text-muted-foreground text-xs font-bold">
                                {rating}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="py-3">
                    <Textarea
                        placeholder="Tell us more (optional)"
                        className="min-h-36 text-base p-4"
                    />
                </div>

                <div className="py-3">
                    <Button className="w-full rounded-full">
                        Send Feedback
                    </Button>
                </div>

                <p className="text-muted-foreground text-sm text-center py-2">
                    Thanks for your feedback!
                </p>
            </div>
        </div>
    );
}