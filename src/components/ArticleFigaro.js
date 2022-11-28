//missions potentielles pour les dev et agences
import React from 'react'

export default function ArticleFigaro() {
    return(
        <div className="figaro">
            <h2>Article
                <img src="assets/figaro-article-aurore-creation-web.png" alt="logo du figaro pour l article aurore creation web" /> 
            </h2>
            <section className="figaro-article">
                <p>
                    Lisez&nbsp;
                    <a href="https://www.lefigaro.fr/entrepreneur/devenir-cheffe-d-entreprise-avec-l-aide-du-numerique-20221121">l'article</a> sur l'entreprise <span>Aurore Création Web</span> paru dans le Figaro en novembre 2022
                </p>
                <a href="https://www.lefigaro.fr/entrepreneur/devenir-cheffe-d-entreprise-avec-l-aide-du-numerique-20221121">
                    <img src="assets/creation-sites-internet-aurore-article-figaro.png" alt="article du figaro sur l entreprise aurore creation web, créatrice de sites internet" />
                </a>
            </section>
        </div>
    )
}