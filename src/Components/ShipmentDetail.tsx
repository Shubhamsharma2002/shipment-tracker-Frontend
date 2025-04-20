import React from 'react';

interface ShipmentDetailsProps {
  shipmentId: string;
  productName: string;
  origin: string;
  deliveryAddress: string;
}

const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({
  shipmentId,
  productName,
  origin,
  deliveryAddress,
}) => {
  return (
    <div className="space-y-2 text-lg">
      <p><strong>Shipment ID:</strong> {shipmentId}</p>
      <p><strong>Product Name:</strong> {productName}</p>
      <p><strong>Origin:</strong> {origin}</p>
      <p><strong>Delivery Address:</strong> {deliveryAddress}</p>
    </div>
  );
};

export default ShipmentDetails;
