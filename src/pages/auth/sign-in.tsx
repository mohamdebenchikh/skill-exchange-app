import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function SignIn() {
    return (
        <>
            <h1 className="text-2xl font-bold">Sign in</h1>
            <Input placeholder="Email address" />
            <div className="w-full space-y-2">
                <PasswordInput />
                <Link to={'/forgot-password'} className="text-sm hover:underline hover:text-primary text-muted-foreground">Forgot password?</Link>
            </div>

            <Button className="w-full">Sign in</Button>
            <p className="text-sm text-muted-foreground">Don't have an account <Link to={"/sign-up"} className="hover:underline">Sign up</Link></p>
        </>
    )
}