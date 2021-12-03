const input = document.querySelector('input');
const header = document.getElementById('HARD');
 
input.addEventListener('change', updateValue);

function updateValue(e) {
    log.textcontext = e.target.value;
    console.log(e.target.value);
}

