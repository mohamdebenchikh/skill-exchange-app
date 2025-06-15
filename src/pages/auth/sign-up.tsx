import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function SignUp() {
    return (
        <>
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <Input placeholder="Full name" />
            <Input placeholder="Email address" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm password" />
            <Button asChild className="w-full">
                <Link to={'/profile-onboarding'}>
                    Sign up
                </Link>
            </Button>
            <p className="text-sm text-muted-foreground">Already have an account <Link to={"/sign-in"} className="hover:underline">Sign in</Link></p>
        </>
    )
}