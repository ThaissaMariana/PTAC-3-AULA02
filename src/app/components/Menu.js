import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";
import localizacao from "../localizacao/page";

export default function Menu(){
    return(
        <header className={styles.cabecalho}>
            <div className={styles.separar}>
            <Image
                width={50}
                height={50}
                src={"https://www.ifms.edu.br/marcaifms.png"} />
            </div>
            <nav className="nav">
                   <div className="compo">
                    <Link href="/">
                        Home
                    </Link>
                    </div>
                    
                    <div className="compo">
                    <Link href="/registro">
                        Registrar
                    </Link>
                    </div>
                    
                    <div className="compo">
                    <Link href="/localizacao">
                        Localização
                    </Link>
                    </div>
            </nav>
        </header>
    );
} 