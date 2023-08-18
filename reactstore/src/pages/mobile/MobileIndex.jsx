import Filter from "./components/Filter";
import Mobile from "./components/Mobile";


function MobileIndex(){
    return(
         <div className="row">
                <div className="col-2"><Filter/></div>
                <div className="col-lg-10 col "><div className=" row row-cols-2  row-cols-md-2 row-cols-lg-4  g-3 me-0" id="mob"> <Mobile/></div></div>
        </div> 
    )
}

export default MobileIndex