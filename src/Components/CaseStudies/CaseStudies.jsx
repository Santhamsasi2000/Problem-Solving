import "./Casestudies.css";
import CardCase from "./CardCase";
import { DataCaseStudies } from "./DataCaseStudies";
const CaseStudies = () => {
  return (
    <section className="p-3 p-sm-5">
       <p className="title mb-4">Case Studies</p>
       <div className="row gy-5 w-100">
       {
         DataCaseStudies.map((casestudy)=>(
          <div className="col-sm-6" key={casestudy.id}>
             <CardCase {...casestudy}/>
          </div>
          ))
         } 
       </div>
    </section>
  )
}

export default CaseStudies