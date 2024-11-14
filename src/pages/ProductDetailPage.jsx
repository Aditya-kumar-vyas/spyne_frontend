import React from 'react';
import { useParams, Link } from 'react-router-dom';


const dummyCars = [
    {
      id: 1,
      title: 'Toyota SUV',
      description: 'A reliable and powerful Toyota SUV.',
      tags: ['SUV', 'Toyota'],
      imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      title: 'Honda Sedan',
      description: 'A stylish and comfortable Honda sedan.',
      tags: ['Sedan', 'Honda'],
      imageUrl: 'https://images.unsplash.com/photo-1706495227612-fde52c357c69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      title: 'Tesla Model S',
      description: 'A fast and electric Tesla Model S.',
      tags: ['Electric', 'Tesla'],
      imageUrl: 'https://images.unsplash.com/photo-1536882666204-4b33cd3cb518?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      title: 'BMW Coupe',
      description: 'A luxurious and sporty BMW coupe.',
      tags: ['Coupe', 'BMW'],
      imageUrl: 'https://images.unsplash.com/photo-1588623259724-71e3e35834c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      title: 'Ford Pickup Truck',
      description: 'A rugged and reliable Ford pickup truck.',
      tags: ['Truck', 'Ford'],
      imageUrl: 'https://images.unsplash.com/photo-1518300171942-838d0eaf6713?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
  ];
function ProductDetailPage() {
  const { id } = useParams(); // Get the car ID from the URL
  const car = dummyCars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <div className="p-4">
      {/* <Link to="/products" className="text-blue-500 underline mb-4 inline-block">
        Back to Products
      </Link> */}
      <button
        onClick={() => navigate(-1)}
        className="text-white bg-gray-600 px-4 py-2 rounded mb-4 hover:bg-gray-700"
      >
        Back
      </button>

      {/* Car Details */}
      <div className="max-w-lg mx-auto bg-white shadow rounded p-4">
        {/* Car Image */}
        <img
          src={car.imageUrl}
          alt={car.title}
          className="w-full h-64 object-cover rounded mb-4"
        />

        {/* Car Title and Description */}
        <h2 className="text-2xl font-bold mb-2">{car.title}</h2>
        <p className="text-gray-700 mb-4">{car.description}</p>

        {/* Car Tags */}
        <div className="flex space-x-2 mb-4">
          {car.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Edit and Delete Buttons */}
        <div className="flex space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
