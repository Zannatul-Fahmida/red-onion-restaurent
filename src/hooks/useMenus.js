import { useEffect, useState } from "react";

const useMenus = () =>{
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('./menus.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, []);
    return [menus, setMenus];
}

export default useMenus;