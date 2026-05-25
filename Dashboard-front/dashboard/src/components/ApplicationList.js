import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function ApplicationList() {
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
      <h3>Your Applications</h3>
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
