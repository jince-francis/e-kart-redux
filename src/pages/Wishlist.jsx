// import React from 'react'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItems, removeWishlistItem } from '../redux/slices/wishlistSlice';

function Wishlist() {
  const wishlistArray = useSelector((state) => state.wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()
  const wishes = () =>{
    dispatch(addWishlistItems)
    dispatch(removeWishlistItem)
  }
  return (
    <>
      <div className='pt-32'>
        <h1 className='text-center text-fuchsia-700 text-4xl '>Wishlist</h1>
        {wishlistArray?.length > 0 ?
          <div className=" px-8 mb-10 md:grid grid-cols-4 my-5">
          {wishlistArray?.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <div className="p-2">
            <div className='border shadow-lg p-5'>
              <img src={item.image} alt="No image" className='w-full h-48' />
              <h4 className='text-center text-2xl m-3'>{item.title.slice(0,10)}</h4>
              <p className='text-justify'>{item.description.slice(0,100)}</p>
              <p className='text-xl my-3 '>Price: <span className='text-violet-600'>${item.price}</span></p>
              <div className='m-2 flex justify-between'>
                <button className='py-2 px-4 text-white bg-red-600 rounded' onClick={()=>dispatch(removeWishlistItem(item?.id))}><FontAwesomeIcon icon={faHeart} /></button>
                <button onClick={wishes} className=' py-2 px-4 text-white bg-green-600 rounded'><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </div>
          </div>
          ))
            }

        </div>
        :
        <div className='md:grid grid-cols-3'>
          <div></div>
          <div className='mt-44 mb-28'>
            <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" className='w-full h-auto' />
          </div>
          <div></div>
        </div>}
      </div>
    </>
  )
}

export default Wishlist