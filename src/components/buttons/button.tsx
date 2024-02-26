

function BlueButton({data}:any):any{
    return(
        <button className="rounded-md text-white px-4 py-[6px] bg-[#212143]">{data}</button>
    )
}
function WhiteButton({data}:any):any{
    return(
        <button className="flex items-center rounded-md px-4 py-[6px] text-black border-[1.5px] border-[#E0E0E0] bg-white text-center">{data}</button>
    )
}

export {BlueButton, WhiteButton} 
