import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const ModeContext = createContext()
function ModeProvider({children}) {
  const [isLightMode,setIsLightMode] = useLocalStorageState(
    window.matchMedia('(prefer-color-scheme: dark)').matches
    ,'mode')
  const changeMode = () => setIsLightMode(mode => !mode)  
  
  useEffect(function(){
    if(isLightMode) document.documentElement.classList.add('dark-mode')
    else document.documentElement.classList.remove('dark-mode')
  },[isLightMode])

  return (
    <ModeContext.Provider value={{
      isLightMode,
      changeMode
    }
    }>
      {children}
    </ModeContext.Provider>
  );
}
function useMode(){
  const context = useContext(ModeContext)
  if(!context)  throw new Error('ModeContext was used outside of ModeProvider');
  return context  
}
export {useMode};
export default ModeProvider