import React from "react";

export default function CourseTopics({ topics }) {
  let topicsArr = [];

  console.log(typeof topics);
  console.log(Object.keys(topics[0]));

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
  return <>{<div className="topics">{topicMarkup}</div>}</>;
}
