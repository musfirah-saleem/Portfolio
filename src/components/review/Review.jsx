"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "shane_gaffo",
    location: "Ireland",
    reviewCount: 2,
    avatar: "/assets/review/review1.png",
    title: "Exceeded Expectations",
    content:
      "Speed. The service was fast and communications were great. All going well I will work with Muhammad going forward",
    rating: 5,
  },
  {
    id: 2,
    name: "maxi2322",
    location: "Argentina",
    reviewCount: 83,
    avatar: "/assets/review/review2.jpg",
    title: "Great Experience",
    content:
      "siempre una gran experiencia trabajar con Mohhamed, sin dudas lo recomiendo para las personas que esten en este negocio, gente muy responsable y amable para resolver todos las dudas que teniamos. Seguiremos confiando en ellos",
    rating: 5,
  },
  {
    id: 3,
    name: "hymowitz1957",
    location: "United States",
    reviewCount: 15,
    avatar: "/assets/review/review3.png",
    title: "Outstanding Service",
    content:
      "Professional at its finest . Attention to detail and communication is by far outstanding",
    rating: 5,
  },
  {
    id: 4,
    name: "commercialteam0",
    location: "Egypt",
    reviewCount: 7,
    avatar: "/assets/review/review4.png",
    title: "Highly Satisfied",
    content:
      "Top notch service , and he's very helpful and knows about lots of aspects.. definitely, will work with Mr, Moin again.",
    rating: 5,
  },
  {
    id: 5,
    name: "jessiaus",
    location: "Australia",
    reviewCount: 42,
    avatar: "/assets/review/review5.png",
    title: "Perfect Solution",
    content:
      "I had an urgent issue with a new listing in my Amazon seller account, and the seller immediately resolved it. They also helped me correctly set up and made sure everything was in order. Super efficient, knowledgeable, and responsive—highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "sulimanabdulraz",
    location: "Saudi Arabia",
    reviewCount: 28,
    avatar: "/assets/review/review1.png",
    title: "Exceptional Quality",
    content:
      "I recently consulted with an Amazon FBA expert and was impressed by their insights and tailored strategies. They simplified complex concepts and addressed my specific concerns, showcasing deep knowledge of the marketplace. I left with actionable steps and a boost in confidence for my business's growth potential.",
    rating: 5,
  },
];

function ReviewCard({ review }) {
  return (
    <Card className="w-[420px] sm:w-[380px] max-sm:w-[85%] flex-shrink-0 mx-2 bg-card border border-border">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={review.avatar || "/placeholder.svg"}
              alt={review.name}
            />
            <AvatarFallback>
              {review.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground text-base sm:text-lg">
              {review.name}
            </h3>
            <p className="text-sm text-muted-foreground">{review.location}</p>
          </div>
        </div>

        <div className="border-t border-border mb-3"></div>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
          {review.title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {review.content}
        </p>
      </CardContent>
    </Card>
  );
}

export default function Review() {
  const duplicatedReviews = [...reviewsData, ...reviewsData, ...reviewsData];

  return (
    <div className="py-16 bg-[#F9F8F5] overflow-hidden">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 max-sm:text-2xl">
            What My Clients Say
          </h2>
          <p className="text-gray-600 max-sm:text-sm">
            Trusted by businesses worldwide
          </p>
        </div>

        {/* ✅ Top Row (visible on all screens) */}
        <div className="relative mb-8">
          <div className="flex scroll-left max-sm:overflow-x-auto max-sm:scrollbar-hide max-sm:animate-none">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`top-${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>

        {/* ✅ Bottom Row (hidden on mobile) */}
        <div className="relative max-sm:hidden">
          <div className="flex scroll-right">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard
                key={`bottom-${review.id}-${index}`}
                review={review}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        @media (max-width: 640px) {
          .scroll-left,
          .scroll-right {
            animation: none !important;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
