// Getting references to our form and input
var reportEntryForm = $("form.reportentry");
var projnameInput = $("input#projname-input");
var projaddressInput = $("input#projaddress-input");
var projcityInput = $("input#projcity-input");
var projcountyInput = $("input#projcounty-input");
var projstateInput = $("input#projstate-input");
var projdescInput = $("input#projdesc-input"); 
var bldgsizeInput = $("input#bldgsize-input"); 
var projmgrInput = $("input#projmgr-input"); 
var projsupInput = $("input#projsup-input"); 
var architectInput = $("input#architect-input"); 
var civilengInput = $("input#civileng-input"); 
var mechengInput = $("input#mecheng-input"); 
var elecengInput = $("input#eleceng-input");
var plumbengInput = $("input#plumbeng-input");
var landarchInput = $("input#landarch-input");
var intdesignInput = $("input#intdesign-input"); 
var schedstartInput = $("input#schedstart-input"); 
var schedcomplInput = $("input#schedcompl-input"); 
var actualstartInput = $("input#actualstart-input"); 
var actualcomplInput = $("input#actualcompl-input"); 
var schedreasonInput = $("input#schedreason-input"); 
var initbudgetInput = $("input#initbudget-input"); 
var finalbudgetInput = $("input#finalbudget-input"); 
var budgetreasonInput = $("input#budgetreason-input"); 
var sectorInput = $("input#sector-input"); 
var consttypeInput = $("input#consttype-input");
var leedInput = $("input#leed-input"); 
var awardsInput = $("input#awards-input"); 
var projchallengesInput = $("input#projchallenges-input"); 
var projstrengthsInput = $("input#projstrengths-input"); 
// The variable below holds the input from the hidden field.
var UserId = $("input#UserId");
//var userid = $("#user");
var currentUser = {};
//var UserId = currentUser.id

$(document).ready(function () {


  //Get the name of the user who is logged in and display it.
  $.get("/api/user_data").then(function (data) {
    currentUser = data;
    $(".member-name").text(currentUser.first_name);
    console.log(currentUser);
    $("<input>").attr({
      type: "hidden",
      id: UserId,
      name: UserId
    }).appendTo(".report-entry")
  });


 

  //submit button
  reportEntryForm.on("submit", function (event) {
    event.preventDefault();
    //capture the selected answers from radio buttons
    //var pers_spir = $("input[name=pers_spir]:checked").val();

    var reportData = {
      proj_name: projnameInput.val().trim(),
      proj_address: projaddressInput.val().trim(),
      proj_city: projcityInput.val().trim(),
      proj_county: projcountyInput.val().trim(),
      proj_state: projstateInput.val().trim(),
      proj_desc: projdescInput.val().trim(),
      bldg_size: bldgsizeInput.val().trim(),
      proj_mgr: projmgrInput.val().trim(),
      proj_sup: projsupInput.val().trim(),
      architect: architectInput.val().trim(),
      civil_eng: civilengInput.val().trim(),
      mech_eng: mechengInput.val().trim(),
      plumb_eng: plumbengInput.val().trim(),
      elec_eng: elecengInput.val().trim(),
      land_arch: landarchInput.val().trim(),
      int_design: intdesignInput.val().trim(),
      sched_start: schedstartInput.val(),
      sched_compl: schedcomplInput.val(),
      actual_start: actualstartInput.val(),
      actual_compl: actualcomplInput.val(),
      sched_reason: schedreasonInput.val().trim(),
      init_budget: initbudgetInput.val(),
      final_budget: finalbudgetInput.val(),
      budget_reason: budgetreasonInput.val().trim(),
      sector: sectorInput.val().trim(),
      const_type: consttypeInput.val().trim(),
      leed: leedInput.val(),
      awards: awardsInput.val().trim(),
      proj_challenges: projchallengesInput.val().trim(),
      proj_strengths: projstrengthsInput.val().trim(),
userid: UserId.val()

    };
    console.log("reportData captured");

    console.log(reportData.proj_name)
    console.log("User ID: ", currentUser.id)


    if (!reportData.proj_name || !reportData.sector) {
      return;
    }
    // If we have an entry for pers_spir, run the signUpUser function
    //enterReport(reportData.pers_spir, reportData.pers_emot, reportData.pers_health, reportData.pers_pr_req);
    enterReport(reportData.proj_name, reportData.proj_address, reportData.proj_city, reportData.proj_county, reportData.proj_state, reportData.proj_desc, reportData.bldg_size, reportData.proj_mgr, reportData.proj_sup, reportData.architect, reportData.civil_eng, reportData.mech_eng, reportData.elec_eng, reportData.plumb_eng, reportData.land_arch, reportData.int_design, reportData.sched_start, reportData.sched_compl, reportData.actual_start, reportData.actual_compl, reportData.sched_reason, reportData.init_budget, reportData.final_budget, reportData.budget_reason, reportData.sector, reportData.const_type, reportData.leed, reportData.awards, reportData.proj_challenges, reportData.proj_strengths, reportData.UserId);
projnameInput;
    projaddressInput;
    projcityInput;
    projcountyInput;
    projstateInput;
    projdescInput;
    bldgsizeInput;
    projmgrInput;
    projsupInput;
    architectInput;
    civilengInput;
    mechengInput;
    elecengInput;
    plumbengInput;
    landarchInput;
    intdesignInput;
    schedstartInput;
    schedcomplInput;
    actualstartInput;
    actualcomplInput;
    schedreasonInput;
    initbudgetInput;
    finalbudgetInput;
    budgetreasonInput;
    sectorInput;
    consttypeInput;
    leedInput;
    awardsInput;
    projchallengesInput;
    projstrengthsInput;
    UserId
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function enterReport(proj_name, proj_address, proj_city, proj_county, proj_state, proj_desc, bldg_size, proj_mgr, proj_sup, architect, civil_eng, mech_eng, elec_eng, plumb_eng, land_arch, int_design, sched_start, sched_compl, actual_start, actual_compl, sched_reason, init_budget, final_budget, budget_reason, sector, const_type, leed, awards, proj_challenges, proj_strengths, UserId) {
    var UserId = currentUser.id;
    // function enterReport(pers_spir, pers_emot, pers_health, pers_pr_req) {
    $.post("/api/reportentry", {
      proj_name: proj_name,
      proj_address: proj_address,
      proj_city: proj_city,
      proj_county: proj_county,
      proj_state: proj_state,
      proj_desc: proj_desc,
      bldg_size: bldg_size,
      proj_mgr: proj_mgr,
      proj_sup: proj_sup,
      architect: architect,
      civil_eng: civil_eng,
      mech_eng: mech_eng,
      elec_eng: elec_eng,
      plumb_eng: plumb_eng,
      land_arch: land_arch,
      int_design: int_design,
      sched_start: sched_start,
      sched_compl: sched_compl,
      actual_start: actual_start,
      actual_compl: actual_compl,
      sched_reason: sched_reason,
      init_budget: init_budget,
      final_budget: final_budget,
      budget_reason: budget_reason,
      sector: sector,
      const_type: const_type,
      leed: leed,
      awards: awards,
      proj_challenges: proj_challenges,
      proj_strengths: proj_strengths,
      UserId: UserId

    }).then(function (data) {
      console.log("abcde")
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});