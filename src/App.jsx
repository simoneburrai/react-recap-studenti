import { useEffect, useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentFilter from './components/StudentFilter'
import StudentList from './components/StudentList'
import defaultStudents from './data/defaultStudents'
import courses from './data/courses'
import axios from 'axios'
import trueOFalse from './utils/trueOFalse'
import getRandomIndex from './utils/getRandomIndex'



function App() {
  const urlApi = "https://jsonplaceholder.typicode.com/users"

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(urlApi)
      .then(response => {
        const users = response.data;
        console.log(users);
        const newUsers = users.map(user => {
          const isActive = trueOFalse()
          return {
            id: user.id,
            name: user.name,
            course: courses[getRandomIndex(courses)],
            status: isActive ? "active" : "inactive"
          }
        })
        setStudents(newUsers);
      })

    // {
    //   id: user.id,
    //     name: user.name,
    //       course: corso random dalla lista,
    //         status: valore casuale tra "active" / "inactive"
    // }


    setStudents(defaultStudents)
  }, [])

  return (
    <main className="container">
      <h1>Gestione Studenti</h1>

      <div id="status-message" className="status-message"></div>
      <section className="form-section">
        <h2>Aggiungi Studente</h2>
        <StudentForm students={students} setStudents={setStudents} />
      </section>

      <section className="filter-section">
        <StudentFilter />
      </section>

      <section className="list-section">
        <div className="list-header">
          <h2>Elenco Studenti</h2>
          <div className="sort-controls">
            <label>Ordina per:</label>
            <select id="sort-by">
              <option value="name">Nome</option>
              <option value="course">Corso</option>
            </select>
          </div>
        </div>
        <StudentList students={students} />
      </section>
    </main>
  )
}

export default App
