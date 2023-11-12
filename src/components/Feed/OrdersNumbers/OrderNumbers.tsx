import React from "react";
import styles from './OrderNumbers.module.css';


export const OrederNumbers: React.FC<IProps> = ({ type, orders, title }) => {

    return (
        <div className={`${styles.container}`}>
            <h3 className={`${styles.title} text text_type_main-medium`}>{title}</h3>
            <div className={`${styles.orders} text text_type_digits-default`}>
                {orders && orders.length > 0 && orders.map((order: number | string, i: number) => {
                    return <p key={i} className={type === 'ready' ? styles.ready : styles.cooking}>{order}</p>
                })}
            </div>
        </div>
    )
}




interface IProps {
    type: string;
    orders: number[] | string[];
    title: string;
}