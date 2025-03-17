import { DataServices } from "./DataServices";
import "./Services.css";

const Services = () => {
  return (
    <section className='p-3 p-sm-5'>
      <div className="title mb-0 mb-sm-4">SERVICES</div>
       <div className='row gx-5 gy-sm-5'>
       {
         DataServices.map(({id,image,title,subtitle,desc})=>(
            <div className='col-sm-6 col-xl-4' key={id}>
                <p className='d-block d-sm-none subtitle mt-4 order-2'>{title}</p>
                <img src={image} alt={title} className='service-img w-100 rounded-5 order-1'/>
                <p className='d-none d-sm-block mt-4 order-2 subtitle mb-2'>{title}</p>
                <p className='fw-semibold mb-2 mt-3 mt-md-0'>{subtitle}</p>
                <p className='justify-text'>{desc}</p>
            </div>
        ))
       }
       </div>
    </section>
  )
}

export default Services
