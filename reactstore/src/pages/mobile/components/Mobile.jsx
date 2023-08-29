import React from 'react'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CreateContextApi } from '../../../Store/ContextApi';


function Mobile() {
  const contextAPi = useContext(CreateContextApi);
  const [mobileData,setMobileData]=useState([...contextAPi.products]);
  
  return (
    mobileData.map((item,index)=>{
      return(
        <>
        <Link to={`/mobile-details/${item.__id}`}>
        
                  <div className="col">
                  
                    <div className=" card rounded-0 border-white ">
                      <img src={item.imgPath}/>

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


export default Mobile  

