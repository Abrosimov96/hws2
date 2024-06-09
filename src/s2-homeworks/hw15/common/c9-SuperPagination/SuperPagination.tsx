import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.floor(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: string) => {
        onChange(page, +event)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    ".MuiPagination-ul": {
                        gap: "12px"
                    },
                    ".MuiButtonBase-root": {
                        minWidth: "24px",
                        height: "24px",
                        margin: "0",
                        color: "inherit",
                        borderRadius: "2px",
                        "&.Mui-selected, &.Mui-selected:hover": {
                            color: "#fff",
                            backgroundColor: "#0066CC"
                        },
                        "&:hover": {
                            color: "#fff",
                            backgroundColor: "#0178f0",
                        }
                    },
                    ".MuiPaginationItem-ellipsis": {
                        minWidth: "24px",
                        height: "24px",
                        margin: "0",
                        padding: "0",
                        color: "inherit",
                        lineHeight: "1.8"
                    }
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
