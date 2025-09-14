import TalentCard from "./TalentCard";

export default function TalentCards({ talents, onViewProfile }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {talents.map((talent) => (
        <TalentCard
          name="Ama Osei"
          role="Senior Frontend Developer"
          image="path/to/image.jpg"
          skills={["React", "TypeScript", "Next.js"]}
          onViewProfile={() => console.log('View profile clicked for Ama Osei')}
        />
      ))}
    </div>
  );
}
