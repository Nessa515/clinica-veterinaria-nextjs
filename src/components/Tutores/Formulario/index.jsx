import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Formulario = () => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [zip_code, setZip_code] = useState('');

        useEffect(() => {

            try {
                const tutor = {
                    name,
                    password,
                    phone,
                    email,
                    date_of_birth,
                    zip_code
                }
            } catch (error) {
                const postTutors =  async () => {
                    axios.post("http://localhost:4000/tutor")
                    .then(response => useTutors(response.data))
                    .catch(error => console.log(error));
                }      
                postTutors();
            }
            
            
        }, [name, password, phone, email, date_of_birth, zip_code])

        
        const aoSalvar = async (evento) => {
            evento.preventDefault();
            console.log("Submetido");   
        }

    return(
        <div className={styles.formulario}>
            <form onSubmit={aoSalvar}>
            <h2>Cadastre tutores</h2>
                <label>
                    <span>Name:</span>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Digite seu nome:'
                        onChange={(evento) => setName(evento.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Passsword:</span>
                    <input 
                        type="password'"
                        name="password'"
                        placeholder='Digite sua senha:'
                        onChange={(evento) => setPassword(evento.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>Phone:</span>
                    <input 
                        type="text"
                        name="phone" 
                        placeholder='Digite seu telefone:'
                        onChange={(evento) => setPhone(evento.target.value)}
                        value={phone}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input 
                        type="email"
                        name="email" 
                        placeholder='Digite seu email:'
                        onChange={(evento) => setEmail(evento.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Date of Birth:</span>
                    <input 
                        type="string" 
                        name="date_of_birth" 
                        placeholder='Digite sua data:'
                        onChange={(evento) => setDate_of_birth(evento.target.value)}
                        value={date_of_birth}
                    />
                </label>
                <label>
                    <span>Zip Code:</span>
                    <input 
                        type="string" 
                        name="zip_code" 
                        placeholder='Digite seu zipCode:'
                        onChange={(evento) => setZip_code(evento.target.value)}
                        value={zip_code}
                    />
                </label>
                <button type='submit'>Salvar</button>
            </form>
        </div>
    )
}

export default Formulario;