const chooseColor = document.querySelectorAll('.problems__list-item');
const contentItem = document.querySelectorAll('.problems__dropdown');
const menuBtn = document.querySelectorAll('.header__btn');
const menuRight = document.querySelectorAll('.rightside-menu');
const menuClose = document.querySelectorAll('.rightside-menu__close');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

menuBtn.forEach(function(element){
    element.addEventListener('click', menu)
})

menuClose.forEach(function(element){
    element.addEventListener('click', close)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.classList[1];
 
    chooseColor.forEach(function(item){
        item.classList.remove('problems__list-item--active')
    })

    target.classList.add('problems__list-item--active')

    contentItem.forEach(function(item){
        item.classList.remove('problems__dropdown--active')
    })

    contentItem.forEach(function(item){
        if (item.classList[1].replace('problems__dropdown--', '') === button.replace('problems__list-item--', ''))
            item.classList.add('problems__dropdown--active')
    })
}

function menu(evt){
    menuRight.forEach(function(item){
        item.classList.remove('rightside-menu--close')
    })
}

function close(evt){
    menuRight.forEach(function(item){
        item.classList.add('rightside-menu--close')
    })
}
