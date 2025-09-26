import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center bg-background py-16 md:py-24">
      <div className="text-center space-y-6 p-8 max-w-md mx-auto rounded-lg border border-border/40 bg-card shadow-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-foreground">Page Not Found</p>
        <p className="text-muted-foreground text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Go to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;