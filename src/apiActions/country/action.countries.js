import axios from "axios";

export const getCountries = async () => {
  try {
    let data = JSON.parse(localStorage.getItem("countriesData"));
    if (!data) {
      const response = await axios.get("https://restcountries.com/v2/all");
      data = response.data;
      localStorage.setItem("countriesData", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
