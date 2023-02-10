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
    meritMark = document.querySelector('#student_mark').value
    myBranch = document.querySelector('#branch_name').value
    myCollege = document.querySelector('#college_name').value
    myCollegeType = document.querySelector('#college_type').value
    myCategory = document.querySelector('#student_category').value
    myCity = document.querySelector('#city_name').value
    console.log(meritMark, myBranch, myCollege,myCollegeType,myCategory,myCity)
    for (let i = 0; i < meritList.length; i++) {
        console.log(isMark(meritMark, myCategory, meritList[i]) &&
        isBranch(myBranch, meritList[i].COURSE_NAME) &&
        isCollegeType(myCollegeType, meritList[i].COLLEGE_TYPE) &&
        isCity(myCity, meritList[i].CITY_NAME) &&
        isCollege(myCollege, meritList[i].COLLEGE_NAME));


        if (isMark(meritMark, myCategory, meritList[i]) &&
            isBranch(myBranch, meritList[i].COURSE_NAME) &&
            isCollegeType(myCollegeType, meritList[i].COLLEGE_TYPE) &&
            isCity(myCity, meritList[i].CITY_NAME) &&
            isCollege(myCollege, meritList[i].COLLEGE_NAME)) {

            let div = document.createElement('div');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');
            let s1 = document.createElement('span');
            let s2 = document.createElement('span');
            let s3 = document.createElement('span');
            let s4 = document.createElement('span');
            let s5 = document.createElement('span');

            s1.innerHTML = meritList[i].COLLEGE_NAME
            s2.innerHTML = meritList[i].COURSE_NAME

            if (myCategory == "OPEN") {
                s3.innerHTML = `${meritList[i].OPEN}`
            }
            else if (myCategory == "EWS") {
                s3.innerHTML = `${meritList[i].EWS}`
            }
            else if (myCategory == "SC") {
                s3.innerHTML = `${meritList[i].SC}`
            }
            else if (myCategory == "SEBC") {
                s3.innerHTML = `${meritList[i].SEBC}`
            }
            else if (myCategory == "ST") {
                s3.innerHTML = `${meritList[i].ST}`
            }
            else { }
            s4.innerHTML = `${meritList[i].CITY_NAME}`
            s5.innerHTML = `${meritList[i].COLLEGE_TYPE}`

            p1.innerHTML = "College: ";
            p2.innerHTML = "Branch: ";
            p3.innerHTML = "Merit: ";
            p4.innerHTML = "City: ";
            p5.innerHTML = "College Type: ";

            p1.appendChild(s1);
            p2.appendChild(s2);
            p3.appendChild(s3);
            p4.appendChild(s4);
            p5.appendChild(s5);

            div.classList.add('result_success')
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4);
            div.appendChild(p5);

            document.getElementById('find_college_output').appendChild(div)
        }
    }
}

function isMark(mark, category, myMarit) {
    console.log(myMarit);
    if (category == "OPEN") {
        if (parseInt(mark) > (parseInt(myMarit.OPEN) - 2)) {
            return true;
        } else {
            return false;
        }
    }

    else if (category == "EWS") {
        if (myMarit.EWS == "0" || myMarit.EWS == "")
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
        if (myMarit.SC == "0" || myMarit.SC == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.SC) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else if (category == "SEBC") {
        if (myMarit.SEBC == "0" || myMarit.SEBC == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.SEBC) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else if (category == "ST") {
        if (myMarit.ST == "0" || myMarit.ST == "")
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