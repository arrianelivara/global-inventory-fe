import React from 'react';
import { Logo } from "images";
import { Text } from "components";
const Navigation = () => {
    return <React.Fragment>
      <div className="w-full py-2 border-b bg-white px-5">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="logo" style={{ height: '60px' }}/>
          <Text>{new Date().toString()}</Text>
        </div>
      </div>
    </React.Fragment>
}

export default Navigation;