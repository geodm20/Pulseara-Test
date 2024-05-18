import plus from "/src/assets/plus.svg";
import x from "/src/assets/x.svg";
import done from "/src/assets/done.svg"
import AddProcedure from "./AddProcedure";
import { useState } from "react";
import { InputsType } from "../types";

export default function Modal ({close, fData, proceduresNumbers, setProceduresNumbers}: any) {

    const [temporalProcedures, setTemporalProcedures] = useState<InputsType[]>([]);

    function closeModal() {
        close(false);
    }

    function addProcedure () {
        setProceduresNumbers((prevState: number[]) => [...prevState, prevState.length]);
    }

    function removeProcedure (value: boolean, procedure: number, index: number) {
        const procedureIndex = proceduresNumbers.indexOf(procedure);
        
        if (value === true) {
            let newProcedures = [... proceduresNumbers];
            newProcedures.splice(procedureIndex, 1);
            setProceduresNumbers(newProcedures);

            let newSavedProcedures = [...temporalProcedures];
            newSavedProcedures.splice(index, 1);
            setTemporalProcedures(newSavedProcedures);
        }
    }
    
    function saveProcedure(inputs: InputsType, index: number) {
        setTemporalProcedures(prevState => {
            const newState = [...prevState];
            newState[index] = inputs;
            return newState;
        });
    }

    function saveChanges() {
        fData(temporalProcedures);
        closeModal();
    }

    return (
        <section className="absolute w-full min-h-full bg-black/[0.3] flex justify-center items-center">
            <div className="w-[1041px] min-h-[456px] bg-white rounded-lg flex flex-col items-center justify-between relative">
                <div className="flex h-[45px] w-[559px] self-start ml-24 mt-14 mb-10 gap-4">
                    <h2 className="text-[#1E2469] text-[32px] leading-[44.8px] font-medium">Procedimientos</h2>
                    <div className="flex mb-[6.74px] self-end gap-[6.2px] cursor-pointer" onClick={addProcedure}>
                        <img src={plus} alt="Plus" className="w-[15.82px] h-[15.811px] self-end mb-[4px]"/>
                        <span className="font-open-sans text-[#07B284] font-bold leading-6">Añadir procedimiento</span>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-full">
                    {proceduresNumbers.map((procedure: number, index: number) => {
                        return (
                            <AddProcedure 
                                key={index} 
                                procedureData={(inputs: InputsType) => saveProcedure(inputs, index)} 
                                remove={(value: boolean) => removeProcedure(value, procedure, index)}
                                instances={index}
                            />
                        )
                    })}
                </div>

                <div className="flex self-end mr-14 mb-14 mt-2 gap-[16.89px]">
                    <button className="w-[138px] h-8 rounded-[5px] border-2 text-[#6E6D8C] text-sm font-bold" onClick={closeModal}>Cancelar</button>
                    <div className="cursor-pointer bg-[#3F48AD] text-white text-sm rounded-[5px] gap-2 flex justify-center items-center" onClick={saveChanges}>
                        <img src={done} alt="Done" className="ml-4 w-[10.45px] h-[9.98px]"/>
                        <button className="mr-4 font-bold">Guardar cambios</button>
                    </div>
                </div>

                <img src={x} alt="X" className="w-[17.16px] h-[17.16px] absolute top-[5.79px] right-[7.02px] cursor-pointer" onClick={closeModal}/>
            </div>
        </section>
    )
}