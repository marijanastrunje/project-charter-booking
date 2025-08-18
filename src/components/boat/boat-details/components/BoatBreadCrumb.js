import { Link } from 'react-router-dom';

const BoatBreadcrumb = ({ boat }) => {
  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/boats">Boats</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {boat.brand} {boat.name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BoatBreadcrumb;
