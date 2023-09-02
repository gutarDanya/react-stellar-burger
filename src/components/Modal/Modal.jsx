import React, {useEffect} from 'react';
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { closeInfoModalWindow } from '../services/actions/currentIngredientsToModalAction';
import { useDispatch } from 'react-redux';


export const Modal = ({children, title, closePopup}) => {
    const dispatch = useDispatch();


    return(
        <div className={styles.popup}>
            <div className={styles.container}>
                <h2 className={styles.text}>{title}</h2>
                <CloseIcon
                onClick={closePopup}/>
            </div>
            {children}
        </div>
    )
}