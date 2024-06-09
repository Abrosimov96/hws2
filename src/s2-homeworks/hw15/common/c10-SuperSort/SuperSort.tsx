import React from 'react'
import arrowDown from "../../../../assets/arrow-down.svg"
import arrowUp from "../../../../assets/arrow-up.svg"
import arrowUpDown from "../../../../assets/arrow-up-down.svg"
import s from './SuperSort.module.css'

// добавить в проект иконки и импортировать
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrowUpDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case '': return down;
        case down: return up;
        case up:return ''
        default: return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <div className={s.title}>
        <span
            className={s.icon}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                className={s.iconImg}
                id={id + '-icon-' + sort}
                src={icon}
                alt={value}
            />

        </span>
        </div>
    )
}

export default SuperSort
