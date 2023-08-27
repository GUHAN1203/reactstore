import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MobileData } from "../../components/Data/MobileData";
import './MobileDetails.css'

function MobileDetails(){
    const params = useParams();
    const [productDetail, setProductDetail] = useState({});
    
   

    useEffect(()=>{
        
        const findProduct = MobileData.find((item)=> item.id === params.id)
        setProductDetail({...findProduct})
        
    }, [])
    return(
        <div className="row g-0 bg-light" style={{alignItems:"flex-start"}}>
        
        <div className="col-md-6 mb-md-0 p-md-4" >
            <img src={productDetail.imgUrl}
                className="w-100" alt="Oneplus"/>
        </div>
        
        <div className="col-md-6 p-5 ps-md-0  ">
            <h1 className="mt-0">{productDetail.name}</h1>
            <p style={{color: "rgb(139, 143, 147)"}}>{productDetail.color}</p>
            <p style={{color:" rgb(139, 143, 147);"}}>M.R.P. {productDetail.rate}(inclusive of all taxes)</p>
            <h3>{productDetail.offPrice}</h3>
            <hr/>
            
            <div className="col-md-6  ps-md-0">
                <h4>{productDetail.color} </h4>
                <img style={{width: "50px"}}
                    src="nsdfghj"
                    alt=" Oneplus "/>
            </div>
            <hr/>
            
            <div className="col-md-6 p-1 ps-md-0">
                <h4>ROM</h4>
                <div className="btn-group">
                    <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>16 GB RAM + 256 GB
                        Storage</button>
                    <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>8 GB RAM + 128 GB
                        Storage</button>
                </div>
            </div>
            <hr/>
            
            <div>
                <h3>Buy with Exchange</h3>
                <p>Save more upon exchange with old devices</p>
                <button style={{backgroundColor: "rgb(0, 0, 0)", color:" rgb(255,255,255)"}}>Exchange now</button>
            </div>
            <hr/>
            
            <div>
                <h3>BENEFITS</h3>
                <ul>
                    <li>Get a free phone case</li>
                    <li>Link your OnePlus device to Red Cable Club and get ₹2000 off coupon on select variants</li>
                    <li>Get 6 months of Spotify Premium for Free.
                    </li>
                    <li>Get 6 months of 100GB Google One cloud storage, and up to 6 months of YouTube Premium on us.
                    </li>
                    <li>Save up to 18% on business purchases.
                    </li>
                    <li>Free Gift (1/1)
                    </li>
                </ul>
            </div>
            <div style={{width: ""}} className="col-md-6 mb-md-0 md-4  ">
                <button style={{backgroundColor: "rgb(255, 6, 6)", color: "aliceblue"}}>Buy Now</button>
                <button style={{backgroundColor: "rgb(0, 0, 0)",color: "aliceblue"}}>Add to Cart</button>
            </div>
            
            <div>
                <h3>Delivery</h3>
                <h5 style={{color: "rgb(193, 185, 185)"}}>Fastest:</h5>
                <p>Saturday , Aug 12 (If you order by 16:00 PM)</p>
            </div>
            
        </div>

    </div>



        




    //     <div className="row g-0 bg-light" style={{alignItems:"flex-start"}}>
        
    //     <div className="col-md-6 mb-md-0 p-md-4" >
    //         <img src={productDetail.imgUrl}
    //             className="w-100" alt="Oneplus"/>
    //     </div>
        
    //     <div className="col-md-6 p-5 ps-md-0  ">
    //         <h1 className="mt-0">{productDetail.name}</h1>
    //         <p style={{color: "rgb(139, 143, 147)"}}>{productDetail.color}</p>
    //         <p style={{color:" rgb(139, 143, 147);"}}>M.R.P. {productDetail.rate}(inclusive of all taxes)</p>
    //         <h3>{productDetail.offPrice}</h3>
    //         <hr/>
            
    //         <div className="col-md-6  ps-md-0">
    //             <h4>{productDetail.color} </h4>
    //             <img style={{width: "50px"}}
    //                 src="nsdfghj"
    //                 alt=" Oneplus "/>
    //         </div>
    //         <hr/>
            
    //         <div className="col-md-6 p-1 ps-md-0">
    //             <h4>ROM</h4>
    //             <div className="btn-group">
    //                 <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>16 GB RAM + 256 GB
    //                     Storage</button>
    //                 <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>8 GB RAM + 128 GB
    //                     Storage</button>
    //             </div>
    //         </div>
    //         <hr/>
            
    //         <div>
    //             <h3>Buy with Exchange</h3>
    //             <p>Save more upon exchange with old devices</p>
    //             <button style={{backgroundColor: "rgb(0, 0, 0)", color:" rgb(255,255,255)"}}>Exchange now</button>
    //         </div>
    //         <hr/>
            
    //         <div>
    //             <h3>BENEFITS</h3>
    //             <ul>
    //                 <li>Get a free phone case</li>
    //                 <li>Link your OnePlus device to Red Cable Club and get ₹2000 off coupon on select variants</li>
    //                 <li>Get 6 months of Spotify Premium for Free.
    //                 </li>
    //                 <li>Get 6 months of 100GB Google One cloud storage, and up to 6 months of YouTube Premium on us.
    //                 </li>
    //                 <li>Save up to 18% on business purchases.
    //                 </li>
    //                 <li>Free Gift (1/1)
    //                 </li>
    //             </ul>
    //         </div>
    //         <div style={{width: ""}} className="col-md-6 mb-md-0 p-md-4 w- ">
    //             <button style={{backgroundColor: "rgb(255, 6, 6)", color: "aliceblue"}}>Buy Now</button>
    //             <button style={{backgroundColor: "rgb(0, 0, 0)",color: "aliceblue"}}>Add to Cart</button>
    //         </div>
            
    //         <div>
    //             <h3>Delivery</h3>
    //             <h5 style={{color: "rgb(193, 185, 185)"}}>Fastest:</h5>
    //             <p>Saturday , Aug 12 (If you order by 16:00 PM)</p>
    //         </div>
            
    //     </div>
    //   </div>
    
  );
}

export default MobileDetails;
