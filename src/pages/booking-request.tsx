import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AppHeader from "@/components/app-header";

export default function BookingRequest() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        message: ""
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        console.log("Booking request submitted:", formData);
        // Add API call here
    };

    return (
        <div className="flex flex-col w-full flex-1">
            {/* Header */}
            <AppHeader title="Request Booking" />

            {/* Skill Listing */}
            <div className="p-4">
                <div className="flex flex-col md:flex-row gap-4 rounded-xl p-4 bg-muted">
                    <div className="flex-1">
                        <p className="text-muted-foreground text-sm mb-1">Skill Listing</p>
                        <h3 className="text-lg font-bold mb-2">Photography Basics</h3>
                        <p className="text-muted-foreground text-sm">
                            Learn the fundamentals of photography, including camera settings, composition, and lighting techniques.
                        </p>
                    </div>
                    <div
                        className="bg-cover bg-center aspect-video rounded-xl min-w-[120px] md:w-1/3"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwUZ1LJopI0Btj03nJPfzwpZxt6kqOi_Zpppv80354zgoSiY7RR_i2F33Z7pNI9a3OsjMowjbjobhiuaLbTd9bXBCv8xxp1hsKZRXxjiz7cUuzFWLwX37PHmjgjkI7vD2n-1Oa8XO_o4tkDQ-wH7zfYtMNpFNketv7i_8VG8-ii_Lw4l-hT3p_NVE6jbf7J1mCYyRfCmAyRi8rkPauoTH-CrOBBCoSR0cPgorhTj6mvuSKf5jLaLO-lSP0NgPayzX2Pq6zF-k9EQw1")'
                        }}
                    />
                </div>
            </div>

            {/* Date & Time Selection */}
            <div className="p-4">
                <h3 className="text-lg font-bold mb-3">Select Date & Time</h3>

                <div className="space-y-4">
                    <div>
                        <Select value={formData.date} onValueChange={v => handleChange('date', v)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mon">Monday, July 15</SelectItem>
                                <SelectItem value="tue">Tuesday, July 16</SelectItem>
                                <SelectItem value="wed">Wednesday, July 17</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Select value={formData.time} onValueChange={v => handleChange('time', v)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Time" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="9am">9:00 AM - 10:00 AM</SelectItem>
                                <SelectItem value="10am">10:00 AM - 11:00 AM</SelectItem>
                                <SelectItem value="2pm">2:00 PM - 3:00 PM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Textarea
                            placeholder="Add a message or notes"
                            className="min-h-36"
                            value={formData.message}
                            onChange={e => handleChange('message', e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="p-4 mt-auto">
                <Button
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={!formData.date || !formData.time}
                >
                    Send Request
                </Button>
            </div>
        </div>
    );
}