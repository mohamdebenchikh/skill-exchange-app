import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useState } from "react";

export default function LeaveReview() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  return (
    <div
      className="flex flex-col flex-1 w-full"
    >
      {/* Header */}
      <AppHeader title="Leave a Review" />

      {/* Provider Info */}
      <div className="flex items-center gap-4 p-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkoGvdvafL2jOhtxlNXgl-PpTPXd5n1e5a_RA8WBKUu-R-qAd70_1aBu2alxGAhwp1dqBpKdJM3od-mzwAX4lkW5ldZs9jWwjS_s7vybewj87Neo76b8qbv1pwcZWN_IefNjj0WBew4a6DDl2rPPd7YaTK12HdWhqPWHWM9jZE55EHPPJh8GQhdjGEA1hXcmzGrPV9qSkjNWElqRavCnoo9WI_DBTl48b23_v088xoblpJnpeRDswv1pzFnCNA4RYH5Hp2tGMg_ER" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">Sophia Carter</p>
          <p className="text-muted-foreground text-sm">Skill Provider</p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Rate your experience</h3>

        <div className="flex justify-center mb-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="text-3xl focus:outline-none transition-transform duration-200 hover:scale-110"
                aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
              >
                {star <= (hoverRating || rating) ? (
                  <Star className="fill-yellow-400 text-yellow-400" />
                ) : (
                  <Star className="text-muted-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Rating Labels */}
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Poor</span>
          <span>Excellent</span>
        </div>

        {/* Review Text */}
        <Textarea
          placeholder="Write your review..."
          className="min-h-36 bg-card border border-input"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div className="p-4 mt-auto">
        <Button
          className="w-full"
          disabled={rating === 0}
        >
          Submit Review
        </Button>
      </div>
    </div>
  );
}