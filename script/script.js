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

const meritList = [
    { branch: 'BIO- MEDICAL ENGG', open: 88, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Rajkot', college: ' A.V.PAREKH TECHNICAL INSTITUTE Rajkot' },
    { branch: 'CDDM', open: 135, ews: '-', sc: '-', sebc: 124, st: '-', type: 'GOV', city: 'Rajkot', college: 'A.V.PAREKH TECHNICAL INSTITUTE Rajkot' },
    { branch: 'COMPUTER ENGG', open: 207, ews: 193, sc: 174, sebc: 201, st: 184, type: 'GOV', city: 'Rajkot', college: 'A.V.PAREKH TECHNICAL INSTITUTE Rajkot ' },
    { branch: 'ELECTRICAL ENGG', open: 92, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Rajkot', college: 'A.V.PAREKH TECHNICAL INSTITUTE Rajkot ' },
    { branch: 'ELECTRONICS & COMMUNICATION ENGG', open: 110, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Rajkot', college: 'A.V.PAREKH TECHNICAL INSTITUTE Rajkot' },
    { branch: 'INSTRUMENTATION & CONTROL', open: 115, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Rajkot', college: 'A.V.PAREKH TECHNICAL INSTITUTE Rajkot' },
    { branch: 'AUTOMOBILE ENGG', open: 94, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Surendranager', college: 'C.U.SHAH GOVT. POLYTECHNIC Surendranager' },
    { branch: 'CDDM', open: 104, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Surendranager', college: 'C.U.SHAH GOVT. POLYTECHNIC Surendranager' },
    { branch: 'CIVIL ENGG', open: 87, ews: '-', sc: '-', sebc: '-', st: '-', type: 'GOV', city: 'Surendranager', college: 'C.U.SHAH GOVT. POLYTECHNIC Surendranager' },
    { branch: 'COMPUTER ENGG', open: 171, ews: 139, sc: 136, sebc: 135, st: '-', type: 'GOV', city: 'Surendranager', college: 'C.U.SHAH GOVT. POLYTECHNIC Surendranager' },
]

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
        console.log(isMark(meritMark, myCategory, meritList[i]),
            isBranch(myBranch, meritList[i].branch),
            isCollegeType(myCollegeType, meritList[i].type),
            isCity(myCity, meritList[i].city),
            isCollege(myCollege, meritList[i].college));



        if (isMark(meritMark, myCategory, meritList[i]) &&
            isBranch(myBranch, meritList[i].branch) &&
            isCollegeType(myCollegeType, meritList[i].type) &&
            isCity(myCity, meritList[i].city) &&
            isCollege(myCollege, meritList[i].college)) {

            //                         let li = document.createElement("li");
            //   li.innerText = `${meritList[i].college} | ${meritList[i].branch} | `;

            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.innerHTML = meritList[i].college
            td2.innerHTML = meritList[i].branch

            if (myCategory == "OPEN") {
                td3.innerHTML += `${meritList[i].open}`
            }
            else if (myCategory == "EWS") {
                td3.innerHTML += `${meritList[i].ews}`
            }
            else if (myCategory == "SC") {
                td3.innerHTML += `${meritList[i].sc}`
            }
            else if (myCategory == "SEBC") {
                td3.innerHTML += `${meritList[i].sebc}`
            }
            else if (myCategory == "ST") {
                td3.innerHTML += `${meritList[i].st}`
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
        if (parseInt(mark) > (parseInt(myMarit.open) - 2)) {
            return true;
        } else {
            return false;
        }
    }

    else if (category == "EWS") {
        if (myMarit[2] == "-" || myMarit[2] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.ews) - 2)) {
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
            if (parseInt(mark) > (parseInt(myMarit.sc) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else if (category == "SEBC") {
        if (myMarit[4] == "-" || myMarit[4] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.sebc) - 2)) {
                return true;
            } else {
                return false;
            }
        }
    } else if (category == "ST") {
        if (myMarit[5] == "-" || myMarit[5] == "")
            return false;
        else {
            if (parseInt(mark) > (parseInt(myMarit.st) - 2)) {
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
