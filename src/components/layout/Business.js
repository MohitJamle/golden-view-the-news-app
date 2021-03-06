import React from "react";
import classes from "./Card.module.css";

const Business = () => {
  const articles = [
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Fed on track for 25 bps hike in March, five hikes in 2022: Gary Schlossberg - Moneycontrol",
      description:
        "Ongoing geopolitics could stretch the period of volatility, fears Wells Fargo's Gary Schlossberg. However, the valuations are looking attractive and provide a chance to bet on quality",
      url: "https://www.moneycontrol.com/news/world/fed-on-track-for-25-bps-hike-in-march-five-hikes-in-2022-gary-schlossberg-8206701.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/Gary-Schlossberg-770x433.jpg",
      publishedAt: "2022-03-08T09:00:26Z",
      content:
        "The United States ban on Russian oil exports, if it materialises, in addition to rising natural gas rates, will not only cause high inflation but also stall growth, feels Gary Schlossberg, Global Str… [+3797 chars]",
    },
    {
      source: { id: null, name: "GaadiWaadi.com" },
      author: "Kshitij Rawat",
      title:
        "Royal Enfield Scram 411 Teased For The First Time; Launch On March 15 - GaadiWaadi.com",
      description:
        "The soon-to-launch Royal Enfield Scram 411 will essentially be a road-biased, scrambler version of the Himalayan ADV",
      url: "https://gaadiwaadi.com/royal-enfield-scram-411-teased-for-the-first-time-launch-on-march-15/",
      urlToImage:
        "https://gaadiwaadi.com/wp-content/uploads/2022/03/Royal-Enfield-Scram-411-first-teaser.jpg",
      publishedAt: "2022-03-08T08:42:11Z",
      content:
        "Royal Enfield has officially announced the launch date of Scram 411 in our market – 15 March 2022. This upcoming scrambler motorcycle has been spied multiple times on the streets of India, and thanks… [+1938 chars]",
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
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Over 70% of Gurugram residential launches in 2021 were low-rise independent floors: JLL - Moneycontrol",
      description:
        "Plots and villa projects recorded a launch of 2,569 units in 2020 and 2021 across Delhi NCR.",
      url: "https://www.moneycontrol.com/news/business/real-estate/over-70-of-gurugram-residential-launches-in-2021-were-low-rise-independent-floors-jll-8206571.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/10/bungalow-580x435.jpeg",
      publishedAt: "2022-03-08T07:57:16Z",
      content:
        "As many as 74 percent of total units launched in Gurugram in the Calendar Year (CY) 2021 were independent floor units, catering to demand from higher-end consumers, according to a report by JLL.\r\nAs … [+3432 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Livemint",
      title:
        "TCS' share buyback opens tomorrow. What investors need to know - Mint",
      description:
        "TCS' share buyback offer will open on Wednesday, March 9 2022 and close on March 23",
      url: "https://www.livemint.com/market/stock-market-news/tcs-share-buyback-opens-tomorrow-what-it-means-for-investors-11646724032422.html",
      urlToImage:
        "https://images.livemint.com/img/2022/03/08/600x338/TCS_shares_1646724234019_1646724234282.jpg",
      publishedAt: "2022-03-08T07:50:05Z",
      content:
        "Tata Consultancy Services (TCS) board in January approved a proposal to buy back upto 4,00,00,000 Stocks for an amount not exceeding 18,000 crore at 4,500 per share. TCS' share buyback offer will ope… [+1936 chars]",
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
      source: { id: null, name: "Carandbike.com" },
      author: "Sameer Contractor",
      title:
        "Volkswagen Virtus Compact Sedan Makes Global Debut, India Launch This Year - carandbike",
      description:
        "Volkswagen has commenced accepting pre-bookings for the new Virtus compact sedan at its sales touchpoints pan India with the launch scheduled later in the year.",
      url: "https://www.carandbike.com/news/volkswagen-virtus-compact-sedan-makes-global-debut-india-launch-this-year-2809974",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/bln5fpto_volkswagen-virtus-global-debut_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T06:36:16Z",
      content:
        "Volkswagen India has revealed the new Virtus compact sedan that makes its global debut. The all-new offering is the newest car to be built on the MQB A0 IN platform and is the fourth car on the platf… [+3083 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Despite steep correction, India’s valuation premium to EM peers at record high - Moneycontrol",
      description:
        "The valuation premium of the MSCI India index has expanded instead of contracting over the past five months",
      url: "https://www.moneycontrol.com/news/business/markets/despite-steep-correction-indias-valuation-premium-to-em-peers-at-record-high-8206211.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/sensex_nifty_sensexdown-2-770x433.jpg",
      publishedAt: "2022-03-08T06:36:04Z",
      content:
        "The more than 15 percent correction in the domestic equity market since October has done little to compress Indias rising premium to its emerging market peers, suggesting that the selling spree of fo… [+3509 chars]",
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
      source: { id: null, name: "Greatandhra.com" },
      author: "IANS",
      title:
        "Samantha invests in e-com marketplace SustainKart.. - Greatandhra",
      description:
        "Actress Samantha Ruth Prabhu has invested in e-commerce marketplace SustainKart for an undisclosed sum, the startup announced on Tuesday.",
      url: "https://www.greatandhra.com/movies/news/samantha-invests-in-e-com-marketplace-sustainkart-119571",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/samantha141646719909.jpg",
      publishedAt: "2022-03-08T06:11:49Z",
      content:
        "Actress Samantha Ruth Prabhu has invested in e-commerce marketplace SustainKart for an undisclosed sum, the startup announced on Tuesday.\r\nHer investment is part of SustainKart Seed Round, said the s… [+1288 chars]",
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
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Ramkrishna Forgings share price gains on tie-up with American axle manufacturer - Moneycontrol",
      description:
        "The company has partnered with a USA axle manufacturer for the light vehicle segment for an estimated business of Rs 70 crore over a five-year period",
      url: "https://www.moneycontrol.com/news/business/stocks/ramkrishna-forgings-share-price-gains-on-tie-up-with-american-axle-manufacturer-8205731.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/07/RAMKRISHNA-FORGINGS-770x433.jpg",
      publishedAt: "2022-03-08T05:17:22Z",
      content:
        'Ramkrishna Forgings share price jumped 4 percent in the morning session on March 8 after the company announced a partnership with an American axle manufacturer for the light vehicle (LV) segment.\r\n"A… [+2031 chars]',
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Elections over, petrol, diesel prices must increase by ₹15 per litre: Experts - Hindustan Times",
      description:
        "Petrol, diesel prices: Oil cos insiders told Reuters they expect at least a ₹10 hike in prices if they are to break even. | Latest News India",
      url: "https://www.hindustantimes.com/india-news/elections-over-petrol-diesel-prices-could-increase-by-rs-15-per-litre-report-101646713710873.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/a4818fe2-959d-11ec-8a23-00fddabcf20d_1646681340834_1646713738284.jpg",
      publishedAt: "2022-03-08T04:31:11Z",
      content:
        "Petrol and diesel prices have to increase by 15 per litre for fuel retailers to break even, industry experts told PTI Monday, as oil companies plan to reduce losses accumulated from keeping rates ste… [+2413 chars]",
    },
    {
      source: { id: null, name: "Team-BHP" },
      author: "Tushar Kelshikar",
      title: "Tata Altroz DCA to get larger touchscreen ICE - Team-BHP",
      description:
        "Tata Motors is gearing up to launch the Altroz DCA (Dual Clutch Automatic). It seems, besides the new transmission, the Altroz will also get an upgraded touchscreen infotainment system. While Tata hasn't announced the official launch date yet, the company has…",
      url: "https://www.team-bhp.com/news/tata-altroz-dca-get-larger-touchscreen-ice",
      urlToImage:
        "https://www.team-bhp.com/sites/default/files/styles/large/public/20220307043248_Tata_Altroz_DCA_screen.jpg",
      publishedAt: "2022-03-08T04:21:05Z",
      content:
        "Tata Motors is gearing up to launch the Altroz DCA (Dual Clutch Automatic). It seems, besides the new transmission, the Altroz will also get an upgraded touchscreen infotainment system.\r\nWhile Tata h… [+737 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "JSW Steel falls despite production revving up over 20% in February - Moneycontrol",
      description:
        "Currently, it is trading 18.75 percent below its 52-week high and 59.04 percent above its 52-week low",
      url: "https://www.moneycontrol.com/news/business/stocks/jsw-steel-falls-despite-production-revving-up-over-20-in-february-8205361.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/03/jsw-steel-770x322.jpg",
      publishedAt: "2022-03-08T04:18:08Z",
      content:
        'JSW Steel share price declined over 1 percent intraday on March 8 despite the company reporting better crude steel production for the month of February.\r\n"JSW Steel reported crude steel production fo… [+765 chars]',
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Mira Patel",
      title:
        "Russian energy dominance over Europe and what it means amidst the Ukraine crisis - The Indian Express",
      description:
        "Russia's invasion of Ukraine has delivered massive shocks to the European energy markets and as the situation escalates, uncertainty is likely to fuel further disruptions. Here's an infographic representation of how European countries are dependent on Russia …",
      url: "https://indianexpress.com/article/research/russian-energy-dominance-over-europe-and-what-it-means-amidst-the-ukraine-crisis-7805045/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/Russia-Gas-Featured-Image.jpeg",
      publishedAt: "2022-03-08T02:45:35Z",
      content:
        "In the wake of Russias invasion of Ukraine, energy prices have skyrocketed, leaving many European countries uncertain of their ability to meet demand in the medium to long term. While the potential o… [+8684 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Women leaving IT sector down by nearly half due to remote working: Study - Moneycontrol",
      description:
        "This is important given that the sector is one of the largest employers of women in the country. Of the 5 million people it employs, more than a quarter are women, and diversity has been one of the key focus areas for the companies in the space.",
      url: "https://www.moneycontrol.com/news/business/women-leaving-it-sector-down-by-nearly-half-due-to-remote-working-study-8202961.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/Women-in-tech-653x435.jpg",
      publishedAt: "2022-03-08T02:35:35Z",
      content:
        "The number of women employees leaving the IT sector has come down by nearly half in 2021 compared to the previous year as more firms moved to the remote work model in the wake of the pandemic, giving… [+6828 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "NSE opex, capex will spike from Rs 400 crore to Rs 4,000 crore, says managing director Vikram Limaye - Moneycontrol",
      description:
        "“The trading systems have been scaled up substantially. We used to process about 100,000 messages per second till about two years ago – that has been scaled up to 300,000. That’s the best in the world,” says Limaye",
      url: "https://www.moneycontrol.com/news/business/markets/nse-opex-capex-will-spike-from-rs-400-crore-to-rs-4000-crore-says-managing-director-vikram-limaye-8204731.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2017/08/img_98407_vikram_limaye-770x433.jpg",
      publishedAt: "2022-03-08T02:33:30Z",
      content:
        "The National Stock Exchange has enormously increased focus on regulatory and technology aspects over the past four years which makes the exchange a far safer place than was before, Vikram Limaye, MD … [+6401 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Aparna Deb",
      title:
        "Stocks to Watch Today: ONGC, Axis Bank, Future Enterprises, TCS, and Others - News18",
      description:
        "Stocks to watch today: Shares of firms like ONGC, Axis Bank, Future Enterprises, TCS, and others will be in focus in Monday's trade",
      url: "https://www.news18.com/news/business/markets/stocks-to-watch-today-ongc-axis-bank-future-enterprises-tcs-and-others-4847582.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/01/whatsapp-image-2022-01-31-at-3.52.56-pm-16436339603x2.jpeg",
      publishedAt: "2022-03-08T02:12:00Z",
      content:
        "Singapore Exchange-traded Nifty50 futures contract was down 0.7 per cent to 15,732.5 as of 6:56 am which indicated of a lower opening for Indian equities. Sell-off intensified in the market continued… [+3117 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Buzzing Stocks | Sun TV, Metro Brands, Great Eastern Shipping, others in news today - Moneycontrol",
      description:
        "Stocks In the News: Check out the companies making headlines before the opening bell",
      url: "https://www.moneycontrol.com/news/photos/business/stocks/buzzing-stocks-ami-organics-vijaya-diagnostic-centre-great-eastern-shipping-company-others-in-news-today-8203871.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/03/BUZZING-STOCKS-770x433.jpg",
      publishedAt: "2022-03-08T02:01:47Z",
      content: null,
    },
    {
      source: { id: null, name: "ThePrint" },
      author: null,
      title:
        "Preferential access, split-second info advantage: How NSE servers were 'compromised for gain' - ThePrint",
      description:
        "CBI has arrested ex-NSE chief Chitra Ramakrishna in bourse manipulation case, for ‘sharing’ crucial and confidential info with an individual she called ‘Himalayan yogi’.",
      url: "https://theprint.in/economy/preferential-access-split-second-info-advantage-how-nse-servers-were-compromised-for-gain/862343/",
      urlToImage:
        "https://static.theprint.in/wp-content/uploads/2022/03/NSE-Illustration.jpg",
      publishedAt: "2022-03-08T02:00:43Z",
      content:
        "New Delhi: Access to information on switching on time, co-location facilities, backup servers, and an absence of load balancers this is what led to the alleged manipulation of the server of Indias la… [+8644 chars]",
    },
    {
      source: { id: null, name: "GaadiWaadi.com" },
      author: "Surendhar M",
      title:
        "Top 10 Hatchbacks In Feb 2022 - Swift, Altroz, i10, i20, Celerio, WagonR - GaadiWaadi.com",
      description:
        "Maruti Suzuki Swift topped the hatchback sales charts in February 2022 ahead of WagonR, Baleno and Alto in India",
      url: "https://gaadiwaadi.com/top-10-hatchbacks-in-feb-2022-swift-altroz-i10-i20-celerio-wagonr/",
      urlToImage:
        "https://gaadiwaadi.com/wp-content/uploads/2022/02/Tata-Altroz-Phoenix-Edition-exterior.jpg",
      publishedAt: "2022-03-08T02:00:07Z",
      content:
        "In the month of February 2022, Maruti Suzuki had the Swift compact hatchback as its most sold model within the domestic range and it certainly dominated the hatchback sales table as well. The Swift p… [+2795 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Soumyarendra Barik",
      title:
        "BharatPe co-founder: Ashneer Grover creating ‘false narrative’, board upheld ‘governance’ - The Indian Express",
      description:
        "Accusing Ashneer Grover of creating a “false narrative” about BharatPe, Shashvat Nakrani wrote: “What is important to note is that this is an aberration and not the norm.”",
      url: "https://indianexpress.com/article/business/economy/bharatpe-co-founder-grover-creating-false-narrative-board-upheld-governance-7805539/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/ashneer-grover-shark-tank-india.jpg",
      publishedAt: "2022-03-08T01:35:33Z",
      content:
        "The board of directors of BharatPe acted quickly and decisively to uphold good corporate governance to remove its co-founder Ashneer Grover from all positions, the companys other co-founder Shashvat … [+3009 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Udit Misra",
      title:
        "ExplainSpeaking: Will soaring oil prices cause ‘stagflation’ in India? - The Indian Express",
      description:
        "While most eyes will be on the five-state Assembly election results, surging crude oil prices and weak GDP data appear to be creating the grounds for stagflation in India",
      url: "https://indianexpress.com/article/explained/oil-prices-rise-stagflation-india-russia-ukraine-war-7804516/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/195255c0ce4744759fe664d98988c1ba-195255c0ce4744759fe664d98988c1ba-beecd64e429040a5b7515a630f9938f1.jpg",
      publishedAt: "2022-03-08T01:17:37Z",
      content:
        "ExplainSpeaking-Economy is a weekly newsletter by Udit Misra, delivered in your inbox every Monday morning. Click here to subscribeDear Readers,\r\nEarly reports on Monday morning suggest that crude oi… [+10936 chars]",
    },
    {
      source: { id: null, name: "CarToq.com" },
      author: "Paarth Khatri",
      title:
        "Watch Jimmy Shergill in 2022 Maruti WagonR Facelift’s new TVC [Video] - CarToq.com",
      description:
        "Maruti Suzuki recently launched the 2022 version of the WagonR in the Indian market. Cosmetically, there are no significant changes, however, mechanically there are. The manufacturer has now released the first TVC of the 2022 WagonR and it features Bollywood …",
      url: "https://www.cartoq.com/watch-jimmy-shergill-in-2022-maruti-wagonr-facelifts-new-tvc-video/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2022/03/jimmy-shergill-wagonR-featured.jpg",
      publishedAt: "2022-03-08T01:15:45Z",
      content:
        "Maruti Suzuki recently launched the 2022 version of the WagonR in the Indian market. Cosmetically, there are no significant changes, however, mechanically there are. The manufacturer has now released… [+2799 chars]",
    },
    {
      source: { id: null, name: "Firstpost" },
      author: "FP Staff",
      title:
        "Petrol, diesel prices today: Rates unchanged on 8 March, check here what you need to pay in your city - Firstpost",
      description:
        "Petrol and diesel prices on 8 March 2022: Petrol price in Delhi stands at Rs 95.41 per litre while diesel is available for Rs 86.67. In Mumbai, petrol is retailing at Rs 109.98 while diesel costs Rs 94.14",
      url: "https://www.firstpost.com/business/petrol-diesel-prices-today-rates-unchanged-on-8-march-check-here-what-you-need-to-pay-in-your-city-10438851.html",
      urlToImage:
        "https://images.firstpost.com/wp-content/uploads/2021/10/PetrolPump_640WC.jpg",
      publishedAt: "2022-03-08T00:41:06Z",
      content:
        "Petrol and diesel prices on 8 March 2022: Petrol price in Delhi stands at Rs 95.41 per litre while diesel is available for Rs 86.67. In Mumbai, petrol is retailing at Rs 109.98 while diesel costs Rs … [+3477 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Saikat Das",
      title:
        "Street fears rupee could plunge below 80 a dollar - Economic Times",
      description:
        "Participants in the poll said the currency market is bracing for wild swings in the next few weeks unless the Ukraine war is brought to a diplomatic conclusion. India's likely weaker external balances due to high commodity prices could add to its woes.",
      url: "https://economictimes.indiatimes.com/markets/forex/street-fears-rupee-could-plunge-below-80-a-dollar/articleshow/90064869.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90064893,width-1070,height-580,imgsize-35484,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-08T00:24:00Z",
      content:
        "Mumbai: The rupee could breach even the 80 mark to a dollar, and the odds are rather short on further immediate declines of at least a percentage point from the unit's closing level Monday, showed an… [+2504 chars]",
    },
    {
      source: { id: null, name: "Blockworks.co" },
      author: "Sebastian Sinclair",
      title:
        "Coinbase Blocks 25,000 Accounts Linked to Russia To 'Support' Sanctions - Blockworks",
      description:
        'Coinbase said it blocked tens of thousands of accounts linked to Russian individuals and entities suspected of "illicit" activity.',
      url: "http://blockworks.co/coinbase-blocks-25000-accounts-linked-to-russia-to-support-sanctions/",
      urlToImage:
        "https://blockworks.co/wp-content/uploads/2021/04/coinbase-scaled-e1645023709640.jpeg",
      publishedAt: "2022-03-08T00:10:00Z",
      content:
        "<ul><li>Coinbase said it has blocked the accounts and has shared the blocked addresses with the US government</li><li>The exchange said it is working with authorities to monitor sanctions lists and s… [+3224 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Mary Ann Azevedo",
      title:
        "Better.com plans to lay off about 4,000 people this week, sources say - TechCrunch",
      description:
        "Online mortgage lender Better.com is poised to lay off roughly 50% of its staff of about 8,000 this week, according to sources familiar with internal happenings at the company. TechCrunch first reported on February 18 that the new round of layoffs were coming…",
      url: "https://techcrunch.com/2022/03/07/better-com-plans-to-lay-off-about-4000-people-this-week-sources-say/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/Better.com_.jpg?w=607",
      publishedAt: "2022-03-07T23:30:05Z",
      content:
        "Online mortgage lender Better.com is poised to lay off roughly 50% of its staff of about 8,000 this week, according to sources familiar with internal happenings at the company.\r\nTechCrunch first repo… [+2535 chars]",
    },
    {
      source: { id: null, name: "Cointelegraph" },
      author: "Jordan Finneseth",
      title:
        "BRISE token soars to new highs after the official launch of BitGert Chain - Cointelegraph",
      description:
        "Crypto markets are down, but that’s not stopping BRISE price from tacking on a near thousand percent gain. Here’s why this new project is making waves.",
      url: "https://cointelegraph.com/news/brise-token-soars-to-new-highs-after-the-official-launch-of-bitgert-chain",
      urlToImage:
        "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDMvODc3YjU3MDUtMjZjYy00OGYzLTk4ZjEtNDYzZjJlNzkyM2NjLmpwZw==.jpg",
      publishedAt: "2022-03-07T21:01:05Z",
      content:
        "The cryptocurrency ecosystem as a whole has taken a back seat to events in the larger world but this is not stopping developers from building.\r\nOne project that has recently begun to gain traction th… [+3733 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ET Bureau",
      title:
        "Crude hits $139 as US and allies weigh ban on imports from Russia - Economic Times",
      description:
        "Delay in the Iranian nuclear deal, which can help lift sanctions against the Islamic Republic and get its oil flowing back to the global market, also added to the nervousness in the market. After touching $139 per barrel in early trade, the highest since 2008…",
      url: "https://economictimes.indiatimes.com/industry/energy/oil-gas/crude-hits-139-as-us-and-allies-weigh-ban-on-imports-from-russia/articleshow/90061856.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90061941,width-1070,height-580,imgsize-34738,overlay-economictimes/photo.jpg",
      publishedAt: "2022-03-07T19:17:00Z",
      content:
        "Oil prices soared to $139 per barrel on Monday as the US and allies considered banning import of oil from Russia, the world's largest exporter of crude and refined products combined.\r\nDelay in the Ir… [+1587 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Sutanuka Ghosal, Writankar Mukherjee, Sagar Malviya",
      title:
        "Collateral damage: Consumer goods to get costlier by 10% - Economic Times",
      description:
        "Experts said prices of these consumer goods could increase up to 10%. In the case of edible oils, the jump could be as high as 20%. Already, prices of commodities such as sunflower and palm oils, steel, aluminium, copper, crude oil and its derivatives have ri…",
      url: "https://economictimes.indiatimes.com/industry/services/retail/collateral-damage-consumer-goods-to-get-costlier-by-10/articleshow/90061402.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90061427,width-1070,height-580,imgsize-59220,overlay-economictimes/photo.jpg",
      publishedAt: "2022-03-07T18:37:00Z",
      content:
        "Groceries, smartphones, laptops as well as imported cosmetics and watches are some of the items that could turn costlier in the next few weeks.\r\nThe reason: record high commodity prices and a weaker … [+4032 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "L&T-SuFin can be a 'multi-million dollar' business: L&T Executive - Moneycontrol",
      description:
        "L&T SuFin has partnered with banks and non-banking financial companies that will offer financing facilities to buyers.",
      url: "https://www.moneycontrol.com/news/business/economy/lt-sufin-can-be-a-multi-million-dollar-business-lt-executives-8203661.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2019/08/Larsen-Toubro_LT_-770x433.jpg",
      publishedAt: "2022-03-07T14:45:44Z",
      content:
        "Engineering major Larsen &amp; Toubro Ltd (L&amp;T) hopes to turn its new e-commerce venture, L&amp;T-SuFin, into a multi-million dollar business, senior executives said at the official launch of the… [+2322 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "SEBI orders Dish TV to declare AGM voting results within 24 hours - Moneycontrol",
      description:
        "Earlier in February, the SEBI had warned Dish TV regulatory action for failing to disclose AGM results. The order came after the firm failed to disclose AGM voting results even after 37 days of meeting.",
      url: "https://www.moneycontrol.com/news/business/companies/sebi-orders-dish-tv-to-declare-agm-voting-results-within-24-hours-8203511.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2020/07/DISH-TV-770x433.jpg",
      publishedAt: "2022-03-07T14:25:16Z",
      content:
        "Markets regulator Securities and Exchange Board of India (SEBI) on March 7 ordered Dish TV India Ltd to declare its annual general meeting (AGM) voting results, held on December 30, in the next 24 ho… [+3313 chars]",
    },
    {
      source: { id: null, name: "CNBCTV18" },
      author: "Sandeep Singh",
      title:
        "Trade setup for March 8: Will Nifty50 bounce back in short term? From key market cues to technical signals, im - CNBCTV18",
      description:
        "Trade setup for Tuesday, March 8: Experts are hopeful of a bounce in the Nifty50 up ahead, though they feel the index may not be out of the woods yet. Here's what the technical charts suggest for the coming session.",
      url: "https://www.cnbctv18.com/market/stocks/trade-setup-mar-8-2022-stock-market-india-sgx-nifty50-bank-nifty-sensex-technical-charts-resistance-support-levels-vix-trading-guide-russia-ukraine-talks-nuclear-tension-12736492.htm",
      urlToImage:
        "https://images.cnbctv18.com/wp-content/uploads/2021/08/nifty-market-1000x573.jpg",
      publishedAt: "2022-03-07T14:18:10Z",
      content:
        "MiniTrade setup for Tuesday, March 8: Experts are hopeful of a bounce in the Nifty50 up ahead, though they feel the index may not be out of the woods yet. Here's what the technical charts suggest for… [+19 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "What sets Mercedes-Maybach S-Class apart from rivals? - Moneycontrol",
      description:
        "Merc has sold close to 700 S-Class and Maybach sedans in the last six years and is in an enviable position of not being able to meet demand fast enough",
      url: "https://www.moneycontrol.com/news/business/companies/what-sets-mercedes-maybach-s-class-apart-from-rivals-8203361.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/1-mercedes-maybach-new-sclass-770x433.jpg",
      publishedAt: "2022-03-07T13:10:26Z",
      content:
        "Mercedes-Benz may be the largest luxury carmaker in India by volume but its overarching dominance in the large sedan segment is what sets it apart from rivals.\r\nThe company recently launched the Mayb… [+5605 chars]",
    },
    {
      source: { id: null, name: "Investing.com" },
      author: "Investing.com",
      title:
        "New-Age Stocks Today: Nykaa Tanks Up To 11%; Paytm's M-Cap Plunges 65% In 3 Months - Investing.com India",
      description:
        "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
      url: "https://in.investing.com/news/newage-stocks-today-nykaa-tanks-up-to-11-paytms-mcap-plunges-65-in-3-months-3113007",
      urlToImage:
        "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/8ff6b05bec2d1e45b67980e8b0f9fcc8_w_800_h_450.jpg",
      publishedAt: "2022-03-07T12:46:05Z",
      content:
        "By Malvika Gurung\r\nInvesting.com -- Amid the ongoing correction in the domestic market, with heavy sell-offs on Monday led by oil prices surging to 14-year peaks and aggravating the Russia-Ukraine cr… [+1169 chars]",
    },
    {
      source: { id: null, name: "CarToq.com" },
      author: "Paarth Khatri",
      title:
        "Maruti Dzire CNG launch soon: Unofficial bookings open - CarToq.com",
      description:
        "According to Team-bhp, some Maruti Suzuki dealerships have started accepting bookings for the upcoming Dzire CNG. Maruti Suzuki has not yet announced anything officially, however it seems like the launch is near. Dzire CNG will be sold through Arena dealershi…",
      url: "https://www.cartoq.com/maruti-dzire-cng-launch-soon-unofficial-bookings-open/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2022/03/dzire-cng-unofficial-bookings-featured.jpg",
      publishedAt: "2022-03-07T12:03:12Z",
      content:
        "According to Team-bhp, some Maruti Suzuki dealerships have started accepting bookings for the upcoming Dzire CNG. Maruti Suzuki has not yet announced anything officially, however it seems like the la… [+2952 chars]",
    },
    {
      source: { id: null, name: "Team-BHP" },
      author: "Rahul Nagaraj",
      title: "2022 KTM RC 390 listed on India website; Launch soon - Team-BHP",
      description:
        "KTM has updated its India website and has now listed the 2022 RC 390, indicating that its launch can be expected in the near future. The design of the 2022 KTM RC 390 is almost identical to its smaller sibling, the RC 200, with the paint schemes and a side-sl…",
      url: "https://www.team-bhp.com/news/2022-ktm-rc-390-listed-india-website-launch-soon",
      urlToImage:
        "https://www.team-bhp.com/sites/default/files/styles/large/public/2022-ktm-rc-390-1.jpg",
      publishedAt: "2022-03-07T11:53:23Z",
      content:
        "KTM has updated its India website and has now listed the 2022 RC 390, indicating that its launch can be expected in the near future.\r\nThe design of the 2022 KTM RC 390 is almost identical to its smal… [+753 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ET Now",
      title:
        "Russia-Ukraine war: Steel exports to EU and MENA countries to increase, says Jindal Steel MD - Economic Times",
      description:
        "“Steel exports from India will increase because this is a good market today as far as the spot market is concerned.   The opportunity for the Indian steel industry lies in exporting more and more to the European Union and also the Middle East and North Africa…",
      url: "https://economictimes.indiatimes.com/markets/expert-view/russia-ukraine-war-steel-exports-to-eu-and-mena-countries-to-increase-says-jspl-md/articleshow/90052984.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90052982,width-1070,height-580,imgsize-20146,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-07T11:13:00Z",
      content:
        '"There will be a marginal margin expansion increase in terms of spot market international prices. As I said, the difference in between spot market international prices and the domestic prices is abou… [+5848 chars]',
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "2022 MG ZS EV facelift launched in India; Know features, price and… - Kalinga TV",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMicWh0dHBzOi8va2FsaW5nYXR2LmNvbS9idXNpbmVzcy9hdXRvbW9iaWxlLzIwMjItbWctenMtZXYtZmFjZWxpZnQtbGF1bmNoZWQtaW4taW5kaWEta25vdy1mZWF0dXJlcy1wcmljZS1hbmQtcmFuZ2Uv0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T11:11:23Z",
      content: null,
    },
    {
      source: { id: null, name: "TelecomTALK" },
      author: "https://www.facebook.com/TelecomTalk/",
      title:
        "Airtel Axis Bank Credit Card All Benefits Listed in Simple Points - TelecomTalk",
      description:
        "Axis Bank will be leveraging Bharti Airtel’s suite of digital services such as Airtel IQ which spans video, streaming, voice, virtual contact center solutions and call masking services or enhancing digital capabilities.",
      url: "https://telecomtalk.info/airtel-axis-bank-credit-card-all-benefits/503371/",
      urlToImage:
        "https://telecomtalk.info/wp-content/uploads/2022/03/airtel-axis-bank-credit-card-all-benefits.jpg",
      publishedAt: "2022-03-07T09:43:02Z",
      content:
        "Bharti Airtel, the second-largest telecom operator and Axis Bank, a leading banking institution have together launched a co-branded credit card for the Indian market. The name of the new card is Airt… [+1743 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Russia-linked Indian refiner put under credit watch, CARE Ratings says - Moneycontrol",
      description:
        "Oil major Rosneft owns a 49.13 percent stake in Nayara while a similar-sized holding is split between global commodities trading house Trafigura and Cyprus-based Russian investment group United Capital Partners.",
      url: "https://www.moneycontrol.com/news/business/russia-linked-indian-refiner-put-under-credit-watch-care-ratings-says-8202431.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/03/rosneft-770x433.png",
      publishedAt: "2022-03-07T09:35:01Z",
      content:
        "India's CARE Ratings Monday said it has placed the long-term ratings of Indian refiner Nayara Energy, part owned by Russia's Rosneft, on 'credit watch with negative implications' due to sanctions aga… [+1609 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Sahil Kukreja",
      title:
        "Top 5 most affordable cars with a panoramic sunroof in India - Times of India",
      description:
        "Cars News: A host of mass-market cars are now offered with a single-pane electric sunroof, however, larger dual-pane 'panoramic' sunroofs are still only offered",
      url: "https://timesofindia.indiatimes.com/auto/cars/top-5-most-affordable-cars-with-a-panoramic-sunroof-in-india/articleshow/90049406.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90049666,width-1070,height-580,imgsize-1233174,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-07T09:13:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Analytics Insight" },
      author: "arti",
      title:
        "Russia-Ukraine War: Will it Change the Future of Cryptocurrencies? - Analytics Insight",
      description:
        "The Russia-Ukraine war has put cryptocurrencies in the spotlight. Assuming that Russia is for sure ready to stay away from or moderate the effect of economic sanctions by using Bitcoin and other cryptocurrencies.",
      url: "https://www.analyticsinsight.net/russia-ukraine-war-will-it-change-the-future-of-cryptocurrencies/",
      urlToImage:
        "https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/03/Russia-Ukraine-War-Will-it-Change-the-Future-of-Cryptocurrencies.jpg",
      publishedAt: "2022-03-07T08:42:48Z",
      content:
        "Both countries are utilizing cryptocurrencies for various purposes. Is the Russia-Ukraine war creating a new way for cryptos?\r\nThe Russia-Ukraine war has put cryptocurrencies in the spotlight. For be… [+2608 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Chitra Ramkrishna: Bhagavad Gita to psychologist, interesting facts about ex-NSE CEO's arrest - India Today",
      description:
        "The CBI had also used the services of a senior psychologist of the Central Forensic Science Laboratory who also questioned her.",
      url: "https://www.indiatoday.in/business/story/chitra-ramkrishna-bhagavad-gita-to-psychologist-interesting-facts-about-ex-nse-ceo-s-arrest-1921688-2022-03-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/CHITRA_REU_1-647x363.jpeg?tBPP8puu0ZcS5UB4cV6QeQbBNMgC6baR",
      publishedAt: "2022-03-07T08:41:57Z",
      content: null,
    },
    {
      source: { id: null, name: "YourStory" },
      author: "Rajiv Bhuva",
      title:
        "[YS Exclusive] Sachin Bansal’s Navi Technologies eyes Rs 4,000 Cr IPO - YourStory",
      description:
        "With near 4-fold revenue growth and profit of Rs 71.2 crore in FY21, Sachin Bansal's Navi is roping in industry veterans to beef up its board ahead of IPO.",
      url: "https://yourstory.com/2022/03/ys-exclusive-sachin-bansals-navi-technologies-ipo/amp",
      urlToImage:
        "https://images.yourstory.com/cs/2/3834ef70ca8011eba0afddaa6974ca30/Photo-SachinBansalNaviTechnologies-1646640219902.png",
      publishedAt: "2022-03-07T08:40:21Z",
      content:
        "On December 10, 2018, Sachin Bansal launched his second venture, Navi Technologies , an ambitious foray to build the most disruptive financial services company, with technology as the underlying cata… [+4896 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Shubham Raj",
      title:
        "As Bajaj Finance continues sinking, Jefferies finds it perfectly priced - Economic Times",
      description:
        "The stock is a proven multibagger and has delivered 6 fold returns in the last five years.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/as-bajaj-finance-continues-sinking-jefferies-finds-it-perfectly-priced/articleshow/90048653.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90048638,width-1070,height-580,imgsize-27172,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-07T08:09:00Z",
      content:
        "NEW DELHI: Initiating coverage on non-banking financial company Bajaj Finance, Jefferies India termed it as best of both worlds but said it was perfectly priced. It rated the stock hold. \r\nShares of … [+1498 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Hindalco Industries share price gains 5% after Jefferies maintains buy, raises target - Moneycontrol",
      description:
        "In the last three months the share price rose more than 45 percent",
      url: "https://www.moneycontrol.com/news/business/stocks/hindalco-industries-share-price-gains-5-after-jefferies-maintains-buy-raises-target-8201511.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/08/Hindalco-2-770x433.jpg",
      publishedAt: "2022-03-07T07:43:58Z",
      content:
        "Hindalco Industries share price jumped 5 percent intraday on March 7 after research firm Jefferies maintained the 'buy' call and raised the target price to Rs 700 from Rs 660 per share.\r\nThe research… [+1248 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Microsoft unveils fourth data center in India - Reuters India",
      description:
        'Microsoft Corp <a href="https://www.reuters.com/companies/MSFT.O" target="_blank">(MSFT.O)</a> unveiled its fourth data centre in India on Monday, betting on rising digital consumption in one of its fastest-growing markets.',
      url: "https://www.reuters.com/world/india/microsoft-unveils-fourth-data-center-india-2022-03-07/",
      urlToImage:
        "https://www.reuters.com/resizer/7uQ9qujNHl20j6hvBSw5NrcBs3c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7HIMJLMEFJMHAXAOKXW7XJSUQ.jpg",
      publishedAt: "2022-03-07T07:26:00Z",
      content:
        "NEW DELHI, March 7 (Reuters) - Microsoft Corp (MSFT.O) unveiled its fourth data centre in India on Monday, betting on rising digital consumption in one of its fastest-growing markets.\r\nMicrosoft Indi… [+1698 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Bloomberg",
      title:
        "TCS plans organisational revamp to double its revenue before 2030 - Mint",
      description:
        "TCS is expected to present this proposed new structure at its board meeting this week",
      url: "https://www.livemint.com/companies/news/tcs-plans-new-organizational-revamp-to-double-its-revenue-before-2030-11646635240400.html",
      urlToImage:
        "https://images.livemint.com/img/2022/03/07/600x338/TCS_1625425732762_1646635401807.jpg",
      publishedAt: "2022-03-07T06:44:38Z",
      content:
        "Tata Consultancy Services plans to overhaul its organizational structure with specialized groups targeted to help startups as well as large global firms as Asias largest software outsourcing provider… [+2269 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Exclusive | PNB Housing Finance plans to raise around $400 million via rights Issue: Sources - Moneycontrol",
      description:
        "Sources indicate that PNB is likely to participate in PNB Housing Finance’s rights issue.",
      url: "https://www.moneycontrol.com/news/business/companies/exclusive-pnb-housing-finance-plans-to-raise-around-400-million-via-rights-issue-sources-8201431.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2018/06/PNB-housing-finance-ltd-770x433.jpg",
      publishedAt: "2022-03-07T06:43:41Z",
      content:
        "PNB Housing Finance is holding a board meet on March 9 to mull fundraising plans, sources have told Moneycontrol. It looks to launch a large rights issue to raise around $400 million.\r\nSources indica… [+476 chars]",
    },
    {
      source: { id: null, name: "CarToq.com" },
      author: "Paarth Khatri",
      title:
        "2022 Toyota Glanza spotted undisguised ahead of launch - CarToq.com",
      description:
        "Toyota will be launching the 2022 Glanza on 15th March. Till now, we have only seen Glanza’s facelift in spy pictures or in teasers. Now, the 2022 Glanza has been leaked online. We can see there are some major changes to the exterior of the Glanza. So, there …",
      url: "https://www.cartoq.com/2022-toyota-glanza-spotted-undisguised-ahead-of-launch/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2022/03/glanza-leaked-featured.jpg",
      publishedAt: "2022-03-07T06:09:52Z",
      content:
        "Toyota will be launching the 2022 Glanza on 15th March. Till now, we have only seen Glanza’s facelift in spy pictures or in teasers. Now, the 2022 Glanza has been leaked online. We can see there are … [+2928 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Pawan Nahar",
      title: "Crude shock! Paint stocks tumble up to 11% - Economic Times",
      description:
        "Santosh Meena, Head of Research, Swastika Investmart said paint stocks are tumbling as there is a double whammy situation for them where boiling crude oil prices is a key challenge because it will dent the margin as crude is one of the key raw materials for t…",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/a-crude-shock-paint-stocks-tumble-up-to-11/articleshow/90045097.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90045624,width-1070,height-580,imgsize-730622,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-07T06:04:00Z",
      content:
        "New Delhi: Rising crude prices sent paints stocks tumbling up to 11 per cent in Monday's trading session, with Indigo Paints hitting a fresh 52-week low level.\r\nOil prices soared more than 6 per cent… [+2201 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Bhaskar Dutta",
      title:
        "Vodafone Idea shares drop 4% as analysts uncertain about telco's revival plan - Economic Times",
      description:
        "Global research firm Nomura maintains a 'reduce' rating on Vodafone Idea with a target at Rs 8 per share.",
      url: "https://economictimes.indiatimes.com/markets/stocks/news/vodafone-idea-shares-drops-4-as-analysts-uncertain-about-telcos-revival-plan/articleshow/90043454.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90043642,width-1070,height-580,imgsize-34218,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-07T04:40:00Z",
      content:
        "NEW DELHI: Despite announcing a fresh round of fund-raising plans, shares of beleaguered telecom operator Vodafone Idea fell sharply on Monday, with analysts recently expressing doubt if the capital … [+1372 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Asit Manohar",
      title:
        "Gold price today: Yellow metal jumps 11.7% in 2022. Will it breach lifetime high? - Mint",
      description:
        "Gold price today: If this rally sustains and spot gold price remains above its current support of $1970 levels, then we can expect it to breach its life-time high of $2075 per ounce in spot market and  ₹56,191 at MCX, believe experts",
      url: "https://www.livemint.com/market/commodities/gold-price-today-yellow-metal-rises-11-7-in-2022-will-it-hit-lifetime-high-11646625196742.html",
      urlToImage:
        "https://images.livemint.com/img/2022/03/07/600x338/ANI-20211102144-0_1641211226529_1646625426762.jpg",
      publishedAt: "2022-03-07T04:06:35Z",
      content:
        "Gold price today: After logging its biggest weekly gain since May 2021, Multi Commodity Exchange or MCX gold rate today opened with an upside gap of 717 per 10 gm and ascended to its intraday high of… [+3173 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Pawan Nahar",
      title:
        "Top cryptocurrency prices today: Bitcoin, Dogecoin, Shiba Inu, Terra tumble up to 10% - Economic Times",
      description:
        "All of the top digital tokens were bleeding, with Terra down more than 10 per cent, followed by an 8 per cent fall in Solana and Avalanche each. Cardano, XRP and Ethereum shed up to 6 per cent.",
      url: "https://economictimes.indiatimes.com/markets/cryptocurrency/top-cryptocurrency-prices-today-bitcoin-dogecoin-shiba-inu-terra-tumble-up-to-10/articleshow/90042615.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90042705,width-1070,height-580,imgsize-61396,overlay-etmarkets/photo.jpg",
      publishedAt: "2022-03-07T03:46:00Z",
      content:
        "New Delhi: Major cryptocurrencies continued to fall on Monday thanks to inflationary worries, triggered by the Russia-Ukraine war. The pain in altcoins was even more severe.\r\nThe decline began as bad… [+2975 chars]",
    },
    {
      source: { id: null, name: "Entrackr" },
      author: "Harsh Upadhyay",
      title:
        "Captain Fresh raises $50 Mn in Series C; valuation jumps 50X in a year - Entrackr",
      description:
        "B2B animal protein marketplace Captain Fresh has raked in $50 million in its Series C investment round co-led by existing investors Prosus Ventures and Tiger Global. Accel India, Matrix Partners India, Ankur Capital, and Incubate Fund also participated in the…",
      url: "https://entrackr.com/2022/03/captain-fresh-raises-50-mn-in-series-c-valuation-jumps-50x-in-a-year/",
      urlToImage:
        "https://entrackr.com/wp-content/uploads/2021/07/Captain-Fresh.jpg",
      publishedAt: "2022-03-07T03:30:14Z",
      content: null,
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Buzzing Stocks | Nazara Technologies, Khadim India, PNB Housing Finance, others in news today - Moneycontrol",
      description:
        "A look at Nazara Technologies, Khadim India, PNB Housing Finance, and other stocks that are in news at the moment.",
      url: "https://www.moneycontrol.com/news/photos/business/stocks/buzzing-stocks-nazara-technologies-khadim-india-pnb-housing-finance-others-in-news-today-8199811.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/03/BUZZING-STOCKS-770x433.jpg",
      publishedAt: "2022-03-07T01:36:33Z",
      content: null,
    },
    {
      source: { id: null, name: "Kitco NEWS" },
      author: "http://www.facebook.com/kitconews",
      title:
        "Gold drives to $2000 an ounce, oil breaks $130 a barrel - Kitco NEWS",
      description:
        "(Kitco News) - The Ukraine-Russia conflict continues to roil markets with oil prices pushing to a new record high and gold prices hitting $2,000 an ounce.",
      url: "https://www.kitco.com/news/2022-03-06/Gold-approaches-2-000-an-ounce-oil-breaks-130-a-barrel.html",
      urlToImage: "https://www.kitco.com/news/images/Kitco_News_Default_V4.jpg",
      publishedAt: "2022-03-07T01:29:00Z",
      content:
        "Editor's Note: With so much market volatility, stay on top of daily news! Get caught up in minutes with our speedy summary of today's must-read news and expert opinions. Sign up here! \r\n(Kitco News) … [+871 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Gaurav Laghate",
      title: "PVR, Cinepolis India in advanced merger talks - Economic Times",
      description:
        "Cinépolis to be largest shareholder with 20% in company; PVRs Ajay Bijli to have management control for at least 3 yrs. Two people with direct knowledge of the negotiations told ET that the deal is  moving quickly toward fruition  and will result in the combi…",
      url: "https://economictimes.indiatimes.com/industry/media/entertainment/pvr-cinepolis-india-in-advanced-merger-talks/articleshow/90040657.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90040685,width-1070,height-580,imgsize-30868,overlay-economictimes/photo.jpg",
      publishedAt: "2022-03-07T01:02:00Z",
      content:
        "Indias leading multiplex chain PVR and the local unit of Mexican company Cinépolis are in advanced merger talks, potentially reshaping the countrys film exhibition industry that witnessed its first p… [+4590 chars]",
    },
    {
      source: { id: null, name: "Deccan Herald" },
      author: "AFP",
      title: "Brent crude nears $140, close to all-time high - Deccan Herald",
      description:
        "Brent oil prices soared to a near 14-year high of $140 on Sunday as traders fretted over the fallout from Russia's invasion of Ukraine. Brent North Sea crude oil for May delivery reached $139.13 shortly after electronic trading opened around 2300 GMT, heading…",
      url: "https://www.deccanherald.com/business/business-news/brent-crude-nears-140/barrel-close-to-all-time-high-1088690.html",
      urlToImage:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2022/03/07/2018-06-14t110259z1786210582rc175ef0f6f0rtrmadp3oil-opec-shalejpg-1088064-1646412899-1088690-1646629832.jpg",
      publishedAt: "2022-03-07T00:25:44Z",
      content:
        "Brent oil prices soared to a near 14-year high of $140 on Sunday as traders fretted over the fallout from Russia's invasion of Ukraine.\r\nBrent North Sea crude oil for May delivery reached $139.13 sho… [+1532 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Accounting firms KPMG and PwC to exit Russia - Reuters.com",
      description:
        "Two of the Big Four accounting firms KPMG and PricewaterhouseCoopers LLP (PwC) on Sunday said they will no longer have a member firm in Russia due to the country's invasion of Ukraine.",
      url: "https://www.reuters.com/business/finance/accounting-firms-kpmg-pwc-exit-russia-2022-03-06/",
      urlToImage:
        "https://www.reuters.com/resizer/QRQA07UhI_PfFU8J-99yolzodaA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MMZRAYNO2ZJZ3PDVYZ72OIUZPA.jpg",
      publishedAt: "2022-03-06T22:30:00Z",
      content:
        "March 6 (Reuters) - Two of the Big Four accounting firms KPMG and PricewaterhouseCoopers LLP (PwC) on Sunday said they will no longer have a member firm in Russia due to the country's invasion of Ukr… [+1186 chars]",
    },
    {
      source: { id: null, name: "Teslarati" },
      author: "https://www.facebook.com/sim.alva",
      title:
        "President Zelensky confirms more Starlink shipments for Ukraine, invites Elon Musk to visit after the war - Teslarati",
      description:
        "It appears that SpaceX is only getting started with its efforts in helping keep Ukraine connected to the internet despite the ongoing Russian invasion. In a recent announcement, Ukraine President Volodymyr Zelensky stated that Elon Musk has pledged to send an…",
      url: "https://www.teslarati.com/ukraine-zelensky-more-starlink-elon-musk-invitation/",
      urlToImage:
        "https://www.teslarati.com/wp-content/uploads/2022/03/elon-ukraine-president-zoom-conference.jpg",
      publishedAt: "2022-03-06T20:03:45Z",
      content:
        "It appears that SpaceX is only getting started with its efforts in helping keep Ukraine connected to the internet despite the ongoing Russian invasion. In a recent announcement, Ukraine President Vol… [+2939 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Sangita Mehta",
      title:
        "Lenders weigh legal action over Future Retail store transfer - Economic Times",
      description:
        "In the late evening meeting on Friday, lenders raised concerns over the worth of their securities as Future Retail had raised loans from domestic lenders by hypothecating all present and future inventories within the stores.  This has amounted to alienation o…",
      url: "https://economictimes.indiatimes.com/industry/services/retail/lenders-weigh-legal-action-over-future-retail-store-transfer/articleshow/90038077.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-90038103,width-1070,height-580,imgsize-13424,overlay-economictimes/photo.jpg",
      publishedAt: "2022-03-06T19:18:00Z",
      content:
        "Lenders are considering to seek legal remedy against Future Retail after Reliance Industries (RIL) took control of nearly 200 large-format stores without getting their consent, said two people aware … [+2985 chars]",
    },
    {
      source: { id: null, name: "Entrackr" },
      author: "Harsh Upadhyay",
      title: "CredAvenue turns unicorn after $135 Mn Series B round - Entrackr",
      description:
        "Online debt platform CredAvenue has raised $137 million in its Series B round led by Insight Partners, B Capital Group and Dragoneer with participation from existing investors. According to CredAvenue, it has scooped up the new round at $1.3 billion valuation…",
      url: "https://entrackr.com/2022/03/credavenue-turns-unicorn-after-135-mn-series-b-round/",
      urlToImage:
        "https://entrackr.com/wp-content/uploads/2021/10/Cred-Avenue-new.jpg",
      publishedAt: "2022-03-06T15:12:04Z",
      content: null,
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Education Desk",
      title:
        "Google India invites applications for Girl Hackathon 2022: Check deadline, eligibility - The Indian Express",
      description:
        "The programme is open to all women students pursuing undergraduate or postgraduate degrees in computer science and/or related circuit branches.",
      url: "https://indianexpress.com/article/education/google-india-invites-applications-for-girl-hackathon-check-deadline-how-to-apply-eligibility-buildyourfuture-withgoogle-com-7803239/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/Girl-Hackathon-2022.jpg",
      publishedAt: "2022-03-06T11:42:33Z",
      content:
        "Google India is inviting applications for ‘women coders’ to participate in Girl Hackathon 2022. Women students of computer science and allied courses can register in teams of three through the offici… [+2743 chars]",
    },
  ];

  return (
    <div className={classes.container}>
      {articles.map((item) => {
        return (
          <span className={classes.card} key={Math.random()}>
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

export default Business;
