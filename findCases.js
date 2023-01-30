const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
                    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];


function loadingFretboard() {

    // STRING TUNES
    const str6 = document.getElementById('str6').value;
    str6Index = chromaticScale.indexOf(str6);
    const str5 = document.getElementById('str5').value;
    str5Index = chromaticScale.indexOf(str5);
    const str4 = document.getElementById('str4').value;
    str4Index = chromaticScale.indexOf(str4);
    const str3 = document.getElementById('str3').value;
    str3Index = chromaticScale.indexOf(str3);
    const str2 = document.getElementById('str2').value;
    str2Index = chromaticScale.indexOf(str2);
    const str1 = document.getElementById('str1').value;
    str1Index = chromaticScale.indexOf(str1);

    // FRETBOARD STR6
    var s6c0 = document.getElementById('s6c0'); s6c0.classList.add(chromaticScale[str6Index]);
    var s6c1 = document.getElementById('s6c1'); s6c1.classList.add(chromaticScale[str6Index+1]);
    var s6c2 = document.getElementById('s6c2'); s6c2.classList.add(chromaticScale[str6Index+2]);
    var s6c3 = document.getElementById('s6c3'); s6c3.classList.add(chromaticScale[str6Index+3]);
    var s6c4 = document.getElementById('s6c4'); s6c4.classList.add(chromaticScale[str6Index+4]);
    var s6c5 = document.getElementById('s6c5'); s6c5.classList.add(chromaticScale[str6Index+5]);
    var s6c6 = document.getElementById('s6c6'); s6c6.classList.add(chromaticScale[str6Index+6]);
    var s6c7 = document.getElementById('s6c7'); s6c7.classList.add(chromaticScale[str6Index+7]);
    var s6c8 = document.getElementById('s6c8'); s6c8.classList.add(chromaticScale[str6Index+8]);
    var s6c9 = document.getElementById('s6c9'); s6c9.classList.add(chromaticScale[str6Index+9]);
    var s6c10 = document.getElementById('s6c10'); s6c10.classList.add(chromaticScale[str6Index+10]);
    var s6c11 = document.getElementById('s6c11'); s6c11.classList.add(chromaticScale[str6Index+11]);
    var s6c12 = document.getElementById('s6c12'); s6c12.classList.add(chromaticScale[str6Index+12]);

    // FRETBOARD STR5
    var s5c0 = document.getElementById('s5c0'); s5c0.classList.add(chromaticScale[str5Index]);
    var s5c1 = document.getElementById('s5c1'); s5c1.classList.add(chromaticScale[str5Index+1]);
    var s5c2 = document.getElementById('s5c2'); s5c2.classList.add(chromaticScale[str5Index+2]);
    var s5c3 = document.getElementById('s5c3'); s5c3.classList.add(chromaticScale[str5Index+3]);
    var s5c4 = document.getElementById('s5c4'); s5c4.classList.add(chromaticScale[str5Index+4]);
    var s5c5 = document.getElementById('s5c5'); s5c5.classList.add(chromaticScale[str5Index+5]);
    var s5c6 = document.getElementById('s5c6'); s5c6.classList.add(chromaticScale[str5Index+6]);
    var s5c7 = document.getElementById('s5c7'); s5c7.classList.add(chromaticScale[str5Index+7]);
    var s5c8 = document.getElementById('s5c8'); s5c8.classList.add(chromaticScale[str5Index+8]);
    var s5c9 = document.getElementById('s5c9'); s5c9.classList.add(chromaticScale[str5Index+9]);
    var s5c10 = document.getElementById('s5c10'); s5c10.classList.add(chromaticScale[str5Index+10]);
    var s5c11 = document.getElementById('s5c11'); s5c11.classList.add(chromaticScale[str5Index+11]);
    var s5c12 = document.getElementById('s5c12'); s5c12.classList.add(chromaticScale[str5Index+12]);

    // FRETBOARD STR4
    var s4c0 = document.getElementById('s4c0'); s4c0.classList.add(chromaticScale[str4Index]);
    var s4c1 = document.getElementById('s4c1'); s4c1.classList.add(chromaticScale[str4Index+1]);
    var s4c2 = document.getElementById('s4c2'); s4c2.classList.add(chromaticScale[str4Index+2]);
    var s4c3 = document.getElementById('s4c3'); s4c3.classList.add(chromaticScale[str4Index+3]);
    var s4c4 = document.getElementById('s4c4'); s4c4.classList.add(chromaticScale[str4Index+4]);
    var s4c5 = document.getElementById('s4c5'); s4c5.classList.add(chromaticScale[str4Index+5]);
    var s4c6 = document.getElementById('s4c6'); s4c6.classList.add(chromaticScale[str4Index+6]);
    var s4c7 = document.getElementById('s4c7'); s4c7.classList.add(chromaticScale[str4Index+7]);
    var s4c8 = document.getElementById('s4c8'); s4c8.classList.add(chromaticScale[str4Index+8]);
    var s4c9 = document.getElementById('s4c9'); s4c9.classList.add(chromaticScale[str4Index+9]);
    var s4c10 = document.getElementById('s4c10'); s4c10.classList.add(chromaticScale[str4Index+10]);
    var s4c11 = document.getElementById('s4c11'); s4c11.classList.add(chromaticScale[str4Index+11]);
    var s4c12 = document.getElementById('s4c12'); s4c12.classList.add(chromaticScale[str4Index+12]);

    // FRETBOARD STR3
    var s3c0 = document.getElementById('s3c0'); s3c0.classList.add(chromaticScale[str3Index]);
    var s3c1 = document.getElementById('s3c1'); s3c1.classList.add(chromaticScale[str3Index+1]);
    var s3c2 = document.getElementById('s3c2'); s3c2.classList.add(chromaticScale[str3Index+2]);
    var s3c3 = document.getElementById('s3c3'); s3c3.classList.add(chromaticScale[str3Index+3]);
    var s3c4 = document.getElementById('s3c4'); s3c4.classList.add(chromaticScale[str3Index+4]);
    var s3c5 = document.getElementById('s3c5'); s3c5.classList.add(chromaticScale[str3Index+5]);
    var s3c6 = document.getElementById('s3c6'); s3c6.classList.add(chromaticScale[str3Index+6]);
    var s3c7 = document.getElementById('s3c7'); s3c7.classList.add(chromaticScale[str3Index+7]);
    var s3c8 = document.getElementById('s3c8'); s3c8.classList.add(chromaticScale[str3Index+8]);
    var s3c9 = document.getElementById('s3c9'); s3c9.classList.add(chromaticScale[str3Index+9]);
    var s3c10 = document.getElementById('s3c10'); s3c10.classList.add(chromaticScale[str3Index+10]);
    var s3c11 = document.getElementById('s3c11'); s3c11.classList.add(chromaticScale[str3Index+11]);
    var s3c12 = document.getElementById('s3c12'); s3c12.classList.add(chromaticScale[str3Index+12]);

    // FRETBOARD STR2
    var s2c0 = document.getElementById('s2c0'); s2c0.classList.add(chromaticScale[str2Index]); 
    var s2c1 = document.getElementById('s2c1'); s2c1.classList.add(chromaticScale[str2Index+1]);
    var s2c2 = document.getElementById('s2c2'); s2c2.classList.add(chromaticScale[str2Index+2]);
    var s2c3 = document.getElementById('s2c3'); s2c3.classList.add(chromaticScale[str2Index+3]);
    var s2c4 = document.getElementById('s2c4'); s2c4.classList.add(chromaticScale[str2Index+4]);
    var s2c5 = document.getElementById('s2c5'); s2c5.classList.add(chromaticScale[str2Index+5]);
    var s2c6 = document.getElementById('s2c6'); s2c6.classList.add(chromaticScale[str2Index+6]);
    var s2c7 = document.getElementById('s2c7'); s2c7.classList.add(chromaticScale[str2Index+7]);
    var s2c8 = document.getElementById('s2c8'); s2c8.classList.add(chromaticScale[str2Index+8]);
    var s2c9 = document.getElementById('s2c9'); s2c9.classList.add(chromaticScale[str2Index+9]);
    var s2c10 = document.getElementById('s2c10'); s2c10.classList.add(chromaticScale[str2Index+10]);
    var s2c11 = document.getElementById('s2c11'); s2c11.classList.add(chromaticScale[str2Index+11]);
    var s2c12 = document.getElementById('s2c12'); s2c12.classList.add(chromaticScale[str2Index+12]);

    // FRETBOARD STR1
    var s1c0 = document.getElementById('s1c0'); s1c0.classList.add(chromaticScale[str1Index]);
    var s1c1 = document.getElementById('s1c1'); s1c1.classList.add(chromaticScale[str1Index+1]);
    var s1c2 = document.getElementById('s1c2'); s1c2.classList.add(chromaticScale[str1Index+2]);
    var s1c3 = document.getElementById('s1c3'); s1c3.classList.add(chromaticScale[str1Index+3]);
    var s1c4 = document.getElementById('s1c4'); s1c4.classList.add(chromaticScale[str1Index+4]);
    var s1c5 = document.getElementById('s1c5'); s1c5.classList.add(chromaticScale[str1Index+5]);
    var s1c6 = document.getElementById('s1c6'); s1c6.classList.add(chromaticScale[str1Index+6]);
    var s1c7 = document.getElementById('s1c7'); s1c7.classList.add(chromaticScale[str1Index+7]);
    var s1c8 = document.getElementById('s1c8'); s1c8.classList.add(chromaticScale[str1Index+8]);
    var s1c9 = document.getElementById('s1c9'); s1c9.classList.add(chromaticScale[str1Index+9]);
    var s1c10 = document.getElementById('s1c10'); s1c10.classList.add(chromaticScale[str1Index+10]);
    var s1c11 = document.getElementById('s1c11'); s1c11.classList.add(chromaticScale[str1Index+11]);
    var s1c12 = document.getElementById('s1c12'); s1c12.classList.add(chromaticScale[str1Index+12]);

}

