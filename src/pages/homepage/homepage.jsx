import React, { useEffect, useState } from "react";
import HeroHeader from "../../components/hero-banner/hero-header";
import Loader from "../../components/loader/loader";
import StyledHomePage from "./style";
import { useQuery } from "@apollo/client";
import HOMEPAGE_QUERY from "../../gql-query/HomepageQuery";



const HomePage = () => {
    const { data } = useQuery(HOMEPAGE_QUERY);
    const [texts, setTexts] = useState(null);
    const [featuredItems, setFeaturedtems] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (data) {
          setFeaturedtems(data?.homePageCollection?.items[0]?.featuredProjectsCollection?.items)
        }
    }, [data])

  return (
    <StyledHomePage className="homepage">
      {loader ? (<Loader setLoader={setLoader} />) : (<HeroHeader featuredItems={featuredItems} />)}
    </StyledHomePage>
  );
};

export default HomePage;
