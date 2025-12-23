import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact container">
      <div className="c-left">
        <p>
          <span>Phone: </span>
          <br />
          <a href="tel:02034888172">0203 4888 172</a> <br />
          {/* <a href="tel:07418347802">0741 8347 802</a> (Whatsapp Only) */}
        </p>
        <p>
          <span>Email: </span>
          <a href="mailto:info@inteviahealthcare.co.uk">
            info@inteviahealthcare.co.uk
          </a>
        </p>
        <p>Also you can always send us an email via form below:</p>
        <form
          className="form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="f-left">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="tel" name="mobile" placeholder="Mobile Number" />
          </div>
          <div className="c-right">
            <textarea
              name="Message"
              id=""
              cols={30}
              rows={10}
              placeholder="Any Message For Us"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="c-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.013006651214!2d-0.3080195!3d51.586324999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761392c326f2b1%3A0xde98f5471e99990!2sAlpha%20House%2C%20Middlesex%2C%20296%20Kenton%20Rd%2C%20Harrow%20HA3%208DD%2C%20UK!5e0!3m2!1sen!2sin!4v1766510863845!5m2!1sen!2sin"
          width="600"
          height="450"
          title="gmap"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
