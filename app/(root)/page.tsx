"use client"
import { useSession } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const cart = useSelector((state:any) => state.cart);
  // console.log("cart",cart);

  const handleAddProduct = () => {
 
  };

  const session=useSession();
  console.log("session is here",session);
  return (
    // <RootLayout>


  <div className='flex min-h-screen flex-col items-center justify-between p-24'>
    
    Krishna Krishna
    {
      session.status==="authenticated" 
      && <>
      <h2>You are Logged In user</h2>
      <h3>Your Name: {session.data.user?.name}</h3>
      <h3>Your Email: {session.data.user?.email}</h3>
      <img src={`${session.data.user?.image}` || "/assets/model3.png"}/>
      </>
    }
  </div> 
  // </RootLayout>

  )
}
