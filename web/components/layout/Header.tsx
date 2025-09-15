"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/resources", label: "Resources" },
        { href: "/contact", label: "Contact us" }
    ];

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <header className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                        Tricasia
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`transition-colors ${
                                    isActive(item.href)
                                        ? "text-[#FF4A10] hover:text-[#FF4A10]/80"
                                        : "hover:text-accent/80"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Let's talk
                    </Button>
                </div>
            </div>
        </header>
    );
};