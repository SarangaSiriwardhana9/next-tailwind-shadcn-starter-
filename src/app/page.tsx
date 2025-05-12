// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-[family-name:var(--font-geist-sans)] font-bold text-xl">
            NextJS Template
          </div>
          <nav className="flex items-center gap-6">
            <Link href="https://github.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Your Next.js Starter Template
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          Built with Next.js 15, TypeScript, Tailwind CSS v4, shadcn UI, and Framer Motion
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">
            Explore Components
          </Button>
          <Button variant="outline" size="lg">
            Read Documentation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 border-t">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.content}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href={feature.link} target="_blank">
                    Learn more
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Next.js 15",
    description: "The React Framework for the Web",
    content: "Next.js gives you the best developer experience with all the features you need for production.",
    link: "https://nextjs.org/docs",
  },
  {
    title: "Tailwind CSS v4",
    description: "A utility-first CSS framework",
    content: "Build modern designs without leaving your HTML. Tailwind's utility classes help you work faster and maintain consistent styling.",
    link: "https://tailwindcss.com/docs",
  },
  {
    title: "shadcn UI",
    description: "Beautifully designed components",
    content: "A collection of accessible and customizable components that you can copy and paste into your apps.",
    link: "https://ui.shadcn.com",
  },
];