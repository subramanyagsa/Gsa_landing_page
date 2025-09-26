import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom"; // Corrected import
import React from "react"; // Import React

export function PainPointsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <div
          className={cn(
            "inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800",
          )}
        >
          Pain Points
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground mt-4">
          Common Challenges We Address
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          We understand the frustrations you face. Our solution is designed to
          tackle these head-on, providing a seamless and efficient experience.
        </p>
        {/* Pain Points Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {/* Pain Point 1 */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <LightbulbIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Lack of Clarity
            </h3>
            <p className="text-center text-muted-foreground">
              Struggling to understand complex processes or requirements? We
              simplify everything.
            </p>
          </div>
          {/* Pain Point 2 */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <ClockIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Time-Consuming</h3>
            <p className="text-center text-muted-foreground">
              Spending too much time on manual tasks? Automate and accelerate
              your workflow.
            </p>
          </div>
          {/* Pain Point 3 */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <BugIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Error Prone</h3>
            <p className="text-center text-muted-foreground">
              Frequent mistakes leading to rework? Our system minimizes human
              error.
            </p>
          </div>
          {/* Pain Point 4 */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <UsersIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Poor Collaboration</h3>
            <p className="text-center text-muted-foreground">
              Difficulty coordinating with your team? Enhance communication and
              teamwork.
            </p>
          </div>
          {/* Pain Point 5 */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <BarChartIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Lack of Insights</h3>
            <p className="text-center text-muted-foreground">
              Unable to track progress or identify bottlenecks? Gain valuable
              data insights.
            </p>
          </div>
          {/* Pain Point 6 */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-3">
              <LockIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Security Concerns</h3>
            <p className="text-center text-muted-foreground">
              Worried about data protection? We prioritize the security of your
              information.
            </p>
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-10">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            to="/services"
          >
            Learn More
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BugIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9.13 4.93A4 4 0 0 1 12 3c2.07 0 3.87 1.37 4.8 3.25" />
      <path d="M3 7c3 0 5.5 2 8 2s5-2 8-2" />
      <path d="M7 13h10" />
      <path d="M10 16h4" />
      <path d="M17.98 10.1c.02.07.02.14.02.2v3.3c0 1.1-.9 2-2 2h-1v.5c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-.5h-1c-1.1 0-2-.9-2-2v-3.3c0-.06.01-.13.02-.2C7.5 10.7 9 11 12 11s4.5-3 5.98-3Z" />
      <path d="M12 22c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-.2.6-.5 1-.7 1-.5 2-1.1 2-2.3 0-1.6-1.3-3-3-3h-2c-1.3 0-3 1.3-3 3 0 1.6 1.5 2.4 2.7 3.5a5 5 0 0 1 2.3 4.5c0 1.1-.9 2-2 2H9a2 2 0 0 1-2-2c0-1.1.9-2 2-2h1" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default PainPointsSection;