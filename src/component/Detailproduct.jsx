import React, { useState, useEffect } from 'react';
// import {useDispatch } from 'react-redux';
// import { addCart } from '../redux/action';

import { NavLink} from 'react-router-dom';

import { useParams} from 'react-router-dom';
//import Products from './Products';


export default function DetailProduct() {

    // Detail product
    const [product, setProduct] = useState([]);
    const id = useParams();


    // Create a new product in to Cart
    // const dispatch = useDispatch();
    // const addProduct = (product) =>{
    //     dispatch(addCart(product));
    // }


    useEffect(() => {

        const getProduct = async () => {
            // const response = await fetch(`http://fakestoreapi.com/products/${product.id}`);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            // setProduct(await response.clone().json());
            const result = await response.clone().json();
            setProduct(result);

        }
        getProduct();

    })


    //Từ id show details product
    const ShowDetailProduct = () => {
        return (
            <>
                <div className="col-md-6 py-5">
                    <img src={product.image} alt={product.title}
                        height={400} width={400} />
                </div>
                <div className="col-md-6 py-3">
                    <h4 className="text-uppercase fw-bold">
                        {product.category}
                    </h4>
                    <h1 className="display-5">
                        {product.title}
                    </h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star mx-2"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-dark px-4 py-2"
                    //onClick={() => addProduct(product)}
                    >
                        Add to cart
                    </button>
                    <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>Go to card</NavLink>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    <ShowDetailProduct />
                </div>
            </div>
        </div>
    )


}