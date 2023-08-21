import { createContext } from "react";


const CreateContextApi = createContext();


const CreateContextProvider =()=>{
    return <CreateContextApi.Provider value={{}}></CreateContextApi.Provider>
}


export {CreateContextApi,CreateContextProvider} ;