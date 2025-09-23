export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "CA Sthuthi S Prabhu",
    title: "Founder & Chartered Accountant",
    imageUrl: "/sthuthis-prabhu.png",
    description: "A visionary leader with extensive experience in tax planning and financial advisory, dedicated to client success.",
  },
  {
    name: "CA Subramanya Kamath",
    title: "Co-Founder & Chartered Accountant",
    imageUrl: "/subramanya-kamath.png",
    description: "Specializing in corporate finance and audit, Subramanya brings strategic insights to complex financial challenges.",
  },
  {
    name: "CA Vishnu Acharya",
    title: "Senior Chartered Accountant",
    imageUrl: "/vishnu-acharya.png",
    description: "Expert in statutory compliance and financial reporting, ensuring businesses meet all regulatory requirements.",
  },
  {
    name: "Ashwin D'Souza",
    title: "Head of Operations",
    imageUrl: "/ashwin-dsouza.png",
    description: "Manages day-to-day operations, ensuring seamless service delivery and client satisfaction.",
  },
];