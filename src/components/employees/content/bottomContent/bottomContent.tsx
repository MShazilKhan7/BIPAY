import React from "react"



function BottomContent({ children }: any):any {
    return (
        <div className="wrapper px-8 py-4">
            <div className="content px-8 py-4 bg-[#FFF] rounded-md">
                {children}
            </div>
        </div>
    )
}

export default BottomContent;