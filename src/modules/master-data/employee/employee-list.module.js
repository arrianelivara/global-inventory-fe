import { Button, DataTable, Field, Input, Text } from 'components';
import { StyleType } from 'enums';
import React from 'react'
import { columns } from './columns';
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useModal } from "hooks";
import { Modal } from "antd"

const EmployeeList = () => {
    const addEmployeeModal = useModal();

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
        <React.Fragment>
            <Text title size='text-lg'>Employees</Text>
            <Text description>List of Employees</Text>
            <div className="mt-md">
                <Button iconPrefix={<PlusOutlined className="mr-sm" />} className="mr-sm"
                    onClick={() => {
                        addEmployeeModal.show({
                            title: "Register Employee",
                            okText: "Submit",
                            width: "60%"
                        })
                    }}>
                    Add
                </Button>
                <Button iconPrefix={<EditOutlined className="mr-sm"/>} type={StyleType.Secondary}>Update</Button>
            </div>
            <DataTable className="mt-md" columns={columns} data={sampleData} pageSize={10} total={sampleData.length}/>
            <Modal {...addEmployeeModal} onCancel={() => addEmployeeModal.close()}>
                <div className='grid grid-cols-4 gap-2'>
                    <Field label="Employee Number">
                        <Input />
                    </Field>
                    <Field label="First Name">
                        <Input />
                    </Field>
                    <Field label="Middle Name">
                        <Input />
                    </Field>
                    <Field label="Last Name">
                        <Input />
                    </Field>
                </div>
                <div className='grid grid-cols-4 gap-2'>
                    <Field label="Job Role" className="col-span-2">
                        <Input />
                    </Field>
                    <Field label="Start Date">
                        <Input />
                    </Field>
                    <Field label="End Date">
                        <Input />
                    </Field>
                </div>
                <div>
                    <Field label="Remarks">
                        <Input />
                    </Field>
                </div>
            </Modal>
        </React.Fragment>
    );
}
 
export default EmployeeList;