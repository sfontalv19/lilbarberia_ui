import {useState} from "react";
import {AuthService} from "@/lib/api/auth"
import {useRouter} from "next/navigation"

export function useSignup(){
    const [loading, setLoading] = useState(false);
    const [ error, setError] = useState("");
    const router = useRouter()
    
    const handleSignup = async (email: string, password: string, phone:string) => {
        setLoading(true)
        setError("");


        try {
            const result = await AuthService.signup({email, password, phone });
            console.log("usuario registrado", result);
            
            // redirigir a confirmSignup

            router.push(`/confirm_signup?email=${email}`)

        }catch (err:any) {
            console.error("error en signup", err)
            setError(err.mesage || "error al crear cuenta");
        } finally {
            setLoading(false)
        }

    };

    return {handleSignup, loading, error}
}

