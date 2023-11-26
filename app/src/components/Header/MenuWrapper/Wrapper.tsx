import React, { useState } from 'react'
import { Burger } from './Burger/Burger'
import { Menu } from './Menu/Menu'

export const Wrapper = () => {
    const [open, setOpen] = useState(false)
    const toogle = () => setOpen(!open)
    return (
    <>
    <Burger open={open} onClick={toogle}/>
    <Menu open={open}/>
    </>
    )
}
