module.exports = function() {

  //------------------------ variables ------------------------//
  //  inputs form blog
  let inputBlogName = document.getElementById('form-blog__name');
  let inputBlogData = document.getElementById('form-blog__date');
  let inputBlogTextarea = document.getElementById('form-blog__textarea');
  //  button form blog
  let blogButton = document.getElementById('blog-button');

  //  inputs form work
  let inputWorkName = document.getElementById('form-work__name');
  let inputWorkTech = document.getElementById('form-work__tech');
  let inputBlogFile = document.getElementById('form-work__file');
  //  button form work
  let workButton = document.getElementById('work-button');

  // modal window
  let modalWindow = document.getElementById('modal-window');

//------------------------ variables ------------------------//

  //form blog validate
  blogButton.onclick =  function (e) {
    e.preventDefault;
    
    let inputNameVal = inputBlogName.value,
        inputDataVal = inputBlogData.value,
        inputTextareaVal = inputBlogTextarea.value;

        console.log(inputNameVal, inputDataVal, inputTextareaVal);
        

    // if ( inputNameVal !== '' && inputDataVal && inputTextareaVal !== '' ) {

    // }

  }

  
  

}