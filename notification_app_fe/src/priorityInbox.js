function getWeight(type){
    if(type == "Placement"){
        return 3
    }else if(type == "Result"){
        return 2
    }else if(type=="Event"){
        return 1
    }else{
        return 0
    }
}
async function getTopnoti(){
    var res = await fetch("http://4.224.186.213/evaluation-service/notifications",{
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwc3JlZTQyQGpubi5lZHUuaW4iLCJleHAiOjE3Nzg0ODIxNTksImlhdCI6MTc3ODQ4MTI1OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImFkZGY3NTU2LTM3MzgtNDA3Yi05YTM4LTRiNjAzYWQxMDg1ZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZ1dHVrdXJ1IHNyZWUgYWpheWEgamFobmF2aSIsInN1YiI6IjcwMzE5YjA2LTM2ZDktNDdlMy05YjgzLWQwNzI2NWE5MWU5NyJ9LCJlbWFpbCI6InBzcmVlNDJAam5uLmVkdS5pbiIsIm5hbWUiOiJ2dXR1a3VydSBzcmVlIGFqYXlhIGphaG5hdmkiLCJyb2xsTm8iOiIxMTA3MjMxMDQwNzQiLCJhY2Nlc3NDb2RlIjoiV05NY3FOIiwiY2xpZW50SUQiOiI3MDMxOWIwNi0zNmQ5LTQ3ZTMtOWI4My1kMDcyNjVhOTFlOTciLCJjbGllbnRTZWNyZXQiOiJQTnVoU1FxRXZyR1FZWFBNIn0.C1q4kLQXzaeuVUk4qV6-TTiwiLYixfj0QarrjlqXBiM"
        }
    })
    var data = await res.json()
    var noti = data.notifications
    console.log(data)
    console.log("TOP 10 are: ")

    noti.sort(function(a,b){
        var weightA = getWeight(a.Type)
        var weightB = getWeight(b.Type)
        var DateA = new Date(a.Timestamp)
        var DateB = new Date(b.Timestamp) 
        if(weightB !== weightA){
            return weightB- weightA
        }else{
            return DateB- DateA
        }
    })
    var top10 = noti.slice(0,10)
    console.log(top10)
}
getTopnoti()
