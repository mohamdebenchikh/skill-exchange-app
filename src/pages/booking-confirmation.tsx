import { Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AppHeader from "@/components/app-header";

export default function BookingConfirmation() {
    return (
        <div className="flex flex-col w-full flex-1">
            {/* Header */}
            <AppHeader title="Booking Confirmation" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-3xl font-bold mb-4">Booking Confirmed</h1>
                <p className="text-muted-foreground mb-8 max-w-md">
                    You're all set! Your session is confirmed for the following details:
                </p>

                {/* Booking Details */}
                <div className="w-full max-w-md space-y-4">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-lg">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-medium">Date & Time</h3>
                                <p className="text-muted-foreground text-sm">
                                    July 20, 2024 · 2:00 PM - 3:00 PM
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-secondary p-3 rounded-lg">
                                <Video className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-medium">Location</h3>
                                <p className="text-muted-foreground text-sm">
                                    Online Session
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 space-y-3">
                <Button className="w-full text-base">
                    View Booking Details
                </Button>
                <Button variant="secondary" className="w-full text-base">
                    Back to Listings
                </Button>
            </div>
        </div>
    );
}