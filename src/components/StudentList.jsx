function StudentList({ students }) {


    return <ul id="student-list">
        {students.map(student => {

            let isActive = false;
            if (student.status === "Attivo") {
                isActive = true;
            }

            return <li key={student.name} className={student.status}>
                <div>
                    <strong>{student.name}</strong> - {student.course}
                    <span className="status">({student.status})</span>
                </div>
                <div className="actions">
                    <button className="edit-btn">Modifica</button>
                    <button className="delete-btn">Elimina</button>
                </div>
                <form className="edit-form">
                    <label>
                        Nome:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Corso:
                        <input type="text" name="course" />
                    </label>
                    <label>
                        Stato:
                        <select name="status" >
                            <option value="active">Attivo</option>
                            <option value="inactive">Inattivo</option>
                        </select>
                    </label>
                    <button type="submit">Salva modifiche</button>
                </form>
            </li>
        })}


    </ul>
}

export default StudentList;