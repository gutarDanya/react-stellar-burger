import React, {useEffect} from 'react';
import styles from './ModalOverlay.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { closeInfoModalWindow } from '../../services/actions/currentIngredientsToModalAction';
import { useDispatch } from 'react-redux';


export const ModalOverlay = ({children, closePopup}) => {
    const dispatch = useDispatch();


    return(
        <div className={styles.overlay}
        onClick={closePopup}>
            {children}
        </div>
    )
}