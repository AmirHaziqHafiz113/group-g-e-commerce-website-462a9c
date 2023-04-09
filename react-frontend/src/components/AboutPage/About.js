import React from "react";
import { Card } from "primereact/card";

const AboutUs = () => {
  const header = (
    <img
      alt="Attire Alley Logo"
      src="assets/logo/logo.png"
      style={{ width: "150px", height: "auto", margin: "auto" }}
    />
  );

  const missionCard = (
    <Card title="Our Mission" className="p-mr-3 p-mb-3">
      <p className="p-m-0">
        At Attire Alley, our mission is to provide high-quality, fashionable clothing to men and women of all sizes, while
        promoting body positivity and self-confidence. We believe that everyone deserves to look and feel their best, and
        our clothing is designed to help you do just that.
      </p>
    </Card>
  );

  const historyCard = (
    <Card title="Our History" className="p-mr-3 p-mb-3">
      <p className="p-m-0">
        Attire Alley was founded in 2015 by Jane Doe, a fashion enthusiast who saw a need for more inclusive clothing in
        the industry. Since then, we have grown into a successful online retailer with a dedicated following of loyal
        customers who appreciate our commitment to quality, style, and inclusivity.
      </p>
    </Card>
  );

  const teamCard = (
    <Card title="Our Team" className="p-mr-3 p-mb-3">
      <p className="p-m-0">
        Our team is made up of passionate individuals who share a love of fashion and a dedication to our mission. We
        believe that a diverse team is a strong team, and we strive to create a supportive and inclusive work environment
        where everyone can thrive.
      </p>
    </Card>
  );

  const valuesCard = (
    <Card title="Our Values" className="p-mb-3">
      <ul className="p-m-0">
        <li>Body positivity and self-confidence</li>
        <li>Inclusivity and diversity</li>
        <li>Quality and craftsmanship</li>
        <li>Sustainability and ethical practices</li>
      </ul>
    </Card>
  );

  return (
    <div className="p-grid p-nogutter">
      <div className="p-col-12">
        <div className="p-d-flex p-jc-center p-mt-4 p-mb-4">{header}</div>
      </div>
      <div className="p-col-12 p-md-6 p-lg-3">{missionCard}</div>
      <div className="p-col-12 p-md-6 p-lg-3">{historyCard}</div>
      <div className="p-col-12 p-md-6 p-lg-3">{teamCard}</div>
      <div className="p-col-12 p-md-6 p-lg-3">{valuesCard}</div>
    </div>
  );
};

export default AboutUs;
