import { Button, DataTable, WrapperA } from 'components';
import { StyleType } from 'enums';
import React from 'react'
import { columns } from './columns';
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useModal } from "hooks";
import lang from "translations";
import AddEmployeeModal from './add-employee/add-employee-modal.module';
import EditEmployeeModal from './edit-employee/edit-employee-modal.module';

const EmployeeList = () => {
    const addEmployeeModal = useModal();
    const editEmployeeModal = useModal();

    const sampleData = [
        {
            employeeNo: '1234',
            lastName: 'Suriaga',
            middleName: 'Dy',
            firstName: 'Diego',
            jobRole: 'Manager',
            startDate: 'Yesterday',
            endDate: 'Tomorrow'
        },
        {
            employeeNo: '1234',
            lastName: 'Livara',
            middleName: 'Elaurza',
            firstName: 'Arriane',
            jobRole: 'Manager',
            startDate: 'Yesterday',
            endDate: 'Tomorrow'
        }
    ]

    return (
        <WrapperA
            title={lang.employees}
            description={lang.listOfEmployees}
            actionButtons={
                <div className="mt-md">
                    <Button iconPrefix={<PlusOutlined className="mr-sm" />} className="mr-sm"
                        onClick={() => {
                            addEmployeeModal.show({
                                title: "Register New Employee",
                                okText: "Add",
                                width: "50%"
                            })
                        }}>
                        {lang.add}
                    </Button>
                    <Button iconPrefix={<EditOutlined className="mr-sm"/>} 
                            type={StyleType.Secondary}
                            onClick={() => {
                                editEmployeeModal.show({
                                    title: "Update Employee Information",
                                    okText: "Save",
                                    width: "50%"
                                })}}
                        >{lang.update}</Button>
                </div>
            }>
            <DataTable className="mt-md" columns={columns} data={sampleData} pageSize={10} total={sampleData.length}/>
            <AddEmployeeModal addEmployeeModal={addEmployeeModal}/>
            <EditEmployeeModal editEmployeeModal={editEmployeeModal} />
        </WrapperA>
    );
}
 
export default EmployeeList;