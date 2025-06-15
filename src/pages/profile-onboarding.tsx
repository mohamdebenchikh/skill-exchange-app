import AppHeader from "@/components/app-header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Column } from "@/components/view";
import DefaultAvatarFile from '@/assets/avatar.png';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


export default function ProfileOnboarding() {
    return (
        <Column className="flex-1">
            <AppHeader title="Complete your profile" showBackButton={false} />
            <Column className="flex-1 w-full space-y-4 items-center justify-center p-4">
                <div className="w-full flex items-center justify-center">
                    <Avatar className="size-20">
                        <AvatarImage src={DefaultAvatarFile} />
                    </Avatar>
                </div>
                <div className="grid gap-2 w-full">
                    <Label>Location</Label>
                    <Input placeholder="Your city or neighborhood" />
                </div>

                <div className="grid gap-2 w-full">
                    <Label>Skills</Label>
                    <Input placeholder="Enter your skills" />
                </div>

                <div className="grid gap-2 w-full">
                    <Label>Languages</Label>
                    <Input placeholder="Enter your languages" />
                </div>

                <div className="space-y-2 w-full">
                    <Button className="w-full" asChild>
                        <Link to={'/profile'}>
                            Save Profile
                        </Link>
                    </Button>
                    <Button variant={'secondary'} className="w-full">Skip for now</Button>
                </div>

                <p className="text-sm text-muted-foreground">This helps others find and trust you.</p>

            </Column>
        </Column>
    )
}