import React from 'react'
import phoneIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/43629737?s=460&u=03bb2f1f7aa7e69a800733382464e346bf0c00e1&v=4" alt="Daniel Pisati"/>
                <div>
                    <strong>Daniel Pisati</strong>
                    <span>Design</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br />
                Beatae saepe, fugiat cupiditate illo error magnam natus repellendus ad quas odit doloribus, 
                enim necessitatibus voluptate adipisci tempora rerum animi veritatis qui.
            </p>
            <footer>
                <p>Price/Hour
                    <strong>$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={phoneIcon} alt="Phone"/>
                    Get in touch
                </button>
            </footer>
        </article>
    )
}
