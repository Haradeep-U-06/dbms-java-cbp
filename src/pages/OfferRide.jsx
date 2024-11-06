import { useState } from 'react';

function OfferRide() {
  const [rideDetails, setRideDetails] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '',
    price: '',
  });

  const popularCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Pune', 'Agra', 'Mysore', 'Vijayawada', 'Kolkata'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically send the data to a backend
    console.log('Ride offered:', rideDetails);
    alert('Ride offered successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Offer a Ride</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <input
              type="text"
              required
              list="cities"
              placeholder="Select or type a city"
              className="w-full border rounded-md p-2"
              value={rideDetails.from}
              onChange={(e) => setRideDetails({ ...rideDetails, from: e.target.value })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <input
              type="text"
              required
              list="cities"
              placeholder="Select or type a city"
              className="w-full border rounded-md p-2"
              value={rideDetails.to}
              onChange={(e) => setRideDetails({ ...rideDetails, to: e.target.value })}
            />
          </div>

          <datalist id="cities">
            {popularCities.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                required
                className="w-full border rounded-md p-2"
                value={rideDetails.date}
                onChange={(e) => setRideDetails({ ...rideDetails, date: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                required
                className="w-full border rounded-md p-2"
                value={rideDetails.time}
                onChange={(e) => setRideDetails({ ...rideDetails, time: e.target.value })}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Seats
              </label>
              <input
                type="number"
                required
                min="1"
                max="8"
                className="w-full border rounded-md p-2"
                value={rideDetails.seats}
                onChange={(e) => setRideDetails({ ...rideDetails, seats: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price per Seat (₹)
              </label>
              <input
                type="number"
                required
                min="0"
                className="w-full border rounded-md p-2"
                value={rideDetails.price}
                onChange={(e) => setRideDetails({ ...rideDetails, price: e.target.value })}
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Offer Ride
          </button>
        </div>
      </form>
    </div>
  );
}

export default OfferRide;