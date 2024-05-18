export default function SavedProcedures ({data, instances}: any) {

    return (
        <div className="w-[941px] h-[78px] rounded-[10px] bg-white ml-[88px] mb-3">
            <div className="w-[813px] h-[45px] flex gap-[78px] ml-8 mt-4">
                <div className="flex flex-col">
                    <span className="text-[#949494]">Procedimiento {(instances < 9) && "0"}{instances + 1}</span>
                    <span className="font-semibold">{data.procedimiento}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#949494]">Código</span>
                    <span className="font-semibold">{data.codigo}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#949494]">Reclamado</span>
                    <span className="font-semibold">RD$ {data.reclamado}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#949494]">Diferencia RD$</span>
                    <span className="font-semibold">RD$ {data.diferencia}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[#949494]">Autorizado RD$</span>
                    <span className="font-semibold">RD$ {data.autorizado}</span>
                </div>
            </div>
        </div>
    )
}