const TechStacksMapping = ({ techStack }: { techStack: string[] }) => (
  <div className="space-x-[0.4rem]">
    {techStack.map((tech, index) => (
      <p
        className="border-[#ebebeb] border-[1px] text-[12px] rounded-full px-[0.7rem] py-[0.3rem] inline-block mt-[0.2rem]"
        key={`${tech}_${index}`}
      >
        {tech}
      </p>
    ))}
  </div>
);

export default TechStacksMapping;
