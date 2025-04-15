import { useEffect, useState } from "react";

const StudentFilter = ({ students, setFilteredStudents }) => {

    const [filterName, setFilterName] = useState("");
    const [filterCourse, setFilterCourse] = useState("");

    useEffect(() => {
        let filtered = students;
        filtered = students
            .filter(student => student.name.toLowerCase().includes(filterName.toLowerCase()))
            .filter(student => student.course.toLowerCase().includes(filterCourse.toLowerCase()))
        console.log(filtered);
        // .sort((a, b) => {
        //     const studentNameA = a.name;
        //     const studentNameB = b.name;
        //     if (studentNameA < studentNameB) {
        //         return -1;
        //     } else if (studentNameA > studentNameB) {
        //         return 1;
        //     } else {
        //         return 0
        //     }
        // });
        setFilteredStudents(filtered);
    }, [filterName, filterCourse])


    return <>
        <h2>Filtra</h2>
        <input type="text"
            id="filter-name"
            placeholder="Filtra per nome"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)} />
        <input type="text"
            id="filter-course"
            placeholder="Filtra per corso"
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)} />
    </>
}

export default StudentFilter;