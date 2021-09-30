function selected(myid, selectorid) {
    document.getElementById(myid).style.boxShadow = 'none';
    document.getElementById(myid).style.color = 'grey';
    var e = document.getElementById(selectorid);
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    document.getElementById(resultid).innerHTML += '<h2>' + value + '<h2>';
}

function add(accumulator, a) {
    return accumulator + a;
}


function sumGDS() {
    let gds_nodes = document.querySelectorAll('input[name^="GDS"]:checked');
    console.log(gds_nodes);
    gds_array = [];
    for (i = 0; i < gds_nodes.length; i++) {
        let x = parseInt(gds_nodes[i].value);
        gds_array.push(x);
    }
    console.log(gds_array);
    let gds_sum = gds_array.reduce(add, 0);
    let gds_apathy = 0;
    if (gds_nodes.length > 14) {
        gds_apathy = parseInt(gds_nodes[1].value) + parseInt(gds_nodes[8].value) + parseInt(gds_nodes[12].value);
    } else {
        gds_apathy = 0; // this is a comment
    }

    document.getElementById('GDSResults').innerHTML = '<p>You scored ' + gds_sum +
        ' on the Geriatric Depression scale (15-item version) where scores over 5 indicate significant ' +
        'problems with depression. Your score in the apathy subscale was ' + gds_apathy + ' where scores of 2 or more indicate ' +
        'some apathy symptoms.'
}

function CASP19Total() {
    //CASP C
    let casp_c_nodes = document.querySelectorAll('select[id^="CASP19C"]');
    casp_c_array = [];
    for (i = 0; i < casp_c_nodes.length; i++) {
        let x = parseInt(casp_c_nodes[i].value);
        casp_c_array.push(x);
    }
    let casp_c_sum = casp_c_array.reduce(add, 0)
    // CASP A
    let casp_a_nodes = document.querySelectorAll('select[id^="CASP19A"]');
    casp_a_array = [];
    for (i = 0; i < casp_a_nodes.length; i++) {
        let x = parseInt(casp_a_nodes[i].value);
        casp_a_array.push(x);
    }
    let casp_a_sum = casp_a_array.reduce(add, 0)
    // CASP SR
    let casp_sr_nodes = document.querySelectorAll('select[id^="CASP19SR"]');
    casp_sr_array = [];
    for (i = 0; i < casp_sr_nodes.length; i++) {
        let x = parseInt(casp_sr_nodes[i].value);
        casp_sr_array.push(x);
    }
    let casp_sr_sum = casp_sr_array.reduce(add, 0)
    // CASP P
    let casp_p_nodes = document.querySelectorAll('select[id^="CASP19P"]');
    console.log(casp_p_nodes[0].value);
    casp_p_array = [];
    for (i = 0; i < casp_p_nodes.length; i++) {
        let x = parseInt(casp_p_nodes[i].value);
        casp_p_array.push(x);
    }
    let casp_p_sum = casp_p_array.reduce(add, 0);
    let CASPTotal = casp_p_sum + casp_sr_sum + casp_a_sum + casp_c_sum;
    let casp_background = 'The CASP-19 scale is used to measure quality of life in older people. ' +
        'Higher scores suggest higher quality of life and the scale is broken into multiple areas or "sub-domains".'
    document.getElementById('CASP19OutputDiv').innerHTML = casp_background + ' You scored ' + casp_c_sum +
        ' on the "Control" subdomain, ' + casp_a_sum + ' on the "Autonomy" subdomain, ' + casp_sr_sum + ' on the "Self-Realisation"' +
        ' sub-domain, and ' + casp_p_sum + ' on the "Pleasure" subdomain, with an overall score of ' + CASPTotal;
}

