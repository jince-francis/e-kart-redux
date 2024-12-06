// import React from 'react'

import { faBars, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header() {
    const wishlistArray = useSelector((state)=>state.wishlist)
    const cartArray = useSelector((state)=>state.cartItem)
    const [show, setShow] = useState(false)
    return (
        <nav className=" bg-violet-900 p-3 md:p-5 w-full">
            <div className="md:flex item-center md:px-10 p-5 w-full">
                <div className="flex w-full">
                    <Link to={'/'}><h3 className="text-3xl text-white"><FontAwesomeIcon icon={faCartShopping} className="me-2" />E-Cart</h3></Link>
                    <button onClick={() => setShow(!show)} className="border border-white p-3 text-white ms-auto rounded md:hidden"><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>

            {show && <ul className="flex md-5 md:hidden">

                <li>
                    <Link to={'/Wishlist'}>
                        <button className="border border-white p-3 me-2 rounded hover:bg-white hover:text-violet-900"><FontAwesomeIcon icon={faHeart} className="me-2" style={{ color: "#ff4000", }} />Wishlist <span className="border bg-white rounded text-black px-1 ms-2">{wishlistArray.length}</span></button>
                    </Link>
                </li>

                <li>
                    <Link to={'/Cart'}>
                        <button className="border border-white p-3 rounded hover:bg-white hover:text-violet-900"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#63E6BE", }} className="me-2" />Cart <span className="border bg-white rounded text-black px-1 ms-2">{cartArray.length}</span></button>
                    </Link>
                </li>

            </ul>}
            <ul className="ms-auto md:flex hidden">

                <li>
                    <Link to={'/Wishlist'}>
                        <button className="border border-white p-3 me-2 rounded hover:bg-white hover:text-violet-900"><FontAwesomeIcon icon={faHeart} className="me-2" style={{ color: "#ff4000", }} />Wishlist <span className="border bg-white rounded text-black px-1 ms-2">{wishlistArray.length}</span></button>
                    </Link>
                </li>

                <li>
                    <Link to={'/Cart'}>
                        <button className="border border-white p-3 rounded hover:bg-white hover:text-violet-900"><FontAwesomeIcon icon={faCartShopping} style={{ color: "#63E6BE", }} className="me-2" />Cart <span className="border bg-white rounded text-black px-1 ms-2">{cartArray.length}</span></button>
                    </Link>
                </li>

            </ul>

        </nav>
    )
}

export default Header