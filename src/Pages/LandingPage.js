import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchDiscount } from '../Components/Store/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavHome, Card, Footer } from '../Components/Micros/index';

export default function LandingPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const discount = useSelector((state) => state.products.discount);
  const [label, setLabel] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 20 }));
    dispatch(fetchDiscount({ limit: 3 }));
  }, [dispatch]);

  // Menghitung indeks item pertama dan terakhir pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <NavHome />
      <div className="container h-full w-full mx-auto my-20">
        <div className="flex grid grid-cols-12 justify-center items-center gap-20 p-5 outline outline-2 outline-blue my-20">
          {discount.map((product, index) => (
            <div key={index} className="grid col-span-3">
              <Card
                label={label}
                name={product.title.slice(0, 20)}
                image={product.image}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <div className="flex grid grid-cols-12 gap-10 justify-center items-center">
          {currentItems.map((product, index) => (
            <div key={index} className="grid col-span-3">
              <Card
                name={product.title.slice(0, 20)}
                image={product.image}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <div className="pagination">
          {products.length > itemsPerPage && (
            <ul className="pagination-list">
              {Array(Math.ceil(products.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <li key={index} className="pagination-item">
                    <button
                      className={`pagination-link ${
                        currentPage === index + 1 ? 'active' : ''
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
