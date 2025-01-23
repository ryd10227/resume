const ContributionsList = ({ contributions }: { contributions: string[] }) => (
  <ul>
    {contributions?.map((contribution, index) => (
      <li key={`${index}_${contribution}`} className="ml-[0.5rem]">
        {contribution.includes(":") ? (
          <>
            <span className="font-bold">
              {"• " + contribution.split(":")[0] + ":"}
            </span>
            <span>{contribution.split(":")[1]}</span>
          </>
        ) : (
          <span className="font-bold">{"• " + contribution}</span>
        )}
      </li>
    ))}
  </ul>
);
export default ContributionsList;
