import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        const timerID = setInterval(() => {
            setDate(new Date())
            console.log('timer')
        }, 1000)
        // @ts-ignore
        setTimerId(timerID)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }


    const stringTime = `${date.getHours()}:${date.getMinutes() > 9 
        ? date.getMinutes() : '0' + date.getMinutes()}:${date.getSeconds() > 9
        ? date.getSeconds() : '0' + date.getSeconds()}`

    const stringDate = `${date.getDate() > 9
        ? date.getDate() : '0' + date.getDate()}.${date.getMonth() > 8
        ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}.${date.getFullYear()}`

    const day = date.getDay()
    const stringDay = day === 0
        ? 'Sunday' : day === 1
            ? 'Monday' : day === 2
                ? 'Tuesday' : day === 3
                    ? 'Wednesday' : day === 4
                        ? 'Thursday' : day === 5
                            ? 'Friday' : 'Saturday'
    const month = date.getMonth()
    const stringMonth = month === 0
        ? 'January' : month === 1
            ? 'February' : month === 2
                ? 'March' : month === 3
                    ? 'April' : month === 4
                        ? 'May' : month === 5
                            ? 'June' : month === 6
                                ? 'July' : month === 7
                                    ? 'August' : month === 8
                                        ? 'September' : month === 9
                                            ? 'October' : month === 10
                                                ? 'November' : 'December'

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
