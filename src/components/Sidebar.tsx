import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            alt=""/>
           
            <div className={styles.profile}>
            <Avatar src="https://avatars.githubusercontent.com/u/112669294?s=400&u=0a1ca4a6deae078bff537590915e34df38b59386&v=4"/>

            <strong>Milton Marques</strong>
            <span> Web Developer</span>
                
            </div>
            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}
//https://github.com/edlaniasantos.png