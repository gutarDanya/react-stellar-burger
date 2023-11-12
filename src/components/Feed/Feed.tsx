import React from 'react';
import styles from './Feed.module.css';
import { Order } from './Order/Order';
import { OrederNumbers } from './OrdersNumbers/OrderNumbers';

export const Feed = () => {

    const someArr: string[] | number[] = [145125612, 512315124, 1412312, 124166919124];
    const someArr2: string[] | number[] = ['1', '2', '2', '3']

    const total = '12311';
    const today = '123'

    return (
        <div className={styles.page}>
            <h1 className={`${styles.title} + text text_type_main-large`} >Лента заказов</h1>
            <div className={`${styles.main}`} >
                <div className={`${styles.orders} custom-scroll`}>
                    <Order title='бургер "Вкусный"' price={480} date='сегодня 16:20' numbers={`#10472`}/>
                    <Order title='бургер пива и чипсов' price={480} date='сегодня 16:20' numbers={`#10472`}/>
                    <Order title='бургер Рика и Морти' price={480} date='сегодня 16:20' numbers={`#10472`}/>
                    <Order title='бургер как будто это бургер' price={480} date='сегодня 16:20' numbers={`#10472`}/>
                </div>
                <div className={`${styles.readinessPanel}`}>
                    <div className={`${styles.info}`}>
                        <OrederNumbers type='ready' title='Готовы:' orders={someArr} />
                        <OrederNumbers type='noReady' title='В работе:' orders={someArr2} />
                    </div>
                    <p className={`${styles.text} text text_type_main-medium`}>Выполнено за все время:</p>
                    <p className={`${styles.numbers} text text_type_digits-large`}>{total}</p>
                    <p className={`${styles.text} text text_type_main-medium`}>Выполнено за сегодня:</p>
                    <p className={`${styles.numbers} text text_type_digits-large`}>{today}</p>
                </div>
            </div>
        </div>
    )
}