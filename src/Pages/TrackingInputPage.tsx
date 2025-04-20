import { useState } from "react";
import ShipmentIdForm from "../Components/ShipmentIdForm"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsClipboardData } from "react-icons/bs";



const TrackingInputPage = () => {
  const [shipmentId, setShipmentId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const id = shipmentId.trim();
    if (!id) return alert('Please enter a valid Shipment ID');
    try {
      const res = await fetch(`https://shipment-tracker.up.railway.app/api/v1/shipments/${id}/track`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const err = await res.json();
        toast.error(`Tracking failed: ${err.message || res.statusText}`);
        
        return;
      }
      // shipment tracking info
      const data = await res.json(); 
        
        console.log(data);
        
      // navigate to result page
      navigate(`/result/${id}`, { state: { shipment: data } });
    } catch (error) {
      console.error("Error fetching shipment data:", error);
    }
    
  }
  return (
    <>
    <h4 className="justify-center font-bold text-blue-600 flex gap-2"> <BsClipboardData className="text-3xl text-blue-700" />Enter your Shipment Id</h4>
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