function showhiderefs(refsdiv) {
    var x = document.getElementById(refsdiv);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function sumEQ5D() {
    let eq5d_nodes = document.querySelectorAll('select[id^="EQ5D"]');
    eq5d_array = [];
    for (i = 0; i < eq5d_nodes.length; i++) {
        let x = parseInt(eq5d_nodes[i].value);
        eq5d_array.push(x);
    }
    let eq5d_sum = eq5d_array.reduce(add, 0);
    let eq5dslider = parseInt(document.getElementById("eq5dslider").value);
    console.log(eq5dslider);
    document.getElementById("sliderOutput").innerHTML = '<h2>' + eq5dslider + '</h2>';
    document.getElementById('EQ5DOutputDiv').innerHTML = ' The EQ5D is often used for health economic analysis, but is ' +
        'a useful short measure of health-related quality of life. You scored ' +
        eq5d_sum + ' on the EQ5D and estimated yourself as ' + eq5dslider +
        ' on the visual analogue scale where 100 represents the best health imaginable, and 0 the worst.';
    results = [eq5dsum, eq5dslider];
    return results;
}

window.onload = function () {

    var secondsA = '00';
    var tensA = '00';
    var appendTensA = document.getElementById("tensA")
    var appendSecondsA = document.getElementById("secondsA")
    var buttonStartA = document.getElementById('button-startA');
    var buttonStopA = document.getElementById('button-stopA');
    var buttonResetA = document.getElementById('button-resetA');
    var IntervalA;

    var secondsB = '00';
    var tensB = '00';
    var appendTensB = document.getElementById("tensB")
    var appendSecondsB = document.getElementById("secondsB")
    var buttonStartB = document.getElementById('button-startB');
    var buttonStopB = document.getElementById('button-stopB');
    var buttonResetB = document.getElementById('button-resetB');
    var IntervalB;

    buttonStartA.onclick = function () {

        clearInterval(IntervalA);
        IntervalA = setInterval(startTimerA, 10);
    }

    buttonStopA.onclick = function () {
        clearInterval(IntervalA);
    }


    buttonResetA.onclick = function () {
        clearInterval(IntervalA);
        tensA = "00";
        secondsA = "00";
        appendTensA.innerHTML = tensA;
        appendSecondsA.innerHTML = secondsA;
    }


    function startTimerA() {
        tensA++;

        if (tensA <= 9) {
            appendTensA.innerHTML = "0" + tensA;
        }

        if (tensA > 9) {
            appendTensA.innerHTML = tensA;

        }

        if (tensA > 99) {
            console.log("secondsA");
            secondsA++;
            appendSecondsA.innerHTML = "0" + secondsA;
            tensA = 0;
            appendTensA.innerHTML = "0" + 0;
        }

        if (secondsA > 9) {
            appendSecondsA.innerHTML = secondsA;
        }

    }

    // TMTB
    buttonStartB.onclick = function () {

        clearInterval(IntervalB);
        IntervalB = setInterval(startTimerB, 10);
    }

    buttonStopB.onclick = function () {
        clearInterval(IntervalB);
    }


    buttonResetB.onclick = function () {
        clearInterval(IntervalB);
        tensB = "00";
        secondsB = "00";
        appendTensB.innerHTML = tensB;
        appendSecondsB.innerHTML = secondsB;
    }


    function startTimerB() {
        tensB++;

        if (tensB <= 9) {
            appendTensB.innerHTML = "0" + tensB;
        }

        if (tensB > 9) {
            appendTensB.innerHTML = tensB;

        }

        if (tensB > 99) {
            console.log("secondsB");
            secondsB++;
            appendSecondsB.innerHTML = "0" + secondsB;
            tensB = 0;
            appendTensB.innerHTML = "0" + 0;
        }

        if (secondsB > 9) {
            appendSecondsB.innerHTML = secondsB;
        }

    }


}
// window.addEventListener('load', function () {
//     document.querySelector('input[type="file"]').addEventListener('change', function () {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('myImg');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
//             }
//
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
// });
const mdsArray = new Object();

function mdsCalc(question) {
    let selectedVal = document.getElementsByName(question).value;
    mdsArray[question] = selectedVal;
    document.getElementById('mdsOutput').innerHTML = mdsArray;
}

function pffsCalc() {
    let pffs_nodes = document.querySelectorAll('input[name^="PFFS"]:checked');
    let pffs_array = [];
    for (i = 0; i < pffs_nodes.length; i++) {
        pffs_array.push(parseInt(pffs_nodes[i].value));
    }
    let pffs_total = pffs_array.reduce(add, 0);
    document.getElementById('pffsOutputDiv').innerHTML = '<h4> Total PFFS score: ' + pffs_total + ' - giving a frailty index of: ' + Math.round(100 * pffs_total / 43, 2) / 100 + ' </h4>'
}

function Export2Word(element, filename = '') {
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + document.getElementById(element).innerHTML + postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });

    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + '.doc' : 'document.doc';

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = url;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}

