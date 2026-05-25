import { useEffect, useState } from "react";
import API from "../services/api";
import LogsTable from "./LogsTable";
import Charts from "./Charts";

export default function ApplicationDetails({ appName }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await API.get(`/applications/${appName}/logs`, { params: { limit: 100 } });
      setLogs(data);
    };
    fetchLogs();
  }, [appName]);

  return (
    <div>
      <h3>Application: {appName}</h3>
      <LogsTable appName={appName} />
      <Charts logs={logs} />
    </div>
  );
}
