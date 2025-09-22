// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";

// export function ServicesFooter() {
//   const [clients, setClients] = useState(0);
//   const [success, setSuccess] = useState(0);
//   const [support, setSupport] = useState(0);

//   useEffect(() => {
//     let c = 0,
//       s = 0,
//       sup = 0;
//     const interval = setInterval(() => {
//       if (c < 100) setClients(++c);
//       if (s < 98) setSuccess(++s);
//       if (sup < 24) setSupport(++sup);
//       if (c >= 500 && s >= 98 && sup >= 24) clearInterval(interval);
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-24 sm:py-32 bg-secondary/30">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid gap-8 sm:grid-cols-3 mb-20">
//           <Card className="text-center border-border/50 shadow-md hover:shadow-xl transition-all">
//             <CardContent className="pt-6">
//               <div className="flex justify-center mb-4">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl  bg-yellow-500/40">
//                   <Users className="h-7 w-7 text-primary" />
//                 </div>
//               </div>
//               <div className="text-4xl font-bold  mb-2">
//                 {clients}+
//               </div>
//               <div className="text-sm text-muted-foreground">
//                 Successful Clients
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="text-center border-border/50 shadow-md hover:shadow-xl transition-all">
//             <CardContent className="pt-6">
//               <div className="flex justify-center mb-4">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/40">
//                   <CheckCircle className="h-7 w-7 text-primary" />
//                 </div>
//               </div>
//               <div className="text-4xl font-bold  mb-2">
//                 {success}%
//               </div>
//               <div className="text-sm text-muted-foreground">Success Rate</div>
//             </CardContent>
//           </Card>

//           <Card className="text-center border-border/50 shadow-md hover:shadow-xl transition-all">
//             <CardContent className="pt-6">
//               <div className="flex justify-center mb-4">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-xl  bg-yellow-500/40">
//                   <Clock className="h-7 w-7 text-primary" />
//                 </div>
//               </div>
//               <div className="text-4xl font-bold mb-2">
//                 {support}/7
//               </div>
//               <div className="text-sm text-muted-foreground">
//                 Support Available
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
//             Ready to Scale Your Amazon Business?
//           </h2>
//           <p className="text-lg text-muted-foreground mb-10">
//             Join hundreds of successful sellers who trust us with their Amazon
//             growth. Get started today with a free consultation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="group relative overflow-hidden 
//              bg-[#FFCE12] rounded-full"
//             >
//               <span className="relative text-black z-10 flex items-center">
//                 Get Started Today
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </span>
//               <span
//                 className="absolute inset-0 
//                    bg-[linear-gradient(45deg,#f1c40f,#f39c12)] 
//                    opacity-0 group-hover:opacity-100 
//                    transition-opacity"
//               />
//             </Button>

//             <Button
//               variant="outline"
//               size="lg"
//               className="hover:bg-secondary/30 rounded-full"
//             >
//               Contact Our Team
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";

export function ServicesFooter() {
  const [clients, setClients] = useState(0);
  const [success, setSuccess] = useState(0);
  const [support, setSupport] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let c = 0,
            s = 0,
            sup = 0;
          const interval = setInterval(() => {
            if (c < 100) setClients(++c);
            if (s < 98) setSuccess(++s);
            if (sup < 24) setSupport(++sup);
            if (c >= 500 && s >= 98 && sup >= 24) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.3 } // start when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Counter Cards */}
        <div className="grid gap-8 sm:grid-cols-3 mb-20">
          <Card className="text-center border-border/50 shadow-md hover:shadow-xl transition-all">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/40">
                  <Users className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">{clients}+</div>
              <div className="text-sm text-muted-foreground">
                Successful Clients
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 shadow-md hover:shadow-xl transition-all">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/40">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">{success}%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 shadow-md hover:shadow-xl transition-all">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500/40">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">{support}/7</div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            Ready to Scale Your Amazon Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join hundreds of successful sellers who trust us with their Amazon
            growth. Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group relative overflow-hidden 
             bg-[#FFCE12] rounded-full"
            >
              <span className="relative text-black z-10 flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span
                className="absolute inset-0 
                   bg-[linear-gradient(45deg,#f1c40f,#f39c12)] 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity"
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="hover:bg-secondary/30 rounded-full"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
