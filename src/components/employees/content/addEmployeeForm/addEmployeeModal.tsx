import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import {BlueButton, WhiteButton} from 'src/components/buttons/button'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { FaStethoscope } from 'react-icons/fa';
interface FormFields {
  department: string;
  designation: string;
  first_name: string;
  last_name: string;
}

interface Employee{
  department: string;
  designation: string;
  first_name: string;
  last_name: string;
  status: string;
  shift: string;
  joining_date: string;
}

interface Department{
  id: string;
  name: string;
  location: string;
  work_shift: string;
  description:string;
  manager: string;
  parent_department: string;
}

interface Designation{
  id: string;
  name: string;
}

const handleFormSubmission = async(data:FormFields) =>{
  try {
    const employee = {
        department:   parseInt(data.department),
        designation:  parseInt(data.designation),
        first_name:   data.first_name,
        last_name:    data.last_name,
        status:  "",
        shift: "",
    };
    console.log(employee);
    const response = await axios.post('http://127.0.0.1:8000/api/employees/', employee);
} catch (error) {
  console.error('Error posting data:', error);
}

}

export default function ModalUnstyled() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [departments, setDepartments]   = useState<Department[]>([])
  const [designations, setDesignations] = useState<Designation[]>([])
  const [error, setError] = useState<boolean>(false)

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>()

  const fetchDepartments = async()=>{
    
    try{
      const response  = await axios.get('http://127.0.0.1:8000/api/departments/')
      return response.data;
    }catch(error){
      setError(true)
    }
  } 
  const fetchDesignations = async()=>{
    try{
      const response  = await axios.get('http://127.0.0.1:8000/api/designations/')
      return response.data;
    }catch(error){
      setError(true)
    }
  } 
  const handleFormSubmission = async(data:FormFields) =>{
    try {
      const employee = {
          department:   parseInt(data.department),
          designation:  parseInt(data.designation),
          first_name:   data.first_name,
          last_name:    data.last_name,
          status:  "",
          shift: "",
      };
      console.log(employee);
      const response = await axios.post('http://127.0.0.1:8000/api/employees/', employee);
      setOpen(false)
  } catch (error) {
    console.error('Error posting data:', error);
  }

  }

  useEffect(()=>{
  fetchDepartments().then(data=>{
    setDepartments(data);
  })
  fetchDesignations().then(data=>{
    setDesignations(data)
  })
},[])

  return (
    <div>
      <TriggerButton type="button" onClick={handleOpen}>
        Add Employee
      </TriggerButton>
      <Modal
        // aria-labelledby="unstyled-modal-title"
        // aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
            <h2 className='font-bold'>Add Employee</h2>
            <form action="post" onSubmit={handleSubmit(handleFormSubmission)} className='flex flex-col gap-2'>
                <div className="firstname-field">
                  <div><label htmlFor="Name">First Name</label></div>
                  <div><input {...register("first_name", {required: "first name is mandatory field",})} type="text" className='w-full h-11 rounded-md'/></div>
                  {errors.first_name && <p className='text-red-500'>{errors.first_name.message}</p>}
                </div>
                <div className="lastname-field">
                  <div><label htmlFor="Name">Last Name</label></div>
                  <div><input {...register("last_name", {required: "last name is mandatory field",})} type="text" className='w-full h-11 rounded-md'/></div>
                  {errors.last_name && <p className='text-red-500'>{errors.last_name.message}</p>}
                </div>
                <div className="designation-field">
                  <div><label htmlFor="Designation">Designation</label></div>
                  <div>
                    <select {...register("designation", {required: "Designation is required field",})} name="cars" id="cars" className='w-full'>
                      {designations && designations.map((des:Designation)=>{
                          return <option value={des.id}>{des.name}</option>
                      })}
                     {errors.designation && <p className='text-red-500'>{errors.designation.message}</p>}
                    </select>
                  </div>
                </div>
                <div className="department-field">
                  <div><label htmlFor="department">Department</label></div>
                  <div>
                  <select {...register("department", {required: "department is required field",})} name="cars" id="cars" className='w-full'>
                    {departments && departments.map((dept:Department)=>{
                        return <option value={dept.id}>{dept.name}</option>
                    })}
                    {errors.department && <p className='text-red-500'>{errors.department.message}</p>}
                  </select>
                  </div>
                </div>

                <div className="buttons flex gap-3">
                  <BlueButton value={isSubmitting? "Loading": "Save"} type='submit' disabled={isSubmitting && true}/>
                  <WhiteButton onClick={()=>{setOpen(false)}} value='cancel'/>
                </div>
            </form>
            
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & label{
      font-size: 14px;
    }
    & input,select{
      height: 44px;
      border: 1px solid #C2C2C2;
      padding: 0 8px;
      border-radius: 8px;
    }

    & option{
      border-radius: 8px;
    }
  
  
    `
  
  
  ,
);

const TriggerButton = styled('button')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);
