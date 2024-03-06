import Link from 'next/link'
import styles from './components/not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.card}>
            <h2 className="">Página não encontrada</h2>
            <Link href="/">Retornar para Home</Link>
        </div>
    );
}