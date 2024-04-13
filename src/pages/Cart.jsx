import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';

const Cart = () => {

  const { cart } = useSelector( (state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className='h-[89vh] '>
      {
        cart.length > 0 ? 
        (
          <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 mx-auto max-w-6xl gap-x-16'>
            <div className='w-[100%] '>
              {
                cart.map( (item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index}/>
                ) )
              }
            </div>

            <div className='grid grid-end  h-[750px]  mt-[90px] xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 '>
              <div className=''>
                  <div className='text-sm text-green-600 font-semibold'>Your Cart</div>
                  <div className='text-3xl font-bold text-green-700 uppercase -mt-1'>Summary</div>
                  <p className='mt-1 font-semibold text-grey-400'>
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div className='flex flex-col gap-y-3'>
                  <p className='font-semibold text-grey-400 '>Total Amount: <span className='font-bolder text-grey-400'>${totalAmount}</span></p>
                  <button className='w-2/3 bg-green-700 text-white border-2 border-green-700 p-2 rounded-lg font-semibold'>
                    CheckOut Now
                  </button>
                </div>
            </div>

          </div>
        ):
        (<div className='flex flex-col justify-center items-center h-full gap-y-3'>
          <h1 className='text-2xl font-semibold'>Cart Empty</h1>
          <NavLink to={"/"}>
            <button className='text-grey-700 border-2 border-grey-700 rounded-full font-semibold
            text-md p-2 px-5 uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in'>
              Shop Now
            </button>
          </NavLink>
        </div>
        )
      }
    </div>
  );
};

export default Cart;
