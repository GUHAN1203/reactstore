import Filter from "./components/FilterM";
import Mobile from "./components/Mobile";


function MobileIndex(){
    return(
         <div className="row">
                <div className="col-3 d-none d-lg-block "><Filter/></div>
                <div className="col-lg-9  "><div className=" row row-cols-2  row-cols-md-3 g-3 me-0" id="mob"> <Mobile/></div></div>
        </div> 
    )
}

export default MobileIndex