import React from 'react'
import '../css/Footer.css';
export default function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col-lg-6">
                        <h4 className='text-uppercase'>one member joint JSC</h4>
                        <h1 className="list-unstyled">
                            <li>086-907-9903</li>
                            <li>Binh Dinh - Viet Nam</li>

                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col-lg-2">
                        <h4>Stuff</h4>
                        <ul className="list-unstyled">
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>GUD STUFF</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ul className="list-unstyled">
                            <li>DANK MEMES</li>
                            <li>OTHER STUFF</li>
                            <li>GUD STUFF</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        Trương Minh Phi - Id No: .346
                    </p>
                </div>
            </div>
        </div>
    )
}
