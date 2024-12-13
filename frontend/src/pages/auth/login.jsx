import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/data/auth";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";





const initialState ={
    email:'',
    password:''
}

function AuthLogin(params) {
    
    const [formData,setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const {toast} = useToast()
    function onSubmit(event) {
        event.preventDefault();
        dispatch(loginUser(formData)).then((data) =>{
            if(data?.payload?.success){
                toast({
                    title:data?.payload?.message
                })
            }else{
                toast({
                    title:data?.payload?.message
                                    })
            }
        })

    }

    return(
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground">Login</h1>
<p className="mt-2">Doesn't have an account
    <Link className="font-medium text-primary hover:underline ml-2" to='/auth/register'>Sign Up</Link>
</p>
            </div>
            <CommonForm 
            formControls={loginFormControls}
            buttonText={'Sign In'}
            formData={formData}
            setFormData={setFormData }
            onSubmit={onSubmit}
            />


        </div>
    )
}

export default AuthLogin