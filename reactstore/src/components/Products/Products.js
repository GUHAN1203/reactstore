import { useContext, useEffect, useState } from 'react';
import './Products.css';
import { PRODUCTDATA } from '../../products';
import { Link } from 'react-router-dom';
import { CreateContextApi } from '../../Store/ContextApi';

const ConvertNumberFormat = (amt)=>{
    return new Intl.NumberFormat('en-IN').format(amt)
}

const Products = () =>{
    const contextAPi = useContext(CreateContextApi);

    const [products, setProducts] = useState([...contextAPi.products]);
    console.log(products);
    
    return(
        products.length > 0 && 
        products.map((item, indx) => {
            return (
                <div className="col-md-3" key={indx}>
                    <div className="card1 mb-4">
                        <Link to={`/product-details/${item.id}`}>
                            <div className="card1-img">
                                <img src={item.imgPath} alt="realme" />
                            </div>
                            <div className="card1-content ">
                                <div className="card1-txt">{item.productName}</div>
                                <div className="card1-badge">
                                    <span className="badge bg-success">{item.review.rating} <i className="fa fa-star" aria-hidden="true"></i></span>({item.review.totalOf})
                                </div>
                                <div className="txt-bold"><i className="fa fa-inr" aria-hidden="true"></i> {ConvertNumberFormat(item.price)}</div>
                            </div>
                        </Link>
                        
                    </div>
                </div> 
            )
        })
        
    )
}

export default Products;