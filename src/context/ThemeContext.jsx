
import { createContext, useState } from "react";


export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const [isLightTheme, setIsLightTheme]= useState(true);
    const [light,setLight]=useState({
        syntac: "#555",
        ui: "ddd",
        bg: "eee"
    });
    const [dark,setDark]=useState({
        syntac: "#ddd",
        ui: "333",
        bg: "555"
    })
    const toggleTheme= ()=>{
        setIsLightTheme(!isLightTheme)
    }
    return (
        <ThemeContextProvider value={{isLightTheme,light,dark,toggleTheme}}>
            {props.children}
        </ThemeContextProvider>
    )
}
export default ThemeContextProvider;