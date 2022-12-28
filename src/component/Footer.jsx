import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <div>
            <footer className="bg-light text-center text-white py-5">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <NavLink className="btn btn-outline-dark m-1" to="#" role="button"><icon className="fa-brands fa-facebook"></icon></NavLink>
                        <NavLink className="btn btn-outline-dark m-1" to="#" role="button"><icon className="fab fa-twitter"></icon></NavLink>
                        <NavLink className="btn btn-outline-dark m-1" to="#" role="button"><icon className="fab fa-google"></icon></NavLink>
                        <NavLink className="btn btn-outline-dark m-1" to="#" role="button"><icon className="fab fa-instagram"></icon></NavLink>
                        <NavLink className="btn btn-outline-dark m-1" to="#" role="button"><icon className="fab fa-linkedin"></icon></NavLink>
                        <NavLink className="btn btn-outline-dark m-1" to="#" role="button"><icon className="fab fa-github"></icon></NavLink>


                    </section>

                </div>



            </footer>
        </div>
    )
}
