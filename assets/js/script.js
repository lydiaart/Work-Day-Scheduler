var currentHour = moment().hour()
var currentDay = $("#currentDay")
currentDay.html(`<u>${moment().format("dddd, MMMM Do YYYY")}</u>`)
var container = $(".container")


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

    container.append(`
    <div class="row">
    <div class="col-sm-1 hour text-right p-0">${hours[i].text}</div>
    <div class="col-sm-10 p-0"><textarea id=${hours[i].mltime}  class="${timeStatus} w-100 p-0 h-100 form-control"></textarea></div>
    <div class="col-sm-1 p-0"><button id="button-${hours[i].mltime}" data-status="unlock"  data-id=${hours[i].mltime} class="w-100 h-100 saveBtn btn btn-primary"><i class="fas fa-unlock-alt"></i></button></div>
    </div>`)
}

for (let i = 0, j = 9; i < 9; i++, j++) {
    var eventName = localStorage.getItem(j)

    if (eventName) {
        $("#" + j).val(eventName)
        $("#button-" + j).html(`<i class="fas fa-lock"></i>`)
        $("#button-" + j).attr("data-status", "lock")
        $("#" + j).attr('disabled', true);
        $("#" + j).addClass("lock")
    }
    else {
        $("#button-" + j).html(`<i class="fas fa-unlock-alt"></i>`)
        $("#button-" + j).attr("data-status", "unlock")
        $("#" + j).attr('disabled', false);
    }
}

var saveBtn = $(".saveBtn")

saveBtn.on("click", function () {
    var dataId = $(this).attr("data-id")

    if ($(this).attr("data-status") === "unlock") {
        var textArea = $("#" + dataId)

        localStorage.setItem(dataId, textArea.val())
        $(this).html(`<i class="fas fa-lock"></i>`)
        $(this).attr("data-status", "lock")
        $("#" + dataId).attr('disabled', true);
        $("#" + dataId).addClass("lock")
    } else {
        $(this).html(`<i class="fas fa-unlock-alt"></i>`)
        $(this).attr("data-status", "unlock")
        $("#" + dataId).attr('disabled', false);
    }
})

