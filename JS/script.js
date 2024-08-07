function correctData(date) {
  return date < 10 ? "0" + date :   date;
}

function saleData() {
  let now = new Date();
  let saleDate = new Date(2024, 7, 3);
  let finish = saleDate - now;

  let days = Math.floor(finish / (24 * 60 * 60 * 1000));
  let hours = Math.floor((finish % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((finish % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((finish % (60 * 1000)) / 1000);

  let timerValue = document.querySelectorAll(".timerBlock .value");
  timerValue[0].innerHTML = correctData(days);
  timerValue[1].innerHTML = correctData(hours);
  timerValue[2].innerHTML = correctData(minutes);
  timerValue[3].innerHTML = correctData(seconds);
  // console.log(days, hours, minutes, seconds);
  
  if(finish <=0){
    timerValue[0].innerHTML ="00"
    timerValue[1].innerHTML ="00"
    timerValue[2].innerHTML = "00"
    timerValue[3].innerHTML = "00"
  }
}

saleData();
setInterval(() => {
  saleData();
}, 1000);

const wrapper = document.querySelector('.popUpWrapper')

function showPopUp() {
  wrapper.classList.add('active')
}

function hidePopUp() {
  let clickedElem = event.target
  console.log(clickedElem)

  if(clickedElem === wrapper) {
    wrapper.classList.remove('active')
  }
}
