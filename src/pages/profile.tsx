import AppHeader from "@/components/app-header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Column } from "@/components/view";
import DefaultAvatarFile from '@/assets/avatar.png';
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Settings2 } from "lucide-react";


export default function Profile() {



    return (
        <Column className="flex-1">
            <AppHeader rightSide={<>
                    <Button asChild variant={'ghost'} size={'icon'}>
                        <Link to={'/account-settings'}>
                            <Settings2 className="size-4" />
                        </Link>  
                    </Button>
                </>} title="Profile" className="mb-3 fixed" showBackButton={false} />
            <Column className="flex-1 w-full space-y-6 items-center justify-center p-4">
                <Column className="w-full flex-1 gap-3 items-center justify-center">
                    <Avatar className="size-28">
                        <AvatarImage src={DefaultAvatarFile} />
                    </Avatar>
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-bold text-primary">Mohamde Ben Chikh</h2>
                        <p className="text-muted-foreground">Fes,Moroco Joined 2022</p>
                    </div>
                    <div className="flex w-full items-center gap-2">
                        <Button className="flex-1 rounded-full" asChild>
                            <Link to={'/edit-profile'}>Edit Profile </Link>
                        </Button>
                        <Button className="flex-1 rounded-full" variant={'secondary'}>Logout</Button>
                    </div>
                </Column>

                <Column className="w-full space-y-4">
                    <div className="grid gap-2">
                        <strong>About</strong>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt dignissimos doloremque, amet quisquam eveniet velit. Atque quaerat quod doloremque eius dicta deserunt aspernatur. Et nemo eos tempore laudantium quo.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <strong>Skills</strong>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >HTML</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >CSS</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >JavaScript</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >React</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >TypeScript</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >Tailwindcss</span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <strong>Languages</strong>
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >Arabic</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >English</span>
                            <span className="text-xs py-0.5 bg-accent rounded-full px-2" >French</span>
                        </div>
                    </div>
                </Column>
            </Column>
        </Column>
    )
}