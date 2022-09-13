import { Title, Text } from 'components';
import React from 'react'

const WrapperA = ({ title, description, actionButtons, filterButtons, children}) => {
    return (
        <React.Fragment>
            <Title lg>{title}</Title>
            <Text description>{description}</Text>
            <div className='flex items-center justify-between'>
                {actionButtons}
                {filterButtons}
            </div>
            {children}
        </React.Fragment>
    );
}
 
export default WrapperA;