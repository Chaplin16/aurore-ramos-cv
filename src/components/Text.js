//missions potentielles pour les dev et agences
import React from 'react'

export default function Text() {
  return (
    <div className="text">
        <h2 className='text-center mb-5'>
            Freelance <br/> Aurore <br/> Intégrateur web <br/>Petites mains en developpement web
        </h2>
        <ul className='service'>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>Intégration de maquette (html, css, javascript, bootstrap, sass)</p>
            </li>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>Saisie en base de données SQL et NoSQL</p>
            </li>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>Optimisation de photos (nommer, redimentionner, alléger)</p>
            </li>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>Correction et relecture de textes en français</p>
            </li>
        </ul>
    </div>
  )
}
