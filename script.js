const adviceId = document.querySelector('#adviceId');
const adviceQuote = document.querySelector('#adviceQuote');
const btnRandomize = document.querySelector('#btnRandomize');
const cardContainer = document.querySelector('#card-container');
const loader = document.querySelector('#loader');
const endpoint = 'https://api.adviceslip.com/advice';

// Show loading
function loading() {
    loader.hidden = false;
    loader.style.display = 'block';
    cardContainer.style.display = 'none';
  }

// Hide loading
function completeLoading() {
    if (!loader.hidden) {
        cardContainer.style = 'inline';
        loader.hidden = true;
        loader.style.display = 'none';
    }
}

function getAdvice(show) {
    loading();
  
    fetch(endpoint)
      .then(response => response.json())
      .then(adviceData => {
        const advice = adviceData.slip.advice; 

        adviceID.textContent = adviceData.slip.id;
        adviceQuote.innerHTML = `<span>"${advice}"<span>`; 
      })
      .catch (error => console.log(error))
      .finally(() => completeLoading());
  };

btnRandomize.addEventListener('click', getAdvice);

window.onload = () => getAdvice();








