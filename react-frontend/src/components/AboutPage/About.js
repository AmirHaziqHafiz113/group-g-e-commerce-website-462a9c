import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const AboutUs = () => {
  const header = (
    <img
      alt="Attire Alley Logo"
      src="assets/logo/logo.png"
      style={{ width: "150px", height: "auto", margin: "auto" }}
    />
  );

  const [missionExpanded, setMissionExpanded] = useState(false);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  const [teamExpanded, setTeamExpanded] = useState(false);
  const [valuesExpanded, setValuesExpanded] = useState(false);

  const toggleMission = () => {
    setMissionExpanded(!missionExpanded);
  };

  const toggleHistory = () => {
    setHistoryExpanded(!historyExpanded);
  };

  const toggleTeam = () => {
    setTeamExpanded(!teamExpanded);
  };

  const toggleValues = () => {
    setValuesExpanded(!valuesExpanded);
  };

  const missionCard = (
    <Card title="Our Mission" className="p-mr-3 p-mb-3">
      <Button
        label={missionExpanded ? "Hide" : "Read More"}
        icon={missionExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
        onClick={toggleMission}
        className="p-button-secondary p-mb-2"
      />
      {missionExpanded && (
        <p className="p-m-0">
          At Attire Alley, our mission is to provide high-quality, fashionable clothing to men and women of all sizes,
          while promoting body positivity and self-confidence. We believe that everyone deserves to look and feel their
          best, and our clothing is designed to help you do just that.
        </p>
      )}
    </Card>
  );

  const historyCard = (
    <Card title="Our History" className="p-mr-3 p-mb-3">
      <Button
        label={historyExpanded ? "Hide" : "Read More"}
        icon={historyExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
        onClick={toggleHistory}
        className="p-button-secondary p-mb-2"
      />
      {historyExpanded && (
        <p className="p-m-0">
          Attire Alley was founded in 2015 by Jane Doe, a fashion enthusiast who saw a need for more inclusive clothing
          in the industry. Since then, we have grown into a successful online retailer with a dedicated following of
          loyal customers who appreciate our commitment to quality, style, and inclusivity.
        </p>
      )}
    </Card>
  );

  const teamCard = (
    <Card title="Our Team" className="p-mr-3 p-mb-3">
      <Button
        label={teamExpanded ? "Hide" : "Read More"}
        icon={teamExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
        onClick={toggleTeam}
        className="p-button-secondary p-mb-2"
      />
      {teamExpanded && (
        <p className="p-m-0">
          Our team is made up of passionate individuals who share a love of fashion and a dedication to our mission. We
          believe that a diverse team is a strong team, and we strive to create a supportive and inclusive work
          environment where everyone can thrive.
        </p>
      )}
    </Card>
  ); 

    const valuesCard = (
    <Card title="Our Values" className="p-mr-3 p-mb-3">
        <Button
            label={valuesExpanded ? "Hide" : "Read More"}
            icon={valuesExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
            onClick={toggleValues}
            className="p-button-secondary p-mb-2"
        />
        {valuesExpanded && (
            <p className="p-m-0">
                At Attire Alley, we believe in the following values:
                <ul>
                    <li>Quality</li>
                    <li>Inclusivity</li>
                    <li>Community</li>
                    <li>Integrity</li>
                    <li>Respect</li>
                </ul>
            </p>
        )}
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
