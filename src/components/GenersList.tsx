import useGeners from "./hooks/useGeners";

const GenersList = () => {
    const {data} = useGeners();
  return (
    <div>
      {data.map((genre) => (
        <ul>
          <li key={genre.id}>{genre.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default GenersList;
