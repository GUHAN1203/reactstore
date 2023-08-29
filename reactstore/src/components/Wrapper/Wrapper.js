import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../header/header";
import { CreateContextProvider } from "../../Store/ContextApi";

const Wrapper = ()=>{
    
    const testContent = "Application";

    return ( 
            <CreateContextProvider>
                
                <Outlet />
            </CreateContextProvider>
        )
}

export default Wrapper;