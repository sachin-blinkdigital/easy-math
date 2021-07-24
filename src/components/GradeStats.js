import React from "react";

export default function GradeStats({ stats }) {
  //console.log(stats);

  return (
    <div className="grade-stats">
      <div>
        <p>Total sessions</p>
        <h3>{stats.total_sessions}</h3>
      </div>
      <div>
        <p>Online Pre Assignments</p>
        <h3>{stats.online_pre_assignments}</h3>
      </div>
      <div>
        <p>Online Post Assignments</p>
        <h3>{stats.online_post_assignments}</h3>
      </div>
      <div>
        <p>Online Practice</p>
        <h3>{stats.online_assignments}</h3>
      </div>
      <div>
        <p>Online Tests</p>
        <h3>{stats.online_tests}</h3>
      </div>
      <div>
        <p>Career Counselling Sessions with Edu Coach</p>
        <h3>{stats.career_counselling_sessions}</h3>
      </div>
    </div>
  );
}
