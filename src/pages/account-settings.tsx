import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Column } from "@/components/view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";


export default function AccountSettings() {
    return (
        <Column className="flex-1 w-full">
            <AppHeader title="Settings" />
            <Column className="flex-1 p-4 gap-4">
                <Column className="w-full gap-2">
                    <strong className="text-xl">Account</strong>
                    <Link to={'/change-password'} className="flex py-2 items-center text-primary rounded-lg justify-between cursor-pointer">
                        <span>Change password</span>
                        <ArrowRight className="size-4" />
                    </Link>
                </Column>
                <Column className="w-full gap-2">

                    <strong className="text-xl">Notifications</strong>
                    <div className="flex py-2 items-center text-primary rounded-lg justify-between cursor-pointer">
                        <span>New Skills Request</span>
                        <Switch />
                    </div>

                    <div className="flex py-2 items-center text-primary rounded-lg justify-between cursor-pointer">
                        <span>Skill Exchage Updates</span>
                        <Switch />
                    </div>

                    <div className="flex py-2 items-center text-primary rounded-lg justify-between cursor-pointer">
                        <span>Community Announcements</span>
                        <Switch  />
                    </div>
                </Column>
                <Column className="w-full gap-2">

                    <strong className="text-xl">Privacy</strong>
                    <div className="flex py-2 items-center text-primary rounded-lg justify-between cursor-pointer">
                        <span>Account Visibilty</span>
                        <Switch />
                    </div>

                    <div className="flex py-2 items-center text-primary rounded-lg justify-between cursor-pointer">
                        <span>Data sharing</span>
                        <Switch />
                    </div>

                    
                </Column>
                <Column className="w-full gap-4">

                    <strong className="text-xl">Danger zone</strong>
                    <Button variant={'destructive'} className="w-full">Delete Account</Button>
 
                </Column>
            </Column>
        </Column>
    )
}