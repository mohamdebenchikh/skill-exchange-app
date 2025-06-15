import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AppHeader from "@/components/app-header";

export function ListingDetails() {
  return (
    <div className="flex flex-col w-full flex-1">
      {/* Header */}
      <AppHeader title="Listing details" />

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Gallery */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          <Card className="aspect-square p-0 overflow-hidden">
            <div 
              className="w-[100px] h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6hNDCZ-CDpFNAywtvveubYXjvhE5IW1Ge8pSDpca8n-kSDBg5qnWHKU3U5iNbccjwM7wFYJOBh3Jcafuo1w0jRO3d-kE9Q-X6KEfvBecZfkH3k-bUdt3LlBQjU1LabmuKucEsz8BOhJfAsUTy4C36H084NOLwKR0FthoBj3xsh6pnI5e8-mZHcb5G3z5DOkZ0iT3Og5mILZCSSjXkWbJ4kCHrl4-J3u0k__2IIhLYVo3R6cB1sExjJ2SeuphzBTbZQr18kWaQ8xfE")' }}
            />
          </Card>
          <Card className="aspect-square p-0 overflow-hidden">
            <div 
              className="w-[100px] h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClrpCHO1TC-Tk8fnMwTxzG-OzW6U8dr4AaSGCwhw2UWf25AGXA5g-FeSE1npMCwVL6TZnoo_63PRHfvSKqwi1SRA5dmgG1kudT31vRoc5Fi0JwVgWs-HCm_RtAu9PfpCjnAtG3I3BI-V1-hAD6f6kdZEzDGj8Ia3XuL-JEm84gkfMD9u7j-KRty-usUWknUc1fSPvrwP5iBC7Gtlm21m6rxJn-Hgx57XShDBFebfdTAeeVmN-ur2aCe9egOyVIuoB3p5S9b56pfOnc")' }}
            />
          </Card>
          <Card className="aspect-square p-0 overflow-hidden">
            <div 
              className="w-[100px] h-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4Ww4M_vPixjo-Xbx9RIv-3ECExrZAnd0bq1XQIt-E-FhGpe13TJptCpadicRXI9s_8Hl0PPPLeJnSDSPjjJxVNMAGsw0pr9r6gX-QGw1wNgWU3-4GUDJHzoDrTJqMHmETirPmpPWnXbzoUAek4cShMQfLBjCqnBdBCiSmsJrRdFJtTKRlAaCT0JP5a-uj-yPuKPF_qAZy7K61DVXbUIwYkYONv2um2m8rS1MsVVZJfyO56__g99g7vcI7cyG3kf60R3bdMjl3w0SQ")' }}
            />
          </Card>
        </div>
        <p className="text-lg font-medium">Interior Design</p>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVvgkJ83jKNTbV53rAIAGRWzW6zkDFIpRoB_C00QGLDjLWTtMf-aBOEMEhUNCl-oN548ppGBz2nBtKBUJUIMklqkpUdsQgkKgZkJoyPs5fHwyy04-URDyrKFN6IsgXRNBEXI9LFGm7qx0DHKQ0lyFk3JFjWj1OYBzyKRa_xzKi4C0MGe0WCxGao9Y9z_FRsCTrTFqHozWaDWWa72Vg2BH6VCe-7j3vTA7QE4RHik-OwgG91jgxNgRCRBhi9lDFrAXJDwQN4YFeGyFA" 
              alt="Sophia Bennett"
            />
          </Avatar>
          <div>
            <h3 className="text-xl font-bold">Sophia Bennett</h3>
            <p className="text-muted-foreground">Interior Designer</p>
            <p className="text-muted-foreground">4.8 (120 reviews)</p>
          </div>
        </div>

        {/* Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-3xl font-bold">4.8</p>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary" />
              ))}
              <Star className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">120 reviews</p>
          </div>
          
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="grid grid-cols-[20px_1fr_40px] items-center gap-2">
                <span>{rating}</span>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${[70, 20, 5, 3, 2][5-rating]}%` }}
                  />
                </div>
                <span className="text-muted-foreground text-right">
                  {[70, 20, 5, 3, 2][5-rating]}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Details Sections */}
        {[
          { title: "About", content: "I'm an experienced interior designer with a passion for creating beautiful and functional spaces. I specialize in residential design and offer a range of services, from concept development to project management. Let's transform your home!" },
          { title: "Category", content: "Interior Design" },
          { title: "Price", content: "$150 / hour" },
          { title: "Location", content: "Remote or In-Person (San Francisco, CA)" },
          { title: "Availability", content: "Available on weekdays and weekends. Please check availability for specific dates and times." },
        ].map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-bold">{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}

        <Button className="w-full">Check Availability</Button>

        {/* Reviews */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Reviews</h3>
          
          {[
            { 
              name: "Olivia Carter", 
              time: "2 months ago", 
              avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG_cb1_E5gxGuB-JPfixPmSvu4gpx-ffxIqo4G--XawEGzcFNmtuF7S3RFmqQiLQwdcyCkg1HM3YsSM9PS06IrqEre9yKYDDvjDgC1WIreRuHTouTpTZbTaLZwd8xXLbp67gY5tK_ZYlK4NuklLFA0ME9-oQDpj9ucJzljzUdgV3WuQA51gTTE6Pp81MOF4o0Q2Y6CgkiYxR1hpqzDhAAyEtyHsFKSKKwUMxwW4umTUOpXx_aabUG7tJo2N8RDBBrPHrp8qj9YKyY_", 
              rating: 5,
              content: "Sophia is an amazing interior designer! She helped me create the perfect living room. Her attention to detail and creative ideas were invaluable.",
              likes: 12,
              dislikes: 2
            },
            { 
              name: "Ethan Walker", 
              time: "3 months ago", 
              avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrrQLKe-kZsilctCFy5sBAPMXF61P-AR_dwY8LkXpQ6vlcGLm4nn71COJWP9hxi6b69_TsCBifX25zH8nAHvcBD6na3Sg1RVlg-62JmmZa9KcvXBsTW6So0jfU2rhYbHMV08c89tF7pJ0xA7cyxcAt5z84376WPfXVl9-zgLOCX67mDuz9AE3x3vUu-KKoCZf3ghEkfnbbxSMyc_o_FFcTCm5w8cjnmncyHXCbYela3-9D9ZONt0_qcDcbQCcAkbbrgehtJ64WHh7", 
              rating: 4,
              content: "Sophia did a great job with my home office. She was professional and delivered on time. I'm very happy with the result.",
              likes: 8,
              dislikes: 1
            }
          ].map((review, index) => (
            <Card key={index} className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.name} />
                </Avatar>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <p className="text-muted-foreground text-sm">{review.time}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'fill-primary' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              
              <p>{review.content}</p>
              
              <div className="flex gap-6 text-muted-foreground">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.likes}</span>
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <ThumbsDown className="w-4 h-4" />
                  <span>{review.dislikes}</span>
                </Button>
              </div>
            </Card>
          ))}
          
          <Button variant="link" className="text-muted-foreground underline">
            See All Reviews
          </Button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="sticky bottom-0 bg-background border-t p-4">
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-12">Send Booking Request</Button>
          <Button variant="outline" className="h-12">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}