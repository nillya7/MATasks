// Database for the form

const MARequesterDropdown = [
    {
        name: "eToro Crypto",
        demandLevel: 10
    },
    {
        name: "eToro Money",
        demandLevel: 10
    },
    {
        name: "Management",
        demandLevel: 10
    },
    {
        name: "RM",
        demandLevel: 9
    },
    {
        name: "eToro Crypto",
        demandLevel: 10
    },
    {
        name: "Club",
        demandLevel: 8
    },
    {
        name: "eToro Crypto",
        demandLevel: 10
    },
    {
        name: "Media",
        demandLevel: 7
    },
    {
        name: "AUM",
        demandLevel: 6
    },
    {
        name: "Compliance",
        demandLevel: 6
    },
    {
        name: "UK Team",
        demandLevel: 5
    },
    {
        name: "Affiliates",
        demandLevel: 5
    },
    {
        name: "Marketing teams",
        demandLevel: 5
    },
    {
        name: "Product",
        demandLevel: 4
    },
    {
        name: "CS",
        demandLevel: 3
    },
    {
        name: "AU team",
        demandLevel: 3
    },
    {
        name: "SEA team",
        demandLevel: 3
    },
    {
        name: "Marketing Automation",
        demandLevel: 1
    },
    {
        name: "Security",
        demandLevel: 1
    },
    {
        name: "US Team",
        demandLevel: 1
    }
];

const MACampaignTypeDropdown = [
    {
        name: "Journey",
        timeToCreateInHours: 2.5,
        segmentTypeName: "SQL",
        segmentTypeValue: 1
    },
    {
        name: "Transact",
        timeToCreateInHours: 0.17,
        segmentTypeName: "API Call",
        segmentTypeValue: 1
    },
    {
        name: "File Drop",
        timeToCreateInHours: 0.17,
        segmentTypeName: "List",
        segmentTypeValue: 1
    },
    {
        name: "Automation",
        timeToCreateInHours: 1.5,
        segmentTypeName: "SQL",
        segmentTypeValue: 1
    },
    {
        name: "Evergreen Recurring",
        timeToCreateInHours: 1.75,
        segmentTypeName: "List",
        segmentTypeValue: 1
    },
    {
        name: "Changing Recurring",
        timeToCreateInHours: 1,
        segmentTypeName: "List/RDE Filter",
        segmentTypeValue: 1
    },
    {
        name: "Design Element",
        timeToCreateInHours: 1,
        segmentTypeName: "",
        segmentTypeValue: 0
    },
    {
        name: "Ad Hoc",
        timeToCreateInHours: 2.5,
        segmentTypeName: "List/RDE Filter",
        segmentTypeValue: 1
    },
    {
        name: "Element",
        timeToCreateInHours: 4,
        segmentTypeName: "",
        segmentTypeValue: 0
    },
    {
        name: "Not a campaign",
        timeToCreateInHours: 0,
        segmentTypeName: "",
        segmentTypeValue: 0
    }
];

const MAElementDropdown = [
    {
        name: "Email",
        timeToCreateInHours: 0.3
    },
    {
        name: "Notification",
        timeToCreateInHours: 0.17
    },
    {
        name: "Intercom",
        timeToCreateInHours: 0.3
    },
    {
        name: "Email & Notification",
        timeToCreateInHours: 0.50
    },
    {
        name: "Email & Intercom",
        timeToCreateInHours: 0.67
    },
    {
        name: "Notification & Intercom",
        timeToCreateInHours: 0.50
    },
    {
        name: "Email & Notification & Intercom",
        timeToCreateInHours: 0.83
    },
    {
        name: "Customer Journey Builder",
        timeToCreateInHours: 6
    },
    {
        name: "Automation Studio",
        timeToCreateInHours: 4
    },
    {
        name: "Frida Element",
        timeToCreateInHours: 5
    },
    {
        name: "Design Element",
        timeToCreateInHours: 0.5
    },
    {
        name: "Footer change",
        timeToCreateInHours: 1
    },
    {
        name: "Dynamic content in emails",
        timeToCreateInHours: 2
    },
    {
        name: "Basic email template",
        timeToCreateInHours: 10
    },
    {
        name: "Other",
        timeToCreateInHours: 1
    }
    
];

