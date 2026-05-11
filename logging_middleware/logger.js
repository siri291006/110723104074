async function Log(stack, level, package_, message) {
  var data = {
    stack: stack,
    level: level,
    package: package_,
    message: message
  }

  console.log("Sending log:", data)

  var dataAsText = JSON.stringify(data)

  var settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwc3JlZTQyQGpubi5lZHUuaW4iLCJleHAiOjE3Nzg0ODY2ODIsImlhdCI6MTc3ODQ4NTc4MiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImJjMjllNzc3LThiYzItNGM2Ni1hM2RmLWJjMjQyZjgwNDE0NSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZ1dHVrdXJ1IHNyZWUgYWpheWEgamFobmF2aSIsInN1YiI6IjcwMzE5YjA2LTM2ZDktNDdlMy05YjgzLWQwNzI2NWE5MWU5NyJ9LCJlbWFpbCI6InBzcmVlNDJAam5uLmVkdS5pbiIsIm5hbWUiOiJ2dXR1a3VydSBzcmVlIGFqYXlhIGphaG5hdmkiLCJyb2xsTm8iOiIxMTA3MjMxMDQwNzQiLCJhY2Nlc3NDb2RlIjoiV05NY3FOIiwiY2xpZW50SUQiOiI3MDMxOWIwNi0zNmQ5LTQ3ZTMtOWI4My1kMDcyNjVhOTFlOTciLCJjbGllbnRTZWNyZXQiOiJQTnVoU1FxRXZyR1FZWFBNIn0.scGWLkMtkD267i7vOLByXw30Xp7TwEGa7aXTAEhTyYY"
    },
    body: dataAsText
  }

  await fetch("http://4.224.186.213/evaluation-service/logs", settings)

  console.log("Log sent!")
}

export default Log
