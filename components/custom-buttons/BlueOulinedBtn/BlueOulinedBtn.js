import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Styles from '../../../styles/components-style/custom-buttons/blueOutlinedBtn/BlueOutlinedBtn.module.css'

const BlueOulinedBtn = ({ btnTitle, btnLink, anchor, navlink, ariaLabel }) => {
    return (
        <>
            {
                navlink ? <Button className={`${Styles.blueOutlinedBtn} rounded-pill me-1 mt-md-0 mt-2`}>
                    <Link href={btnLink} aria-label={ariaLabel || "Icon Outlined"}>
                        {/* <a> */}
                            {btnTitle}
                        {/* </a> */}
                    </Link>
                </Button> : anchor ? <Button className={`${Styles.blueOutlinedBtn} rounded-pill me-1 mt-md-0 mt-2`} >
                    <a href={btnLink}  aria-label={ariaLabel || "Icon Outlined"}>{btnTitle}</a>
                </Button> : null
            }
        </>
    )
}

export default BlueOulinedBtn