import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ShipmentDetails from '../Components/ShipmentDetail';
import StatusHistory from '../Components/StatusHistory';

const TrackingResultPage: React.FC = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const shipment = state?.shipment;

  if (!shipment) {
    return <div className="text-center text-red-600 mt-10">No shipment data available.</div>;
  }

  // Get details from shipment object
  const { shipmentId, productName, origin, deliveryAddress, statusHistory } = shipment;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Tracking Result for {id}</h2>

      {/* Static Shipment Details */}
      <ShipmentDetails
        shipmentId={shipmentId}
        productName={productName}
        origin={origin}
        deliveryAddress={deliveryAddress}
      />

      {/* Status History */}
      <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Status History</h3>
      <StatusHistory statusHistory={statusHistory} /> {/* Use the new component */}
    </div>
  );
};

export default TrackingResultPage;
