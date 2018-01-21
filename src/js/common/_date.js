module.exports = function() {

  let inputBlogData = document.getElementById('form-blog__date');
  let dateToday = new Date ();
  let year = dateToday.getFullYear(),
      month = dateToday.getMonth(),
      currMonth = currMon(month),
      day = dateToday.getDate();

  inputBlogData.value = `${year}` + `-` +  `${currMonth}` + `-` + `${day}`;

  function currMon(mon) {
    if ( mon < 9 ) {
      return '0' + (mon + 1);
    } else {
      return String(mon + 1);
    }
  }
}