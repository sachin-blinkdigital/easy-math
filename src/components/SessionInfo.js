import React from "react";

export default function SessionInfo({ gradeData }) {
  // console.log(gradeData);

  const sessionStripes = Object.values(gradeData).map((grade, i) => {
    let originalPrice = grade.price / (1 - grade.discount * 0.01);
    return (
      <div className="radio session-strip" key={`sessionStrip${i}`}>
        <label>
          <input type="radio" value="" />
          <div>
            <h3>{grade.valid}</h3>
            <p>{grade.refund}</p>
          </div>
          <div>
            <h3>
              Rs {grade.price} <span>rs {Math.round(originalPrice)}</span>
            </h3>
            <p>{grade.discount} OFF</p>
          </div>
          <div>
            <h3>Rs {grade.per_class_price} per session</h3>
            <p>{grade.total_sessions}</p>
          </div>
        </label>
      </div>
    );
  });

  return <>{sessionStripes}</>;
}
