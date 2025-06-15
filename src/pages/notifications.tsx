import AppHeader from "@/components/app-header";
import { Calendar, MessageCircle } from "lucide-react";

export default function Notifications() {
    const notifications = [
        {
            id: 1,
            title: "New booking request from Alex",
            time: "10:30 AM",
            icon: Calendar,
            iconColor: "text-blue-500"
        },
        {
            id: 2,
            title: "Your session is tomorrow",
            time: "Yesterday",
            icon: Calendar,
            iconColor: "text-orange-500"
        },
        {
            id: 3,
            title: "New message from Sarah",
            time: "2 days ago",
            icon: MessageCircle,
            iconColor: "text-purple-500"
        },
        {
            id: 4,
            title: "Your session with David is confirmed",
            time: "3 days ago",
            icon: Calendar,
            iconColor: "text-green-500"
        },
        {
            id: 5,
            title: "New booking request from Emily",
            time: "4 days ago",
            icon: Calendar,
            iconColor: "text-blue-500"
        }
    ];

    return (
        <div
            className="flex flex-col flex-1 w-full"
        >
            {/* Header */}
            <AppHeader title="Notifications" />

            {/* Notifications List */}
            <div className="flex-1">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className="flex items-center gap-4 p-4 border-b"
                    >
                        <div className={`bg-muted rounded-lg p-3 ${notification.iconColor}`}>
                            <notification.icon size={24} />
                        </div>
                        <div className="flex-1">
                            <p className="font-medium">{notification.title}</p>
                            <p className="text-muted-foreground text-sm">{notification.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}