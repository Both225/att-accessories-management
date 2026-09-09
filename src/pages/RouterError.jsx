import { useNavigate } from "react-router-dom";

function RouterError() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <p>Something went wrong</p>
    </div>
  );
}

export default RouterError;