// MODE IONIEN
function getIonianScale (key) {
    var d1 = chromaticScale[chromaticScale.indexOf(key)];
    var d1List = document.getElementsByClassName(d1);
    for (var i = 0; i < d1List.length; i++) {
		d1List[i].style.background = 'url(img/bgFondamental.png)';
	}
    var d2 = chromaticScale[chromaticScale.indexOf(key)+2];
    var d2List = document.getElementsByClassName(d2);
    for (var i = 0; i < d2List.length; i++) {
		d2List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d3 = chromaticScale[chromaticScale.indexOf(key)+4];
    var d3List = document.getElementsByClassName(d3);
    for (var i = 0; i < d3List.length; i++) {
		d3List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d4 = chromaticScale[chromaticScale.indexOf(key)+5];
    var d4List = document.getElementsByClassName(d4);
    for (var i = 0; i < d4List.length; i++) {
		d4List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d5 = chromaticScale[chromaticScale.indexOf(key)+7];
    var d5List = document.getElementsByClassName(d5);
    for (var i = 0; i < d5List.length; i++) {
		d5List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d6 = chromaticScale[chromaticScale.indexOf(key)+9];
    var d6List = document.getElementsByClassName(d6);
    for (var i = 0; i < d6List.length; i++) {
		d6List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d7 = chromaticScale[chromaticScale.indexOf(key)+11];
    var d7List = document.getElementsByClassName(d7);
    for (var i = 0; i < d7List.length; i++) {
		d7List[i].style.background = 'url(img/bgHarmonic.png)';
	}
}

// MODE EOLIEN
function getEolianScale (key) {
    var d1 = chromaticScale[chromaticScale.indexOf(key)];
    var d1List = document.getElementsByClassName(d1);
    for (var i = 0; i < d1List.length; i++) {
		d1List[i].style.background = 'url(img/bgFondamental.png)';
	}
    var d2 = chromaticScale[chromaticScale.indexOf(key)+2];
    var d2List = document.getElementsByClassName(d2);
    for (var i = 0; i < d2List.length; i++) {
		d2List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d3 = chromaticScale[chromaticScale.indexOf(key)+3];
    var d3List = document.getElementsByClassName(d3);
    for (var i = 0; i < d3List.length; i++) {
		d3List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d4 = chromaticScale[chromaticScale.indexOf(key)+5];
    var d4List = document.getElementsByClassName(d4);
    for (var i = 0; i < d4List.length; i++) {
		d4List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d5 = chromaticScale[chromaticScale.indexOf(key)+7];
    var d5List = document.getElementsByClassName(d5);
    for (var i = 0; i < d5List.length; i++) {
		d5List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d6 = chromaticScale[chromaticScale.indexOf(key)+8];
    var d6List = document.getElementsByClassName(d6);
    for (var i = 0; i < d6List.length; i++) {
		d6List[i].style.background = 'url(img/bgHarmonic.png)';
	}
    var d7 = chromaticScale[chromaticScale.indexOf(key)+10];
    var d7List = document.getElementsByClassName(d7);
    for (var i = 0; i < d7List.length; i++) {
		d7List[i].style.background = 'url(img/bgHarmonic.png)';
	}
}

function getMode() {
    const root = document.getElementById('root').value;
    const mode = document.getElementById('mode').value;
    loadingFretboard();
    switch (mode) {
        case 'eolien' :
            getEolianScale(root);
            break;
        case 'ionien' :
            getIonianScale(root);
            break;
    }
}

const btn = document.getElementById('btn');
btn.addEventListener('click', getMode);

function removeCases() {
    var findCases = document.getElementById('findCases');
    var fretBoardToRemove = document.getElementById('fretBoard');
    fretBoardToRemove.remove();
    fretBoardToAdd = `
    <div id="fretBoard">
        <div id="s6c0" class="s6 c0"></div><div id="s6c1" class="s6 c1"></div><div id="s6c2" class="s6 c2"></div><div id="s6c3" class="s6 c3"></div><div id="s6c4" class="s6 c4"></div><div id="s6c5" class="s6 c5"></div><div id="s6c6" class="s6 c6"></div><div id="s6c7" class="s6 c7"></div><div id="s6c8" class="s6 c8"></div><div id="s6c9" class="s6 c9"></div><div id="s6c10" class="s6 c10"></div><div id="s6c11" class="s6 c11"></div><div id="s6c12" class="s6 c12"></div>
        <div id="s5c0" class="s5 c0"></div><div id="s5c1" class="s5 c1"></div><div id="s5c2" class="s5 c2"></div><div id="s5c3" class="s5 c3"></div><div id="s5c4" class="s5 c4"></div><div id="s5c5" class="s5 c5"></div><div id="s5c6" class="s5 c6"></div><div id="s5c7" class="s5 c7"></div><div id="s5c8" class="s5 c8"></div><div id="s5c9" class="s5 c9"></div><div id="s5c10" class="s5 c10"></div><div id="s5c11" class="s5 c11"></div><div id="s5c12" class="s5 c12"></div>
        <div id="s4c0" class="s4 c0"></div><div id="s4c1" class="s4 c1"></div><div id="s4c2" class="s4 c2"></div><div id="s4c3" class="s4 c3"></div><div id="s4c4" class="s4 c4"></div><div id="s4c5" class="s4 c5"></div><div id="s4c6" class="s4 c6"></div><div id="s4c7" class="s4 c7"></div><div id="s4c8" class="s4 c8"></div><div id="s4c9" class="s4 c9"></div><div id="s4c10" class="s4 c10"></div><div id="s4c11" class="s4 c11"></div><div id="s4c12" class="s4 c12"></div>
        <div id="s3c0" class="s3 c0"></div><div id="s3c1" class="s3 c1"></div><div id="s3c2" class="s3 c2"></div><div id="s3c3" class="s3 c3"></div><div id="s3c4" class="s3 c4"></div><div id="s3c5" class="s3 c5"></div><div id="s3c6" class="s3 c6"></div><div id="s3c7" class="s3 c7"></div><div id="s3c8" class="s3 c8"></div><div id="s3c9" class="s3 c9"></div><div id="s3c10" class="s3 c10"></div><div id="s3c11" class="s3 c11"></div><div id="s3c12" class="s3 c12"></div>
        <div id="s2c0" class="s2 c0"></div><div id="s2c1" class="s2 c1"></div><div id="s2c2" class="s2 c2"></div><div id="s2c3" class="s2 c3"></div><div id="s2c4" class="s2 c4"></div><div id="s2c5" class="s2 c5"></div><div id="s2c6" class="s2 c6"></div><div id="s2c7" class="s2 c7"></div><div id="s2c8" class="s2 c8"></div><div id="s2c9" class="s2 c9"></div><div id="s2c10" class="s2 c10"></div><div id="s2c11" class="s2 c11"></div><div id="s2c12" class="s2 c12"></div>
        <div id="s1c0" class="s1 c0"></div><div id="s1c1" class="s1 c1"></div><div id="s1c2" class="s1 c2"></div><div id="s1c3" class="s1 c3"></div><div id="s1c4" class="s1 c4"></div><div id="s1c5" class="s1 c5"></div><div id="s1c6" class="s1 c6"></div><div id="s1c7" class="s1 c7"></div><div id="s1c8" class="s1 c8"></div><div id="s1c9" class="s1 c9"></div><div id="s1c10" class="s1 c10"></div><div id="s1c11" class="s1 c11"></div><div id="s1c12" class="s1 c12"></div>
    </div>
    `;
    findCases.insertAdjacentHTML('beforeend', fretBoardToAdd);
}

const reload = document.getElementById('reload');
reload.addEventListener('click', removeCases);