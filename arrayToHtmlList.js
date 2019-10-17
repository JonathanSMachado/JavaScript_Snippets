const arrayToHtmlList = (arr, listId) => (
    el => (
        (el = document.querySelector('#' + listId)),
        (el.innerHTML += arr.map(item => `<li>${item}<li>`).join(''))
    )
)()

console.log(arrayToHtmlList(['item 1', 'item 2'], 'myListID'))