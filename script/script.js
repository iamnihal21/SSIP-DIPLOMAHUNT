// Start time of the SCript
const startTime = new Date();

// Google Sheet config
const sheetId = "1yHd9LruwJGYuuHuWX5oHKK8AmTdbscqYQNNEsSiwuko";
const apiKey = "AIzaSyDfdTtPMhqb_Fye-HA_aJ_LFJDobBZCpJ4";

// URL to retrieve data from Google Sheet API
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

// let myCity = "ALL";
// let myBranch = "COMPUTER ENGG";
// let myCollege = "ALL";
// let myCollegeType = "GOV";
// let meritMark = "220";
// let myCategory = "OPEN";
let myCity;
let myBranch;
let myCollege;
let myCollegeType;
let meritMark;
let myCategory;
const outputArea = document.querySelector('#outputArea')

const meritList = []

function data() {
    outputArea.innerHTML = ''
    meritMark = document.querySelector('#mark').value
    myBranch = document.querySelector('#branch').value
    myCollege = document.querySelector('#college').value
    myCollegeType = document.querySelector('#type').value
    myCategory = document.querySelector('#category').value
    myCity = document.querySelector('#city').value

    for (let i = 0; i < 10; i++) // returns a Boolean value
    {
        // console.log(isMark(meritMark, myCategory, meritList[i]),
        //     isBranch(myBranch, meritList[i].COURSE_NAME),
        //     iSCollegeType(myCollegeType, meritList[i].COLLEGE_TYPE),
        //     iSCity(myCity, meritList[i].CITY_NAME),
        //     iSCollege(myCollege, meritList[i].COLLEGE_NAME));


        if (isMark(meritMark, myCategory, meritList[i]) &&
            isBranch(myBranch, meritList[i].COURSE_NAME) &&
            isCollegeType(myCollegeType, meritList[i].COLLEGE_TYPE) &&
            isCity(myCity, meritList[i].CITY_NAME) &&
            isCollege(myCollege, meritList[i].COLLEGE_NAME)) {

            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.innerHTML = meritList[i].COLLEGE_NAME
            td2.innerHTML = meritList[i].COURSE_NAME

            if (myCategory == "OPEN") {
                td3.innerHTML += `${meritList[i].OPEN}`
            }
            else if (myCategory == "EWS") {
                td3.innerHTML += `${meritList[i].EWS}`
            }
            else if (myCategory == "SC") {
                td3.innerHTML += `${meritList[i].SC}`
            }
            else if (myCategory == "SEBC") {
                td3.innerHTML += `${meritList[i].SEBC}`
            }
            else if (myCategory == "ST") {
                td3.innerHTML += `${meritList[i].ST}`
            }
            else { }
            outputArea.innerHTML += '\n'
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            outputArea.appendChild(tr);
        }
    }
}

function isMark(mark, category, myMarit) {
    if (category == "OPEN") {
        if (parseInt(mark) > (parseInt(myMarit.OPEN) - 2)) {
            return true;
        } else {
            return false;
        }
    }

    else if (category == "EWS") {
        if (myMarit[2] == "-" || myMarit[2] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.EWS) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    }

    else if (category == "SC") {
        if (myMarit[3] == "-" || myMarit[3] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.SC) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else if (category == "SEBC") {
        if (myMarit[4] == "-" || myMarit[4] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.SEBC) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else if (category == "ST") {
        if (myMarit[5] == "-" || myMarit[5] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.ST) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

function isCity(city, myMarit) {
    if (city == "ALL") {
        return true;
    }
    else {
        if (city == myMarit) {
            return true;
        } else {
            return false;
        }
    }
}

function isBranch(branch, myMarit) {
    if (branch == "ALL") {
        return true;
    }
    else {
        if (branch == myMarit) {
            return true;
        } else {
            return false;
        }
    }
}

function isCollege(college, myMarit) {
    if (college == "ALL") {
        return true;
    }
    else {
        if (college == myMarit) {
            return true;
        } else {
            return false;
        }
    }
}

function isCollegeType(collegetype, myMarit) {
    if (collegetype == "ALL") {
        return true;
    }
    else {
        if (collegetype == myMarit) {
            return true;
        } else {
            return false;
        }
    }
}

// Fetch data from Google Sheet
const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const values = data.values;

        if (values.length) {
            const headers = values[0];

            for (let i = 1; i < values.length; i++) {
                const dataObject = {};
                headers.forEach((header, index) => {
                    dataObject[header] = values[i][index];
                });
                meritList.push(dataObject);
            }
        } else {
            console.error("No data found in the Google Sheet");
        }
        console.log(meritList);
    } catch (error) {
        console.error(error);
    }
};

fetchData();

// End time of the SCript
const endTime = new Date();

// Total time taken by SCript
const timeDifference = endTime - startTime;
console.log(`${timeDifference} Milisecond`)