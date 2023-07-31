
function myFunction() {
    var input, filter, table, tr, td, cell, i, j, newContent;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    showedTr = table.getElementsByClassName('show');
    fTr = (input.value !=="" && showedTr.length>0) ? showedTr : tr;

    // const newDiv = document.getElementById("filter");
    // const arr = [];
    // newDiv.replaceChildren([]);


    for (i = 0; i < fTr.length; i++) {
        // Hide the row initially.
        fTr[i].classList.add('hidden');

        td = fTr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {

            cell = fTr[i].getElementsByTagName("td")[j];
            console.log(cell)
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    console.log(cell.innerHTML)
                    // if (arr.length===0) {
                    //     console.log(2, arr.length===0)
                    //     console.log(cell.innerHTML)
                    //
                    //     console.log(arr)
                    //     const cellValue = String(cell.innerHTML.toUpperCase());
                    //     arr.push(cellValue);
                    //     console.log(cellValue, arr);
                    //     newContent = document.createTextNode(cell.innerHTML.toUpperCase());
                    //
                    //     const newP = document.createElement("p");
                    //     newP.appendChild(newContent);
                    //     newP.addEventListener("click", function() {
                    //         input.value = cellValue;
                    //         myFunction();
                    //     });
                    //     newDiv.appendChild(newP);
                    //     newDiv.classList.remove('filterHide');
                    // } else {
                    //     console.log(3)
                    //     const checkFilter = arr.filter(i => {
                    //         console.log(i, cell.innerHTML.toUpperCase(), i===cell.innerHTML.toUpperCase())
                    //         console.log(typeof i, typeof cell.innerHTML.toUpperCase())
                    //         i===cell.innerHTML.toUpperCase()});
                    //     console.log(checkFilter)
                    //     if (checkFilter.length===0) {
                    //         console.log(4)
                    //         arr.push(cell.innerHTML.toUpperCase());
                    //         newContent = document.createTextNode(cell.innerHTML.toUpperCase());
                    //         const cellValue = cell.innerHTML.toUpperCase();
                    //         const newP = document.createElement("p");
                    //         newP.appendChild(newContent);
                    //         newP.addEventListener("click", function() {
                    //             input.value = cellValue;
                    //             myFunction();
                    //         });
                    //         newDiv.appendChild(newP);
                    //     }
                    // }

                    fTr[i].classList.remove('hidden');
                    fTr[i].classList.add('show');
                    // if (input.value === "") {
                    //     newDiv.replaceChildren([])
                    //     newDiv.classList.add('filterHide')
                    // }
                    break;
                } }}}}



function myFunction2() {
    var input2, filter2, table, tr, td, cell, i, j;
    input2 = document.getElementById("mySecondInput");
    filter2 = input2.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    showedTr = table.getElementsByClassName('show');
    fTr = showedTr.length>0 ? showedTr : tr;

    //console.log(fTr);
    for (i = 0; i < fTr.length; i++) {
        // Hide the row initially.
        //fTr[i].classList.remove('show');
        fTr[i].classList.add('hidden');


        td = fTr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            cell = fTr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter2) > -1) {
                    fTr[i].classList.remove('hidden');
                    fTr[i].classList.add('show');
                    break;
                }

            }
        }
    }

}

function clearFilters () {

    var input, input2, table, tr, i;
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

    var input;
    input = document.getElementById("myInput");
    input.value = "";
    myFunction();
    myFunction2();
}

function clearFilter2 () {

    var input2;
    input2 = document.getElementById("mySecondInput");
    input2.value = "";
    myFunction();
    myFunction2();
}

