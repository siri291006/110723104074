const Log = async(stack,level,package_, message){
    var dataa = {
        stack: stack,
        level: level,
        package: package_,
        message:message
    }
    console.log("sending")
    var dataText = JSON.stringify(dataa)
    var set = {
        body: dataText,
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization":" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwc3JlZTQyQGpubi5lZHUuaW4iLCJleHAiOjE3Nzg0Nzc3OTYsImlhdCI6MTc3ODQ3Njg5NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNjODcyMWE2LTI5MzAtNDI4Ni1iZDQ4LWExNTBlM2YzYWQ1ZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZ1dHVrdXJ1IHNyZWUgYWpheWEgamFobmF2aSIsInN1YiI6IjcwMzE5YjA2LTM2ZDktNDdlMy05YjgzLWQwNzI2NWE5MWU5NyJ9LCJlbWFpbCI6InBzcmVlNDJAam5uLmVkdS5pbiIsIm5hbWUiOiJ2dXR1a3VydSBzcmVlIGFqYXlhIGphaG5hdmkiLCJyb2xsTm8iOiIxMTA3MjMxMDQwNzQiLCJhY2Nlc3NDb2RlIjoiV05NY3FOIiwiY2xpZW50SUQiOiI3MDMxOWIwNi0zNmQ5LTQ3ZTMtOWI4My1kMDcyNjVhOTFlOTciLCJjbGllbnRTZWNyZXQiOiJQTnVoU1FxRXZyR1FZWFBNIn0.JMGQQUftEgXxwRnmZp2ZULhFqJ0PONPn0xmRQVls4C0"
            
        }
    }
}