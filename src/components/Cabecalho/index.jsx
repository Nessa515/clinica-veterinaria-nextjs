import Link from 'next/link';
import styles from './styles.module.css';

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <div>
                <h1>Pet Shop</h1>

            <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href='/auth'>
                        <div>
                            <span className={styles.home}>Login</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <div>
                            <span className={styles.home}>Home</span>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link href='/pets'>
                        <div className={styles.pet}>
                            <span className={styles.pets}>Pets</span>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link href='/tutor'>
                        <div className={styles.menu}>
                            <span className={styles.tutores}>Tutores</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
            </div>
        </header>
    )
}

export default Cabecalho;