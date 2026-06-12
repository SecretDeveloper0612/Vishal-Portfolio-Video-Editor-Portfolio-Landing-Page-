"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section className="py-32 bg-background relative" id="contact">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading tracking-widest uppercase text-foreground mb-4"
          >
            Let&apos;s Create <br/> <span className="text-accent">Something Amazing</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-heading tracking-wider uppercase text-foreground mb-6">
                Direct Contact
              </h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:Vishalvr0393@gmail.com" className="text-foreground/80 hover:text-accent transition-colors font-sans text-lg">
                    Vishalvr0393@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <a href="https://wa.me/918630091580" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-accent transition-colors font-sans text-lg">
                    +91 86300 91580
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading tracking-wider uppercase text-foreground mb-6">
                Socials
              </h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all hover:scale-110">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all hover:scale-110">
                  <FaLinkedin className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all hover:scale-110 font-bold font-sans">
                  Be
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 bg-card/40 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-sans text-muted-foreground uppercase tracking-wider">Name</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-sans"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-sans text-muted-foreground uppercase tracking-wider">Email</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-sans"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-sm font-sans text-muted-foreground uppercase tracking-wider">Project Type</label>
                  <select 
                    {...register("projectType")}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-sans appearance-none"
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">Select Project Type</option>
                    <option value="youtube" className="bg-card">YouTube Video</option>
                    <option value="commercial" className="bg-card">Commercial Ad</option>
                    <option value="shorts" className="bg-card">Reels / Shorts</option>
                    <option value="other" className="bg-card">Other</option>
                  </select>
                  {errors.projectType && <span className="text-red-500 text-xs">{errors.projectType.message}</span>}
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-sm font-sans text-muted-foreground uppercase tracking-wider">Budget Range</label>
                  <select 
                    {...register("budget")}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-sans appearance-none"
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">Select Budget</option>
                    <option value="under_1k" className="bg-card">Under $1,000</option>
                    <option value="1k_5k" className="bg-card">$1,000 - $5,000</option>
                    <option value="5k_10k" className="bg-card">$5,000 - $10,000</option>
                    <option value="10k_plus" className="bg-card">$10,000+</option>
                  </select>
                  {errors.budget && <span className="text-red-500 text-xs">{errors.budget.message}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-sans text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors font-sans resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/80 rounded-xl py-6 text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  size="lg" 
                  className="flex-1 rounded-xl py-6 text-lg border-border hover:bg-white/5"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Call
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
