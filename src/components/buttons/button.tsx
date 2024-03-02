import React from "react";

interface ButtonProps {
    // Common attributes
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    name?: string;
    value?: string;
    autofocus?: boolean;
    form?: string;
  
    // Additional attributes
    formaction?: string;
    formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | string;
    formmethod?: 'GET' | 'POST' | string;
    formnovalidate?: boolean;
    formtarget?: string;
  
    // Events
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  
    // Styling
    className?: string;
    style?: React.CSSProperties;
  
    // Children (optional)
    children?: React.ReactNode;
  }
  
function BlueButton({name,type,value,onClick, ...otherprops}:ButtonProps): JSX.Element{
    return(
        <button type={type} onClick={onClick} className="rounded-md text-white px-4 py-[6px] bg-[#212143]">{value}</button>
    )
}
function WhiteButton({name,type,value,onClick, ...otherprops}:ButtonProps):  JSX.Element{
    return(
        <button  name={name} type={type} onClick={onClick} className="flex items-center rounded-md px-4 py-[6px] text-black border-[1.5px] border-[#E0E0E0] bg-white text-center">{value}</button>
    )
}

export {BlueButton, WhiteButton} 
