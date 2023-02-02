"use client";
import React, { useState, useEffect } from "react";
import { Alert } from "antd";

// Styles
import styles from "./page.module.css";

// Apis
import { getUniversitiesByCountry } from "@/apiActions/university/action.universities";
import { getCountries } from "@/apiActions/country/action.countries";

// Components
import DataTable from "@/components/Table/Table";

const Home = () => {
  const [univeristiesData, setUniversitiesData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getUniversitiesByCountry(), getCountries()])
      .then(([univerisities, countries]) => {
        setUniversitiesData(univerisities);
        setCountriesData(countries);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  return (
    <div className={styles.container}>
      {error ? (
        <Alert message="Error" description={error} type="error" />
      ) : (
        <>
          <h1>Data from University Api</h1>
          {univeristiesData ? (
            <DataTable
              data={univeristiesData}
              type="university"
              setData={setUniversitiesData}
            />
          ) : (
            <h1>loading...</h1>
          )}

          <h1>Data from Country Api</h1>
          {countriesData ? (
            <DataTable
              data={countriesData}
              type="country"
              setData={setCountriesData}
            />
          ) : (
            <h1>loading...</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
