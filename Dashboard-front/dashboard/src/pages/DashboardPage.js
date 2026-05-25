import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const [apps, setApps] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchApps = async () => {
      const { data } = await API.get("/applications");
      setApps(data);
    };
    fetchApps();
  }, []);

  const handleCreate = async () => {
    await API.post("/applications", { name });
    setName("");
    const { data } = await API.get("/applications");
    setApps(data);
  };

  const handleDelete = async (appName) => {
    await API.delete(`/applications/${appName}`);
    setApps(apps.filter(app => app.name !== appName));
  };

  return (
    <div>
      <h2>Your Applications</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New App Name" />
      <button onClick={handleCreate}>Create</button>
      <ul>
        {apps.map(app => (
          <li key={app._id}>
            <Link to={`/applications/${app.name}`}>{app.name}</Link>
            <button onClick={() => handleDelete(app.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
