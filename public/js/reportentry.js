// Getting references to our form and input
var reportEntryForm = $("form.reportentry");
var projnameInput = $("projname-input");
var projaddressInput = $("projaddress-input");
var projcityInput = $("projcity-input");
var projcountyInput = $(" projcounty-input");
var projstateInput = $("projstate-input");
var projdescInput = $("projdesc-input"); 
var bldgsizeInput = $("bldgsize-input"); 
var projmgrInput = $("projmgr-input"); 
var projsupInput = $("projsup-input"); 
var architectInput = $("architect-input"); 
var civilengInput = $("civileng-input"); 
var mechengInput = $("mecheng-input"); 
var elecengInput = $("eleceng-input");
var plumbengInput = $("plumbeng-input");
var landarchInput = $("landarch-input");
var intdesignInput = $("intdesign-input"); 
var schedstartInput = $("schedstart-input"); 
var schedcomplInput = $("schedcompl-input"); 
var schedreasonInput = $("schedreason-input"); 
var initbudgetInput = $("initbudget-input"); 
var finalbudgetInput = $("finalbudget-input"); 
var budgetreasonInput = $("budgetreason-input"); 
var sectorInput = $("sector-input"); 
var consttypeInput = $("consttype-input");
var leedInput = $("leed-input"); 
var awardsInput = $("awards-input"); 
var projchallengesInput = $("projchallenges-input"); 
var projstrengthsInput = $("projstrengths-input"); 
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
      projnameInput: proj_name,
projaddressInput: proj_address,
projcityInput: proj_city,
projcountyInput: proj_county,
projstateInput: proj_state,
projdescInput: proj_desc,
bldgsizeInput: bldg_size,
projmgrInput: proj_mgr,
projsupInput: proj_sup,
architectInput: architect,
civilengInput: civil_eng,
mechengInput: mech_eng,
plumbengInput: plumb_eng,
elecengInput: elec_eng,
landarchInput: land_arch,
intdesignInput: int_design,
schedstartInput: sched_start,
schedcomplInput: sched_compl,
actualstartInput: actual_start,
actualcomplInput: actual_compl,
schedreasonInput: sched_reason,
initbudgetInput: init_budget,
finalbudgetInput: final_budget,
budgetreasonInput: budget_reason,
sectorInput: sector,
consttypeInput: const_type,
leedInput: leed,
awardsInput: awards,
projchallengesInput: proj_challenges,
projstrengthsInput: proj_strengths,
userid: UserId

    };
    console.log("reportData captured");

    console.log(reportData.proj_name)
    console.log("User ID: ", currentUser.id)


    if (!reportData.proj_name || !reportData.sector) {
      return;
    }
    // If we have an entry for pers_spir, run the signUpUser function
    //enterReport(reportData.pers_spir, reportData.pers_emot, reportData.pers_health, reportData.pers_pr_req);
    enterReport(reportData.proj_name, reportData.proj_address, reportData.proj_city, reportData.proj_county, reportData.proj_state, reportData.proj_desc, reportData.bldg_size, reportData.proj_mgr, reportData.proj_sup, reportData.architect, reportData.civil_eng, reportData.mech_eng, reportData.plumb_eng, reportData.land_arch, reportData.int_design, reportData.sched_start, reportData.sched_compl, reportData.sched_reason, reportData.init_budget, reportData.final_budget, reportData.budget_reason, reportData.sector, reportData.const_type, reportData.leed, reportData.awards, reportData.proj_challenges, reportData.proj_strengths, reportData.UserId);
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
  function enterReport(proj_name, proj_address, proj_city, proj_county, proj_state, proj_desc, bldg_size, proj_mgr, proj_sup, architect, civil_eng, mech_eng, elec_eng, plumb_eng, land_arch, int_design, sched_start, sched_compl, sched_reason, init_budget, final_budget, budget_reason, sector, const_type, leed, awards, proj_challenges, proj_strengths, UserId) {
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