import "./ContactUs.css";
import ContactUsForm from "./ContactForm/ContactUsForm";
import Location from "./Location/Location";

const ContactUs = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <div className="title mb-4">CONTACT US</div>
      <div className="d-flex flex-column flex-lg-row gap-5 justify-content-between mb-4">
        <div className="order-2 order-lg-1">
          <Location />
        </div>
        <div className="order-1 order-lg-2">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
