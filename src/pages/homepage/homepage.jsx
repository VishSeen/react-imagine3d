import React, { useEffect, useState } from "react";
import HeroHeader from "../../components/hero-banner/hero-header";
import Loader from "../../components/loader/loader";
import StyledHomePage from "./style";
import { useQuery } from "@apollo/client";
import HOMEPAGE_QUERY from "../../gql-query/HomepageQuery";



const HomePage = () => {
    const { loading, error, data } = useQuery(HOMEPAGE_QUERY);
    const [texts, setTexts] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (data) {
            setTexts(data?.homePageCollection?.items[0]?.loadertext?.json?.content)
        }
    }, [data])

  return (
    <StyledHomePage className="homepage">

          {loader ? <Loader loader={loader} setLoader={setLoader}/> : <HeroHeader />}

    </StyledHomePage>
  );
};

export default HomePage;
