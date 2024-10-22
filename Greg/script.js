document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const indicators = document.querySelectorAll('.indicators li');
    const numberDisplay = document.querySelector('.number');
    let currentIntex = 0;
    
    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
       
        items[index].classList.add('active');
        indicators[index].classList.add('active')
        numberDisplay.textContent = (index + 1).toString().padStart(2, '0') ;
    }

    function nextItem() {
        currentIntex = (currentIntex + 1) % items.length;
        showItem(currentIntex);
    } 
   
    function prevItem() {
       currentIntex = (currentIntex - 1 + items.length) % items.length;
       showItem(currentIntex);
    }
   
    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    // Inicializar
    showItem(currentIntex);
});