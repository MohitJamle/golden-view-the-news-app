import React, { useState,useEffect } from "react";
import classes from "./Card.module.css";

const Home = () => {
   const [userPassword, setUserPassword] = useState("");

   useEffect(() => {
    window.addEventListener("message", (message) => {
      console.log(message.data); // Wayne is coming!!!
      window.ReactNativeWebView.postMessage("Client received data");
      setUserPassword(message.data);
    });
  }, []);
  
  const articles = [
    {
      source: { id: null, name: "NDTV News" },
      author: "Edited by NDTV News Desk",
      title:
        "Ukraine-Russia War Live Updates: Humanitarian Crisis Worsens As Attacks Continue - NDTV",
      description:
        'Ukraine and Russia made tentative progress in talks Monday but failed to reach a deal on creating "humanitarian corridors" from pummelled cities, as the bloodshed from Moscow\'s invasion mounted.',
      url: "https://www.ndtv.com/world-news/ukraine-war-live-updates-russia-ukraine-hold-third-round-of-talks-no-breakthrough-on-humanitarian-corridors-2809624",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/2kfi9njo_ukraine-war_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T10:33:03Z",
      content:
        'Ukraine War: Vladimir Putin said he is not sending conscripts or reservists to fight\r\nUkraine and Russia made tentative progress in talks Monday but failed to reach a deal on creating "humanitarian c… [+14300 chars]',
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title: "Uttar Pradesh Exit Polls: The BJP Vs Akhilesh Yadav - NDTV",
      description:
        "Most opinion polls forecast that the BJP is going to win by a clear and convincing margin, although, on average, the BJP is forecast to win about 100 seats fewer than in the 2017 landslide.",
      url: "https://www.ndtv.com/india-news/uttar-pradesh-exit-polls-the-bjp-vs-akhilesh-yadav-2810278",
      urlToImage:
        "https://c.ndtvimg.com/2022-02/ob0sj7u8_uttar-pradesh-voting_625x300_23_February_22.jpg",
      publishedAt: "2022-03-08T10:04:00Z",
      content:
        "The results of the Uttar Pradesh assembly polls will be announced on March 10.\r\nNew Delhi: Most opinion polls forecast that the BJP is going to win by a clear and convincing margin, although, on aver… [+1718 chars]",
    },

    {
      source: { id: null, name: "The Indian Express" },
      author: "Lifestyle Desk",
      title:
        "Happy International Women's Day 2022: Wishes Images, Whatsapp Messages, Status, Quotes and Greetings - The Indian Express",
      description:
        "Happy International Women's Day 2022 Wishes Images, Messages, Status, Quotes, Photos, GIF Pics, HD Wallpapers:  This special day is celebrated annually on March 8 to raise awareness about gender equality and women empowerment",
      url: "https://indianexpress.com/article/lifestyle/happy-international-womens-day-2022-wishes-images-whatsapp-messages-status-quotes-and-greetings-7785703/",
      urlToImage:
        "https://images.indianexpress.com/2021/03/Happy-International-Womens-Day-FEATURE.jpg",
      publishedAt: "2022-03-08T09:23:29Z",
      content:
        "Happy International Women’s Day 2022 Wishes Images, Messages, Status, Photos, Quotes: Every year, March 8 is celebrated as International Women’s Day across the world to promote women’s rights and hon… [+2028 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sports Desk",
      title:
        "Bismah Maroof's cradle celebration: Pakistan skipper dedicates half-century to her baby Fatima - The Indian Express",
      description:
        "Pakistan skipper Bismah Maroof scores a half-century and celebrated it with a baby rocking gesture looking at her baby in the dressing room.",
      url: "https://indianexpress.com/article/sports/cricket/womens-day-womens-world-cup-pakistan-skipper-bismah-maroof-half-century-baby-fatima-cradle-celebration-7806134/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/Bismah-Maroof-Baby-Fatima.jpg",
      publishedAt: "2022-03-08T09:20:46Z",
      content:
        "Just a second match into her comeback after childbirth and Pakistan captain scores a half-century and she has dedicated it to her baby girl, Fatima. Bismah Maroof celebrated her fifty with a baby roc… [+2554 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Reuters",
      title:
        "Russia backs IAEA chief's idea of Ukraine meeting but not at Chernobyl - Hindustan Times",
      description:
        "Russia's invasion of Ukraine is the first time war has raged in a country with such an advanced and established nuclear power programme, the International Atomic Energy Agency has said. | World News",
      url: "https://www.hindustantimes.com/world-news/russia-backs-iaea-chief-s-idea-of-ukraine-meeting-but-not-at-chernobyl-101646650884898.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/ukraine_russia_iaea_talks_nuclear_energy_chernobyl_1646653170358_1646653170594.JPG",
      publishedAt: "2022-03-08T09:15:00Z",
      content:
        "Russia backs UN atomic watchdog chief Rafael Grossi's idea of a trilateral meeting with Ukraine on ensuring the safety of nuclear facilities there during Russia's invasion but not at Chernobyl as Gro… [+1972 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Adam Gilchrist pays tribute to long-time friend Shane Warne | 7.30 - ABC News (Australia)",
      description:
        "The country is still in shock after the sudden death of Shane Warne on Friday, particularly the cricket world. Former Australian wicketkeeper now commentator...",
      url: "https://www.youtube.com/watch?v=1UC--zrxD7E",
      urlToImage: "https://i.ytimg.com/vi/1UC--zrxD7E/hqdefault.jpg",
      publishedAt: "2022-03-08T08:46:14Z",
      content: null,
    },
    {
      source: { id: null, name: "Devdiscourse" },
      author: "Devdiscourse News Desk",
      title:
        "ESA's Solar Orbiter speeding towards historic first close pass of Sun - Devdiscourse",
      description:
        "Read more about ESA's Solar Orbiter speeding towards historic first close pass of Sun on Devdiscourse",
      url: "https://www.devdiscourse.com/article/science-environment/1953182-esas-solar-orbiter-speeding-towards-historic-first-close-pass-of-sun",
      urlToImage:
        "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/22_01_2020_20_37_05_9727465.jpg?width=920&format=jpeg",
      publishedAt: "2022-03-08T08:32:09Z",
      content:
        "The ESA/NASA Solar Orbiter spacecraft is on its way to a historic first close pass of the Sun. According to the European Space Agency, the spacecraft will pass the orbit of Mercury on March 14 and wi… [+2089 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "RBI Governor Shaktikanta Das launches UPI123Pay. Five key questions answered - Moneycontrol",
      description:
        "UPI on feature phones will help people in rural areas who cannot afford a smartphone to participate in UPI transactions",
      url: "https://www.moneycontrol.com/news/business/banks/rbi-governor-shaktikanta-das-launches-upi123pay-five-key-questions-answered-8206901.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2019/01/Shaktikanta-Das_RBI_Reserve-bank_RBI_RESERVE-BANK-770x433.jpg",
      publishedAt: "2022-03-08T08:31:33Z",
      content:
        "Reserve Bank of India (RBI) Governor Shaktikanta Das on March 8 launched UPI for feature phones called UPI123Pay. He also unveiled a 24x7 helpline for digital payments DigiSaathi.\r\nUPI on feature pho… [+2372 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Share Market LIVE: Sensex rises over 550 pts from day’s low, Nifty tops 15800; Infosys, TCS, Sun Pharma shine - The Financial Express",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMixwFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9tYXJrZXQvc2hhcmUtbWFya2V0LXRvZGF5LWxpdmUtdXBkYXRlcy1zZW5zZXgtbmlmdHktcnVwZWUtdnMtZG9sbGFyLXNneC1uaWZ0eS1uYXNhcS1iZWFyLW1hcmtldC1jcnVkZS1vaWwtcnVzc2lhLXVrcmFpbmUtd2FyLXRjcy1idXliYWNrLTgtbWFyY2gtMjAyMi10dWVzZGF5LzI0NTM2OTUv0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-08T08:07:22Z",
      content: null,
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Sagar",
      title:
        "Apple to introduce green iPhone 13 at today's event, Mac Studio's renders surface - GSMArena.com news - GSMArena.com",
      description: "The company is also expected to unveil new iPhone SE.",
      url: "https://www.gsmarena.com/apple_iphone_13_green_ipad_air_purple_mac_studio-news-53461.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/apple-iphone-13-green-ipad-air-purple-mac-studio/-952x498w6/gsmarena_001.jpg",
      publishedAt: "2022-03-08T08:02:01Z",
      content:
        "Apple's first event of 2022 will begin later today at 6PM UTC, where it's expected to announce the new iPhone SE and a refreshed iPad Air. However, a new report claims these won't be the only product… [+802 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Video Desk",
      title:
        "Apple Offers Massive Discount On iPhone 13, MacBooks, AirPods, iPads And More At Vijay Sales On Occasion Of I - India.com",
      description:
        "Apple is selling iPhone 13 at a discounted price of Rs. 71,900, down from it's actual launch price which was Rs.79,9000. Besides this, customers can also get cashbacks and exchange discount benefits on older iPhone models like iPhone 12 and iPhone 11.",
      url: "https://www.india.com/video-gallery/apple-offers-massive-discount-on-iphone-13-macbooks-airpods-ipads-and-more-at-vijay-sales-on-occasion-of-international-womens-day-watch-5273358/",
      urlToImage:
        "https://s3.india.com/wp-content/uploads/2015/06/indiacom-image-banner_01.jpg",
      publishedAt: "2022-03-08T07:50:00Z",
      content:
        "Apple Gives Massive Discount On iPhone 13 on Women’s day : Tech giant Apple is offering a massive  discount on iPhone 13 and other Apple products on Vijay Sales, to celebrate International Women’s Da… [+882 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "PTI",
      title:
        "President Ram Nath Kovind confers 'Nari Shakti Puraskars' on 29 women - Times of India",
      description:
        "India News: NEW DELHI: On International Women's Day on Tuesday, President Ram Nath Kovind conferred the 'Nari Shakti Puraskars' on 29 outstanding individuals for .",
      url: "https://timesofindia.indiatimes.com/india/president-ram-nath-kovind-confers-nari-shakti-puraskars-on-29-women/articleshow/90071672.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90071715,width-1070,height-580,imgsize-23824,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-08T07:23:00Z",
      content:
        "President Ram Nath Kovind confers 'Nari Shakti Puraskars' on 29 women\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>President Ram Nath Kovind confers 'Nari Shakti Puraskars' on 29 women</li></ul>",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Russia To Provide Evacuation Corridors Today Amid India's Students Worry - NDTV",
      description:
        '"In order to conduct a humanitarian operation from 12.30 IST on March 8, 2022, Russia declares cease-fire and is ready to provide humanitarian corridors," the Russian embassy in India tweeted.',
      url: "https://www.ndtv.com/world-news/russia-declares-ceasefire-from-12-30-pm-to-provide-corridors-for-evacuation-amid-india-worry-on-students-stuck-in-sumy-in-ukraine-2809772",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/hvj0as6_indians-students-ukraine-sumy-650_625x300_05_March_22.jpg",
      publishedAt: "2022-03-08T07:10:00Z",
      content:
        'The Russian embassy released a list of "humanitarian corridors" that it is ready to provide.\r\nNew Delhi: Russia today declared a cease-fire to conduct a "humanitarian operation" starting at 12:30 pm … [+3957 chars]',
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Vedant Yadav",
      title:
        "Watch: Virat Kohli's Gesture For Specially-Abled Fan - NDTV Sports",
      description:
        "Virat Kohli, who enjoys a huge fan following across the globe, is winning hearts on social media for his latest gesture towards a specially-abled fan.",
      url: "https://sports.ndtv.com/india-vs-sri-lanka-2022/india-vs-sri-lanka-virat-kohlis-heartwarming-gesture-towards-specially-abled-fan-watch-2809915",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/mi9uhtrs_virat-kohli_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T07:10:00Z",
      content:
        "Regarded as one of the best batters of the modern era, former India captain Virat Kohli played his 100th Test last week. He was felicitated by the Indian team with the team also giving him a guard of… [+1681 chars]",
    },
    {
      source: { id: null, name: "91mobiles" },
      author: null,
      title:
        "Samsung Galaxy F23 5G with Snapdragon 750G SoC, 120Hz display, 50MP triple cameras launched in India: price, specifications - 91mobiles",
      description:
        "Samsung Galaxy F23 5G price in India and Flipkart sale date have been revealed. Check out the phone's specifications and details here.",
      url: "https://www.91mobiles.com/hub/samsung-galaxy-f23-5g-launched-india-price-specifications-sale-date/",
      urlToImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/03/samsung-galaxy-f23-5g-specs-feat.jpg",
      publishedAt: "2022-03-08T06:57:09Z",
      content:
        "Samsung Galaxy F23 5G price in India, sale date\r\nSamsung Galaxy F23 5G price in India is Rs 17,499 for the 4GB/128GB model and Rs 18,499 for the 6GB/128GB variant. The device will be available at an … [+2247 chars]",
    },
    {
      source: { id: null, name: "The Quint" },
      author: "Raajwrita Dutta",
      title:
        "Garena Free Fire Redeem Codes for 8 March 2022: Check Today’s List - The Quint",
      description:
        "The Garena Free Fire Redeem Codes are released daily on the official website for the players to win freebies. Claim the redeem codes for 8 March 2022 from the redemption website.",
      url: "https://www.thequint.com/tech-and-auto/tech-news/garena-free-fire-redeem-codes-8-march-2022-steps-to-redeem-codes",
      urlToImage:
        "https://images.thequint.com/thequint%2F2022-03%2Fefda4a5c-bd9f-4417-b5c4-039746f5cc9f%2Fgarena.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-03-08T06:26:08Z",
      content:
        "The players can finally use the Garena Free Fire Redeem Codes for today, 8 March 2022.\r\nHere is a list of the redeem codes that the players can utilise on Tuesday, 8 March 2022 to claim rewards:\r\nFA9… [+234 chars]",
    },
    {
      source: { id: null, name: "Investing.com" },
      author: "Reuters",
      title:
        "Oil firms, Asia shares drop as Ukraine talks make little progress By Reuters - Investing.com",
      description:
        "Oil firms, Asia shares drop as Ukraine talks make little progress",
      url: "https://www.investing.com/news/stock-market-news/oil-seesaws-asia-shares-dip-as-ukraine-talks-make-little-progress-2779821",
      urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEA730D8_L.jpg",
      publishedAt: "2022-03-08T06:22:00Z",
      content:
        "By Julie Zhu\r\n(Reuters) -Oil prices firmed and Asian shares fell on Tuesday as Ukraine peace talks made little headway and the prospect of a ban on oil imports from Russia triggered investor fears ov… [+3859 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "etimes.in",
      title:
        "Sonakshi Sinha clarifies on non-bailable warrant against her: This is pure fiction and the work of a rogu - Times of India",
      description:
        "Sonakshi Sinha recently hit headlines after it was reported that a non-bailable warrant was issued against her in a",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/sonakshi-sinha-clarifies-on-non-bailable-warrant-against-her-this-is-pure-fiction-and-the-work-of-a-rogue-individual-trying-to-harass-me/articleshow/90070099.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90070198,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-74758/90070198.jpg",
      publishedAt: "2022-03-08T06:13:00Z",
      content: null,
    },
    {
      source: { id: null, name: "The Siasat Daily" },
      author: "Sameer",
      title:
        "Indian rupee falls against UAE dirham; Is it right time to remit? - The Siasat Daily",
      description:
        "New Delhi: Due to rising prices of crude oil and other commodities triggered by the Russia-Ukraine war, Indian rupee has fallen against UAE dirham. As currently, India’s exchange rate against dirham is Rs. 20.91, Indian expats in the UAE are confused between …",
      url: "https://www.siasat.com/indian-rupee-falls-against-uae-dirham-is-it-right-time-to-remit-2287288/",
      urlToImage:
        "https://cdn.siasat.com/wp-content/uploads/2021/01/currency-notes-5319801__340.jpg",
      publishedAt: "2022-03-08T06:07:43Z",
      content:
        "New Delhi: Due to rising prices of crude oil and other commodities triggered by the Russia-Ukraine war, Indian rupee has fallen against UAE dirham.\r\nAs currently, Indias exchange rate against dirham … [+1782 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        'Watch: Ukraine President Zelensky Says "Not Hiding, Not Afraid", Shares Location - NDTV',
      description:
        "Ukraine President Volodymyr Zelensky today said that he is in Kyiv and is not afraid. The statement comes amid the Russian troops intensifying shelling in several Ukrainian cities.",
      url: "https://www.ndtv.com/world-news/ukraine-president-says-not-hiding-not-afraid-shares-location-as-russia-closes-in-on-kyiv-2809841",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/b2p55s44_ukraine-zelensky_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T05:52:00Z",
      content:
        'Ukraine war: Volodymyr Zelensky said he would do as much as it takes to "win this patriotic war".\r\nUkraine President Volodymyr Zelensky today said that he is in Kyiv and is not afraid. The statement … [+1311 chars]',
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Amit Mudgill",
      title:
        "What made Credit Suisse downgrade India and raise bet on China - Economic Times",
      description:
        "We use the funds freed from India to raise China from Market Weight to Overweight. Chinas credit intensity still clouds long-term prospects but we like the countrys low oil import bill, insulation from Fed rate hikes, improving macro indicators and wealth of …",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/what-made-credit-suisse-downgrade-india-and-raise-bet-on-china/articleshow/90068962.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90069192,width-1070,height-580,imgsize-68000,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-08T05:32:00Z",
      content:
        "NEW DELHI: Credit Suisse (CS) has cut its rating for the Indian market to 'underweight' as it feels India is the most vulnerable to oil price hikes in Asia. This is even as Morgan Stanley believes In… [+2796 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Coronavirus: Why some of us don't catch COVID | The Times of India - Times of India",
      description:
        "There are many among us, who have not been infected by the coronavirus despite living within the same environment and under the same condition. So what makes these people invincible against the contagious coronavirus despite being exposed to it? Often called …",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-why-some-of-us-dont-catch-covid/photostory/90048925.cms",
      urlToImage: "https://static.toiimg.com/photo/90049247.cms",
      publishedAt: "2022-03-08T05:30:00Z",
      content:
        "These are those who have been lucky up to this point by not getting infected with the coronavirus which has till date infected 440,807,756 people worldwide.\r\nCOVID caused by the coronavirus was first… [+819 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "‘Kapil Sharma refused to call us on his show because The Kashmir Files doesn't have a big star': Vivek Agnihotri - Hindustan Times",
      description:
        "Kapil Sharma is trending on Twitter after filmmaker Vivek Agnihotri said in a tweet that the comedian refused to call the cast of The Kashmir Files on his show. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/kapil-sharma-refused-to-call-us-on-his-show-because-the-kashmir-files-doesn-t-have-a-big-star-vivek-agnihotri-101646714788182.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/kapil_sharma_vivek_1646714960581_1646714965820.jpg",
      publishedAt: "2022-03-08T05:12:31Z",
      content:
        "Filmmaker Vivek Agnihotri's tweet about Kapil Sharma has got the comedian and his popular show trending on Twitter. In a tweet shared on Saturday, Vivek had claimed that Kapil refused to invite him o… [+2006 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "News Desk",
      title:
        "With 'Hung Assembly' Threat in Goa & U'khand, Sawant Meets PM in Delhi, BJP Gen Secy in Huddle in Doon - News18",
      description:
        "While the BJP had gone into the elections with its slogan '22 plus in 2022', Sawant said that even if the party is stuck at 17-18 seats, it would seek help from Independent MLAs to form government.",
      url: "https://www.news18.com/news/politics/with-hung-assembly-threat-in-goa-ukhand-cm-sawant-to-meet-modi-in-delhi-bjp-gen-secy-in-huddle-in-doon-4848233.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/untitled-design-19-1-164672261516x9.jpg",
      publishedAt: "2022-03-08T05:04:00Z",
      content:
        "Goa Chief Minister Pramod Sawant and state BJP President Sadanand Tanawde on Tuesday met with Prime Minister Narendra Modi, sources said. The meeting came after exit poll results on Monday gave the B… [+4792 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Scientists open 50-year-old sample from Moon to study lunar conditions before sending humans back - India Today",
      description:
        "The samples had remained locked so far after it was collected and sealed in the vacuum of the Moon by Apollo 17 astronauts.",
      url: "https://www.indiatoday.in/science/story/nasa-moon-mission-artemis-lunar-surface-sample-minerals-1922016-2022-03-08",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Moon_sample-647x363.jpeg?6oAyMogHkHJXasb.xOtz_XBWdVmxNz3V",
      publishedAt: "2022-03-08T04:44:08Z",
      content: null,
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Tamil Nadu student joins Ukraine forces to fight Russian invasion - India Today",
      description:
        "A 21-year-old student from Coimbatore, Tamil Nadu has joined the Ukrainian paramilitary forces to fight Russia. He had applied to join the Indian Army.",
      url: "https://www.indiatoday.in/india/story/tamil-nadu-student-joins-paramilitary-forces-in-ukraine-to-fight-against-russia-1921998-2022-03-08",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/1200_1-647x363.jpeg?I1tdSZGOF1pBhx7pHYibp_EeMa1401UQ",
      publishedAt: "2022-03-08T04:08:46Z",
      content: null,
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Russia becomes world's most-sanctioned nation after Ukraine war, surpasses Iran, North Korea - India Today",
      description:
        "Russia-Ukraine war news: Russia has become the world's most-sanctioned nation, surpassing Iran and North Korea after it declared war on Ukraine.",
      url: "https://www.indiatoday.in/world/russia-ukraine-war/story/russia-world-most-sanctioned-nation-ukraine-war-north-korea-iran-1922002-2022-03-08",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/putin_1-647x363.jpeg?yTsItwqss.RDWAoTNcrZpsbz87LtlcSI",
      publishedAt: "2022-03-08T04:08:43Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Pakistan vs Australia Live Cricket Score, 1st Test Day 5: Live updates from Rawalpindi - Hindustan Times",
      description:
        "PAK vs AUS 1st Test Day 5 Live Cricket Score: Follow Pakistan vs Australia Live Score, updates and scorecard. | Cricket",
      url: "https://www.hindustantimes.com/cricket/pakistan-vs-australia-1st-test-day-5-live-cricket-score-pak-vs-aus-live-score-updates-scorecard-101646709801697.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/Pakistan-Australia-Cricket-70_1646709937247_1646709946219.jpg",
      publishedAt: "2022-03-08T03:37:47Z",
      content:
        "PAK vs AUS 1st Test Day 5 Live Cricket Score: Pakistan are absolutely dominating the situation on the historic Test with the home team now on a 208-run lead against the Aussies. Imam-ul-Haq is closin… [+1171 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Isha Sahai Bhatnagar",
      title:
        "Kuwait airlift to ‘Operation Ganga’: Largest evacuation ops carried out by India - Hindustan Times",
      description:
        "From ‘Operation Sukoon’ to ‘Operation Safe Homecoming’ and ‘Operation Rahat’, India has successfully evacuated its citizens in war zones over the past three decades | Latest News India",
      url: "https://www.hindustantimes.com/india-news/kuwait-airlift-to-operation-ganga-largest-evacuation-ops-carried-out-by-india-101646709667344.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/ccb78dd4-9e8c-11ec-9dea-cf986250bae9_1646710564843.jpg",
      publishedAt: "2022-03-08T03:21:07Z",
      content:
        "NEW DELHI: More than 18,000 Indians have been safely evacuated back to their home country from war-torn Ukraine via special flights over the last one week as the Russian invasion of the country rages… [+1916 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Alia Bhatt To Make Big Hollywood Debut In Heart Of Stone With Gal Gadot - NDTV Movies",
      description:
        "Heart Of Stone is a spy thriller that will be backed by Netflix",
      url: "https://www.ndtv.com/entertainment/alia-bhatt-to-make-big-hollywood-debut-in-heart-of-stone-with-gal-gadot-2809686",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/l770af3_alia-bhatt_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T03:12:07Z",
      content:
        "Alia Bhatt shared this image. (courtesy: aliaabhatt)\r\nHighlights\r\n<ul><li>Alia was last seen in Gangubai Kathiawadi\r\n</li><li> She is also producing a film with SRK\r\n</li><li> The film will be direct… [+1785 chars]",
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "Janhvi Sharma",
      title:
        "Fardeen Khan birthday special: No Entry actor's extreme transformation from 'fat' to 'fit' will leave you hig - Bollywood Life",
      description:
        "Fardeen Khan turns a year older today (March 8) and he is all set to make his comeback into Bollywood with Sanjay Gupta's 'Visfot'. His transformation journey will inspire and motive you to love yourself.",
      url: "https://www.bollywoodlife.com/photos/bollywood-galleries-fardeen-khan-birthday-special-no-entry-actors-extreme-transformation-from-fat-to-fit-will-leave-you-highly-inspired-view-pics-2022825/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/03/MicrosoftTeams-image-244-600x315.jpg",
      publishedAt: "2022-03-08T02:00:21Z",
      content:
        "Women's Day 2022: Alia Bhatt's Raazi, Nayanthara's Maya, Nargis' Mother India, C...",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Despite pleas, safe passage of our students in Sumy didn't work out: India to UNSC - Hindustan Times",
      description:
        "Ukraine-Russia war: Speaking at an emergency meeting of the UNSC, India’s ambassador to the United Nations TS Tirumurti said, “We are deeply concerned that despite our urgings to both sides, a safe corridor for our students stranded in Sumy did not materialis…",
      url: "https://www.hindustantimes.com/india-news/ukraine-war-safe-passage-for-students-in-sumy-didn-t-work-out-india-tells-unsc-101646703355561.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/FNRvfC3XMAE0ygu_1646703556436_1646703568257.jpg",
      publishedAt: "2022-03-08T01:41:57Z",
      content:
        "Indias ambassador to the United Nations TS Tirumurti, said that despite the best efforts to convince both Russia and Ukraine, a safe corridor for stranded Indian students in Sumy could not be created… [+1762 chars]",
    },
    {
      source: { id: null, name: "LatestLY" },
      author: "Team Latestly",
      title:
        "Our Psyche Mission is Preparing for a 1.5-billion-mile Journey to an ... - Latest Tweet by NASA - LatestLY",
      description:
        "The latest Tweet by NASA states, 'Our Psyche mission is preparing for a 1.5-billion-mile journey to an asteroid of the same name. At 800 sq. ft , its solar arrays are the largest ever installed at @NASAJPL, bringing it one step closer to its August launch. De…",
      url: "https://www.latestly.com/socially/technology/science/our-psyche-mission-is-preparing-for-a-1-5-billion-mile-journey-to-an-latest-tweet-by-nasa-3447078.html",
      urlToImage:
        "https://st1.latestly.com/wp-content/uploads/2021/04/nasa-784x441.jpg",
      publishedAt: "2022-03-08T00:02:45Z",
      content:
        "Our Psyche mission is preparing for a 1.5-billion-mile (2.4-billion-km) journey to an asteroid of the same name. At 800 sq. ft (75 sq m), its solar arrays are the largest ever installed at @NASAJPL, … [+645 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Surendra Singh",
      title:
        "Indian, UK scientists unravel mystery behind origin of plasma jets on Sun - Times of India",
      description:
        "India News: A team of researchers from India and the UK has unravelled the science behind the jets of plasma or spicules that constantly shoot up from the surface.",
      url: "https://timesofindia.indiatimes.com/india/indian-uk-scientists-unravel-mystery-behind-origin-of-plasma-jets-on-sun/articleshow/90062904.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90062966,width-1070,height-580,imgsize-23690,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-07T21:33:00Z",
      content:
        "Indian, UK scientists unravel mystery behind origin of plasma jets on Sun\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Indian, UK scientists unravel mystery behind origin of plasma jets on Sun</li></… [+2 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Correspondent",
      title:
        "Women’s Day at UP Raj Bhavan: 200 girls vaxxed against HPV/cervical cancer - Hindustan Times",
      description:
        "In anticipation of the International Women’s day, 200 girls were administered doses of the Human papillomavirus (HPV) vaccine at a free vaccination and cervical cancer awareness camp, organised at the Raj Bhavan, on Monday",
      url: "https://www.hindustantimes.com/cities/lucknow-news/womens-day-at-up-raj-bhavan-200-girls-vaxxed-against-hpv-cervical-cancer-101646679969604.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/b3dd6502-9e48-11ec-9dea-cf986250bae9_1646679964123.jpeg",
      publishedAt: "2022-03-07T19:06:09Z",
      content:
        "In anticipation of the International Womens day, 200 girls were administered doses of the Human papillomavirus (HPV) vaccine at a free vaccination and cervical cancer awareness camp, organised at the… [+1168 chars]",
    },
    {
      source: { id: null, name: "ThePrint" },
      author: null,
      title:
        "Bengal governor forced to give one-line speech to assembly, Telangana didn’t schedule address - ThePrint",
      description:
        "Bengal Governor Dhankhar couldn't speak as BJP and TMC MLAs engaged in sloganeering. Telangana's Soundararajan unhappy as KCR govt decides not to have her address the assembly.",
      url: "https://theprint.in/politics/bengal-governor-forced-to-give-one-line-speech-to-assembly-telangana-didnt-schedule-address/862864/",
      urlToImage:
        "https://static.theprint.in/wp-content/uploads/2022/03/Dhankhar.jpg",
      publishedAt: "2022-03-07T16:44:12Z",
      content:
        "Kolkata/Hyderabad: The customary governors address on the opening day of the budget session of a state assembly was mired in controversy Monday in West Bengal and Telangana. \r\nThe governor of West Be… [+7847 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "International Flights Restart On March 27 After Two-Year Covid Gap - NDTV",
      description:
        "India today, after a gap of two years, lifted the ban on international flights. The overseas flights, suspended because of the coronavirus pandemic, will be available from March 27.",
      url: "https://www.ndtv.com/india-news/international-flights-to-resume-on-march-27-report-2810761",
      urlToImage:
        "https://i.ndtvimg.com/i/2016-08/plane-generic_650x400_41470320434.jpg",
      publishedAt: "2022-03-08T12:22:00Z",
      content:
        "Air Bubble arrangements also stand revoked\r\nNew Delhi: India today, after a gap of two years, lifted the ban on international flights. The overseas flights, suspended because of the coronavirus pande… [+1589 chars]",
    },
    {
      source: { id: null, name: "Republic World" },
      author: "Harsh Vardhan",
      title:
        "ESA's Solar Orbiter set to make its first-ever closest approach to sun on March 26 - Republic World",
      description:
        "ESA's orbiter is currently around 75 million kilometres away from the Sun which is the same distance it achieved during its close pass to the sun in June 2020.",
      url: "https://www.republicworld.com/science/space/esas-solar-orbiter-set-to-make-its-first-ever-closest-approach-to-sun-on-march-26-articleshow.html",
      urlToImage:
        "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/rwigyjaomdp85uca_1646741365.jpeg",
      publishedAt: "2022-03-08T12:17:00Z",
      content:
        "Forging ahead in the footsteps of its counterpart, NASA's Parker solar probe, the solar orbiter built by the European Space Agency (ESA) is all set to make its closest approach to the sun.\r\nThe space… [+1673 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Sena's Aaditya Thackeray's Close Aide Raided By Income Tax Department - NDTV",
      description:
        "Maharashtra minister Aaditya Thackeray's close aide has been raided by the Income Tax Department. The raids are going on at Shiv Sena member Rahul Kanal's premises.",
      url: "https://www.ndtv.com/india-news/senas-aaditya-thackerays-close-aide-raided-by-income-tax-department-2810550",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/sa2677cg_aaditya-thackeray_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T11:50:00Z",
      content:
        "Aaditya Thackeray's close aide, Rahul Kanal, has been raided by Income Tax Department\r\nMumbai: The Shiv Sena today accused the Centre of selectively targeting opposition-ruled Bengal and Maharashtra,… [+2940 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Amitabh Sinha",
      title:
        "Chandrayaan-2 orbiter makes new discovery about distribution of gas in moon’s atmosphere - The Indian Express",
      description:
        "New data from CHACE-2 mass spectrometer on Chandrayaan-2 show distribution of Argon-40 gas in lunar ‘exosphere’, beyond the areas this was known to exist, a statement from the ISRO said",
      url: "https://indianexpress.com/article/india/chandrayaan-2-orbiter-makes-new-discovery-gas-distribution-moon-7806952/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/chandrayaan-2-1200.jpg",
      publishedAt: "2022-03-08T11:10:22Z",
      content:
        "An equipment onboard Indias 2017 Chandrayaan-2 orbiter has made new observations about the distribution of an important gas in the moons upper atmosphere, which can offer new insights into the lunar … [+2001 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Divya",
      title:
        "Apple Event on March 8: iPhone SE 3, Green iPhone 13 to Macbooks, here is what to expect - HT Tech",
      description:
        "From iPhone SE 3, iPhone 13 to new Macbooks - here is what Apple Event is expected to unveil today.",
      url: "https://tech.hindustantimes.com/tech/news/apple-event-on-march-8-iphone-se-3-green-iphone-13-to-macbooks-here-is-what-to-expect-71646737262332.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/03/08/1600x900/_a8ac1e7a-935b-11ea-84fe-62f09e00e282_1646737701077.jpg",
      publishedAt: "2022-03-08T11:09:10Z",
      content:
        "Finally, its Apple Event Day! The wait for Apple fans, who were waiting for the new Apple launches, will be over today - March 8. The Apple Spring Event, which has been teased with just two words - P… [+3121 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Omicron contagious for almost 6 days, Takeda drug shows promise as COVID treatment - The Financial Express",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMijAFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvaGVhbHRoL29taWNyb24tY29udGFnaW91cy1mb3ItYWxtb3N0LTYtZGF5cy10YWtlZGEtZHJ1Zy1zaG93cy1wcm9taXNlLWFzLWNvdmlkLXRyZWF0bWVudC8yNDU0MjU2L9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-08T11:09:05Z",
      content: null,
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "The Kapil Sharma Show in trouble after `The Kashmir Files` director Vivek Agnihotri tweets `they refused to... - Zee News",
      description:
        "Controversy is not new to actor-comedian Kapil Sharma. Now, #BoycottKapilSharmaShow has been a top trend on Twitter today and the reason will baffle his fans.",
      url: "https://zeenews.india.com/television/the-kapil-sharma-show-in-trouble-after-the-kashmir-files-director-vivek-agnihotri-tweets-they-refused-to-call-us-2443349.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/08/1020946-kapil-sharma-vivek-agnihotr.jpg",
      publishedAt: "2022-03-08T10:55:04Z",
      content:
        "New Delhi: Controversy is not new to actor-comedian Kapil Sharma. Now, #BoycottKapilSharmaShow has been a top trend on Twitter today and the reason will baffle his fans. The Kashmir Files director Vi… [+1884 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Edited by NDTV News Desk",
      title:
        "Ukraine-Russia War Live Updates: Humanitarian Crisis Worsens As Attacks Continue - NDTV",
      description:
        'Ukraine and Russia made tentative progress in talks Monday but failed to reach a deal on creating "humanitarian corridors" from pummelled cities, as the bloodshed from Moscow\'s invasion mounted.',
      url: "https://www.ndtv.com/world-news/ukraine-war-live-updates-russia-ukraine-hold-third-round-of-talks-no-breakthrough-on-humanitarian-corridors-2809624",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/2kfi9njo_ukraine-war_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T10:33:03Z",
      content:
        'Ukraine War: Vladimir Putin said he is not sending conscripts or reservists to fight\r\nUkraine and Russia made tentative progress in talks Monday but failed to reach a deal on creating "humanitarian c… [+14300 chars]',
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        "Pakistan vs Australia - Watch: David Warner Shows Off His 'Bhangra' Skills On Day 5 Of Rawalpindi Te.. - NDTV Sports",
      description:
        "Pakistan vs Australia: Warner himself scored 68 runs in the first innings and was involved in a 156-run stand with fellow opener Usman Khawaja. The pitch for the first Test had almost no assistance for bowlers, although the Pakistani spinners did get some pur…",
      url: "https://sports.ndtv.com/cricket/pakistan-vs-australia-david-warner-shows-of-his-bhangra-skills-on-day-5-of-rawalpindi-test-watch-2810463",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/unp9e36g_warner-dancing_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T10:21:50Z",
      content:
        "With the first Test between Pakistan and Australia meandering towards a draw on a placid track in Rawalpindi, Aussie opening batter David Warner decided to have some fun on the ground. In a video sha… [+1170 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Lifestyle Desk",
      title:
        "Happy International Women’s Day 2022: Wishes Images, Whatsapp Messages, Status, Quotes and Greetings - The Indian Express",
      description:
        "Happy International Women's Day 2022 Wishes Images, Messages, Status, Quotes, Photos, GIF Pics, HD Wallpapers:  This special day is celebrated annually on March 8 to raise awareness about gender equality and women empowerment",
      url: "https://indianexpress.com/article/lifestyle/happy-international-womens-day-2022-wishes-images-whatsapp-messages-status-quotes-and-greetings-7785703/",
      urlToImage:
        "https://images.indianexpress.com/2021/03/Happy-International-Womens-Day-FEATURE.jpg",
      publishedAt: "2022-03-08T10:16:29Z",
      content:
        "Happy International Women’s Day 2022 Wishes Images, Messages, Status, Photos, Quotes: Every year, March 8 is celebrated as International Women’s Day across the world to promote women’s rights and hon… [+2028 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Pinch of salt: Some misses, some hits for exit polls in previous elections - Times of India",
      description:
        "India News: NEW DELHI: Exit polls are not an exact science and have been known to go well off the mark, though sometimes they do get it right.",
      url: "https://timesofindia.indiatimes.com/india/pinch-of-salt-some-misses-some-hits-for-exit-polls-in-previous-elections/articleshow/90075530.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90075873,width-1070,height-580,imgsize-87540,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-08T10:01:00Z",
      content:
        "Pinch of salt: Some misses, some hits for exit polls in previous elections\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Pinch of salt: Some misses, some hits for exit polls in previous elections</li>… [+4 chars]",
    },
    {
      source: { id: null, name: "The New Indian Express" },
      author: "PTI",
      title:
        "Even mild Covid infection can cause brain shrinkage: Study - The New Indian Express",
      description:
        "The study identified a number of effects, on average 4.5 months following infection, including a greater reduction in grey matter thickness in the regions of the brain associated with smell.",
      url: "https://www.newindianexpress.com/lifestyle/health/2022/mar/08/even-mild-covid-infection-can-cause-brain-shrinkage-study-2427739.html",
      urlToImage:
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/8/w600X390/covidtest_PTI7871212.jpg",
      publishedAt: "2022-03-08T09:59:00Z",
      content:
        "LONDON: Even mild infection with SARS-CoV-2, the virus that causes COVID-19, can lead to shrinkage in brain areas related to smell, according to a study led by researchers at the University of Oxford… [+3526 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "These Are The World's Most-Sanctioned Countries. Russia Now No. 1 - NDTV",
      description:
        "The crippling economic sanctions which have targeted Iran in last 10 years have been implemented in the course of 10 days against Russia.",
      url: "https://www.ndtv.com/world-news/hese-are-the-worlds-most-sanctioned-countries-russia-now-no-1-2810404",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/kh224qsg_ukraine-war-building-destroyed-reuters-650_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T09:55:00Z",
      content:
        "A building damaged by shelling, amid the Russian invasion, in Ukraine's Mykolaiv. (Reuters)\r\nA global sanctions-tracking database released a list on Tuesday, which showed that Russia has become the m… [+3173 chars]",
    },
    {
      source: { id: null, name: "Guwahati Plus" },
      author: null,
      title:
        "Doctors On How Women Can Take Charge Of Their Health And Wellness - Guwahati Plus",
      description:
        "Three women doctors from Apollo Clinic in Zoo Road talks about how women can take charge of their health and wellness.",
      url: "https://guwahatiplus.com/buzz/doctors-on-how-women-can-take-charge-of-their-health-and-wellness",
      urlToImage:
        "https://guwahatiplus.com/storage/app/public/daily_banners/fb_image/3e171c0b63c5dfb46a430ff1ec22d283.png",
      publishedAt: "2022-03-08T09:44:16Z",
      content:
        "This material may not be published, broadcast, rewritten, or redistributed, 2022 © G plus. All rights reserved. Copyright © 2022 Insight Brandcom Pvt. Ltd. All rights reserved.",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "'He is more difficult to face because of accuracy, pace variation': Gambhir makes massive Ashwin vs Harbhajan statement - Hindustan Times",
      description:
        "Ashwin recently surpassed the legendary Kapil Dev to enter the top-10 wicket-takers list in Tests | Cricket",
      url: "https://www.hindustantimes.com/cricket/he-is-more-difficult-to-face-because-of-accuracy-pace-variation-gautam-gambhir-makes-massive-r-ashwin-vs-harbhajan-singh-statement-101646730774546.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/New_Project_-_2022-03-08T145225.555_1646731354574_1646731369292.jpg",
      publishedAt: "2022-03-08T09:42:01Z",
      content:
        "Comparisons have been inevitable in cricket. Players of similar styles, similar batting positions or similar records have all been subject to comparisons with one another or with a legend of the game… [+1722 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Sports Desk",
      title:
        "Bismah Maroof's cradle celebration: Pakistan skipper dedicates half-century to her baby Fatima - The Indian Express",
      description:
        "Pakistan skipper Bismah Maroof scores a half-century and celebrated it with a baby rocking gesture looking at her baby in the dressing room.",
      url: "https://indianexpress.com/article/sports/cricket/womens-day-womens-world-cup-pakistan-skipper-bismah-maroof-half-century-baby-fatima-cradle-celebration-7806134/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/Bismah-Maroof-Baby-Fatima.jpg",
      publishedAt: "2022-03-08T09:20:46Z",
      content:
        "Just a second match into her comeback after childbirth and Pakistan captain scores a half-century and she has dedicated it to her baby girl, Fatima. Bismah Maroof celebrated her fifty with a baby roc… [+2554 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Arnab Mitra",
      title:
        "CBSE 10th, 12th Term 1 Results 2021 Likely This Week: Official - NDTV",
      description:
        "CBSE 10th, 12th Term 1 Results 2021:  An official from CBSE controller office told Careers360 that the students can expect the CBSE class 12 term 1 result by Friday, following which, the class 10 result will be announced this week",
      url: "https://www.ndtv.com/education/cbse-12th-term-1-results-2021-by-friday-10th-result-this-week-cbse-gov-in-cbseresults-nic-in",
      urlToImage:
        "https://cache.careers360.mobi/media/article_images/2022/3/8/CBSE_result_H_860.jpg",
      publishedAt: "2022-03-08T09:10:21Z",
      content:
        "New Delhi:CBSE 10th, 12th Term 1 Results 2021: The Central Board of Secondary Education (CBSE) is all set to release the results of classes 10, 12 term 1 examinations 2021 this week. An official from… [+1928 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "Katrina Kaif shares photo with her five sisters on Women's Day, says 'a lot of WOMEN in one family' - Zee News",
      description:
        "Actress Katrina Kaif treated her fans with a photo of herself with her five sisters on International Women’s Day 2022.",
      url: "https://zeenews.india.com/people/katrina-kaif-shares-photo-with-her-five-sisters-on-women-s-day-says-a-lot-of-women-in-one-family-2443304.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/08/1020902-katrina-kaif-with-sisters.png",
      publishedAt: "2022-03-08T09:05:42Z",
      content:
        "New Delhi: Actress Katrina Kaif treated her fans with a photo of herself with her five sisters on International Womens Day 2022. Katrina has three elder sisters and two younger sisters namely - Steph… [+2015 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Market LIVE Updates: Indices off day's low, Nifty above 15,700; IT, pharma stocks rise - Moneycontrol",
      description:
        "Among sectors, except metal all other sectoral indices ended in the green with pharma, IT, FMCG, capital goods and realty indices up 1-2 percent. BSE midcap and smallcap indices rose over 1 percent each.",
      url: "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-march-8-latest-news-bse-nse-sensex-nifty-covid-coronavirus-ami-organics-vijaya-diagnostic-centre-great-eastern-shipping-company-natco-pharma-metro-brands-8204481.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/sensex_nifty-marketup_sensexup-Niftyup-770x433.jpg",
      publishedAt: "2022-03-08T08:59:06Z",
      content:
        "March 08, 2022 / 03:34 PM IST\r\nMarket close: Indian benchmark indices ended higher on March 8 amid high volatility led by the realty, IT, pharma names.\r\nAt close, the Sensex was up 581.34 points or 1… [+572 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Yordan",
      title:
        "Samsung Galaxy F23 5G brings 120Hz screen, Snapdragon 750G chipset - GSMArena.com news - GSMArena.com",
      description: "Sales will begin on March 16.",
      url: "https://www.gsmarena.com/samsung_galaxy_f23_5g_brings_120hz_screen_snapdragon_750g_chipset-news-53462.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/samsung-galaxy-f23-ofic/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2022-03-08T08:52:02Z",
      content:
        "Samsung teased the Galaxy F23 earlier and now the phone made its official debut. It comes as a successor to the Galaxy F22 with a better screen and faster chipset.\r\nThe Samsung Galaxy F23 5G has a 6.… [+1565 chars]",
    },
    {
      source: { id: null, name: "The Quint" },
      author: "The Quint",
      title:
        "WhatsApp Working on New 'Group Polls' Feature: Report - The Quint",
      description:
        "WhatsApp Group Polls: Meta-owned messaging platform WhatsApp is reportedly working on a new feature titled 'polls'",
      url: "https://www.thequint.com/tech-and-auto/tech-news/whatsapp-working-on-new-group-polls-feature",
      urlToImage:
        "https://images.thequint.com/thequint%2F2019-04%2F512a7dbe-5296-4bdd-b8f8-cb95472c4bff%2FiStock_900925902.jpg?rect=0%2C64%2C2121%2C1114&w=1200&auto=format%2Ccompress&ogImage=true",
      publishedAt: "2022-03-08T08:40:51Z",
      content:
        "Users will be able to use the WhatsApp polls features for asking questions to their group member or when the group wants to decide a specific thing. \r\nAll users must note that this feature will only … [+162 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Kalpana Sharma",
      title:
        "Is it a migraine attack? Why many people fail to recognise symptoms and don’t know what triggers them - Times of India",
      description:
        "Migraines have no established cause, although they're assumed to be caused by aberrant brain activity that disrupts",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/is-it-a-migraine-attack-why-many-people-fail-to-recognise-symptoms-and-dont-know-what-triggers-them/articleshow/90055140.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90055308,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-95192/90055308.jpg",
      publishedAt: "2022-03-08T08:30:00Z",
      content:
        "When the throbbing headaches began, 26-year-old Saisha Singh was told she spends a little too long on screens. She got her eyes tested, was given anti anxiety pills and even feared a brain tumour dia… [+7682 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Archana R",
      title:
        "Tamil Nadu Student Takes Up Arms to Join Ukraine Forces Amid Russian Offensive, Intel Agencies Begin Probe - News18",
      description:
        "Sainikesh Ravichandran, a 21-year-old native of Coimbatore, wanted to join the Indian Army but was rejected due to his height.",
      url: "https://www.news18.com/news/india/tamil-nadu-student-takes-up-arms-to-join-ukraine-forces-amid-russian-offensive-intel-agencies-begin-probe-4849523.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/sainikesh-164672797816x9.jpg",
      publishedAt: "2022-03-08T08:27:55Z",
      content:
        "The central and state intelligence agencies are investigating the involvement of a student from Tamil Nadu’s Coimbatore in the Ukrainian paramilitary forces after officials revealed that the 21-year-… [+1304 chars]",
    },
    {
      source: { id: null, name: "Jagran Josh" },
      author: "Sangeeta Nair",
      title:
        "Russia detaches from International Space Station? True or False - Jagran Josh",
      description:
        "The Russian modules like Zvezda provide most of the life support systems to the International space station, as it provides living quarters and refueling capability for the station, while the US segment has the Japanese and European laboratories.",
      url: "https://www.jagranjosh.com/current-affairs/has-russia-detached-from-international-space-station-1646725199-1",
      urlToImage:
        "https://img.jagranjosh.com/images/2022/March/832022/Russia_blocks_space_cooperation_on_ISS.jpg",
      publishedAt: "2022-03-08T07:53:00Z",
      content:
        "Russia has reportedly released a propaganda video that shows Russian cosmonauts disconnecting the Russian ISS modules from the International Space Station.\r\nThe video shows the Russian cosmonauts say… [+4872 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Video Desk",
      title:
        "Apple Offers Massive Discount On iPhone 13, MacBooks, AirPods, iPads And More At Vijay Sales On Occasion Of I - India.com",
      description:
        "Apple is selling iPhone 13 at a discounted price of Rs. 71,900, down from it's actual launch price which was Rs.79,9000. Besides this, customers can also get cashbacks and exchange discount benefits on older iPhone models like iPhone 12 and iPhone 11.",
      url: "https://www.india.com/video-gallery/apple-offers-massive-discount-on-iphone-13-macbooks-airpods-ipads-and-more-at-vijay-sales-on-occasion-of-international-womens-day-watch-5273358/",
      urlToImage:
        "https://s3.india.com/wp-content/uploads/2015/06/indiacom-image-banner_01.jpg",
      publishedAt: "2022-03-08T07:50:00Z",
      content:
        "Apple Gives Massive Discount On iPhone 13 on Women’s day : Tech giant Apple is offering a massive  discount on iPhone 13 and other Apple products on Vijay Sales, to celebrate International Women’s Da… [+882 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        'RBI Launches Instant Payment System "UPI 123PAY", Helpline For DigiSaathi - NDTV Profit',
      description:
        'RBI Governor Shaktikanta Das: Reserve Bank of India (RBI) Governor Shaktikanta Das on Tuesday launched an instant payment system "UPI 123PAY" for feature phone users.',
      url: "https://www.ndtv.com/business/rbi-launches-instant-payment-system-upi-123pay-helpline-for-digisaathi-2810084",
      urlToImage:
        "https://c.ndtvimg.com/2021-06/j7elm90o_shaktikanta-das-reuters_625x300_04_June_21.jpg",
      publishedAt: "2022-03-08T07:36:16Z",
      content:
        "RBI Governor Shaktikanta Das also launched the 24x7 helpline for digital payments - DigiSaathi.\r\nNew Delhi: Reserve Bank of India (RBI) Governor Shaktikanta Das on Tuesday launched an instant payment… [+1474 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Reuters",
      title:
        "Inside Amazon's battle with Reliance for India retail supremacy - Economic Times",
      description:
        "Amazon argues various agreements signed in 2019 with Future gave it special rights over Future's retail assets, some of which it had also hoped to ultimately own should India's rules for foreign investors be eased. The potential Future-Reliance deal  destroys…",
      url: "https://economictimes.indiatimes.com/industry/services/retail/inside-amazons-battle-with-reliance-for-india-retail-supremacy/articleshow/90072222.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90072188,width-1070,height-580,imgsize-130136,overlay-economictimes/photo.jpg",
      publishedAt: "2022-03-08T07:31:00Z",
      content:
        "For more than a year, Amazon.com Inc and India's Future Group have been locked in a complex legal stand-off that has stalled Future's $3.4 billion sale of assets to rival Reliance Industries , the co… [+4375 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "PTI",
      title:
        "President Ram Nath Kovind confers 'Nari Shakti Puraskars' on 29 women - Times of India",
      description:
        "India News: NEW DELHI: On International Women's Day on Tuesday, President Ram Nath Kovind conferred the 'Nari Shakti Puraskars' on 29 outstanding individuals for .",
      url: "https://timesofindia.indiatimes.com/india/president-ram-nath-kovind-confers-nari-shakti-puraskars-on-29-women/articleshow/90071672.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90071715,width-1070,height-580,imgsize-23824,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-08T07:23:00Z",
      content:
        "President Ram Nath Kovind confers 'Nari Shakti Puraskars' on 29 women\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>President Ram Nath Kovind confers 'Nari Shakti Puraskars' on 29 women</li></ul>",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        "Australia Women vs Pakistan Women, Women's World Cup Highlights: Australia Win By 7 Wickets - NDTV Sports",
      description:
        "AUS-W vs PAK-W, Women's World Cup, Highlights: Australia showcased class and domination as they chased down the target in only 34.4 overs and with seven wickets remaining against Pakistan in the 6th match at the Bay Oval in Mount Maunganui on Tuesday.",
      url: "https://sports.ndtv.com/icc-women-s-world-cup-2022/australia-women-vs-pakistan-women-womens-world-cup-live-score-updates-2809345",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/5vss5ch8_australia-women-vs-pakistan-women-afp_625x300_08_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-03-08T07:06:35Z",
      content:
        "AUS-W vs PAK-W, Women's World Cup, Highlights: Australia showcased class and domination as they chased down the target in only 34.4 overs and with seven wickets remaining against Pakistan. All batter… [+1265 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Anuradha Mascarenhas",
      title:
        "‘Medical students returning from Ukraine cannot automatically be offered admissions in Indian medical colleges’ - The Indian Express",
      description:
        "The authorities are trying to explore options where the students can continue their learning and training, said Dr Madhuri Kanitkar, vice-chancellor of the Nashik-based Maharashtra University of Health Sciences (MUHS).",
      url: "https://indianexpress.com/article/cities/pune/medical-students-returning-from-ukraine-admission-indian-colleges-7806351/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/Ukraine-students-2.jpeg",
      publishedAt: "2022-03-08T06:18:14Z",
      content:
        "Medical students returning from war-hit Ukraine cannot automatically be offered admissions in Indian medical colleges, but authorities are exploring options to ensure that they can continue with thei… [+1862 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "etimes.in",
      title:
        "Sonakshi Sinha clarifies on non-bailable warrant against her: This is pure fiction and the work of a rogu - Times of India",
      description:
        "Sonakshi Sinha recently hit headlines after it was reported that a non-bailable warrant was issued against her in a",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/sonakshi-sinha-clarifies-on-non-bailable-warrant-against-her-this-is-pure-fiction-and-the-work-of-a-rogue-individual-trying-to-harass-me/articleshow/90070099.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90070198,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-74758/90070198.jpg",
      publishedAt: "2022-03-08T06:13:00Z",
      content: null,
    },
    {
      source: { id: null, name: "The Siasat Daily" },
      author: "Sameer",
      title:
        "Indian rupee falls against UAE dirham; Is it right time to remit? - The Siasat Daily",
      description:
        "New Delhi: Due to rising prices of crude oil and other commodities triggered by the Russia-Ukraine war, Indian rupee has fallen against UAE dirham. As currently, India’s exchange rate against dirham is Rs. 20.91, Indian expats in the UAE are confused between …",
      url: "https://www.siasat.com/indian-rupee-falls-against-uae-dirham-is-it-right-time-to-remit-2287288/",
      urlToImage:
        "https://cdn.siasat.com/wp-content/uploads/2021/01/currency-notes-5319801__340.jpg",
      publishedAt: "2022-03-08T06:07:43Z",
      content:
        "New Delhi: Due to rising prices of crude oil and other commodities triggered by the Russia-Ukraine war, Indian rupee has fallen against UAE dirham.\r\nAs currently, Indias exchange rate against dirham … [+1782 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title: "India Records 3,993 Fresh Covid Cases, Lowest In 662 Days - NDTV",
      description:
        "India logged 3,993 new coronavirus infections, the lowest in 662 days, taking the total tally of COVID-19 cases to 4,29,71,308, while the active cases dipped to 49,948.",
      url: "https://www.ndtv.com/india-news/india-records-3-993-fresh-covid-cases-lowest-in-662-days-2809737",
      urlToImage:
        "https://c.ndtvimg.com/2022-02/160abneg_covid-test-pti-650_625x300_21_February_22.jpg",
      publishedAt: "2022-03-08T04:10:00Z",
      content:
        "India Covid Cases: The active cases comprise 0.12 per cent of the total infections.\r\nNew Delhi: India logged 3,993 new coronavirus infections, the lowest in 662 days, taking the total tally of COVID-… [+1419 chars]",
    },
    {
      source: { id: null, name: "DNA India" },
      author: "DNA Web Team",
      title:
        "Karan Kundrra charges THIS whopping fee as the new jailor of Kangana Ranaut's 'Lock Upp' - DNA India",
      description:
        "While Karan Kundrra may be the new jailor, 'Lock Upp' is hosted by B-town diva Kangana Ranaut.",
      url: "https://www.dnaindia.com/television/report-karan-kundrra-charges-this-whopping-fee-as-the-new-jailor-of-kangana-ranaut-s-lock-upp-2938341",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/03/08/1025120-karan-kundrra-1.jpg",
      publishedAt: "2022-03-08T03:36:00Z",
      content:
        "Reported By:| Edited By: DNA Web Team |Source: DNA webdesk |Updated: Mar 08, 2022, 09:16 AM ISTAfter enthralling his fans in 'Bigg Boss 15', actor Karan Kundrra is back in action as the new jailor of… [+1656 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Press Trust of India",
      title:
        "Sunil Gavaskar Expresses Regret Over Ill-Timed Comment On Shane Warne - NDTV Sports",
      description:
        '"In hindsight, that question should not have been asked and I should not have answered as it was not the right time for any comparison or evaluation," Sunil Gavaskar said.',
      url: "https://sports.ndtv.com/cricket/sunil-gavaskar-expresses-regret-over-ill-timed-comment-on-shane-warne-2809694",
      urlToImage:
        "https://c.ndtvimg.com/2020-04/63dt3koo_sunil-gavaskar-pti_625x300_07_April_20.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-03-08T03:24:07Z",
      content:
        "Former India captain Sunil Gavaskar on Monday expressed regret for refusing to call the late Shane Warne as the greatest of all time while discussing his legacy, saying it was not the right time for … [+2922 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Isha Sahai Bhatnagar",
      title:
        "Kuwait airlift to ‘Operation Ganga’: Largest evacuation ops carried out by India - Hindustan Times",
      description:
        "From ‘Operation Sukoon’ to ‘Operation Safe Homecoming’ and ‘Operation Rahat’, India has successfully evacuated its citizens in war zones over the past three decades | Latest News India",
      url: "https://www.hindustantimes.com/india-news/kuwait-airlift-to-operation-ganga-largest-evacuation-ops-carried-out-by-india-101646709667344.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/ccb78dd4-9e8c-11ec-9dea-cf986250bae9_1646710564843.jpg",
      publishedAt: "2022-03-08T03:21:07Z",
      content:
        "NEW DELHI: More than 18,000 Indians have been safely evacuated back to their home country from war-torn Ukraine via special flights over the last one week as the Russian invasion of the country rages… [+1916 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Bhanu Joshi, Neelanjan Sircar",
      title:
        "Polls analysis: Several uncertainties remain in battle for UP - Hindustan Times",
      description:
        "The first misconception is that the BJP wins simply by superior performance in areas dominated by Hindus as compared to Muslims.",
      url: "https://www.hindustantimes.com/elections/uttar-pradesh-assembly-election/polls-analysis-several-uncertainties-remain-in-battle-for-up-101646695641109.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/UP_1646618738064_1646695754619.JPG",
      publishedAt: "2022-03-07T23:30:56Z",
      content:
        "Takkar hai. (The competition is close.) This is the most common refrain from the voters of Uttar Pradesh (UP) when asked about who will win in the 2022 UP elections.\r\nBut this simple phrase requires … [+4583 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Surendra Singh",
      title:
        "Indian, UK scientists unravel mystery behind origin of plasma jets on Sun - Times of India",
      description:
        "India News: A team of researchers from India and the UK has unravelled the science behind the jets of plasma or spicules that constantly shoot up from the surface.",
      url: "https://timesofindia.indiatimes.com/india/indian-uk-scientists-unravel-mystery-behind-origin-of-plasma-jets-on-sun/articleshow/90062904.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90062966,width-1070,height-580,imgsize-23690,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-07T21:33:00Z",
      content:
        "Indian, UK scientists unravel mystery behind origin of plasma jets on Sun\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Indian, UK scientists unravel mystery behind origin of plasma jets on Sun</li></… [+2 chars]",
    },
  ];

  return (
    <div className={classes.container}>
  <div className="form_input flex flex-col my-3">
        <input
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          type="text"
          id="username"
          name="username"
          contentEditable={true}
          className="outline-none px-3 rounded-s-md py-2.5 w-1/3 mt-2 border-2 p-1 h-10"
        />
      </div>
      {articles.map((item) => {
        return (
          <span className={classes.card} key={Math.random()}>
            <h3>{item.title}</h3>
            {item.urlToImage ? (
              <img src={item.urlToImage} alt="" />
            ) : (
              <img
                src="https://images.moneycontrol.com/static-mcnews/2019/01/Shaktikanta-Das_RBI_Reserve-bank_RBI_RESERVE-BANK-770x433.jpg"
                alt=""
              />
            )}
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

export default Home;

// https://newsapi.org/v2/top-headlines?country=in&category=genral&apiKey=744c41b06b8e4da199891887178c3713&pagesize=100

// https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=744c41b06b8e4da199891887178c3713&page=${page}&pagesize=${props.pageSize}
