import { Link } from "react-router-dom";
import img from "../assets/Homepage.jpg";

const Homepage = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Shipment Tracker</h1>
      <img 
        src={img} 
        alt="Image of tracking" 
        className="mx-auto rounded-lg shadow-md" 
        width={300} 
      />
      <p className="mt-4 text-gray-600">
        Easily track your packages and view shipment statuses in one place.
      </p>
      <Link to="/track">
        <button className="cursor-pointer mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Track Your Shipment
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
