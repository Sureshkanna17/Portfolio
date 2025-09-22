import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    // You must replace these IDs with your EmailJS credentials (see README)
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const USER_ID = 'YOUR_USER_ID';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          setStatus('Message sent — thank you!');
      }, (error) => {
          setStatus('Failed to send message. Check console for details.');
          console.error(error.text);
      });
  };

  return (
    <section id="contact" className="section-card" data-aos="fade-up">
      <h3>Contact</h3>
      <div className="row">
        <div className="col-md-6">
          <p>📧 sureshkanna1704@gmail.com</p>
          <p>📞 +91 7639602112</p>
          <p>📍 Chennai, India</p>
        </div>
        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-2">
              <input className="form-control" name="from_name" placeholder="Your name" required />
            </div>
            <div className="mb-2">
              <input className="form-control" name="reply_to" type="email" placeholder="Your email" required />
            </div>
            <div className="mb-2">
              <textarea className="form-control" name="message" rows="4" placeholder="Message" required></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Send Message</button>
            {status && <p className="mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
