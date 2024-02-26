import { BlueButton,WhiteButton } from "src/components/buttons/button"

function EmployeeHeader(){
    return (
        <>
        <div className="employees-header w-full h-[94px] px-8 py-4 flex flex-col gap-2">
            <p>Employees<span>{">"}</span>All employees</p> 
            <div className="flex justify-between items-center">
                <p className="font-bold text-xl">All employees</p>
                <div className="flex gap-2">
                    <BlueButton data={"Add Employee"}/>
                    <WhiteButton data={"invite"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmployeeHeader;