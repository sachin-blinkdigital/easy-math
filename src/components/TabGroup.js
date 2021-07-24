import React from "react";
import { TabSelector } from "./TabSelector";

export default function TabGroup({ tabs, activeTab, onTabClick }) {
  const tabsMarkup = tabs.map((item, index) => {
    return (
      <TabSelector
        key={`tab${index}`}
        isActive={activeTab == item.name ? true : false}
        onClick={onTabClick}
        name={item.name}
      >
        {item.heading}
      </TabSelector>
    );
  });

  return tabsMarkup;
}
