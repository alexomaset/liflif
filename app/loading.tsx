import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-blue-800">Loading application...</p>
      </div>
    </div>
  );
}
