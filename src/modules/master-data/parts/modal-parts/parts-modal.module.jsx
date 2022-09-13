import { Modal } from 'antd';
import { Field, Input, Select, Text, TextArea } from 'components';
import lang from "translations"
import React from 'react'

const PartsModal = ({ partsModal }) => {
    return (
        <Modal {...partsModal} onCancel={() => partsModal.close()} 
            bodyStyle={{
                paddingInline: '2rem'
            }}>
                <Text label>Note: Fields with (<span className='text-red'>*</span>) are required.</Text>
                <div className='mt-md'>
                    <Field label="Part Code" required>
                        <Input />
                    </Field>
                    <Field label="Part Name" required>
                        <Input />
                    </Field>
                    <Field label="Category" required>
                        <Select text={lang.selectJobRole}></Select>
                    </Field>
                </div>
                <div className='mt-sm'>
                    <Field label="Remarks">
                        <TextArea />
                    </Field>
                </div>
        </Modal>
     );
}
 
export default PartsModal;