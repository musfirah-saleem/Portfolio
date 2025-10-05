"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 mt-8 md:mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* left content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className=" font-semibold">
                  Need help with your Amazon business?
                </span>
              </p>
              <p>
                Whether you need help with timings, PPC strategy, or full
                account management, I'm here to help. Let's discuss your goals
                and explore how I can support your success.
              </p>
            </div>
          </div>

          {/* form section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-full py-6"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-full py-6"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message here"
                  className="w-full min-h-[120px] resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                size="lg"
                type="submit"
                disabled={loading}
                className="w-full group relative overflow-hidden 
             bg-[#FFCE12] rounded-full"
              >
                <span className="relative text-black z-10 flex items-center">
                  {loading ? "Sending..." : "Submit Your Inquiry"}
                </span>
                <span
                  className="absolute inset-0 
                   bg-[linear-gradient(45deg,#f1c40f,#f39c12)] 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity"
                />
              </Button>

              {status && (
                <p className="text-center text-sm text-gray-700">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* baki tumhara same UI neeche */}
      <div className="max-w-6xl mx-auto ">
        <div className="rounded-lg  py-20">
          <img
            src="/assets/hero.jpeg"
            alt="Modern workspace with laptop, coffee cup, and notebook"
            className="w-full h-[400px] object-cover rounded-lg "
          />
        </div>
      </div>

      <div className=" bg-white py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>

              <p className="text-gray-700">
                Get in touch to discuss your Amazon virtual assistant needs and
                how I can help you succeed in your business.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">
                    Operating Remotely – Serving Clients Globally
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Hours
                  </h3>
                  <p className="text-gray-700">Available upon request</p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/351931758289?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20Amazon%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 h-[400px] flex items-center justify-center">
              <img
                src="/assets/about02.jpg"
                alt="World map showing global service coverage"
                className="w-full h-full object-contain rounded rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
