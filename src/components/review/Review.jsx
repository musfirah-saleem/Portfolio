
"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"

const reviewsData = [
  {
    id: 1,
    name: "Shamsul Alam",
    location: "IN",
    reviewCount: 2,
    avatar: "/assets/review/review1.png",
    title: "Exceeded Expectations",
    content: "I highly recommend Tecz Work to anyone looking for top-notch services. Worth the money!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohsan Wasli",
    location: "PK",
    reviewCount: 83,
    avatar: "/assets/review/review2.jpg",
    title: "Great Experience",
    content: "I'm very happy with the website for my business. Highly recommended and thumbs up.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "US",
    reviewCount: 15,
    avatar: "/assets/review/review3.png",
    title: "Outstanding Service",
    content: "The team delivered exactly what we needed. Professional, timely, and excellent quality work.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    location: "EG",
    reviewCount: 7,
    avatar: "/assets/review/review4.png",
    title: "Highly Satisfied",
    content: "Fantastic experience from start to finish. The results exceeded our expectations completely.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "CA",
    reviewCount: 42,
    avatar: "/assets/review/review5.png",
    title: "Perfect Solution",
    content: "They understood our requirements perfectly and delivered a solution that works flawlessly.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Miller",
    location: "UK",
    reviewCount: 28,
    avatar: "/assets/review/review1.png",
    title: "Exceptional Quality",
    content: "The attention to detail and quality of work is remarkable. Will definitely work with them again.",
    rating: 5,
  },
]

function ReviewCard({ review }) {
  return (
    <Card className="w-[420px] flex-shrink-0 mx-2 bg-card border border-border">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
            <AvatarFallback>
              {review.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">{review.name}</h3>
            <p className="text-sm text-muted-foreground">
              {review.location} · {review.reviewCount} Reviews
            </p>
          </div>
        </div>

        <div className="border-t border-border mb-3"></div>

        <div className="mb-3">
          <Image src="/assets/stars.svg" alt="5 star rating" width={120} height={24} className="h-6 w-auto" />
        </div>

         {/* <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {/* <span className="text-sm text-gray-600 ml-2">7 months ago</span> */}
                {/* </div>  */}

        <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{review.content}</p>
      </CardContent>
    </Card>
  )
}

export default function Review() {
  const duplicatedReviews = [...reviewsData, ...reviewsData, ...reviewsData]

  return (
    <div className="py-16 bg-[#F9F8F5] overflow-hidden">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Trusted by businesses worldwide</p>
        </div>

        <div className="relative mb-8 ">
          <div className="flex scroll-left">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`top-${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex scroll-right">
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`bottom-${review.id}-${index}`} review={review} />
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
      `}</style>
    </div>
  )
}
