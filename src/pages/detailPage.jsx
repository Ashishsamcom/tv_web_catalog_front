import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import TvDetailContainer from "../container/tvDetailContainer";

const DetailPage = (props) => {
    // Detail page 

    const tvId = props.match.params.tvId;

    // UI render
    return (
        <>
            <div>
                <Header />
                <TvDetailContainer tvId={tvId} />
                <Footer />
            </div>
        </>
    );
};

export default DetailPage;
