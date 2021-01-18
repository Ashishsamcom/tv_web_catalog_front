import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTvs } from "../store/actions/tvList";
import Header from "../components/header";
import Footer from "../components/footer";
import TvListContainer from "../container/tvListContainer";


const Home = () => {
  // Main home screen

  const dispatch = useDispatch();
  const { tvList } = useSelector((state) => state.tvs);

  useEffect(() => {
    fetchTvsApi();
  }, []);

  const fetchTvsApi = async () => {
    // Api call for fetch tvlist
    dispatch(fetchTvs());
  };

  // UI render
  return (
    <>
      <div>
        <Header />
        <TvListContainer data={tvList} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
