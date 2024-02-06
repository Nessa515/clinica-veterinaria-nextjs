import Link from 'next/link';
import styles from './styles.module.css';

// Cabeçalho com o menu de navegação

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <div>
                <h1>Pet Shop</h1>

            <nav className={styles.navigation}>
            <ul>
                <li>
                    <a href='/auth'>
                        <div>
                            <span className={styles.home}>Login</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <div>
                            <span className={styles.home}>Home</span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href='/pets'>
                        <div className={styles.pet}>
                            <span className={styles.pets}>Pets</span>
                        </div>
                    </a>
                </li>

                <li>
                    <a href='/tutor'>
                        <div className={styles.menu}>
                            <span className={styles.tutores}>Tutores</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
            </div>
        </header>
    )
}

export default Cabecalho;