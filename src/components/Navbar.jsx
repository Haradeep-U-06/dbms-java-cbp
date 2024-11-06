import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            CarPool India
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/find-ride"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
            >
              Find a Ride
            </Link>
            <Link
              to="/offer-ride"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Offer a Ride
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;