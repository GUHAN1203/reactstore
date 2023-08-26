import "./ProductAction.css";
import { useContext, useState } from "react";
import axios from "axios";
import ProductItems from "./ProductItems";

const ProductAction = () => {

  const [productInpt, setProductInpt] = useState({
    title: "",
    price: "",
    description: "",
    imgfile: "",
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
    formData.append("title", productInpt.title);
    formData.append("price", productInpt.price);
    formData.append("description", productInpt.description);
    formData.append("imageFile", fileInpt);

    try{
      const response = await axios.post("http://localhost:8000/product/add-product", formData)
      console.log(response);
      setProductInpt({
        title: "",
        price: "",
        description: "",
        imgfile: "",
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
                      placeholder="product title"
                      name="title"
                      className="form-control"
                      value={productInpt.title}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      placeholder="product price"
                      name="price"
                      className="form-control"
                      value={productInpt.price}
                      onChange={onInptHandler}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="description"
                      className="form-control"
                      placeholder="Description"
                      value={productInpt.description}
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
