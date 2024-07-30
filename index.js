let valid = false;
function validateEmail() {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    document.getElementById("invalid-email").style = "display:block";
    valid = false;
    return;
  }
  document.getElementById("invalid-email").style = "display:none";
  valid = true;
}
function validatePhoneNumber() {
  var phoneInput = document.getElementById("cNo");
  var phoneNumber = phoneInput.value;

  var phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneNumber)) {
    document.getElementById("invalid-phone").style = "display:block";
    valid = false;
    return;
  }
  document.getElementById("invalid-phone").style = "display:none";
  valid = true;
}

let eduCounter = 2;
function addNewEdu() {
  eduCounter++;
  let newCourse = document.createElement("label");
  newCourse.textContent = "Education";
  newCourse.className = "col-lg-3";
  newCourse.id = "Newcourse" + eduCounter;
  let courseName = document.createElement("input");
  courseName.className = "form-control col-lg-3";
  courseName.id = "course" + eduCounter;
  let empty = document.createElement("label");
  empty.className = "col-lg-6";
  empty.id = "empty" + eduCounter;

  let newClgLabel = document.createElement("label");
  newClgLabel.textContent = "College Name";
  newClgLabel.className = "col-lg-3 mt-4";
  newClgLabel.id = "clgLabel" + eduCounter;
  let clgName = document.createElement("input");
  clgName.className = "form-control col-lg-3 mt-4";
  clgName.id = "clg" + eduCounter;

  let cgpaLabel = document.createElement("label");
  cgpaLabel.textContent = "CGPA";
  cgpaLabel.className = "col-lg-3 mt-4 text-lg-right";
  cgpaLabel.id = "cgpaLabel" + eduCounter;
  let cgpaInput = document.createElement("input");
  cgpaInput.className = "form-control col-lg-3 mt-4 ";
  cgpaInput.id = "cgpa" + eduCounter;

  let eduObject = document.getElementById("addEdu");
  let eduButton = document.getElementById("eduButton");

  eduObject.insertBefore(newCourse, eduButton);
  eduObject.insertBefore(courseName, eduButton);
  eduObject.insertBefore(empty, eduButton);
  eduObject.insertBefore(newClgLabel, eduButton);
  eduObject.insertBefore(clgName, eduButton);
  eduObject.insertBefore(cgpaLabel, eduButton);
  eduObject.insertBefore(cgpaInput, eduButton);
}

function removeEdu() {
  if (eduCounter > 2) {
    let ele1 = document.getElementById("Newcourse" + eduCounter);
    let ele2 = document.getElementById("course" + eduCounter);
    let ele3 = document.getElementById("empty" + eduCounter);
    let ele4 = document.getElementById("clgLabel" + eduCounter);
    let ele5 = document.getElementById("clg" + eduCounter);
    let ele6 = document.getElementById("cgpaLabel" + eduCounter);
    let ele7 = document.getElementById("cgpa" + eduCounter);
    ele1.remove();
    ele2.remove();
    ele3.remove();
    ele4.remove();
    ele5.remove();
    ele6.remove();
    ele7.remove();
    eduCounter--;
  }
}

let SkillCounter = 5;
function addNewSkill() {
  SkillCounter++;
  let newSkill = document.createElement("input");
  newSkill.className = "form-control col-2 mt-2 ml-3 mr-2";
  newSkill.id = "skill" + SkillCounter;

  let skillObj = document.getElementById("skillContainer");
  let skillAddButton = document.getElementById("addSkill");

  skillObj.insertBefore(newSkill, skillAddButton);
}

function removeSkill() {
  if (SkillCounter > 1) {
    let ele = document.getElementById("skill" + SkillCounter);
    ele.remove();
    SkillCounter--;
  }
}

