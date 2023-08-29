import "./ProductAction.css";
import { useContext, useState } from "react";
import axios from "axios";
import ProductItems from "./ProductItems";

const ProductAction = () => {

  const [productInpt, setProductInpt] = useState({
    imgUrl: '',
        name: '',
        colorram: '',
        rate: '',
        color: '',
        offPrice: '',
        type: ''
  });

  const [fileInpt, setFileInpt] = useState(null);
  const [imgView, setImgView] = useState(null);
  const [editID, setEditId] = useState(null);
  const [isEdit, setEdit] = useState(false);

  const onInptHandler = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    if(name === "imgfile"){
      setFileInpt(event.target.files[0])
      setImgView(URL.createObjectURL(event.target.files[0]))
    }
    setProductInpt({ ...productInpt, [name]: val });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", productInpt.name);
    formData.append("colorram", productInpt.colorram);
    formData.append("rate", productInpt.rate);
    formData.append("color", productInpt.color);
    formData.append("offPrice", offPrice);
    formData.append("type", type);

    try{
      const response = await axios.post("http://localhost:8000/product/add-product", formData)
      console.log(response);
      setProductInpt({
        imgUrl: '',
        name: '',
        colorram: '',
        rate: '',
        color: '',
        offPrice: '',
        type: ''
        
      });
      setFileInpt(null)
      setImgView(null)
    }
    catch(err){
      console.log(err);
    }

  }


  return (
    <section className="">
      <div className="container">
        <div className="add-product-wraper mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="bx-card">
                <h2>Add Products</h2>
                <form className="product-form" onSubmit={onSubmitForm}>
                  {imgView && <img src={imgView} style={{width:"80px", marginBottom:"20px"}} />}
                  <div className="form-group mb-4">
                    <input
                      type="file"
                      placeholder="product image"
                      name="imgfile"
                      className="form-control"
                      value={productInpt.imgfile}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="product name"
                      name="title"
                      className="form-control"
                      value={productInpt.name}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="product price"
                      name="price"
                      className="form-control"
                      value={productInpt.rate}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="Offprice "
                      name="price"
                      className="form-control"
                      value={productInpt.offPrice}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="Color and ram description"
                      className="form-control"
                      placeholder="Description"
                      value={productInpt.colorram}
                      onChange={onInptHandler}
                    ></textarea>
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="Color and ram description"
                      className="form-control"
                      placeholder="Description"
                      value={productInpt.colorram}
                      onChange={onInptHandler}
                    ></textarea>
                  </div>

                  <div className="form-group mb-4">
                  
                    <button type="submit" className="btn btn-primary ms-0">
                      Add product
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-md-8">
              <div className="product-items bx-card">
                <ProductItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAction;
