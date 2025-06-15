import AppHeader from "@/components/app-header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Column } from "@/components/view";
import DefaultAvatarFile from '@/assets/avatar.png';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Textarea } from "@/components/ui/textarea";


export default function EditProfile() {
    return (
        <Column className="flex-1">
            <AppHeader title="Edit Profile" />
            <Column className="flex-1 w-full space-y-4 items-center justify-center p-4">
                <div className="w-full flex items-center justify-center">
                    <Avatar className="size-20">
                        <AvatarImage src={DefaultAvatarFile} />
                    </Avatar>
                </div>
                <div className="grid gap-2 w-full">
                    <Label>Full name</Label>
                    <Input placeholder="Full name" />
                </div>

                <div className="grid gap-2 w-full">
                    <Label>Email</Label>
                    <Input placeholder="Email address" />
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

                <div className="grid gap-2 w-full">
                    <Label>Bio</Label>
                    <Textarea placeholder="Tell us about yourself" />
                </div>

                <div className="space-y-2 w-full">
                    <Button className="w-full" asChild>
                        <Link to={'/profile'}>
                            Save Changes
                        </Link>
                    </Button>
                </div>
            </Column>
        </Column>
    )
}