let ProjectCounter = 1;
function addNewProject() {
  ProjectCounter++;
  let projectTitleLabel = document.createElement("label");
  projectTitleLabel.textContent = "Project Title" + " " + ProjectCounter;
  projectTitleLabel.className = "col-lg-3 mt-2";
  projectTitleLabel.id = "titleLabel" + ProjectCounter;

  let projectTitle = document.createElement("input");
  projectTitle.className = "form-control col-lg-9 mt-2";
  projectTitle.id = "projectTitle" + ProjectCounter;

  let projectDescLabel = document.createElement("label");
  projectDescLabel.textContent = "Project Description";
  projectDescLabel.className = "col-lg-3 mt-2";
  projectDescLabel.id = "descLabel" + ProjectCounter;

  let projectDesc = document.createElement("textarea");
  projectDesc.className = "form-control col-lg-9 mt-2";
  projectDesc.id = "projectDesc" + ProjectCounter;

  let projectObj = document.getElementById("projectContainer");
  let projectAddButton = document.getElementById("addProjects");

  projectObj.insertBefore(projectTitleLabel, projectAddButton);
  projectObj.insertBefore(projectTitle, projectAddButton);
  projectObj.insertBefore(projectDescLabel, projectAddButton);
  projectObj.insertBefore(projectDesc, projectAddButton);
}

function removeProject() {
  if (ProjectCounter > 1) {
    let ele1 = document.getElementById("titleLabel" + ProjectCounter);
    let ele2 = document.getElementById("projectTitle" + ProjectCounter);
    let ele3 = document.getElementById("descLabel" + ProjectCounter);
    let ele4 = document.getElementById("projectDesc" + ProjectCounter);
    ele1.remove();
    ele2.remove();
    ele3.remove();
    ele4.remove();
    ProjectCounter--;
  }
}

certificationCounter = 1;
function addNewCertification() {
  certificationCounter++;
  let ele = document.createElement("label");
  ele.id = "label" + certificationCounter;
  ele.classList.add("col-3");

  let certification = document.createElement("input");
  certification.className = "form-control col-9 mt-2";
  certification.id = "certification" + certificationCounter;

  let certificationObj = document.getElementById("certificateContainer");
  let certificationAddButton = document.getElementById("addCertification");

  certificationObj.insertBefore(ele, certificationAddButton);
  certificationObj.insertBefore(certification, certificationAddButton);
}

function removeCertification() {
  if (certificationCounter > 1) {
    let ele1 = document.getElementById("certification" + certificationCounter);
    ele1.remove();
    let ele2 = document.getElementById("label" + certificationCounter);
    ele2.remove();
    certificationCounter--;
  }
}

