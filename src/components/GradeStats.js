import React from "react";

export default function GradeStats({ stats }) {
  //console.log(stats);

  return (
    <div className="grade-stats">
      <div>
        <p>Total sessions</p>
        <p>{stats.total_sessions}</p>
      </div>
      <div>
        <p>Online Pre Assignments</p>
        <p>{stats.online_pre_assignments}</p>
      </div>
      <div>
        <p>Online Post Assignments</p>
        <p>{stats.online_post_assignments}</p>
      </div>
      <div>
        <p>Online Practice</p>
        <p>{stats.online_assignments}</p>
      </div>
      <div>
        <p>Online Tests</p>
        <p>{stats.online_tests}</p>
      </div>
      <div>
        <p>Career Counselling Sessions with Edu Coach</p>
        <p>{stats.career_counselling_sessions}</p>
      </div>
    </div>
  );
}
