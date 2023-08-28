import Filter from "./components/FilterA";
import Audio from "./components/Audio";



function AudioIndex(){
    return(
         <div className="row">
                <div className="col-3 d-none d-lg-block filter"><Filter/></div>
                <div className="col-lg-9  "><div className=" row row-cols-2  row-cols-md-3 g-3 me-0" id="mob"> <Audio/></div></div>
        </div> 
    )
}

export default AudioIndex