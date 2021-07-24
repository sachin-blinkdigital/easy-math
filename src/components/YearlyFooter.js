import React from "react";

export default function YearlyFooter() {
  return (
    <div className="yearly-footer footer">
      <div className="head">
        <div className="vacant-seats">
          <p className="badge">Filling out soon</p>
          <h3>
            Vacant Seats:
            <span className="cost">100 seats</span>
          </h3>
          <p>Not a classroom, but 1:1 sessions.</p>
        </div>
        <div className="subscription">
          <p className="badge">50% OFF</p>
          <h3>
            Subscription cost:
            <span className="cost"> ₹ 3999</span>
            <span className="cost-old"> ₹ 5999</span>
          </h3>
          <p>
            This cost is inclusive of Tablet cost. <br /> Per session cost is ₹
            129.
          </p>
        </div>
        <div className="book-cta">
          <a href="">Book Now</a>
        </div>
      </div>
      <div className="foot">
        <p>
          You can also avail a 8 inch and 10 inch tablet with your subscription
        </p>
        <span className="tnc">
          Guaranteed <a href="">terms & conditions</a> apply*
        </span>
      </div>
    </div>
  );
}
