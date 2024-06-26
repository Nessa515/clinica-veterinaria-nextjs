import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

const URL_API = "http://localhost:4000/tutors";

const Table = () => {

    const [tutors, setTutors] = useState([]);

    const getTutors =  async () => {
        axios.get(URL_API)
        .then(response => setTutors(response.data))
        .catch(error => console.log(error));
    };

    useEffect(() => {
        getTutors()
    }, []);

    // Tabela para exibir lista de tutores e pets

    const tableHeaders = (
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Zip Code</th>
        </tr>
    );

    const tableRows = () => {
        return tutors.map((tutor) => (
            <tr key={tutor.id}>
                <td>{tutor.id}</td>
                <td>{tutor.name}</td>
                <td>{tutor.password}</td>
                <td>{tutor.phone}</td>
                <td>{tutor.email}</td>
                <td>{tutor.date_of_birth}</td>
                <td>{tutor.zip_code}</td>
            </tr>
        ));
    };

    return(
        <div>
            <table className={styles.table}> 
                <tbody>
                    {tableHeaders}
                    {tableRows()}
                </tbody>
            </table>
        </div>
    );
};

export default Table;