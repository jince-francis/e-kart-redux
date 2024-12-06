// import React from 'react'

import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className="py-10 md:px-20 px-10 text-white bg-violet-900 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]">
            <div>
                <h2 className="text-4xl"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#63E6BE", }} /> E-cart</h2>
                <p className="mt-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus doloremque eaque provident, ad nam libero, labore quae accusantium atque officiis voluptates earum molestiae commodi magnam sapiente reiciendis placeat repellendus?</p>
            </div>

            <div className="flex justify-center mt-10 md:mt-0">
                <div>
                    <h3 className="text-4xl">Links</h3>
                    <Link ><p className="mt-6">Home</p></Link>
                    <Link to={'/Wishlist'}><p className="mt-3">Wishlist</p></Link>
                    <Link to={'/Cart'}><p className="mt-3">Cart</p></Link>
                </div>
            </div>

            <div className="flex justify-center mt-10 md:mt-0">
                <div>
                    <h3 className="text-4xl">Guides</h3>
                    <p className="mt-6">React</p>
                    <p className="mt-3">React Bootstrap</p>
                    <p className="mt-3">Bootswatch</p>
                </div>
            </div>

            <div className="md:px-10 mt-10 md:mt-0">
                <h3 className="text-4xl">Contact Us</h3>
                <div className="flex mt-6">
                    <input type="text" placeholder="Email id" className="p-3 rounded w-full" />
                    <button className="p-3 bg-orange-600 ms-3 rounded">Subscribe</button>
                </div>
                <div className="flex justify-between mt-6">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl"/>
                <FontAwesomeIcon icon={faInstagram} className="text-3xl"/>
                <FontAwesomeIcon icon={faFacebook} className="text-3xl"/>
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl"/>

                </div>
            </div>

        </div>
    )
}

export default Footer