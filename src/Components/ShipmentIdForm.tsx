
type ShipmentIdFormProps = {
    shipmentId: string;
    setShipmentId: (value: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  };
const ShipmentIdForm = ({shipmentId , setShipmentId , handleSubmit}:ShipmentIdFormProps)=>{
   
    
    return(
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-4">
        <input
          type="text"
          value={shipmentId}
          onChange={(e) => setShipmentId(e.target.value)}
          placeholder="Enter Shipment ID"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <br/>
        <button type="submit" className=" cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300">Track</button>
      </form>
    )
}

export default ShipmentIdForm