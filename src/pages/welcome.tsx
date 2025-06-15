import welcomeImg from "@/assets/welcome.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Welcome() {
    return (
        <div className="h-full flex flex-col bg-background">
            <div className="h-[200px] flex-shrink-0">
                <img src={welcomeImg} alt="Welcome" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div className="flex-1 flex flex-col text-center">
                        <h1 className="text-2xl font-bold text-primary mb-2">Welcome to Skill Exchange</h1>
                        <p className="text-sm text-muted-foreground">Connect, learn, and share your skills in your community.</p>
                    </div>
                    
                    <div className="w-full flex flex-col gap-3">
                        <Button className="w-full" asChild>
                            <Link to={"sign-up"} replace>Get Started</Link>
                        </Button>
                        <Button className="w-full" variant={'secondary'} asChild>
                            <Link to={"sign-in"}>Sign in</Link>
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">By continuing, you agree to our <a href="#" className="hover:underline text-gray-300">Terms</a> and <a href="#" className="hover:underline text-gray-300">Privacy Policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}