import { useEffect, useState } from "react";
import ShipmentCard from "../Components/ShipmentCard";
import { MdProductionQuantityLimits } from "react-icons/md";


interface Shipment {
  _id: string;
  productName: string;
  deliveryAddress: string;
  origin: string;
  createdAt: string;
}

function AllShipmentsPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);

  useEffect(() => {
   
    fetch("https://shipment-tracker.up.railway.app/api/v1/create/allShipment")
      .then((res) => res.json())
      .then((data) => setShipments(data))
      .catch((err) => console.error("Error fetching shipments", err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6  flex gap-1 "><MdProductionQuantityLimits className="text-3xl text-fuchsia-700" /> All Shipments</h1>
      {shipments.map((shipment) => (
        <ShipmentCard
          key={shipment._id}
          id={shipment._id}
          productName={shipment.productName}
          deliveryAddress={shipment.deliveryAddress}
          origin={shipment.origin}
          createdAt={shipment.createdAt}
        />
      ))}
    </div>
  );
}

export default AllShipmentsPage;