function isValidNhsNumber(txtNhsNumber) {

    var isValid = false;

    if (txtNhsNumber.length == 10) {

        var total = 0;

        var i = 0;
        for (i = 0; i <= 8; i++) {
            var digit = txtNhsNumber.substr(i, 1);
            var factor = 10 - i;
            total += (digit * factor);
        }

        var checkDigit = (11 - (total % 11));

        if (checkDigit == 11) {
            checkDigit = 0;
        }

        if (checkDigit == txtNhsNumber.substr(9, 1)) {
            isValid = true;
        }
    }

    return isValid;
}

function sumIADL() {
    let iadl_nodes = document.querySelectorAll('select[id^="IADLS"]')
    let iterate_values = iadl_nodes.values();
    let iadl_array = [];
    for (i = 0; i < iadl_nodes.length; i++) {
        iadl_array.push(parseInt(iadl_nodes[i].value))
    }
    let iadl_sum = iadl_array.reduce(add, 0);
    console.log(iadl_sum)
    document.getElementById('IADLSResult').innerHTML = iadl_sum;
    return iadl_array;
}

function writeIADLSLetter() {
    let iadl_array = sumIADL();
    let iadl_sum = iadl_array.reduce(add, 0);
    let parC = " Brain Health is a new approach to the assessment of people with milder forms of cognitive impairment. We aim to optimise cognitive performance by addressing sensory impairment, pain,  medication effects, and identify people who are more or less likely to have worsening of their cognitive impairment in the short term. Finally, we aim to reduce people's risk of worsening cognition using techniques for behaviour change as well as group and individual education. We encourage everyone to participate in one of our many currently running research studies of promising new therapies."
    let letter_text = 'You were recently referred to the memory assessment services. Because you scored ' + iadl_sum +
        ' on the Amsterdam Instrumental Activities of Daily Living (IADL) scale, we invited you to <i>brain</i>Health Manchester.' + parC
    document.getElementById('iadltext').innerHTML = letter_text;
}

function writeDiscussion() {
    let discussion_content = document.getElementById('discussion').value;
    document.getElementById('discussiontext').innerHTML = discussion_content;
}

function writeQuality() {
    let eq = document.getElementById('EQ5DOutputDiv').innerHTML;
    let casp = document.getElementById('CASP19OutputDiv').innerHTML;
    document.getElementById('qualityoflifetext').innerHTML = eq + " " + casp;
}

function writeDepression() {
    let dep = document.getElementById('GDSResults').innerHTML;
    document.getElementById('depressiontext').innerHTML = dep;
}

function write_letter() {
    writeIADLSLetter();
    writeDiscussion();
    writeQuality();
    writeDepression();
}

function iadlSum() {
    const dropDownElems = document.querySelectorAll('input[type="select-label"]');
    let count = 0;
    for (let i = 0; i < dropDownElems.length; i++) {
        count += parseInt(dropDownElems[i].value, 10);
    }
}

function gadSum() {
    const radioElems = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    for (let i = 0; i < radioElems.length; i++) {
        if (radioElems[i].checked === true) {
            count += parseInt(radioElems[i].value, 10);
        } else {
            count += 0;
        }

    }
    document.getElementById('gadsum').value = JSON.stringify(count);
    gad7total = count;
    let anxiety_state = ""

    if (gad7total <= 4) {
        anxiety_state = "minimal or no";
    } else if (gad7total > 4 && gad7total <= 9) {
        anxiety_state = "mild";
    } else if (gad7total > 9 && gad7total <= 14) {
        anxiety_state = "moderate";
    } else if (gad7total >= 15) {
        anxiety_state = "severe";
    }
    let letter_text = document.getElementById('anxiety_letter')
    letter_text.innerHTML = "You report suffering from " + anxiety_state + " anxiety, with a score of " + gad7total + " out of 21 on the seven item Generalised Anxiety Disorder questionnaire. Anxiety can be associated with poor attention and concentration."
}

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

