import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
              <span className="display-1 fw-bold">4</span>
              <i className="bi bi-exclamation-circle-fill text-danger display-4"></i>
              <span className="display-1 fw-bold bsb-flip-h">4</span>
            </h2>
            <h3 className="h2 mb-2">Oops! You're lost.</h3>
            <p className="mb-5">Error 404.</p>
            <Link to="/" role="button">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
