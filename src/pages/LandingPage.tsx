
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, BrainCircuit, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  Transform Your Thinking with ThoughtFlow
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Capture, connect, and cultivate your ideas in a powerful new way. The ultimate tool for organized thinking.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {user ? (
                  <Link to="/dashboard">
                    <Button size="lg" className="gap-1.5">
                      Go to Dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <Button size="lg" className="gap-1.5">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
                <Link to="/login">
                  <Button variant="outline" size="lg">
                    {user ? "Account" : "Sign In"}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px] bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BrainCircuit size={120} className="text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything you need to organize your thoughts
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ThoughtFlow combines powerful features with an intuitive interface to help you capture and connect ideas effectively.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="rounded-full bg-primary/20 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                Capture your thoughts instantly with our quick-entry system before they slip away.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="rounded-full bg-primary/20 p-3">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Connected Thinking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Link related ideas together to form a network of knowledge that grows with you.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
              <div className="rounded-full bg-primary/20 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI Enhanced</h3>
              <p className="text-sm text-muted-foreground text-center">
                Get intelligent suggestions and connections based on your thinking patterns.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {user ? (
              <Link to="/dashboard">
                <Button size="lg" className="gap-1.5">
                  Go to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/signup">
                <Button size="lg" className="gap-1.5">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-8 mt-auto">
        <div className="container flex flex-col gap-4 px-4 md:px-6 md:flex-row md:gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="text-lg font-medium flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              ThoughtFlow
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Organize your ideas. Transform your thinking.
            </p>
          </div>
          <nav className="grid gap-4 sm:grid-cols-2 md:flex-1 lg:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                <li>
                  <Link to="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
