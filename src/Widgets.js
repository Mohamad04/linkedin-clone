import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newArticle("Serhan React is back", "Top news -9099 readers")}
      {newArticle("Coronavirus: UK updates", "Top news -9099 readers")}
      {newArticle("Serhan React is back", "Top news -9099 readers")}
      {newArticle("Coronavirus: UK updates", "Top news -9099 readers")}
      {newArticle("Serhan React is back", "Top news -9099 readers")}
      {newArticle("Coronavirus: UK updates", "Top news -9099 readers")}
    </div>
  );
}

export default Widgets;
