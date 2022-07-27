import { Fade, Slide } from "react-reveal";
import { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/4b1bfb70-0859-11ed-be50-e78da9ee852d"; // TODO - fill on the later step

  
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }
  

  return (
    <div id="contact">

    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      >
          <div className="row section-head">
              
<Fade bottom duration={1000}><h1 className="white--header">
                <span>Get In Touch.</span>
              </h1>
            <div className="ten columns">
              <p className="lead">Contact us and get your MTF360.io assesment today!</p>
            </div>
</Fade>
            <div className="ten columns">
          <h2 className="FormElement">Please tell us your 
                
          <div  className="FormText">
              <input className="FormElement" type="text" placeholder="name" name="name" required />
          </div>
            and also give us your 
          <div  className="FormText">
              <input type="email" placeholder="email" name="email" required />
          </div>
            and tell us your 
          <div  className="FormText">
              <input type="text" placeholder="message" name="message" required />
            </div>
            and we'll get back to you as soon as possible!
            </h2>
                <button className="FormText--button" type="submit"> Send us a message </button>
          </div>
        </div>
    </form>
    <section className="aside"><Slide right duration={1000}>
            <h4>Address and Phone</h4>
            <p className="address">
            MTF360.io
              <br />Delaware
              <br />
              <span>{/* phone */}</span>
            </p>
      </Slide>
      </section>      
    </div>
  );
};

export default Contact;