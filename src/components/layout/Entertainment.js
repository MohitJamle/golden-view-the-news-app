import React from "react";
import classes from "./Card.module.css";

const Entertainment = () => {
  const articles = [
    {
      source: { id: null, name: "Bollywood Life" },
      author: "BollywoodLife",
      title:
        "TV stars who were accused of cheating on their partners - Bollywood Life",
      description:
        "Divya Agarwal and Varun Sood's sudden breakup has left everyone shocked. Some are accusing him of cheating on her. Here is a list of other TV stars who have been accused of unfaithfulness.",
      url: "https://www.bollywoodlife.com/photos/varun-sood-karan-kundrra-priyank-sharma-and-others-tv-stars-who-were-accused-of-cheating-on-their-partners-tv-galleries-2023832/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/03/Varun-4-600x315.png",
      publishedAt: "2022-03-08T11:43:14Z",
      content:
        "Karan Kundrra and Anusha Dandekar were considered to be a perfect couple. So much that they were mentors of love school. However, they parted ways and later Anusha in one of her posts hinted that she… [+642 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        '"Onwards And Upwards": Just Janhvi Kapoor Praising Sister Anshula\'s Drastic Weight Loss - NDTV Movies',
      description:
        "\"It's been a 2-year long journey, and I'm still a work in progress,\" wrote Anshula Kapoor",
      url: "https://www.ndtv.com/entertainment/onwards-and-upwards-just-janhvi-kapoor-praising-sister-anshulas-drastic-weight-loss-2810571",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/vllia3ag_anshula-kapoor_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T10:58:08Z",
      content:
        "Anshula on her weight loss journey (Courtesy: anshulakapoor)\r\nHighlights\r\n<ul><li>Arjun Kapoor's sister Anshula has lost a lot of weight\r\n</li><li>She recently shared her journey\r\n</li><li>Janhvi Kap… [+2257 chars]",
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
      source: { id: null, name: "Greatandhra.com" },
      author: "IANS",
      title:
        "Mahesh Babu shares pic of his wife, daughter, mom.. - Greatandhra",
      description:
        "Tollywood superstar Mahesh Babu posted an adorable write-up for the women in his family on International Women's Day.",
      url: "https://www.greatandhra.com/movies/news/mahesh-babu-shares-pic-of-his-wife-daughter-mom-119581",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/mahesh_woman11646735145.jpg",
      publishedAt: "2022-03-08T10:25:45Z",
      content:
        "Tollywood superstar Mahesh Babu posted an adorable write-up for the women in his family on International Women's Day.\r\nMahesh shared a pic of his wife Namrata Shirodkar, daughter Sitara and mother In… [+1092 chars]",
    },
    {
      source: { id: null, name: "Greatandhra.com" },
      author: "Venkat",
      title:
        "Everything Set To Spread Negativity On 'Radhe Shyam' - Greatandhra",
      description:
        "Social media wars are common among the fans of different heroes. Films are getting glued with political color these days and that is becoming unavoidable.",
      url: "https://www.greatandhra.com/movies/news/everything-set-to-spread-negativity-on-radhe-shyam-119580",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/radheshyam61646734590.jpg",
      publishedAt: "2022-03-08T10:17:31Z",
      content:
        "Social media wars are common among the fans of different heroes. Films are getting glued with political color these days and that is becoming unavoidable. \r\nIt was openly discussed that the YCP gover… [+946 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: null,
      title:
        "Jacqueline Fernandez on ongoing controversies: 'I was possibly going through a bit of loneliness' - Times of India",
      description:
        "Bollywood beauty Shilpa Shetty Kundra had a rough phase last year after her husband Raj Kundra was arrested in the infamous pornography case. Although she was having the toughest time, Shilpa stayed strong and handled the situation with dignity. Now, the actr…",
      url: "https://timesofindia.indiatimes.com/videos/entertainment/hindi/jacqueline-fernandez-on-ongoing-controversies-i-was-possibly-going-through-a-bit-of-loneliness/videoshow/90076193.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/90076193/size-51750/90076193.jpg",
      publishedAt: "2022-03-08T10:13:29Z",
      content:
        "Bollywood beauty Shilpa Shetty\r\n Kundra had a rough phase last year after her husband Raj Kundra was arrested in the infamous pornography case. Although she was having the toughest time, Shilpa staye… [+1302 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Fardeen Khan opens up on father's death, health scare, and losing twins after wife's IVF: 'Natasha really suffered' - Hindustan Times",
      description:
        "Fardeen Khan said he needed some time off after his father Feroz Khan's death due to lung cancer in 2009. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/fardeen-khan-opens-up-on-father-s-death-health-scare-and-losing-twins-after-wife-s-ivf-natasha-really-suffered-101646728283533.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/fardeen_khan_1634376355938_1646728750305.jpg",
      publishedAt: "2022-03-08T09:56:40Z",
      content:
        "Actor Fardeen Khan, who is all set to make his comeback in Bollywood with horror drama Visfot, has opened up in detail about what kept him away from films for over a decade. Fardeen shared that he we… [+2581 chars]",
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
      source: { id: null, name: "News18" },
      author: "Entertainment Bureau",
      title:
        "Newlyweds Shibani Dandekar, Farhan Akhtar Exude Glamour in Latest Sexy Instagram Pics - News18",
      description:
        "Actress-singer Shibani Dandekar tied the knot with actor-producer Farhan Akhtar in an intimate wedding ceremony last month.",
      url: "https://www.news18.com/news/movies/newlyweds-shibani-dandekar-farhan-akhtar-exude-glamour-in-latest-sexy-instagram-pics-4848995.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/farhan-akhtar-and-shibani-dandekar-3-164672737316x9.jpg",
      publishedAt: "2022-03-08T08:16:51Z",
      content:
        "Actress-singer Shibani Dandekar tied the knot with actor-producer Farhan Akhtar in an intimate wedding ceremony last month. The 41-year-old artist shared some snapshots from a party on Instagram earl… [+1937 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Kerala balloon seller becomes Internet sensation overnight; story viral - Kalinga TV",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiamh0dHBzOi8va2FsaW5nYXR2LmNvbS9vZmZiZWF0L2tlcmFsYS1iYWxsb29uLXNlbGxlci1iZWNvbWVzLWludGVybmV0LXNlbnNhdGlvbi1vdmVybmlnaHQtcmVhZC12aXJhbC1zdG9yeS_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-08T07:28:46Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Kangana Ranaut amplifies doubt over Gangubai Kathiawadi BO figures days after rare praise: 'Kya majbooriyaan rahi hongi' - Hindustan Times",
      description:
        "Days after praising Alia Bhatt's Gangubai Kathiawadi for reviving theatres, Kangana Ranaut has now reacted to a blind article which claims the film's box office figures have been rigged. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/kangana-ranaut-amplifies-doubt-over-gangubai-kathiawadi-box-office-figures-being-rigged-kya-majbooriyaan-rahi-hongi-101646719285210.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/gangubai-kangana_1646720121417_1646720128813.jpg",
      publishedAt: "2022-03-08T07:08:11Z",
      content:
        "Kangana Ranaut has commented on Alia Bhatt's latest release Gangubai Kathiawadi yet again. The actor took a dig at the film's box office numbers which have supposedly been rigged, according to a blin… [+2204 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Entertainment Desk",
      title:
        "Concerned that Alia Bhatt might become ‘power drunk’, Mahesh Bhatt reveals he went to Amitabh Bachchan for advice - The Indian Express",
      description:
        "Mahesh Bhatt said that he found daughter Alia Bhatt's performance in Gangubai Kathiawadi 'astounding'. He added that Amitabh Bachchan wrote a 'generous' letter to Alia after watching the Sanjay Leela Bhansali film.",
      url: "https://indianexpress.com/article/entertainment/bollywood/alia-bhatt-power-drunk-mahesh-bhatt-amitabh-bachchan-7806338/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/amitabh-bachchan-alia-bhatt-mahesh-bhatt.jpg",
      publishedAt: "2022-03-08T06:34:22Z",
      content:
        "Filmmaker Mahesh Bhatt spoke about his daughter Alia Bhatt’s ‘astounding’ performance in the film Gangubai Kathiawadi, and revealed that Amitabh Bachchan wrote her a ‘generous’ letter after watching … [+2116 chars]",
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
      source: { id: null, name: "News18" },
      author: "Entertainment Bureau",
      title:
        "Rashami Desai, Umar Riaz Send Internet into Tizzy With Sizzling Dance Video; Watch Here - News18",
      description:
        "Rashami Desai and Umar Riaz grabbed many eyeballs for their growing closeness on Bigg Boss 15.",
      url: "https://www.news18.com/news/movies/rashami-desai-umar-riaz-send-internet-into-tizzy-with-sizzling-dance-video-watch-here-4848389.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/rashami-desai-and-umar-riaz-4-164671807116x9.jpg",
      publishedAt: "2022-03-08T05:46:03Z",
      content:
        "Getting a glance of Bigg Boss 15 contestants Rashami Desai with Umar Riaz is no less than a treat for fans, not just this, but they wait to see the duo together. With that being said, the Uttaran fam… [+1973 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Entertainment Desk",
      title:
        "Valimai vs Bheemla Nayak Box Office Update: Ajith And Pawan Kalyan Rule Worldwide - Check Detailed Collection - India.com",
      description:
        "Valimai vs Bheemla Nayak Box Office Update: Thala Ajith continues to rule while Pawan Kalyan slowly picks up at the worldwide box office. Check out the detailed collection report of both the films.",
      url: "https://www.india.com/entertainment/tamil-news-valimai-vs-bheemla-nayak-box-office-update-ajith-pawan-kalyan-rule-worldwide-check-detailed-collection-report-after-11-days-5274330/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/03/pjimage-2022-03-08T111429.193.jpg",
      publishedAt: "2022-03-08T05:46:00Z",
      content:
        "Valimai vs Bheemla Nayak Box Office Update: Thala Ajith’s Valimai might have gone slower at the domestic Box Office but it continues to ride better than Pawan Kalyan’s Bheemla Nayak at the worldwide … [+2121 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "What Akshay Kumar And Twinkle Khanna Posted After The Death Of Pet Dog Cleo - NDTV",
      description:
        "“We had 12 wonderful years with her,” wrote Twinkle Khanna about her pet dog",
      url: "https://www.ndtv.com/entertainment/heart-feels-heavy-and-empty-at-the-same-time-twinkle-khanna-and-akshay-kumar-mourn-pet-pooch-cleo-2809792",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/n3m2a64g_akshay-kumar_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T05:30:32Z",
      content:
        'Akshay Kumar posted this image. (courtesy: akshaykumar)\r\nHighlights\r\n<ul><li>"We had 12 wonderful years with her," wrote Twinkle \r\n</li><li> "I don\'t know how the heart can feel heavy," she wrote \r\n<… [+2363 chars]',
    },
    {
      source: { id: null, name: "Koimoi" },
      author: "Koimoi.com Team",
      title:
        "The Batman Box Office (Worldwide): Surpasses Expectations By Making $258 Million In Its Opening Weekend - Koimoi",
      description:
        "The Batman has churned in a whopping amount of $258 million at the box office worldwide on its opening weekend. Read on!",
      url: "https://www.koimoi.com/?p=883592",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/the-batman-has-collected-a-staggering-amount-of-258-million-at-worldwide-box-office-on-its-opening-weekend-001.jpg",
      publishedAt: "2022-03-08T04:42:23Z",
      content:
        "The Batman Has Collected $258 Million At The Box Office Worldwide(Photo Credit: Still From The Batman )\r\nThe Batman’s worldwide opening weekend box office numbers are in, and the Robert Pattinson sta… [+1950 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Trending: Sidharth Malhotra And Ishaan Khatter Third Wheeling With Madhuri Dixit And Her Dupatta - NDTV",
      description:
        "\"Thank you Netflix, you've made a young boy's dream come true,\" said Sidharth Malhotra",
      url: "https://www.ndtv.com/entertainment/trending-sidharth-malhotra-and-ishaan-khatter-third-wheeling-with-madhuri-dixit-and-her-dupatta-2809751",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/hap5jmu_madhuri_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T04:23:32Z",
      content:
        'Sidharth and Madhuri (L), Madhuri with Ishaan (R). (courtesy: sidmalhotra)\r\nHighlights\r\n<ul><li>Sidharth and Ishaan danced with Madhuri Dixit\r\n</li><li>"Cross that one off the bucket list," wrote Ish… [+1527 chars]',
    },
    {
      source: { id: null, name: "IndiaGlitz.com" },
      author: "IndiaGlitz",
      title:
        "Breaking! Director Bala and Muthumalar get divorced after 17 years of happy marriage - Tamil News - Telugu Cinema - IndiaGlitz",
      description:
        "Director Bala who is known for giving many hit films got divorced on March 5 at a family court with his wife Muthumalar after 17",
      url: "https://www.indiaglitz.com/director-bala-divorce-wife-muthumalar-after-17-years-bala-next-movie-update-tamil-news-309164",
      urlToImage:
        "https://1847884116.rsc.cdn77.org/tamil/news/bala-muthumalar832022mt-fc8.jpg",
      publishedAt: "2022-03-08T04:16:48Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Mira Rajput explains how she planned Misha, Zain’s wardrobe for bua Sanah Kapur's wedding - Hindustan Times",
      description:
        "Mira Rajput has shared an elaborate description of all that her kids wore at their aunt Sanah Kapur's wedding functions. She also shared a small video to share a glimpse of her two kids.  | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/mira-rajput-explains-how-she-planned-misha-zain-s-wardrobe-for-bua-sanah-kapur-s-wedding-101646709959285.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/08/1600x900/275199502_3106118512961544_3192028013443639597_n_1646710987821_1646711048015.jpg",
      publishedAt: "2022-03-08T04:12:20Z",
      content:
        "Shahid Kapoor and wife Mira Rajput recently attended the wedding of his sister Sanah Kapur in Mahabaleshwar. Their kids Misha and Zain also accompanied them at the multiple wedding functions. Mira ha… [+2070 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Entertainment Desk",
      title:
        "Abhishek Bachchan has a witty reply for a troll poking fun at his film career - The Indian Express",
      description:
        "Abhishek Bachchan has always been good at handling hate comments on social media. Here's how he tackled another troll on Twitter.",
      url: "https://indianexpress.com/article/entertainment/bollywood/abhishek-bachchan-witty-reply-troll-poking-fun-career-in-films-7806107/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/abhishek-bachchan.jpg",
      publishedAt: "2022-03-08T03:59:47Z",
      content:
        "Bollywood actor Abhishek Bachchan is a no-nonsense person when it comes to handling trolls on social media. He often gives it back to haters with his wit, and the actor did it once again on Monday, w… [+1446 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Entertainment Desk",
      title:
        "Alia Bhatt goes global, joins Gal Gadot and Jamie Dornan in Netflix's Heart of Stone - The Indian Express",
      description:
        "Alia Bhatt has signed her first international project, a Netflix thriller titled Heart of Stone, opposite Gal Gadot and Jamie Dornan.",
      url: "https://indianexpress.com/article/entertainment/bollywood/alia-bhatt-goes-global-joins-gal-gadots-netflix-show-heart-of-stone-7806070/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/Alia-Bhatt-Gal-Gadot-Heart-of-Stone.jpg",
      publishedAt: "2022-03-08T03:51:53Z",
      content:
        "Alia Bhattis all set to make her Hollywood debut, in a Netflix thriller titled Heart of Stone. The movie also features Wonder Woman star Gal Gadot and 50 Shades of Grey star Jamie Dornan.Netflix on T… [+2209 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Shilpa Shetty And John Abraham Did The Obvious At This Mini Dostana Reunion - NDTV Movies",
      description:
        '"The reunion we didn\'t know we needed," Shilpa captioned the post',
      url: "https://www.ndtv.com/entertainment/shilpa-shetty-and-john-abraham-did-the-obvious-at-this-mini-dostana-reunion-2809705",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/qniuq5og_shilpa-shetty_625x300_08_March_22.jpg",
      publishedAt: "2022-03-08T03:43:58Z",
      content:
        "John and Shilpa in a still from the video. (courtesy: theshilpashetty)\r\nHighlights\r\n<ul><li>Shilpa Shetty shared a video from the meeting\r\n</li><li>The two featured together in a Dostana song\r\n</li><… [+1637 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Entertainment Desk",
      title:
        "Lock Upp: Anjali Arora Reveals Past Secret to Save Herself From Elimination, Fans Say 'Ye Kaisa Secret Hain' - India.com",
      description:
        "Lock Upp contestant Anjali Arora gets trolled for sharing a 'stupid' secret to save herself from elimination.",
      url: "https://www.india.com/entertainment/lock-upp-anjali-arora-reveals-past-secret-to-save-herself-from-elimination-fans-say-ye-kaisa-secret-hain-5274099/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2022/03/pjimage-41-2.jpg",
      publishedAt: "2022-03-08T03:37:22Z",
      content:
        "Lock Upp: Kangana Ranaut’s controversial reality show Lock Upp‘s first elimination happened on Sunday with Chakrapani. The Judgement Day episode in which the contestants are eliminated from the show … [+1720 chars]",
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
      source: { id: null, name: "The Indian Express" },
      author: "Sana Farzeen",
      title:
        "Asked to choose between Ajay Devgn, Shahid Kapoor and Sidharth Malhotra, here’s what Rudra actor Rashii Khanna said - The Indian Express",
      description:
        "Actor Raashii Khanna talks about her latest project Rudra: The Edge of Darkness, journey from Tollywood to the Hindi industry and her future projects.",
      url: "https://indianexpress.com/article/entertainment/web-series/rudra-actor-raashii-khanna-asked-to-choose-between-ajay-devgn-shahid-kapoor-sidharth-malhotra-7804882/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/raashii-khanna-rudra-aliyah-choksi-ajay-devgn.jpg",
      publishedAt: "2022-03-08T02:49:21Z",
      content:
        "After winning accolades down south, Raashii Khanna made her big OTT debut with Rudra: The Edge of Darkness, opposite Ajay Devgn. Playing Aliyah Choksi, a child prodigy who is accused of murdering her… [+6931 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Entertainment Desk",
      title:
        "Madhuri Dixit on her working equation with the Khans: Salman is naughty, SRK is chivalrous, Saif’s one-liners are very funny - The Indian Express",
      description:
        "Madhuri Dixit recently spoke about working with Shah Rukh Khan, Salman Khan, Saif Ali Khan and Akshay Kumar.",
      url: "https://indianexpress.com/article/entertainment/bollywood/madhuri-dixit-on-working-equation-with-shah-rukh-khan-salman-saif-7805456/",
      urlToImage:
        "https://images.indianexpress.com/2022/03/madhuri-dixit-salman-khan-shah-rukh.jpg",
      publishedAt: "2022-03-08T02:34:27Z",
      content:
        "Madhuri Dixit is currently basking in the success of her digital debut The Fame Game. The 90s heartthrob has shared screen space with most male stars of her time and in a recent interview, she spoke … [+1891 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Bheemla Nayak box office collection Day 11: Pawan Kalyan film is a blockbuster - India Today",
      description:
        "Pawan Kalyan and Rana Daggubati's Bheemla Nayak has turned out to be profitable for everyone associated with the film. Directed by Saagar K Chandra, the film is a remake of Ayyappanum Koshiyum.",
      url: "https://www.indiatoday.in/movies/regional-cinema/story/bheemla-nayak-box-office-collection-day-11-pawan-kalyan-film-is-a-blockbuster-1921959-2022-03-08",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Pawan_Kalyan_bheemla_Nayak_box-647x363.jpeg?fYbLcEU575cJGpBKjpgJHLzbam9By17y",
      publishedAt: "2022-03-08T02:10:28Z",
      content: null,
    },
    {
      source: { id: null, name: "Greatandhra.com" },
      author: "Srinivas",
      title: "Prabhas Gives Clarity on Salaar and RD.. - Greatandhra",
      description:
        "There have been many news reports going on about Prabhas’s various projects.",
      url: "https://www.greatandhra.com/movies/news/prabhas-gives-clarity-on-salaar-and-rd-119565",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/prabhas_31646703967.jpg",
      publishedAt: "2022-03-08T01:46:19Z",
      content:
        "There have been many news reports going on about Prabhas’s various projects.\r\nTwo news particularly caught the attention of his fans. One is splitting ‘Salaaar’ into two parts, and the other is ‘Raja… [+796 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Horoscope Today, March 8, 2022: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces - India Today",
      description:
        "Horoscope Today, March 8, 2022: Read the astrological prediction for Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius and Pisces, here.",
      url: "https://www.indiatoday.in/horoscopes/story/horoscope-today-march-8-2022-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-1921872-2022-03-08",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Horoscope_today_2022_3-647x363.jpeg?xEXD8zreK.fbfKHzjHEhYJ.Skwb9A6a2",
      publishedAt: "2022-03-08T01:38:58Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Madhuri Dixit recalls how people told her she ‘doesn't look like a heroine’ - Hindustan Times",
      description:
        "Madhuri Dixit has talked about the time when people used to question if she can become a successful Bollywood actor. Madhuri recently made her OTT debut with The Fame Game. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/madhuri-dixit-recalls-how-people-told-her-she-doesn-t-look-like-a-heroine-101646661225438.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/madhuri_dixit_1646102113158_1646662328215.jpg",
      publishedAt: "2022-03-08T01:32:35Z",
      content:
        "Actor Madhuri Dixit has revealed what she was told when she entered the film industry. In a new interview, Madhuri said that people used to say that I don't look like a heroine. Madhuri, however, lat… [+1699 chars]",
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Pinkvilla Desk",
      title:
        "Kareena Kapoor Khan's son Jeh spends time with 'Bari Amma' Sharmila Tagore, Saba shares priceless pic - PINKVILLA",
      description: "Jeh and Sharmila Tagore are seen playing in the garden.",
      url: "https://www.pinkvilla.com/entertainment/news/kareena-kapoor-khans-son-jeh-spends-time-bari-amma-sharmila-tagore-saba-shares-priceless-pic-1040236",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/jeh-sharmila-social.jpg?itok=i9RQfrOi",
      publishedAt: "2022-03-07T20:48:00Z",
      content:
        "Saif Ali Khan’s sister Saba Pataudi often takes us on a trip down memory lane. Her Instagram if closely seen is filled with throwback pictures featuring all children including Sara Ali Khan, Ibrahim … [+1375 chars]",
    },
    {
      source: { id: null, name: "Mirchi9.com" },
      author: null,
      title: "Radhe Shyam U.S: Hindi Audience Not Excited Yet - Mirchi9",
      description:
        "As per the trade reports in the US, the Hindi and Tamil versions are pulling hardly any pre-sales which is a danger sign.",
      url: "https://www.mirchi9.com/movienews/radhe-shyam-u-s-hindi-audience-not-excited-yet/",
      urlToImage:
        "https://www.mirchi9.com/wp-content/uploads/2022/03/Radhe-Shyam-U.S-Hindi-Audience-NotExcited-Yet.jpg",
      publishedAt: "2022-03-07T19:17:51Z",
      content:
        "Prabhas Radhe Shyam is a pan-India film and needs to click as it has been made on a budget of 300 crores. The stakes are really high and the makers will watch the Hindi collections closely as the hug… [+1059 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Suhana Khan shares pic of brother Abram and their pet dog chilling in her room at Mannat. See here - Hindustan Times",
      description:
        "Suhana Khan turned photographer for her younger brother AbRam Khan as she clicked him while he had his back towards the camera. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/suhana-khan-shares-pic-of-brother-abram-and-their-pet-dog-chilling-in-her-room-at-mannat-see-here-101646670707914.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/suhana_khan_1646670905575_1646670921225.jpg",
      publishedAt: "2022-03-07T17:12:12Z",
      content:
        "Shah Rukh Khan's daughter Suhana Khan offered a glimpse of their home and life as she shared a new picture on her Instagram account on Monday. Suhana turned photographer for her younger brother Abram… [+1701 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Pune cake artist makes it to the World Book of Records with her 100 kg royal icing structure - Kalinga TV",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMie2h0dHBzOi8va2FsaW5nYXR2LmNvbS9vZmZiZWF0L3B1bmUtY2FrZS1hcnRpc3QtbWFrZXMtaXQtdG8tdGhlLXdvcmxkLWJvb2stb2YtcmVjb3Jkcy13aXRoLWhlci0xMDAta2ctcm95YWwtaWNpbmctc3RydWN0dXJlL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T16:47:13Z",
      content: null,
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Priyakshi Sharma",
      title:
        "Saba Azad leaves rumoured BF Hrithik Roshan in awe of her beauty with her pics; Actor comments - PINKVILLA",
      description:
        "Hrithik Roshan and Saba Azad have been making headline ever since the rumoured couple was spotted together in February.",
      url: "https://www.pinkvilla.com/entertainment/news/hrithik-roshan-awe-rumoured-ladylove-saba-azad-yet-again-reacts-her-latest-photoshoot-1040619",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/hrithik-roshan-saba-azad-social_2.jpg?itok=_6dXeiYk",
      publishedAt: "2022-03-07T16:01:05Z",
      content:
        "Rumoured couple Hrithik Roshan and Saba Azad have been making headlines ever since they were spotted leaving a restaurant together in February. A few hours back today, Hrithik commented on Saba’s lat… [+1524 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Jaya Bachchan teases Amitabh Bachchan about his beard, entire family goofs around in unseen clips shared by Simi Garewal - Hindustan Times",
      description:
        "Simi Garewal recently shared a series of behind-the-scenes videos from an episode of her talk-show Rendezvous with Simi Garewal in which her guests were Amitabh Bachchan, Jaya Bachchan, Abhishek Bachchan, and Shweta Bachchan Nanda.",
      url: "https://www.hindustantimes.com/entertainment/tv/jaya-bachchan-teases-amitabh-bachchan-about-his-beard-entire-family-goofs-around-in-unseen-clips-shared-by-simi-garewal-watch-101646659762886.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/Simi_Garewal_1646659914493_1646659931278.jpg",
      publishedAt: "2022-03-07T14:31:38Z",
      content:
        "Simi Garewal recently shared a series of behind-the-scenes videos from an episode of her talk-show Rendezvous with Simi Garewal. In this episode her guests were Amitabh Bachchan, Jaya Bachchan, Abhis… [+3238 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Boney Kapoor calls South films wholesome ‘thali’, says Bollywood is like ‘McDonalds where you get only what you order' - Hindustan Times",
      description:
        "In a new interview, Boney Kapoor draws comparison between Bollywood and South Indian film industry. While he compared Bollywood to McDonalds and KFC, he called South Indian films a wholesome thali. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/boney-kapoor-calls-south-films-wholesome-thali-says-bollywood-is-like-mcdonalds-where-you-get-only-what-you-order-101646658566930.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/896f4a80-bb07-11eb-8ae8-7a0227212c21_1621693077266_1646659700102.jpg",
      publishedAt: "2022-03-07T14:04:28Z",
      content:
        "Filmmaker and producer Boney Kapoor is currently basking in the success of his Tamil film Valimai that has already entered the 200 crore club. The Ajith Kumar starrer was released on February 24, 202… [+1870 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: null,
      title:
        "Naseeruddin Shah is suffering from this medical condition; ‘I am never quite at rest’ - Times of India",
      description:
        "Read full story: \nNaseeruddin Shah suffers from a medical condition called Onomatomania, know what it is Naseeruddin Shah suffers from a condition called onomatomania. The veteran actor in a recent interview revealed that the ailment does not let him rest, ev…",
      url: "https://timesofindia.indiatimes.com/videos/entertainment/hindi/naseeruddin-shah-is-suffering-from-this-medical-condition-i-am-never-quite-at-rest/videoshow/90056935.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/90056935/size-35804/90056935.jpg",
      publishedAt: "2022-03-07T13:50:17Z",
      content:
        "Read full story: \r\nNaseeruddin Shah suffers from a medical condition called Onomatomania, know what it isNaseeruddin Shah\r\n suffers from a condition called onomatomania. The veteran actor in a recent… [+1496 chars]",
    },
    {
      source: { id: null, name: "IndiaGlitz.com" },
      author: "IndiaGlitz",
      title:
        "C.S. Amudhan asks for Ilayaraja-A.R.Rahman combo for his film - Check VP's reaction - Tamil News - Telugu Cinema - IndiaGlitz",
      description:
        'The past twenty four hours have been one of unbelievable happenings in the music world.  Firstly A.R. Rahman shared a rare photo of Ilayaraja visiting his Firdaus Studio in Dubai wearing a stylish coat and then he made a request to the legend "Such a',
      url: "https://www.indiaglitz.com/ilayaraja-a-r-rahman-firdaus-orchestra-firdaus-studio-c-s-amudhan-venkat-prabhu-tamil-news-309150",
      urlToImage:
        "https://1847884116.rsc.cdn77.org/tamil/news/csamudhan-venkatprabhu1-732022-450.jpg",
      publishedAt: "2022-03-07T13:33:44Z",
      content: null,
    },
    {
      source: { id: null, name: "News18" },
      author: "Entertainment Bureau",
      title:
        "Aditya Narayan Quits Sa Re Ga Ma Pa After 15 Years; Vishal Dadlani Says 'Hope You Change Your Mind' - News18",
      description:
        "Aditya Narayan announced that he is quitting Sa Re Ga Ma Pa after being a part of the show for 15 years. The singer-actor began his journey on the show when he was 18.",
      url: "https://www.news18.com/news/movies/aditya-narayan-quits-as-host-of-sa-re-ga-ma-pa-after-15-years-vishal-dadlani-reacts-4847093.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/03/aditya-vishal-dadlani-164665948916x9.jpg",
      publishedAt: "2022-03-07T13:25:21Z",
      content:
        "Aditya Narayan will no longer host the singing reality show Sa Re Ga Ma Pa. The actor-singer-host announced his exit from the show on Monday via Instagram. Aditya, who has been a part of the show for… [+1654 chars]",
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Priyakshi Sharma",
      title:
        "Kareena Kapoor Khan: Size 0 to Size 16, I've thoroughly enjoyed every phase of my life - PINKVILLA",
      description:
        "Kareena Kapoor Khan will be next seen in the Aamir Khan starrer Laal Singh Chaddha.",
      url: "https://www.pinkvilla.com/entertainment/news/kareena-kapoor-khan-size-0-size-16-ive-thoroughly-enjoyed-every-phase-my-life-1040519",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/kareena-kapoor-khan-social_13.jpg?itok=E_BLGs8U",
      publishedAt: "2022-03-07T13:13:48Z",
      content:
        "Kareena Kapoor Khan: The name synonymous with glamour, isn't it? Well, she’s undoubtedly one of the most popular actresses in the Hindi film industry. In her over two-decades-long career in Bollywood… [+1684 chars]",
    },
    {
      source: { id: null, name: "IndiaGlitz.com" },
      author: "IndiaGlitz",
      title:
        "Suriya's 'Jai Bhim' controversy continues to trouble 'Etharkkum Thunindhavan' release too - Tamil News - Telugu Cinema - IndiaGlitz",
      description:
        "It has become a new trend in Indian cinema, where some politicians and activists try to seek publicity by opposing the release of big hero films",
      url: "https://www.indiaglitz.com/suriya-jai-bhim-controversy-continues-etharkkum-thunidhavan-release-problem-latest-update-tamil-news-309145",
      urlToImage:
        "https://1847884116.rsc.cdn77.org/tamil/news/et070322_6-c2a.jpg",
      publishedAt: "2022-03-07T12:54:55Z",
      content: null,
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Bombay HC to hear plea against The Kashmir Files, petitioner Intezar Hussain says movie hurts Muslim sentiments - OpIndia",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiVmh0dHBzOi8vd3d3Lm9waW5kaWEuY29tLzIwMjIvMDMvYm9tYmF5LWhjLWhlYXItcGV0aXRpb24tYWdhaW5zdC1rYXNobWlyLWZpbGVzLXJlbGVhc2Uv0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T12:53:37Z",
      content: null,
    },
    {
      source: { id: null, name: "The Tribune India" },
      author: "The Tribune India",
      title:
        "Video: Taimur Ali Khan looks clueless as children horde to click photos; Saif Ali asks them to step aside and shuts the car door, as mom Kareena Kapoor takes selfies - The Tribune India",
      description:
        "Several pictures and videos of actor-couple Kareena Kapoor and Saif Ali Khan along with their elder son Taimur Ali Khan, have surfaced online and gone viral.",
      url: "https://www.tribuneindia.com/news/entertainment/video-taimur-ali-khan-looks-clueless-as-children-horde-to-click-photos-saif-ali-asks-them-to-step-aside-and-shuts-the-car-door-gets-brutally-trolled-375814",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/3/2022_3$largeimg_2030123296.jpg",
      publishedAt: "2022-03-07T12:51:00Z",
      content:
        "Tribune Web Desk\r\nChandigarh, March 7\r\nSeveral pictures and videos of actor-couple Kareena Kapoor and Saif Ali Khan along with their elder son Taimur Ali Khan, have surfaced online and gone viral.\r\nO… [+1169 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Swara Bhasker says her career is made up of roles rejected by others; recalls Raanjhanaa casting - Hindustan Times",
      description:
        "Swara Bhasker has performed a variety of roles in her career after making her debut with the 2009 film Madholal Keep Walking. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/swara-bhasker-says-her-career-is-made-up-of-roles-rejected-by-others-recalls-raanjhanaa-casting-101646645017894.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/swara_bhasker_1636685879943_1646645418224.jpg",
      publishedAt: "2022-03-07T12:09:12Z",
      content:
        "Swara Bhasker has said that her filmography is mostly made up of roles that were rejected by other artistes. The actor has performed a variety of roles in her career after making her debut in the 200… [+1978 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Photogallery Team",
      title:
        "Inside pictures from Janhvi Kapoor's 25th neon themed birthday party with sisters Anshula, Khushi and dad Boney Kapoor - Indiatimes.com",
      description:
        "Bollywood actress Janhvi Kapoor, who turned 25 on March 06, 2022, celebrated her birthday with family and friends. After seeking the blessings of Lord Balaji in Tirupati on her birthday, Janhvi Kapoor returned to Mumbai to celebrate her special day with her s…",
      url: "https://photogallery.indiatimes.com/events/mumbai/inside-pictures-from-janhvi-kapoors-25th-neon-themed-birthday-party-with-sisters-anshula-khushi-and-dad-boney-kapoor/articleshow/90053774.cms",
      urlToImage: "https://static.toiimg.com/photo/90053883.cms",
      publishedAt: "2022-03-07T11:43:18Z",
      content:
        "Bollywood actress Janhvi Kapoor, who turned 25 on March 06, 2022, celebrated her birthday with family and friends. After seeking the blessings of Lord Balaji in Tirupati on her birthday, Janhvi Kapoo… [+1438 chars]",
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Pinkvilla Desk",
      title:
        "Exclusive: Rashmika Mandanna shoots something exciting with Varun Dhawan, gives a sneak peek - PINKVILLA",
      description:
        "Rashmika Mandanna as she gave a glimpse of her shoot with a handsome actor and guess who it is with.",
      url: "https://www.pinkvilla.com/entertainment/south/rashmika-mandanna-gives-glimpse-her-shoot-shenanigans-varun-dhawan-picture-1040383",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/rashmika_mandanna_varun_dhawan_project.jpg?itok=D6KEErQ6",
      publishedAt: "2022-03-07T10:49:22Z",
      content: null,
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "Janhvi Sharma",
      title:
        "ITA Awards 2022: Anupamaa actors Rupali Ganguly-Gaurav Khanna win hearts with their chemistry on 'Pyaar Hua I - Bollywood Life",
      description:
        "Anupamaa actors Rupali Ganguly and Gaurav Khanna set the screens on fire with their romantic dance performance on 'Pyaar Hua Ikraar Hua'. Take a look at their pictures -",
      url: "https://www.bollywoodlife.com/photos/bollywood-galleries-ita-awards-2022-anupamaa-actors-rupali-ganguly-gaurav-khanna-win-hearts-with-their-chemistry-on-pyaar-hua-ikraar-hua-view-pics-2022899/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/03/MicrosoftTeams-image-247-600x315.jpg",
      publishedAt: "2022-03-07T10:31:00Z",
      content:
        "ITA Awards 2022 was held on March 6, Sunday, and several popular celebs graced the prestigious show with their presence. Anupamaa actors Rupali Ganguly and Gaurav Khanna managed to turn heads in styl… [+288 chars]",
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "BollywoodLife",
      title:
        "Shark Tank India: Peyush Bansal shares a crucial update on Jugaadu Kamlesh; talks about biggest concerns and - Bollywood Life",
      description:
        "Shark Tank India judge and Lenskart co-founder Peyush Bansal has shared a crucial update on the biggest concerns of Jugaadu Kamlesh's cart and what it will take to make it more useful.",
      url: "https://www.bollywoodlife.com/tv/shark-tank-india-peyush-bansal-shares-a-crucial-update-on-jugaadu-kamlesh-talks-about-biggest-concerns-and-next-steps-2022996/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/03/peyush-bansal-jugaadu-kamles-600x315.jpg",
      publishedAt: "2022-03-07T10:15:50Z",
      content:
        "If there was any pitch on Shark Tank India that made eveyone emotional, it was of Jugaadu Kamlesh aka Kamlesh Nanasaheb Ghumare, a young entrepreneur from Malegaon, Maharashtra whose hand drawn cart … [+2526 chars]",
    },
    {
      source: { id: null, name: "IndiaGlitz.com" },
      author: "IndiaGlitz",
      title:
        "I tried to kill myself many times: Poonam Pandey opens up - Tamil News - Telugu Cinema - IndiaGlitz",
      description:
        "Actress Poonam Pandey, who is currently a participant in the digital reality show Lock Upp, opened up about attempting to take her own life",
      url: "https://www.indiaglitz.com/tried-to-kill-myself-many-times-poonam-pandey-on-physical-abuse-by-husband-sam-bombay-lock-upp-tamil-news-309129",
      urlToImage:
        "https://1847884116.rsc.cdn77.org/tamil/news/poonampandey732022t-b0b.jpg",
      publishedAt: "2022-03-07T10:13:27Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Salman Khan says all his girlfriends are now married in hilarious new video. Watch - Hindustan Times",
      description:
        "Salman Khan has shared a video in which he runs into his younger self. Watch it here. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/salman-khan-says-all-his-girlfriends-are-now-married-in-hilarious-new-video-watch-101646645075502.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/salman_khan_1646645229719_1646645229912.png",
      publishedAt: "2022-03-07T10:08:20Z",
      content:
        "Salman Khan has shared a new video on Instagram, in which he runs into his old self. An ad for a beverage brand, it shows Salman telling his character from Hum Aapke Hai Koun, Prem, all about his lif… [+1769 chars]",
    },
    {
      source: { id: null, name: "Greatandhra.com" },
      author: "Vamsi",
      title: "Pic: Mammootty In A Mighty Role In Akhil's Agent.. - Greatandhra",
      description:
        "Young hero Akhil Akkineni who is riding high with the success of his last movie Most Eligible Bachelor is presently doing an action-packed sou thriller Agent.",
      url: "https://www.greatandhra.com/movies/news/pic-mammootty-in-a-mighty-role-in-akhils-agent-119551",
      urlToImage:
        "https://www.greatandhra.com/newphotos10/agent_mamooty11646645276.jpg",
      publishedAt: "2022-03-07T09:27:56Z",
      content:
        "Young hero Akhil Akkineni who is riding high with the success of his last movie Most Eligible Bachelor is presently doing an action-packed sou thriller Agent.\r\nSakshi Vaidya plays Akhil's ladylove in… [+807 chars]",
    },
    {
      source: { id: null, name: "Odishatv.in" },
      author: "Poonam Singh",
      title:
        "Kapil Sharma As Delivery Boy Spotted On Bhubaneswar Streets Shooting For Nandita Das Movie #Watch - OTV News",
      description:
        "Kapil, who plays a food delivery boy in the yet-to-be-titled film, was seen crisscrossing the lanes of the capital city on motorcycle in his delivery uniform and bag on his shoulder.",
      url: "https://odishatv.in/news/entertainment/kapil-sharma-as-delivery-boy-spotted-on-bhubaneswar-streets-shooting-for-nandita-das-movie-watch-172194",
      urlToImage:
        "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1646644386.jpg",
      publishedAt: "2022-03-07T09:13:37Z",
      content:
        "Popular comedian and actor Kapil Sharma, who is currently in Bhubaneswar to shoot Nandita Das' upcoming movie, was spotted on the streets of the Temple City.\r\nKapil, who plays a food delivery boy in … [+1394 chars]",
    },
    {
      source: { id: null, name: "Zoom" },
      author: "Daphne Clarance",
      title:
        "Masaba Gupta shares rare unseen pic of Sir Vivian Richards on his 70th birthday; says, ‘My father is unrelenti - Times Now",
      description:
        "Fashion designer Masaba Gupta took to Instagram to wish her father Sir Vivian Richards on his 70th birthday. She shared a rare childhood picture with him.",
      url: "https://www.timesnownews.com/entertainment-news/masaba-gupta-shares-rare-unseen-pic-of-sir-vivian-richards-on-his-70th-birthday-says-my-father-is-unrelenting-article-90045787",
      urlToImage:
        "https://static.tnn.in/thumb/msid-90045787,imgsize-100,width-1280,height-720,resizemode-75/90045787.jpg",
      publishedAt: "2022-03-07T07:56:00Z",
      content:
        "03:09\r\nEvacuation Of Indian Students In Sumy, Halted Again, Students Talk To Times Now | Russia-Ukraine War",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Aishwaryaa Rajinikanth hospitalised again due to fever and vertigo, complains of post-Covid effects - India Today",
      description:
        "Aishwaryaa Rajinikanth has been hospitalised again due to fever and vertigo. She shared a few photos from the hospital and complained of post-Covid complications.",
      url: "https://www.indiatoday.in/movies/regional-cinema/story/aishwaryaa-rajinikanth-hospitalised-again-due-to-fever-and-vertigo-complains-of-post-covid-effects-1921658-2022-03-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Aishwaryaa_Rajinikanth_hospita_0-647x363.jpeg?r5hoAnVwjXz4aOL6wp3EMFjCkAmGbiDm",
      publishedAt: "2022-03-07T07:55:43Z",
      content:
        "Aishwaryaa Rajinikanth has been hospitalised again on March 7. The filmmaker is admitted due to fever and vertigo and spoke of post-Covid complications in a post on Instagram. On February 1, Aishwary… [+2186 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "Tina Ambani shares unseen pics from son Anmol Ambani's dreamy wedding. Shweta Bachchan reacts - India Today",
      description:
        "Tina Ambani took to Instagram and shared several unseen photos from her son Anmol Ambani's wedding celebrations.",
      url: "https://www.indiatoday.in/lifestyle/celebrity/story/tina-ambani-shares-unseen-pics-from-son-anmol-ambani-s-dreamy-wedding-shweta-bachchan-reacts-1921653-2022-03-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/tina_ambani-647x363.png?QcKqpNfnLQdO760W5guRH13Lo42g4agP",
      publishedAt: "2022-03-07T07:54:35Z",
      content: null,
    },
    {
      source: { id: null, name: "Koimoi" },
      author: "Joginder Tuteja",
      title:
        "Jhund Box Office Day 3: Amitabh Bachchan Starrer Has A Dull Weekend - Koimoi",
      description:
        "It was a dull weekend for Jhund as only 6.50 crores came in. The film started on a very low note [1.50 crores], as a result of which.",
      url: "https://www.koimoi.com/?p=883390",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/box-office-jhund-has-a-dull-weekend-001.jpg",
      publishedAt: "2022-03-07T07:43:35Z",
      content:
        "Box Office – Jhund has a dull weekend ( Photo Credit Jhund Poster )\r\nIt was a dull weekend for Jhund as only 6.50 crores came in. The film started on a very low note [1.50 crores], as a result of whi… [+1378 chars]",
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "Shivani Pawaskar",
      title:
        "ITA Awards 2022: Alia Bhatt ditches white; netizens wonder if her saree is a 'foil wrap' - Bollywood Life",
      description:
        "Alia Bhatt attended the Indian Television Academy Awards last evening and for the same, she ditched her usual white saree and opted for a silver one. Netizens were wondering whether it's a 'foil wrap'.",
      url: "https://www.bollywoodlife.com/photos/ita-awards-2022-alia-bhatt-ditches-white-netizens-wonder-if-her-saree-is-a-foil-wrap-gangubai-kathiawadi-bollywood-photo-galleries-bollywood-photogallery-bollywood-news-entertainment-news-2022706/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/03/Alia-Bhatta-teaser-600x315.png",
      publishedAt: "2022-03-07T06:59:04Z",
      content:
        "Bollywood actress Alia Bhatt has been promoting her film Gangubai Kathiawadi across the country. The actress, for the same, has been opting for various shades of white and ivory sarees. It has been a… [+276 chars]",
    },
    {
      source: { id: null, name: "Bollywood Hungama" },
      author: "Bollywood Hungama",
      title:
        "Bobby Deol opens up on playing a mass murderer and how it affected him - Bollywood Hungama",
      description:
        "Bobby Deol opens up on playing a mass murderer and how it affected him Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News, Bollywood News Hindi, Hindi Bollywood News at Bollywood …",
      url: "https://www.bollywoodhungama.com/news/features/bobby-deol-opens-playing-mass-murderer-affected/",
      urlToImage:
        "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/03/Bobby-Deol-opens-up-on-playing-a-mass-murderer-and-how-it-affected-him-1.jpg",
      publishedAt: "2022-03-07T06:20:26Z",
      content:
        "Bobby Deol plays one helluva scary coldblooded mass murderer in Shanker Ramans Love Hostel. The affable actor who wouldnt hurt a fly in real life says it was difficult to get into the head of someone… [+3126 chars]",
    },
    {
      source: { id: null, name: "India Today" },
      author: null,
      title:
        "5 explosive statements made by Malayalam actress on 2017 sexual assault case - India Today",
      description:
        "In 2017, a popular Malayalam actress was abducted and sexually assaulted in a moving car. Malayalam actor Dileep is one of the accused in the case. The actress, in her first-ever video interview, opened up about the assault and the trial.",
      url: "https://www.indiatoday.in/movies/regional-cinema/story/5-explosive-statements-made-by-malayalam-actress-on-2017-sexual-assault-case-1921585-2022-03-07",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/2017_Malayalam_actress_abdusct-647x363.jpeg?rdnjOHWlAx0sF8GwDGPBl0kuRkynVCOb",
      publishedAt: "2022-03-07T06:10:09Z",
      content: null,
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        'Ahead Of Pathaan Shoot, Deepika Padukone Shares Pics From Her "Lazy Sunday" In Spain - NDTV Movies',
      description:
        'Deepika Padukone shared pictures of her "new home" as she shoots in Spain for Pathaan',
      url: "https://www.ndtv.com/entertainment/ahead-of-pathaan-shoot-deepika-padukone-shares-pics-from-her-lazy-sunday-in-spain-2807626",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/f6r9gn2_deepika_625x300_07_March_22.jpg",
      publishedAt: "2022-03-07T05:05:51Z",
      content:
        "Deepika Padukone (courtesy: deepikapadukone )\r\nHighlights\r\n<ul><li>Deepika Padukone is in Spain\r\n</li><li>Deepika Padukone shared pics from Spain\r\n</li><li>Deepika Padukone is shooting for Pathaan in… [+1366 chars]",
    },
    {
      source: { id: null, name: "CarToq.com" },
      author: "Shantonil Nag",
      title:
        "Actor Kunal Kemmu tags Mumbai Police on Instagram after Lamborghini road rage incident - CarToq.com",
      description:
        "Kunal Kemmu put up a story on his Instagram profile complaining about a road rage incident recently. The actor was travelling with his wife Soha Ali Khan and daughter Inaaya at the time of the road rage. Kunal even put a picture of the car – a white coloured …",
      url: "https://www.cartoq.com/actor-kunal-kemmu-tags-mumbai-police-on-instagram-after-lamborghini-road-rage-incident/",
      urlToImage:
        "https://www.cartoq.com/wp-content/uploads/2022/03/Kunal-Kemmu-Lamborghini-featured.jpg",
      publishedAt: "2022-03-07T05:04:13Z",
      content:
        "Kunal Kemmu put up a story on his Instagram profile complaining about a road rage incident recently. The actor was travelling with his wife Soha Ali Khan and daughter Inaaya at the time of the road r… [+2927 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Entertainment Desk",
      title:
        "Ranbir Kapoor enjoys weekend dinner with mom Neetu Kapoor, uncle Randhir Kapoor. See pics from their family get-together - Hindustan Times",
      description:
        "Ranbir Kapoor had dinner with Riddhima Kapoor Sahni, Neetu Kapoor, Randhir Kapoor, Nikhil Nanda, and Nitasha Nanda. Check out their pictures here. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/ranbir-kapoor-enjoys-weekend-dinner-with-mom-neetu-kapoor-uncle-randhir-kapoor-see-pics-from-their-family-gettogether-101646623703838.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/Ranbir_Kapoor_1646623867498_1646623888256.jpg",
      publishedAt: "2022-03-07T03:56:05Z",
      content:
        "Actor Ranbir Kapoor spent his Sunday evening with his family members as they went out for dinner. Taking to Instagram, Ranbir's sister Riddhima Kapoor Sahni shared several pictures from their get-tog… [+2465 chars]",
    },
    {
      source: { id: null, name: "Koimoi" },
      author: "Joginder Tuteja",
      title:
        "Gangubai Kathiawadi Box Office Day 10: Has An Excellent Second Weekend! - Koimoi",
      description:
        "It was a wonderful second weekend for Gangubai Kathiawadi as the film continued to have impressive collections on Sunday as well.",
      url: "https://www.koimoi.com/box-office/gangubai-kathiawadi-box-office-day-10-has-an-excellent-second-weekend/",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/box-office-gangubai-kathiawadi-has-aan-excellent-second-weekend-001.jpg",
      publishedAt: "2022-03-07T03:55:18Z",
      content:
        "Gangubai Kathiawadi Box Office Day 10 Updates! (Photo Credit: Instagram)\r\nIt was a wonderful second weekend for Gangubai Kathiawadi as the film continued to have impressive collections on Sunday as w… [+1186 chars]",
    },
    {
      source: { id: null, name: "Thedirect.com" },
      author: "Savannah Sanders",
      title:
        "How Doctor Strange 2 Sets Up Chris Evans' MCU Return - The Direct",
      description:
        "A new theory has explained how Doctor Strange in the Multiverse of Madness could resurrect past MCU characters.",
      url: "https://thedirect.com/article/doctor-strange-2-chris-evans-mcu-return",
      urlToImage:
        "https://images.thedirect.com/media/article_full/chris-evans-mcu-return.jpg",
      publishedAt: "2022-03-07T01:49:35Z",
      content:
        "Avengers: Endgame was the end of an era, particularly in terms of the MCU's original leaders: Robert Downey Jr.'s Iron Man and Chris Evans' Captain America. But while audiences witnessed the end of D… [+7251 chars]",
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Pinkvilla Desk",
      title:
        "Kiara Advani applies ‘nazar ka tikka’ on sister Ishita Advani on her wedding day; INSIDE pics - PINKVILLA",
      description:
        "Kiara Advani performs bridesmaid's duties at sister Ishita Advani2019s wedding.",
      url: "https://www.pinkvilla.com/entertainment/news/kiara-advani-applies-nazar-ka-tikka-sister-ishita-advani-her-wedding-day-inside-pics-1039848",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/kiara_advani_sister_wedding_social.jpg?itok=PbBogcm2",
      publishedAt: "2022-03-07T01:43:00Z",
      content:
        "Kiara Advani is beaming with joy as her sister Ishita Advani has embarked on a new journey as she tied the knot with Karma Vivan in an intimate ceremony on Saturday. Recently, Kiara and her sister je… [+1704 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Hasti Doshi",
      title:
        "Exclusive Interview! Sa Re Ga Ma Pa winner Neelanjana Ray: After receiving so much love from people, winn - Times of India",
      description:
        "The winner of Sa Re Ga Ma Pa: Music Ka Tyohaar has been declared. Nineteen- year-old Neelanjana Ray lifted the trop",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/exclusive-interview-sa-re-ga-ma-pa-winner-neelanjana-ray-after-receiving-so-much-love-from-people-winning-the-trophy-is-like-a-bonus-for-me/articleshow/90036934.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90036934,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-68926/90036934.jpg",
      publishedAt: "2022-03-06T17:33:00Z",
      content: null,
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Kerala Film Director Liju Krishna Accused Of Rape, Arrested - NDTV",
      description:
        "Liju Krishna, the director of the upcoming Malayalam film Padavettu, was arrested from Kerala's Kannur on Sunday after being accused of rape.",
      url: "https://www.ndtv.com/kerala-news/liju-krishna-kerala-film-director-accused-of-rape-arrested-2807242",
      urlToImage:
        "https://c.ndtvimg.com/2022-03/185q8j4k_liju-krishna-instagram_625x300_06_March_22.jpg",
      publishedAt: "2022-03-06T16:51:20Z",
      content:
        "Liju Krishna is the director of the upcoming Malayalam film Padavettu.\r\nThiruvananthapuram: Liju Krishna, the director of the upcoming Malayalam film Padavettu, was arrested from Kerala's Kannur on S… [+1266 chars]",
    },
    {
      source: { id: null, name: "Bollywood Life" },
      author: "Murtuza Iqbal",
      title:
        "Urfi Javed dons a dangerously risque midriff revealing dress; netizens says, ‘Ise bolo yeh bhi Na pehne’ – Vi - Bollywood Life",
      description:
        "Urfi Javed is known for her bold outfits, and she has once again grabbed everyone's attention because of it. Check out the pictures here...",
      url: "https://www.bollywoodlife.com/photos/urfi-javed-dons-a-dangerously-risque-midriff-revealing-dress-netizens-says-ise-bolo-yeh-bhi-na-pehne-view-pics-2022460/",
      urlToImage:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/03/Urfi-Javed-midriff-600x315.jpg",
      publishedAt: "2022-03-06T16:26:36Z",
      content:
        "Urfi Javed has once again grabbed everyones attention and the reason is her mini dress that she wore for her latest outing. The actress decided to wear a midriff showing mini dress, and while of cour… [+232 chars]",
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

export default Entertainment;
