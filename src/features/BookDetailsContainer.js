import { useParams } from 'react-router-dom';

export function BookDetailsContainer() {
  const { id } = useParams();
  return (
    <div>
      <p>BookDetails fro book id {id}</p>
    </div>
  );
}
