var currentHour = moment().hour()
console.log(currentHour)
var currentDay = $("#currentDay")
currentDay.html(`<u>${moment().format("dddd, MMMM Do YYYY")}</u>`)
var container = $(".container")
var events = JSON.parse(localStorage.getItem("events")) ||  []

var hours = [
    {
        text: "9AM",
        mltime: 9
    },
    {
        text: "10AM",
        mltime: 10
    },
    {
        text: "11AM",
        mltime: 11
    },
    {
        text: "12PM",
        mltime: 12
    },
    {
        text: "1PM",
        mltime: 13
    },
    {
        text: "2PM",
        mltime: 14
    },
    {
        text: "3PM",
        mltime: 15
    },
    {
        text: "4PM",
        mltime: 16
    },
    {
        text: "5PM",
        mltime: 17
    }]

for (let i = 0; i < 9; i++) {



    var timeStatus = ""
    if (hours[i].mltime < currentHour) {
        timeStatus = "past"
    }
    else if (hours[i].mltime === currentHour) {
        timeStatus = "present"
    }
    else {
        timeStatus = "future"
    }

    container.append(`  <div class="row">
    <div class="col-sm-1 hour text-right p-0">${hours[i].text}</div>
    <div class="col-sm-10 p-0"><textarea id=${hours[i].mltime}  class="${timeStatus} w-100 p-0 h-100 form-control" name="" id="" cols="30"  ></textarea></div>
    <div class="col-sm-1 p-0"><button data-id=${hours[i].mltime} class="w-100 h-100 saveBtn btn btn-primary"><i class="fas fa-unlock-alt"></i></button></div>

  </div>`)

  
}



for (let i = 0; i < 9; i++) {
    if(events[i]){
        var id = events[i].dataId
        var eventName = events[i].event
      //$("#10") <=> document.querySector("#10")
        $("#" + id).val(eventName)
      }
    
    
}



var saveBtn = $(".saveBtn")

saveBtn.on("click",function(){
     var dataId = $(this).attr("data-id")
     console.log("#" + dataId)
     
     var textArea = $("#" + dataId)

     console.log(textArea.val(),dataId)
     events.push({
         event:textArea.val(),
         dataId:dataId
     })

     localStorage.setItem("events",JSON.stringify(events))

})

