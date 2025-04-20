import React, { useState } from "react";
import StatusUpdateItem from "../Components/StatusUpdateItem";
import { useParams } from "react-router-dom";

function StatusPage() {
  const { id } = useParams(); // Extract shipment ID from the URL
  console.log('====================================');
  console.log(id);
  console.log('====================================');
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [showItem, setShowItem] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      status,
      location,
      timestamp: new Date(timestamp).toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:8000/api/v1/shipments/${id}/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Debugging the response
      const data = await response.json();
      console.log("Response Data:", data); // Log the response from the API

      if (!response.ok) {
        throw new Error(`Failed to update status: ${data.message || 'Unknown error'}`);
      }

      setShowItem(true);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("❌ Failed to update status. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Update Shipment Status</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. Out for Delivery"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. Mumbai Hub"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Timestamp</label>
          <input
            type="datetime-local"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {showAlert && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded text-sm">
          ✅ Status updated
        </div>
      )}

      {showItem && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Latest Update:</h2>
          <StatusUpdateItem
            status={status}
            location={location}
            timestamp={new Date(timestamp).toISOString()}
          />
        </div>
      )}
    </div>
  );
}

export default StatusPage;
