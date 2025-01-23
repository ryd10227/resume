import ContributionsList from "./ContributionsList";
import TechStacksMapping from "./TechStacksMapping";
import { ProjectDescriptionType } from "~/public/ProjectsDescription";

const SingleProjectDescription = ({
  project,
}: {
  project: ProjectDescriptionType;
}) => {
  const {
    title,
    team,
    when,
    description1,
    description2,
    techStack,
    contributions,
    achievements,
    urls,
  } = project;

  const spaceY7 = "space-y-[0.7rem]";

  return (
    <div className={spaceY7}>
      <div>
        <h3>{title}</h3>
        <h6>{team}</h6>
        <h6>{when}</h6>
      </div>

      <div>
        <h4>{title === "(주)모빌씨앤씨" ? "업무" : "개요"}</h4>
        <p>{description1}</p>
        <p>{description2}</p>
      </div>

      <div>
        <h4>기술 스택</h4>
        <TechStacksMapping techStack={techStack} />
      </div>

      <div>
        <h4>기여</h4>
        <ContributionsList contributions={contributions} />
      </div>

      {achievements && (
        <div>
          <h4>성과</h4>
          <ContributionsList contributions={achievements} />
        </div>
      )}

      {urls && (
        <div className={spaceY7}>
          {urls.map(({ title, url }, index) => (
            <div key={`${index}_${url}`}>
              <h4>{title}</h4>
              <a href={url} target="_blank">
                {url}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SingleProjectDescription;
