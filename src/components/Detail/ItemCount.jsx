import React, { useState } from "react";

function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    function suma(){
        if(count < stock){
        setCount(count + 1);
        }
    }
    function resta(){
        if(count >= 1){
            setCount(count - 1);
        }
    }
    const updateInput = (e)=>{
        const {valor} = e.target;
        if(valor <= stock){
            setCount(isNaN(valor) ? 0 : parseInt(valor))
        }
    }

    return(
        <div className="container text-center">
            <div className="flex flex-col items-center m-6">
             <div>
                <div className="flex justify-between rounded border-black border h-10">
                 <button className=" w-10 border border-gray-400" onClick={resta}> -</button>
                 <input onChange={(e)=>updateInput(e)} className="w-8 text-center" value={count} type="number" />
                 <button className="w-10 border border-gray-400" onClick={suma}> +</button>
                </div>
                <div>
                    <button className="agregar-carrito rounded border border-gray-600 m-2 p-0.5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 disabled:bg-slate-50" onClick={()=> onAdd(count)} disabled={count === 0 || count === " "}> Agregar a Carrito</button>
                </div>
             </div>
            </div>
        </div>
    )
}

export default ItemCount;