import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Resources() {
    const insights = [
        {
            title: "Vietnam SaaS Market Outlook 2024",
            description: "Comprehensive analysis of the Vietnamese SaaS industry trends and opportunities",
            date: "March 2024",
            readTime: "8 min read"
        },
        {
            title: "Digital Transformation in Vietnamese SMEs",
            description: "How small and medium enterprises in Vietnam are adopting digital solutions",
            date: "February 2024",
            readTime: "6 min read"
        },
        {
            title: "E-commerce Growth Patterns in Vietnam",
            description: "Understanding the rapid expansion of online retail in the Vietnamese market",
            date: "January 2024",
            readTime: "10 min read"
        }
    ];

    const caseStudies = [
        {
            title: "International CRM Platform Success",
            description: "How we helped a global CRM provider establish a strong presence in Vietnam",
            industry: "SaaS Technology",
            result: "150% revenue growth in 12 months"
        },
        {
            title: "E-learning Platform Market Entry",
            description: "Strategic market entry for an educational technology company",
            industry: "EdTech",
            result: "50,000+ active users in 8 months"
        },
        {
            title: "Healthcare Software Expansion",
            description: "Successful expansion of healthcare management software across Vietnam",
            industry: "HealthTech",
            result: "Partnership with 25+ hospitals"
        }
    ];

    const news = [
        {
            title: "Tricasia Expands Advisory Services",
            description: "New comprehensive business expansion advisory services now available",
            date: "April 2024",
            category: "Company News"
        },
        {
            title: "Vietnam Tech Scene: Q1 2024 Report",
            description: "Latest insights on Vietnamese technology sector developments",
            date: "April 2024",
            category: "Market Update"
        },
        {
            title: "New Partnership with Local Distributors",
            description: "Strategic partnerships to enhance our sales channel development services",
            date: "March 2024",
            category: "Partnership"
        }
    ];

    return (
        <>
            <section className="py-32 bg-primary text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(0, 0%, 0%) 0%, hsl(16, 100%, 30%) 100%)" }}>
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            <span className="text-[#FF4A10]">Resources</span> & Insights
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Market intelligence, case studies, and latest news from Vietnam
                        </p>
                    </div>
                </div>
            </section>

            {/* Resources Content */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <Tabs defaultValue="insights" className="max-w-6xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3 mb-12">
                            <TabsTrigger value="insights" className="text-lg">Market Insights</TabsTrigger>
                            <TabsTrigger value="case-studies" className="text-lg">Case Studies</TabsTrigger>
                            <TabsTrigger value="news" className="text-lg">Latest News</TabsTrigger>
                        </TabsList>

                        {/* Insights Tab */}
                        <TabsContent value="insights">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-foreground mb-4">Market Insights</h2>
                                <p className="text-lg text-muted-foreground">
                                    Deep market analysis and strategic insights for the Vietnamese market
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {insights.map((insight, index) => (
                                    <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-3">
                                                <span className="text-sm text-[#FF4A10] font-semibold">{insight.date}</span>
                                                <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                                            </div>
                                            <CardTitle className="text-xl text-foreground">{insight.title}</CardTitle>
                                            <CardDescription className="text-base">{insight.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button variant="ghost" className="p-0 h-auto text-[#FF4A10] hover:text-[#FF4A10]/80">
                                                Read More →
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Case Studies Tab */}
                        <TabsContent value="case-studies">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
                                <p className="text-lg text-muted-foreground">
                                    Real-world examples of successful market entries and business expansions
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {caseStudies.map((study, index) => (
                                    <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-3">
                                                <span className="text-sm text-[#FF4A10] font-semibold">{study.industry}</span>
                                            </div>
                                            <CardTitle className="text-xl text-foreground">{study.title}</CardTitle>
                                            <CardDescription className="text-base">{study.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="bg-muted p-4 rounded-lg mb-4">
                                                <p className="text-sm font-semibold text-foreground">Key Result:</p>
                                                <p className="text-[#FF4A10] font-bold">{study.result}</p>
                                            </div>
                                            <Button variant="ghost" className="p-0 h-auto text-[#FF4A10] hover:text-[#FF4A10]/80">
                                                View Case Study →
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* News Tab */}
                        <TabsContent value="news">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-foreground mb-4">Latest News</h2>
                                <p className="text-lg text-muted-foreground">
                                    Stay updated with the latest developments and company news
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {news.map((article, index) => (
                                    <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-3">
                                                <span className="text-sm text-[#FF4A10] font-semibold">{article.category}</span>
                                                <span className="text-sm text-muted-foreground">{article.date}</span>
                                            </div>
                                            <CardTitle className="text-xl text-foreground">{article.title}</CardTitle>
                                            <CardDescription className="text-base">{article.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button variant="ghost" className="p-0 h-auto text-[#FF4A10] hover:text-[#FF4A10]/80">
                                                Read More →
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold text-foreground mb-8">Stay Informed</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Subscribe to our newsletter for the latest market insights and business intelligence
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-lg border border-input bg-background text-foreground flex-1 max-w-sm"
                            />
                            <Button className="px-8">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}