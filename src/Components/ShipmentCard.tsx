import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

interface ShipmentProps {
  id: string;
  productName: string;
  deliveryAddress: string;
  origin: string;
  createdAt: string;
}

const ShipmentCard: React.FC<ShipmentProps> = ({
  id,
  productName,
  deliveryAddress,
  origin,
  createdAt,
}) => {
  const navigate = useNavigate();

  const handleEditStatus = () => {
    navigate(`/status/${id}`);
  };

  return (
    <div className="border-1 border-blue-600 rounded-xl p-4 shadow-sm bg-white mb-4">
      <h2 className="text-lg font-semibold mb-2 flex gap-1"><TbTruckDelivery className="text-3xl text-pink-500"/> {productName}</h2>
      <p><span className="font-medium">Shipment ID:</span> {id}</p>
      <p><span className="font-medium">Origin:</span> {origin}</p>
      <p><span className="font-medium">Delivery Address:</span> {deliveryAddress}</p>
      <p className="text-sm text-gray-500 mt-2">
        Created At: {new Date(createdAt).toLocaleString()}
      </p>

      <button
        onClick={handleEditStatus}
        className="mt-4 w-full bg-blue-600 text-white px-4 py-2 text-center rounded hover:bg-blue-700"
      >
        Edit Status
      </button>
    </div>
  );
};

export default ShipmentCard;
