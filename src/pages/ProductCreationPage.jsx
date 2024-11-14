import React, { useState } from 'react';

function ProductCreationPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Car</h1>
      <form className="bg-white p-4 shadow rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="button" className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Car
        </button>
      </form>
    </div>
  );
}

export default ProductCreationPage;
