import React, { useState } from 'react'
import { Burger } from './Burger/Burger'
import { Menu } from './Menu/Menu'

import { BurgerProvider } from '../../helpers/BurgerContext'


export const Wrapper = () => {
    return (
    <>
        <BurgerProvider>
            <Burger/>
            <Menu/>
        </BurgerProvider>
    </>
    )
}
