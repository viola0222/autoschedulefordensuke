
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.densuke.biz/event
// @icon         https://www.google.com/s2/favicons?sz=64&domain=densuke.biz
// @grant        none
// ==/UserScript==
//
function getMonthDates(year, month) {
  var dates = [];
  var startDate = new Date(year, month - 1, 1);
  var endDate = new Date(year, month, 0);

  for (var date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    var formattedDate = `${date.getMonth() + 1}/${date.getDate()}(${getDayOfWeek(date)})`;
    dates.push(formattedDate);
  }

  return dates;
}

function getDayOfWeek(date) {
  var daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
  return daysOfWeek[date.getDay()];
}

function inputEventname(){
  let eventmonth = document.getElementsByName("eventname");
  console.log(eventmonth[0].value);
  insertSchedule();
}

function insertSchedule(){
  // イベントの説明文を入れる
    let elements = document.getElementsByName("explain");
    elements[0].value = "朝：10:00〜12:00(2時間)\n昼：13:00〜18:30(5.5時間)\n夜：21:30〜23:30(2時間) 伸びても0時には終わるよ\n\n◎：朝昼夜\n○：昼\n△：夜\n×：ばつ"

  // 一月分の予定を入れる
    let sched = document.getElementsByName("schedule");
    var eventday = getMonthDates(2023,9);
    sched[0].value = eventday.join("\n");

  // ◎○△×から選ぶ
    let choice = document.getElementsByName("eventchoice");
    choice[2].checked = true;
}

(function() {
    'use strict';

  // イベントを作成する月が何月かを判定する
    let eventmonth = document.getElementsByName("eventname");
    eventmonth[0].addEventListener('input', inputEventname)
    //eventmonth[0].value


    // Your code here...
})();
