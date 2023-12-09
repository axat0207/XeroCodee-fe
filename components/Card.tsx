
import React from "react";

interface ContainerProps{
    children : React.ReactNode;
}
export const Card : React.FC<ContainerProps> = ({children})=>{
    return(
        <div className="card bg-white shadow-2xl rounded-tr-[50px] rounded-bl-[50px]">
            {children}
        </div>
    )
}