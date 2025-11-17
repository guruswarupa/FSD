import React from "react";
function IssueList({ issues }) {
    return (
        <div>
            <h2>Issue List</h2>
            <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.length > 0 ? (
                        issues.map((issue) => (
                            <tr key={issue.id}>
                                <td>{issue.id}</td>
                                <td>{issue.title}</td>
                                <td>{issue.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No issues found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default IssueList;