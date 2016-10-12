console.log('hi');

var input1 = document.querySelector('.name-form');
var input2 = document.querySelector('.email-form');
var input3 = document.querySelector('.message-form');

var submit = document.querySelector('.submit');

submit.addEventListener('click', function() {

    alert('Thank You!');

    var completed = { };
    completed.fullName = input1.value;
    completed.email = input2.value;
    completed.message = input3.value;

    console.log(completed);
});
