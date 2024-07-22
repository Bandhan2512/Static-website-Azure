document.addEventListener('DOMContentLoaded', function() {
    fetch('https://employeedata100.z23.web.core.windows.net/employees.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#employeeTable tbody');
            
            data.forEach(row => {
                const tr = document.createElement('tr');
                const tdSNo = document.createElement('td');
                tdSNo.textContent = row.S_No;
                const tdName = document.createElement('td');
                tdName.textContent = row.Employee_Name;
                const tdCity = document.createElement('td');
                tdCity.textContent = row.City;
                const tdPhone = document.createElement('td');
                tdPhone.textContent = row.Phone_Number;
                
                tr.appendChild(tdSNo);
                tr.appendChild(tdName);
                tr.appendChild(tdCity);
                tr.appendChild(tdPhone);
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error:', error));
});
