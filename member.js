function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsText = document.getElementById("memberSkillsText");
    var memberSkillsValue = document.getElementById("memberSkillsValue");
    var memberSkillsValueText = document.getElementById("memberSkillsValueText");

    if (memberValue == "1") {
        memberSkills.style.display = "block";
        memberSkillsText.style.display = "block";
        memberSkillsValue.style.display = "block";
        memberSkillsValueText.style.display = "block";
    } else {
        memberSkills.style.display = "none";
        memberSkillsText.style.display = "none";
        memberSkillsValue.style.display = "none";
        memberSkillsValueText.style.display = "none";
    }
}