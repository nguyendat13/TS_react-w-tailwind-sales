import { useEffect, useState } from "react";
import MenuService from "../services/MenuService";
import MainMenuItem from "./MainMenuItem";
import Logo from './Logo';

const MainMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
      (async () => {
        const result = await MenuService.list(0, 13);
        if (result.status === true) {
          setMenus(result.menus);
        }
      })();
    }, []);
  return (
   

    <div className="bg-green-950 p-4 w-full grid grid-cols-3 gap-4">
        <div><Logo/></div>
        <div>
            <ul className="custom-navbar-nav navbar-nav text-orange-50">
            {menus &&
              menus.length > 0 &&
              menus.map((menu, index) => {
                if (menu.position == "mainmenu") {
                  return <MainMenuItem key={index} menu={menu} />;
                }
              })}
			</ul>
        </div>
    </div>
    
  )
}

export default MainMenu

