import { useEffect, useState } from "react";
import MenuService from "../../services/MenuService";
import MainMenuItem from "./MainMenuItem";

const MainMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
      (async () => {
        const result = await MenuService.list(0, 13);
        if (result.status=== true) {
          setMenus(result.menus);
        }
      })();
    }, []);
  return (
        <div className="hidden sm:block ">
            <ul className="flex  absolute space-x-2 text-orange-50 text-2xl 
                *:px-4 *:py-1  
              hover:dark hover:*:text-amber-300
              ">
             {menus &&
              menus.length > 0 &&
              menus.map((menu, index) => {  
                if (menu.position == "mainmenu") {
                    return <MainMenuItem key={index} menu={menu} />;
                }
              })}
			      </ul>
        </div>
  )
}

export default MainMenu

