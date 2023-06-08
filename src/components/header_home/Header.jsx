import React from 'react';
import styles from "./header.module.css"
import logo from "../../assets/iconos/Logo.png"
import cards from "../../assets/iconos/Group_cards.png"

const Header = () => {
    return (
        <section className={styles.container}>
            <article className={styles.nava}>
                <img src={logo} alt="logo domino" />
                <ul>
                <li>Home</li>
                <li>Ingresar</li>
                <li>Registrarte</li>
                </ul>
            </article>

            <article className={styles.header_title}>
                <div>
                <p>¡Descubre Dominó, la billetera virtual inclusiva!</p>
                <p>Un lugar seguro para tu dinero y tus tarjetas</p>
                </div>
                <img src={cards} alt="cards groups" />
            </article>
        </section>
    );
};

export default Header;