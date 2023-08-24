import { createContext } from "react";

const INITIALDATA={
    product:[]
}

const CreateContextApi = createContext(INITIALDATA);
=========
 const CreateContextApi = createContext();
>>>>>>>>> Temporary merge branch 2

const itemProducer ={state,action}=>{
    
}
const CreateContextProvider =({children})=>{
    return <CreateContextApi.Provider value={{}}>
        {children}
    </CreateContextApi.Provider>
}


<<<<<<<<< Temporary merge branch 1
export {CreateContextApi,CreateContextProvider} ;
=========
export { CreateContextProvider,CreateContextApi} ;
>>>>>>>>> Temporary merge branch 2