const MAProjectDropdown = [
    {
        name: "Lifecycle Stages",
        ComplexityLevel: 10
    },
    {
        name: "Verification",
        ComplexityLevel: 8
    },
    {
        name: "Airdrop",
        ComplexityLevel: 8
    },
    {
        name: "eToro Money",
        ComplexityLevel: 8
    },
    {
        name: "Core journeys and automated campaigns",
        ComplexityLevel: 6
    },
    {
        name: "Market Activities (marketing)",
        ComplexityLevel: 6
    },
    {
        name: "eToro Crypto",
        ComplexityLevel: 6
    },
    {
        name: "Club",
        ComplexityLevel: 6
    },
    {
        name: "RAF",
        ComplexityLevel: 5
    },
    {
        name: "AUM",
        ComplexityLevel: 4
    },
    {
        name: "Educational Content ",
        ComplexityLevel: 3
    },
    {
        name: "Triggered Transacts",
        ComplexityLevel: 3
    },
    {
        name: "Operational issues",
        ComplexityLevel: 3
    },
    {
        name: "Affiliates",
        ComplexityLevel: 3
    },
    {
        name: "Incentive Promotions",
        ComplexityLevel: 2
    },
    {
        name: "Volatility Alerts",
        ComplexityLevel: 2
    },
    {
        name: "Webinars",
        ComplexityLevel: 1
    },
    {
        name: "Product Updates & General Launches",
        ComplexityLevel: 1
    },
    {
        name: "Reviews",
        ComplexityLevel: 1
    },
    {
        name: "Technical issues",
        ComplexityLevel: 1
    }   
];

const MASpecialistSeniorityDropdown = [
    {
        name: "Expirienced (more than 1 year)",
        SeniorityLevel: 1
    },
    {
        name: "New (7-12 months)",
        SeniorityLevel: 1.5
    },
    {
        name: "New (3-6 months)",
        SeniorityLevel: 1.8
    } 
];

const MAPriorityDropdown = [
    {
        name: "High",
        demandingLevel: 10
    },
    {
        name: "Medium",
        demandingLevel: 6
    },
    {
        name: "Low",
        demandingLevel: 1
    } 
];



// Push the values from arrays to the form
const MARequester = document.getElementById('MARequester');
const MACampaignType = document.getElementById('MACampaignType');
const segmentArea = document.getElementById('segmentArea');
const MAElement = document.getElementById('MAElement');
const MAProject = document.getElementById('MAProject');
const MASpecialistSeniority = document.getElementById('MASpecialistSeniority');
const MAPriority = document.getElementById('MAPriority');
const TaskResults = document.getElementById('TaskResults');


// edit the data area
/*
const editDataArea = document.getElementById('editDataArea');
const editTheDataBtn = document.createElement('button');
editTheDataBtn.innerHTML = "he";
editDataArea.classList = "editTheDataBtn";
editDataArea.appendChild(editTheDataBtn);
*/

// load form function
function loadFormContent() {
    // MARequester
    const MARequesterDropdownEmptyOptions = document.createElement('option');
    MARequesterDropdownEmptyOptions.value = 0;
    //MARequesterDropdownEmptyOptions.innerText = "";
    MARequester.appendChild(MARequesterDropdownEmptyOptions);

    for (let i = 0; i < MARequesterDropdown.length; i++ ) {
        let MARequesterDropdownOptions = document.createElement('option');
        MARequesterDropdownOptions.value = MARequesterDropdown[i].demandLevel;
        MARequesterDropdownOptions.innerText = MARequesterDropdown[i].name;
        MARequester.appendChild(MARequesterDropdownOptions);
    }
    
    // MACampaignType
    const MACampaignTypeDropdownEmptyOptions = document.createElement('option');
    MACampaignTypeDropdownEmptyOptions.value = 0;
    MACampaignTypeDropdownEmptyOptions.innerText = "";
    MACampaignType.appendChild(MACampaignTypeDropdownEmptyOptions);

    for (let i = 0; i < MACampaignTypeDropdown.length; i++ ) {
        let MACampaignTypeDropdownOptions = document.createElement('option');
        MACampaignTypeDropdownOptions.value = MACampaignTypeDropdown[i].timeToCreateInHours;
        MACampaignTypeDropdownOptions.innerText = MACampaignTypeDropdown[i].name;
        MACampaignType.appendChild(MACampaignTypeDropdownOptions);
    }

    // Element 
    const MAElementDropdownEmptyOptions = document.createElement('option');
    MAElementDropdownEmptyOptions.value = 0;
    MAElementDropdownEmptyOptions.innerText = "";
    MAElement.appendChild(MAElementDropdownEmptyOptions);

    for (let i = 0; i < MAElementDropdown.length; i++ ) {
        let MAElementDropdownOptions = document.createElement('option');
        MAElementDropdownOptions.value = MAElementDropdown[i].timeToCreateInHours;
        MAElementDropdownOptions.innerText = MAElementDropdown[i].name;
        MAElement.appendChild(MAElementDropdownOptions);
    }

    
    // MAProject
    const MAProjectDropdownEmptyOptions = document.createElement('option');
    MAProjectDropdownEmptyOptions.value = 0;
    MAProjectDropdownEmptyOptions.innerText = "";
    MAProject.appendChild(MAProjectDropdownEmptyOptions);

    for (let i = 0; i < MAProjectDropdown.length; i++ ) {
        let MAProjectDropdownOptions = document.createElement('option');
        MAProjectDropdownOptions.value = MAProjectDropdown[i].ComplexityLevel;
        MAProjectDropdownOptions.innerText = MAProjectDropdown[i].name;
        MAProject.appendChild(MAProjectDropdownOptions);
    }


    // MASpecialistSeniority
    const MASpecialistSeniorityDropdownEmptyOptions = document.createElement('option');
    MASpecialistSeniorityDropdownEmptyOptions.value = 0;
    MASpecialistSeniorityDropdownEmptyOptions.innerText = "";
    MASpecialistSeniority.appendChild(MASpecialistSeniorityDropdownEmptyOptions);

    for (let i = 0; i < MASpecialistSeniorityDropdown.length; i++ ) {
        let MASpecialistSeniorityDropdownOptions = document.createElement('option');
        MASpecialistSeniorityDropdownOptions.value = MASpecialistSeniorityDropdown[i].SeniorityLevel;
        MASpecialistSeniorityDropdownOptions.innerText = MASpecialistSeniorityDropdown[i].name;
        MASpecialistSeniority.appendChild(MASpecialistSeniorityDropdownOptions);
    }

    // MAPriority
    const MAPriorityDropdownEmptyOptions = document.createElement('option');
    MAPriorityDropdownEmptyOptions.value = 0;
    MAPriorityDropdownEmptyOptions.innerText = "";
    MAPriority.appendChild(MAPriorityDropdownEmptyOptions);

    for (let i = 0; i < MAPriorityDropdown.length; i++ ) {
        let MAPriorityDropdownOptions = document.createElement('option');
        MAPriorityDropdownOptions.value = MAPriorityDropdown[i].demandingLevel;
        MAPriorityDropdownOptions.innerText = MAPriorityDropdown[i].name;
        MAPriority.appendChild(MAPriorityDropdownOptions);
    }

}

