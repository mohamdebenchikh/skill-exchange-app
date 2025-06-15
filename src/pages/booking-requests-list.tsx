import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppHeader from "@/components/app-header";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


export default function BookingRequestsList() {
    return (
        <div className="relative flex flex-1 w-full flex-col">
            {/* Header */}
            <AppHeader title="Booking Requests" />

            {/* Tabs */}
            <Tabs defaultValue="pending">
                <div className="px-4 mb-2 ">
                    <ScrollArea className="w-full">
                        <TabsList className="bg-background my-2 space-y-2 inline-flex ">
                            <TabsTrigger value="pending">
                                Pending Requests
                            </TabsTrigger>
                            <TabsTrigger value="upcoming">
                                Upcoming Sessions
                            </TabsTrigger>
                            <TabsTrigger value="past">
                                Past Sessions
                            </TabsTrigger>
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>

                </div>
            </Tabs>

            {/* Requests List */}
            <div className="space-y-2">
                {/* Request 1 */}
                <div className="flex gap-4 bg-background p-4 justify-between">
                    <div className="flex items-start gap-4">
                        <Avatar className="size-16">
                            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWzqCyysr93Iq77bSj3I1Hr9Otr1wpRP12E2CUADjxuNdIyYTVeagDBxqIODCeyHiMGaStxu87KN5LMo2oZlPGN8B4DrH2b8L1tMcmx_jC5sdEgo851MJ0q1H3uZ06KiL9HHrtFvSFEIuwRSwZlP_7N5JG53SZE3xkCQVlywkWkATo78PsuRX4t6qo_eOWO0YJpU32YUWu-ZVEJwHTaxEuHOd0FRj_eTXB0bqsD9qEfxcvIDziA2FAvG4pAvAOA8fuZMyzyklmLTVA" />
                            <AvatarFallback>SB</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-base font-medium">Sophia Bennett</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Hi, I'm excited to learn from you. I'm available on the requested date and time.
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Requested: Oct 26, 2024, 2:00 PM
                            </p>
                        </div>
                    </div>
                    <Button className="min-w-[84px] h-8 px-4 rounded-full">
                        Accept
                    </Button>
                </div>

                {/* Request 2 */}
                <div className="flex gap-4 bg-background px-4 py-3 justify-between">
                    <div className="flex items-start gap-4">
                        <Avatar className="size-16">
                            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxAqk9gbV0azSL0IrRMJuy_nnlUG-LsNw8ki3BAV0n71Ck1LqlXcOMXRz6eHeujlyaeNCog8shs4ogXM5Am6PyDdRwZTORXgoW_O16U3IxIgFjY7GSbyOrrn0mIyIcViq1aJubu2g9ZHGg2KV3pGN81byb8KC8BrUlsL9J07iz4oaK8ntgNsDhtgoE-GaSIbPmbqDDWt8cFuo7q-wypKsDVlrr8HwUkhW_NbwYQU0koV2tiqyAW8BjlS2N3Vud3C0VsFYjsnIqjyB4" />
                            <AvatarFallback>EC</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-base font-medium">Ethan Carter</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                I'm looking forward to our session. I'm flexible with the timing if needed.
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Requested: Oct 27, 2024, 10:00 AM
                            </p>
                        </div>
                    </div>
                    <Button className="min-w-[84px] h-8 px-4 rounded-full">
                        Accept
                    </Button>
                </div>

                {/* Request 3 */}
                <div className="flex gap-4 bg-background px-4 py-3 justify-between">
                    <div className="flex items-start gap-4">
                        <Avatar className="size-16">
                            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoydF3JrN6-Asih4MAl8hmZr8UvPns3Di4JGEqrZ3HSQIT559MKCpWLlpo5SNjSpXVnikAQanG17ZdVhkd59I5g8FdM9ReBmzK3qR7xY8EO2IAl-tojaswrGXCYE9UVtGwzM5IP9vfNEWG-OWrMgtq2405RjubWk6d90LKfZvUg7SdzIRScy6JqDMV7Y8_GUGq_aj_RBTzx1Hrw5VGCaswYziycuWEnvp7eZd0hcjxThj2vX1RrDffQTvgUhP1Hdjv6fZrs3V1xbxY" />
                            <AvatarFallback>OD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-base font-medium">Olivia Davis</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                I'm eager to start learning. Please confirm the session at your earliest convenience.
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Requested: Oct 28, 2024, 4:00 PM
                            </p>
                        </div>
                    </div>
                    <Button className="min-w-[84px] h-8 px-4 rounded-full">
                        Accept
                    </Button>
                </div>
            </div>
        </div>
    );
}