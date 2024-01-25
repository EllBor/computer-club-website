
  var problemList = document.querySelector('.problems__box-list');
  var dropdownWord = document.querySelector('.problems__dropdown--word');
  var dropdownSetting = document.querySelector('.problems__dropdown--setting');
  var dropdownDesign = document.querySelector('.problems__dropdown--design');
  var dropdownDocument = document.querySelector('.problems__dropdown--document');
  var dropdownError = document.querySelector('.problems__dropdown--error');


  problemList.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('problems__list-item--setting')) {
        var activeElement = document.querySelector('.problems__list-item--active');
        var activeDiv = document.querySelector('.problems__dropdown--active');
        if (activeElement) {
            activeElement.classList.remove('problems__list-item--active');
        }
        if (activeDiv) {
            activeDiv.classList.remove('problems__dropdown--active');
        }
        dropdownSetting.classList.add('problems__dropdown--active');
        target.classList.add('problems__list-item--active');
    } else if (target.classList.contains('problems__list-item--design')) {
        var activeElement = document.querySelector('.problems__list-item--active');
        var activeDiv = document.querySelector('.problems__dropdown--active');
        if (activeElement) {
            activeElement.classList.remove('problems__list-item--active');
        }
        if (activeDiv) {
            activeDiv.classList.remove('problems__dropdown--active');
        }
        dropdownDesign.classList.add('problems__dropdown--active');
        target.classList.add('problems__list-item--active');
    } else if (target.classList.contains('problems__list-item--word')) {
        var activeElement = document.querySelector('.problems__list-item--active');
        var activeDiv = document.querySelector('.problems__dropdown--active');
        if (activeElement) {
            activeElement.classList.remove('problems__list-item--active');
        }
        if (activeDiv) {
            activeDiv.classList.remove('problems__dropdown--active');
        }
        dropdownWord.classList.add('problems__dropdown--active');
        target.classList.add('problems__list-item--active');
    }else if (target.classList.contains('problems__list-item--document')) {
        var activeElement = document.querySelector('.problems__list-item--active');
        var activeDiv = document.querySelector('.problems__dropdown--active');
        if (activeElement) {
            activeElement.classList.remove('problems__list-item--active');
        }
        if (activeDiv) {
            activeDiv.classList.remove('problems__dropdown--active');
        }
        dropdownDocument.classList.add('problems__dropdown--active');
        target.classList.add('problems__list-item--active');
    }else if (target.classList.contains('problems__list-item--error')) {
        var activeElement = document.querySelector('.problems__list-item--active');
        var activeDiv = document.querySelector('.problems__dropdown--active');
        if (activeElement) {
            activeElement.classList.remove('problems__list-item--active');
        }
        if (activeDiv) {
            activeDiv.classList.remove('problems__dropdown--active');
        }
        dropdownError.classList.add('problems__dropdown--active');
        target.classList.add('problems__list-item--active');
    }
  });