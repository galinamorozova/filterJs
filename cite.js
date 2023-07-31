
function myFunction() {
    let input, filter, table, tr, td, cell, i, j, newContent;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    const showedTr = table.getElementsByClassName('show');
    const fTr = (input.value !=="" && showedTr.length>0) ? showedTr : tr;
    let noDoubleArr;

    const newDiv = document.getElementById("fltr");
    let arr = [];
    newDiv.replaceChildren([]);


    for (i = 0; i < fTr.length; i++) {
        // Hide the row initially.
        fTr[i].classList.add('hidden');

        td = fTr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {

            cell = fTr[i].getElementsByTagName("td")[j];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {

                    const cellValue = String(cell.innerHTML.toUpperCase());
                    arr.push(cellValue);
                    noDoubleArr = [...new Set(arr)];
                    newDiv.replaceChildren([]);
                    noDoubleArr.map(item => {
                        newContent = document.createTextNode(item);
                        const newP = document.createElement("p");
                        newP.appendChild(newContent);
                        newP.addEventListener("click", function() {
                            input.value = item;
                            myFunction();
                            newDiv.classList.add('filterHide');
                        });
                        newDiv.appendChild(newP);
                    })

                    newDiv.classList.remove('filterHide');

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
    let noDoubleArr;

    const newDiv = document.getElementById("fltr2");
    let arr = [];
    newDiv.replaceChildren([]);


    for (i = 0; i < fTr.length; i++) {
        // Hide the row initially.
        fTr[i].classList.add('hidden');

        td = fTr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {

            cell = fTr[i].getElementsByTagName("td")[j];
            if (cell) {

                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {


                        const cellValue = String(cell.innerHTML.toUpperCase());
                        arr.push(cellValue);
                        noDoubleArr = [...new Set(arr)];
                        newDiv.replaceChildren([]);
                        noDoubleArr.map(item => {
                            newContent = document.createTextNode(item);
                            const newP = document.createElement("p");
                            newP.appendChild(newContent);
                            newP.addEventListener("click", function() {
                                input.value = item;
                                myFunction2();
                                newDiv.classList.add('filterHide');
                            });
                            newDiv.appendChild(newP);
                        })
                        newDiv.classList.remove('filterHide');

                    fTr[i].classList.remove('hidden');
                    fTr[i].classList.add('show');
                    if (input.value === "") {
                        newDiv.replaceChildren([])
                        newDiv.classList.add('filterHide')
                    }
                    break;
                } }}}}

function clearFilters () {

    let input, input2, table, tr, i;
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    input = document.getElementById("myInput");
    input2 = document.getElementById("mySecondInput");
    input.value = "";
    input2.value = "";
    for (i = 0; i < tr.length; i++) {
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

