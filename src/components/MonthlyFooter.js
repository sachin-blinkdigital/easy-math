import React from "react";

export default function MonthlyFooter() {
  return (
    <div className="monthly-footer footer">
      <div className="head">
        <div>
          <p>Monthly classes let you choose your own course topics</p>
        </div>
        <div className="mid">
          <p>Each session lasts 45 minutes</p>
        </div>
        <div className="book-cta">
          <a href="">Book Now</a>
        </div>
      </div>

      <div className="foot">
        <span className="tnc">
          Refund same day <a href="">terms & conditions</a> apply*
        </span>
      </div>
    </div>
  );
}
