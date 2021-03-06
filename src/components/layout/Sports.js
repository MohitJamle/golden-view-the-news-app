import React from "react";
import classes from "./Card.module.css";

const Sports = () => {
  const articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Firdose Moonda",
      title:
        "Eight IPL-bound players included in South Africa squad for Bangladesh ODIs - ESPNcricinfo",
      description:
        "Anrich Nortje, who is recovering from a hip injury, and Sisanda Magala, who failed a fitness test, were unavailable for selection",
      url: "https://www.espncricinfo.com/story/sa-vs-ban-odi-series-eight-ipl-bound-players-included-in-south-africa-squad-1304357",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/326600/326629.6.jpg",
      publishedAt: "2022-03-08T09:32:33Z",
      content:
        "NewsAnrich Nortje, who is recovering from a hip injury, and Sisanda Magala, who failed a fitness test, were unavailable for selection",
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
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Slow motion | 2022 #QatarGP - MotoGP",
      description:
        "The beauty of bikes under the spotlight in Qatar 👀Enjoy the return of #MotoGP in super slowmo! 😍#QatarGP 🇶🇦Visit The Official Website: http://www.motogp....",
      url: "https://www.youtube.com/watch?v=03jgjUUWksQ",
      urlToImage: "https://i.ytimg.com/vi/03jgjUUWksQ/maxresdefault.jpg",
      publishedAt: "2022-03-08T08:30:31Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "'Virat had neck and jaw pain before WC semis, took it lightly': Ex-India physio on Kohli's 'phenomenal' pain tolerance - Hindustan Times",
      description:
        "Virat Kohli has missed only a handful of games because of fitness issues, which demonstrates the 33-year-old's threshold of pain. This was highlighted by former India physio Ashish Kaushik, who was with the team during the 2011 World Cup and Kohli's early yea…",
      url: "https://www.hindustantimes.com/cricket/virat-kohli-had-neck-and-jaw-pain-before-world-cup-semis-took-it-lightly-ex-india-physio-ashish-kaushik-recalls-star-player-s-phenomenal-pain-tolerance-101646724837695.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/kohli-india-new-getty_1646725122300_1646725129311.jpg",
      publishedAt: "2022-03-08T07:42:41Z",
      content:
        "Former India captain Virat Kohli has set a benchmark in modern-day cricket when it comes to fitness. Under Kohli, the much talked-about yo-yo test was introduced, a fitness parameter needed which Ind… [+2085 chars]",
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
      source: { id: null, name: "Cricketaddictor.com" },
      author: "More by Vicky Singh",
      title:
        "FAR vs PNL Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- European Cricket League T10 - Cricket Addictor",
      description:
        "FAR vs PNL Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- European Cricket League T10",
      url: "https://cricketaddictor.com/fantasy-cricket/far-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-european-cricket-league-t10/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/02/European-Cricket-League-T10-Dream11-Prediction-Fantasy-Cricket-Tips-Dream11-Team.jpg",
      publishedAt: "2022-03-08T06:53:32Z",
      content:
        "FAR vs PNL Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of European Cricket League T10 match between Farmers and Punjab Lions Nicosia. They will pla… [+4495 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Amit Kumar",
      title:
        "IPL 2022: Rising Indian batting star and U-19 World Cup-winning captain Yash Dhull wants to learn from Vi - Times of India",
      description:
        "Cricket News: Yash Dhull is looking forward to meeting his idol Virat Kohli and taking tips from the former India captain during the upcoming IPL season 15, schedul",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2022-yash-dhull-wants-to-learn-from-virat-kohli-and-rishabh-pant/articleshow/90070163.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90070291,width-1070,height-580,imgsize-77466,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-08T06:24:00Z",
      content:
        "IPL 2022: Rising Indian batting star and U-19 World Cup-winning captain Yash Dhull wants to learn from Virat Kohli and Rishabh Pant",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Aakash Arya",
      title:
        "India vs Sri Lanka: Former India Cricketer Makes Big Prediction On Ravichandran Ashwin - NDTV Sports",
      description:
        "India vs Sri Lanka: Ravichandran Ashwin surpassed Kapil Dev's tally of Test wickets with a fine showing in Mohali in the opening Test.",
      url: "https://sports.ndtv.com/india-vs-sri-lanka-2022/india-vs-sri-lanka-former-india-cricketer-makes-big-prediction-on-ravichandran-ashwin-2809894",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/etg1q0go_ravichandran-ashwin-afp_625x300_08_March_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-03-08T05:57:05Z",
      content:
        "Former Indian cricketer Parthiv Patel spoke highly of spinner Ravichandran Ashwin after his brilliant performance in the India's win over Sri Lanka in the first Test in Mohali. Ashwin, who went past … [+2593 chars]",
    },
    {
      source: { id: null, name: "Insidesport.in" },
      author: null,
      title:
        "IPL 2022: Hardik Pandya does a U-Turn, to attend NCA Camp - InsideSport",
      description:
        "IPL 2022: After stern warning from BCCI selectors, Hardik Pandya does a U-Turn, will attend NCA camp ahead of IPL - Follow IPL 2022 Live Updates",
      url: "https://www.insidesport.in/ipl-2022-after-stern-warning-from-bcci-selectors-hardik-pandya-does-a-u-turn-will-attend-nca-camp-ahead-of-ipl/",
      urlToImage:
        "https://www.insidesport.in/wp-content/uploads/2022/03/thequint_2020-01_4e06e721-0df3-4994-b787-8f25eab1e3e1_EGhrHRVU0AEuchP.jpg?w=696",
      publishedAt: "2022-03-08T05:39:12Z",
      content:
        "IPL 2022: Hardik Pandya to attend NCA camp – Hardik Pandya has finally decided to pay heed to the selectors’ call after ignoring the advice to check into the NCA. After receiving stern warning from s… [+2472 chars]",
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
      source: { id: null, name: "NDTV News" },
      author: "Vedant Yadav",
      title:
        '"I Let The Team Down": England All-Rounder Ben Stokes\' Ashes Admission - NDTV Sports',
      description:
        "Ben Stokes, who had taken a six-month break from the game, feels that he could've been in a better shape physically.",
      url: "https://sports.ndtv.com/cricket/i-let-the-team-down-england-all-rounder-ben-stokes-admission-2809687",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/s1m3kpj_ben-stokes-afp_625x300_09_January_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-03-08T03:15:32Z",
      content:
        "Ahead of the start of the three-match Test series against West Indies, England vice-captain Ben Stokes has recalled the Three Lions' crushing 0-4 defeat against Australia in the Ashes. With the first… [+1428 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "IPL 2022: MS Dhoni-led CSK begin training in Surat, get rousing reception from fans - WATCH - Hindustan Times",
      description:
        "Fans lined up in the streets to catch a glimpse of MS Dhoni and his CSK team, a video of which was shared by the franchise's Twitter handle on Monday. | Cricket",
      url: "https://www.hindustantimes.com/cricket/ipl-2022-ms-dhoni-led-csk-chennai-super-kings-begin-training-in-surat-get-rousing-reception-from-fans-watch-101646707313751.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/FNPddJgacAECmjv_1646707397092_1646707417046.jpg",
      publishedAt: "2022-03-08T03:09:08Z",
      content:
        "Chennai Super Kings (CSK) received a rousing welcome from fans in Surat when they arrived in the city earlier this week to kick off their preparation for the impending 15th season of the Indian Premi… [+1306 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "IPL 2022: Leg-spinner Rahul Chahar set to tie to knot with fiancé Ishani on THIS date - Zee News",
      description:
        "Team India and Punjab Kings leg-spinner Rahul Chahar is set to become the second cricketer to tie the knot before the upcoming Indian Premier League (IPL) 2022 season. Chahar will join Royal Challengers Bangalore’s Glenn Maxwell as the two cricketers to get m…",
      url: "https://zeenews.india.com/cricket/ipl-2022-leg-spinner-rahul-chahar-set-to-tie-to-knot-with-fianc-ishani-on-this-date-2443179.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/08/1020786-chaharishani.jpg",
      publishedAt: "2022-03-08T02:56:27Z",
      content:
        "Team India and Punjab Kings leg-spinner Rahul Chahar is set to become the second cricketer to tie the knot before the upcoming Indian Premier League (IPL) 2022 season. Chahar will join Royal Challeng… [+1396 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TNN",
      title:
        "Didn't earn a single penny in my 22-year playing career, but money isn't everything: Shantha Rangaswamy - Times of India",
      description:
        "Cricket News: Shantha Rangaswamy is a pioneer in more ways than one. She is the first captain of the Indian women's Test team, the first Indian woman to score an in",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/people-do-take-women-with-a-pinch-of-salt-shantha-rangaswamy/articleshow/90065934.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90069487,width-1070,height-580,imgsize-44230,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-08T02:34:00Z",
      content:
        "Ahead of inaugural World Cup, Shantha Rangaswamy wants BCCI to revise U-19 rule for female cricketersBCCI Apex Council member Shantha Rangaswamy has written to the Board to revise the hospitalisation… [+196 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Annesha Ghosh",
      title:
        "Recent Match Report - PAK Women vs AUS Women 6th Match 2021/22 - ESPNcricinfo",
      description:
        "A 99-run stand between Bismah Maroof and Aliya Riaz lifted Pakistan from 44 for 4",
      url: "https://www.espncricinfo.com/series/icc-women-s-world-cup-2021-22-1219028/australia-women-vs-pakistan-women-6th-match-1243913/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335500/335563.6.jpg",
      publishedAt: "2022-03-08T01:56:08Z",
      content: "Annesha Ghosh is a sub-editor at ESPNcricinfo. @ghosh_annesha",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "IPL 2022: Virat Kohli`s Royal Challengers Bangalore set to announce new captain on THIS date - Zee News",
      description:
        "The Royal Challengers Bangalore (RCB) are the last one of the 10 Indian Premier League (IPL) team yet to finalise a captain ahead of the 2022 season. The IPL 2022 season will get underway on March 26 with defending champions Chennai Super Kings taking on Kolk…",
      url: "https://zeenews.india.com/cricket/ipl-2022-virat-kohli-s-royal-challengers-bangalore-set-to-announce-new-captain-on-this-date-2443163.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/08/1020774-kohlifaf.jpg",
      publishedAt: "2022-03-08T01:27:13Z",
      content:
        "The Royal Challengers Bangalore (RCB) are the last one of the 10 Indian Premier League (IPL) team yet to finalise a captain ahead of the 2022 season. The IPL 2022 season will get underway on March 26… [+1704 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Alan Gardner",
      title:
        "West Indies batters 'need to give the bowlers something to work with' - Simmons - ESPNcricinfo",
      description:
        "Absence of James Anderson and Stuart Broad won't make hosts complacent, says coach",
      url: "https://www.espncricinfo.com/story/wi-vs-eng-1st-test-antigua-west-indies-batters-need-to-give-the-bowlers-something-to-work-with-simmons-1304283",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335500/335539.6.jpg",
      publishedAt: "2022-03-07T21:55:00Z",
      content: "Campbell, Phillip in squad for first Test against England",
    },
    {
      source: { id: null, name: "SB Nation" },
      author: "David Pasztor",
      title:
        "‘Private’ Saudi consortium, New York Jets owner latest to register interest in Chelsea - We Ain't Got No History",
      description: "March 15 deadline approaching",
      url: "https://weaintgotnohistory.sbnation.com/2022/3/7/22966182/private-saudi-consortium-new-york-jets-owner-latest-to-register-interest-in-chelsea-reports",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/5Zeqb9xvgArRx7e2h018ngkoS-E=/0x40:3000x1611/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23296094/1344801589.jpg",
      publishedAt: "2022-03-07T21:43:04Z",
      content:
        "Were just about a week out from the supposed March 15 deadline set for the Chelsea bidding process, and we have a couple more interested parties and groups reportedly emerging with interest in acquir… [+1663 chars]",
    },
    {
      source: { id: "marca", name: "Marca" },
      author: "MARCA, Adapted by SAM",
      title: "Gerrard wants Coutinho to stay at Aston Villa - Marca",
      description:
        "Philippe Coutinho is rediscovering his best form at Aston Villa, and head coach Steven Gerrard is keen to make his loan move from Barcelona into a permanent one in the summer.\n\nThe",
      url: "https://www.marca.com/en/football/aston-villa/2022/03/07/62266d77e2704e03158b4579.html",
      urlToImage:
        "https://phantom-marca.unidadeditorial.es/7cad64632b127bb17f19e6e1c5ebbbe3/resize/1200/f/jpg/assets/multimedia/imagenes/2022/03/07/16466696907018.jpg",
      publishedAt: "2022-03-07T20:51:29Z",
      content:
        "Philippe Coutinho is rediscovering his best form at Aston Villa, and head coach Steven Gerrard is keen to make his loan move from Barcelona into a permanent one in the summer.\r\nThe Brazilian attackin… [+1355 chars]",
    },
    {
      source: { id: null, name: "ESPN India" },
      author: "Adam Schefter",
      title:
        "Sources - New York Jets owner Woody Johnson interested in buying English Premier League club Chelsea - ESPN India",
      description:
        "Jets owner Woody Johnson is preparing a bid to buy English Premier League club Chelsea, sources told ESPN's Adam Schefter.",
      url: "https://www.espn.in/nfl/story/_/id/33446527/sources-new-york-jets-owner-woody-johnson-interested-buying-english-premier-league-club-chelsea",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0304%2Fnfl_u_johnson11_1296x729.jpg",
      publishedAt: "2022-03-07T19:51:53Z",
      content:
        'New York Jets owner Robert "Woody" Johnson is readying a bid for Chelsea in the English Premier League, according to sources close to the situation.\r\nJohnson already has spoken to Raine Group, which … [+1741 chars]',
    },
    {
      source: { id: null, name: "Barcauniversal.com" },
      author: "Adithya Eshwarla",
      title:
        "“If Barca fail to sign Haaland, news will appear on Messi’s return” – Journalist verdict - Barca Universal",
      description:
        "A lot has been made in recent weeks over the departure of Lionel Messi. The sudden boost in form of the Blaugranas has got fans divided into two sections with polarising views. The emerging school of thought is that Barcelona would not be so effective under X…",
      url: "https://barcauniversal.com/if-barca-fail-to-sign-haaland-news-will-appear-on-messis-return-journalist-verdict/",
      urlToImage:
        "https://barcauniversal.com/wp-content/uploads/2022/03/fbl-fra-ligue1-nice-psg-1000x600.jpg",
      publishedAt: "2022-03-07T18:22:57Z",
      content:
        "A lot has been made in recent weeks over the departure of Lionel Messi. The sudden boost in form of the Blaugranas has got fans divided into two sections with polarising views.\r\nThe emerging school o… [+1300 chars]",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "Craig Ervine named full-time Zimbabwe limited-overs captain | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "Lance Klusener will rejoin the side as the batting coach with Stuart Matsikenyeri now assistant coach",
      url: "https://www.cricbuzz.com/cricket-news/121367/craig-ervine-named-full-time-zimbabwe-limited-overs-captain-cricbuzzcom",
      urlToImage:
        "//m.cricbuzz.com/a/img/v1/600x400/i1/c227979/ervine-recently-led-in-ireland-scotland-and-sri-lanka.jpg",
      publishedAt: "2022-03-07T17:38:40Z",
      content:
        "Craig Ervine has been named as Zimbabwe's full-time limited-overs captain while Sean Williams will continue to lead the Test side. Regis Chakabva will be the vice-captain in all three formats. Ervine… [+1223 chars]",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: "More by Vicky Singh",
      title:
        "UAE vs NAM Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- CWC League-2 One-Day, Match 62 - Cricket Addictor",
      description:
        "UAE vs NAM Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- CWC League-2 One-Day, Match 62",
      url: "https://cricketaddictor.com/fantasy-cricket/uae-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cwc-league-2-one-day-match-62/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2021/11/Namibia-1.jpg",
      publishedAt: "2022-03-07T17:37:52Z",
      content:
        "UAE vs NAM Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of CWC League-2 one-Day match between the United Arab Emirates and Namibia.  They will play … [+4335 chars]",
    },
    {
      source: { id: null, name: "Avenuemail.in" },
      author: "News Desk",
      title:
        "Jamshedpur becomes Shield City with historic win over Mariners - Avenue Mail",
      description:
        "Jamshedpur becomes Shield City with historic win over Mariners | Jamshedpur News | The Avenue Mail",
      url: "https://avenuemail.in/jamshedpur-becomes-shield-city-with-historic-win-over-mariners/",
      urlToImage:
        "https://i0.wp.com/avenuemail.in/wp-content/uploads/2022/03/FSDL-CEO-Martin-Bain-presents-the-Hero-ISL-League-Shield-to-Jamshedpur-FC-captain-Peter-Hartley-1.jpg?fit=2400%2C1630&ssl=1",
      publishedAt: "2022-03-07T17:09:30Z",
      content:
        "Jamshedpur/Goa, March 7: Ritwik Das helped Jamshedpur FC and himself gallop into the history books with a second-half winner to down ATK Mohun Bagan by a 1-0 margin and bag the  League Shield for the… [+2629 chars]",
    },
    {
      source: { id: null, name: "Metro.co.uk" },
      author: "Dan Gibbs",
      title:
        "Rangnick believes only two players can handle pressure when Man Utd fall behind - Metro.co.uk",
      description:
        "Manchester United are far from guaranteed a top-four finish.",
      url: "https://metro.co.uk/2022/03/07/rangnick-believes-only-two-players-can-handle-pressure-when-man-utd-fall-behind-16232596/",
      urlToImage:
        "https://metro.co.uk/wp-content/uploads/2022/03/GettyImages-1238982348-4653_1646672618.jpg?quality=90&strip=all&w=1200&h=630&crop=1",
      publishedAt: "2022-03-07T17:03:00Z",
      content:
        "Ralf Rangnick has his work cut out at Manchester United (Picture: Matthew Ashton AMA/Getty Images)\r\nRalf Rangnick reportedly feels only Luke Shaw and Scott McTominay are displaying the qualities need… [+2636 chars]",
    },
    {
      source: { id: null, name: "Bavarian Football Works" },
      author: "Ineednoname",
      title:
        "Bayern Munich vs RB Salzburg: Lineups, team news, pressure mounting on Nagelsmann, and more! (Updated) - Bavarian Football Works",
      description:
        "Since the first leg was a draw, this one is do or die for Bayern Munich.",
      url: "https://www.bavarianfootballworks.com/2022/3/7/22965488/bayern-munich-vs-rb-salzburg-champions-league-lineups-team-news-injuries-manuel-neuer-thomas-muller",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/F9Yn3mGPpbk6mhUHLRYLGdUTTos=/0x0:3861x2021/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23294976/1382261673.jpg",
      publishedAt: "2022-03-07T17:00:00Z",
      content:
        "Julian Nagelsmann is a man under pressure right now. Bayern Munich have been on a torrid run of form recently, failing to win three of their last five games. While slip ups can be tolerated in the Bu… [+3214 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Sports Desk",
      title:
        "Highlights IND vs PAK Friendship Cup UAE Match: Pakistan Legends Beat India Legends By 8 Wickets - India.com",
      description:
        "Salman Butt's half-century guides Pakistan Legends to an 8-wicket victory over India Legends.",
      url: "https://www.india.com/sports/highlights-ind-vs-pak-friendship-cup-uae-match-pakistan-legends-beat-india-legends-by-8-wickets-5273397/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/03/pjimage-2022-03-07T154750.751.jpg",
      publishedAt: "2022-03-07T15:38:05Z",
      content:
        "Highlights India Legends vs Pakistan Legends, Friendship Cup UAE\r\nAs it Happened: Pakistan Legends Beat India Legends By 8 Wickets. Salman Butt hits half-century. India Legends Strike Early; Imran Na… [+3627 chars]",
    },
    {
      source: { id: null, name: "Managing Madrid" },
      author: "Lucas Navarrete",
      title:
        "BREAKING: Mbappe questionable for return leg against Real Madrid - Managing Madrid",
      description:
        "The striker suffered a big knock on his foot during today's training, according to reports from French media.",
      url: "https://www.managingmadrid.com/2022/3/7/22965494/real-madrid-psg-2022-mbappe-injury",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/K10H1sZpFzopi1e_gyu5TmfNM6E=/0x415:3338x2163/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23294988/1238893826.jpg",
      publishedAt: "2022-03-07T15:24:52Z",
      content:
        "Paris Saint-Germain attacker Kylian Mbappé is questionable for Wednesday's match between Real Madrid and the French club in the return leg of the Champions League's Round of 16 after suffering a big … [+805 chars]",
    },
    {
      source: { id: null, name: "Bavarian Football Works" },
      author: "CSmith1919",
      title:
        "Fabrizio Romano says deal between Bayern Munich target Andreas Christensen and FC Barcelona is getting close - Bavarian Football Works",
      description: "Next man up?",
      url: "https://www.bavarianfootballworks.com/2022/3/7/22965451/bayern-munich-fabrizio-romano-andreas-christensen-fc-barcelona-chelsea-deal-sule-upamecano-pavard",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/aJM5rPcsfxcj_zqEOPwN_ZaDt0E=/0x266:2673x1665/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23294963/1372792993.jpg",
      publishedAt: "2022-03-07T15:20:12Z",
      content:
        "For Bayern Munich fans holding out hope that the club would be able to sneak in at the last minute and prevent Chelsea FC defender Andreas Christensen from moving to FC Barcelona, time appears to be … [+1195 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "PV Sindhu dances to `Kacha Badam` song, video goes viral - WATCH - Zee News",
      description:
        "Badminton star PV Sindhu has become the latest celebrity to join the ‘Kacha Badam’ bandwagon as she danced to the catchy song which is composed by a peanut seller - Bhuban Badyakar.",
      url: "https://zeenews.india.com/badminton/pv-sindhu-dances-to-kacha-badam-song-video-goes-viral-watch-2443111.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/07/1020721-pv-sindhu-dance.jpg",
      publishedAt: "2022-03-07T15:07:19Z",
      content:
        "Badminton star PV Sindhu has become the latest celebrity to join the Kacha Badam bandwagon as she danced to the catchy song which is composed by a peanut seller - Bhuban Badyakar.\r\nFor the unversed, … [+1840 chars]",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "BCB president questions Shakib Al Hasan commitment to national team | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "The star allrounder had claimed that he is not ready mentally and physically to play in South Africa",
      url: "https://www.cricbuzz.com/cricket-news/121366/bcb-president-questions-shakibs-commitment-to-national-team",
      urlToImage:
        "http://www.cricbuzz.com/a/img/v1/600x400/i1/c227977/shakib-has-been-included-in-th.jpg",
      publishedAt: "2022-03-07T15:06:14Z",
      content:
        "Shakib has been included in the ODI and Test squads for the South Africa tour. © Getty\r\nThe Bangladesh Cricket Board president Nazmul Hasan on Monday (March 7) raised questions over Shakib Al Hasan's… [+2343 chars]",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "Australia tour of Pakistan, 2022: Pretty benign, dead wicket: Steve Smith on Rawalpindi pitch | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "In 11 sessions so far, there have been 925 runs scored for just 11 wickets on the Rawalpindi track",
      url: "https://www.cricbuzz.com/cricket-news/121365/pretty-benign-dead-wicket-smith-on-rawalpindi-pitch",
      urlToImage:
        "http://www.cricbuzz.com/a/img/v1/600x400/i1/c227978/smith-who-made-78-acknowledg.jpg",
      publishedAt: "2022-03-07T14:49:19Z",
      content:
        "Smith, who made 78, acknowledged he was pretty disappointed with his dismissal. © AFP\r\nAs Australia tour Pakistan after a gap of 24 years, there's a feeling that the teams and fans have been robbed o… [+2351 chars]",
    },
    {
      source: { id: null, name: "Daily Mail" },
      author: "Jacob Ranson",
      title:
        "Manchester City boss Pep Guardiola labels Liverpool the 'toughest opponent' he has ever faced - Daily Mail",
      description:
        "Guardiola insists The Reds are 'outstanding' despite coming up against the likes of Jose Mourinho's Real Madrid during his time with Barcelona as well as Borussia Dortmund when he was at Bayern.",
      url: "https://www.dailymail.co.uk/sport/football/article-10585971/Manchester-City-boss-Pep-Guardiola-labels-Liverpool-toughest-opponent-faced.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/03/07/13/55049435-0-image-a-69_1646660663561.jpg",
      publishedAt: "2022-03-07T13:46:51Z",
      content:
        "Manchester City boss Pep Guardiola has snubbed Jose Mourinho's Real Madrid side as he claims Liverpool are the 'toughest opponent' he has ever faced in his managerial career.\r\nCity moved six points c… [+1991 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Agence France-Presse",
      title:
        "Daniil Medvedev Stays ATP No.1 But No Longer Flies A Flag - NDTV Sports",
      description:
        "Daniil Medvedev stayed on top, but the country column next to his name contained a white rectangle, after the ATP responded to the invasion of Ukraine, by deciding last week to allow Russian and Belarusian players to continue to compete, but not under their n…",
      url: "https://sports.ndtv.com/tennis/daniil-medvedev-stays-atp-no-1-but-no-longer-flies-a-flag-2808776",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/kehb5ht_daniil-medvedev-afp_625x300_07_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-03-07T13:28:25Z",
      content:
        "While the ATP rankings barely moved on Monday following a weekend when the Davis Cup replaced tournaments, there was one visible change, as the Russian flag vanished from the list. Daniil Medvedev st… [+2210 chars]",
    },
    {
      source: { id: "marca", name: "Marca" },
      author: "L. LARA, Adapted by SAM",
      title:
        "Two main candidates for Haaland's signature: Real Madrid and Manchester City - Marca English",
      description:
        "Erling Haaland&apos;s contract with Borussia Dortmund expires on June 30, 2026, but he looks set to leave the club this summer. \nThe club hierarchy at Borussia Dortmund believe tha",
      url: "https://www.marca.com/en/football/real-madrid/2022/03/07/6225f8c3ca4741de3d8b456d.html",
      urlToImage:
        "https://phantom-marca.unidadeditorial.es/96a3ac9fed1bd46755700a5f1bf8cafc/resize/1200/f/jpg/assets/multimedia/imagenes/2022/03/07/16466488873490.jpg",
      publishedAt: "2022-03-07T12:56:41Z",
      content:
        "Erling Haaland's contract with Borussia Dortmund expires on June 30, 2026, but he looks set to leave the club this summer. \r\nThe club hierarchy at Borussia Dortmund believe that their chances of keep… [+1139 chars]",
    },
    {
      source: { id: null, name: "Crictracker.com" },
      author: "",
      title:
        "IPL Schedule 2022: Date, Time, Fixtures, Teams, Venue details announced, IPL Schedule PDF Download - CricTracker",
      description:
        "IPL Schedule 2022 PDF - Check out the latest IPL 2022 fixtures with Match Time Table, Date, Venue Details along with IPL schedule PDF download & more on CricTracker",
      url: "https://www.crictracker.com/ipl-schedule-2022-date-time-fixtures-teams-venue-details-announced-ipl-schedule-pdf-download/",
      urlToImage:
        "https://www.crictracker.com/wp-content/uploads/2022/03/ipl-trophy.jpg",
      publishedAt: "2022-03-07T12:26:00Z",
      content:
        "IPL Trophy. (Photo Source: IPL/BCCI)\r\nThe 15th edition of the Indian Premier League (IPL) is set to commence on March 26. As many as 10 teams will battle it out for the ultimate glory over the course… [+10024 chars]",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: "More by Vicky Singh",
      title:
        "CCL vs SCK Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Dream11 Trinidad T10 Blast - Cricket Addictor",
      description:
        "CCL vs SCK Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Dream11 Trinidad T10 Blast",
      url: "https://cricketaddictor.com/fantasy-cricket/ccl-vs-sck-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-trinidad-t10-blast/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/02/Trinidad-T10-Blast-Dream11-Prediction-Fantasy-Cricket-Tips-Dream11-Team.jpg",
      publishedAt: "2022-03-07T12:19:42Z",
      content:
        "CCL vs SCK Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Dream11 Trinidad T10 Blast match between Cocrico Cavaliers and Soca Kings. They will play… [+4536 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Vladimir Putin Loses All His Positions At International Judo Federation - NDTV",
      description:
        "Billionaire businessman Arkady Rotenberg has also been removed from all the positions, the International Judo Federation said in a statement.",
      url: "https://www.ndtv.com/world-news/vladimir-putin-loses-all-his-positions-at-international-judo-federation-2808593",
      urlToImage:
        "https://c.ndtvimg.com/2022-02/5pb57g7g_vladimir-putin-judo-afp_625x300_27_February_22.jpg",
      publishedAt: "2022-03-07T12:17:42Z",
      content:
        "The International Judo Federation (IJF) announced on Sunday that Russian President Vladimir Putin and businessman Arkady Rotenberg have been removed from all their positions. On February 27, Mr Putin… [+2052 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "A 'MASSIVE' win for AC Milan vs. Napoli! Who are the Serie A title favourites? | ESPN FC - ESPN UK",
      description:
        "Subscribe to ESPN UK: http://bit.ly/1oGUzVAFollow ESPN UK across multiple platforms:https://en-gb.facebook.com/ESPNUKhttps://twitter.com/ESPNUKhttps://www.es...",
      url: "https://www.youtube.com/watch?v=y_JMEB0rJp0",
      urlToImage: "https://i.ytimg.com/vi/y_JMEB0rJp0/maxresdefault.jpg",
      publishedAt: "2022-03-07T12:00:23Z",
      content: null,
    },
    {
      source: { id: null, name: "Barca Blaugranes" },
      author: "Gill Clark",
      title: "Five talking points from Elche 1-2 Barcelona - Barca Blaugranes",
      description: "Another win for Xavi’s team",
      url: "https://www.barcablaugranes.com/barcelona-la-liga/2022/3/7/22965184/five-talking-points-from-elche-1-2-barcelona",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/jsdz2VcceWo61Z5P6Z1rL4LcY6g=/0x0:2734x1431/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23294600/1238981242.jpg",
      publishedAt: "2022-03-07T12:00:00Z",
      content:
        "Barcelona extend unbeaten run to move third\r\nBarcelonas win over Elche extended the teams unbeaten run in La Liga to 11 games under Xavi and saw the Catalan giants move into third place in the table.… [+5160 chars]",
    },
    {
      source: { id: null, name: "Pain In The Arsenal" },
      author: "Ross Kennerley",
      title:
        "Arsenal’s assist king sets new record vs Watford - Pain In The Arsenal",
      description:
        "When the winning goal crept into the Wolves net with 95 minutes on the clock, Alexandre Lacazette set off on a mazy run in front of the North Bank, celebra...",
      url: "https://paininthearsenal.com/2022/03/07/arsenal-assist-king-new-record-watford/",
      urlToImage:
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1381367060.jpeg",
      publishedAt: "2022-03-07T12:00:00Z",
      content:
        "When the winning goal crept into the Wolves net with 95 minutes on the clock, Alexandre Lacazette set off on a mazy run in front of the North Bank, celebrating wildly with the Arsenal fans and his te… [+2842 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "'You cheered when DRS showed I was out': Usman Khawaja sends cheeky message to Pakistan fans - WATCH - Hindustan Times",
      description:
        "PAK vs AUS 1st Test: He fell just three short of his hundred as Khawaja, 35, botched up a reverse sweep to be caught at the forward short-leg. | Cricket",
      url: "https://www.hindustantimes.com/cricket/pak-vs-aus-usman-khawaja-sends-cheeky-message-to-pakistan-fans-you-cheered-when-drs-showed-i-was-out-didn-t-like-it-101646653464745.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/Usman_Khawaja_1646653720447_1646653729550.jpg",
      publishedAt: "2022-03-07T11:52:01Z",
      content:
        "Usman Khawaja recently enjoyed a stellar return to the Australian team after he notched up a century in each innings of the Ashes Test in Sydney. The Pakistan-born opener continued his rich vein of f… [+2101 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Firdose Moonda",
      title:
        "'Player safety is the most important thing' - Nigar Sultana upset at having to play in wet Dunedin - ESPNcricinfo",
      description:
        'The Bangladesh captain calls the conditions, especially when they were fielding, "not good" or "playable"',
      url: "https://www.espncricinfo.com/story/nz-vs-ban-wwc-2022-player-safety-is-the-most-important-thing-nigar-sultana-upset-at-having-to-play-in-wet-dunedin-1304216",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335400/335477.6.jpg",
      publishedAt: "2022-03-07T11:18:44Z",
      content:
        'NewsThe Bangladesh captain calls the conditions, especially when they were fielding, "not good" or "playable"',
    },
    {
      source: { id: null, name: "Zoom" },
      author: "Times Now Digital",
      title:
        "Gavaskar rates Rohit's captaincy as Jadeja-starrer India thrash Sri Lanka in Kohli's 100th Test at Mohali - Times Now",
      description:
        "Batting legend Sunil Gavaskar has once again rated Rohit Sharma's captaincy after Team India registered a comfortable win over Sri Lanka in the 1st Test match at Mohali on Sunday.  Captain Rohit also scripted a unique record on his Test captaincy debut at Moh…",
      url: "https://www.timesnownews.com/sports/cricket/sunil-gavaskar-rates-rohit-sharmas-captaincy-as-ravindra-jadeja-starrer-india-thrash-sri-lanka-in-virat-kohlis-100th-test-at-mohali-article-90050484",
      urlToImage:
        "https://static.tnn.in/thumb/msid-90050484,imgsize-100,width-1280,height-720,resizemode-75/90050484.jpg",
      publishedAt: "2022-03-07T09:48:00Z",
      content:
        "36:24\r\nWho Will Win UP, Goa, Manipur, Uttarakhand And Goa? | Election News | The NewsHour Agenda",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: null,
      title:
        "IPL 2022: Sunrisers Hyderabad Predicted Playing XI For The First Match Of The Tournament - Cricket Addictor",
      description:
        "IPL 2022: Sunrisers Hyderabad Predicted Playing XI For The First Match Of The Tournament",
      url: "https://cricketaddictor.com/indian-premier-league-ipl-2022/ipl-2022-sunrisers-hyderabad-predicted-playing-xi-for-the-first-match-of-the-tournament/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2021/07/Sunrisers-Hyderabad-1.jpg",
      publishedAt: "2022-03-07T09:29:31Z",
      content:
        "One of the most consistent teams in IPL, Sunrisers Hyderabad had a season to forget last year. For the first time in their IPL history, SRH succumbed to the bottom of the points table. In 14 matches,… [+1379 chars]",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "BCCI extends jersey contract with BYJU's by one year | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "BYJU had come on board as the jersey sponsors in 2019 after having replaced Chinese handset company Oppo. The deal had kicked in from September 2019.",
      url: "https://www.cricbuzz.com/cricket-news/121360/bcci-extends-jersey-sponsorship-with-byjus-by-one-year",
      urlToImage:
        "http://www.cricbuzz.com/a/img/v1/600x400/i1/c212095/the-byju-deal-was-to-end-othe.jpg",
      publishedAt: "2022-03-07T09:12:29Z",
      content:
        'The BYJU deal was to end, otherwise, after the on-going series against Sri Lanka. © Getty\r\n"The Board of Control for Cricket in India (BCCI) and BYJU have decided to extend the agreement over jersey … [+2420 chars]',
    },
    {
      source: { id: null, name: "Pain In The Arsenal" },
      author: "Ross Kennerley",
      title:
        "Have Arsenal seen Manchester United’s demise? - Pain In The Arsenal",
      description:
        "When the full-time whistle blew at Vicarage Road the overwhelming feeling of relief was overtaken with a dash of realisation: Arsenal are in the Premier Le...",
      url: "https://paininthearsenal.com/2022/03/07/arsenal-seen-manchester-united-demise/",
      urlToImage:
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fpaininthearsenal.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1381513969.jpeg",
      publishedAt: "2022-03-07T09:10:00Z",
      content:
        "When the full-time whistle blew at Vicarage Road the overwhelming feeling of relief was overtaken with a dash of realisation: Arsenal are in the Premier League top four.\r\nSome absorbing attacking foo… [+3075 chars]",
    },
    {
      source: { id: null, name: "WION" },
      author: "WION Web Team",
      title:
        "Russian gymnast sports `Z` symbol on shirt while sharing podium with Ukrainian winner, sparks outrage - WION",
      description:
        "Russian gymnast Ivan Kuliak sparked massive outrage on Sunday (March 06) after he was seen sporting an insignia showcasing support to his country in their ongoing invasion of Ukraine. Kuliak had a Z symbol engraved on his shirt as he stood on the podium to co…",
      url: "https://www.wionews.com/sports/russian-gymnast-sports-z-symbol-on-shirt-while-sharing-podium-with-ukrainian-winner-sparks-outrage-459807",
      urlToImage:
        "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/03/07/245887-russian-gymnast-z-symbol.png",
      publishedAt: "2022-03-07T08:45:00Z",
      content:
        "Russian gymnast Ivan Kuliak sparked massive outrage on Sunday (March 06) after he was seen sporting an insignia showcasing support to his country in their ongoing invasion of Ukraine. Kuliak had a 'Z… [+2996 chars]",
    },
    {
      source: { id: null, name: "SB Nation" },
      author: "David Pasztor",
      title:
        "Marcos Alonso suffering from ‘quite a lot of Covid symptoms’ - We Ain't Got No History",
      description: "Get well soon, Marcos!",
      url: "https://weaintgotnohistory.sbnation.com/2022/3/7/22965167/marcos-alonso-suffering-from-quite-a-lot-of-covid-symptoms",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/0nZDrREE0ykRpQTR2JMNzEkDwjQ=/0x323:5472x3188/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23294574/1372793148.jpg",
      publishedAt: "2022-03-07T08:09:28Z",
      content:
        "Marcos Alonso was a surprise absentee over the weekend as Chelsea took on Burnley at Turf Moor, not even named in the matchday squad let alone in the starting lineup. Rumors at the time spoke of a po… [+970 chars]",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "India release Kuldeep Yadav after Axar Patel joins Test squad vs Sri Lanka | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "The team management was of the opinion that there wasn't a need of three left-arm spinner in the squad for the second Test against Sri Lanka",
      url: "https://www.cricbuzz.com/cricket-news/121359/india-release-kuldeep-yadav-after-axar-patel-joins-test-squad-vs-sri-lanka-cricbuzzcom",
      urlToImage:
        "//m.cricbuzz.com/a/img/v1/600x400/i1/c227964/kuldeep-yadav-wasnt-a-part-of-the-xi-in-the-first-test-against-sri-lanka.jpg",
      publishedAt: "2022-03-07T08:07:53Z",
      content:
        "The Indian team management has released Kuldeep Yadav from the Test squad. The decision follows Axar Patel attaining full fitness, as reported by Cricbuzz. The left-arm spinner has already joined the… [+1938 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "CSK skipper MS Dhoni as `Papaji` thrills fans in new IPL 2022 promo, Watch - Zee News",
      description: "“The Hi we have been waiting for! Day I”.",
      url: "https://zeenews.india.com/cricket/csk-skipper-ms-dhoni-as-papaji-thrill-fans-in-new-ipl-2022-promo-watch-2442958.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/07/1020587-dhonipapaji.jpg",
      publishedAt: "2022-03-07T08:07:36Z",
      content:
        "Chennai Super Kings skipper MS Dhoni has been keeping busy in the off season ahead of the Indian Premier League (IPL) 2022. After donning the role of a bus driver much like superstar Rajnikanth, Thal… [+1842 chars]",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: null,
      title:
        "Ranji Trophy 2022: Seven Teams Including Bengal, Karnataka, Uttar Pradesh, Mumbai Qualify For Quarters Directly - Cricket Addictor",
      description:
        "Ranji Trophy 2022: Mumbai, Bengal, Uttar Pradesh, 4 Others Directly Qualify for Quarter-Finals",
      url: "https://cricketaddictor.com/cricket-news/ranji-trophy-2022-seven-teams-including-bengal-karnataka-uttar-pradesh-mumbai-qualify-for-quarters-directly/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/01/953992-ranji-trophy-bcci.jpg",
      publishedAt: "2022-03-07T07:31:31Z",
      content:
        "Seven Elite group table-toppers have qualified for the quarter-finals in Ranji Trophy 2022. Mumbai, Karnataka, Punjab, Madhya Pradesh, Uttar Pradesh, Bengal, and Uttarakhand are the 7 teams who have … [+2582 chars]",
    },
    {
      source: { id: null, name: "RaceFans" },
      author: "https://www.facebook.com/racefansdotnet/",
      title:
        "Ferrari's extra wind tunnel runs only worth a tenth of a second per lap - Binotto · RaceFans - RaceFans",
      description:
        "Ferrari team principal Mattia Binotto says the extra development work they were able to do on their 2022 car compared to Mercedes was only worth up to a tenth of a second per lap.",
      url: "https://www.racefans.net/2022/03/07/ferraris-extra-wind-tunnel-runs-only-worth-a-tenth-of-a-second-per-lap-binotto/",
      urlToImage:
        "https://www.racefans.net/wp-content/uploads/2022/02/racefansdotnet-21-02-23-16-04-36-1.jpg",
      publishedAt: "2022-03-07T07:20:37Z",
      content:
        "Ferrari team principal Mattia Binotto says the extra development work they were able to do on their 2022 car compared to Mercedes was only worth up to a tenth of a second per lap.\r\nFormula 1 teams’ n… [+2447 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Aakash Arya",
      title:
        '"Hallmark Of This Test For Him Personally": Dinesh Karthik Lavishes Praise On Rishabh Pant - NDTV Sports',
      description:
        "India vs Sri Lanka, 1st Test: Dinesh Karthik spoke highly of Rishabh Pant and lauded his performances with the bat and also behind the stumps in India's win over Sri Lanka in Mohali.",
      url: "https://sports.ndtv.com/india-vs-sri-lanka-2022/india-vs-sri-lanka-1st-test-dinesh-karthik-lavishes-praise-on-rishabh-pant-2807619",
      urlToImage:
        "https://c.ndtvimg.com/2021-12/l9pgo70k_rishabh-pant_625x300_23_December_21.jpg",
      publishedAt: "2022-03-07T05:01:19Z",
      content:
        "India registered a comprehensive win over Sri Lanka in the first Test in Mohali, thanks to some all-round performances from players like Ravindra Jadeja and Rishabh Pant. While Jadeja was the star of… [+2192 chars]",
    },
    {
      source: { id: null, name: "Saca.com.au" },
      author: "",
      title:
        "Redbacks name squad for final One-Day Cup clash - South Australian Cricket Association",
      description:
        "The West End Redbacks have named a 14-player squad ahead of Tuesday’s Marsh One-Day Cup match against New South Wales at North Sydney Oval.",
      url: "http://www.saca.com.au/news/squad-one-day-cup/2022-03-07",
      urlToImage:
        "http://www.saca.com.au/-/media/cricketsacomau/ODC%20Squad%20v%20NSW%2022.ashx",
      publishedAt: "2022-03-07T03:57:22Z",
      content:
        "The West End Redbacks have named a 14-player squad ahead of Tuesdays Marsh One-Day Cup match against New South Wales at North Sydney Oval. The match will be the last One-Day Cup clash for South Austr… [+1164 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        'India vs Sri Lanka: Ravichandran Ashwin Reveals How "Magnanimous" Ravindra Jadeja Sacrificed Overs F.. - NDTV Sports',
      description:
        "India vs Sri Lanka: Ravichandran Ashwin said that skipper Rohit Sharma wanted to give a few overs to Jayant Yadav and it was Ravindra Jadeja who first gave up his overs.",
      url: "https://sports.ndtv.com/india-vs-sri-lanka-2022/ind-vs-sl-ravichandran-ashwin-reveals-how-magnanimous-ravindra-jadeja-sacrificed-overs-for-jayant-yadav-2807519",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/2p3s62gg_ravindra-jadeja-ravichandran-ashwin-bcci_625x300_07_March_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-03-07T03:42:21Z",
      content:
        "Ravichandran Ashwin on Sunday went past Kapil Dev's tally of 434 wickets to become the second highest Indian wicket-taker of all-time in Test cricket. Ashwin achieved the feat by dismissing Charith A… [+1693 chars]",
    },
    {
      source: { id: null, name: "Chess.com" },
      author: "Carsten Hansen",
      title:
        "FIDE Grand Prix Belgrade R5: Rapport Wins To Take Lead In Group C - Chess.com",
      description:
        "Drama on Sunday was taken care of courtesy of Group C, where both games found victors, most importantly by GM Richard Rapport, who is leading by a full point ahead of the last round. In Group A, two draws mean that GM Dmitry Andreikin and GM Sam Shankland mai…",
      url: "https://www.chess.com/news/view/2002-fide-grand-prix-belgrade-round-5",
      urlToImage:
        "https://images.chesscomfiles.com/uploads/v1/news/1049299.1e1d64c4.5000x5000o.97889d390deb.jpeg",
      publishedAt: "2022-03-07T00:15:00Z",
      content:
        "Drama on Sunday was taken care of courtesy of Group C, where both games found victors, most importantly by GM Richard Rapport, who is leading by a full point ahead of the last round. In Group A, two … [+5733 chars]",
    },
    {
      source: { id: null, name: "Sporting News" },
      author: null,
      title:
        "Transfer news and rumours LIVE: Watkins offers cut-price option for Arsenal - Goal.com",
      description:
        "<p>Get the latest soccer news, rumors, video highlights, scores, schedules, standings, photos, player information and more from Sporting News Canada</p>\r\n full_html",
      url: "https://www.sportingnews.com/ca/soccer",
      urlToImage: "https://www.sportingnews.com/themes/custom/tsn/logo.svg",
      publishedAt: "2022-03-07T00:02:45Z",
      content: null,
    },
    {
      source: { id: null, name: "Managing Madrid" },
      author: "Managing Madrid",
      title:
        "Discussion on Eduardo Camavinga's performance vs Real Sociedad - Managing Madrid",
      description:
        "The Frenchman came through vs La Real while being deployed in his best position",
      url: "https://www.managingmadrid.com/2022/3/7/22964585/discussion-on-eduardo-camavingas-performance-vs-real-sociedad",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/TYbFGC4dTRqTotXgsIosy32stMo=/0x0:3717x1946/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23293521/1381398418.jpg",
      publishedAt: "2022-03-07T00:00:39Z",
      content:
        "Eduardo Camavinga was a huge talking point last night all the way from when Carlo Ancelotti announced the starting lineups and all the way through to the end of last nights Managing Madrid post-game … [+818 chars]",
    },
    {
      source: { id: null, name: "beIN SPORTS" },
      author: null,
      title: "One-goal win for Monaco at Marseille - beIN SPORTS",
      description:
        "Marseille and Monaco needed to recover, after some tough weeks fot both teams.Gelson Martins gave Monaco a 1-0 Ligue 1 win over Marseille at a packed Velodrome",
      url: "https://www.beinsports.com/us/ligue-1/video/one-goal-win-for-monaco-at-marseille/1843274",
      urlToImage:
        "https://images.beinsports.com/cIYS5sG-fP8h7tDqNDHpIEE4Yts=/670x424/smart/filters:watermark(https://assets.beinsports.com/picto-play.png,285,162,0)/4180951-monaco_reuters.jpeg",
      publishedAt: "2022-03-06T21:53:14Z",
      content:
        "Marseille and Monaco needed to recover, after some tough weeks fot both teams.\r\nGelson Martins gave Monaco a 1-0 Ligue 1 win over Marseille at a packed Velodrome stadium. The only goal of the match w… [+293 chars]",
    },
    {
      source: { id: null, name: "ESPN India" },
      author: "Mark Ogden",
      title:
        "Man City are everything Man United should aspire to be, as latest derby drubbing further proves - ESPN India",
      description:
        "How the mighty United have fallen: Man City remain in control of Premier League title race by showing they are everything Man United are not.",
      url: "https://www.espn.in/football/english-premier-league/story/4610306/man-city-are-everything-man-united-should-aspire-to-beas-latest-derby-drubbing-further-proves",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0306%2Fr982869_1296x729_16%2D9.jpg",
      publishedAt: "2022-03-06T20:14:30Z",
      content:
        "MANCHESTER, England -- David Moyes was once ridiculed for saying that Manchester United should aspire to be like Manchester City, but the former United manager was right when he said it in 2014 and i… [+5106 chars]",
    },
    {
      source: { id: null, name: "Dailycannon.com" },
      author: null,
      title: "Arteta: When that happens you’re going to suffer - Daily Cannon",
      description:
        "Arsenal beat Watford on Sunday in a game that was more nervy towards the ned than it needed to be.",
      url: "https://dailycannon.com/2022/03/arteta-watford-arsenal/",
      urlToImage:
        "https://dailycannon.com/static/uploads/2022/03/watford-v-arsenal-premier-league-1-scaled-e1646583349445.jpg",
      publishedAt: "2022-03-06T16:47:03Z",
      content:
        "Arsenal’s Spanish manager Mikel Arteta applauds at the end of the English Premier League football match between Watford and Arsenal at Vicarage Road Stadium in Watford, north-west of London on March … [+2820 chars]",
    },
    {
      source: { id: null, name: "Crictracker.com" },
      author: "",
      title:
        "IPL 2022: Predicting first-choice overseas players of Gujarat Titans - CricTracker",
      description:
        "Here are the four first-choice overseas players that Gujarat Titans are most likely to play in the Indian Premier League (IPL) 2022",
      url: "https://www.crictracker.com/ipl-2022-predicting-first-choice-overseas-players-of-gujarat-titans/",
      urlToImage:
        "https://www.crictracker.com/wp-content/uploads/2021/04/Rashid-Khan-1.jpg",
      publishedAt: "2022-03-06T15:42:00Z",
      content:
        "Rashid Khan. (Photo Source: IPL/BCCI)\r\nThe CVC capitals-owned Gujarat Titans looked pretty good at the IPL 2022 mega auction. They bought a total of 20 players during the event. Mohammed Shami, Jason… [+1910 chars]",
    },
    {
      source: { id: null, name: "Crictracker.com" },
      author: "",
      title: "IPL 2022: SWOT Analysis of Punjab Kings (PBKS) - CricTracker",
      description:
        "Punjab Kings have made some notable additions to their squad heading into the IPL 2022 that gets underway on March 26",
      url: "https://www.crictracker.com/ipl-2022-swot-analysis-of-punjab-kings-pbks/",
      urlToImage:
        "https://www.crictracker.com/wp-content/uploads/2021/09/Punjab-Kings.jpg",
      publishedAt: "2022-03-06T15:13:00Z",
      content:
        "Punjab Kings. (Photo Source: IPL/BCCI)\r\nPunjab Kings were one of those franchises who made some really interesting buys at the IPL 2022mega auction earlier this month.  Having made just two retention… [+2156 chars]",
    },
    {
      source: { id: null, name: "Cricketaddictor.com" },
      author: "More by Priyam Singh",
      title:
        "Chennai Pitch Curator Deliberately Aided India's Loss vs England In 2022, Shastri & Arun Were Livid - Reports - Cricket Addictor",
      description: ".",
      url: "https://cricketaddictor.com/cricket-news/chennai-pitch-curator-deliberately-aided-indias-loss-against-england-last-year-ravi-shastri-and-bharat-arun-were-livid-reports/",
      urlToImage:
        "https://cricketaddictor.com/wp-content/uploads/2022/03/India-vs-England-1st-Chennai-Test-2021-Curator-Ravi-Shastri-Bharat-Arun.png",
      publishedAt: "2022-03-06T14:17:20Z",
      content:
        "Some shocking media reports have emerged which state that the Chennai pitch curator for the first Test between India and England in 2021 deliberately went against Head Coach Ravi Shastri and bowling … [+3353 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: "Sruthi Ravindranath",
      title:
        "Sarfaraz's century puts Mumbai in quarter-final; Tamil Nadu knocked out - ESPNcricinfo",
      description:
        "The other teams who have qualified to the quarter-finals from their respective Elite groups are Bengal, Karnataka, Madhya Pradesh, Uttarakhand, Punjab and Uttar Pradesh",
      url: "https://www.espncricinfo.com/story/ranji-trophy-2021-22-sarfaraz-khan-century-puts-mumbai-in-quarter-finals-tamil-nadu-knocked-out-1303996",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/300400/300489.6.jpg",
      publishedAt: "2022-03-06T12:08:49Z",
      content:
        "NewsThe other teams who have qualified to the quarter-finals from their respective Elite groups are Bengal, Karnataka, Madhya Pradesh, Uttarakhand, Punjab and Uttar Pradesh",
    },
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "Pooja Vastrakar - the game changer of Shahdol ICC Womens World Cup 2022 India Cricket | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "Hailing from one of India's poorest regions, Pooja Vastrakar's career rise has been an inspiration for many parents to let their daughters step out and play in Shahdol",
      url: "https://www.cricbuzz.com/cricket-news/121349/pooja-vastrakar-the-gamechanger-of-shahdol",
      urlToImage:
        "http://www.cricbuzz.com/a/img/v1/600x400/i1/c227902/pooja-vastrakars-59-ball-67-b.jpg",
      publishedAt: "2022-03-06T10:53:40Z",
      content:
        "Pooja Vastrakar's 59-ball 67 bailed India out of a precarious situation ©AFP \r\n\"The focus was to get the team towards 200, planned my batting with that in mind. I love batting under pressure. In dome… [+7751 chars]",
    },
  ];

  return (
    <div className={classes.container}>
      {articles.map((item) => {
        return (
          <span className={classes.card} key={Math.random()}>
            <h3>{item.title}</h3>
            {item.urlToImage ? (
              <img src={item.urlToImage} alt="Failed to load images" />
            ) : (
              <img
                src="https://images.hindustantimes.com/img/2022/03/08/1600x900/kohli-india-new-getty_1646725122300_1646725129311.jpg"
                alt="..."
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

export default Sports;
