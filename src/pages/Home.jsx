import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Share Rides Across India
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Join our community of carpoolers and make intercity travel more affordable and sustainable.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          to="/find-ride"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
        >
          Find a Ride
        </Link>
        <Link
          to="/offer-ride"
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50"
        >
          Offer a Ride
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Popular Routes</h3>
          <ul className="text-gray-600">
            <li>Mumbai → Pune</li>
            <li>Delhi → Agra</li>
            <li>Bangalore → Mysore</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Save Money</h3>
          <p className="text-gray-600">
            Share travel costs and save up to 75% compared to traditional transport
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Go Green</h3>
          <p className="text-gray-600">
            Reduce your carbon footprint by sharing rides with fellow travelers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;