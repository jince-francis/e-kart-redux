import { faHeart , faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import userFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addWishlistItems } from '../redux/slices/wishlistSlice';
import { addCart } from '../redux/slices/cartSlice';
// import React from 'react'

function Home() {
  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <div className="pt-32 px-8 mb-10 md:grid grid-cols-4">
       {data?.length>0 &&
       data?.map((item)=>(
       // eslint-disable-next-line react/jsx-key
       <div className="p-2">
        <div className='border shadow-lg p-5'>
           <img src={item.image} alt="No image" className='w-full h-48' />
           <h4 className='text-center text-2xl m-3'>{item.title.slice(0,10)}</h4>
           <p className='text-justify'>{item.description.slice(0,100)}</p>
           <p className='text-xl my-3 '>Price: <span className='text-violet-600'>${item.price}</span></p>
           <div className='m-2 flex justify-between'>
             <button className='py-2 px-4 text-white bg-red-600 rounded' onClick={()=>dispatch(addWishlistItems(item))}><FontAwesomeIcon icon={faHeart} /></button>
             <button className=' py-2 px-4 text-white bg-green-600 rounded' onClick={()=>dispatch(addCart(item))}><FontAwesomeIcon icon={faCartShopping} /></button>
           </div>
         </div>
        </div>))
        }

      </div>
    </>
  )
}

export default Home