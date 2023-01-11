import React from 'react'
import Products from './Products'



export default function Home() {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="background-images" height={600} />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bold mb-0">NEW SEASON ARRIVALS</h5>
                        <p class="card-text lead fs-2">CHECK OUT ALL THE TREND</p>
                    </div>
                </div>
            </div>
            {<Products />}
        </div>

    )
}
