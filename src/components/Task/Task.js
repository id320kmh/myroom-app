import React from 'react';
import TaskExample from '../../assets/images/task-example.jpg';

import './Task.css';

function Task() {

    return (
        <div className="task__container">
            <div className="task__row">
                <div className="task__block-top">
                    <h2>Задание</h2>
                    <p>Необходимо сверстать блок, который можно скроллить по горизонтали, с подгрузкой дополнительных элементов</p>
                </div>
                <div className="task__block-bottom">
                    <h2>Требования </h2>
                    <p>- Можно использовать любые шаблонизаторы, препроцессоры, сборщики</p>
                    <p>- Верстка не должна ломаться при добавлении каких-либо элементов</p>
                    <p>- Все непонятные моменты в макете желательно продумать самому</p>
                    <p>- Infinite Scroll сделать без готовых решений</p>
                    <h2>Пример </h2>
                    <img src={TaskExample} alt="" className="task__img"></img>
                </div>
            </div>
        </div>
    )
}


export default Task;

