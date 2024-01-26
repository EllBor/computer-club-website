const chooseColor = document.querySelectorAll('.problems__list-item');
const contentItem = document.querySelectorAll('.problems__dropdown');


chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.classList[1];
    const contentActive = document.querySelectorAll(`.${button}`);
 
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