import React from "react";
import classes from "./Card.module.css";

const Science = () => {
  const articles = [
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title: "Genomic Editing of Microbes - News-Medical.Net",
      description:
        "Microbial genome editing is a powerful way to tailor-make several important products for industries including medicine, food, and industrial chemicals.",
      url: "https://www.news-medical.net/life-sciences/Genomic-Editing-of-Microbes.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22207_16467346006399488.jpg",
      publishedAt: "2022-03-08T10:14:00Z",
      content:
        "The advent of genomic editing technologies has revolutionized the fields of microbiology and biotechnology. This article will provide an overview of this subject.\r\nGenome. Image Credit: MIKHAIL GRACH… [+5614 chars]",
    },
    {
      source: { id: null, name: "Tech Explorist" },
      author: "https://www.facebook.com/TechExplorist/",
      title:
        "Astronomers discover the largest molecule yet in a planet-forming disc - Tech Explorist",
      description:
        "Using the Atacama Large Millimeter/submillimeter Array (ALMA) in Chile, researchers at Leiden Observatory in the Netherlands have for the first time",
      url: "https://www.techexplorist.com/astronomers-discover-largest-molecule-yet-planet-forming-disc/45147/",
      urlToImage:
        "https://cdn.techexplorist.com/wp-content/uploads/2022/03/Dimethyl-ether-IRS-48-star-scaled.jpg",
      publishedAt: "2022-03-08T09:33:22Z",
      content:
        "Using the Atacama Large Millimeter/submillimeter Array (ALMA) in Chile, researchers at Leiden Observatory in the Netherlands have for the first time detected dimethyl ether in a planet-forming disc. … [+5368 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Bharat Sharma",
      title:
        "US Wants To Send A Satellite To Patrol The Space Around Moon - Indiatimes.com",
      description:
        "Let the space games begin! As countries take their Earthly race to outer space, Moon is going to take some heat in the coming decades. It appears that the United States wants to expand its military capabilities to monitor the space beyond between Earth and Mo…",
      url: "https://www.indiatimes.com/technology/science-and-future/us-satellite-to-patrol-moon-563914.html",
      urlToImage:
        "https://im.indiatimes.in/content/2022/Mar/FBImage11-copy_6227156dc6715.jpg",
      publishedAt: "2022-03-08T08:39:21Z",
      content:
        "Let the space games begin! As countries take their Earthly race to outer space, Moon is going to take some heat in the coming decades. It appears that the United States wants to expand its military c… [+1864 chars]",
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
      source: { id: null, name: "Thehansindia.com" },
      author: "Susmita Modak",
      title:
        "Memory Formation Have Been Discovered By Neuroscientists - The Hans India",
      description:
        "Two types of human brain cells that physically aid memory formation have been uncovered by...",
      url: "https://www.thehansindia.com/offbeat/memory-formation-have-been-discovered-by-neuroscientists-732434",
      urlToImage:
        "https://assets.thehansindia.com/h-upload/2022/03/08/1280427-brain-cells.jpg",
      publishedAt: "2022-03-08T07:15:50Z",
      content:
        "Two types of human brain cells that physically aid memory formation have been uncovered by researchers. These cells are important for segmenting continuous conscious experience into discrete segments… [+3339 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "NASA Begins Assembling Europa Clipper, SUV-Sized Mission To Find life On Jupiter's Icy Moon - NDTV",
      description:
        "NASA's Europa Clipper mission will try to find if Jupiter's moon Europa has conditions to support life.",
      url: "https://www.ndtv.com/world-news/nasa-begins-assembling-europa-clipper-suv-sized-mission-to-find-life-on-jupiters-icy-moon-2810021",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/e1t2lir8_europa-clipper-mission-650_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T07:02:16Z",
      content:
        "The Europa Clipper mission will be launched in October 2024, according to NASA.\r\nAmerican space agency NASA has started building the Europa Clipper spacecraft that will launch in 2024. The mission's … [+2856 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "China's Long March rocket stage collides into the far side of the moon - ThePrint",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVKWyLQ8g_U4",
      urlToImage: null,
      publishedAt: "2022-03-08T06:00:18Z",
      content: null,
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
      source: { id: null, name: "ScienceAlert" },
      author: "Michelle Starr",
      title:
        "'Heartbeat' of Black Holes Solves Decades-Old Mystery of Plasma Jets - ScienceAlert",
      description:
        "Fluctuating light from a black hole, observed over 15 years, has revealed more about the way these enigmatic objects feed.",
      url: "https://www.sciencealert.com/the-heartbeat-of-a-black-hole-has-told-us-more-about-how-they-launch-jets",
      urlToImage:
        "https://www.sciencealert.com/images/2022-03/processed/centaurus-a-jets_1024.jpg",
      publishedAt: "2022-03-08T04:32:15Z",
      content:
        "Fluctuating light from a black hole, observed over 15 years, has revealed more about the way these enigmatic objects feed.\r\nFirst, a structure called a corona forms around the outside of the event ho… [+4305 chars]",
    },
    {
      source: { id: null, name: "Science Daily" },
      author: null,
      title:
        "Increasing frequency of El Niño events expected by 2040 - Science Daily",
      description:
        "Global weather fluctuations called El Niño events are likely to become more frequent by 2040, a new study shows.",
      url: "https://www.sciencedaily.com/releases/2022/03/220307113147.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2022-03-08T01:42:58Z",
      content:
        "Global weather fluctuations called El Niño events are likely to become more frequent by 2040, a new study shows.El Niño -- the unusual warming of surface waters in the eastern tropical Pacific Ocean … [+1925 chars]",
    },
    {
      source: { id: null, name: "Saanich News" },
      author: "Bailey Moreton",
      title:
        "Humble West Shore amateur astronomer not one to bask in glow of asteroid naming – Saanich News - Saanich News",
      description:
        "<p>Jaskarn Singh ‘Sid’ Sidhu a dedicated volunteer with Victoria branch of astronomical society </p>",
      url: "https://www.saanichnews.com/news/humble-west-shore-amateur-astronomer-not-one-to-bask-in-glow-of-asteroid-naming/",
      urlToImage:
        "https://www.saanichnews.com/wp-content/uploads/2022/03/28384382_web1_220307-GNG-AstronomySid-highlands_4-1024x683.jpg",
      publishedAt: "2022-03-08T01:35:00Z",
      content:
        "Longtime amateur astronomer Jaskarn Singh “Sid” Sidhu now shares his name with an asteroid, after his nomination by fellow astronomers was approved by the International Astronomical Union (IAU).\r\nSid… [+2844 chars]",
    },
    {
      source: { id: null, name: "Science Daily" },
      author: null,
      title: "CO2 could be stored below ocean floor - Science Daily",
      description:
        "Climate change is one of the most pressing challenges facing humanity. To combat its potentially catastrophic effects, scientists are searching for new technologies that could help the world reach carbon neutrality. One potential solution that is drawing grow…",
      url: "https://www.sciencedaily.com/releases/2022/03/220307113139.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2022-03-08T01:17:49Z",
      content:
        "Climate change is one of the most pressing challenges facing humanity. To combat its potentially catastrophic effects, scientists are searching for new technologies that could help the world reach ca… [+4580 chars]",
    },
    {
      source: { id: null, name: "Live Science" },
      author: "Cameron Duke",
      title:
        "Spiders Caught Hunting in Giant Synchronized Swarms, And Now We Know How - ScienceAlert",
      description: "Web vibrations help them coordinate when to strike.",
      url: "https://www.livescience.com/social-spiders-hunt-in-packs",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/CguiCWkxvnXxjjSBfx4G74-1200-80.jpg",
      publishedAt: "2022-03-08T00:43:50Z",
      content:
        "Pack hunting spiders exist in places other than your nightmares. While most spiders enjoy solitary lives, 20 of the roughly 50,000 known spider species live in colonies. One species, Anelosimus eximi… [+3229 chars]",
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
      source: { id: null, name: "AZ Big Media" },
      author: "Blufish",
      title:
        "Banner, UA, SpaceX partner for pioneering fellowship in aerospace surgery - AZ Big Media",
      description:
        "Banner – University Medical Center Phoenix will host the first-ever Aerospace Surgery Fellowship beginning this July.",
      url: "https://azbigmedia.com/business/banner-ua-spacex-partner-for-pioneering-fellowship-in-aerospace-surgery/",
      urlToImage:
        "https://azbigmedia.com/wp-content/uploads/2018/06/aerospace-conference.jpg",
      publishedAt: "2022-03-07T23:52:38Z",
      content:
        "Banner University Medical Center Phoenix will host the first-ever Aerospace Surgery Fellowship beginning this July. In partnership with the University of Arizona College of Medicine Phoenix and Space… [+6190 chars]",
    },
    {
      source: { id: null, name: "Space Ref" },
      author: null,
      title:
        "NASA Space Station Update 7 March, 2022 - Space Biology and Combustion Investigations - Space Ref",
      description: null,
      url: "http://spaceref.com/international-space-station/nasa-space-station-update-7-march-2022---space-biology-and-combustion-investigations.html",
      urlToImage: null,
      publishedAt: "2022-03-07T23:40:07Z",
      content:
        "An array of space biology and combustion investigations topped the microgravity research program aboard the International Space Station on Monday.\r\nLife support work and cargo transfers also kept the… [+1996 chars]",
    },
    {
      source: { id: null, name: "Space.com" },
      author: "Elizabeth Howell",
      title:
        "NASA gearing up for rollout of Artemis 1 mission next week - Space.com",
      description:
        "The huge SLS rocket and its Orion capsule is scheduled to roll out to the launch pon March 17.",
      url: "https://www.space.com/nasa-gearing-up-artemis-1-rollout",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/bjxqz3H22x9jZUfcz4zS5k-1200-80.png",
      publishedAt: "2022-03-07T23:16:47Z",
      content:
        'Teams are starting to retract the "kitchen drawer" platforms surrounding the first rocket that will launch a NASA Artemis mission toward the moon.\r\nRetracting the platforms surrounding the huge Space… [+2468 chars]',
    },
    {
      source: { id: null, name: "Heraldandnews.com" },
      author: "Kurt Liedke",
      title:
        "Klamath Community College trucking instructor credits healthy changes for survival - Herald and News",
      description:
        "Dean Hankins, a career truck driver for three decades and certified drivers license (CDL) instructor with Aisling Truck Academy and Klamath Community College, credits discipline and hard work with a",
      url: "https://www.heraldandnews.com/klamath/klamath-community-college-trucking-instructor-credits-healthy-changes-for-survival/article_a454d371-1c25-5e4e-9493-ecd3bce264fd.html",
      urlToImage:
        "https://bloximages.chicago2.vip.townnews.com/heraldandnews.com/content/tncms/assets/v3/editorial/7/40/74073c59-4925-591e-b5c0-1526c5117cea/6226cc545fdb4.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
      publishedAt: "2022-03-07T22:53:00Z",
      content:
        "Dean Hankins, a career truck driver for three decades and certified drivers license (CDL) instructor with Aisling Truck Academy and Klamath Community College, credits discipline and hard work with a … [+3472 chars]",
    },
    {
      source: { id: null, name: "Science Daily" },
      author: null,
      title:
        "Physicists discover method for emulating nonlinear quantum electrodynamics in a laboratory setting - Science Daily",
      description:
        "On the big screen, in video games and in our imaginations, lightsabers flare and catch when they clash together. That clashing, or interference, happens only in fiction -- and in places with enormous magnetic and electric fields, which happens in nature only …",
      url: "https://www.sciencedaily.com/releases/2022/03/220307162024.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2022-03-07T22:16:27Z",
      content:
        "On the big screen, in video games and in our imaginations, lightsabers flare and catch when they clash together. In reality, as in a laser light show, the beams of light go through each other, creati… [+2424 chars]",
    },
    {
      source: { id: null, name: "Florida Today" },
      author: "John McCarthy, Florida Today",
      title:
        "321 Launch: Space news you may have missed over the past week - Florida Today",
      description:
        "321 Launch: Space news you may have missed over the past week",
      url: "https://www.floridatoday.com/story/tech/science/space/2022/03/07/321-launch-space-news-you-may-have-missed-over-past-week/9415632002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/03/01/PBRE/3ac4e45e-92e6-45ea-b3c0-0df391dbf22e-VomitComet.jpg?auto=webp&crop=2047,1151,x1,y0&format=pjpg&width=1200",
      publishedAt: "2022-03-07T21:45:00Z",
      content:
        "Space is important to us and that’s why we're working to bring you top coverage of the industry and Florida launches. Journalism like this takes time and resources. Please support it with a subscript… [+4049 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Science X staff",
      title:
        "How physics and biology work together to explore the mechanisms of life - Phys.org",
      description:
        "Each of our cells contains about 40 million proteins that together perform all the tasks the cell needs to survive. For a smooth action, the right proteins must be concentrated in specific amounts, at a specific time and at a specific location. However, estab…",
      url: "https://phys.org/news/2022-03-physics-biology-explore-mechanisms-life.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2022/physics-and-biology-ex.jpg",
      publishedAt: "2022-03-07T21:34:40Z",
      content:
        "Each of our cells contains about 40 million proteins that together perform all the tasks the cell needs to survive. For a smooth action, the right proteins must be concentrated in specific amounts, a… [+4962 chars]",
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
      source: { id: null, name: "Phys.Org" },
      author: "Kelsey Simpkins",
      title:
        "Expedition to highest active volcano seeks to unearth clues about life on other worlds - Phys.org",
      description:
        "A harsh sun shines down through a cloudless sky, across a vast and unforgiving landscape. It's covered in gray rock, giant ice sculptures and expansive fields of spiky, yellow and orange bushes. In the distance, intimidating mountain peaks dominate the desola…",
      url: "https://phys.org/news/2022-03-highest-volcano-unearth-clues-life.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2022/expedition-to-highest.jpg",
      publishedAt: "2022-03-07T21:32:35Z",
      content:
        "A harsh sun shines down through a cloudless sky, across a vast and unforgiving landscape. It's covered in gray rock, giant ice sculptures and expansive fields of spiky, yellow and orange bushes. In t… [+7331 chars]",
    },
    {
      source: { id: null, name: "LatestLY" },
      author: "Team Latestly",
      title:
        "Targeting Wednesday, March 9 for a Falcon 9 Launch of 48 Starlink Satellites to Orbit from ... - Latest - LatestLY",
      description:
        "The latest Tweet by SpaceX states, 'Targeting Wednesday, March 9 for a Falcon 9 launch of 48 Starlink satellites to orbit from SLC-40 in Florida → ...'",
      url: "https://www.latestly.com/socially/technology/science/targeting-wednesday-march-9-for-a-falcon-9-launch-of-48-starlink-satellites-to-orbit-from-latest-tweet-by-spacex-3446861.html",
      urlToImage:
        "https://st1.latestly.com/wp-content/uploads/2021/06/SpaceX_KYZfcD7-588x441.jpg",
      publishedAt: "2022-03-07T20:44:46Z",
      content:
        "Targeting Wednesday, March 9 for a Falcon 9 launch of 48 Starlink satellites to orbit from SLC-40 in Florida https://t.co/bJFjLCzWdK— SpaceX (@SpaceX) March 7, 2022\r\n(SocialLY brings you all the late… [+475 chars]",
    },
    {
      source: { id: null, name: "BGR" },
      author: "Joshua Hawkins",
      title:
        "Images of this ‘zombie’ shark will haunt your nightmares forever - BGR",
      description:
        "Footage of an abandoned aquarium has garnered attention thanks to images of a 'zombie' shark left in its display for several years.",
      url: "http://bgr.com/science/images-of-this-zombie-shark-will-haunt-your-nightmares-forever/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/03/zombie-shark-in-tank-.jpeg?quality=82&strip=all",
      publishedAt: "2022-03-07T20:01:00Z",
      content:
        "A YouTuber has shared new footage of a mummified “zombie” shark found in an abandoned aquarium. The shark itself isn’t actually a zombie, of course. However, mold and exposure to air have given the s… [+2149 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "https://www.engadget.com/about/editors/igor-bonifacic",
      title:
        "UAE’s Hope probe tracked a massive dust storm across Mars - Engadget",
      description:
        "The Hope Probe recently spent two weeks tracking a massive dust storm that at one point stretched more than 1,500 miles across the surface of Mars..",
      url: "https://www.engadget.com/uae-hope-probe-mars-dust-storm-191133446.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-03/40a31920-9e47-11ec-b2bf-484310fcd0cd",
      publishedAt: "2022-03-07T19:13:22Z",
      content:
        "When the United Arab Emirates launched the Arab worlds first-ever mission to Mars in the summer of 2020\r\n, its desire was that its Hope probe would help provide scientists with a better understanding… [+1252 chars]",
    },
    {
      source: { id: null, name: "Science Daily" },
      author: null,
      title:
        "Physicists publish on X-ray lasers taking pictures of complex molecules - Science Daily",
      description:
        "Physicists have used the world's largest X-ray laser to take pictures of complex molecules. With ultra-bright X-ray flashes, the scientists were able to take snapshots of gas-phase iodopyridine molecules with atomic resolution. In the process, the molecules a…",
      url: "https://www.sciencedaily.com/releases/2022/03/220307113032.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2022-03-07T19:01:27Z",
      content:
        'Kansas State University physicists Daniel Rolles and Artem Rudenko, and their graduate student, Xiang Li, are part of an international research team that has published the article "X-ray multiphoton-… [+4077 chars]',
    },
    {
      source: { id: null, name: "Nature World News" },
      author: "Rain Jordan",
      title:
        "Experts Warn How Powerful Solar Storms Can Possible Destroy Satellites - Nature World News",
      description:
        "SpaceX deployed 49 satellites as part of Elon Musk's Starlink internet project on Feb. 4, 2022, with most of them burning up in the atmosphere days later. A geomagnetic storm induced by the Sun was the cause of this more than $50 million disaster.",
      url: "https://www.natureworldnews.com/articles/49775/20220307/experts-warn-powerful-solar-storms-possible-destroy-satellites.htm",
      urlToImage:
        "https://1471793142.rsc.cdn77.org/data/images/full/57882/solar-storm.jpg",
      publishedAt: "2022-03-07T18:52:36Z",
      content:
        "SpaceX deployed 49 satellites as part of Elon Musk's Starlink internet project on Feb. 4, 2022, with most of them burning up in the atmosphere days later. A geomagnetic storm induced by the Sun was t… [+6104 chars]",
    },
    {
      source: { id: null, name: "CengNews" },
      author: "Jeff Salle",
      title:
        "Deep in the Earth's Mantle, Ancient Life Traces Have Been Found ⋆ Ceng News - Ceng News",
      description:
        "Hundreds of millions of years ago, ancient life was sucked down into the Earth's mantle, and traces of it have",
      url: "https://www.cengnews.com/news/deep-in-the-earths-mantle-ancient-life-traces-have-been-found-306206.html",
      urlToImage:
        "https://www.cengnews.com/wp-content/uploads/2022/03/1646677503_artists-impression-early-cambrian-explosion.jpg",
      publishedAt: "2022-03-07T18:25:32Z",
      content:
        "Hundreds of millions of years ago, ancient life was sucked down into the Earth’s mantle, and traces of it have been discovered in rocks deep within the mantle.\r\nScientists discovered carbon traces th… [+2245 chars]",
    },
    {
      source: { id: null, name: "Nsf.gov" },
      author: null,
      title:
        "Cyanide gas and the chemistry of evolving life - National Science Foundation",
      description:
        "Cyanide could have enabled metabolic reactions, creating carbon-based compounds",
      url: "https://www.nsf.gov/discoveries/disc_summ.jsp?cntn_id=304599",
      urlToImage:
        "https://www.nsf.gov/news/mmg/media/images/cyanide_earlyearth_f.jpg",
      publishedAt: "2022-03-07T18:23:26Z",
      content:
        "Research NewsCyanide could have enabled metabolic reactions, creating carbon-based compounds\r\nChemists theorize that cyanide gas reactions on early Earth enabled life.\r\nMarch 7, 2022\r\nBillions of yea… [+1974 chars]",
    },
    {
      source: { id: null, name: "NASA" },
      author: "https://www.jpl.nasa.gov/",
      title:
        "Space Station to Host 'Self-Healing' Quantum Communications Tech Demo - NASA Jet Propulsion Laboratory",
      description:
        "The NASA-funded experiment will test two technologies that could eventually enable quantum computers to communicate with each other no matter where they are located.",
      url: "https://www.jpl.nasa.gov/news/space-station-to-host-self-healing-quantum-communications-tech-demo",
      urlToImage:
        "https://d2pn8kiwq2w21t.cloudfront.net/original_images/1_bishop-airlock-install.jpg",
      publishedAt: "2022-03-07T17:44:06Z",
      content:
        "Once attached to the space stations exterior, SEAQUE will also test a technique to help space-based nodes self-heal from radiation damage, a continual challenge of maintaining delicate instruments in… [+4331 chars]",
    },
    {
      source: { id: null, name: "Opticflux.com" },
      author: "Cristian Antonescu",
      title:
        "Scientist Claims to Know the Main Reason Why NASA Didn't Send Astronauts to Mars - Optic Flux",
      description:
        "NASA aims to send the first astronauts to Mars by the end of the current decade. While it would be a huge achievement, we are surely asking ourselves why the space agency hasn't reached that goal already. It's 2022 and more than half a century since humans la…",
      url: "https://www.opticflux.com/scientist-claims-to-know-the-main-reason-why-nasa-didnt-send-astronauts-to-mars/16564/",
      urlToImage:
        "https://www.opticflux.com/wp-content/uploads/2021/12/mars-2051747_1280.png",
      publishedAt: "2022-03-07T17:23:01Z",
      content:
        "NASA aims to send the first astronauts to Mars by the end of the current decade. While it would be a huge achievement, we are surely asking ourselves why the space agency hasn’t reached that goal alr… [+1685 chars]",
    },
    {
      source: { id: null, name: "Science Daily" },
      author: null,
      title:
        "Tiny worms make complex decisions, too: Scientists surprised to discover flexible decision-making capabilities in a worm with just 302 neurons - Science Daily",
      description:
        "How does an animal make decisions? Scientists have spent decades trying to answer this question by focusing on the cells and connections of the brain that might be involved. Scientists are taking a different approach -- analyzing behavior, not neurons. They w…",
      url: "https://www.sciencedaily.com/releases/2022/03/220307113024.htm",
      urlToImage: "https://www.sciencedaily.com/images/scidaily-icon.png",
      publishedAt: "2022-03-07T17:08:08Z",
      content:
        "How does an animal make decisions? Scientists have spent decades trying to answer this question by focusing on the cells and connections of the brain that might be involved. Salk scientists are takin… [+3058 chars]",
    },
    {
      source: { id: null, name: "Republic World" },
      author: "Harsh Vardhan",
      title:
        "ESA's surreal Hubble pic shows young star shooting supersonic jet; know all about it - Republic World",
      description:
        "ESA's newly released photograph shows an extremely young star generating an energetic outburst running across the dark cosmic sky 1,250 light-years from Earth.",
      url: "https://www.republicworld.com/science/space/esas-surreal-hubble-pic-shows-young-star-shooting-supersonic-jet-know-all-about-it-articleshow.html",
      urlToImage:
        "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/xmadydyer4ekbgnl_1646671860.jpeg",
      publishedAt: "2022-03-07T17:03:00Z",
      content:
        "The European Space Agency (ESA) has released a brand new image captured by the Hubble Space Telescope that showcases never-seen-before features. The photograph shows an extremely young star, which is… [+2009 chars]",
    },
    {
      source: { id: null, name: "Nanowerk" },
      author: null,
      title:
        "Massive bubbles at center of Milky Way caused by supermassive black hole - Nanowerk",
      description:
        "In 2020, the X-ray telescope eRosita took images of two enormous bubbles extending far above and below the center of our galaxy. New research suggests the bubbles are a result of a powerful jet of activity from the supermassive black hole at the center of the…",
      url: "https://www.nanowerk.com/news2/space/newsid=59971.php",
      urlToImage: "https://www.nanowerk.com/news2/space/id59971_1.jpg",
      publishedAt: "2022-03-07T16:47:29Z",
      content:
        "Nanowerk Newsletter\r\nGet our Space Exploration news updates to your inbox!",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Hubble ACS 20th Anniversary Video - Hubble Space Telescope",
      description:
        "The Hubble Space Telescope's Advanced Camera for Surveys (ACS) forever changed our view of the universe. Two decades into its epic mission, ACS continues to ...",
      url: "https://www.youtube.com/watch?v=wH3NRkmgkSA",
      urlToImage: "https://i.ytimg.com/vi/wH3NRkmgkSA/hqdefault.jpg",
      publishedAt: "2022-03-07T16:39:59Z",
      content: null,
    },
    {
      source: { id: null, name: "Gizmodo.com" },
      author: "George Dvorsky",
      title:
        "A Mars Rock Appears to Be Stuck in Perseverance Rover’s Wheel - Gizmodo",
      description: "Unwanted rocks won't leave NASA's six-wheeled rover alone.",
      url: "https://gizmodo.com/a-mars-rock-appears-to-be-stuck-in-perseverance-rover-s-1848616540",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d71a1b144bd7426e254b7a19adc2a45b.png",
      publishedAt: "2022-03-07T16:30:00Z",
      content:
        "NASAs Perseverance rover has involuntarily adopted a traveling companion, in the form of a stone thats lodged in one of its six aluminum wheels.\r\nAn image captured by Perseverances Onboard Front Left… [+2021 chars]",
    },
    {
      source: { id: null, name: "Interesting Engineering" },
      author: "Chris Young",
      title:
        "China's Mars rover completes its first 60 Martian days on an alien world - Interesting Engineering",
      description:
        "The first analysis of Mars Zhurong's landing site points out that the surface Zhurong landed on was shaped by wind and potentially by water.",
      url: "https://interestingengineering.com/china-60-martian-days",
      urlToImage:
        "https://inteng-storage.s3.amazonaws.com/img/iea/Lg6E24XMwN/sizes/zhurong_md.jpg",
      publishedAt: "2022-03-07T16:05:55Z",
      content:
        "Scientists from China presented the first detailed analysis of the Zhurong rover's findings on Mars, the country's first rover to reach the red planet.\r\nIn a press statement, the scientists explained… [+2928 chars]",
    },
    {
      source: { id: null, name: "Ucla.edu" },
      author: "Stuart Wolpert",
      title:
        "The secret to longevity? Ask a yellow-bellied marmot - UCLA Newsroom",
      description:
        "UCLA-led study shows that aging slows to a crawl when the animals hibernate",
      url: "https://newsroom.ucla.edu/releases/marmots-and-the-secret-to-longevity",
      urlToImage:
        "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20222/62219f0c2cfac272327d7f78_Marmots%202/Marmots%202_mid.jpg",
      publishedAt: "2022-03-07T16:05:49Z",
      content:
        "What if you were told there was a completely natural way to stop your body from aging? The trick: You’d have to hibernate from September to May each year.\r\nThat’s what a team of UCLA biologists and c… [+5404 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Mike Williams",
      title: "Exploring when a protein's prone to wander - Phys.org",
      description:
        "Exactly how proteins interact with solid surfaces is a concern for health care manufacturers who design drugs, make biosensors or develop anti-fouling materials.",
      url: "https://phys.org/news/2022-03-exploring-protein-prone.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2022/closer-look-helps-rice.jpg",
      publishedAt: "2022-03-07T16:00:38Z",
      content:
        "Exactly how proteins interact with solid surfaces is a concern for health care manufacturers who design drugs, make biosensors or develop anti-fouling materials.\r\nThe mechanisms that control these in… [+4178 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Eric Berger",
      title:
        "How to save the International Space Station and prevent the dreaded “gap” - Ars Technica",
      description:
        "Unity in space remains in the best interest of the international partners.",
      url: "https://arstechnica.com/science/2022/03/how-to-save-the-international-space-station-and-prevent-the-dreaded-gap/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/03/51814201006_e93b98b15e_k-1-760x380.jpg",
      publishedAt: "2022-03-07T15:28:58Z",
      content:
        "Enlarge/ The International Space Station is pictured from the SpaceX Crew Dragon Endeavour during a fly around of the orbiting lab that took place following its undocking on Nov. 8, 2021. \r\n151 with … [+6515 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Zoom into Arp 143 - HubbleESA",
      description:
        "A spectacular head-on collision between two galaxies has been captured by the NASA/ESA Hubble Space Telescope, which has the unusual triangular-shaped star-b...",
      url: "https://www.youtube.com/watch?v=N4B_B2uxwSI",
      urlToImage: "https://i.ytimg.com/vi/N4B_B2uxwSI/hqdefault.jpg",
      publishedAt: "2022-03-07T15:13:03Z",
      content: null,
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Kara Headley",
      title:
        "New insight on the source/sink balance of cyanobacteria - Phys.org",
      description:
        "A new study from the Michigan State University-DOE Plant Research Laboratory (PRL) brings fresh insight on the source/sink balance of cyanobacteria and paves the way for further advancements in photosynthetic microbes for potential applications.",
      url: "https://phys.org/news/2022-03-insight-sourcesink-cyanobacteria.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2022/cyanobacteria-balancin.jpg",
      publishedAt: "2022-03-07T15:04:13Z",
      content:
        "A new study from the Michigan State University-DOE Plant Research Laboratory (PRL) brings fresh insight on the source/sink balance of cyanobacteria and paves the way for further advancements in photo… [+3311 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Science X staff",
      title: "The unfolding story of a kilonova told in X-rays - Phys.org",
      description:
        'Astronomers may have detected a "sonic boom" from a powerful blast known as a kilonova. This event was seen in GW170817, a merger of two neutron stars and the first object detected in both gravitational waves and electromagnetic radiation, or light.',
      url: "https://phys.org/news/2022-03-unfolding-story-kilonova-told-x-rays.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2022/the-unfolding-story-of.jpg",
      publishedAt: "2022-03-07T14:36:17Z",
      content:
        'Astronomers may have detected a "sonic boom" from a powerful blast known as a kilonova. This event was seen in GW170817, a merger of two neutron stars and the first object detected in both gravitatio… [+5571 chars]',
    },
    {
      source: { id: null, name: "MENAFN.COM" },
      author: "MENAFN",
      title:
        "Deer have horns, walruses have tusks here's why so few bird... - MENAFN.COM",
      description:
        "<p> Mating season in the animal kingdom can be dramatic, and sometimes violent. As an example, take deer clashing their antlers during the rut – nost",
      url: "https://menafn.com/1103807389/Deer-have-horns-walruses-have-tusks-heres-why-so-few-birds-have-weapons-of-their-own",
      urlToImage:
        "https://menafn.com/updates/pr/2022-03/07/TC_a9725image_story.jpg",
      publishedAt: "2022-03-07T14:14:40Z",
      content:
        "(MENAFN- The Conversation) \r\n Mating season in the animal kingdom can be dramatic, and sometimes violent. As an example, take deer clashing their antlers during the rut nostrils flaring, hooves hamme… [+7056 chars]",
    },
    {
      source: { id: null, name: "Republic World" },
      author: "Harsh Vardhan",
      title:
        "NASA Artemis astronauts will be able to capture stunning photos of the Moon; here's how - Republic World",
      description:
        "NASA's Artemis missions would land the first women of colour on the Moon and expand human reach beyond low-Earth orbit and eventually to Mars.",
      url: "https://www.republicworld.com/science/space/nasa-artemis-astronauts-will-be-able-to-capture-stunning-photos-of-the-moon-heres-how-articleshow.html",
      urlToImage:
        "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ud6ual7rxy3hgiuq_1646660859.jpeg",
      publishedAt: "2022-03-07T14:05:00Z",
      content:
        "The days arent far when humans will again set their foot on the Moon courtesy of the Artemis program starting later this year. The Artemis missions under this program would land the first women of co… [+2575 chars]",
    },
    {
      source: { id: null, name: "Global Times" },
      author: null,
      title:
        "New carrier rocket, Moon and Mars missions… lawmakers reveal China's forthcoming space programs - Global Times",
      description:
        "What's the next step for the development of China's aerospace, political advisors and lawmakers working in the industry shared with the Global Times their vision and proposals to the ongoing two sessions, China's biggest annual political event.",
      url: "https://www.globaltimes.cn/page/202203/1254234.shtml",
      urlToImage:
        "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-12-26/0678ff30-8c89-45d8-9076-cf9b66ed2148.jpeg",
      publishedAt: "2022-03-07T13:34:00Z",
      content:
        "Shenzhou-13 taikonaut Ye Guangfu exits China's orbiting space station core module Tianhe on an extravehicular activity (EVA), the China Manned Space Agency said on December 26, 2021. Ye and fellow cr… [+4072 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Evan Gough",
      title:
        "Astronomers scan 800 pulsars to see if any of them have planets - Phys.org",
      description:
        "Astronomers discovered the first exoplanets in 1992. They found a pair of them orbiting the pulsar PSR B1257+12 about 2,300 light-years from the Sun. Two years later they discovered the third planet in the system.",
      url: "https://phys.org/news/2022-03-astronomers-scan-pulsars-planets.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/2022/astronomers-scan-800-p.jpg",
      publishedAt: "2022-03-07T13:29:54Z",
      content:
        "Astronomers discovered the first exoplanets in 1992. They found a pair of them orbiting the pulsar PSR B1257+12 about 2,300 light-years from the Sun. Two years later they discovered the third planet … [+12440 chars]",
    },
    {
      source: { id: null, name: "WION" },
      author: "WION Web Team",
      title:
        "Asteroid possibly hitting Earth has been revealed to be safe - WION",
      description:
        "Asteroids are just space rocks measuring some kilometres across. But a direct hit and they cause mayhem for any living thing thats present on a planet. They have potential to wipe out life off the face of the planet or at least dramatically alter the dominanc…",
      url: "https://www.wionews.com/science/asteroid-possibly-hitting-earth-has-been-revealed-to-be-safe-459922",
      urlToImage:
        "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/02/13/240558-fly1uotx0aupvpn.jpeg",
      publishedAt: "2022-03-07T13:20:19Z",
      content:
        "Asteroids are just space rocks measuring some kilometres across. But a direct hit and they cause mayhem for any living thing that's present on a planet. They have potential to wipe out life off the f… [+1653 chars]",
    },
    {
      source: { id: null, name: "EastMojo" },
      author: "Team EastMojo",
      title:
        "NASA’s Curiosity Rover shares picture of ‘mineral flower’ on Mars - EastMojo",
      description:
        "NASA’s Curiosity Rover has created what looks like the picture of a mineral formation in the shape of a flower. The formation resembles a coral or sea",
      url: "http://www.eastmojo.com/space/2022/03/07/nasas-curiosity-rover-shares-picture-of-mineral-flower-on-mars/",
      urlToImage:
        "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/03/mars-mineral-flower.jpeg?fit=1852%2C1129&ssl=1",
      publishedAt: "2022-03-07T12:45:00Z",
      content:
        "NASAs Curiosity Rover has created what looks like the picture of a mineral formation in the shape of a flower. The formation resembles a coral or sea anemone in the picture, but it is just a lifeless… [+1336 chars]",
    },
    {
      source: { id: null, name: "Newsclick.in" },
      author: null,
      title:
        "James Webb Telescope to Study Cold Mysterious Belt of Solar System - NewsClick",
      description:
        "The telescope will study the Kuiper Belt’s icy bodies to gather information about the universe’s origin as far as possible.",
      url: "https://www.newsclick.in/James-Webb-Telescope-Study-Cold-Mysterious-Belt-Solar-System",
      urlToImage:
        "https://www.newsclick.in/sites/default/files/2022-03/mysterios.jpg",
      publishedAt: "2022-03-07T12:43:40Z",
      content:
        "The latest, advanced and most powerful space observatory, the James Webb Space Telescope, is on a mission to gather information about the origin of the universe as far as possible. The telescope, equ… [+3173 chars]",
    },
    {
      source: { id: null, name: "Phys.Org" },
      author: "Science X staff",
      title: "Moon and Mars superoxides for oxygen farming - Phys.org",
      description:
        "The dusty faces of the moon and Mars conceal unseen hazards for future explorers. Areas of highly oxidizing material could be sufficiently reactive that they would produce chemical burns on astronauts' unprotected skin or lungs. Taking inspiration from a pion…",
      url: "https://phys.org/news/2022-03-moon-mars-superoxides-oxygen-farming.html",
      urlToImage:
        "https://scx2.b-cdn.net/gfx/news/hires/2022/moon-and-mars-superoxi.jpg",
      publishedAt: "2022-03-07T12:38:57Z",
      content:
        "The dusty faces of the moon and Mars conceal unseen hazards for future explorers. Areas of highly oxidizing material could be sufficiently reactive that they would produce chemical burns on astronaut… [+5108 chars]",
    },
    {
      source: { id: null, name: "Tech Explorist" },
      author: "https://www.facebook.com/malewar.amit",
      title:
        "Hubble snaps two galaxies that appear to overlap - Tech Explorist",
      description: "A not-so-close encounter.",
      url: "https://www.techexplorist.com/hubble-snaps-two-galaxies-appear-overlap/45132/",
      urlToImage:
        "https://cdn.techexplorist.com/wp-content/uploads/2022/03/twin-galaxies.jpg",
      publishedAt: "2022-03-07T12:30:07Z",
      content:
        "NASA/ESA Hubble Space Telescope captured an image of two galaxies: NGC 4496A and NGC 4496B. The galaxies appear to reside beside each other in the constellation Virgo but have huge distances between … [+626 chars]",
    },
    {
      source: { id: null, name: "Live Science" },
      author: "JoAnna Wendel",
      title:
        "Why are asteroids and comets such weird shapes? - Livescience.com",
      description: "The less massive an object is, the less round it is.",
      url: "https://www.livescience.com/why-asteroids-comets-weird-shapes",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/jrSniLCMadEXQpvTWfLAJF-1200-80.jpg",
      publishedAt: "2022-03-07T12:00:02Z",
      content:
        "A rubber duck. A spinning top. A pair of pancakes. These are just a few of the shapes astronomers have observed across the solar system.\r\nWhile planets and some moons are almost perfectly spherical, … [+3288 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Vishwam Sankaran",
      title:
        "Strange marks in Japanese monkey teeth prompt rethink of human evolution, scientists say - The Independent",
      description:
        "Interpretation of strange grooves in fossil human teeth ‘may need reconsidering,’ say scientists",
      url: "https://www.independent.co.uk/news/science/japanese-macaque-teeth-human-evolution-b2030062.html",
      urlToImage:
        "https://static.independent.co.uk/2022/03/07/11/Low-Res_Figure%205.jpg.png?quality=75&width=1200&auto=webp",
      publishedAt: "2022-03-07T11:48:38Z",
      content:
        "The discovery of unusual markings on the teeth of wild Japanese macaques may have significant implications for our understanding of human evolution, according to a new study.\r\nUp until now these sign… [+2609 chars]",
    },
    {
      source: { id: null, name: "Newsnetnebraska.org" },
      author: "Karen Hines",
      title:
        'Is space around Earth really a "landfill"? From the piece of the rocket that landed on the moon to the millions of debris in the "cemetery" orbits. Battston: "Dangers to satellites" - News Net Nebraska',
      description:
        "Trento. left for Years to roam between Earth and the the moonand ended up crashing...",
      url: "https://www.newsnetnebraska.org/is-space-around-earth-really-a-landfill-from-the-piece-of-the-rocket-that-landed-on-the-moon-to-the-millions-of-debris-in-the-cemetery-orbits-battston-dangers-to-satellites/",
      urlToImage: null,
      publishedAt: "2022-03-07T10:48:26Z",
      content:
        "Trento. left for Years to roam between Earth and the the moonand ended up crashing in recent days (at least after expectations Scientists) against the Our satellite: It might be part of a file booste… [+6193 chars]",
    },
    {
      source: { id: null, name: "Technology Networks" },
      author: "Technology Networks",
      title:
        "How the Placement of a Gene Affects Its Expression - Technology Networks",
      description:
        "Genomes are made up of thousands of individual pieces – genes – which are expressed at different levels. Researchers at EMBL have shed light on how the placement of a gene affects its expression, as well as that of its neighbours.",
      url: "https://www.technologynetworks.com/genomics/news/how-the-placement-of-a-gene-affects-its-expression-359307",
      urlToImage:
        "https://assets.technologynetworks.com/production/dynamic/images/content/359307/how-the-placement-of-a-gene-affects-its-expression-359307-640x360.jpg?cb=20220307",
      publishedAt: "2022-03-07T10:22:38Z",
      content:
        "The celebrated physicist Richard Feynman is credited with the quote, What I cannot create, I do not understand. As well as informing Feynmans approach to theoretical physics, its a good way of descri… [+6633 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Buzz Staff",
      title:
        "T-Rex Should be Divided into Three Species, Say These Researchers - News18",
      description:
        "The study, led by paleontologist Gregory Paul, points out that the variations of about three dozen fossils indicated that two additional species deserved separate recognition.",
      url: "https://www.news18.com/news/buzz/t-rex-should-be-divided-into-three-species-say-these-researchers-4845917.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/untitled-design-2022-03-07t154732.914-164664833316x9.jpg",
      publishedAt: "2022-03-07T10:21:59Z",
      content:
        "Tyrannosaurus, more popularly known as T-Rex, is possibly one of the most recognisable dinosaur species. The giant skeletons of this ancient animal that walked the surface of earth millions of years … [+2124 chars]",
    },
    {
      source: { id: null, name: "Labiotech.eu" },
      author: "Sachin Rawat",
      title: "Multiplexing Speeds up Writing and Editing DNA - Labiotech.eu",
      description:
        "Increasing the speed of editing and writing DNA sequences with multiplexing will usher in new applications of genome engineering.",
      url: "https://www.labiotech.eu/in-depth/multiplexing-gene-editing-dna-synthesis/",
      urlToImage:
        "https://www.labiotech.eu/wp-content/uploads/2022/03/Multiplexing-gene-editing-DNA-synthesis.jpg",
      publishedAt: "2022-03-07T07:18:32Z",
      content:
        "While scientists can read DNA fast, editing and writing it is not that easy. Increasing the speed of editing and writing DNA sequences will be critical to ushering in new applications of genome engin… [+6688 chars]",
    },
    {
      source: { id: null, name: "UPI.com" },
      author: null,
      title:
        "NASA expands research into mining lunar ice, minerals to sustain humans on the moon - UPI News",
      description:
        "UPI delivers the latest headlines from around the world: Top News, Entertainment, Health, Business, Science and Sports News - United Press International",
      url: "https://www.upi.com/",
      urlToImage: "//www.upi.com/img/upi-fb.png",
      publishedAt: "2022-03-07T07:00:06Z",
      content: "",
    },
    {
      source: { id: null, name: "Stardate.org" },
      author: null,
      title: "Passing the Test | StarDate Online - Stardate.org",
      description:
        "The more scientists try to break down Albert Einstein’s theory of gravity, the stronger it looks. An experiment that kept an eye on a pair of extreme dead stars, for example, confirmed several of its predictions.The theory is General Relativity. Einstein pres…",
      url: "https://stardate.org/radio/program/2022-03-07",
      urlToImage: null,
      publishedAt: "2022-03-07T06:30:16Z",
      content:
        "The more scientists try to break down Albert Einsteins theory of gravity, the stronger it looks. An experiment that kept an eye on a pair of extreme dead stars, for example, confirmed several of its … [+1246 chars]",
    },
    {
      source: { id: null, name: "Newswise" },
      author: null,
      title:
        "New species of stegosaur is oldest discovered in Asia, and possibly the world - Newswise",
      description:
        "Relatively small, but fearsome-looking stegosaur measured about 2.8 metres (9 feet) from nose to tail—but scientists can’t tell whether the remains are thos",
      url: "https://www.newswise.com/articles/new-species-of-stegosaur-is-oldest-discovered-in-asia-and-possibly-the-world",
      urlToImage:
        "https://www.newswise.com/legacy/image.php?image=/images/uploads/2022/03/07/62259b1c3b8d1_Low-Res_dinosaur 1500x1000.png.png&width=600&height=600",
      publishedAt: "2022-03-07T05:05:00Z",
      content:
        "Newswise — Relatively small, but fearsome-looking stegosaur measured about 2.8 metres (9 feet) from nose to tail—but scientists can’t tell whether the remains are those of an adult or juvenile.\r\nA ne… [+4138 chars]",
    },
    {
      source: { id: null, name: "ecns" },
      author: null,
      title: "Probe to look for water on moon - ecns",
      description:
        "China plans to send its Chang'e 7 robotic probe to search for water and other resources at the moon's south pole, according to a leading space scientist.",
      url: "http://www.ecns.cn/news/2022-03-07/detail-ihawiaxw7021054.shtml",
      urlToImage:
        "http://i2.chinanews.com.cn/simg/hpic/2022/03-07/pic1-39421858.jpeg",
      publishedAt: "2022-03-07T03:49:07Z",
      content:
        "Special: 2022 Two SessionsVisitors examine a model of China's lunar rover at an exhibition of achievements in space and deep-sea sciences in Wuxi, Jiangsu province, in May, 2021. (Photo/Xinhua)\r\nChan… [+3502 chars]",
    },
    {
      source: { id: null, name: "Digital Trends" },
      author: "Trevor Mogg",
      title:
        "Watch this cool highlights video of ULA’s Atlas V launch - Digital Trends",
      description:
        "United Launch Alliance has shared a beautifully shot video of a recent space mission involving its workhorse Atlas V rocket.",
      url: "https://www.digitaltrends.com/news/watch-this-cool-highlights-video-of-ulas-atlas-v-launch/",
      urlToImage:
        "https://icdn.digitaltrends.com/image/digitaltrends/noaa-nasa-ula-rocket-launch.jpg",
      publishedAt: "2022-03-07T03:40:36Z",
      content:
        "Following last weeks launch of a next-generation weather satellite for the National Oceanic and Atmospheric Administration (NOAA), United Launch Alliance (ULA) has shared a cool video of the mission … [+1592 chars]",
    },
    {
      source: { id: null, name: "Thewire.in" },
      author: "Kurt Kleiner, Knowable",
      title:
        "Orbiting Robots Could Help Fix and Fuel Satellites in Space – The Wire Science - The Wire Science",
      description:
        "At the moment there are about 4,852 working satellites in orbit, playing crucial roles in communications, remote sensing and other tasks.",
      url: "https://science.thewire.in/spaceflight/orbiting-robots-could-help-fix-and-fuel-satellites-in-space/",
      urlToImage:
        "https://cdn.thewire.in/wp-content/uploads/2022/03/05191349/1_media_space-robots-1600x600-1.jpg",
      publishedAt: "2022-03-07T02:29:20Z",
      content:
        "Within a few years, NASAs OSAM-1 mission will launch into space and use a robotic arm to refuel the Landsat 7 Earth-observation satellite. Image: NASA\r\n<ul><li>At the moment there are about 4,852 wor… [+9496 chars]",
    },
    {
      source: { id: null, name: "Tech Times" },
      author: "Sophie Webster",
      title:
        "NASA Rover's Mars Trip Delayed, When Will the Next Launch Be? - Tech Times",
      description:
        "The new Mars rover was supposed to launch in 2020, but was delayed due to technical issues. This year, the launch was delayed again due to the situation on Ukraine.",
      url: "https://www.techtimes.com/articles/272647/20220306/nasa-rovers-mars-trip-delayed-when-will-next-launch.htm",
      urlToImage:
        "https://1734811051.rsc.cdn77.org/data/images/full/401615/nasa.png",
      publishedAt: "2022-03-07T02:00:00Z",
      content:
        "NASA's rovers have been helpful in exploring Mars, and it is possible that the public won't have to wait long before the next rover is on its way to the Red Planet.\r\nFor years, Mars has become the ta… [+3125 chars]",
    },
    {
      source: { id: null, name: "Interesting Engineering" },
      author: "Loukia Papadopoulos",
      title:
        "ExoMars rover launch delayed once more due to Russia's invasion of Ukraine - Interesting Engineering",
      description:
        "Because of Russia's invasion of Ukraine, the European Space Agency has decided to postpone the launch of the ExoMars rover. It was supposed to launch in summer 2020.",
      url: "https://interestingengineering.com/exomars-rover-launch-delayed-invasion-ukraine",
      urlToImage:
        "https://inteng-storage.s3.amazonaws.com/img/iea/lV6DPeMK6x/sizes/exomars_md.jpg",
      publishedAt: "2022-03-06T21:13:00Z",
      content:
        "In December of 2021, the European Space Agency (ESA) was preparing for its ExoMars launch by completing the first successful high-altitude drop test of the ExoMars mission parachute. Now, it seems to… [+1965 chars]",
    },
    {
      source: { id: null, name: "Tech Times" },
      author: "Griffin Davis",
      title:
        "Laser-Powered Spacecraft More Efficient Than Conventional Rockets? They Can Travel Faster and Longer - Tech Times",
      description:
        "Compared to fuel-powered rockets, they are faster and travel longer distances.",
      url: "https://www.techtimes.com/articles/272637/20220306/laser-powered-spacecraft-more-efficient-conventional-rockets-travel-faster-longer.htm",
      urlToImage:
        "https://1734811051.rsc.cdn77.org/data/images/full/401607/laser-powered-spacecraft-more-efficient-than-conventional-rockets-they-can-travel-faster-and-longer.jpg",
      publishedAt: "2022-03-06T17:32:30Z",
      content:
        "Laser-powered spacecraft can soon be a thing in space travel. Once arrive, they are expected to be more efficient alternatives or replacements for the fuel-propelled rockets used by NASA and other sp… [+2865 chars]",
    },
    {
      source: { id: null, name: "The Siasat Daily" },
      author: "ANI",
      title:
        "Study reveals that solar coronal loops may be optical illusions - The Siasat Daily",
      description:
        "Boulder: Coronal loops are the ropey strands of plasma that scientists have long thought existed in the Sun's atmosphere. According to a new study, many coronal loops may actually be optical illusions. The study challenged prevailing assumptions of what is kn…",
      url: "https://www.siasat.com/study-reveals-that-solar-coronal-loops-may-be-optical-illusions-2286557/",
      urlToImage:
        "https://cdn.siasat.com/wp-content/uploads/2022/03/solar-_mar6.jpg",
      publishedAt: "2022-03-06T11:53:00Z",
      content:
        "Boulder: Coronal loops are the ropey strands of plasma that scientists have long thought existed in the Sun’s atmosphere. According to a new study, many coronal loops may actually be optical illusion… [+5551 chars]",
    },
  ];

  return (
    <div className={classes.container} key={Math.random()}>
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

export default Science;
