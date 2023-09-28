const item0 = document.getElementById('item-0');
const item1 = document.getElementById('item-1');
const item2 = document.getElementById('item-2');
const item3 = document.getElementById('item-3');



item0.addEventListener('click', function() {
   console.log('click blue')
    if (item0.classList.contains('inactive-select')) {
        
        item0.classList.remove('inactive-select');
        item0.classList.add('active-select');
    }
});

item1.addEventListener('click', function() {
   
    if (item1.classList.contains('inactive-select')) {
        item1.classList.remove('inactive-select');
        item1.classList.add('active-select');
    }
});