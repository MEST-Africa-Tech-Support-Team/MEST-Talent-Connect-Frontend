import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TalentHeader from "../components/TalentHeader";
import TalentCards from "../components/TalentCards";
import TalentPagination from "../components/TalentPagination";
import ViewTalentProfileModal from "../components/viewTalentProfileModal";

export default function TalentsPage() {
  // Mock data (replace with real API later)
  const mockTalents = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Frontend Developer",
    image: "https://via.placeholder.com/150",
    academicBg: "BSc. Computer Science, MIT",
    softSkills: "Teamwork, Communication, Problem Solving",
    techSkills: "React, Tailwind, Node.js",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/john-doe.pdf",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    academicBg: "BA. Design, Stanford",
    softSkills: "Creativity, Collaboration, Adaptability",
    techSkills: "Figma, Adobe XD, Framer Motion",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/jane-smith.pdf",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    academicBg: "MSc. Software Engineering, Oxford",
    softSkills: "Critical Thinking, Debugging, Communication",
    techSkills: "Node.js, Express, MongoDB",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/michael-brown.pdf",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Fullstack Developer",
    image: "https://via.placeholder.com/150",
    academicBg: "BSc. Information Systems, Harvard",
    softSkills: "Leadership, Problem Solving, Collaboration",
    techSkills: "React, Node.js, GraphQL, AWS",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/sophia-lee.pdf",
  },
  {
    id: 5,
    name: "Daniel Kim",
    role: "Mobile App Developer",
    image: "https://via.placeholder.com/150",
    academicBg: "BSc. Computer Engineering, KAIST",
    softSkills: "Adaptability, Communication, Creativity",
    techSkills: "React Native, Swift, Kotlin",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/daniel-kim.pdf",
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Data Scientist",
    image: "https://via.placeholder.com/150",
    academicBg: "PhD. Data Science, Cambridge",
    softSkills: "Analytical Thinking, Research, Collaboration",
    techSkills: "Python, TensorFlow, SQL, R",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/emily-davis.pdf",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "DevOps Engineer",
    image: "https://via.placeholder.com/150",
    academicBg: "BSc. IT, University of Toronto",
    softSkills: "Problem Solving, Collaboration, Efficiency",
    techSkills: "Docker, Kubernetes, AWS, CI/CD",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/james-wilson.pdf",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    role: "Frontend Engineer",
    image: "https://via.placeholder.com/150",
    academicBg: "BSc. Computer Science, UC Berkeley",
    softSkills: "Creativity, Teamwork, Communication",
    techSkills: "React, Vue, Tailwind, TypeScript",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/olivia-martinez.pdf",
  },
  {
    id: 9,
    name: "William Chen",
    role: "Cloud Architect",
    image: "https://via.placeholder.com/150",
    academicBg: "MSc. Cloud Computing, Imperial College London",
    softSkills: "Leadership, Critical Thinking, Planning",
    techSkills: "AWS, Azure, GCP, Terraform",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/william-chen.pdf",
  },
  {
    id: 10,
    name: "Ava Johnson",
    role: "Cybersecurity Specialist",
    image: "https://via.placeholder.com/150",
    academicBg: "BSc. Cybersecurity, Georgia Tech",
    softSkills: "Attention to Detail, Analytical Thinking, Integrity",
    techSkills: "Penetration Testing, Firewalls, Encryption",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/ava-johnson.pdf",
  },
  {
    id: 11,
    name: "Ethan Walker",
    role: "AI Engineer",
    image: "https://via.placeholder.com/150",
    academicBg: "MSc. Artificial Intelligence, Stanford",
    softSkills: "Problem Solving, Research, Collaboration",
    techSkills: "Machine Learning, NLP, PyTorch",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/ethan-walker.pdf",
  },
  {
    id: 12,
    name: "Mia Robinson",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    academicBg: "MBA, Wharton Business School",
    softSkills: "Leadership, Communication, Strategy",
    techSkills: "Agile, Scrum, Product Strategy",
    portfolio: "https://portfolio.example.com",
    cv: "/cv/mia-robinson.pdf",
  },
];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTalent, setSelectedTalent] = useState(null);

  const talentsPerPage = 6;
  const totalPages = Math.ceil(mockTalents.length / talentsPerPage);
  const displayedTalents = mockTalents.slice(
    (currentPage - 1) * talentsPerPage,
    currentPage * talentsPerPage
  );

  return (
    <PageWrapper>
      <Navbar />

      <div className="pt-[100px] min-h-[80vh] max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <TalentHeader />

        {/* Cards */}
        <TalentCards
          talents={displayedTalents}
          onViewProfile={(talent) => setSelectedTalent(talent)}
        />

        {/* Pagination */}
        <TalentPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <Footer />

      {/* View Profile Modal */}
      <ViewTalentProfileModal
        isOpen={!!selectedTalent}
        onClose={() => setSelectedTalent(null)}
        talent={selectedTalent}
      />
    </PageWrapper>
  );
}
