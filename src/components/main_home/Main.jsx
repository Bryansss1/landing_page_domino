import React from 'react';
import styles from "./main.module.css"
import mobile_principal from "../../assets/iconos/mobile.png"
import money from "../../assets/iconos/money.png"
import mobile2 from "../../assets/iconos/mobile2.png"
import mobile3 from "../../assets/iconos/mobile3.png"
import mobile4 from "../../assets/iconos/mobile4.png"
import feedback from "../../assets/feedback/feedback.png"
import bitcoin from "../../assets/iconos/bitcoin.png"
import cardfeedback from "../../assets/feedback/card.png"
import textCard from "../../assets/feedback/text.png"

const Main = () => {
    const desktop=window.matchMedia("(min-width:700px)").matches
    return (
        <section className={styles.container}>

            <article className={styles.mobile_seccion_1}>
                <img src={mobile_principal} alt="descubre domino" />
                <div>
                <h4>¡Descubre Dominó, la billetera virtual que prioriza la accesibilidad!</h4>
                <p>Colores y letras optimizados para todos. Modo oscuro para mayor comodidad en cualquier momento. Accede desde cualquier dispositivo sin necesidad de descargar. ¡Disfruta de una billetera virtual conveniente y amigable para todos!</p>
                </div>
            </article>

            <article className={styles.caracteristicas_seccion}>
                <div>
                <h4>Nuestras características</h4>
                <p>Con nuestra interfaz fácil de usar, puede iniciar una transferencia con solo unos pocos clics. </p>
                </div>
                <img className={styles.zzz} src={money} alt="money" />
            </article>

            <article className={styles.mobile_seccion_2}>
                <img src={mobile2} alt="caracteristicas domino" />
                <div>
                <h4>Transparencia y simplicidad</h4>
                <p>Priorizamos la seguridad de la información y las transacciones de nuestros usuarios, utilizando la última tecnología y las mejores prácticas para mantener sus datos seguros.</p>
                </div>
            </article>

            <article className={styles.mobile_seccion_3}>
                <img src={mobile3} alt="pago servicios" />
                <div>
                <h4>Paga tus servicios</h4>
                <p>Queremos que puedas disfrutar nuestra plataforma como cualquier otra, por eso sabemos lo importante que es para vos estar al día con tus servicios.</p>
                </div>
            </article>

            <article className={styles.mobile_seccion_2}>
                <img src={mobile4} alt="salvo y seguro imagen" />
                <div>
                <h4>Salvo y seguro</h4>
                <p>Hace tus transacciones y envía dinero a quien quieras, ya sea un contacto o una persona nueva.</p>
                </div>
            </article>

            <div className={styles.feed2}>
                <img src={bitcoin} alt="bitcoin imagen"/>
            </div>

            <div className={styles.feed}>
            {desktop?(
                <>
                    <img src={cardfeedback} alt="card image" />
                    <img src={textCard} alt="text card" />
               </>
            ):<img  src={feedback} alt="feedback image" />}
            </div>
            
        </section>
    );
};

export default Main;