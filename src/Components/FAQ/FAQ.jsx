import { DataFAQ } from "./DataFAQ";

const FAQ = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="title mb-4">Frequently Asked Questions</p>
      <div className="mt-3">
        {
          DataFAQ.map(({id,title,content})=>(
            <div key={id}>
              <p className="subtitle text-capitalize fs-6 mb-2">{title}</p>
              <p>{content}</p>
              <hr style={{border:"1px #aa2c65 solid"}}/>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default FAQ;
