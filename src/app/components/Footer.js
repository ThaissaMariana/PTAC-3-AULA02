import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Link href="https://ead.ifms.edu.br/">
            <div className="tamanho">
            <Image
                width={80}
                height={80}
                src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"} />
            </div>
            </Link>
        </footer>
    );
}