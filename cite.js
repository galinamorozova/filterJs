
function myFunction() {
    let input, filter, table, tr, td, cell, i, j, newContent;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    const showedTr = table.getElementsByClassName('show');
    const fTr = (input.value !=="" && showedTr.length>0) ? showedTr : tr;

    const newDiv = document.getElementById("filter");
    const arr = [];
    newDiv.replaceChildren([]);


    for (i = 0; i < fTr.length; i++) {
        // Hide the row initially.
        fTr[i].classList.add('hidden');

        td = fTr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {

            cell = fTr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    if (arr.length===0) {

                        const cellValue = String(cell.innerHTML.toUpperCase());
                        arr.push(cellValue);
                        newContent = document.createTextNode(cell.innerHTML.toUpperCase());

                        const newP = document.createElement("p");
                        newP.appendChild(newContent);
                        newP.addEventListener("click", function() {
                            input.value = cellValue;
                            myFunction();
                        });
                        newDiv.appendChild(newP);
                        newDiv.classList.remove('filterHide');
                    } else {
                        const checkFilter = arr.filter(i => {
                            i===cell.innerHTML.toUpperCase()});
                        if (checkFilter.length===0) {
                            arr.push(cell.innerHTML.toUpperCase());
                            newContent = document.createTextNode(cell.innerHTML.toUpperCase());
                            const cellValue = cell.innerHTML.toUpperCase();
                            const newP = document.createElement("p");
                            newP.appendChild(newContent);
                            newP.addEventListener("click", function() {
                                input.value = cellValue;
                                myFunction();
                            });
                            newDiv.appendChild(newP);
                        }
                    }

                    fTr[i].classList.remove('hidden');
                    fTr[i].classList.add('show');
                    if (input.value === "") {
                        newDiv.replaceChildren([])
                        newDiv.classList.add('filterHide')
                    }
                    break;
                } }}}}


function myFunction2() {
    let input, filter, table, tr, td, cell, i, j, newContent;
    input = document.getElementById("mySecondInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    const showedTr = table.getElementsByClassName('show');
    const fTr = (input.value !=="" && showedTr.length>0) ? showedTr : tr;

    const newDiv = document.getElementById("fltr2");
    const arr = [];
    newDiv.replaceChildren([]);


    for (i = 0; i < fTr.length; i++) {
        // Hide the row initially.
        fTr[i].classList.add('hidden');

        td = fTr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {

            cell = fTr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    if (arr.length===0) {

                        const cellValue = String(cell.innerHTML.toUpperCase());
                        arr.push(cellValue);
                        newContent = document.createTextNode(cell.innerHTML.toUpperCase());

                        const newP = document.createElement("p");
                        newP.appendChild(newContent);
                        newP.addEventListener("click", function() {
                            input.value = cellValue;
                            myFunction();
                        });
                        newDiv.appendChild(newP);
                        newDiv.classList.remove('filterHide');
                    } else {
                        const checkFilter = arr.filter(i => {
                            i===cell.innerHTML.toUpperCase()});
                        if (checkFilter.length===0) {
                            arr.push(cell.innerHTML.toUpperCase());
                            newContent = document.createTextNode(cell.innerHTML.toUpperCase());
                            const cellValue = cell.innerHTML.toUpperCase();
                            const newP = document.createElement("p");
                            newP.appendChild(newContent);
                            newP.addEventListener("click", function() {
                                input.value = cellValue;
                                myFunction();
                            });
                            newDiv.appendChild(newP);
                        }
                    }

                    fTr[i].classList.remove('hidden');
                    fTr[i].classList.add('show');
                    if (input.value === "") {
                        newDiv.replaceChildren([])
                        newDiv.classList.add('filterHide')
                    }
                    break;
                } }}}}

// function myFunction2() {
//     var input2, filter2, table, tr, td, cell, i, j;
//     input2 = document.getElementById("mySecondInput");
//     filter2 = input2.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     showedTr = table.getElementsByClassName('show');
//     fTr = showedTr.length>0 ? showedTr : tr;
//
//     //console.log(fTr);
//     for (i = 0; i < fTr.length; i++) {
//         // Hide the row initially.
//         //fTr[i].classList.remove('show');
//         fTr[i].classList.add('hidden');
//
//
//         td = fTr[i].getElementsByTagName("td");
//         for (var j = 0; j < td.length; j++) {
//             cell = fTr[i].getElementsByTagName("td")[j];
//             if (cell) {
//                 if (cell.innerHTML.toUpperCase().indexOf(filter2) > -1) {
//                     fTr[i].classList.remove('hidden');
//                     fTr[i].classList.add('show');
//                     break;
//                 }
//
//             }
//         }
//     }
//
// }

function clearFilters () {

    let input, input2, table, tr, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    //console.log(tr)
    input = document.getElementById("myInput");
    input2 = document.getElementById("mySecondInput");
    input.value = "";
    input2.value = "";
    for (i = 0; i < tr.length; i++) {
        console.log(i, tr.length);
        tr[i].classList.remove('hidden');
        tr[i].classList.remove('show');
    }
}

function clearFilter1 () {

    let input;
    input = document.getElementById("myInput");
    input.value = "";
    myFunction();
    myFunction2();
}

function clearFilter2 () {

    let input2;
    input2 = document.getElementById("mySecondInput");
    input2.value = "";
    myFunction();
    myFunction2();
}

