document.addEventListener('DOMContentLoaded', function() {

  // When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)

  // Swap the colors of the body's background and text by adding or removing the dark/light class

  // Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turned off the lights?" when it's off

  // Change the status text when the document is ready
  var status = document.querySelector('.status');
  status.innerText = 'Document ready!'

  function changeStatusBack() {
    status.innerText = 'Anyway, bright enough for ya?!'
  };
  setTimeout(changeStatusBack, 2000)


  // Add a click listener to the switch and incorporate the changes listed above in 'Your Assignment'

  // Confirm the switch works

  // How do we switch the classes back now?

  // use an if statement to change the text

  // you should be able to click the switch many times and it should switch back and forth between light and dark modes







}); // end of DOMContentLoaded
