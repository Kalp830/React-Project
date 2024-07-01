// Create a Context (Wherehouse)
// Provider
// Consumer

import React from 'react';
import { useContext } from 'react';


const AppContext = React.createContext();   

const AppProvider = ({children}) =>{
   return (<AppContext.Provider value="Kalpesh Talekar">
    {children}
    </AppContext.Provider>
   )
};

// Custom Hooks
const useGlobalContext = () =>{
     return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};

