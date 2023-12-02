import React, { useState } from 'react'
import { Burger } from './Burger/Burger'
import { Menu } from './Menu/Menu'

type Props = {
    theme: string
    changeTheme: (theme: string) => void
}

export const Wrapper = ({theme, changeTheme}: Props) => {

    const [open, setOpen] = useState(false)
    const toogle = () => setOpen(!open)
    return (
    <>
    <Burger open={open} onClick={toogle}/>
    <Menu theme={theme} changeTheme={changeTheme} open={open}/>
    </>
    )
}
