import { DataOurTeam } from "./DataOurTeam";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className="title mb-4">Our Team</p>
        <div className="our-team row justify-content-center gy-4">
          {
            DataOurTeam.map(({id,name,designation})=>(
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="important-component card p-0 border-0 h-100" >
                <img className="card-img-top" src="public\Images\AboutUs\Team\Employee Image - Problem Solving Consultancy - Best Business Consultancy- Coimbatore.webp" alt="No-Image" />
                <div className="card-body">
                  <p className="subtitle text-center mb-2">{name}</p>
                  <p className="card-subtitle text-center">{designation}</p>
                </div>
            </div>
            </div>
            ))
          }
        </div>
    </section>
   
  );
};

export default OurTeam;
