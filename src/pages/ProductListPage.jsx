import React, { useState } from "react";
import { Link } from "react-router-dom";
function ProductListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const dummyCars = [
    {
      id: 1,
      title: "Toyota SUV",
      description: "A reliable and powerful Toyota SUV.",
      tags: ["SUV", "Toyota"],
      imageUrl:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Honda Sedan",
      description: "A stylish and comfortable Honda sedan.",
      tags: ["Sedan", "Honda"],
      imageUrl:
        "https://images.unsplash.com/photo-1706495227612-fde52c357c69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Tesla Model S",
      description: "A fast and electric Tesla Model S.",
      tags: ["Electric", "Tesla"],
      imageUrl:
        "https://images.unsplash.com/photo-1536882666204-4b33cd3cb518?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "BMW Coupe",
      description: "A luxurious and sporty BMW coupe.",
      tags: ["Coupe", "BMW"],
      imageUrl:
        "https://images.unsplash.com/photo-1588623259724-71e3e35834c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Ford Pickup Truck",
      description: "A rugged and reliable Ford pickup truck.",
      tags: ["Truck", "Ford"],
      imageUrl:
        "https://images.unsplash.com/photo-1518300171942-838d0eaf6713?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const filteredCars = dummyCars.filter(
    (car) =>
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>
      {/* Product List */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cars</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div key={car.id} className="p-4 bg-white shadow rounded">
                {/* Car Image */}
                <img
                  src={car.imageUrl}
                  alt={car.title}
                  className="w-full h-48 object-cover rounded mb-2"
                />

                {/* Car Title and Description */}
                <h2 className="text-xl font-bold">{car.title}</h2>
                <p>{car.description}</p>

                {/* View Details Button */}
                <Link to={`/products/${car.id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>No cars found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
