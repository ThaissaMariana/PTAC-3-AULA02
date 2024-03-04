import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="footer">
            <Link href="https://ead.ifms.edu.br/">
            <Image
                width={100}
                height={100}
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Moodle-logo.svg/2560px-Moodle-logo.svg.png"} />
            </Link>
            <h1>Footer</h1>
        </footer>
    );
}