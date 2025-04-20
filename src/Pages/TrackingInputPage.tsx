import { useState } from "react";
import ShipmentIdForm from "../Components/ShipmentIdForm"
import { useNavigate } from "react-router-dom";



const TrackingInputPage = () => {
  const [shipmentId, setShipmentId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const id = shipmentId.trim();
    if (!id) return alert('Please enter a valid Shipment ID');
    try {
      const res = await fetch(`http://localhost:8000/api/v1/shipments/${id}/track`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const err = await res.json();
        alert(`Tracking failed: ${err.message || res.statusText}`);
        return;
      }

      const data = await res.json(); // shipment tracking info
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      // navigate(`/result/${id}`, { state: { shipment: data } }); // pass data to result page
    } catch (error) {
      
    }
    navigate(`/result/${id}`);
  }
  return (
    <>
    <h4 className="text-center font-bold text-blue-600">Enter your Shipment Id</h4>
    <div className="text-center mt-5">

      <ShipmentIdForm 
      shipmentId={shipmentId}
      setShipmentId={setShipmentId}
      handleSubmit={handleSubmit}
      />
    </div>
    
    </>
  )
}

export default TrackingInputPage