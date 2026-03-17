"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#030014] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.2)}
          className="text-center mb-16"
        >
          <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.4)}
          className="bg-[#0a0a1f] border border-[#7042f861] rounded-2xl p-8 md:p-12 mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white focus:outline-none focus:border-[#7042f8] transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white focus:outline-none focus:border-[#7042f8] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#030014] border border-[#7042f861] rounded-lg text-white focus:outline-none focus:border-[#7042f8] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Message */}
            {status !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  status === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : status === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/50"
                    : "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                }`}
              >
                {status === "loading" ? "Sending..." : statusMessage}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Direct Contact Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.6)}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Email Cards */}
          <div className="bg-[#0a0a1f] border border-[#7042f861] rounded-xl p-6 text-center hover:border-[#7042f8] transition-colors">
            <FaEnvelope className="text-3xl text-[#7042f8] mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email Me</h3>
            <a href="mailto:contact@danabestun.dev" className="text-[#7042f8] hover:underline">
              contact@danabestun.dev
            </a>
          </div>

          <div className="bg-[#0a0a1f] border border-[#7042f861] rounded-xl p-6 text-center hover:border-[#7042f8] transition-colors">
            <FaEnvelope className="text-3xl text-cyan-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Alternative</h3>
            <a href="mailto:danadev25@gmail.com" className="text-cyan-500 hover:underline">
              danadev25@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.8)}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Or find me on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/danabestun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#0a0a1f] border border-[#7042f861] text-white hover:bg-[#7042f861] hover:border-[#7042f8] transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/danabestun/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-[#0a0a1f] border border-[#7042f861] text-white hover:bg-[#7042f861] hover:border-[#7042f8] transition-all duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
