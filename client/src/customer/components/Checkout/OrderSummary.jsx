import React, { useEffect } from 'react';
import AddressCard from '../AddressCard.jsx/AddressCard';
import { Button } from '@mui/material';
import CartItem from '../Cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { createPayment } from '../../../State/Payment/Action';

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {order} = useSelector( store => store)
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('order_id');
    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId])

    const handleCheckout = () => {
        dispatch(createPayment(orderId));
    }


  return (
    <div>
        {/* {console.log(order.order)} */}
    <div className='p-5 shadow-lg rounded-s-md border'>
       <AddressCard address={order.order?.shippingAddress} />
    </div>
    <div className='lg:grid grid-cols-3 relative'>
            <div className='col-span-2'>
                {/* {console.log(order)} */}
            {order.order?.orderItems?.map((item)=><CartItem item={item}/>)}
            </div>
            <div className='px-5 sticky top-7 h-[100vh] mt-5 lg:mt-0'>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'> Price details </p>
                    <hr/>
                    <div className='space-y-3 font-semibold mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>₹4,697</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span>Discount</span>
                            <span className='text-green-600'>-₹3,419</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                            <span>Total</span>
                            <span className='text-green-600'>₹1,278</span>
                        </div>
                    </div>
                    <Button
                      variant="contained"
                      className='w-full mt-5'
                      sx={{
                        px: "2.5rem",
                        py: "0.7rem",
                        backgroundColor: "#9155fd"
                      }}
                      onClick={handleCheckout}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary