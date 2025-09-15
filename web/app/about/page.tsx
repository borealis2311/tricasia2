import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <>
            <section className="py-32 bg-primary text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(0, 0%, 0%) 0%, hsl(16, 100%, 30%) 100%)" }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            About <span className="text-[#FF4A10]">Tricasia</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Your trusted partner for market success in Vietnam
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Tricasia was founded with a vision to bridge the gap between international businesses and the dynamic Vietnamese market. With years of experience in market research, sales development, and business expansion, we have helped numerous companies establish successful operations in Vietnam.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Our team combines deep local knowledge with international business expertise, ensuring that our clients receive strategic guidance that is both culturally aware and commercially effective.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To empower international businesses with the knowledge, connections, and strategies needed to thrive in the Vietnamese market through expert consulting and personalized support.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To be the leading consulting partner for businesses entering Vietnam, recognized for our expertise, integrity, and commitment to client success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to Work Together?</h2>
                    <p className="text-xl mb-8 text-muted-foreground">
                        Let's discuss how we can help your business succeed in Vietnam
                    </p>
                    <Button variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary">
                        Contact Us Today
                    </Button>
                </div>
            </section>
        </>
    )
}