import React from 'react';
import styles from "./footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.create_account}>
                <p>¿Listo para comenzar?</p>
                <button>Crear cuenta</button>
            </div>
            <div className={styles.suscribe_seccion}>
                <p>Suscribete al newsletter</p>
                <input placeholder='Email' type="text" />
            </div>
            <ul className={styles.services_seccion}>
                <li>Servicios</li>
                <li>Email Marketing</li>
                <li>Campañas</li>
                <li>Marca</li>
                <li>Offline</li>
                <li>Sobre</li>
                <li>Beneficios</li>
                <li>Equipo</li>
                <li>Ayuda</li>
                <li>Preguntas frecuentes</li>
                <li>Contactanos</li>
            </ul>
            <small className={styles.zz}>© 2023 GTCSYS. Todos los derechos reservados</small>
        </section>
    );
};

export default Footer;