module.exports = function() {

  let inputBlogData = document.getElementById('form-blog__date');
  let dateToday = new Date ();
  let year = dateToday.getFullYear(),
      month = dateToday.getMonth(),
      currMonth = monToDay(month),
      day = dateToday.getDate(),
      currDay = dayToDay(day);

  inputBlogData.value = `${year}` + `-` +  `${currMonth}` + `-` + `${currDay}`;

  function monToDay(mon) {
    if ( mon < 9 ) {
      return '0' + (mon + 1);
    } else {
      return String(mon + 1);
    }
  }

  function dayToDay(dat) {
    if ( dat < 10 ) {
      return '0' + dat;
    } else {
      return String(dat);
    }
  }
}