import Filter from "./components/FilterD";
import Display from "./components/Display";


function DisplayIndex(){
    return(
         <div className="row">
                <div className="col-3 d-none d-lg-block "><Filter/></div>
                <div className="col-lg-9  "><div className=" row row-cols-2  row-cols-md-3 g-3 me-0" id="Dis"> <Display/></div></div>
        </div> 
    )
}

export default DisplayIndex