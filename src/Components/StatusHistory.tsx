import React from 'react';

interface StatusUpdate {
  status: string;
  location: string;
  timestamp: string;
}

interface Props {
  statusHistory: StatusUpdate[];
}

const StatusHistory: React.FC<Props> = ({ statusHistory }) => {
  return (
    <div className="space-y-4">
      {statusHistory?.length > 0 ? (
        statusHistory.map((status, index) => (
          <div
            key={index}
            className="p-4 border border-blue-500 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="font-semibold text-blue-600">{status.status}</div>
              <div className="text-sm text-gray-500">{new Date(status.timestamp).toLocaleString()}</div>
            </div>
            <p className="text-gray-700 mt-2"><strong>Location:</strong> {status.location}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No status updates found.</p>
      )}
    </div>
  );
};

export default StatusHistory;
