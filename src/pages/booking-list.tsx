import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AppHeader from "@/components/app-header";

export default function BookingList() {
  const bookings = [
    {
      title: "Photography Basics",
      date: "Tue, Apr 23 · 10:00 AM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5WXh-7whOWcj9V91gCgtXydBgl42y8R7C4SEbD39HiiZJHqh1cjWq-sRO4joF7bXR_jg9BmRJiXoApEnmr2shKHYURk29wNJahKMF_iBKFp3qSJzKSBq7iYe5TkmJH-1seIdurs3j8qdq8-yxaqx_qFAOfUGrkJIVmdVugtaCs7BBV7xWQk1AJwyMD_godyGkTpj9l_FVjrfRdr90E3DVebL6R7n091O-B-gDO9ozDKo0iFd8tSSwvjSGD52bHiZD7Y5R-Kh05wAM"
    },
    {
      title: "Advanced Coding Techniques",
      date: "Wed, Apr 24 · 2:00 PM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeTDWiMqP9WvEvXZF8yFg6EKf6Ofo9bKQo5rYo-12HfKsnMPuh67cRs2jXEA8UWyuAxNLP9mmvAAxL5I0yQr9N5ZlKTOAy8PrU65zgVoge5CyRIezO4GPTY7ZKK-rrJYIxlwfI0_8i9MBGZJIg6X-kQXBN6ziQyPh8nRXcolt7rzbgd_zzZuhrQmIRp_8xrDB8IE7DiU0xWEQBDJkDX9FyhNankIROp23JO3LZJCpw1SMWxjjchkl2bHkVJ43mtEZ3R-lgWlFsqg3b"
    },
    {
      title: "Creative Writing Workshop",
      date: "Thu, Apr 25 · 4:00 PM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmr5yFowrVRbX12JwHNp1DQvj00XF0MAIouFh-AGbv5JbkcmGELhRGjvFafKLltg5rwIBJaMlb3vzyKBNiOxuPxDWuyRk22hCOpT5tshty--iTtYrPWS-bcA0T5mG478Zhwjo1YMrSBoYq73eKlLHuOec6MKLNcsnRMSBe6LjnzAi-3MRetx24llibd4_vbE_TVGUzc-MZkwknYBZe6AjlRZ7Uty4pd53QkvFEJ43tC__H3iy10X6ewisCViAKYRVF-iiM_ioFFtW9"
    }
  ];

  return (
    <div className="flex flex-col  flex-1 w-full">
      {/* Header */}
      <AppHeader  title="My Bookings" />

      {/* Tab Navigation */}
      <Tabs defaultValue="upcoming" className="w-ful">
        <TabsList className="w-full grid grid-cols-3 mb-4  bg-background p-4">
          <TabsTrigger 
            value="upcoming" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-b-foreground data-[state=active]:shadow-none"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger 
            value="past" 
            className="text-muted-foreground data-[state=active]:border-b-2 data-[state=active]:border-b-foreground data-[state=active]:shadow-none"
          >
            Past
          </TabsTrigger>
          <TabsTrigger 
            value="pending" 
            className="text-muted-foreground data-[state=active]:border-b-2 data-[state=active]:border-b-foreground data-[state=active]:shadow-none"
          >
            Pending
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Bookings */}
        <TabsContent value="upcoming" className="space-y-2">
          {bookings.map((booking, index) => (
            <div key={index} className="flex items-center gap-4 p-4 hover:bg-muted/50">
              <div 
                className="bg-cover bg-center rounded-lg w-14 h-14" 
                style={{ backgroundImage: `url(${booking.image})` }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{booking.title}</h3>
                <p className="text-muted-foreground text-sm truncate">{booking.date}</p>
              </div>
              <div className="w-7 h-7 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Past Bookings */}
        <TabsContent value="past" className="p-4 text-center">
          <p className="text-muted-foreground">No past bookings</p>
        </TabsContent>

        {/* Pending Bookings */}
        <TabsContent value="pending" className="p-4 text-center">
          <p className="text-muted-foreground">No pending bookings</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}