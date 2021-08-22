
// Generate Pin 
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin ;
    }
    else{
        return generatePin();
    }
}

// Handle Event For Generate Button 
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin ;
}

// Handle Event For All Key Pad Buuton by event Bubble 
document.getElementById('key-pad').addEventListener
('click', function(event){

    const displayNumber  = document.getElementById('typed-number');
    const number = event.target.innerText ;

    if (isNaN(number)) {
        if (number == 'C') {
            displayNumber.value = '';
        }
    }
    else{
        const prevDisplayNumber = displayNumber.value;
        const newDisplayNumber = prevDisplayNumber + number;
        displayNumber.value = newDisplayNumber;
    }
})

// Handle Event for submit Button 
document.getElementById('submit-btn').addEventListener
('click', function(){
    const pin = document.getElementById('display-pin').value ;
    const displayNumber  = document.getElementById('typed-number').value;

    if (pin == displayNumber) {
        document.getElementById('success-msg').style.display = 'block';
        document.getElementById('fail-msg').style.display = 'none';
    }
    else{
        document.getElementById('fail-msg').style.display = 'block';
        document.getElementById('success-msg').style.display = 'none';
    }
})