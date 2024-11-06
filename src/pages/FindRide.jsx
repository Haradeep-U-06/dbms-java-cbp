import { useState } from 'react';

function FindRide() {
  const [search, setSearch] = useState({
    from: '',
    to: '',
    date: '',
  });

  const mockRides = [
    {
      id: 1,
      driver: 'Rahul Sharma',
      from: 'Mumbai',
      to: 'Pune',
      date: '2024-03-20',
      price: 800,
      seats: 3,
    },
    {
      id: 2,
      driver: 'Priya Patel',
      from: 'Bangalore',
      to: 'Mysore',
      date: '2024-03-21',
      price: 600,
      seats: 2,
    },
    {
      id: 3,
      driver: 'Amit Kumar',
      from: 'Delhi',
      to: 'Agra',
      date: '2024-03-22',
      price: 900,
      seats: 4,
    },
    {
      id: 4,
      driver: 'Sneha Reddy',
      from: 'Hyderabad',
      to: 'Vijayawada',
      date: '2024-03-21',
      price: 750,
      seats: 3,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Find a Ride</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="From (e.g., Mumbai)"
            className="border rounded-md p-2"
            value={search.from}
            onChange={(e) => setSearch({ ...search, from: e.target.value })}
          />
          <input
            type="text"
            placeholder="To (e.g., Pune)"
            className="border rounded-md p-2"
            value={search.to}
            onChange={(e) => setSearch({ ...search, to: e.target.value })}
          />
          <input
            type="date"
            className="border rounded-md p-2"
            value={search.date}
            onChange={(e) => setSearch({ ...search, date: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-4">
        {mockRides.map((ride) => (
          <div key={ride.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{ride.from} → {ride.to}</h3>
                <p className="text-gray-600">Driver: {ride.driver}</p>
                <p className="text-gray-600">Date: {ride.date}</p>
                <p className="text-gray-600">Available seats: {ride.seats}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-indigo-600">₹{ride.price}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mt-2">
                  Book Seat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindRide;