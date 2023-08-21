import { createContext } from "react";


export const CreateContextApi = createContext();


const CreateContextProvider =()=>{
    return <CreateContextApi.Provider value={{}}></CreateContextApi.Provider>
}


export default CreateContextProvider;