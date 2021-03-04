// 雪季倒數計時器
function getTimeRemaining(seasonStart) {
  // 雪季開始日-現在時間 換算成毫秒
  let total = Date.parse(seasonStart) - Date.parse(new Date());

  // 各自的餘數就是現在的 秒 分 時 日
  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / 1000 / 60) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function updateClock() {
  let t = getTimeRemaining('2021-12-01');
  document.querySelector('.days').innerHTML = t.days;

  // 把十位數補0
  document.querySelector('.hours').innerHTML = t.hours
    .toString()
    .padStart(2, '0');
  document.querySelector('.minutes').innerHTML = t.minutes
    .toString()
    .padStart(2, '0');
  document.querySelector('.seconds').innerHTML = t.seconds
    .toString()
    .padStart(2, '0');

  // 當截止時間與現在時間相減 <0 停止計時
  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

// 一載入頁面就先跑一次，才不會有空白畫面
updateClock();
// 每秒跑一次function
let timeinterval = setInterval(updateClock, 1000);

//
// --------------------------------------
//
// 滑雪動畫
var snowImg = document.getElementById('snowBoard');

// console.log(typeof snowImg.style.top);

function countScroll() {
  // console.log(`x= ${snowImg.style.left}`);
  // console.log(`y= ${snowImg.style.top}`);
  // console.log("--------");
  console.log(pageYOffset);
  snowImg.style.top = pageYOffset * 1 + 'px';
  snowImg.style.left = pageYOffset * 2 + 'px';
}

document.addEventListener('scroll', countScroll);
