import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Column } from "@/components/view";



export default function ChangePassword() {
    return (
        <Column className="flex-1 w-full">
            <AppHeader title="Change Password" />
            <Column className="flex-1 w-full p-4">
                <Column className="flex-1 w-full gap-4 pt-8">
                    <Input placeholder="Current Password" />
                    <Input placeholder="New Password" />
                    <Input placeholder="Confirm new password" />
                   
                </Column>
                 <Button className="w-full">Update password</Button>

            </Column>
        </Column>
    )
}