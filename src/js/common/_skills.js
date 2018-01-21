module.exports = function() {
//------------------------ variables ------------------------//
  let skillsWrapp = document.getElementById('skills__item_list');                         //  область со скиллами
  let skillItemName = Array.from(document.getElementsByClassName('skills__item_name'));   //  родитель для удаленния скилла
  let skillItem = Array.from(document.getElementsByClassName('item__name_row'));          //  удаляемый/добавляеммый скилл

  let addButton = Array.from(document.getElementsByClassName('button-add'));              //  добавление скилла
  let removeButton = Array.from(document.getElementsByClassName('button-remove'));        //  удаление скилла
  let numInput = Array.from(document.getElementsByClassName('button-add__num'));          //  input кол-во процентов скилла
  let nameSkillsInput = Array.from(document.getElementsByClassName('button-add__name'));  //  input название скилла
  let addedInput = Array.from(document.getElementsByClassName('skills-number'));          //  добавляемый input

  let addButtonFront = document.getElementById('button-front');
  let addButtonWork = document.getElementById('button-work');
  let addButtonBack = document.getElementById('button-back');

//------------------------ variables ------------------------//


  addButtonFront.onclick = addSkill;
  addButtonWork.onclick = addSkill;
  addButtonBack.onclick = addSkill;
  
  skillsWrapp.onclick = function (e) {
    
    let target = e.target

    for (i = 0; i < removeButton.length; i++ ) {

      if ( removeButton[i] === target ) {

        let currDelBtn = removeButton[i];
        let removedSkill = currDelBtn.parentNode;
        removedSkill.parentNode.removeChild(removedSkill);
      }
    }
  }

  function addSkill () {

    let currBtn = this
    let ind = elemIndex (addButton, currBtn)
    let val = nameSkillsInput[ind].value;
    let valNum = numInput[ind].value;
    
    if ( val !== '' && !isNaN(valNum) && valNum !== '' ) {    //  валидация полей skills

      skillItemName[ind].appendChild(
        create("li", {class: 'item__name_row'},
          create("div", {class: 'scill-name'}, val),
          create("input", {class: 'skills-number', type: 'text', id: '', value: valNum}),
          create("div", {class: 'skill-percent'}, '%'),
          create("button", {class: 'button-remove'}, 'удалить скил')
        )
      );
      nameSkillsInput[ind].value = '';    //  очищение значения input
      numInput[ind].value = '';
      removeButton = Array.from(document.getElementsByClassName('button-remove')); //обновление массива removeButton

      if (nameSkillsInput[ind].classList.contains('input-error') || numInput[ind].classList.contains('input-error')) {
        nameSkillsInput[ind].classList.remove('input-error');
        numInput[ind].classList.remove('input-error');
      }

    } else if (val == '') {   //  валидация полей skills

      nameSkillsInput[ind].classList.add('input-error');

    } else if ( Number.valNum === undefined ) {   //  валидация полей skills

      numInput[ind].classList.add('input-error');

    }
  }

  function elemIndex (arr, elem) {      //определение индекса эллемента в массиве
    if (arr.indexOf) {
      return arr.indexOf(elem);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        return i;
      }
    return -1;
    }
  }

  function create( name, attributes ) {         //добавление html в разметку
    var el = document.createElement( name );

    if ( typeof attributes == 'object' ) {
      for ( var i in attributes ) {
        el.setAttribute( i, attributes[i] );
    
        if ( i.toLowerCase() == 'class' ) {
          el.className = attributes[i]; // for IE compatibility
    
        } else if ( i.toLowerCase() == 'style' ) {
          el.style.cssText = attributes[i]; // for IE compatibility
        }
      }
    }

    for ( var i = 2;i < arguments.length; i++ ) {
      var val = arguments[i];
      if ( typeof val == 'string' ) {
        val = document.createTextNode( val )
      };
      el.appendChild( val );
    }
    return el;
  }

}