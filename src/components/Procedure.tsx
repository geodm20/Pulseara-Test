import { useState, useEffect } from "react";
import folder from "/src/assets/folder.svg";
import edit from "/src/assets/edit.svg";
import Modal from "./Modal";
import { InputsType } from "../types";
import SavedProcedures from "./SavedProcedures";

export default function Procedure () {
    const [procedures, setProcedures] = useState<InputsType[]>([]);
    const [proceduresNumbers, setProceduresNumbers] = useState<number[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [added, setAdded] = useState<boolean>(false);

    function switchModal (value: boolean) {
        setModal(value);
    }

    function setData (data: InputsType[]) {
        setProcedures(data);
    }

    useEffect(() => {
        if (procedures.length > 0) {
            setAdded(true);
        }
    }, [procedures]);

    useEffect(() => {
        if (added) {
            const timer = setTimeout(() => setAdded(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [added]);

    return (
        <section className="w-[1440px] min-h-[857px] flex flex-col items-center justify-content relative">
            <h1 className={`text-[25px] font-semibold self-start mt-[99px] ml-[88px] ${procedures.length > 0 ? "mb-9" : ""}`}>Procedimientos</h1>
            <div className={`w-full h-full flex flex-col ${procedures.length > 0 ? "" : "items-center justify-center"}`}>
                {procedures.length > 0 ? 
                <>
                    {procedures.map((procedure: InputsType, index: number) => {
                        return (
                            <SavedProcedures data={procedure} key={index} instances={index}/>
                        )
                    })}
                    <div 
                        className="text-sm font-bold text-white bg-[#3F48AD] px-4 gap-2 flex cursor-pointer rounded-[5px] w-[202px] h-[32px] ml-[88px] mt-6" 
                        onClick={() => switchModal(true)}
                    >
                        <img src={edit} alt="Edit" className="w-[13px]"/>
                        <button>Editar procedimientos</button>
                    </div>
                </>
                :
                <div className="flex flex-col absolute top-[314px] items-center justify-center">
                    <img src={folder} alt="Folder" className="mb-5 w-[134px]" />
                    <p className="font-roboto leading-6 tracking-[0.15px] mb-5">No hay datos que mostrar</p>
                    <div className="text-sm font-bold text-white bg-[#3F48AD] px-4 h-8 gap-2 flex cursor-pointer rounded-[5px]" onClick={() => switchModal(true)}>
                        <img src={edit} alt="Edit" className="w-[13px]"/>
                        <button>Editar procedimientos</button>
                    </div>
                </div>}
            </div>
            {procedures.length > 0 && added && <button className="font-roboto text-white leading-5 tracking-[0.17px] bg-[#306495] w-fit h-[48px] px-4 py-2 rounded-[5px] self-end mt-auto mb-10 mr-10">Procedimiento agregado</button>}
            {modal && 
            <Modal 
                close={(value: boolean) => switchModal(value)} 
                fData={(data: InputsType[]) => setData(data)}
                proceduresNumbers={proceduresNumbers}
                setProceduresNumbers={setProceduresNumbers}
            />}
        </section>
    )
}
