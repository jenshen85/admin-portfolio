module.exports = function() {
  let inputBlogData = document.getElementById('form-blog__date');
  let dateToday = new Date ();
  let year = dateToday.getFullYear(),
      monat = dateToday.getMonth(),
      day = dateToday.getDate();
      console.log(day, monat, year);
      // inputBlogData.value = ;
}