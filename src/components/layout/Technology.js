import React from "react";
import classes from "./Card.module.css";

const Technology = () => {
  const articles = [
    {
      source: { id: "ign", name: "IGN" },
      author: "Joe Skrebels",
      title:
        "GTA 5 and GTA Online: PS5 and Xbox Series X/S Pricing Announced, No Free Upgrades Offered - IGN - IGN",
      description:
        "Rockstar has revealed the pricing for GTA 5 and GTA Online on PS5 and Xbox Series X/S. We now know for sure that the games won't be offered as free upgrades to existing owners, but they will launch with some hefty discounts.",
      url: "https://www.ign.com/articles/gta-5-online-ps5-xbox-series-price-free-upgrade",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/03/08/gta-online-3-4-2022-image-5-1646403160487-1646740436122.jpg?width=1280",
      publishedAt: "2022-03-08T12:00:00Z",
      content:
        "Rockstar has revealed the pricing for GTA 5 and GTA Online on PS5 and Xbox Series X/S. We now know for sure that the games won't be offered as free upgrades to existing owners, but they will be at le… [+2365 chars]",
    },
    {
      source: { id: null, name: "Wccftech" },
      author: "Francesco De Meo",
      title:
        "Gran Turismo 7 New Comparison Video Highlights Visual Improvements Over the Entire Series - Wccftech",
      description:
        "A new Gran Turismo 7 comparison video highlights the visual improvements introduced in the game over the entire series",
      url: "https://wccftech.com/gran-turismo-7-new-comparison-video-highlights-visual-improvements-over-the-entire-series/",
      urlToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2022/03/Gran-Turismo-7-Review-01-Header.jpg",
      publishedAt: "2022-03-08T11:45:06Z",
      content:
        "A new Gran Turismo 7 comparison video that has been shared online this week highlights the massive visual improvements introduced in the latest entry in the series over the entire franchise.\r\nThe new… [+1975 chars]",
    },
    {
      source: { id: null, name: "MacRumors" },
      author: "Sami Fathi",
      title:
        "Last-Minute Rumor Claims New iPhone SE to Feature MagSafe, Ceramic Shield, and 'Significantly' Better Battery Life - MacRumors",
      description:
        'Ahead of Tuesday\'s "Peek Performance" Apple event, a last-minute rumor claims that the third-generation iPhone SE expected to be unveiled...',
      url: "https://www.macrumors.com/2022/03/08/iphone-se-rumor-magsafe-battery-life/",
      urlToImage:
        "https://images.macrumors.com/t/TVU2sVxlz4Dox76M0h8oX0ZAysE=/1600x/article-new/2022/01/iPhone-SE-2022-Red-Feature.jpg",
      publishedAt: "2022-03-08T11:22:55Z",
      content:
        'Ahead of Tuesday\'s "Peek Performance" Apple event, a last-minute rumor claims that the third-generation iPhone SE expected to be unveiled will feature MagSafe, Ceramic Shield, and "significantly" bet… [+1915 chars]',
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Michail",
      title:
        "Xiaomi 12 series global launch scheduled for March 15 - GSMArena.com news - GSMArena.com",
      description: "Will there be an Ultra?",
      url: "https://www.gsmarena.com/xiaomi_12_series_global_launch_scheduled_for_march_15-news-53465.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/xiaomi-12-series-global-launch-15-march/-952x498w6/gsmarena_00.jpg",
      publishedAt: "2022-03-08T11:21:01Z",
      content:
        "Xiaomi just confirmed its 12 series smartphones will launch globally on March 15. The event will start at 8PM China time / 12PM UTC and will be live-streamed on several online platforms including You… [+500 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Apple to launch its first product of 2022 - ABC News",
      description:
        "The company is expected to unveil a new version of its low-cost iPhone SE.",
      url: "https://www.youtube.com/watch?v=OJ4jpFptfIw",
      urlToImage: "https://i.ytimg.com/vi/OJ4jpFptfIw/hqdefault.jpg",
      publishedAt: "2022-03-08T11:12:26Z",
      content: null,
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
      source: { id: null, name: "SamMobile" },
      author: "SamMobile",
      title:
        "Samsung locks a Galaxy S22 due to failed trade-in procedure in the UK - SamMobile",
      description:
        "There is some sad, rather shocking news coming in for the fans who have traded in their old phones to ...",
      url: "https://www.sammobile.com/news/samsung-blocks-galaxy-s22-due-to-failed-trade-in-procedure-in-the-uk/",
      urlToImage:
        "https://www.sammobile.com/wp-content/uploads/2022/03/Galaxy-S22-Plus-2-720x405.jpg",
      publishedAt: "2022-03-08T10:02:00Z",
      content:
        "There is some sad, rather shocking news coming in for the fans who have traded in their old phones to get their hands on the Galaxy S22 series in the UK. Notably, according to a Galaxy S22 Ultra user… [+1422 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "S Aadeetya",
      title:
        "You Are Unlikely To See A Flagship Nokia Phone Anytime Soon, Here’s Why - News18",
      description:
        "Nokia smartphones are available at varied price point, including the budget segment, and now it seems the company is looking to end its focus in the high-end market.",
      url: "https://www.news18.com/news/tech/you-are-unlikely-to-see-a-flagship-nokia-phone-anytime-soon-heres-why-4850057.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2021/11/nokia-reuters-163712802616x9.jpg",
      publishedAt: "2022-03-08T09:54:36Z",
      content:
        "Nokia seems to be making a quick exit from the premium smartphone market. According to a news report, HMD Global is shifting its focus towards budget phones for the time being. The company in fact pr… [+2372 chars]",
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Pranob Mehrotra",
      title:
        "Here are all the wallpapers from the upcoming Samsung Galaxy A53 - XDA Developers",
      description:
        "We've managed to get our hands on the new Galaxy A53 wallpapers ahead of Samsung's official announcement. Download from the link in the post.",
      url: "https://www.xda-developers.com/samsung-galaxy-a53-wallpapers/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/03/Samsung-Galaxy-A53-wallpapers-grid-featured.jpg",
      publishedAt: "2022-03-08T09:27:00Z",
      content:
        "In March last year, Samsung launched three new Galaxy A series devices — the Galaxy A52 4G, the Galaxy A52 5G, and the Galaxy A72. We expect the company to announce their successors around the same t… [+2077 chars]",
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
      source: { id: null, name: "XDA Developers" },
      author: "https://www.facebook.com/aamirsiddiqui94",
      title:
        "Last minute leak suggests Apple could launch a Mac Studio, a Studio Display, and more, today - XDA Developers",
      description:
        "Apple could have some surprises to launch today, including a Mac Studio, a Studio Display, and new colors for the iPhone 13 and iPad Air.",
      url: "https://www.xda-developers.com/apple-mac-studio-display-last-minute-leak/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/03/Mac-Studio-next-to-the-Mac-Mini.jpg",
      publishedAt: "2022-03-08T08:31:00Z",
      content:
        "Apple’s Peek Performance event is scheduled for later today, and the rumor mills are in overdrive on what we can expect to see at this event. We’re expecting/hoping to see a 5G-enabled iPhone SE 3, t… [+1848 chars]",
    },
    {
      source: { id: null, name: "Android Central" },
      author: "Babu Mohan",
      title:
        "Nothing's upcoming Android phone may have just leaked for the first time - Android Central",
      description: 'We still know "nothing" about the phone\'s specs.',
      url: "https://www.androidcentral.com/phones/nothings-upcoming-android-phone-may-have-just-leaked-for-the-first-time",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/y4N6UgyPf9N8WECUBtZrp4-1200-80.jpg",
      publishedAt: "2022-03-08T08:10:20Z",
      content:
        "<ul><li>The first alleged image of Nothing’s first smartphone has leaked.</li><li>Nothing is expected to announce the device sometime next month.</li><li>The startup is believed to have shown off a p… [+1723 chars]",
    },
    {
      source: { id: null, name: "PhoneArena" },
      author: "Iskra Petrova",
      title:
        "iPhone 14 Pro and all iPhone 15 models reportedly to sport the pill and hole cutout design - PhoneArena",
      description:
        "While many find the pill and hole cutout design not cool at all, it seems it might be in full swing in 2023.",
      url: "https://www.phonearena.com/news/iphone-14-pro-pill-hole-cutout-design-iphone-15-prediction_id138881",
      urlToImage:
        "https://m-cdn.phonearena.com/images/article/138881-wide-two_1200/iPhone-14-Pro-and-all-iPhone-15-models-reportedly-to-sport-the-pill-and-hole-cutout-design.jpg",
      publishedAt: "2022-03-08T08:02:55Z",
      content:
        "As many of you may have heard by now, it seems that Apple is planning to change the notch on this year's iPhone 14 Pro-branded models for a controversial-looking hole and pill cutout. Now, AppleInsid… [+3360 chars]",
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
      source: { id: null, name: "Sportskeeda" },
      author: "Aakrit",
      title:
        "Top 5 must-have Genshin Impact characters for Spiral Abyss in March 2022 - Sportskeeda",
      description:
        "The Spiral Abyss has been reset in Genshin Impact version 2.5, and players can complete the end-game challenge to get up to 600 Primogems.",
      url: "https://www.sportskeeda.com/esports/top-5-must-have-genshin-impact-characters-spiral-abyss-march-2022",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2022/03/09c95-16466679322810-1920.jpg",
      publishedAt: "2022-03-08T07:16:40Z",
      content:
        "The Spiral Abyss has been reset in Genshin Impact version 2.5, and players can complete the end-game challenge to get up to 600 Primogems. With each update, the enemy lineup in the Abyss changes acco… [+3632 chars]",
    },
    {
      source: { id: null, name: "Sportskeeda" },
      author: "Matthew Wilkins",
      title:
        "5 best Free Fire MAX characters to get with gold for passive playstyle (March 2022) - Sportskeeda",
      description:
        "Not everyone is a fan of the combat in Free Fire MAX. Some players want to complete tasks and reach the end zone alive.",
      url: "https://www.sportskeeda.com/free-fire/5-best-free-fire-max-characters-get-gold-passive-playstyle-march-2022",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2022/03/aba6d-16467213999746-1920.jpg",
      publishedAt: "2022-03-08T06:54:38Z",
      content:
        "Not everyone is a fan of the combat in Free Fire MAX. Some players want to complete tasks and reach the end zone alive. While they don't shy away from a gunfight if provoked, they enjoy a more passiv… [+2774 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Ricky",
      title:
        "Instagram quietly discontinues Boomerang and Hyperlapse standalone apps - GSMArena.com news - GSMArena.com",
      description:
        "Last week, Instagram announced it was going to discontinue the IGTV app.",
      url: "https://www.gsmarena.com/instagram_quietly_discontinues_boomerang_and_hyperlapse_standalone_apps-news-53459.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/instagram-removes-boomerang-and-hyperlapse-apps/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2022-03-08T06:30:01Z",
      content:
        "Two more of Instagrams standalone apps have been removed from app stores, as noted by some users on Twitter and reported by Tech Crunch. Both the Boomerang and Hyperlapse apps are no longer available… [+881 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Ricky",
      title:
        "Samsung patented a phone with a sideways folding display - GSMArena.com news - GSMArena.com",
      description: "The display opens out to an L-shape form factor.",
      url: "https://www.gsmarena.com/samsung_patented_a_phone_with_a_sideways_folding_display-news-53458.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/samsung-patents-phone-with-sideways-folding-display/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2022-03-08T05:27:01Z",
      content:
        "Samsungs latest patent is a strange one. LetsGoDigital and Concept Creator imagine the Korean smartphone makers latest L-shaped smartphone in the form of renders. The patent (filed with WIPO) feature… [+1518 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Explained: What are tiny green dots on Android smartphones and why are they important - Times of India",
      description:
        "One of the key features that Google introduced with Android 12 are the tiny green dots on the screen as well as in the notification bar. The tiny dot",
      url: "https://timesofindia.indiatimes.com/gadgets-news/explained-what-are-tiny-green-dots-on-android-smartphones-and-why-are-they-important/articleshow/90068799.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90068799,width-1070,height-580,imgsize-11860,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-08T05:15:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Android Authority" },
      author: null,
      title:
        "Color OS gains a nifty new feature to detect spy cameras in a room - Android Authority",
      description:
        "Oppo's Color OS 12.1 is gaining a new hidden camera detection feature to locate spy cameras in a room. Here's how it works.",
      url: "https://www.androidauthority.com/color-os-hidden-camera-detection-3130744/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2022/02/Oppo-Find-X5-Pro-Curved-Glass-Camera.jpg",
      publishedAt: "2022-03-08T03:57:21Z",
      content:
        "<ul><li>Oppo has introduced a new hidden camera finder in Color OS.</li><li>The feature works via an app and can detect spy Wi-Fi cameras in a room.</li><li>Its only available on the Oppo Find X5 and… [+1489 chars]",
    },
    {
      source: { id: null, name: "Gadgets Now" },
      author: "Gadgets Now Bureau",
      title:
        "Samsung to enter laptop market in India: Models, specs and more - Gadgets Now",
      description:
        "Samsung seems set to take on HP, Dell, Acer and Lenovo in India's laptop market. The company's recently-unveiled Galaxy Book 2 series has listed on its India website. Samsung Galaxy Book 2 series is successor to Galaxy Book laptops that launched globally in 2…",
      url: "https://www.gadgetsnow.com/slideshows/samsung-to-enter-laptop-market-in-india-models-specs-and-more/photolist/90061641.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90061657,width-800,resizemode-4,imgsize-289330/share.jpg",
      publishedAt: "2022-03-08T03:14:00Z",
      content:
        "Galaxy Book 2 comes with Samsungs own apps and services built-in just like Galaxy smartphones. The laptop will includes apps like Smart Switch, Single Sign on, Gallery, Smart Share, Link to Windows, … [+26 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Michail",
      title:
        "Samsung stops shipping chargers with its new Galaxy A series phones in the US - GSMArena.com news - GSMArena.com",
      description: "Future Galaxy M-series phones are expected to follow.",
      url: "https://www.gsmarena.com/samsung_stops_shipping_chargers_with_its_new_galaxy_a_series_phones_in_the_us-news-53455.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/samsung-no-chargers-galaxy-a-series-usa/-952x498w6/gsmarena_00.jpg",
      publishedAt: "2022-03-08T03:06:01Z",
      content:
        "Last year Samsung began shipping its flagship Galaxy S21 series phones without bundled chargers and that trend carried over to the Galaxy Z Fold3 and Z Flip3 as well as the brand new Galaxy S22 serie… [+577 chars]",
    },
    {
      source: { id: null, name: "Gizbot" },
      author: "Sharmishte Datti",
      title:
        "Garena Free Fire Max Redeem Codes For March 8: All New Codes And Steps To Claim Them - Gizbot",
      description:
        "Garena Free Fire Max redeem codes for today, March 8 are available now. The codes bring in new rewards and upgrades, like always. For the unaware, the Free Fire Max redeem codes are largely similar to the Free Fire redeem codes that were available before it w…",
      url: "https://www.gizbot.com/gaming/news/garena-free-fire-max-redeem-codes-for-march-8-all-new-codes-and-steps-to-claim-them-079550.html",
      urlToImage:
        "https://www.gizbot.com/img/2022/03/free-fire-max-redeem-codes-for-march-8-1646708393.jpg",
      publishedAt: "2022-03-08T03:02:04Z",
      content:
        "Garena Free Fire Max redeem codes for today, March 8 are available now. The codes bring in new rewards and upgrades, like always. For the unaware, the Free Fire Max redeem codes are largely similar t… [+3442 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "Dan Goodin",
      title:
        "Linux has been bitten by its most high-severity vulnerability in years - Ars Technica",
      description:
        "Dirty Pipe has the potential to smudge people using Linux and Linux derivitives.",
      url: "https://arstechnica.com/information-technology/2022/03/linux-has-been-bitten-by-its-most-high-severity-vulnerability-in-years/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/03/shark-0-1-760x380.jpeg",
      publishedAt: "2022-03-08T02:43:10Z",
      content:
        "43 with 37 posters participating\r\nLinux has yet another high-severity vulnerability that makes it easy for untrusted users to execute code capable of carrying out a host of malicious actions includin… [+4783 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Sony Xperia 10 IV new leaks show familiar design - ANI News",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYdr1noJxZ80",
      urlToImage: null,
      publishedAt: "2022-03-08T01:41:45Z",
      content: null,
    },
    {
      source: { id: null, name: "Sportskeeda" },
      author: "Shane Foley",
      title:
        "The best moveset for Lycanroc Dusk and Midnight in Pokemon GO - Sportskeeda",
      description:
        "Coming with the Season of Alola, Lycanroc gives players not one but two forms to work with in Pokemon GO.",
      url: "https://www.sportskeeda.com/pokemon/the-best-moveset-lycanroc-dusk-midnight-pokemon-go",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2022/03/fee31-16466882124190.png",
      publishedAt: "2022-03-08T01:11:46Z",
      content:
        "Coming with the Season of Alola, Lycanroc gives players not one but two forms to work with in Pokemon GO.\r\nFans whove played through Generation VII may remember Lycanroc from being on Olivias Kahuna … [+1767 chars]",
    },
    {
      source: { id: null, name: "VentureBeat" },
      author: "Dean Takahashi",
      title:
        "EA soft launches Apex Legends Mobile in 10 countries - VentureBeat",
      description:
        "Apex Legends Mobile is getting a soft launch in 10 countries as Electronic Arts tries to take its popular battle royale to mobile players.",
      url: "https://venturebeat.com/2022/03/07/ea-soft-launches-apex-legends-mobile-in-10-countries/",
      urlToImage:
        "https://venturebeat.com/wp-content/uploads/2022/03/apex-mobile-custom-image-soft-launch.png.adapt_.1920w.jpg?w=1200&strip=all",
      publishedAt: "2022-03-08T01:02:00Z",
      content:
        "Apex Legends Mobile is getting a soft launch today in 10 countries as Electronic Arts tries to take its popular battle royale to mobile players.\r\nRespawn Entertainments Apex Legends has been a huge f… [+2928 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Material You's dynamic theme generator lands on AOSP as Android 12L is released - Android Police",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiRGh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL21hdGVyaWFsLXlvdS1tb25ldC10aGVtZXMtYW5kcm9pZC0xMmwv0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T23:59:00Z",
      content: null,
    },
    {
      source: { id: null, name: "AppleInsider" },
      author: "Darryl Boxberger",
      title:
        "'Mac Studio' and new Apple display are 'ready to go' for Apple Event - AppleInsider",
      description:
        'The more powerful Mac desktop computer and a new Apple external display are complete and "ready to go," and a reputable leaker says that they are expected to debut at Tuesday\'s Apple Event.',
      url: "https://appleinsider.com/articles/22/03/07/mac-studio-and-new-apple-display-are-ready-to-go-for-apple-event",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/46655-92123-Apple-Event-xl.jpg",
      publishedAt: "2022-03-07T23:55:45Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1414 chars]",
    },
    {
      source: { id: null, name: "AppleInsider" },
      author: "Amber Neely",
      title:
        "New iPad Air rumored to have Apple Silicon M1 processor - AppleInsider",
      description:
        "Apple's \"Peek Performance\" event kicks off on Tuesday, and sources suggest that the new iPad Air may be the next in Apple's lineup to transition to the M1 Apple Silicon processor.",
      url: "https://appleinsider.com/articles/22/03/07/new-ipad-air-rumored-to-have-apple-silicon-m1-processor",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/38609-73574-Apple-Pencil-2-xl.jpg",
      publishedAt: "2022-03-07T22:49:51Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1404 chars]",
    },
    {
      source: { id: null, name: "PCMag.com" },
      author: "Michael Kan",
      title:
        "Nvidia Mulls Continuing RTX 3000 Sales Even After Next-Gen GPUs Launch - PCMag",
      description:
        "Nvidia may continue to manufacture the RTX 3000 products for some time, given the continued high demand for graphics cards, according to the company's CFO.",
      url: "https://www.pcmag.com/news/nvidia-mulls-continuing-rtx-3000-sales-even-after-next-gen-gpus-launch",
      urlToImage:
        "https://i.pcmag.com/imagery/articles/05ghNtEH6bIa07dKiXETCer-1.fit_lim.size_1200x630.v1646683750.jpg",
      publishedAt: "2022-03-07T21:17:17Z",
      content:
        "Still can’t find an RTX 3000 graphics card? Well, they may be around for a while, even after Nvidia launches the company’s next-generation products.\r\nThe company is mulling keeping the RTX 3000 serie… [+2304 chars]",
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Mahmoud Itani",
      title:
        "WhatsApp’s iOS-exclusive blur tool could soon roll out for Android users - XDA Developers",
      description:
        "WhatsApp's blur tool has been available on iOS for a long time. The company is finally working on bringing it to its Android app.",
      url: "https://www.xda-developers.com/whatsapps-blur-tool-soon-roll-out-android/",
      urlToImage: "https://www.xda-developers.com/files/2021/01/whatsapp.jpg",
      publishedAt: "2022-03-07T21:08:00Z",
      content:
        "WhatsApp is notorious for its slow development when compared to some of its rivals. It takes the company a long time to come up with new features, and typically they lack originality. That’s surprisi… [+1640 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Emma Roth",
      title:
        "Ubisoft and Take-Two are also blocking game sales in Russia - The Verge",
      description:
        "Ubisoft and Take-Two Interactive are suspending the new sales of games in Russia due to the country’s invasion of Ukraine. While Ubisoft says it’s banning digital and physical sales, Take-Two is blocking new sales and installations.",
      url: "https://www.theverge.com/2022/3/7/22965890/ubisoft-take-two-blocking-game-sales-russia-ukraine-invasion",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/6sRQAWUlL7gdQjAj22Cdyjn4Rls=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16309954/acastro_190528_1777_ubisoft_0001.0.jpg",
      publishedAt: "2022-03-07T19:32:30Z",
      content:
        "Following EA Games, CD Projekt Red, Activision Blizzard, and Epic Games\r\nIllustration by Alex Castro / The Verge\r\nUbisoft and Take-Two Interactive are suspending game sales in Russia in light of its … [+1588 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Here are all the Pixel bugfixes included in the March security patch Feature Drop update - Android Police",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiQGh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL21hcmNoLTIwMjItcGl4ZWwtdXBkYXRlLWNoYW5nZWxvZy_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T18:58:00Z",
      content: null,
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Corbin Davenport",
      title:
        "March Pixel Feature Drop includes Live Caption on calls, night mode in Snapchat, and more - XDA Developers",
      description:
        "The latest Google Pixel Feature Drop is now rolling out alongside the Android 12L update, with new features for Live Caption and Translate.",
      url: "https://www.xda-developers.com/pixel-feature-drop-march-2022/",
      urlToImage:
        "https://www.xda-developers.com/files/2021/10/Google-Pixel-6-Pro-Side-Front-Watermarked.jpg",
      publishedAt: "2022-03-07T18:49:00Z",
      content:
        "Google released the long-awaited Android 12L update on Monday, with many improvements to foldable phones, tablets, and other large-screen devices. However, if you have a Pixel phone, you’re also rece… [+2113 chars]",
    },
    {
      source: { id: null, name: "Android Central" },
      author:
        "AC Staff, Jeramy Johnson, Alex Dobie, Harish Jonnalagadda, Nicholas Sutrich, Derrek Lee",
      title: "Android Central's best of MWC 2022 - Android Central",
      description:
        "The companies and devices that shined brightest at MWC 2022",
      url: "https://www.androidcentral.com/phones/android-centrals-best-of-mwc-2022",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/xDRGrDL5RvE4YRvBhzjgkS-1200-80.png",
      publishedAt: "2022-03-07T18:48:31Z",
      content:
        "Believe it or not, Mobile World Congress 2022 has already come and gone! While the Android Central team didn't attend the conference in person this year, we were all over all of the exciting announce… [+6230 chars]",
    },
    {
      source: { id: null, name: "Motorsport.com" },
      author: "Luke Smith",
      title:
        "New official F1 Manager 2022 video game announced - Motorsport.com",
      description:
        "Formula 1 has announced a new management video game, F1 Manager 2022, that is set for release this summer.",
      url: "https://www.motorsport.com/f1/news/new-official-f1-manager-2022-video-game-announced/8786091/",
      urlToImage:
        "https://cdn-1.motorsport.com/images/amp/YMdQ3mg2/s6/esports-f1-manager-2022-unveil-2.jpg",
      publishedAt: "2022-03-07T18:27:40Z",
      content:
        "F1 Manager 2022 will be developed by Frontier Developments, which revealed a launch trailer for the new game on Monday as part of its announcement.\r\nIt is the first management game as part of a long … [+2194 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Dark theme boot screen spotted in testing for Chrome OS - Android Police",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiP2h0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2RhcmstdGhlbWUtYm9vdC1zY3JlZW4tY2hyb21lLW9zL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T16:34:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Threatpost" },
      author: "Tara Seals",
      title:
        "Critical Firefox Zero-Day Bugs Allow RCE, Sandbox Escape - Threatpost",
      description:
        "Both vulnerabilities are use-after-free issues in Mozilla's popular web browser.",
      url: "https://threatpost.com/firefox-zero-day-bugs-rce-sandbox-escape/178779/",
      urlToImage:
        "https://media.threatpost.com/wp-content/uploads/sites/103/2019/06/19084033/firefox_patch.jpg",
      publishedAt: "2022-03-07T16:19:15Z",
      content:
        "Both vulnerabilities are use-after-free issues in Mozilla’s popular web browser.Mozilla has released an emergency update for its Firefox browser that addresses two critical security vulnerabilities t… [+2849 chars]",
    },
    {
      source: { id: null, name: "91mobiles" },
      author: null,
      title:
        "Redmi Note 11 Pro series is launching on 9th March. Here’s all that we know till now! - 91mobiles Hindi News",
      description:
        "We have some great news for Redmi Note lovers as sources tell us that the upcoming Redmi Note 11 Pro series will be priced under Rs 20,000.",
      url: "https://www.91mobiles.com/hub/redmi-note-11-pro-series-launching-9th-march-all-we-know-till-now/",
      urlToImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Is-Redmi-really-pricing-its-best-Redmi-Note-ever-under-20k-We-have-some-great-news-for-all-tech-lovers.jpg",
      publishedAt: "2022-03-07T15:04:24Z",
      content:
        "Amidst a pandemic, a global chipset shortage, and a visible price rise over the years in Smartphone brands, we finally see a ray of hope with Redmi’s upcoming Redmi Note 11 Pro Series. Redmi Note lov… [+1591 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "Video Desk",
      title:
        "WhatsApp Chatbot To Become A One-Stop-Destination To Access Documents - Watch Video - India.com",
      description:
        "The WhatsApp chatbot is a conversational interface and for the reason, that immediate messaging platform is utilized by over 500 million Indians, accessing this paperwork turns straightforward.",
      url: "https://www.india.com/video-gallery/whatsapp-chatbot-to-become-a-one-stop-destination-to-access-documents-5273325/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/03/whatsappp-1.jpg",
      publishedAt: "2022-03-07T14:55:00Z",
      content:
        "WhatsApp Chatbot To Become A One-Stop-Destination- The WhatsApp chatbot interface will present entry to paperwork saved on a citizens DigiLocker. The federal government has additionally modified the … [+813 chars]",
    },
    {
      source: { id: null, name: "U.Today" },
      author: null,
      title:
        "Nvidia GPUs Get Hacked with Mining Limitations Removed, Here's What Happens Next - U.Today",
      description:
        "Following the most recent hack of Nvidia GPUs, hackers start blackmailing the company",
      url: "https://u.today/nvidia-gpus-get-hacked-with-mining-limitations-removed-heres-what-happens-next",
      urlToImage:
        "https://u.today/sites/default/files/styles/1200x900/public/2022-03/13156.jpg",
      publishedAt: "2022-03-07T14:44:40Z",
      content:
        "The most recent hack of Nvidia GPUs has increased the efficiency of GPUs from 20 to 40% according to WuBlockchain. Following the initial hack, criminals have blackmailed the company, threatening to r… [+1290 chars]",
    },
    {
      source: { id: null, name: "What Hi-Fi? US" },
      author: "Becky Scarrott",
      title:
        "Google's next-gen Pixel Buds could be controlled by swiping your skin - What Hi-Fi?",
      description:
        "Tapping the skin near the wearable may create a mechanical wave translated by sensors to on-device action",
      url: "https://www.whathifi.com/news/googles-next-gen-pixel-buds-could-be-controlled-by-swiping-your-skin",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/3RiDbPYK5ik7iS3LD2Kk6C-1200-80.jpg",
      publishedAt: "2022-03-07T13:44:06Z",
      content:
        "Google is certainly going in the right direction when it comes to AirPods-challenging earbuds, as proven by the five-star Google Pixel Buds A-Series. Now, it seems the company has some intriguing ide… [+2305 chars]",
    },
    {
      source: { id: null, name: "Gizchina.com" },
      author: null,
      title:
        "Samsung under hacker attack: 190GB of data stolen and published - Gizchina.com",
      description:
        "Samsung under hacker attack: 190GB of data stolen and published, potentially putting millions of Samsung smartphones at risk.",
      url: "https://www.gizchina.com/2022/03/07/samsung-under-hacker-attack-190gb-of-data-stolen-and-published/",
      urlToImage:
        "https://www.gizchina.com/wp-content/uploads/images/2021/12/Samsung-logo-1024x576.jpg",
      publishedAt: "2022-03-07T13:37:15Z",
      content:
        "There seems to be no respite in the digital world and the Lapsus group is again the protagonist after the NVIDIA case last week. The victim in this case is Samsung which has been the subject of a hug… [+2399 chars]",
    },
    {
      source: { id: null, name: "Gadgets Now" },
      author: "Gadgets Now Bureau",
      title:
        "Amazon smartphone upgrade days sale: Deals and discounts on smartphones from Samsung, Apple, OnePlus and more - Gadgets Now",
      description:
        "Samsung has announced Smartphone and TV Upgrade Days. The two-day sale is now live and will end on March 10. During the ongoing event, the e-commerce platform is offering a host of deals and offers on a range of latest smartphones, televisions and accessories…",
      url: "https://www.gadgetsnow.com/slideshows/amazon-smartphone-upgrade-days-sale-deals-and-discounts-on-smartphones-from-samsung-apple-oneplus-and-more/photolist/90056250.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90056451,width-800,resizemode-4,imgsize-18450/share.jpg",
      publishedAt: "2022-03-07T13:28:00Z",
      content:
        "Samsung has announced Smartphone and TV Upgrade Days. The two-day sale is now live and will end on March 10. During the ongoing event, the e-commerce platform is offering a host of deals and offers o… [+670 chars]",
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Kishan Vyas",
      title:
        "YouTube Music now lets you share your favorite songs to Snapchat Stories, Instagram integration still missing - XDA Developers",
      description:
        "The YouTube Music app for Android now finally lets you share your favorite songs to your Snapchat Stories. Read on to know more.",
      url: "https://www.xda-developers.com/youtube-music-now-lets-you-share-your-favorite-songs-to-snapchat-stories-instagram-integration-still-missing/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/03/YouTube-Music-Snapchat-story.jpg",
      publishedAt: "2022-03-07T13:28:00Z",
      content:
        "You can now finally share your favorite songs from YouTube Music to Snapchat Stories. We first learned about this feature all the way back in 2020. However, it wasn’t until December last year that th… [+1678 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Tech Desk",
      title:
        "Here’s why you should avoid buying these Apple products right now - The Indian Express",
      description:
        "Here's why you shouldn't buy the iPhone SE 2020, iPad Air 4, Intel Mac mini and 13-inch MacBook Pro with M1 chip right now.",
      url: "https://indianexpress.com/article/technology/tech-news-technology/heres-why-you-should-avoid-buying-these-apple-products-right-now-7804570/",
      urlToImage: "https://images.indianexpress.com/2022/03/Apple-Store-.jpg",
      publishedAt: "2022-03-07T13:27:23Z",
      content:
        "If you are planning to upgrade your iPhone or MacBook, read this article till the end. Apple last week announced that it will be holding a special press event on March 8. While the company didnt reve… [+4193 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Realme C35 vs Redmi 10 Prime vs Vivo Y21: Here’s how specs of these affordable smartphones compare - Times of India",
      description:
        "Realme has launched the Realme C35 smartphone in India. The device joins the Realme C25Y, Realme C25s, Realme C11, Realme C21 and other smartphones in",
      url: "https://timesofindia.indiatimes.com/gadgets-news/realme-c35-vs-redmi-10-prime-vs-vivo-y21-heres-how-specs-of-these-affordable-smartphones-compare/articleshow/90053591.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90054555,width-1070,height-580,imgsize-457765,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-07T12:11:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Play Epic Store Games on Your Steam Deck - CNET",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D402M-OfUbQM",
      urlToImage: null,
      publishedAt: "2022-03-07T12:00:03Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Microsoft may soon bring another Windows 11 update - Times of India",
      description:
        "Microsoft is gearing up to launch another update for the Windows 11 OS, codenamed version 22H2",
      url: "https://timesofindia.indiatimes.com/gadgets-news/microsoft-may-soon-bring-another-windows-11-update/articleshow/90053962.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90053959,width-1070,height-580,imgsize-16070,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-03-07T11:46:00Z",
      content: null,
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Pranob Mehrotra",
      title:
        "Samsung adds Galaxy S22 and Galaxy Tab S8 series devices to its Remote Test Lab - XDA Developers",
      description:
        "Samsung has added the Galaxy S22 and Galaxy Tab S8 series devices to its Remote Test Lab Service. Read on to learn more.",
      url: "https://www.xda-developers.com/samsung-adds-galaxy-s22-galaxy-tab-s8-devices-remote-test-lab/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/02/Samsung-Galaxy-Tab-S8-Ultra-Graphite-Galaxy-S22-Plus-Phantom-White_Marketing-Image_80499.jpg",
      publishedAt: "2022-03-07T11:45:00Z",
      content:
        "In a bid to help app developers test their apps on its latest flagships, Samsung has now added the Galaxy S22 and Galaxy Tab S8 series devices to its Remote Test Lab. For the unaware, Samsung’s Remot… [+1627 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Michail",
      title:
        "Google Pixel 6a listed on Geekbench with Tensor chip - GSMArena.com news - GSMArena.com",
      description: "It managed identical scores to the Pixel 6 Pro.",
      url: "https://www.gsmarena.com/google_pixel_6a_listed_on_geekbench_with_tensor_chip-news-53444.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/pixel-6a-geekbench/-952x498w6/gsmarena_00.jpg",
      publishedAt: "2022-03-07T11:27:01Z",
      content:
        "There are plenty of leaks of an upcoming Pixel 6a due to launch sometime in the next months. The phone is expected to offer a similar look to the Pixel 6 and 6 Pro but with toned-down specs and a mor… [+766 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Samsung Galaxy M33, Galaxy M23 launched with 6.6-inch display - India Today",
      description:
        "The newly launched Samsung Galaxy M33 and Galaxy M23 smartphones have almost similar specs with minor differences.",
      url: "https://www.indiatoday.in/technology/news/story/samsung-galaxy-m33-galaxy-m23-launched-with-6-6-inch-display-1921757-2022-03-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Samsung_Galaxy_M33_launch-647x363.jpeg?eR0PFqH.lXyjK1JEem._ooOcvlx982pW",
      publishedAt: "2022-03-07T11:00:06Z",
      content: null,
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "The latest WhatsApp beta makes it much easier to record voice messages - Android Police",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiTGh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL3doYXRzYXBwLWJldGEtZWFzaWVyLXRvLXJlY29yZC12b2ljZS1tZXNzYWdlcy_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T10:35:00Z",
      content: null,
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Realme 9 5G series India launch is on March 10, here is what to expect - India Today",
      description:
        "Realme is bringing two new phones and they are called the Realme 9 5G and Realme 9 SE 5G. Both new phones will join the Realme 9 Pro and 9 Pro Plus in completing the 9 series.",
      url: "https://www.indiatoday.in/technology/news/story/realme-9-5g-series-india-launch-is-on-march-10-here-is-what-to-expect-1921741-2022-03-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/realme9series_07032022-647x363.jpeg?1YRectWJvtoHwpt8oHgEIgnmvlNMyCc4",
      publishedAt: "2022-03-07T10:30:17Z",
      content: null,
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Pranob Mehrotra",
      title:
        "How to enable call recording on the Samsung Galaxy S22 series - XDA Developers",
      description:
        "Just got yourself a new Samsung Galaxy S22 series device? Here's how you can enable automatic and manual call recording on it.",
      url: "https://www.xda-developers.com/how-to-enable-call-recording-samsung-galaxy-s22/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/02/Samsung-Galaxy-S22-Featured-Image.jpg",
      publishedAt: "2022-03-07T09:57:00Z",
      content:
        "Android users had to rely on third-party apps to record phone calls for the longest time. But these days, almost all Android OEMs natively offer call recording support on their devices, including Sam… [+2448 chars]",
    },
    {
      source: { id: null, name: "XDA Developers" },
      author: "Pranob Mehrotra",
      title:
        "Realme might offer an 80W variant of the upcoming Realme GT Neo 3 - XDA Developers",
      description:
        "New leak reveals more details about the upcoming Realme GT Neo 3. Read on to learn more about Realme's upcoming 150W fast charging device.",
      url: "https://www.xda-developers.com/realme-gt-neo-3-leaked-specs/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/03/Realme-GT-Neo-3-leaked-render-on-gradient-background.jpg",
      publishedAt: "2022-03-07T08:45:00Z",
      content:
        "Realme recently showcased its new 150W wired fast charging tech at MWC in Barcelona. Following the demonstration, the company confirmed that the new tech would debut with the upcoming Realme GT Neo 3… [+2572 chars]",
    },
    {
      source: { id: null, name: "91mobiles" },
      author: null,
      title:
        "MediaTek Dimensity 8100 beats Snapdragon 8 Gen 1 in Geekbench despite not being a flagship chipset - 91mobiles",
      description:
        "The Dimensity 8100 has beaten the Snapdragon 8 Gen 1 in the Geekbench multi-core test despite not being a flagship chipset.",
      url: "https://www.91mobiles.com/hub/mediatek-dimensity-8100-beats-snapdragon-8-gen-1-geekbench/",
      urlToImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/03/MediaTek-Dimensity-8000-SoC-trumps-Snapdragon-8-Gen-1-SoC-on-Geekbench-1200X630.png",
      publishedAt: "2022-03-07T08:00:37Z",
      content:
        "As you can see from the screenshot in the tweet, the device codenamed Realme RMX3562, which is supposed to be the rumoured Realme GT Neo 3, has scored 965 on the single-core benchmark and 4071 on the… [+1772 chars]",
    },
    {
      source: { id: null, name: "SamMobile" },
      author: "SamMobile",
      title:
        "Samsung’s shareholders want to hold TM Roh accountable for recent events - SamMobile",
      description:
        "Not too long ago, Samsung restructured its business to integrate its mobile division with Samsung Electronics. It meant that Samsung's ...",
      url: "https://www.sammobile.com/news/samsungs-shareholders-want-to-tm-roh-accountable-for-recent-events/",
      urlToImage:
        "https://www.sammobile.com/wp-content/uploads/2022/01/Samsung-Galaxy-Unpacked-2022-TM-Roh-720x480.jpg",
      publishedAt: "2022-03-07T07:54:00Z",
      content:
        "Not too long ago, Samsung restructured its business to integrate its mobile division with Samsung Electronics. It meant that Samsung’s mobile division was now under TM Roh, a flamboyant personality w… [+1619 chars]",
    },
    {
      source: { id: null, name: "Internet" },
      author: "https://www.facebook.com/thehackernews",
      title:
        "SharkBot Banking Malware Spreading via Fake Android Antivirus App on Google Play Store - The Hacker News",
      description:
        "A fake Android antivirus application distributed through the Google Play Store was found to have infected devices with SharkBot banking malware.",
      url: "https://thehackernews.com/2022/03/sharkbot-banking-malware-spreading-via.html",
      urlToImage:
        "https://thehackernews.com/new-images/img/a/AVvXsEjhxiP5RGak0ZfoMWqFZ-fnn_hgWW7M8TwFfZpdb5PLzNlCZQnvIPSQdyTS8WN1GQgJ9koud4Tf_lLplCJ4QIRqf-4nILSTt8fjFPo3Sz4RDBjhHMsq-fC_dLTsVOoOPeI4Iy4D6x7hWbG4VISZhooXcvlE4pDXAjcuGtQ7xkjup9xVY29evUvMcTD_",
      publishedAt: "2022-03-07T07:36:00Z",
      content:
        "The threat actor behind a nascent Android banking trojan named SharkBot has managed to evade Google Play Store security barriers by masquerading as an antivirus app.\r\nSharkBot, like its malware count… [+2221 chars]",
    },
    {
      source: { id: null, name: "91mobiles" },
      author: null,
      title:
        "Realme GT 2 Pro reportedly launching in India in March; colour options and RAM/ storage variants leaked - 91mobiles",
      description:
        "Realme GT 2 Pro will reportedly launch in India later this month in 8GB/128GB and 12GB/256GB configurations and in Steel Black, Paper White, and Paper Green colours.",
      url: "https://www.91mobiles.com/hub/realme-gt-2-pro-india-launch-march-ram-storage-colour-variants-leak/",
      urlToImage:
        "https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Realme-GT-2-Pro.jpg",
      publishedAt: "2022-03-07T07:27:52Z",
      content:
        "Realme GT 2 Pro colours, variants\r\nAccording to a MySmartPrice report, the Realme GT 2 Pro will be available in two configurations: 8GB/128GB and 12GB/256GB. It is said to be available in Steel Black… [+1459 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Yordan",
      title:
        "Vivo X Fold schematics reveal quad cam setup on the back - GSMArena.com news - GSMArena.com",
      description: "The phone’s hardware will be “absolutely top-level”.",
      url: "https://www.gsmarena.com/vivo_x_fold_schematics_reveal_quad_cam_setup_on_the_back-news-53440.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/03/vivo-x-fold-schematics-/-952x498w6/gsmarena_001.jpg",
      publishedAt: "2022-03-07T07:26:01Z",
      content:
        "vivo's upcoming foldable flagship will be called X Fold, multiple rumors suggested. Today, the trustworthy leakster Digital Chat Station posted schematics of the upcoming foldable, revealing a punch-… [+1149 chars]",
    },
    {
      source: { id: null, name: "LatestLY" },
      author: "Jaspreetsingh Mankoo",
      title:
        "Poco M4 Pro First Online Sale Today at 12 Noon via Flipkart - LatestLY",
      description:
        "Poco M4 Pro will be available for purchase today in India. The handset debuted in India last week, and its first sale will commence at 12 noon via Flipkart.",
      url: "https://www.latestly.com/technology/poco-m4-pro-first-online-sale-today-at-12-noon-via-flipkart-3443607.html",
      urlToImage:
        "https://st1.latestly.com/wp-content/uploads/2022/03/resize-17-1-784x441.jpg",
      publishedAt: "2022-03-07T05:13:31Z",
      content:
        "Poco M4 Pro will be available for purchase today in India. The handset debuted in India last week, and its first sale will commence at 12 noon via Flipkart. Buyers will get an instant Rs 1,000 discou… [+1690 chars]",
    },
    {
      source: { id: null, name: "LatestLY" },
      author: "Jaspreetsingh Mankoo",
      title:
        "Asus 8z To Go on Sale Today in India via Flipkart, Check Offers Here - LatestLY",
      description:
        "Asus 8z will be made available for the first sale in India. The device was launched in the country last week, and today, it will go on sale at 12 noon via Flipkart.",
      url: "https://www.latestly.com/technology/asus-8z-to-go-on-sale-today-in-india-via-flipkart-check-offers-here-3443435.html",
      urlToImage:
        "https://st1.latestly.com/wp-content/uploads/2022/02/resize1-15-2-784x441.jpg",
      publishedAt: "2022-03-07T04:14:10Z",
      content:
        "Asus 8z will be made available for the first sale in India. The device was launched in the country last week, and today, it will go on sale at 12 noon via Flipkart. Customers purchasing the handset w… [+1565 chars]",
    },
    {
      source: { id: null, name: "Sportskeeda" },
      author: 'Amlan "M4DM4N" Roy',
      title:
        "Rainbow Six Siege Y7S1: What features are arriving with Demon Veil? - Sportskeeda",
      description:
        "Rainbow Six Siege’s seventh year kicks in with its first season, Demon Veil, which brings a new defender operator and tons of changes. The next season is expected to arrive around March 15, 2022.",
      url: "https://www.sportskeeda.com/esports/rainbow-six-siege-y7s1-what-features-arriving-demon-veil",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2022/03/9a78f-16466019957359-1920.jpg",
      publishedAt: "2022-03-07T03:20:12Z",
      content:
        "Rainbow Six Sieges seventh year kicks in with its first season, Demon Veil, which brings a new defender operator and tons of changes. The next season is expected to arrive around March 15, 2022.\r\nUbi… [+1983 chars]",
    },
    {
      source: { id: null, name: "ComicBook.com" },
      author: "Logan Moore",
      title: "Halo Infinite Reveals Season 2 Release Date - ComicBook.com",
      description:
        "343 Industries has formally announced when Season 2 of Halo Infinite's multiplayer will be kicking off. When the multiplayer portion of Halo Infinite first launched in November 2021, 343 said at the time that the game's inaugural season would be lasting longe…",
      url: "https://comicbook.com/gaming/news/halo-infinite-multiplayer-season-2-release-date/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/2021/09/12/74df81f8-b415-4256-8319-2ba4f6655f9b/halo-infinite.png?width=1200",
      publishedAt: "2022-03-07T00:01:00Z",
      content:
        "343 Industries has formally announced when Season 2 of Halo Infinite's multiplayer will be kicking off. When the multiplayer portion of Halo Infinite first launched in November 2021, 343 said at the … [+2125 chars]",
    },
    {
      source: { id: null, name: "Essentially Sports" },
      author: null,
      title:
        "Former Hogwarts Legacy Dev Gives Cryptic Take on a Much-Needed Update Coming Soon - EssentiallySports",
      description:
        "With the Harry Potter universe-based Hogwarts Legacy being expected with eagerness, this new report will surely excite fans.",
      url: "https://www.essentiallysports.com/esports-news-former-hogwarts-legacy-dev-gives-cryptic-take-on-a-much-needed-update-coming-soon/",
      urlToImage:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/hogwarts-legacy.jpg",
      publishedAt: "2022-03-06T17:28:00Z",
      content:
        "It is safe to say that the young adult novel/movie franchise, Harry Potter, has left its footprint in all of pop culture. The franchise and its expanded universe are still quite popular and relevant.… [+2454 chars]",
    },
    {
      source: { id: null, name: "Sportskeeda" },
      author: "Ashim",
      title:
        "What's the fastest way to land in BGMI and PUBG Mobile? (March 2022) - Sportskeeda",
      description:
        "Battlegrounds Mobile India (BGMI) is the variant of PUBG Mobile that was explicitly launched for Indian users.",
      url: "https://www.sportskeeda.com/bgmi/what-s-fastest-way-land-bgmi-pubg-mobile-march-2022",
      urlToImage:
        "https://staticg.sportskeeda.com/editor/2022/03/e7120-16465571358740-1920.jpg",
      publishedAt: "2022-03-06T14:25:14Z",
      content:
        "Battlegrounds Mobile India (BGMI) is the variant of PUBG Mobile that was explicitly launched for Indian users. The game has continued to grow throughout the years, but the fundamentals have remained … [+4270 chars]",
    },
    {
      source: { id: null, name: "Macworld" },
      author: "Michael Simon",
      title:
        "Why switching to the 14-inch MacBook Pro was a surprisingly huge upgrade - Macworld",
      description:
        "Jumping from the M1 to the M1 Pro is a bigger leap than I expected.",
      url: "https://www.macworld.com/article/618899/14-inch-macbook-pro-switch-display-processor-touch-bar.html",
      urlToImage:
        "https://www.macworld.com/wp-content/uploads/2022/03/macbook-pro-13-vs-macbook-pro-13.jp4_-6.jpg?quality=50&strip=all&w=1024",
      publishedAt: "2022-03-06T14:25:00Z",
      content:
        "Skip to contentType your search and hit enter\r\nBefore we start, I have a confession: It’s been about 10 years since I bought a MacBook. I’ve used plenty of them over the years through work and on loa… [+6030 chars]",
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

export default Technology;
