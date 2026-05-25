import { useEffect, useState } from "react";
import API from "../services/api";

export default function LogsTable({ appName }) {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(1);
  const [level, setLevel] = useState("");
  const [sort, setSort] = useState("desc");

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await API.get(`/applications/${appName}/logs`, {
        params: { page, limit: 10, level, sort }
      });
      setLogs(data);
    };
    fetchLogs();
  }, [appName, page, level, sort]);

  return (
    <div>
      <select onChange={(e) => setLevel(e.target.value)}>
        <option value="">All Levels</option>
        <option value="INFO">INFO</option>
        <option value="WARN">WARN</option>
        <option value="ERROR">ERROR</option>
      </select>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="desc">Most Recent</option>
        <option value="count">Most Occurred</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Level</th>
            <th>Count</th>
            <th>First Occurrence</th>
            <th>Last Occurrence</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log._id}>
              <td>{log.message}</td>
              <td>{log.level}</td>
              <td>{log.count}</td>
              <td>{new Date(log.createdAt).toLocaleString()}</td>
              <td>{new Date(log.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
}

