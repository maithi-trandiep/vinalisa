import React from "react";

export default function Timeline({ inverted, title, subtitle, text, imgUrl }) {
  return (
    <li className={(inverted ? "timeline-inverted" : "")}>
        <div className="timeline-image"><img className="rounded-circle img-fluid" src={imgUrl} alt="" /></div>
        <div className="timeline-panel">
            <div className="timeline-heading">
            <h4>{title}</h4>
            <h4 className="subheading">{subtitle}</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">{text}</p></div>
        </div>
    </li>
  );
}
