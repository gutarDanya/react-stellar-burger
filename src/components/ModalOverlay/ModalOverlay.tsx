import React, {useEffect} from 'react';
import styles from './ModalOverlay.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../services/hooks/reduxHooks';


export const ModalOverlay: React.FC<IProps> = ({children, closePopup}) => {
    const dispatch = useAppDispatch();


    return(
        <div className={styles.overlay}
        onClick={closePopup}>
            {children}
        </div>
    )
}

interface IProps {
    closePopup: any;
}