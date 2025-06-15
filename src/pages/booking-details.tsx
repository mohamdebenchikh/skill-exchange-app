import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function BookingDetails() {
  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Booking Details" />

      {/* Listing Details */}
      <h2 className="text-2xl font-bold px-4 pb-3 pt-5">Listing Details</h2>
      <Card className="mx-4 p-0 mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-muted-foreground text-sm">Skill Exchange</p>
              <h3 className="text-lg font-bold">Photography Basics</h3>
              <p className="text-muted-foreground text-sm">
                Learn the fundamentals of photography, including camera settings, composition, and lighting techniques.
              </p>
            </div>
            <div className="bg-muted rounded-xl w-full md:w-1/3 aspect-video" />
          </div>
        </CardContent>
      </Card>

      {/* Session Information */}
      <h2 className="text-2xl font-bold px-4 pb-3">Session Information</h2>
      
      <div className="space-y-2 px-4">
        {/* Provider */}
        <Card className="p-0">
          <CardContent className="p-4 flex items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAOy33urNJ0EE80aJWj5BTvGzQfuEpHbIxnSKteLhyIt46iA6RjklSCOBGyql4hTKJG-aOuPY2falclIQesyUeYRFs28YZ5r6JDcDHpRhk9uAtsQwwKgPbXQATQznu3vFhvtpZvBfiM8vj5Oa-JtQhlqQwDYU0whx_NCHhfrmzGWJ98XpsewiCr14AQ4Pjs1nTnKl9ruNgD_1TRsP5XvaL0QhVAIfmRyBvXHmViWRyPdn0lZKzbW0aLAvASf1TkyWYyt78v70WJ3mU" />
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Sophia Bennett</p>
              <p className="text-muted-foreground text-sm">Provider</p>
            </div>
          </CardContent>
        </Card>

        {/* Date & Time */}
        <Card className="p-0">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-muted rounded-lg p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">July 20, 2024, 2:00 PM</p>
              <p className="text-muted-foreground text-sm">Date & Time</p>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="p-0">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-muted rounded-lg p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Remote Session</p>
              <p className="text-muted-foreground text-sm">Location</p>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card className="p-0">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-muted rounded-lg p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
              </svg>
            </div>
            <p className="font-normal flex-1">Status: Confirmed</p>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <h2 className="text-2xl font-bold px-4 pb-3 pt-8">Actions</h2>
      <div className="flex gap-3 px-4 pb-6">
        <Button variant="secondary" className="flex-1">
          Reschedule
        </Button>
        <Button className="flex-1">
          Cancel
        </Button>
      </div>
    </div>
  );
}