const estudiantesMock = [
    { id: '1', name: 'Juan Ortega', address: 'Conocoto', phone: '123456789' },
    { id: '2', name: 'Jose Fuertes', address: 'la Salle', phone: '987654321' },
    { id: '3', name: 'Ariel Suntasig', address: 'Conocoto', phone: '987654321' },
];

const loadStudents = () => {
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = `
        <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
        </tr>`;

    estudiantesMock.forEach(student => {
        const row = studentsList.insertRow();
        row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.address}</td><td>${student.phone}</td>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            const newStudent = {
                id: form.id.value,
                name: form.name.value,
                address: form.address.value,
                phone: form.phone.value
            };
            estudiantesMock.push(newStudent);
            loadStudents();
            form.reset();
        }
        form.classList.add('was-validated');
    });
    loadStudents();
});