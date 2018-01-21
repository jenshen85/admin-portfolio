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
  let inputWorkFile = document.getElementById('form-work__file');
  //  button form work
  let workButton = document.getElementById('work-button');

  // modal window
  let modalWindow = document.getElementById('modal-window');
  let buttonModal = document.getElementById('modal-button');
  let activModalClass = 'modal-window--active';

//------------------------ variables ------------------------//

  //form blog validate
  blogButton.onclick =  function (e) {
    e.preventDefault;
    
    let inputNameVal = inputBlogName.value,                 //  получаем значение input
        inputDataVal = inputBlogData.value,
        inputTextareaVal = inputBlogTextarea.value;

    let errArr = [];                                        //пустой массив для ощибок

    let inputArr = [                                        // массив с input и их полученные значения
      {val: inputNameVal, input: inputBlogName},
      {val: inputDataVal, input: inputBlogData},
      {val: inputTextareaVal, input: inputBlogTextarea}
      ];
    
    for ( i = 0; i < inputArr.length; i++ ) {               // проверка input на пустую строку

      let indx = inputArr[i].val;
      
      if ( indx === '' ) {

        inputArr[i].input.classList.add('input-error');     //  если input пуст добавляем класс ошибки
        errArr.push(inputArr[i].input);                     //  и добавляем в массив с ошибками
      }
    }

    if ( errArr.length === 0 ) {                            //проверяем массив с ошибками  
      document.body.style.overflow = 'hidden';
      modalWindow.classList.add(activModalClass);
      for ( i = 0; i < inputArr.length; i++ ) {
        inputArr[i].input.classList.remove('input-error');  //  убераем класс ошибки если он был добавлен
        if (inputArr[i].input !== inputBlogData) {
          inputArr[i].input.value = '';                     //  очищаем input после успеной отправки, кроме поля с датой
        }
      }
    }
  }

  workButton.onclick =  function (e) {
    e.preventDefault;
    
    let inputWorkNameVal = inputWorkName.value,
        inputWorkTechVal = inputWorkTech.value,
        inputWorkFileVal = inputWorkFile.value;
  }

  buttonModal.onclick = function () {

    modalWindow.classList.remove(activModalClass);
    document.body.style.overflow = 'auto';
    
  }
}