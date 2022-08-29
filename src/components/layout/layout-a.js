import React from 'react'
import menus from "./nav-entries.json";
import classnames from "classnames";
import { NavLink } from 'react-router-dom';
import styles from "./layout.module.scss";

const LayoutA = ({ component }) => {
    const { main_menus: menuList } = JSON.parse(JSON.stringify(menus));
    console.log(styles)
    return (<React.Fragment>
        <div className="flex h-full">
            <div className="h-full w-64 bg-white drop-shadow-sm">
                {menuList.map((menu) => {
                    const {  path: to, key } = menu;
                    return <div key={key}>
                            <NavLink
                                to={`/${to}`}
                                exact
                                className={({ isActive }) => isActive ? "border-l-4 border-blue-400 w-full px-md py-sm" : "w-full px-md py-sm"}
                            ><div>{menu.name}</div>
                            </NavLink>
                            {menu.children?.map(({ name, path, key }) => {
                                return <div key={key}>
                                    <NavLink
                                        to={`/${path}`}
                                        exact
                                        className={({ isActive }) => isActive ? "border-l-4 border-blue-400 w-full px-md py-sm" : "w-full px-md py-sm"}
                                    >
                                        <div className={classnames("px-xl py-sm hover:bg-gray-100")}>
                                            {name}
                                        </div>
                                    </NavLink>
                                </div>
                            })}
                        </div>
                })}
            </div>
            <div className="w-full p-lg">
                {component}
            </div>
        </div>
    </React.Fragment>);
}
 
export default LayoutA;