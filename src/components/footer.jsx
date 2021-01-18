import { Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from "react"

const useStyles = makeStyles({
    // style

    footer: {
        width: '100%',
        bottom: 0,
        position: 'fixed',
        left: 0,
        right: 0,
        background: "#001222"
    },
    footerTxt: {
        textAlign: 'center',
        fontSize: '20px',
        color: '#ffffff'
    }
});


export default function Footer() {
    // Footer component 

    const classes = useStyles();

    //UI redner
    return (
        <div className={classes.footer}>
            <Toolbar>
                <Typography className={classes.footerTxt} >All Rights reserved @TV_web_catolog</Typography>
            </Toolbar>
        </div>
    )
}