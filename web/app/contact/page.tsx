import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Linkedin, Facebook, Twitter, Clock, MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: "info@tricasiatest.com",
            description: "Send us an email anytime"
        },
        {
            icon: Phone,
            title: "Phone",
            details: "+123-456-7890",
            description: "Call us during business hours"
        },
        {
            icon: MapPin,
            title: "Office",
            details: "Ho Chi Minh City, Vietnam",
            description: "Visit our office location"
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: "Mon - Fri: 9:00 AM - 6:00 PM",
            description: "Vietnam timezone (UTC+7)"
        }
    ];
    return (
        <>
            <section className="py-32 bg-primary text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(0, 0%, 0%) 0%, hsl(16, 100%, 30%) 100%)" }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            <span className="text-[#FF4A10]">Contact</span> Us
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Ready to start your Vietnam market journey? Let's talk.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Ready to explore opportunities in the Vietnamese market? Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="Your first name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Your last name" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="your.email@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Your company name" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="How can we help you?" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your business goals and how we can assist you..."
                                        className="min-h-[120px]"
                                    />
                                </div>

                                <Button className="w-full md:w-auto px-8">Send Message</Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

                            <div className="grid gap-6 mb-12">
                                {contactInfo.map((info: any, index: any) => (
                                    <Card key={index}>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-[#FF4A10] rounded-lg flex items-center justify-center">
                                                    <info.icon className="w-6 h-6 text-primary-foreground" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                                                    <CardDescription>{info.description}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="font-semibold text-foreground">{info.details}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-[#FF4A10] hover:text-primary-foreground transition-colors"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-[#FF4A10] hover:text-primary-foreground transition-colors"
                                    >
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-[#FF4A10] hover:text-primary-foreground transition-colors"
                                    >
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Common questions about our services and working with us
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: "What industries do you work with?",
                                answer: "We work with various industries including SaaS, technology, e-commerce, healthcare, education, and manufacturing companies looking to enter the Vietnamese market."
                            },
                            {
                                question: "How long does market entry typically take?",
                                answer: "Market entry timelines vary depending on your industry and goals. Typically, our strategic planning phase takes 4-6 weeks, with implementation starting immediately after."
                            },
                            {
                                question: "Do you provide ongoing support?",
                                answer: "Yes, we offer ongoing consulting and support services to ensure your continued success in the Vietnamese market, including performance monitoring and strategy optimization."
                            },
                            {
                                question: "What makes Vietnam an attractive market?",
                                answer: "Vietnam offers a rapidly growing economy, young tech-savvy population, increasing digital adoption, and favorable business environment for foreign companies."
                            }
                        ].map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}