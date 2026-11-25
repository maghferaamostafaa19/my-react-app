import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <main className="page-content">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="notfound-button" onClick={() => navigate("/home")}>
        Go To Home
      </button>
    </main>
  );
};

export default Notfound;
