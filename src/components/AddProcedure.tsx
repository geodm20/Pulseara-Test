import trash from "/src/assets/trash.svg";
import { useState, useEffect } from "react";
import { InputsType } from "../types";

export default function AddProcedure({procedureData, remove, instances}: any) {

    const [inputs, setInputs] = useState<InputsType>({
        procedimiento: "",
        codigo: "",
        reclamado: "",
        diferencia: "",
        autorizado: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function removeInput () {
        remove(true);
    }

    useEffect(() => {
        procedureData(inputs);
    }, [inputs]);

    return (
        <form className="w-full flex justify-center font-open-sans leading-6 mx-[57px] mb-8 items-end" >
            <img src={trash} alt="Trash" className="mr-[24.61px] mb-3 cursor-pointer" onClick={removeInput}/>

            <div className="flex flex-col mr-[49px]">
                <label htmlFor="procedimiento" className="opacity-70">Procedimiento {(instances < 9) && "0"}{instances + 1}</label>
                <input type="text" id="procedimiento" name="procedimiento" value={inputs.procedimiento} onChange={handleChange} placeholder="Ej: 4563523" className="rounded-[5px] border-2 border-[#9CBEB3] w-[181px] h-[44px] px-4 text-[#80868B] mt-2 bg-[#F6F6FB]"/>
            </div>

            <div className="flex flex-col mr-[25px]">
                <label htmlFor="codigo" className="opacity-70">Código</label>
                <input type="text" id="codigo" name="codigo" value={inputs.codigo} onChange={handleChange} placeholder="Ej: 4563523" className="rounded-[5px] border-2 border-[#9CBEB3] w-[145px] h-[44px] px-4 text-[#80868B] mt-2 bg-[#F6F6FB]"/>
            </div>

            <div className="flex flex-col mr-[25px]">
                <label htmlFor="reclamado" className="opacity-70">Reclamado RD$</label>
                <input type="text" id="reclamado" name="reclamado" value={inputs.reclamado} onChange={handleChange} placeholder="Ej: 4563523" className="rounded-[5px] border-2 border-[#9CBEB3] w-[145px] h-[44px] px-4 text-[#80868B] mt-2 bg-[#F6F6FB]"/>
            </div>

            <div className="flex flex-col mr-[25px]">
                <label htmlFor="diferencia" className="opacity-70">Diferencia RD$</label>
                <input type="text" id="diferencia" name="diferencia" value={inputs.diferencia} onChange={handleChange} placeholder="Ej: 4563523" className="rounded-[5px] border-2 border-[#9CBEB3] w-[145px] h-[44px] px-4 text-[#80868B] mt-2 bg-[#F6F6FB]"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="autorizado" className="opacity-70">Autorizado RD$</label>
                <input type="text" id="autorizado" name="autorizado" value={inputs.autorizado} onChange={handleChange} placeholder="Ej: 4563523" className="rounded-[5px] border-2 border-[#9CBEB3] w-[145px] h-[44px] px-4 text-[#80868B] mt-2 bg-[#F6F6FB]"/>
            </div>
        </form>
    )
}