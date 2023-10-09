import React from "react";
import styles from './ProfilePage.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export const ProfilePage = () => {
    return(
        <main className={styles.container}>
            <div className={styles.window}>
            <div>
                <p></p>
            </div>
            <div>
            <Input
            type='text'
            placeholder="Марк"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='ShowIcon'
             />
             <Input
            type='text'
            placeholder="mail@stellar.burgers"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='ShowIcon'
             />
             <Input
            type='text'
            placeholder="******"
            name='new-password'
            error={false}
            size='default'
            extraClass="ml-1"
            icon='ShowIcon'
             />
            </div>
            </div>
        </main>
    )
}