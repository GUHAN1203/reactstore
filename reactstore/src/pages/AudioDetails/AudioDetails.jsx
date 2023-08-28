import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { AudioData } from "../../components/Data/AudioData";

function AudioDetails(){
    const params = useParams();
    const [productDetail, setProductDetail] = useState({});
    
   

    useEffect(()=>{
        
        const findProduct = AudioData.find((item)=> item.id === params.id)
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
            <h3>{productDetail.offPrice}</h3>
            <p style={{color:" rgb(139, 143, 147);"}}>M.R.P. {productDetail.rate}(inclusive of all taxes)</p>
            <hr/>
            
            
            <div>
                <h3>BENEFITS</h3>
                <ul>
                    <li>Link your OnePlus device to Red Cable Club and get ₹2000 off coupon on select variants</li>
                    <li>Save up to 18% on business purchases.
                    </li>
                </ul>
            </div>
            <hr/>
            <div>
                <h3>Delivery</h3>
                <h5 style={{color: "rgb(193, 185, 185)"}}>Fastest:</h5>
                <p>Saturday , Aug 12 (If you order by 16:00 PM)</p>
            </div>
            <hr/>
            <div style={{width: ""}} className="col-md-6 mb-md-0 md-4  ">
                <button style={{backgroundColor: "rgb(255, 6, 6)", color: "aliceblue"}}>Buy Now</button>
                <button style={{backgroundColor: "rgb(0, 0, 0)",color: "aliceblue"}}>Add to Cart</button>
            </div>
            
        </div>

    </div>
    )
}

export default AudioDetails