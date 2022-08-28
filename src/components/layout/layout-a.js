import React from 'react'
import menus from "./nav-entries.json";
import classnames from "classnames";
import { useNavigate, NavLink } from 'react-router-dom';

const LayoutA = ({ component }) => {
    const { main_menus: menuList } = JSON.parse(JSON.stringify(menus));

    return (<React.Fragment>
        <div className="flex h-full">
            <div className="h-full w-64 bg-white drop-shadow-sm">
                {menuList.map((menu) => {
                    const {  path: to } = menu;
                    return <div><NavLink
                        activeClassName="border-l-4 border-blue-700 bg-blue-100"
                        to={`/${to}`}
                        exact
                      ><div className="w-full px-md py-sm">{menu.name}</div>
                        {menu.children?.map(({ name, path, key }) => {
                            return <div>
                                <NavLink
                                    activeClassName="border-l-4 border-blue-700 bg-blue-100"
                                    to={`/${path}`}
                                    exact
                                >
                                    <div key={key} className={classnames("px-xl py-sm hover:bg-gray-100")}>
                                        {name}
                                    </div>
                                </NavLink>
                            </div>
                        })}
                      </NavLink></div>
                })}
            </div>
            <div className="w-full p-lg">
                {component}
            </div>
        </div>
    </React.Fragment>);
}
 
export default LayoutA;