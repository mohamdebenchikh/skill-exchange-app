import AppHeader from "@/components/app-header";
import { Heart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Favorites() {
  const favorites = [
    {
      id: 1,
      title: "Photography Basics",
      provider: "Sophia Clark",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCqDlBaJrzyke0NoYSNYj2SIYssUWtigCvj5vzODbdsFptHmd0Q3_nULMGTwY3qfdhx3kxRX8GJT-FomIPiilY9FUqAgG5er2QDbt7FTWzql7aY4srw4SCdvaLJSqiozbhjmxp6PtxJhbEKRCt4_BM-MD1a5xJOqvZn7N0OtFaHoIgoJEGqDc10VO5j1RYu8LPNhNCKJTvRbyRCpPYX5QncRbz8pY7xFC7BFi6BV1QEkHPe5PQ_8PlnFnhWDirnqymFjqRK4oeRP8"
    },
    {
      id: 2,
      title: "Coding for Beginners",
      provider: "Ethan Bennett",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUuAijy1doZYs6do-ryLurhtwTqpNfu014b1D2Ij8VRQyrP5Cb79yQWhdkGqwCVm3d2U_ILFM16RMtakXKSXTSKYV2t-91NzPa512gkJhIUJ6-SC07iwe8Qheu6RzN8W1zw9R9xWzOog6V81ZvtaeXgaKEyuWpofVXStuu0mTII39C9QUa6fwBN2kDPeGfoPva89lwIgeN6_DS8XpT-MJg4uRPxXGbkMeCdyqaM7g6UwRzCC2rAw626FQRqvL66YStb7uvKdpQjSiT"
    },
    {
      id: 3,
      title: "Creative Writing Workshop",
      provider: "Olivia Carter",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkOIR5e0MxtqtPZZwwM7EC5NXqf1jxQBoyuP5W2F9gA1jaCdHUXvReSAPT6PxWkBIgoJdeFgTPW4ZRovrQ4Id7seHPYzVYPqEZAps92KRY61NepLjTqaYAQOYwVjRWbSCSvFEkJRfXJVJ37vVc4mZYmqNE0WQLjknVnOUgY2JoFLlAOupr9I3ju4wBfHeQifBYlrfoShJxbrkIvLINj9yXsdBBGymFaLQejB7waZ7gJMK_9AT5384TbjoSBIax9CTAa6drNhd6MVWB"
    },
    {
      id: 4,
      title: "Digital Marketing Strategies",
      provider: "Noah Davis",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTYwdevFatHRLdynJmHb3Qx9lYI7wN7vMxvJ-2kmbXKwOXKRBP0T6xnHbUVCphQ8wBc65AbnzyYaf-bvj3s6oWtSs-U-tk_eBoaXTnqCHNobPaTLXP_kjAfb3Lpoes27yL5-Q56KKItHduBKuMBPTT3dyy9HZfFuse6b35nB3ckhlNdbHp7FEfld2o63ROZKbJIILChECRifqvjql2jG5PELjmW5hIbrQbC3sG-NGnIYklTAYO0itz4zWujfWBp0T_S_XNieS0UeQN"
    }
  ];

  return (
    <div 
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Favorites" />

      {/* Favorites List */}
      <div className="flex-1">
        {favorites.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center gap-4">
              <Avatar className="size-14 rounded-lg">
                <AvatarImage src={item.imageUrl} alt={item.title} />
                <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-medium line-clamp-1">{item.title}</p>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  By {item.provider}
                </p>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Heart className="fill-none" size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}