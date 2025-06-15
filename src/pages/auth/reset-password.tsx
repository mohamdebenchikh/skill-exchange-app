import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function ResetPassword() {
    return (
        <>
            <div className="text-center space-y-1">
                <h1 className="text-2xl font-bold">Choose a New Password</h1>
                <p className="text-muted-foreground">Enter a new password for your account.</p>
            </div>

            <PasswordInput className="w-full" placeholder="New password" />
            <PasswordInput className="w-full" placeholder="Confirm new password" />

            <div className="space-y-4 w-full">
                <Button className="w-full">Update Password</Button>
                <Button className="w-full" variant={'ghost'}>
                    <Link to={'/sign-in'}>Back to sign in</Link>
                </Button>
            </div>

        </>
    )
}