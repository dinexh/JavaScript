function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let rows = document.getElementById('table').getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName('td')[0];
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toLowerCase().indexOf(input) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
