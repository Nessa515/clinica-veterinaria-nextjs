import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

const URL_API = "http://localhost:4000/tutors";

const Table = () => {

    const [tutors, useTutors] = useState([]);

    const getTutors =  async () => {
        axios.get(URL_API)
        .then(response => useTutors(response.data))
        .catch(error => console.log(error));
    }

    console.log(tutors)

    useEffect(() => {
        getTutors()
    }, [])

    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>ID</th>  
                    <th>Name</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Zip Code</th>
                </tr>
            </thead>

            <tbody>
            {/* {tutors?.map((tutor) => (
                
                    <tr key={tutor.id}>
                        <td>{tutor.id}</td>
                        <td>{tutor.name}</td>
                        <td>{tutor.password}</td>
                        <td>{tutor.phone}</td>
                        <td>{tutor.email}</td>
                        <td>{tutor.dateOfBirth}</td>
                        <td>{tutor.zipCode}</td>
                    </tr>
                ))} */}
            </tbody>
        </table>
    )
}

export default Table;