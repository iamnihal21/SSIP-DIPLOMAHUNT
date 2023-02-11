// Start time of the SCript
const startTime = new Date();

// Google Sheet config
const sheetId = "1yHd9LruwJGYuuHuWX5oHKK8AmTdbscqYQNNEsSiwuko";
const apiKey = "AIzaSyDfdTtPMhqb_Fye-HA_aJ_LFJDobBZCpJ4";

// URL to retrieve data from Google Sheet API
const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Final?key=${apiKey}`;
const collegeUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Links_Of_collages?key=${apiKey}`;
const tutotialUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Tutorial?key=${apiKey}`;

let myCity;
let myBranch;
let myCollege;
let myCollegeType;
let meritMark;
let myCategory;
const outputArea = document.querySelector('#find_college_output')
const tutotial_videos = document.querySelector('#tutotial_videos')

const meritList = []
const branch = []
const college = []
const city = []
const category = []
const college_url = []
const tutorial_video = []

function data() {
    outputArea.innerHTML = ''
    meritMark = document.querySelector('#student_mark').value
    myBranch = document.querySelector('#branch_name').value
    myCollege = document.querySelector('#college_name').value
    myCollegeType = document.querySelector('#college_type').value
    myCategory = document.querySelector('#student_category').value
    myCity = document.querySelector('#city_name').value
    // console.log(meritMark, myBranch, myCollege,myCollegeType,myCategory,myCity)

    if(meritMark == '') {
        alert('Please enter your total marks,\nTotal marks = English + Math + Science');    
        return;
    } 

    if (myCategory == 'default') {
        alert('Please select you category :D');    
        return;
    }

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
            let a = document.createElement('a');

            s1.innerHTML = meritList[i].COLLEGE_NAME;
            s2.innerHTML = meritList[i].COURSE_NAME;

            if (myCategory == "OPEN") {
                s3.innerHTML = `${meritList[i].OPEN}`;
            }
            else if (myCategory == "EWS") {
                s3.innerHTML = `${meritList[i].EWS}`;
            }
            else if (myCategory == "SC") {
                s3.innerHTML = `${meritList[i].SC}`;
            }
            else if (myCategory == "SEBC") {
                s3.innerHTML = `${meritList[i].SEBC}`;
            }
            else if (myCategory == "ST") {
                s3.innerHTML = `${meritList[i].ST}`;
            }
            else { }
            s4.innerHTML = `${meritList[i].CITY_NAME}`;
            s5.innerHTML = `${meritList[i].COLLEGE_TYPE}`;
            a.innerHTML = '&nbsp;&nbsp;<i class="fa-solid fa-link"></i>';
            a.href = meritList[i].WEBSITE_LINK;
            a.target = '_blank';

            p1.innerHTML = "College: ";
            p2.innerHTML = "Branch: ";
            p3.innerHTML = "Closing Merit: ";
            p4.innerHTML = "City: ";
            p5.innerHTML = "College Type: ";

            p1.appendChild(s1);
            p1.appendChild(a);
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

            outputArea.appendChild(div)
        }
    }

    if(outputArea.innerHTML == '') {
        p = document.createElement('p')
        p.innerHTML = "No results found. Please adjust your inputs and try again."
        p.classList.add('no-result-warning')
        outputArea.appendChild(p)
    }
}

function isMark(mark, category, myMarit) {
    if (category == "OPEN" && myMarit.OPEN != '0') {
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

function addDropdown() {
    branch_name = document.getElementById("branch_name")
    college_name = document.getElementById("college_name")
    city_name = document.getElementById("city_name")
    student_category = document.getElementById("college_type")
    
    let option = document.createElement('option');

    option.value = 'ALL';
    option.innerHTML = 'ALL';
    branch_name.appendChild(option)
    branch.sort()
    branch.forEach(function (item) {
        option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        branch_name.appendChild(option);
    })

    option.value = 'ALL';
    option.innerHTML = 'ALL';
    college_name.appendChild(option)
    college.sort()
    college.forEach(function (item) {
        option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        college_name.appendChild(option);
    })

    option.value = 'ALL';
    option.innerHTML = 'ALL';
    city_name.appendChild(option)
    city.sort()
    city.forEach(function (item) {
        option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        city_name.appendChild(option);
    })

    college_type.innerHTML = '';
    option.value = 'ALL';
    option.innerHTML = 'ALL';
    college_type.appendChild(option)
    category.forEach(function (item) {
        option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        college_type.appendChild(option);
    })
}

function addURLobject() {
    college_url.forEach(function(i) {
        meritList.forEach(function(j) {
            if(i.COLLEGE_NAME == j.COLLEGE_NAME) {
                j['WEBSITE_LINK'] = i.WEBSITE_LINK;
            }
        })
    })

    console.log(meritList)
}

// Fetch data from Google Sheet of college URLs
const fetchCollegeUrl = async () => {
    try {
        const response = await fetch(collegeUrl);
        const data = await response.json();

        const values = data.values;

        if (values.length) {
            const headers = values[0];

            for (let i = 1; i < values.length; i++) {
                const dataObject = {};
                headers.forEach((header, index) => {
                    dataObject[header] = values[i][index];
                });
                college_url.push(dataObject);
            }

            addDropdown();
            addURLobject();
        } else {
            console.error("No data found in the Links_Of_collages Sheet");
        }
        console.log(college_url);
    } catch (error) {
        console.error(error);
    }
}

// Fetch data from Google Sheet of merit data
const fetchData = async () => {
    try {
        const response = await fetch(dataUrl);
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
                if (!(college.includes(dataObject.COLLEGE_NAME))) { college.push(dataObject.COLLEGE_NAME); }
                if (!(branch.includes(dataObject.COURSE_NAME))) { branch.push(dataObject.COURSE_NAME); }
                if (!(city.includes(dataObject.CITY_NAME))) { city.push(dataObject.CITY_NAME); }
                if (!(category.includes(dataObject.COLLEGE_TYPE))) { category.push(dataObject.COLLEGE_TYPE) }
            }
            
            addDropdown();
            fetchCollegeUrl();
        } else {
            console.error("No data found in the Google Sheet");
        }
        // console.log(meritList);
    } catch (error) {
        console.error(error);
    }
};

fetchData();

// Add videos to html with data fetch from fetchTutorial
function addVideos() {
    tutorial_video.forEach(function (i) {
        console.log(i);
        let video = document.createElement('div');
        let h3 = document.createElement('h3');
        let iframe = document.createElement('iframe');

        h3.innerHTML = i.VIDEO_TITLE;
        iframe.innerHTML = 'Loading...'
        iframe.setAttribute('src', i.VIDEO_LINK)
        // iframe.setAttribute('height', 'auto')
        // iframe.setAttribute('width', 'auto');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');

        video.appendChild(h3);
        video.appendChild(iframe);

        tutotial_videos.appendChild(video);
    })
}

// Fetch data from Google Sheet of merit data
const fetchTutorial = async () => {
    try {
        const response = await fetch(tutotialUrl);
        const data = await response.json();

        const values = data.values;

        if (values.length) {
            const headers = values[0];

            for (let i = 1; i < values.length; i++) {
                const dataObject = {};
                headers.forEach((header, index) => {
                    dataObject[header] = values[i][index];
                });
                tutorial_video.push(dataObject);
            }
            addVideos();
        } else {
            console.error("No data found in the Tutorial Sheet");
        }
        console.log(tutorial_video);
    } catch (error) {
        console.error(error);
    }
};

fetchTutorial();

// End time of the SCript
const endTime = new Date();

// Total time taken by SCript
const timeDifference = endTime - startTime;
console.log(`${timeDifference} Milisecond`)