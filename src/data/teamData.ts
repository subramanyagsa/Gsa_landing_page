export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  linkedinUrl?: string; // Added LinkedIn URL
}

export const teamMembers: TeamMember[] = [
  {
    name: "CA Sthuthi S Prabhu",
    title: "Founder & Chartered Accountant",
    imageUrl: "/sthuthis-prabhu.png",
    description: "A visionary leader with extensive experience in tax planning and financial advisory, dedicated to client success.",
    linkedinUrl: "https://www.linkedin.com/in/sthuthi-s-prabhu-a7b7b71b7/", // Placeholder URL
  },
  {
    name: "CA Subramanya Kamath",
    title: "Co-Founder & Chartered Accountant",
    imageUrl: "/subramanya-kamath.png",
    description: "Specializing in corporate finance and audit, Subramanya brings strategic insights to complex financial challenges.",
    linkedinUrl: "https://www.linkedin.com/in/subramanya-kamath-a7b7b71b7/", // Placeholder URL
  },
  {
    name: "CA Vishnu Acharya",
    title: "Senior Chartered Accountant",
    imageUrl: "/vishnu-acharya.png",
    description: "Expert in statutory compliance and financial reporting, ensuring businesses meet all regulatory requirements.",
    linkedinUrl: "https://www.linkedin.com/in/vishnu-acharya-a7b7b71b7/", // Placeholder URL
  },
  {
    name: "Ashwin D'Souza",
    title: "Head of Operations",
    imageUrl: "/ashwin-dsouza.png",
    description: "Manages day-to-day operations, ensuring seamless service delivery and client satisfaction.",
    linkedinUrl: "https://www.linkedin.com/in/ashwin-dsouza-a7b7b71b7/", // Placeholder URL
  },
];