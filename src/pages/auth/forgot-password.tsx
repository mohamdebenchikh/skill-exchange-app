import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function ForgotPassword() {
    return (
        <>
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">Reset Your Password</h1>
                <p className="text-muted-foreground">Enter the email associated with your account, and we’ll send a reset link.</p>
            </div>
            <Input placeholder="you@example.com" type="email" />
            <Button className="w-full" asChild>
                <Link to={'/verify-email'}>
                    Send Reset Link
                </Link>
            </Button>
            <Link to={'sign-in'} className="text-sm text-muted-foreground hover:underline hover:text-primary">Back to sign in</Link>
        </>
    )
}