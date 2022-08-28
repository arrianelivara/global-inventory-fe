import React from 'react'
import { getUsers, getToken } from '../../apis';
import { Text } from '../../components';
import { useApi, useMount } from "../../hooks";

const Menu = () => {
    const { request, result } = useApi({
        api: getUsers
    });

    const { request: getTokenApi } = useApi({
        api: getToken
    });

    useMount(async () => {
        await request();
        // console.log(result)
        // await getTokenApi();
    })
    return (<React.Fragment>
        <div className="mx-auto my-32 rounded-md border-b-2 border-blue-700 w-3/4 bg-white p-xl">
            <Text fontWeight="font-semibold" size="font-lg" color="text-blue-700">Welcome to your all-in-one service platform.</Text>
            <Text size="text-3xl" fontWeight="font-semibold" color="text-gray-500" className="mt-md">
                This is the homepage. Navigate through the side menu options to get started.
            </Text>
        </div>
    </React.Fragment>);
}
 
export default Menu;