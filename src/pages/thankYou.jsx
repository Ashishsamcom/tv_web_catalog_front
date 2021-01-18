import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    // style

    root: {
        width: "100%",
        marginTop: 20
    },
    container: {
        maxHeight: 440,
    },
    txtDiv: {
        left: 0,
        right: 0,
        position: 'absolute',
        top: '50%',
        textAlign: 'center'
    },
    txt: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    continueTxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#00121"
    }
});

const Thankyou = () => {
    // After place order thakyou page

    const classes = useStyles();

    //UI render
    return (
        <>
            <div>
                <Header />
                <div className={classes.txtDiv}>
                    <Typography className={classes.txt} >Thank you for order</Typography>
                    <Link
                        to={`/`}
                        style={{ color: "#001222" }}
                    >
                        <Typography className={classes.continueTxt}>Continue</Typography>
                    </Link>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Thankyou;
