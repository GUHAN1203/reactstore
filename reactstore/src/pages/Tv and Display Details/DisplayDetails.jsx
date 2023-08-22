import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { DisplayData } from "../../components/Data/Displaydata";


function DisplayDetails(){
    const params = useParams();
    const [productDetail, setProductDetail] = useState({});
    

    useEffect(()=>{
        
        const findProduct = DisplayData.find((item)=> item.id === params.id)
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
            <h3>{productDetail.offPrice}(inclusive of all taxes)</h3>
            <p style={{color:" rgb(139, 143, 147);"}}>M.R.P. {productDetail.rate}</p>
            <hr/>
            
            
            <div className="col-md-6 p-1 ps-md-0">
                <h4>Screen Size</h4>
                <div className="btn-group">
                    <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>{productDetail.screensize2}</button>
                    <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>{productDetail.screensize3}</button>
                    <button style={{backgroundColor: "rgb(250, 250, 250)", color:" rgb(0, 0, 0)"}}>{productDetail.screensize1}</button>
                </div>
            </div>
            <hr/>
            
            <div>
                <h3>Exclusive price for you</h3>
                <p>Save more upon exchange with old devices</p>
                <button style={{backgroundColor: "rgb(0, 0, 0)", color:" rgb(255,255,255)"}}>Exchange now</button>
            </div>
            <hr/>
            
            <div>
                <h3>BENEFITS</h3>
                <ul>
                    <li>Get up to ₹2000 off by linking to Red Cable Club.</li>
                    <li>Save up to 28% on business purchases.</li>
                </ul>
            </div>
            
            <hr/>
            <div>
                <h3>Delivery</h3>
                <h5 style={{color: "rgb(193, 185, 185)"}}>Fastest:</h5>
                <p>Saturday , Aug 12 (If you order by 16:00 PM)</p>
            </div>
            <div style={{width: ""}} className="col-md-6 mb-md-0 p-md-4 w- ">
                <button style={{backgroundColor: "rgb(255, 6, 6)", color: "aliceblue"}}>Buy Now</button>
                <button style={{backgroundColor: "rgb(0, 0, 0)",color: "aliceblue"}}>Add to Cart</button>
            </div>
            
        </div>

    </div>
    )
}

export default DisplayDetails