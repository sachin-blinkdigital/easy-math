import "./styles/main.scss";
import { useTabs, TabPanel } from "react-headless-tabs";
import { TabSelector } from "./components/TabSelector";
import YearlyCourses from "./components/YearlyCourses";
import PromoHead from "./components/PromoHead";
import MonthlyCourses from "./components/MonthlyCourses";

function App() {
  const [selectedTab, setSelectedTab] = useTabs(["yearly", "monthly"]);

  return (
    <main>
      <PromoHead />
      <div className="content">
        <div className="main-tabs">
          <TabSelector
            isActive={selectedTab === "yearly"}
            onClick={() => setSelectedTab("yearly")}
            name={"yearly"}
          >
            Yearly Courses
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "monthly"}
            onClick={() => setSelectedTab("monthly")}
            name={"monthly"}
          >
            Monthly Courses
          </TabSelector>
        </div>
        <div>
          <TabPanel hidden={selectedTab !== "yearly"}>
            <YearlyCourses />
          </TabPanel>
          <TabPanel hidden={selectedTab !== "monthly"}>
            <MonthlyCourses />
          </TabPanel>
        </div>
      </div>
    </main>
  );
}

export default App;
