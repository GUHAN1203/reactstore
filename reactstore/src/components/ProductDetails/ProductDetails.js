import "./ProductDetails.css";
import prodImg from "../../Assets/images/mobiles/apple-1.jpg"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { PRODUCTDATA } from "../../products";

const ProductDetails = () =>{
    const paramsId = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [isLoad, setLoad] = useState(false);

    useEffect(()=>{
        setLoad(true);
        const findProduct = PRODUCTDATA.find((itm)=> itm.id === paramsId.id)
        setProductDetail({...findProduct})
    }, [])

    return (
        isLoad && 
        <section className="details-section">
            <div className="container">
                <div className="details-view">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card-details">
                                <div className="card-details-img">
                                    <img src={productDetail.imgPath} alt="poco" />
                                </div>
                                <div className="card-action">
                                    <button className="btn btn-add">Add to Cart</button>
                                    <button className="btn btn-buy">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="card-details-content">
                                <h2>{productDetail.productName}</h2>
                                <div className="detail-rating">
                                    <span className="badge bg-success">4.2 <i className="fa fa-star" aria-hidden="true"></i></span>
                                    <span className="txt-badge">2,47,580 Ratings & 12,282 Reviews</span>
                                </div>
                                <div className="price"><i className="fa fa-inr" aria-hidden="true"></i>{productDetail.price}</div>

                                <table className="table details-table">
                                    <tbody>
                                        <tr>
                                            <th className="tb-title">Highlights</th>
                                            <td>
                                                <ul>
                                                    <li>128 GB ROM</li>
                                                    <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                                                    <li>12MP + 12MP | 12MP Front Camera</li>
                                                    <li>A15 Bionic Chip Processor</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="tb-title">Description</th>
                                            <td>
                                                iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h4>Available offers</h4>
                                <ul className="detail-list">
                                    <li><b>Bank Offer</b> Flat ₹3,000 off on HDFC Bank Credit Card EMI Trxns on orders priced ₹50,000 and above T&C</li>
                                    <li><b>Bank Offer</b> Flat ₹3,500 off on HDFC Bank Debit Card EMI Trxns on orders priced ₹50,000 and above T&C</li>
                                    <li><b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card T&C</li>
                                    <li><b>Special Price</b> Get extra ₹7500 off (price inclusive of cashback/coupon) T&C</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;