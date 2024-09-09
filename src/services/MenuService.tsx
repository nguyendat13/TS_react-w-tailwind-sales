import httpAxios from "../httpAxios";

const MenuService = {
  getList: () => {
    return httpAxios.get("menu/index");
    
},
list: async (parentid:string, limit:number) => {
  return await httpAxios.get(`menu/list/${parentid}/${limit}`);
},
}

export default MenuService;
