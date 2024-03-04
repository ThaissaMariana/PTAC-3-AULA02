import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>Página não encontrada</h2>
            <Link href="/">Retornar para Home</Link>
        </div>
    );
}