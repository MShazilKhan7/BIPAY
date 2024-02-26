import React from "react";
import { useEffect, useState } from "react";
import EmployeeHeader from "./content/header/header";
import BottomContent from "./content/bottomContent/bottomContent";
import Table from "../jobDesk/content/tableComponent/table";
import axios from "axios";

interface Employee {
  profile: string; 
  id: number;
  status: string;
  Department: string;
  shift: string;
  Role: string;
}

interface TableData {
  tableHeader: string[];
  tableData:   Employee[];
}

function EmployeesContent():any{
    const [employees, setEmployees] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
          try {
              setError(false);
              setLoading(true);
              const response = await axios.get('http://127.0.0.1:8000/api/employees/');
              const responseData = response.data;
              const updatedEmployees = responseData.map((employeeData:any) => ({
                  profile: employeeData.first_name + employeeData.last_name,
                  id: employeeData.id,
                  shift: employeeData.shift,
                  status: employeeData.status,
                  Department: employeeData.department_emp.name,
                  Role: employeeData.designation_emp
              }));
  
              // Update the employees state with the new array of employees
              setEmployees(updatedEmployees);
              setLoading(false);
          } catch (error) {
              setError(true);
              setLoading(false);
          }
      };
      fetchData();
  },[]);


    // i can store this into the redux store and take the data from that state directly inside the table...
    let data: TableData = {
        tableHeader : ['profile','id','status','Department','shift', 'Role'],
        tableData   : employees
    }
    return (
        <>
            <EmployeeHeader/>
            <BottomContent>
              {loading  &&  <h3>Loading...</h3> }
              {!loading && <Table details={data}/>} 
              {error && <h3>Error Loading data...</h3>}
            </BottomContent>
        </> 
    )
}
export default EmployeesContent;