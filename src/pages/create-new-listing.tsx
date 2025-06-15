import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Column } from "@/components/view";



export default function CreateNewListing() {
    return (
        <Column className="flex-1 w-full">
            <AppHeader title='Create New Listing' />
            <Column className="flex-1 w-full p-4">
                <Column className="w-full space-y-4">
                    <Input placeholder="Title" />
                    <Textarea placeholder="Description" />
                    <Input placeholder="Category" />
                    <Input placeholder="Price (optiona)" />
                    <Input placeholder="Location" />
                    <div className="flex py-2 items-center justify-between">
                        <span>Remote</span>
                        <Switch />
                    </div>

                    <div className="flex py-2 items-center justify-between">
                        <span>In-Person</span>
                        <Switch />
                    </div>
                    <div className="grid gap-2">
                        <div className="rounded-xl gap-2 flex flex-col items-center justify-center border h-[200px] w-full">
                            <strong className="text-lg">Upload images</strong>
                            <p className="text-sm text-muted-foreground">Showcase your skills with images</p>
                            <Button variant={'secondary'} className="rounded-full">Upload</Button>
                        </div>
                    </div>
                    <Button className="w-full">Publish listing</Button>
                </Column>
            </Column>
        </Column>
    )
}