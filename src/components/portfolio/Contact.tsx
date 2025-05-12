import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-portfolio-600 font-medium mb-2">Let's Connect</h2>
          <h3 className="text-3xl font-bold font-heading mb-4">
            Interested in Hiring?
          </h3>
          <p className="text-muted-foreground">
            Recruiting for a new role or have a fit on your tech team? Get in touch via this form, email, or LinkedIn, and I'll reply promptly!
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-background p-8 rounded-xl border border-border shadow-sm h-full">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-portfolio-100 rounded-lg h-fit">
                    <Mail className="h-5 w-5 text-portfolio-600" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Email</h5>
                    <a
                      href="mailto:contact@mrsandy.in"
                      className="text-foreground hover:text-portfolio-600 transition-colors"
                    >
                      contact@mrsandy.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-portfolio-100 rounded-lg h-fit">
                    <Phone className="h-5 w-5 text-portfolio-600" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">Phone</h5>
                    <a
                      href="tel:+11234567890"
                      className="text-foreground hover:text-portfolio-600 transition-colors"
                    >
                      [Redacted due to Privacy]
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-portfolio-100 rounded-lg h-fit">
                    <Linkedin className="h-5 w-5 text-portfolio-600" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</h5>
                    <a
                      href="https://linkedin.com/in/sandeepvishnoi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-portfolio-600 transition-colors"
                    >
                      linkedin.com/in/sandeepvishnoi
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-portfolio-100 rounded-lg h-fit">
                    <Github className="h-5 w-5 text-portfolio-600" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-1">GitHub</h5>
                    <a
                      href="https://github.com/mrsandyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-portfolio-600 transition-colors"
                    >
                      github.com/mrsandyy
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h5 className="text-sm font-medium text-muted-foreground mb-4">Resume</h5>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-portfolio-100 rounded-lg hover:bg-portfolio-200 transition-colors inline-flex items-center gap-2"
                  aria-label="Resume"
                >
                  <FileText className="h-5 w-5 text-portfolio-600" />
                  View PDF
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-background p-8 rounded-xl border border-border shadow-sm h-full">
              <h4 className="text-xl font-semibold mb-6">Send Me a Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-border focus-visible:ring-portfolio-600"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      required
                      className="border-border focus-visible:ring-portfolio-600"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Offer for [Role]"
                    required
                    className="border-border focus-visible:ring-portfolio-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to discuss a job offer..."
                    required
                    rows={6}
                    className="resize-none border-border focus-visible:ring-portfolio-600"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-600 hover:bg-portfolio-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