function generateResume() {
  if (!valid) {
    return;
  }
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;

  let about = document.getElementById("about").value;
  document.getElementById("resumeAbout").innerHTML = about;

  let cNo = document.getElementById("cNo").value;
  let email = document.getElementById("email").value;

  document.getElementById("fullName").innerHTML = firstName + " " + lastName;
  document.getElementById("resumeEmail").innerHTML += email;
  document.getElementById("resumePhone").innerHTML += cNo;

  let presentEdu = document.getElementById("presentDegree").value;
  let presentClg = document.getElementById("presentCollege").value;
  let presentCGPA = document.getElementById("presentCGPA").value;

  document.getElementById("rPresentCourse").innerHTML = presentEdu;
  let newlist = document.getElementById("presentEducation");
  let newItem1 = document.createElement("li");
  newItem1.textContent = "College : " + presentClg;
  newlist.appendChild(newItem1);
  if (presentCGPA != "") {
    let newItem2 = document.createElement("li");
    newItem2.textContent = "CGPA : " + presentCGPA;
    newlist.appendChild(newItem2);
  }

  let previousEdu = document.getElementById("previousDegree").value;
  let previousClg = document.getElementById("previousCollege").value;
  let previousCGPA = document.getElementById("previousCGPA").value;
  document.getElementById("rPreviousCourse").innerHTML = previousEdu;
  newlist = document.getElementById("previousEducation");
  newItem1 = document.createElement("li");
  newItem1.textContent = "College : " + previousClg;
  newlist.appendChild(newItem1);
  if (previousCGPA != "") {
    let newItem2 = document.createElement("li");
    newItem2.textContent = "CGPA : " + previousCGPA;
    newlist.appendChild(newItem2);
  }

  var skillsArray = [];
  for (var i = 1; i <= SkillCounter; i++) {
    var element = document.getElementById("skill" + i);
    if (element) {
      skillsArray.push(element.value); // Push value to the array
    }
  }

  newSkillSet1 = document.getElementById("skillSet1");
  for (var i = 0; i < skillsArray.length; i++) {
    if (skillsArray[i].length != 0) {
      newItem1 = document.createElement("li");
      newItem1.className = "col-6";
      newItem1.textContent = skillsArray[i];
      newSkillSet1.appendChild(newItem1);
    }
  }

  newProjectSet = document.getElementById("rProjects");
  for (var i = 1; i <= ProjectCounter; i++) {
    let nList = document.createElement("li");
    let dTitle = document.createElement("dt");
    dTitle.textContent = document.getElementById("projectTitle" + i).value;
    nList.appendChild(dTitle);
    let dDesc = document.createElement("dd");
    dDesc.textContent = document.getElementById("projectDesc" + i).value;
    nList.appendChild(dDesc);
    newProjectSet.appendChild(nList);
  }

  certificateArray = [];
  for (var i = 1; i <= certificationCounter; i++) {
    var element = document.getElementById("certification" + i).value;
    if (element.length != 0) {
      certificateArray.push(element); // Push value to the array
    }
  }
  certificateHeading = document.getElementById("rCertHeading");
  if (certificateArray.length > 0) {
    newHeading = document.createElement("h4");
    newHeading.textContent = "Certifications";
    newHeading.id = "CertificateHead";
    newHeading.classList.add("col-12");
    certificateHeading.appendChild(newHeading);
    const parentElement = document.getElementById("parentDiv");
    const hrElement = document.createElement("hr");
    parentElement.insertBefore(hrElement, certificateHeading);

    certificate = document.getElementById("rCertificate");
    for (var i = 0; i < certificateArray.length; i++) {
      if (certificateArray[i] != "") {
        newItem1 = document.createElement("li");
        newItem1.className = "col-12";
        newItem1.textContent = certificateArray[i];
        certificate.appendChild(newItem1);
      }
    }
  }

  let interests = document.getElementById("interest").value.split(",");
  let interestSet = document.getElementById("rInterests");
  for (var i = 0; i < interests.length; i++) {
    if (interests[i].length != 0) {
      newItem1 = document.createElement("li");
      newItem1.className = "col-6";
      newItem1.textContent = interests[i];
      interestSet.appendChild(newItem1);
    }
  }

  let linkedinLink = document.getElementById("linkedin").value;
  document.getElementById("resumeLinkedin").href = linkedinLink;
  document.getElementById("resumeLinkedin").innerHTML += linkedinLink;
  let githubLink = document.getElementById("github").value;
  document.getElementById("resumeGithub").href = githubLink;
  document.getElementById("resumeGithub").innerHTML = githubLink;

  // document.getElementById("inputForm").style.display = "none";
  // document.getElementById("template").style.display = "block";

  // Validation
  if (
    about != "" &&
    firstName != "" &&
    cNo != "" &&
    email != "" &&
    presentEdu != "" &&
    presentClg != "" &&
    previousEdu != "" &&
    previousClg != "" &&
    previousCGPA != "" &&
    skillsArray.length != 0 &&
    interests.length != 0 &&
    document.getElementById("github").value != "" &&
    document.getElementById("linkedin").value != ""
  ) {
    document.getElementById("inputForm").style.display = "none";
    document.getElementById("template").style.display = "block";
  } else {
    alert("Input all values");
  }
}

function printDiv() {
  var printContents = document.getElementById("printable").innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}
