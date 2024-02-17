
function Timelog(){
    return (
        <>
        <div className="w-full px-8 py-4 bg-[F5F5F5]">
            <div className="w-full main-cont px-8 py-4 flex flex-col gap-6 bg-white rounded-lg">
                <p className="font-bold">Time log</p>
                <div className="w-full bottom-container flex gap-7">
                    <div className="w-1/2 today-log flex flex-col gap-4">
                        <p>today</p>
                        <div className="w-full today-container flex justify-between ">
                            <div className="w-[92px] h-[81px] px-4 py-2 flex flex-col gap-2 bg-[#F5F5F5] rounded-lg">
                                <p className="text-sm">08:00</p>
                                <p className="text-sm">schduled</p>
                            </div>
                            <div className="w-[92px] h-[81px] px-4 py-2 flex flex-col gap-2 bg-[#F5F5F5] rounded-lg">
                                <p className="text-sm">08:00</p>
                                <p className="text-sm">schduled</p>
                            </div>
                            <div className="w-[92px] h-[81px] px-4 py-2 flex flex-col gap-2 bg-[#F5F5F5] rounded-lg">
                                <p className="text-sm">08:00</p>
                                <p className="text-sm">schduled</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 this-month flex flex-col gap-4">
                        <p>This month</p>
                        <div className="w-full month-container flex gap-6">
                            <div className="left flex flex-col w-11/12 gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="text flex justify-between">
                                        <p>Total</p>
                                        <p>216 hour</p>
                                    </div>
                                    <div className="progress-bar h-2 bg-[#F5F5F5] rounded-full">
                                        <div className="h-full w-1/2 rounded-full bg-[#125FC6]">
                                        </div>
                                    </div>
                                </div>     
                                <div className="flex flex-col">
                                    <div className="text flex justify-between">
                                        <p>Total</p>
                                        <p>216 hour</p>
                                    </div>
                                    <div className="progress-bar h-2 bg-[#F5F5F5] rounded-full">
                                        <div className="w-1/2 h-full rounded-full bg-[#125FC6]">
                                        </div>
                                    </div>
                                </div>   
                            </div>
                            <div className="right flex flex-col w-11/12 gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="text flex justify-between">
                                        <p>Total</p>
                                        <p>216 hour</p>
                                    </div>
                                    <div className="progress-bar h-2  bg-[#F5F5F5] rounded-full">
                                        <div className="w-1/2 h-full rounded-full bg-[#125FC6]">
                                        </div>
                                    </div>
                                </div>     
                                <div className="flex flex-col">
                                    <div className="text flex justify-between">
                                        <p>Total</p>
                                        <p>216 hour</p>
                                    </div>
                                    <div className="progress-bar h-2 rounded-full bg-[#F5F5F5]">
                                        <div className="h-full w-1/2 rounded-full bg-[#125FC6]">
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Timelog;