import React from 'react'
import { useState,useContext, useEffect, } from 'react';
import { MobileData } from '../../../components/Data/MobileData'
import { Link } from 'react-router-dom';
import { CreateContextApi } from '../../../Store/ContextApi';

const ConvertNumberFormat = (amt)=>{
    return new Intl.NumberFormat('en-IN').format(amt)
}

function Mobiletest() {
    const contextAPi = useContext(CreateContextApi);

    const [products, setProducts] = useState([...contextAPi.products]);
    console.log(products);
  
  const [mobileData,setMobileData]=useState([...contextAPi.products]);
  
  return (
    mobileData.map((item,index)=>{
      return(
        <>
        <Link to={`/mobile-details/${item.id}`}>
        
                  <div className="col">
                  
                    <div className=" card rounded-0 border-white ">
                      <img src={"http://localhost:8000/images/"+item.imgPath}/>

                      <div className="card-body bg-white ">
                        <p className="card-header bg-white"><b>{item.title}</b></p>
                        <p> {item.description}</p>
                        <div className="d-grid gap-2 col-12 mx-auto">
                          <a href="phonemodel.html" ><button className="btn btn-dark rounded-0" type="button" >Buy</button></a>
                        </div>
                        <div className="d- justify-content-between align-items-center ">
                          <div className="btn-group">
                            
                          </div>
                          
                          <small className="text-decoration-line-through text-secondary">{item.price}</small>
                          <small className="text-black text-primary">{item.price}</small>
                        </div>
                      </div>
                    </div>
                    
                  </div>  
                  
    </Link>

</>
    
      
      )
        
    }) 
)}


export default Mobiletest  

