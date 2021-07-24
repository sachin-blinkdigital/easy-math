import React, { useState, useEffect } from "react";
import SessionInfo from "./SessionInfo";
import data from "../data.json";
import Select from "react-select";
import { useTabs, TabPanel } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";

export default function MonthlyCourses() {
  const { monthly } = data[0];

  const [tabs, setTabs] = useState([]);

  const [selectedTab, setSelectedTab] = useTabs(tabs.length ? tabs[0] : "");

  const [activeGrade, setactiveGrade] = useState(monthly && monthly[0]);

  const gradetabs = Object.keys(activeGrade.boards);

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

  //console.log(Object.values(activeGrade.boards));

  // Object.keys(activeGrade.boards).map((key) => {
  //   console.log(Object.values(activeGrade.boards[key]));
  // });

  // useEffect(() => {
  //   console.log(selectedTab);
  // }, [selectedTab]);

  const handleDropdownChange = (option) => {
    setselectedOption(option);

    const filteredItem = monthly.filter((item) => {
      if (item.grade == option.label) {
        return item;
      }
    });
    setactiveGrade(filteredItem[0]);
    if (Object.keys(filteredItem[0].boards).length > 1) {
      let newTabs = Object.keys(filteredItem[0].boards);
      setTabs([newTabs]);
      setSelectedTab(newTabs[0]);
    }
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleDropdownChange}
        options={options}
      />
      {gradetabs && gradetabs.length > 1 ? (
        <div>
          <div>
            {Object.keys(activeGrade.boards).map((board) => {
              return (
                <TabSelector
                  isActive={selectedTab == board}
                  onClick={() => setSelectedTab(board)}
                  name={board}
                  key={board}
                >
                  {board}
                </TabSelector>
              );
            })}
          </div>
          <div>
            {Object.keys(activeGrade.boards).map((board) => {
              return (
                <TabPanel hidden={selectedTab != board} key={`panel${board}`}>
                  <SessionInfo
                    gradeData={Object.values(activeGrade.boards[board])}
                  />
                </TabPanel>
              );
            })}
          </div>
        </div>
      ) : (
        <SessionInfo gradeData={Object.values(activeGrade.boards)[0]} />
      )}
    </div>
  );
}
