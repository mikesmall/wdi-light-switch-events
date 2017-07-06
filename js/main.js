document.addEventListener('DOMContentLoaded', function() {

  var status = document.querySelector('.status');

  status.innerText = 'Document ready!'

  function statusLight() {
    status.innerText = 'Good morning!'
  };

  setTimeout(statusLight, 1000);

  var plate = document.querySelector('.plate');
  var button = document.querySelector('button');
  var body = document.querySelector('body');

  function lightsOut(eventObject) {
    if (this.className === 'switch on') {
      body.className = 'dark';
      this.className = 'switch off';
      status.innerText = 'Lights out!';
    }
    else if (this.className === 'switch off') {
      body.className = 'light';
      this.className = 'switch on';
      statusLight();
    }
  };

  button.addEventListener('click', lightsOut);

});
