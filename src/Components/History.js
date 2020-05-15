import React from "react";
import Timeline from "./Timeline";

export default function History({ id }) {
  return (
    <div className="container page-section bg-light section-history" id={id}>
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Histoire</h2>
          <h3 className="section-subheading text-muted">Description</h3>
        </div>
        <ul className="timeline">
          <Timeline title="Milestone1" subtitle="Event1" text="Ecrire ici" imgUrl="logo192.png" />
          <Timeline inverted={true} title="Milestone2" subtitle="Event2" text="Ecrire ici" imgUrl="logo192.png" />
          <Timeline title="Milestone3" subtitle="Event3" text="Ecrire ici" imgUrl="logo192.png" />
          <Timeline inverted={true} title="Milestone4" subtitle="Event4" text="Ecrire ici" imgUrl="logo192.png" />
      </ul>
    </div>
  );
}
