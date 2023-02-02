import axios from "axios";

export const getUniversitiesByCountry = async () => {
  try {
    let data = JSON.parse(localStorage.getItem("universitiesData"));
    if (!data) {
      const response = await axios.get(
        "http://universities.hipolabs.com/search?country=pakistan"
      );
      data = response.data;
      localStorage.setItem("universitiesData", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
