import React, {useEffect} from 'react';
import styles from './ModalOverlay.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


export const ModalOverlay = ({children, closePopup}) => {
    const dispatch = useDispatch();


    return(
        <div className={styles.overlay}
        onClick={closePopup}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    closePopup: PropTypes.func.isRequired
}