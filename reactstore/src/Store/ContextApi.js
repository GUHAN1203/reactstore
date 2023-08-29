import {createContext, useEffect, useReducer, useState} from "react";

import axios from "axios";

const INITIALDATA = {
    products:[]
}

const CreateContextApi = createContext();

const itemReducer = (state, action) =>{
    if(action.type === "PRODUCT"){
        return {...state, products: action.payload}
    }
    if(action.type === "ADD") {
        const oldProduct = state.products;

        return {...state, products: [...oldProduct, action.payload]}
    }
    if(action.type === "UPDATE") {
        const updateProduct = state.products;
        const existProductIndx = state.products.findIndex(item => item._id === action.payload._id);
        updateProduct[existProductIndx] = {...action.payload};
        return {...state, products: [...updateProduct]}
    }
    
    return state;
    
}

const CreateContextProvider = ({children}) =>{
    const [itemData, dispatchData] = useReducer(itemReducer, INITIALDATA)
    const [isLoad, setLoad] = useState(false);

    const fetchData = async () => {
        try{
            const response = await axios.get("http://localhost:8000/product")
            console.log(response)
            setLoad(true);
            dispatchData({type:"PRODUCT", payload:[...response.data]})
        }
        catch(err) {
            setLoad(true);
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const addProduct = (data) => {
        dispatchData({type:"ADD", payload:data})
    }

    const updateProduct = (data) => {
        dispatchData({type:"UPDATE", payload:data})
    }

    const itemcontextdata = {
        products: itemData.products,
        onAddProduct: addProduct,
        onUpdateProduct: updateProduct
    }
    
    return isLoad && <CreateContextApi.Provider value={itemcontextdata}>{children}</CreateContextApi.Provider>

}

export {CreateContextApi, CreateContextProvider};