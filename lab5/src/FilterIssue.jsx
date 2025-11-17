import React from "react";
function FilterIssue({ filter, setFilter }) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <h2>Filter Issues</h2>
            <input
                type="text"
                placeholder="Search by title..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}
export default FilterIssue;