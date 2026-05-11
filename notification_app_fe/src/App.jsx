import { useState, useEffect } from "react"
import Log from "./logger"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwc3JlZTQyQGpubi5lZHUuaW4iLCJleHAiOjE3Nzg0ODUyNjQsImlhdCI6MTc3ODQ4NDM2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImNiNjk4MGNhLWNiNTUtNGMxMC1iMDM3LTViNzViYzQxN2Y0OCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZ1dHVrdXJ1IHNyZWUgYWpheWEgamFobmF2aSIsInN1YiI6IjcwMzE5YjA2LTM2ZDktNDdlMy05YjgzLWQwNzI2NWE5MWU5NyJ9LCJlbWFpbCI6InBzcmVlNDJAam5uLmVkdS5pbiIsIm5hbWUiOiJ2dXR1a3VydSBzcmVlIGFqYXlhIGphaG5hdmkiLCJyb2xsTm8iOiIxMTA3MjMxMDQwNzQiLCJhY2Nlc3NDb2RlIjoiV05NY3FOIiwiY2xpZW50SUQiOiI3MDMxOWIwNi0zNmQ5LTQ3ZTMtOWI4My1kMDcyNjVhOTFlOTciLCJjbGllbnRTZWNyZXQiOiJQTnVoU1FxRXZyR1FZWFBNIn0.miW4lEefzfb4pwjxZCMtg5dg3O3i0hNqxDpiB9QDtCw"

function App() {
  const [notifications, setNotifications] = useState([])
  const [filter, setFilter] = useState("")
  const [limit, setLimit] = useState(10)
  const [viewed, setViewed] = useState([])

  useEffect(() => {
    fetchNotifications()
  }, [filter, limit])

  const fetchNotifications = async () => {
    Log("frontend", "info", "api", "Fetching notifications")
    var url = `http://4.224.186.213/evaluation-service/notifications?limit=${limit}`
    if (filter) url += `&notification_type=${filter}`
    
    var res = await fetch(url, {
      headers: { "Authorization": `Bearer ${TOKEN}` }
    })
    var data = await res.json()
    setNotifications(data.notifications)
    Log("frontend", "info", "api", "Notifications fetched successfully")
  }

  const markViewed = (id) => {
    setViewed([...viewed, id])
    Log("frontend", "info", "component", "Notification marked as read")
  }

  return (
    <div style={{padding: "20px"}}>
      <h1>Notifications</h1>
      
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
        <option value="Event">Event</option>
      </select>

      <select onChange={(e) => setLimit(e.target.value)}>
        <option value="10">Top 10</option>
        <option value="15">Top 15</option>
        <option value="20">Top 20</option>
      </select>

      {notifications && notifications.map((n) => (
        <div key={n.ID} style={{
          padding: "10px",
          margin: "10px",
          background: viewed.includes(n.ID) ? "#gray" : "white",
          border: "1px solid black"
        }}
        onClick={() => markViewed(n.ID)}>
          <b>{n.Type}</b> — {n.Message}
          <p>{n.Timestamp}</p>
          {viewed.includes(n.ID) ? "Read" : "New"}
        </div>
      ))}
    </div>
  )
}

export default App
