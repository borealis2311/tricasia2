import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import businessHandshake from "/assets/business-handshake.jpg";
import HomeHero from "/assets/home.avif";
import Client1 from "/assets/client1.png";
import Client2 from "/assets/client2.png";
import Client3 from "/assets/client3.png";
import Client4 from "/assets/client4.png";
import Client5 from "/assets/client5.png";

const Index = () => {
  const services = [
    {
      title: "Market Research & Analysis",
      description: "Unlock the potential of the Vietnam SaaS industry with our expert services. We provide you with the most up-to-date and reliable insights to help you assess your product market and develop a strategic go-to-market plan. Our comprehensive analysis ensures that you make informed decisions for your investment in this dynamic markets.",
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute w-12 h-12 bg-orange-100 rounded-full"></div>
          <div className="absolute w-8 h-8 bg-[#FF4A10] rounded-full top-1 left-1"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full bottom-0 left-2"></div>
        </div>
      )
    },
    {
      title: "Sales Channel Development",
      description: "Foreign SaaS and tech companies utilizing international frameworks may encounter challenges in the Vietnamese market. Your local team may benefit from additional support. We localize, plan and implement development strategies, continuously adapting to meet evolving market demands.",
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute w-12 h-8 bg-orange-100 rounded-sm top-2 left-2"></div>
          <div className="absolute w-8 h-1 bg-[#FF4A10] rounded-full top-4 left-4 transform rotate-12"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full top-2 left-2"></div>
        </div>
      )
    },
    {
      title: "Business Expansion Advisory",
      description: "We furnish your team with vital insights, optimized processes, and proven methodologies to improve your closing rate, while strategically positioning your for sustainable growth and profitability in the Vietnamese market.",
      icon: (
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute w-12 h-12 bg-orange-100 rounded-sm"></div>
          <div className="absolute w-8 h-8 bg-[#FF4A10] rounded-sm top-1 left-1"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full bottom-0 right-2"></div>
        </div>
      )
    }
  ];

  const stats = [
    {
      number: "10+",
      description: "Years of enterprise technology sales experience"
    },
    {
      number: "150%",
      description: "Average annual growth for companies in portfolios"
    },
    {
      number: "$10M",
      description: "Average annual pipeline generated"
    },
    {
      number: "1,000+",
      description: "Consultant Network"
    }
  ];
  return (
    <>
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* Background Image - Full Width */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HomeHero.src})` }}
        />

        {/* Orange gradient blob */}
        <div
          className="absolute right-0 top-0 w-2/3 h-full opacity-80 bg-gradient-to-l from-orange-500 to-orange-600 rounded-l-full scale-110"
        />

        {/* Content Container */}
        <div className="relative z-10 w-full min-h-screen flex items-center">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-white">
                Your Trusted Partner<br />
                For Market Entry<br />
                <span className="text-accent">& Sales Growth in Vietnam</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-white">
                In Tricasia, we empower global technology companies to navigate and scale in one of Asia's most dynamic digital economies.
              </p>

              <Button
                size="lg"
                className="bg-[#FF4A10] hover:bg-[#FF4A10]/90 text-white px-8 py-6 text-lg rounded-full"
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF4A10] mb-4">OUR SERVICES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Strategic Market Entry</h3>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-48">
              {services.map((service, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#FF4A10] font-bold mb-4">
              Why choosing Tricasia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {stat.number}
                </div>
                <p className="text-white text-lg leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">ABOUT US</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Expert Guidance for Market Success
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Tricasia, we are dedicated to providing expert guidance and strategic consulting
                for businesses aiming for success in the Vietnamese market. Our team is committed to
                delivering customized solutions and unmatched support to ensure your market entry
                and sales growth objectives are achieved.
              </p>
            </div>
            <div className="flex justify-center bg-gradient-to-br from-black to-orange-900 p-4 rounded-lg">
              <img
                src={businessHandshake.src}
                alt="Business handshake representing partnership and collaboration"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#FF4A10]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">CLIENT TESTIMONIALS</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic text-white leading-relaxed mb-8">
              "Tricasia test has been instrumental in our successful market entry strategy.
              Their expertise and support have made a significant impact on our business growth in Vietnam."
            </blockquote>

            <div className="space-y-2">
              <p className="font-bold text-lg text-white">Josh Phillips</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-4">Clients</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">OUR VALUED CLIENTS</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {/* Placeholder for client logos */}
            {[Client1, Client2, Client3, Client4, Client5].map((client, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-muted rounded flex items-center justify-center"
              >
                <img src={client.src} alt="Client Logo" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">GET IN TOUCH</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Start Your Market Success Journey
            </h3>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl leading-relaxed mb-12">
              Reach out to Tricasia to embark on your journey towards market entry and sales growth in Vietnam.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent" />
                <a
                  href="mailto:info@tricasiatest.com"
                  className="text-lg hover:text-accent transition-colors"
                >
                  info@tricasiatest.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-accent" />
                <a
                  href="tel:+123-456-7890"
                  className="text-lg hover:text-accent transition-colors"
                >
                  +123-456-7890
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="p-3 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg flex items-center gap-2 px-6"
        >
          <MessageCircle className="w-5 h-5" />
          Let's Chat!
        </Button>
      </div>
    </>
  );
};

export default Index;