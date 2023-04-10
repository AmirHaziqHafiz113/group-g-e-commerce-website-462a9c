import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const ContactUs = () => {
  return (
    <div className="p-grid p-nogutter">
      <div className="p-col-12 p-md-6 p-lg-8">
        <div className="p-mt-4 p-mb-4">
          <div className="p-grid p-nogutter">
            <div className="p-col-12">
              <h2>Contact Us</h2>
              <p>Please fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            <div className="p-col-12 p-md-6">
              <span className="p-float-label">
                <InputText id="name" type="text" />
                <label htmlFor="name">Name*</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6">
              <span className="p-float-label">
                <InputText id="email" type="email" />
                <label htmlFor="email">Email*</label>
              </span>
            </div>
            <div className="p-col-12 p-md-6">
              <span className="p-float-label">
                <InputText id="phone" type="tel" />
                <label htmlFor="phone">Phone Number</label>
              </span>
            </div>
            <div className="p-col-12">
              <span className="p-float-label">
                <InputTextarea id="note" rows={5} />
                <label htmlFor="note">Note*</label>
              </span>
            </div>
            <div className="p-col-12">
              <Button label="Submit" className="p-mt-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-col-12 p-md-6 p-lg-4">
        <div className="p-d-flex p-jc-center p-mt-4 p-mb-4">
          <img src="assets/contact_us.jpg" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
