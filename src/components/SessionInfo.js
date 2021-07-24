import React from "react";

export default function SessionInfo({ gradeData }) {
  // console.log(gradeData);

  const sessionStripes = Object.values(gradeData).map((grade, i) => {
    let originalPrice = grade.price / (1 - grade.discount * 0.01);
    return (
      <div className="radio session-strip" key={`sessionStrip${i}`}>
        <label>
          <input type="radio" value="" />
          <div className="validity">
            <h3>{grade.valid}</h3>
            <p>{grade.refund}</p>
          </div>
          <div className="price">
            <h3>
              <span className="cost">₹ {grade.price}</span>{" "}
              <span className="cost-old">₹ {Math.round(originalPrice)}</span>
            </h3>
            <p className="badge">{grade.discount} OFF</p>
          </div>
          <div className="session">
            <h3>₹ {grade.per_class_price} per session</h3>
            <p>{grade.total_sessions} Sessions</p>
          </div>
        </label>
      </div>
    );
  });

  return <>{sessionStripes}</>;
}
