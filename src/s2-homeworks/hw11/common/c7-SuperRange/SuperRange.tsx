import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                minWidth: '300px',
                color: 'rgba(0, 204, 34, 1)',
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: 'rgba(0, 204, 34, 1)',
                    border: '7px solid #fff',
                    outline: '1px solid rgba(0, 204, 34, 1)',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
                '& .MuiSlider-rail': {
                    opacity: 1,
                    boxShadow: 'inset 0px 0px 4px -2px #8B8B8BFF',
                    backgroundColor: '#d0d0d0',
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
