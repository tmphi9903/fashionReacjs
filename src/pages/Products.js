import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom';
import '../css/Product.css';


export default function Products() {

    const [data, setdata] = useState([]);
    const [filter, setFilter] = useState(data);




    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch(`http://fakestoreapi.com/products`);

            setdata(await response.clone().json());
            setFilter(await response.json());

        }

        getProducts();
    }, []);




    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = (product) => {
        return (
            <>
                <div className="buttons d-flex justify-content-center p-4" key={product.id}>
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>

                </div>




                {filter.map((product) => {
                    return (
                        <>
                            <div className="up col-md-3 mb-4 text-black">
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={`/detailproduct/${product.id}`} className="btn btn-outline-dark shadow-lg">
                                            Buy now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

    return (
        <div className='content shadow-lg'>
            <div className="container my-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className='display-6 fw-bold text-black text-center'>Latest Products</h1>
                    </div>

                    <div className="products row justify-content-center">
                        {<ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}
