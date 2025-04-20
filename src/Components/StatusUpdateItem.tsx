import React from "react";

interface StatusUpdateItemProps {
  status: string;
  location: string;
  timestamp: string; 
}

const StatusUpdateItem: React.FC<StatusUpdateItemProps> = ({ status, location, timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleString();

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200">
      <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5"></div>
      <div>
        <p className="text-sm font-medium text-gray-800">{status}</p>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-xs text-gray-500">{formattedTime}</p>
      </div>
    </div>
  );
};

export default StatusUpdateItem;
