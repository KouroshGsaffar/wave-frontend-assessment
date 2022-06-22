import { createAsyncThunk } from "@reduxjs/toolkit";

// NPM
const axios = require("axios");

// Async fetch data
const fetchCustomerList = createAsyncThunk(
  "customers",
  async () => {
    // Server address
    const server = 'https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json';

    // Get
    const fetchData = await axios({
      method: "get",
      url: server,
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      if (response.status !== 200) {
        // Console error message
        console.error(":( Error, no fetched data");

        return {};
      } else {
        // Console success message
        const message = ":) Success, fetched data";
        const style =
          "color: green; background: #f0ffec; display: block; margin: 0px; padding: 0px;";
        console.log("%c" + message, style);

        return response.data;
      }
    });

    return fetchData;
  }
);
export default fetchCustomerList