import Image from "next/image"

export default function Logo(){
    return(
        <div className=" flex flex-col items-center mb-6">
            <Image
                src= "/Logo.png"
                alt = "logo "
                width={200}
                height={220}
                priority
                />
        </div>
    )
}