document.addEventListener("DOMContentLoaded", loadFormContent())


// calculation function
const calculationBtn = document.getElementById('calculateBtn');
calculationBtn.addEventListener ('click', getResult);

function getResult() {
    let MARequesterSelectedValue = Number(MARequester.options[MARequester.selectedIndex].value);
    let MACampaignTypeSelectedValue = Number(MACampaignType.options[MACampaignType.selectedIndex].value);
    let MACampaignTypeSelectedName = MACampaignType.options[MACampaignType.selectedIndex].text;
    let MAElementSelectedValue = Number(MAElement.options[MAElement.selectedIndex].value);
    let MAProjectSelectedValue = Number(MAProject.options[MAProject.selectedIndex].value);
    let MASpecialistSenioritySelectedValue = Number(MASpecialistSeniority.options[MASpecialistSeniority.selectedIndex].value);
    let MAPrioritySelectedValue = Number(MAPriority.options[MAPriority.selectedIndex].value);

    // get the Segment Type
    let segmentTypeValue = 0;
    let segmentTypeName = "";

    for (let i = 0; i<MACampaignTypeDropdown.length; i++) {
        if(MACampaignTypeDropdown[i].name === MACampaignTypeSelectedName) {
            segmentTypeName = MACampaignTypeDropdown[i].segmentTypeName
            segmentTypeValue = MACampaignTypeDropdown[i].segmentTypeValue
        }
        
    }

    if (segmentTypeName === "") {
        segmentArea.innerText = "Please select MA Campaign type"
    } else {
        segmentArea.innerText = "The Segment Type is " + segmentTypeName;
    }

    let estimatedNetMAWorkHours = Math.round(((MACampaignTypeSelectedValue + MAElementSelectedValue) + (MAProjectSelectedValue / 25)) * MASpecialistSenioritySelectedValue * 10 ) / 10
    let stressLevelOfTask = Math.round((MARequesterSelectedValue + MACampaignTypeSelectedValue + MAElementSelectedValue + MAProjectSelectedValue + segmentTypeValue) * (MAPrioritySelectedValue / 2) * 10) / 10
    
    
    // The Output Area for the user
    let titleRestult = document.createElement('div');
    titleRestult.innerText = "Task: ";
    titleRestult.classList = "taskName";
    TaskResults.appendChild(titleRestult)

    let taskNameForm = document.getElementById('TaskName');
    let taskNameSpan = document.createElement('span');
    taskNameSpan.innerText = taskNameForm.value
    titleRestult.appendChild(taskNameSpan)
    
    let estimatedTimeResults = document.createElement('div');
    estimatedTimeResults.innerText = "Estimation of " + estimatedNetMAWorkHours + " working hours";
    estimatedTimeResults.id = "estimatedTimeResults";

    let stressLevelOfTaskResults = document.createElement('div');
    stressLevelOfTaskResults.innerText = "The stress level involved in this task is " + stressLevelOfTask + "%";
    stressLevelOfTaskResults.id = "stressLevelOfTask";

    let divDivider = document.createElement('div');
    divDivider.classList = "divDivider"
    let divider = document.createElement('hr');
    divider.classList = "divider";

    TaskResults.appendChild(stressLevelOfTaskResults)
    TaskResults.appendChild(estimatedTimeResults)
    TaskResults.appendChild(divDivider)
    divDivider.appendChild(divider)
    


    //calculationBtn.disabled = true;
}





