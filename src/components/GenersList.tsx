import useGeners from "./hooks/useGeners";

const GenersList = () => {
  const { geners } = useGeners();
  return (
    <div>
      {geners.map((genre) => (
        <ul>
          <li key={genre.id}>{genre.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default GenersList;
