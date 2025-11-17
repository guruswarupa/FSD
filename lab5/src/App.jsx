import React, { useState } from "react";
import IssueList from "./IssueList";
import AddIssue from "./AddIssue";
import FilterIssue from "./FilterIssue";
function App() {
  const [issues, setIssues] = useState([
    { id: 1, title: "Login bug", status: "Open" },
    { id: 2, title: "UI alignment issue", status: "In Progress" },
    { id: 3, title: "Database error", status: "Closed" }
  ]);
  const [filter, setFilter] = useState("");
  const addIssue = (newIssue) => {
    setIssues([...issues, { id: issues.length + 1, ...newIssue }]);
  };
  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div style={{ padding: "20px" }}>
      <h1>Issue Tracker</h1>
      <FilterIssue filter={filter} setFilter={setFilter} />
      <IssueList issues={filteredIssues} />
      <AddIssue addIssue={addIssue} />
    </div>
  );
}
export default App;