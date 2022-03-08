import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";

const Card = () => {
  const [articles, setArticles] = useState([
    {
      source: { id: null, name: "News9live.com" },
      author: "News9 Staff",
      title:
        "Scientists create DNA computer that can tell if water is safe to drink within minutes - News9 Live",
      description:
        "A range of logic functions are performed by genetic networks that mimic electronic circuits",
      url: "https://www.news9live.com/science/scientists-create-dna-computer-that-can-tell-if-water-is-safe-to-drink-within-minutes-154400",
      urlToImage:
        "https://media.news9live.com/h-upload/2022/02/18/242050-rosalindcropped.jpg",
      publishedAt: "2022-02-18T10:33:44Z",
      content:
        "Synthetic biologists from Northwestern University have developed a genetic computer that can let users know within minutes if water is safe to drink. The low-cost, handheld, easy-to-use device uses b… [+3169 chars]",
    },
    {
      source: { id: null, name: "Tech Explorist" },
      author: "https://www.facebook.com/malewar.amit",
      title:
        "Physicists made one of the highest performance atomic clocks ever - Tech Explorist",
      description:
        "Ultraprecise atomic clock poised for new physics discoveries.",
      url: "https://www.techexplorist.com/physicists-made-one-highest-performance-atomic-clocks-ever/44845/",
      urlToImage:
        "https://www.techexplorist.com/wp-content/uploads/2022/02/optical-atomic-clocks.jpg",
      publishedAt: "2022-02-18T09:54:37Z",
      content:
        "Atomic clocks are clocks used to track the resonances of atom frequencies, usually the atoms of cesium or rubidium. The clocks work by tracking the energy level of electrons.\r\nAtomic clocks take adva… [+3931 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Akash Dutta",
      title:
        "NASA vs Elon Musk: SpaceX satellites can KILL astronauts, increase Asteroid threat to Earth - HT Tech",
      description:
        "NASA has written a five-page letter warning that Elon Musk led SpaceX satellites can end up killing astronauts and increase the threat an asteroid hitting Earth.",
      url: "https://tech.hindustantimes.com/tech/news/nasa-vs-elon-musk-spacex-satellites-can-kill-astronauts-increase-asteroid-threat-to-earth-71645176606539.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/02/18/1600x900/4-8-nrc-evaluates-nasas-orbital-debris-programs_1645176834704_1645176860720.jpg",
      publishedAt: "2022-02-18T09:37:11Z",
      content:
        "Taking a strong stance, NASA has submitted a five-page letter to the Federal Communications Commission highlighting the dangers of SpaceX plans for Starlink Gen2 satellite launch. NASA has urged the … [+2264 chars]",
    },
  ]);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b651f4223c924efba4dd266f14a5eac5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  useEffect(() => {
    // updateNews();
  }, []);

  return (
    <div className={classes.container}>
      {articles.map((item) => {
        return (
          <span className={classes.card}>
            <h3>{item.title}</h3>
            <img src={item.urlToImage} alt="" />
            <small className={classes.date}>
              publishedAt - {new Date(item.publishedAt).toGMTString()}
            </small>
            <p className={classes.description}>{item.content}</p>
            <button className={classes.btn}>
              <a href={item.url}>Read-more</a>
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default Card;
