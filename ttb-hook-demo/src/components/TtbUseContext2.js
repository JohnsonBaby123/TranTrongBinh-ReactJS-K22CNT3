import React, { useContext } from 'react'
import { ThemeContext } from './TtbUseContext'

export default function TtbUseContext2() {
    const theme = useContext(ThemeContext);
    return (
    <div className={theme}>
        <h2>TtbUseContext2</h2>
        <p>
            <b>2210900004</b>
            <b>Trần Trọng Bình</b>
            <i>K22CNT3</i>
        </p>
    </div>
  )
}
