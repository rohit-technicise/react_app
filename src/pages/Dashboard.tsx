import { useLocation } from "react-router-dom";

function Dashboard() {
  const { state } = useLocation();
  const { username } = state;
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <p>username is {username}</p>
    </div>
  )
}
export default Dashboard;