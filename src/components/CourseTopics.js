import React from "react";

export default function CourseTopics({ topics }) {
  let topicsArr = [];

  if (typeof topics == "object") {
    Object.keys(topics[0]).map((topic) => {
      topicsArr.push(topic);
    });
  } else {
    topics.split("!").map((topic, index) => {
      topicsArr.push(topic.trim());
    });
  }

  const topicMarkup =
    topics &&
    topicsArr.map((topic, index) => {
      topicsArr.push(topic.trim());
      return <p key={`topic${index}`}>{topic.trim()}</p>;
    });
  return (
    <div className="course-topics">
      <h3 className="head">Course Topics Includes</h3>
      {<div className="topics">{topicMarkup}</div>}
    </div>
  );
}
