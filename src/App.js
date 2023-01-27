import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./componants/Nav";
import axios from "axios";
import API_KEY from "./Keys";
import NavContents from "./componants/NavContents/NavContents";
import Footer from "./componants/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(10);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`
      );
      //In synchronous operations tasks are performed one at a time and only when one is completed,
      //the following is unblocked. In other words, you need to wait for a task to finish to move to the next one.
      //In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.
      //async: getting the API at any point of time.  //await: wait upto getting the data
      //async makes a function return a Promise. await makes a function wait for a Promise.
      //The Promise object supports two properties: state and result. While a Promise object is "pending" (working), the result is undefined.
      //When a Promise object is "fulfilled", the result is a value.
      //When a Promise object is "rejected", the result is an error object.
      console.log(news.data.articles);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  // A try / catch block is basically used to handle errors in JavaScript.
  // You use this when you don't want an error in your script to break your code.
  // You put your code in the try block, and immediately if there is an error,
  // JavaScript gives the catch statement control and it just does whatever you say.

  // newsApi();  //then also it will render. But in some API, multiple rendering happens so we use useEffect hook to avoid it.
  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadmore]); // to avoid rendering multiple time we use useEffect hook.
  //[catagory]: for rendering once

  return (
    <div className="app">
      <Nav setCategory={setCategory} />
      <NavContents
        newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
      />
      <Footer />
    </div> // passing setCategory as a prop
  );
}

export default App;
