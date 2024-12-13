import authimg from "../../assests/authimg.gif"

import AuthLogin from '@/pages/auth/login';
import { Outlet } from 'react-router-dom';



function AuthLayout() {

 
    return(


        <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-[800px] px-12    bg-cover bg-center h-screen ">      <img src={authimg} className="h-[690px] w-[704px]"></img>
      </div>
      <div className="flex items-center justify-center bg-background px-4 py-12 ml-[110px] ">
        <AuthLogin />
      </div>
    </div>
    )
}

export default AuthLayout;