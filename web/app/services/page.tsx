import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "@/components/ui/card"

export default function Services() {
    const services = [
        {
            title: "Market Research & Analysis",
            description: "Comprehensive market intelligence and competitive analysis",
            features: [
                "Industry landscape assessment",
                "Competitor analysis and positioning",
                "Consumer behavior insights",
                "Market size and growth projections",
                "Regulatory environment analysis"
            ]
        },
        {
            title: "Sales Development",
            description: "Strategic sales channel development and optimization",
            features: [
                "Sales strategy development",
                "Channel partner identification",
                "Sales team training and support",
                "Lead generation strategies",
                "Performance monitoring and optimization"
            ]
        },
        {
            title: "Business Expansion",
            description: "End-to-end support for business expansion in Vietnam",
            features: [
                "Market entry strategy",
                "Legal and regulatory compliance",
                "Local partnership facilitation",
                "Operational setup guidance",
                "Cultural adaptation consulting"
            ]
        }
    ];

    return (
        <>
            <section className="py-32 bg-primary text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(0, 0%, 0%) 0%, hsl(16, 100%, 30%) 100%)" }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Our <span className="text-[#FF4A10]">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Comprehensive solutions for your Vietnam market entry and growth
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-8">Strategic Market Entry Solutions</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We provide end-to-end consulting services designed to ensure your success in the Vietnamese market.
                            Our expertise spans market research, sales development, and business expansion strategies.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <div className="w-16 h-16 bg-[#FF4A10] rounded-lg mb-4 flex items-center justify-center">
                                        <div className="w-8 h-8 bg-primary-foreground rounded"></div>
                                    </div>
                                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                                    <CardDescription className="text-lg">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-[#FF4A10] rounded-full flex-shrink-0"></div>
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-8">Our Process</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A proven methodology that ensures successful market entry and sustainable growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { step: "01", title: "Discovery", description: "Understanding your business goals and market objectives" },
                            { step: "02", title: "Analysis", description: "Comprehensive market research and competitive landscape analysis" },
                            { step: "03", title: "Strategy", description: "Developing customized market entry and growth strategies" },
                            { step: "04", title: "Execution", description: "Implementation support and ongoing optimization" }
                        ].map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#FF4A10] text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                                <p className="text-muted-foreground">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-muted-foreground">
                        Contact us today to discuss your market entry strategy
                    </p>
                    <Button variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary">
                        Schedule a Consultation
                    </Button>
                </div>
            </section>
        </>
    )
}