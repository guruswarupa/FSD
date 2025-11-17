import React, { useState } from "react";
function AddIssue({ addIssue }) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Open");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "") return;
        addIssue({ title, status });
        setTitle("");
        setStatus("Open");
    };
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Add Issue</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Issue Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                &nbsp;
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
                &nbsp;
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
export default AddIssue;