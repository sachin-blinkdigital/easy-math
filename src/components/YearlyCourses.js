import React, { useState, useEffect } from "react";
import { useTabs, TabPanel } from "react-headless-tabs";
import TabGroup from "./TabGroup";
import GradeStats from "./GradeStats";
import CourseTopics from "./CourseTopics";
import data from "../data.json";
import Select from "react-select";
import { TabSelector } from "./TabSelector";
import YearlyFooter from "./YearlyFooter";

export default function YearlyCourses() {
  const { yearly } = data[1];
  //console.log(yearly);

  const [activeGrade, setactiveGrade] = useState(yearly && yearly[0]);

  const gradetabs = Object.keys(activeGrade.boards);

  const [tabs, setTabs] = useState(gradetabs && gradetabs);

  const [selectedTab, setSelectedTab] = useTabs(tabs);
  //console.log(activeGrade);

  useEffect(() => {
    // console.log(tabs[0]);
    console.log(selectedTab);
  }, [selectedTab]);

  const options = [
    { value: "grade_6", label: "Grade 6" },
    { value: "grade_7", label: "Grade 7" },
    { value: "grade_8", label: "Grade 8" },
    { value: "grade_9", label: "Grade 9" },
    { value: "grade_10", label: "Grade 10" },
    { value: "grade_11", label: "Grade 11" },
    { value: "grade_12", label: "Grade 12" },
  ];

  const [selectedOption, setselectedOption] = useState(options[0]);

  const tabGroup1 = [
    {
      name: "cbse",
      heading: "CBSE",
    },
    {
      name: "icse",
      heading: "ICSE",
    },
    {
      name: "ib",
      heading: "IB",
    },
    {
      name: "igcse",
      heading: "IGCSE",
    },
  ];

  //console.log(activeGrade.boards);

  const handleDropdownChange = (option) => {
    setselectedOption(option);

    const filteredItem = yearly.filter((item) => {
      if (item.grade == option.label) {
        return item;
      }
    });
    let newTabs = Object.keys(filteredItem[0].boards);
    setactiveGrade(filteredItem[0]);
    setTabs(newTabs);
    //setSelectedTab(newTabs[0]);

    // console.log(Object.keys(filteredItem[0].boards));
  };

  return (
    <>
      <div className="yearly-courses course-wrap">
        <div className="tabs-head">
          <Select
            value={selectedOption}
            onChange={handleDropdownChange}
            options={options}
            className="select"
          />
          <div>
            {Object.keys(activeGrade.boards).map((board) => {
              return (
                <TabSelector
                  isActive={selectedTab === board}
                  onClick={() => setSelectedTab(board)}
                  name={board}
                  key={board}
                >
                  {board}
                </TabSelector>
              );
            })}
          </div>
        </div>
        <div className="tab-panels">
          {Object.keys(activeGrade.boards).map((board) => {
            return (
              <TabPanel hidden={selectedTab !== board} key={`panel${board}`}>
                <GradeStats stats={activeGrade.boards[board]} />
                <CourseTopics topics={activeGrade.boards[board].syllabus} />
              </TabPanel>
            );
          })}
        </div>
      </div>
      <YearlyFooter />
    </>
  );
}
