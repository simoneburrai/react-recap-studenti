import { useState } from "react";

function StudentForm({ students, setStudents }) {
    const newId = students.length + 1
    const [status, setStatus] = useState("");
    const [form, setForm] = useState({ name: '', course: '', status: 'active' });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.course) {
            setStatus("Errore: campi obbligatori");
            return;
        }
        const newStudent = { ...form, id: newId };
        setStudents([...students, newStudent]);
        setForm({ name: '', course: '', status: 'active' });
        setStatus("Studente inserito con successo");
    }

    return <form id="student-form" onSubmit={handleSubmit}>
        <label>
            Nome:
            <input onChange={handleChange} type="text" name="name" value={form.name} required />
        </label>
        <label>
            Corso:
            <input onChange={handleChange} type="text" name="course" value={form.course} required />
        </label>
        <label>
            Stato:
            <select onChange={handleChange} value={form.status} name="status" required>
                <option value="active">Attivo</option>
                <option value="inactive">Inattivo</option>
            </select>
        </label>
        <button type="submit">Aggiungi</button>
    </form>
}

export default StudentForm;