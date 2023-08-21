import { createContext } from "react";

const INITIALDATA={
    product:[]
}

const CreateContextApi = createContext(INITIALDATA);

const itemProducer ={state,action}=>{
    
}
const CreateContextProvider =({children})=>{
    return <CreateContextApi.Provider value={{}}>
        {children}
    </CreateContextApi.Provider>
}


export {CreateContextApi,CreateContextProvider} ;