import { useParams } from "react-router-dom";
import LogsTable from "../components/LogsTable";
import Charts from "../components/Charts";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function ApplicationPage() {
  const { name } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await API.get(`/applications/${name}/logs`, { params: { limit: 100 } });
      setLogs(data);
    };
    fetchLogs();
  }, [name]);

  return (
    <div>
      <h2>Application: {name}</h2>
      <LogsTable appName={name} />
      <Charts logs={logs} />
    </div>
  );
}
