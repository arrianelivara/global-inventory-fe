import React from 'react'
import {main_menus} from "./nav-entries.js";
import { NavLink } from 'react-router-dom';

const LayoutA = ({ component }) => {
    const menuList = main_menus;
    return (<React.Fragment>
        <div className="flex h-full">
            <div className="h-full w-64 bg-white drop-shadow-sm">
                {menuList.map((menu) => {
                    const {  path: to, key } = menu;
                    return <div key={key} className="w-full">
                            {to !== undefined ? <NavLink
                                to={`${to}`}
                                exact
                                className={({ isActive }) => isActive ? "bg-blue-opaque text-blue text-sm block font-semibold border-l-4 border-blue w-full px-md py-sm" : "text-sm text-blue block font-semibold w-full px-md py-sm"}
                            >{menu.name}
                            </NavLink> : <div className="text-sm text-blue px-md py-sm font-semibold">{menu.name}</div>}
                            {menu.children?.map(({ name, path, key }) => {
                                return <div key={key} className="w-full hover:bg-blue-opaque">
                                    <NavLink
                                        to={`${path}`}
                                        exact
                                        className={({ isActive }) => isActive ? "bg-blue-opaque font-semibold text-blue border-l-4 border-blue w-full py-sm pl-xl block" : "text-blue-light block pl-xl w-full px-md py-sm"}
                                    >
                                            {name}
                                    </NavLink>
                                </div>
                            })}
                            </div>
                })}
            </div>
            <div className="w-full p-xl">
                {component}
            </div>
        </div>
    </React.Fragment>);
}
 
export default LayoutA;