$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstnameInput = $("input#firstname-input");
  var lastnameInput = $("input#lastname-input");
  var usernameInput = $("input#username-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var positionInput = $("input#position-input");
  var startInput = $("input#start-input");
  var indstartInput = $("input#indstart-input");
  var schoolInput = $("input#school-input");
  var degreeInput = $("input#degree-input");
  var certInput = $("input#cert-input");
  var photoInput = $("input#photo-input");
  


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      first_name: firstnameInput.val().trim(),
      last_name: lastnameInput.val().trim(),
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      position: positionInput.val().trim(),
      start_date: startInput.val(),
      ind_start_date: indstartInput.val(),
      school: schoolInput.val().trim(),
      degree: degreeInput.val().trim(),
      certifications: certInput.val().trim(),
      photo: photoInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first_name, userData.last_name, userData.username, userData.email, userData.password, userData.position, userData.start_date, userData.ind_start_date, userData.school, userData.degree, userData.certifications, userData.photo);
    firstnameInput.val("");
    lastnameInput;
    usernameInput;
    emailInput.val("");
    passwordInput.val("");
    positionInput;
    startInput;
    indstartInput;
    schoolInput;
    degreeInput;
    certInput;
    photoInput;
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first_name, last_name, username, email, password, position, start_date, ind_start_date, school, degree, certifications, photo) {
    $.post("/api/signup", {
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      password: password,
      position: position,
      start_date: start_date,
      ind_start_date: ind_start_date,
      school: school,
      degree: degree,
      certifications: certifications,
      photo: photo
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
