import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function VerifyEmail() {
    return (
        <>
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">Verify Your Email</h1>
                    <p className="text-muted-foreground">We’ve sent a verification link to your email. Please check your inbox and click the link to activate your account.</p>
                </div>
                <div className="w-full space-y-4">
                    <Button className="w-full" asChild>
                        <Link to={'/reset-password'}>
                            Resend Verification Email
                        </Link>
                    </Button>
                    <Button className="w-full" variant={'secondary'}>Change Email Address</Button>
                    <Button className="w-full" variant={'ghost'}>
                        <Link to={'/sign-in'}>Back to sign in</Link>
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground">If you don’t see the email, check spam or resend.</p>
        </>
    )
}