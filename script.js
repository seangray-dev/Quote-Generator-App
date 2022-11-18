const adviceId = document.querySelector('#adviceId');
const adviceQuote = document.querySelector('#adviceQuote');
const btnRandomize = document.querySelector('#btnRandomize');
const cardContainer = document.querySelector('#card-container');
const loader = document.querySelector('#loader');

// Show loading
function loading() {
    loader.hidden = false;
    cardContainer.style.display = 'none'; 
}

// Hide loading
function completeLoading() {
    if (!loader.hidden) {
    cardContainer.style = 'inline';
    loader.hidden = true;
    }
}

function getAdvice() {
    loading();
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceNum = adviceData.slip.id; 
        const advice = adviceData.slip.advice;
        
        adviceID.textContent = adviceNum;
        adviceQuote.innerHTML = `<p>"${advice}"</p>`; 
        // Stop Loader, Show Quote
        completeLoading();
    }).catch (error => {
        console.log(error);
    });
}; 

btnRandomize.addEventListener('click', function() {
    getAdvice();
})

window.onload = () => {
    getAdvice(); 
}








