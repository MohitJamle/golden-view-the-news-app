import React from "react";
import classes from "./Card.module.css";

const Health = () => {
  const articles = [
    {
      source: { id: null, name: "ReliefWeb" },
      author: null,
      title:
        "Interim Statement on COVID-19 vaccines in the context of the circulation of the Omicron SARS-CoV-2 Variant from the WHO Technical Advisory Group on COVID-19 Vaccine Composition (TAG-CO-VAC), 08 March 2022 - World - ReliefWeb",
      description:
        "English News and Press Release on World about Health and Epidemic; published on 08 Mar 2022 by WHO",
      url: "https://reliefweb.int/report/world/interim-statement-covid-19-vaccines-context-circulation-omicron-sars-cov-2-variant-0",
      urlToImage:
        "https://reliefweb.int/profiles/reliefweb/themes/kobe/images/metatag/disaster-type/epidemic.png",
      publishedAt: "2022-03-08T11:57:00Z",
      content:
        "Key messages:\r\n<ul><li>The TAG-CO-VAC is reviewing available data to optimize vaccine mediated protection against prevalent circulating variants. The TAG-CO-VAC strongly supports urgent and broad acc… [+9267 chars]",
    },
    {
      source: { id: null, name: "News9live.com" },
      author: "News9 Staff",
      title:
        "Studies indicate long COVID can also affect asymptomatic patients - News9 LIVE",
      description:
        "Research has shown that self-attacking autoantibodies could lead to severe infection and may even...",
      url: "https://www.news9live.com/health/covid-19/studies-indicate-long-covid-can-also-affect-asymptomatic-patients-157834",
      urlToImage:
        "https://media.news9live.com/h-upload/2022/03/08/251366-20-06-0302.jpg",
      publishedAt: "2022-03-08T11:56:34Z",
      content:
        "We have now been two years into the COVID pandemic. During this period, we have unravelled a lot about the virus, however, some uncertainties still linger. Long COVID is one of them. People with debi… [+2331 chars]",
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title: "The Biochemistry of Breast Cancer Screening - News-Medical.Net",
      description:
        "As the most common cancer diagnosed in women, efficient detection of breast cancer is highly important.",
      url: "https://www.news-medical.net/life-sciences/The-Biochemistry-of-Breast-Cancer-Screening.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22210_16467406812618084.jpg",
      publishedAt: "2022-03-08T11:55:00Z",
      content:
        "The American Cancer Society (ACS) reported that 1 in 8 women will be diagnosed with breast cancer in her lifetime. There are almost 14 million new cases diagnosed and approximately 4.5 million deaths… [+7025 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: "Press Trust of India",
      title:
        "UK scientists identify genetic factors behind severe Covid symptoms - Business Standard",
      description:
        "The team led by researchers from the University of Edinburgh in the UK in partnership with Genomics England sequenced the genomes of 7,491 patients from 224 intensive care units in the UK",
      url: "https://www.business-standard.com/article/current-affairs/uk-scientists-identify-genetic-factors-behind-severe-covid-symptoms-122030800813_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-01/30/full/1643505479-4359.jpg",
      publishedAt: "2022-03-08T11:10:00Z",
      content:
        "Scientists in the UK have identified some genetic factors that make certain people suffer severe symptoms from COVID-19 than others, a finding that could help develop more effective treatments for th… [+4059 chars]",
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
      source: { id: null, name: "ANI News" },
      author: null,
      title:
        "Tick saliva drug can ease chronic pain, itching in people: Study - ANI News",
      description:
        "Durham [England], March 8 (ANI): Ticks are small, brown parasites that are known for carrying disease and that can attach to a person's skin and suck their blood. A new research has found that a protein, called Votucalis, found in tick saliva could be turned …",
      url: "https://www.aninews.in/news/health/tick-saliva-drug-can-ease-chronic-pain-itching-in-people-study20220308162940",
      urlToImage:
        "https://aniportalimages.s3.amazonaws.com/media/details/__sized__/tiiicccckkktooooccccckkkkkkkkkkkkkkkkkkkkkkkkkkkkkk2022030810331620220308105927-thumbnail-154x87-70.jpg",
      publishedAt: "2022-03-08T10:59:00Z",
      content:
        "ANI | Updated: Mar 08, 2022 16:29 IST\r\nDurham [England], March 8 (ANI): Ticks are small, brown parasites that are known for carrying disease and that can attach to a person's skin and suck their bloo… [+2907 chars]",
    },
    {
      source: { id: null, name: "Jagran.com" },
      author: "Sugandha Jha",
      title: "No Smoking Day 2022: 5 ways to quit smoking - Jagran English",
      description:
        "No Smoking Day 2022  No Smoking Day is observed annually to create awareness about the use of tobacco and its impact on health  We bring you some effective ways to quit smoking  Scroll down to read them",
      url: "https://english.jagran.com/lifestyle/no-smoking-day-2022-date-history-significance-ways-to-quit-smoking-10040418",
      urlToImage:
        "https://imgeng.jagran.com/images/2022/mar/save1646736692009.jpg",
      publishedAt: "2022-03-08T10:41:23Z",
      content:
        "New Delhi | Jagran Lifestyle Desk: The use of Tobacco is one of the major causes of death and disease in India and accounts for nearly 1.35 million deaths every year, as per the World Health Organiza… [+1634 chars]",
    },
    {
      source: { id: null, name: "Ahmedabadmirror.com" },
      author: null,
      title:
        "Does the pandemic have anything to do with sugar consumption? - Ahmedabad Mirror",
      description:
        "&nbsp;The pandemic turned out to be the world&#39;s most severe socioeconomic and health crisis. The abrupt change in lifestyle caused by social estrangement and isolation became the new normal for everyone. But the silver lining to the pandemic is a noticeab…",
      url: "https://www.ahmedabadmirror.com/does-the-pandemic-have-anything-to-do-with-sugar-consumption/81823695.html",
      urlToImage:
        "https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1646463188077.jpg-org",
      publishedAt: "2022-03-08T10:40:49Z",
      content:
        "The pandemic turned out to be the world's most severe socioeconomic and health crisis. The abrupt change in lifestyle caused by social estrangement and isolation became the new normal for everyone. B… [+2833 chars]",
    },
    {
      source: { id: null, name: "ThePrint" },
      author: null,
      title:
        "Walling off or ‘bunkering’ retina can save eyesight, suggests study - ThePrint",
      description:
        "Connecticut [US], March 8 (ANI): The retina is a layer of photoreceptors cells and glial cells within the eye that captures incoming photons and transmits them along neuronal pathways as both electrical and chemical signals for the brain to perceive a visual …",
      url: "https://theprint.in/science/walling-off-or-bunkering-retina-can-save-eyesight-suggests-study/863795/",
      urlToImage: null,
      publishedAt: "2022-03-08T10:00:28Z",
      content:
        "Connecticut [US], March 8 (ANI): The retina is a layer of photoreceptors cells and glial cells within the eye that captures incoming photons and transmits them along neuronal pathways as both electri… [+3182 chars]",
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
      source: { id: null, name: "Womansera.com" },
      author: "Arpita Sarkar",
      title:
        "Are You A Foodie And Wondering How To Control Weight Without Diet? Check These Weight Loss Tips! - - Woman's Era",
      description:
        "Are you a foodie? Wondering how to control weight without diet? Check these steps which can help you in reducing extra weight.",
      url: "https://womansera.com/are-you-a-foodie-and-wondering-how-to-control-weight-without-diet-check-these-weight-loss-tips/",
      urlToImage:
        "https://womansera.com/wp-content/uploads/2022/03/featured-diet.png",
      publishedAt: "2022-03-08T09:40:20Z",
      content:
        "The biggest reason for weight gain is our unhealthy lifestyle, overweight increases the risk of various diseases such as diabetes, high blood pressure, heart disease, and even cancer. So lose your ex… [+2044 chars]",
    },
    {
      source: { id: null, name: "ThePrint" },
      author: null,
      title:
        "Study finds new algorithm that improves accuracy of screening for prostate cancer - ThePrint",
      description:
        "London [UK], March 8 (ANI): A new study has discovered that calculating a person’s risk of developing prostate cancer using results from two blood makers can improve the accuracy of screening for the disease. The study was published in the journal, ‘Journal o…",
      url: "https://theprint.in/health/study-finds-new-algorithm-that-improves-accuracy-of-screening-for-prostate-cancer/863748/",
      urlToImage: null,
      publishedAt: "2022-03-08T09:30:52Z",
      content:
        "London [UK], March 8 (ANI): A new study has discovered that calculating a person’s risk of developing prostate cancer using results from two blood makers can improve the accuracy of screening for the… [+5408 chars]",
    },
    {
      source: { id: null, name: "Longevitylive.com" },
      author: "Pie Mulumba",
      title:
        "1 Billion People Expected To Be Living With Obesity by 2030, Says Study - Longevity LIVE - Longevity LIVE",
      description:
        "A new report from the World Obesity Federation revealed that more than a billion people around the world are expected to be obese by 2030.",
      url: "https://longevitylive.com/wellness/1-billion-people-expected-to-be-living-with-obesity-by-2030-says-study/",
      urlToImage:
        "https://longevitylive.com/wp-content/uploads/2022/03/shutterstock_1115769623.jpeg",
      publishedAt: "2022-03-08T09:03:42Z",
      content:
        "This past Friday (4 March) marked World Obesity Day, a day focused on raising awareness about the disease, as well as emphasizing the importance of creating and promoting practical solutions to end t… [+5305 chars]",
    },
    {
      source: { id: null, name: "MENAFN.COM" },
      author: "MENAFN",
      title:
        "UAE doctors turn spotlight on heart health after Shane Warne... - MENAFN.COM",
      description:
        "<p> Published: Tue 8 Mar 2022, 11:55 AM</p> <p>Last updated: Tue 8 Mar 2022, 12:01 PM</p> <p>On March 4, legendary Australian cricketer Shane Warne p",
      url: "https://menafn.com/1103811021/UAE-doctors-turn-spotlight-on-heart-health-after-Shane-Warnes-sudden-death",
      urlToImage:
        "https://menafn.com/updates/pr/2022-03/08/KT_5da9eimage_story.jpg",
      publishedAt: "2022-03-08T09:01:47Z",
      content:
        "(MENAFN- Khaleej Times) \r\n Published: Tue 8 Mar 2022, 11:55 AM\r\nLast updated: Tue 8 Mar 2022, 12:01 PM\r\nOn March 4, legendary Australian cricketer Shane Warne passed away, aged 52, leaving fans in th… [+4500 chars]",
    },
    {
      source: { id: null, name: "World Health Organization" },
      author: null,
      title:
        "Getting vaccinated while pregnant – one woman's story of what persuaded her to get the jab - WHO/Europe",
      description:
        "As we celebrate International Women’s Day on 8 March, we recognize that pregnant women are one of the groups most vulnerable to developing serious illness and complications from COVID-19. Cara Jamieson, a breastfeeding specialist who works and volunteers in t…",
      url: "https://www.euro.who.int/en/health-topics/health-emergencies/pages/news/news/2022/03/getting-vaccinated-while-pregnant-one-womans-story-of-what-persuaded-her-to-get-the-jab",
      urlToImage:
        "https://www.euro.who.int/__data/assets/image/0005/243581/who-europe-250.png",
      publishedAt: "2022-03-08T08:41:11Z",
      content:
        "As we celebrate International Women’s Day on 8 March, we recognize that pregnant women are one of the groups most vulnerable to developing serious illness and complications from COVID-19. Cara Jamies… [+3019 chars]",
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
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "ET HealthWorld",
      title:
        "Heart attack plus cardiac arrest survivors at higher risk of early death: Research - ETHealthWorld",
      description:
        "A heart attack is when blood flow to the heart is blocked, and sudden cardiac arrest is when the heart malfunctions and suddenly stops beating unexpectedly. Cardiac arrest can be fatal if not treated immediately.",
      url: "https://health.economictimes.indiatimes.com/news/industry/heart-attack-plus-cardiac-arrest-survivors-at-higher-risk-of-early-death-research/90073235",
      urlToImage:
        "https://etimg.etb2bimg.com/thumb/msid-90073235,imgsize-22820,width-1200,height-628,overlay-ethealthworld/heart-attack-plus-cardiac-arrest-survivors-at-higher-risk-of-early-death-research.jpg",
      publishedAt: "2022-03-08T08:30:00Z",
      content:
        "Washington: The findings of a new study suggest that patients who survive a heart attack together with sudden cardiac arrest are at a higher risk of dying within six years following hospital discharg… [+4345 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Women's Day 2022: Know Why Rheumatic Diseases Are More Common In Women Than Men | TheHealthSite.com - TheHealthSite",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMinwFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL2Rpc2Vhc2VzLWNvbmRpdGlvbnMtd29tZW5zLWhlYWx0aC93b21lbnMtZGF5LTIwMjItZXZlcnktd29tYW4tbmVlZHMtdG8tYmUtYXdhcmUtb2YtcmhldW1hdGljLWRpc2Vhc2VzLTg2NzM0Mi_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-08T08:01:00Z",
      content: null,
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "Touch-sensing protein in the gut likely plays a key role in constipation - News-Medical.Net",
      description:
        "When we eat food, our gut somehow senses its presence to begin shifting it along our digestive tract, but the question has always been – how?",
      url: "https://www.news-medical.net/news/20220308/Touch-sensing-protein-in-the-gut-likely-plays-a-key-role-in-constipation.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Protein-620x480.jpg",
      publishedAt: "2022-03-08T06:54:00Z",
      content:
        "When we eat food, our gut somehow senses its presence to begin shifting it along our digestive tract, but the question has always been – how?\r\nNow, new Flinders University research using both human g… [+3417 chars]",
    },
    {
      source: { id: null, name: "Phone Mantra" },
      author: "Admin",
      title:
        "if you have these symptoms, you need to intervene immediately - Phonemantra",
      description:
        "Often unsuspected allies for our health can be hidden among the supermarket counters. In fact, nutrition is one of the most valuable tools we have to keep fit.",
      url: "https://phonemantra.com/if-you-have-these-symptoms-you-need-to-intervene-immediately/",
      urlToImage:
        "https://phonemantra.com/wp-content/uploads/2022/02/secrets-to-lose-weight.jpeg",
      publishedAt: "2022-03-08T05:56:46Z",
      content:
        "Often unsuspected allies for our health can be hidden among the supermarket counters. In fact, nutrition is one of the most valuable tools we have to keep fit. However, even if we follow a correct di… [+3163 chars]",
    },
    {
      source: { id: null, name: "Zoom" },
      author: "Times Now Digital",
      title:
        "People with heart defects at greater risk for severe COVID-19 illness: Study - Times Now",
      description:
        "New research has found that people with a congenital heart defect who are hospitalized with COVID-19 infection are at higher risk for severe illness or death than those without a heart defect.",
      url: "https://www.timesnownews.com/health/people-with-heart-defects-at-greater-risk-for-severe-covid-19-illness-study-article-90069490",
      urlToImage:
        "https://static.tnn.in/thumb/msid-90069490,imgsize-100,width-1280,height-720,resizemode-75/90069490.jpg",
      publishedAt: "2022-03-08T05:45:00Z",
      content:
        "Not my son, I did it for myself! Oindrila on her journey to IIM Ahmedabad - 13 years after her graduation",
    },
    {
      source: { id: null, name: "Phone Mantra" },
      author: "Admin",
      title:
        "Vitamin D, don't underestimate it: if you have these symptoms, you need to intervene immediately - Phonemantra",
      description:
        "It seems like just one of the many vitamins, yet the role of Vitamin D is fundamental for psycho-physical well-being. That's when it is necessary to intervene",
      url: "https://phonemantra.com/vitamin-d-dont-underestimate-it-if-you-have-these-symptoms-you-need-to-intervene-immediately/",
      urlToImage:
        "https://phonemantra.com/wp-content/uploads/2022/02/Vitamin-deficiency.jpg",
      publishedAt: "2022-03-08T05:32:12Z",
      content:
        "It seems like just one of the many vitamins, yet the role of Vitamin D is fundamental for psycho-physical well-being. That’s when it is necessary to intervene\r\nVitamins supplements as a capsule with … [+2598 chars]",
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
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "IANS",
      title:
        "Coronavirus: Is cow milk effective against COVID-19? - Times of India",
      description:
        "Cow milk contains proteins with virus inhibiting properties that can help prevent Covid-19 from replicating in a pe",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-is-cow-milk-effective-against-covid-19/articleshow/90069010.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-90069042,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-17964/90069042.jpg",
      publishedAt: "2022-03-08T05:23:00Z",
      content:
        "Cow milk contains proteins with virus inhibiting properties that can help prevent Covid-19 from replicating in a person's body and cause infection, according to a study.\r\nThe protein lactoferrin is f… [+2059 chars]",
    },
    {
      source: { id: null, name: "News9live.com" },
      author: "Agence France-Presse",
      title:
        "After two years of COVID, can endemic be a reality soon? Experts advise caution - News9 LIVE",
      description:
        "WHO has said that the acute phase of the pandemic could end by the middle of this year -- if around...",
      url: "https://www.news9live.com/health/covid-19/after-two-years-of-covid-can-endemic-be-a-reality-soon-experts-advise-caution-157740",
      urlToImage:
        "https://media.news9live.com/h-upload/2022/03/08/251045-corona-5401250960720.jpg",
      publishedAt: "2022-03-08T05:00:14Z",
      content:
        'Two years after the official start of the pandemic, some countries are now trying to "live with COVID", however, scientists warn that potential new variants and unequal vaccination rates threaten any… [+4663 chars]',
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "Bacterial coinfection pervasiveness and antibiotic use in COVID-19 patients - News-Medical.Net",
      description:
        "In a recent study posted to the medRxiv* pre-print server, researchers conducted a meta-analysis to determine the bacterial coinfection and antibiotic usage prevalence in coronavirus disease 2019 (COVID-19) patients.",
      url: "https://www.news-medical.net/news/20220307/Bacterial-coinfection-pervasiveness-and-antibiotic-use-in-COVID-19-patients.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_706441_16467144688638049.jpg",
      publishedAt: "2022-03-08T04:42:00Z",
      content:
        "In a recent study posted to the medRxiv* pre-print server, researchers conducted a meta-analysis to determine the bacterial coinfection and antibiotic usage prevalence in coronavirus disease 2019 (CO… [+5593 chars]",
    },
    {
      source: { id: null, name: "DNA India" },
      author: "Dr Richa Jagtap",
      title:
        "International Women's Day: What is PCOS? Know all about this hormonal disorder, treatment and more - DNA India",
      description:
        "PCOS is a gynecological hormonal disorder, which affects around 10% of women in their reproductive age.",
      url: "https://www.dnaindia.com/health/report-international-women-s-day-what-is-pcos-know-all-about-this-hormonal-disorder-treatment-and-more-2938340",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/03/08/1025119-pcos.jpg",
      publishedAt: "2022-03-08T03:30:00Z",
      content:
        "Polycystic ovarian syndrome (PCOS) is not a disease. It’s a syndrome where women have a hormonal imbalance and irregular menses. It’s commonly seen in women of reproductive age group - 17-36 years. M… [+2993 chars]",
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "French study shows COVID vaccine efficacy 94% against severe outcomes - News-Medical.Net",
      description:
        "A recent paper published on the medRxiv preprint server utilized data from three national databases containing an abundance of information on Covid-19 screening (SI-DEP), vaccination (VAC-SI), and hospitalizations (SI-VIC) in France to provide additional pers…",
      url: "https://www.news-medical.net/news/20220307/French-study-shows-COVID-vaccine-efficacy-9425-against-severe-outcomes.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_706438_16467096650768850.jpg",
      publishedAt: "2022-03-08T03:22:00Z",
      content:
        "In late December 2019, France began administering vaccinations against coronavirus disease 2019 (COVID-19) to its population. At the end of 2021, 77% of the entire population were fully vaccinated, a… [+7367 chars]",
    },
    {
      source: { id: null, name: "Zoom" },
      author: "TN Digital",
      title:
        "Disordered eating - 5 signs that are normalised; breaking the habit for healthy eating - Times Now",
      description:
        "Certain eating habits, however problematic they may be, have been normalised in a society that has put the mental health of several individuals in jeopardy.",
      url: "https://www.timesnownews.com/health/disordered-eating-5-signs-that-are-normalised-breaking-the-habit-for-healthy-eating-article-90066656",
      urlToImage:
        "https://static.tnn.in/thumb/msid-90066656,imgsize-100,width-1280,height-720,resizemode-75/90066656.jpg",
      publishedAt: "2022-03-08T03:20:00Z",
      content:
        "Ukraine-Russia War: No safe corridor for stranded citizens in Sumy despite repeated urgings, India tells UNSC",
    },
    {
      source: { id: null, name: "Hippocraticpost.com" },
      author: "Hippocratic Post",
      title: "Immune boost: The benefits of vitamins - The Hippocratic Post",
      description:
        "Immune boost: The benefits of vitamins for your immune system: If you’re one of those people who frequently gets colds or the flu,",
      url: "https://www.hippocraticpost.com/integrative/immune-boost-the-benefits-of-vitamins/",
      urlToImage:
        "https://www.hippocraticpost.com/wp-content/uploads/2022/03/pexels-anna-shvets-3683074.jpg",
      publishedAt: "2022-03-08T02:47:34Z",
      content:
        "Immune boost: The benefits of vitamins for your immune system: If youre one of those people who frequently gets colds or the flu, your immune system may be out of balance. The immune system’s primary… [+4930 chars]",
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "Study offers insight into molecular biology of the brain in bipolar disorder patients - News-Medical.Net",
      description:
        "In a comprehensive study involving one of the largest-ever samples of post-mortem brains, scientists at the Lieber Institute for Brain Development, in collaboration with researchers at the Johns Hopkins School of Medicine and Bloomberg School of Public Health…",
      url: "https://www.news-medical.net/news/20220307/Study-offers-insight-into-molecular-biology-of-the-brain-in-bipolar-disorder-patients.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2014/7/Bipolar_Disorder-620x480.jpg",
      publishedAt: "2022-03-08T02:45:00Z",
      content:
        "In a comprehensive study involving one of the largest-ever samples of post-mortem brains, scientists at the Lieber Institute for Brain Development, in collaboration with researchers at the Johns Hopk… [+6608 chars]",
    },
    {
      source: { id: null, name: "EurekAlert" },
      author: null,
      title:
        "Optimism may promote emotional well-being by limiting how often one experiences stressful situations - EurekAlert",
      description:
        "“Don’t worry, be happy,” is more than just song lyrics. A growing body of evidence supports an association between optimism and healthy aging, but it is unclear how optimism impacts health. \n\nWhen it comes to dealing with day-to-day stressors, such as househo…",
      url: "https://www.eurekalert.org/news-releases/945280",
      urlToImage:
        "https://www.eurekalert.org/images/EurekAlert-bluebg_Twitter_601X601.png",
      publishedAt: "2022-03-08T02:02:09Z",
      content:
        "EMBARGOED by the Journal of GerontologySeries B: Psychological Sciences and Social Sciences untilMarch 7, 2022, 12:01 a.m., ETContact: Gina DiGravio, 617-358-7838, ginad@bu.edu\r\nOptimism May Promote … [+3034 chars]",
    },
    {
      source: { id: null, name: "ThePrint" },
      author: null,
      title:
        "1 in 7 women aged 50-74 who undergo mammogram ‘overdiagnosed’ for breast cancer, finds US study - ThePrint",
      description:
        "US study looked at nearly 36,000 women who underwent screening & found that in many cases pre-cancers may not have grown into full malignancy before the women died of other causes.",
      url: "https://theprint.in/health/1-in-7-women-aged-50-74-who-undergo-mammogram-overdiagnosed-for-breast-cancer-finds-us-study/862450/",
      urlToImage:
        "https://static.theprint.in/wp-content/uploads/2022/03/breast.jpg",
      publishedAt: "2022-03-08T01:30:36Z",
      content:
        "New Delhi: A study in the US has estimated that breast cancer is overdiagnosed in about one in every seven women aged between 50 to 74 years who undergo a mammogram in the country.\r\nOverdiagnosis mea… [+3341 chars]",
    },
    {
      source: { id: null, name: "Cureus.com" },
      author: null,
      title:
        "A Practical Perspective of the Hematologic Manifestations of Systemic Lupus Erythematosus - Cureus",
      description:
        "Systemic lupus erythematosus (SLE) is a chronic inflammatory disease with an unknown etiology that can affect any organ or system of the human body. Hematological, renal, or central nervous system manifestations in these patients result in great morbidity bec…",
      url: "https://www.cureus.com/articles/86821-a-practical-perspective-of-the-hematologic-manifestations-of-systemic-lupus-erythematosus",
      urlToImage:
        "https://assets.cureus.com/uploads/figure/file/335863/article_river_0e40ef9098d711ecb1a7dde17601a256-anemia.png",
      publishedAt: "2022-03-08T00:28:35Z",
      content:
        "Hematological abnormalities are common in systemic lupus erythematosus (SLE), both at the time of initial diagnosis and throughout the disease. The most frequent hematologic manifestations include an… [+26736 chars]",
    },
    {
      source: { id: null, name: "News-Medical.Net" },
      author: null,
      title:
        "Study provides new insights into the communication of bacteria with their host - News-Medical.Net",
      description:
        "A newly discovered protein helps bacteria recognize stress hormones in the human body and direct their motion in the host.",
      url: "https://www.news-medical.net/news/20220307/Study-provides-new-insights-into-the-communication-of-bacteria-with-their-host.aspx",
      urlToImage:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/3/bacteria_-_Sebastian_Kaulitzki_46826fb7971649bfaca04a9b4cef3309-620x480.jpg",
      publishedAt: "2022-03-07T23:52:00Z",
      content:
        "A newly discovered protein helps bacteria recognize stress hormones in the human body and direct their motion in the host.\r\nIn humans and animals, catecholamines such as epinephrine, norepinephrine, … [+3909 chars]",
    },
    {
      source: { id: null, name: "Rising Kashmir Daily English Newspaper" },
      author: null,
      title: "Health Issues in Women: The Heart Perspective - Rising Kashmir",
      description:
        "Rising Kashmir: Leading English newspaper in Jammu and Kashmir",
      url: "https://www.risingKashmir.com/",
      urlToImage:
        "https://www.risingkashmir.com/userfiles/image/safe_imagenow.png",
      publishedAt: "2022-03-07T21:56:05Z",
      content: null,
    },
    {
      source: { id: null, name: "Medscape" },
      author: "Heidi Splete",
      title:
        "Double-Dose COVID Vaccines ― Limited Efficacy Against Omicron - Medscape",
      description:
        "Boosters yielded short-term effectiveness that waned over time.",
      url: "https://www.medscape.com/viewarticle/969788",
      urlToImage:
        "https://img.medscape.com/thumbnail_library/dt_220307_omicron_vaccine_800x450.jpg",
      publishedAt: "2022-03-07T19:27:20Z",
      content:
        "Editor's note: Find the latest COVID-19 news and guidance in Medscape's Coronavirus Resource Center.\r\nThe currently available two-dose COVID-19 vaccines were not effective in preventing symptomatic d… [+6379 chars]",
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
      source: { id: null, name: "Contagionlive.com" },
      author: "Nina Cosdon",
      title:
        "Seeking Solutions for Endocarditis in People Who Inject Drugs - Contagionlive.com",
      description:
        "“People don’t recognize that at least 1 in 5 of the deaths from opioids may result from endocarditis,” said National Institute of Drug Abuse (NIDA) director Dr. Nora Volkow, adding that endocarditis is “100% preventable.”",
      url: "https://www.contagionlive.com/view/seeking-solutions-for-endocarditis-in-people-who-inject-drugs",
      urlToImage:
        "https://cdn.sanity.io/images/0vv8moc6/contagion/2ba15b325feef882e7ac332d6c9ac3abb1c2c0f4-700x397.jpg?fit=crop&auto=format",
      publishedAt: "2022-03-07T18:28:50Z",
      content:
        "Endocarditis, the inflammation of the heart valves, has been on the rise for the past several years, and increase largely attributed to the opioid epidemic. Injection drug use accounts for 1 in 10 in… [+2887 chars]",
    },
    {
      source: { id: null, name: "Catchnews.com" },
      author: null,
      title:
        "Lymphatic disorder may cause stillbirth, chronic disease in affected children: Study - Catch News",
      description:
        "CCB Director Professor Natasha Harvey said a genetic study of six families affected by stillbirth or lymphoedema revealed the link between a mutated protein-coding gene called MDFIC and fluid accumulation in vital organs and tissues.",
      url: "https://www.catchnews.com/health-news/lymphatic-disorder-may-cause-stillbirth-chronic-disease-in-affected-children-study-231177.html",
      urlToImage:
        "http://images.catchnews.com/upload/2022/03/07/baby_lymphatic_231177_730x419.jpg",
      publishedAt: "2022-03-07T18:20:00Z",
      content:
        "In a breakthrough discovery, South Australian researchers have identified a genetic mutation responsible for a lymphatic disorder that may be responsible for causing stillbirth or severe, chronic dis… [+2824 chars]",
    },
    {
      source: { id: null, name: "Playcrazygame.com" },
      author: "Jenni Smith",
      title:
        "Study explains why Alzheimer’s is more commonly diagnosed in women | Health - Play Crazy Game",
      description:
        "Playback: ACity ON Alzheimer's: Researchers discover why women are more at risk of suffering from the disease Although it is known that women are more at risk of developing Alzheimer's disease, the causes that lead to this phenomenon were until then unknown t…",
      url: "https://playcrazygame.com/2022/03/07/study-explains-why-alzheimers-is-more-commonly-diagnosed-in-women-health/",
      urlToImage:
        "https://i0.statig.com.br/bancodeimagens/aw/do/58/awdo58395m9tjr2x1qdwzr3gy.jpg",
      publishedAt: "2022-03-07T17:54:02Z",
      content:
        "Playback: ACity ONAlzheimer’s: Researchers discover why women are more at risk of suffering from the disease\r\nAlthough it is known that women are more at risk of developing Alzheimer’s disease, the c… [+3872 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "New research could help find a therapy to treat COVID-19 - Drug Target Review",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiZmh0dHBzOi8vd3d3LmRydWd0YXJnZXRyZXZpZXcuY29tL25ld3MvMTAxODA5L25ldy1yZXNlYXJjaC1jb3VsZC1oZWxwLWZpbmQtYS10aGVyYXB5LXRvLXRyZWF0LWNvdmlkLTE5L9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-03-07T16:18:18Z",
      content: null,
    },
    {
      source: { id: null, name: "The Times of Israel" },
      author: null,
      title:
        "Health Ministry updates guidelines on polio vaccines after first case in decades - The Times of Israel",
      description:
        "Top health official recommends Jerusalem-area kids get first dose at 6 weeks, says there are at least dozens more asymptomatic cases but doesn't predict wave of infections",
      url: "https://www.timesofisrael.com/health-ministry-updates-guidelines-on-polio-vaccines-after-first-case-in-decades/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2022/01/F211212YS117-e1641247215561-1024x640.jpg",
      publishedAt: "2022-03-07T16:13:01Z",
      content:
        "A top health official on Monday announced the Health Ministry was updating its advice on when some children should be vaccinated against polio, after a case was discovered in Israel for the first tim… [+2224 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "ANI",
      title:
        "Small changes do not prevent long-term weight gain: Study - Hindustan Times",
      description:
        "According to a trial done by researchers, small changes to calorie intake and physical activity levels do not prevent long-term weight gain better than monitoring alone. | Health",
      url: "https://www.hindustantimes.com/lifestyle/health/small-changes-do-not-prevent-long-term-weight-gain-study-101646666724602.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/07/1600x900/weight_gain_thumb_1645620042411_1646666880092.jpg",
      publishedAt: "2022-03-07T15:31:03Z",
      content:
        "According to a trial done by researchers, small changes to calorie intake and physical activity levels do not prevent long-term weight gain better than monitoring alone. The study was published in th… [+2195 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "WHO's Science in 5 on COVID-19: Update on Long COVID #Shorts - World Health Organization (WHO)",
      description:
        "#Shorts #WHO #COVID19 #ScienceIn5 Long COVID symptomsWhat have we learned about the symptoms of Long COVID or Post COVID-19 condition so far? How long does i...",
      url: "https://www.youtube.com/watch?v=3WUmDzKhkS4",
      urlToImage: "https://i.ytimg.com/vi/3WUmDzKhkS4/hqdefault.jpg",
      publishedAt: "2022-03-07T14:45:34Z",
      content: null,
    },
    {
      source: { id: null, name: "Eatthis.com" },
      author: "Ferozan Mast",
      title:
        'The #1 Sign Your Blood Pressure is "Way Too High" — Eat This Not That - Eat This, Not That',
      description:
        "High blood pressure is a dangerous health condition, yet very sneaky—people often have no idea it’s even happening.",
      url: "http://www.eatthis.com/news-the-1-sign-your-blood-pressure-is-way-too-high/",
      urlToImage:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mature-woman-blood-pressure-hypertension-doctor-nurse.jpg?quality=82&strip=all",
      publishedAt: "2022-03-07T14:15:28Z",
      content:
        "High blood pressure is a dangerous health condition, yet very sneakypeople often have no idea it's even happening. \"Hypertension doesn't often cause symptoms, which is why it is known as the 'silent … [+3974 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Ronnie Koenig",
      title:
        "‘A lightbulb went off’: Women share what it’s like to be diagnosed with ADHD as an adult - Yahoo News",
      description:
        "Attention-deficit/hyperactivity disorder (ADHD) is a chronic condition that is often detected in childhood and continues through adulthood.",
      url: "https://news.yahoo.com/lightbulb-went-off-women-share-141105226.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/9SSBOo96H.H.pDl_d45wVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/36TEDjekNwnhMHQn5uFmdw--~B/aD0xNjY3O3c9MjUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/nbc_today_217/cd190c94c17964fe413d16f8fdffe24c",
      publishedAt: "2022-03-07T14:11:05Z",
      content:
        "Attention-deficit/hyperactivity disorder (ADHD) is a chronic condition that is often detected in childhood and continues through adulthood. According to the Association for Child and Adolescent Menta… [+5485 chars]",
    },
    {
      source: { id: null, name: "Bustle" },
      author: "Eve Ettinger",
      title: "Is Our Definition of Burnout All Wrong? - Bustle",
      description:
        "A term suggesting rock bottom stops meaning rock bottom when when we're all there and, somehow, still going. Is our definition of burnout all wrong?",
      url: "https://www.bustle.com/wellness/burnout-definition-what-we-get-wrong",
      urlToImage:
        "https://imgix.bustle.com/uploads/image/2022/2/18/d4e5732d-90e4-44c8-b62b-51cbb53b414b-misunderstandings_social.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      publishedAt: "2022-03-07T14:00:25Z",
      content:
        "My peers started talking about burnout when Anne Helen Petersen first wrote about what she called the impossible task. She described a situation where a small, non-urgent task that would normally fee… [+14021 chars]",
    },
    {
      source: { id: null, name: "Indianwineacademy.com" },
      author: null,
      title:
        "STUDY: Wine in Moderation reduces Chance of Type 2 Diabetes - Indian Wine Academy",
      description: null,
      url: "https://www.indianwineacademy.com/item_1_906.aspx",
      urlToImage: null,
      publishedAt: "2022-03-07T13:52:54Z",
      content:
        "An analysis of health data for nearly 312,400 current drinkers suggests that consuming alcohol, most notably wine, with meals is associated with a lower risk of developing type 2 diabetes and offers … [+5267 chars]",
    },
    {
      source: { id: null, name: "Eatthis.com" },
      author: "Ferozan Mast",
      title:
        "The #1 Cause of High Insulin, According to Science — Eat This Not That - Eat This, Not That",
      description:
        "High insulin is a condition where blood insulin levels are higher than what is considered normal, and is linked to diabetes.",
      url: "http://www.eatthis.com/news-the-1-cause-of-high-insulin-according-to-science/",
      urlToImage:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2020/03/mature-woman-patient-doctor-visit-form.jpg?quality=82&strip=all",
      publishedAt: "2022-03-07T13:45:56Z",
      content:
        'High insulinalso known as hyperinsulinemiais a condition where blood insulin levels are higher than what is considered normal, and is linked to diabetes. (What is insulin? "Inside the pancreas, the h… [+4797 chars]',
    },
    {
      source: { id: "medical-news-today", name: "Medical News Today" },
      author: "Katharine Lang",
      title:
        "Blood test may predict long-term risk of diabetes and heart disease - Medical News Today",
      description:
        "According to a recent study, a simple lipid blood test may predict the long-term risk of type 2 diabetes and cardiovascular disease.",
      url: "https://www.medicalnewstoday.com/articles/lipid-profiling-could-give-early-warning-of-diabetes-and-heart-disease",
      urlToImage:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/02/lipid_test_panel_732x549_thumb.jpg",
      publishedAt: "2022-03-07T12:53:37Z",
      content:
        "<ul><li>A simple blood test may predict long-term risk of type 2 diabetes and cardiovascular disease.</li><li>In a study of 4,000 healthy adults, scientists found that levels of lipids in blood plasm… [+4583 chars]",
    },
    {
      source: { id: null, name: "Punjabnewsexpress.com" },
      author: null,
      title:
        "Covid in wildlife threatens emergence of new virus variant: WHO - Punjab News Express",
      description:
        "<p><strong>GENEVA:</strong>&nbsp;The introduction of SARS-CoV-2, the virus causing Covid-19 infection, to wildlife could result in the establishment of animal reservoirs, which may, in turn, result in the emergence of a new virus variant, the World Health Org…",
      url: "https://www.punjabnewsexpress.com/health/news/covid-in-wildlife-threatens-emergence-of-new-virus-variant-who-161164",
      urlToImage:
        "https://www.punjabnewsexpress.com/images/article/article161164.jpg",
      publishedAt: "2022-03-07T12:21:49Z",
      content:
        "GENEVA: The introduction of SARS-CoV-2, the virus causing Covid-19 infection, to wildlife could result in the establishment of animal reservoirs, which may, in turn, result in the emergence of a new … [+2283 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Livemint",
      title:
        "Covid can lead to diabetes, warns experts. 7 symptoms indicate you are suffering from high blood sugar after infection - Mint",
      description:
        "Instead of directly causing diabetes, COVID-19 may push patients with pre-existing but undiagnosed diabetes to see a physician for the first time",
      url: "https://www.livemint.com/science/health/covid-can-lead-to-diabetes-warns-experts-7-symptoms-indicate-you-are-suffering-from-high-blood-sugar-after-infection-11646648052667.html",
      urlToImage:
        "https://images.livemint.com/img/2022/03/07/600x338/COVID_1646653080940_1646653081192.jpg",
      publishedAt: "2022-03-07T11:39:44Z",
      content:
        "Apart from your respiratory organs, coronavirus can also affect other body organs like the heart, tissues and even your nervous system. Moreover, the virus can be fatal for those who have co-morbidit… [+1996 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "The vital importance of a colonoscopy | Wear the Gown - THV11",
      description:
        "We're learning about the ways you could avoid the second leading cause of cancer deaths in Arkansas: colorectal cancer.https://www.thv11.com/article/news/loc...",
      url: "https://www.youtube.com/watch?v=AUlFW5uP23k",
      urlToImage: "https://i.ytimg.com/vi/AUlFW5uP23k/hqdefault.jpg",
      publishedAt: "2022-03-07T11:25:54Z",
      content: null,
    },
    {
      source: { id: null, name: "Vervetimes.com" },
      author: "Monica Lozano",
      title:
        "Heart disease: 20 minutes of exercise may ‘stave off major heart disease’ at 70 - Verve Times",
      description:
        "Ageing makes people particularly susceptible to heart disease. It is one of the risk factors that, together with gender, family history, and ethnicity cannot be avoided or modified. Exercise later in life, however, could help reduce the risk of heart",
      url: "https://vervetimes.com/heart-disease-20-minutes-of-exercise-may-stave-off-major-heart-disease-at-70/",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/11/750x445/1576694.jpg",
      publishedAt: "2022-03-07T10:22:52Z",
      content:
        "Ageing makes people particularly susceptible to heart disease. It is one of the risk factors that, together with gender, family history, and ethnicity cannot be avoided or modified. Exercise later in… [+2317 chars]",
    },
    {
      source: { id: null, name: "Sparkchronicles.com" },
      author: null,
      title:
        "When to eat to strongly reduce high blood cholesterol before even walking and running - Spark Chronicles",
      description:
        "Following a healthy diet low in fat, especially after passing the threshold of the",
      url: "https://sparkchronicles.com/when-to-eat-to-strongly-reduce-high-blood-cholesterol-before-even-walking-and-running/",
      urlToImage:
        "https://www.proiezionidiborsa.it/wp-content/uploads/2021/11/alimentazione.jpg",
      publishedAt: "2022-03-07T10:20:46Z",
      content:
        "Following a healthy diet low in fat, especially after passing the threshold of the “door” becomes almost a rule to feel good and fit. In fact, if at twenty you really digest everything, at some point… [+2891 chars]",
    },
    {
      source: { id: null, name: "India.com" },
      author: "PTI",
      title:
        "US scientists detect Omicron variant of Covid-19 for first time in deer - Zee News",
      description:
        "Some white-tailed deer living in the US are actively infected with the Omicron variant of SARS-CoV-2, the virus that causes COVID-19, according to a study.",
      url: "https://zeenews.india.com/world/us-scientists-detect-omicron-variant-of-covid-19-for-first-time-in-deer-2442988.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2022/03/07/1020616-deer-us.jpg",
      publishedAt: "2022-03-07T09:21:44Z",
      content:
        "Washington: Some white-tailed deer living in the US are actively infected with the Omicron variant of SARS-CoV-2, the virus that causes COVID-19, according to a study.\r\nThe yet-to-be peer-reviewed st… [+3041 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Priyanka Sharma",
      title:
        "One in 10 obese children to be from India by 2030, says report - Mint",
      description:
        "Childhood obesity is now a growing public health concern in low and middle-income countries where early prevention is critical. The biggest increase between 2020 and 2030 is likely to be seen in LMICs, where the number of children with obesity will more than …",
      url: "https://www.livemint.com/science/health/one-in-10-obese-children-to-be-from-india-by-2030-says-report-11646643709708.html",
      urlToImage:
        "https://images.livemint.com/img/2022/03/07/600x338/scale_1646644227047.jpg",
      publishedAt: "2022-03-07T09:11:47Z",
      content:
        "NEW DELHI: India is expected to have over 27 million children with obesity by 2030, according to a new report released by the World Obesity Federation.\r\nThis represents over half of the children with… [+3461 chars]",
    },
    {
      source: { id: null, name: "Dovepress.com" },
      author: "Dove Press",
      title:
        "Potential roles of Glucagon-like peptide-1 and its analogues | DNND - Dove Medical Press",
      description:
        "Discussing the role of insulin dysfunction in the pathogenesis of neurological diseases, specifically dementia",
      url: "https://www.dovepress.com/potential-roles-of-glucagon-like-peptide-1-and-its-analogues-in-dement-peer-reviewed-fulltext-article-DNND",
      urlToImage: "https://www.dovepress.com/assets/img/addon/og_logo.png",
      publishedAt: "2022-03-07T07:04:18Z",
      content:
        "Introduction\r\nDementia is an irreversible, slowly progressive syndrome characterized by cognitive decline and memory impairment due to anatomical changes in the brain.1 It is primarily associated wit… [+102361 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Melody Schreiber",
      title:
        "Experts urge US cities and states to prep for future outbreaks as Omicron slows - The Guardian",
      description:
        "As cases and hospitalizations decline, public health experts worry it might lull people into thinking the pandemic is over",
      url: "https://amp.theguardian.com/us-news/2022/mar/07/us-covid-future-variants-outbreaks-omicron",
      urlToImage: null,
      publishedAt: "2022-03-07T07:01:00Z",
      content:
        "US newsAs cases and hospitalizations decline, public health experts worry it might lull people into thinking the pandemic is over\r\nOmicron is receding in the US and states and cities are lifting rema… [+5460 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "What is bird flu and how it spreads? - Business Standard",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4Pd0OZMYnLE",
      urlToImage: null,
      publishedAt: "2022-03-07T03:30:29Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: null, name: "Neurosciencenews.com" },
      author: "https://www.facebook.com/neurosciencenews",
      title:
        "Ketogenic Diet May Reduce Disability and Improve Quality of Life in People With Multiple Sclerosis - Neuroscience News",
      description:
        "Multiple sclerosis patients who followed a ketogenic diet experienced less fatigue, improved symptoms of depression, and improved quality of life. Additionally, those who followed a keto diet had reduced levels of inflammatory markers in blood samples.",
      url: "https://neurosciencenews.com/ketogenic-diet-multiple-sclerosis-20142/",
      urlToImage:
        "https://neurosciencenews.com/files/2022/03/keto-diet-ms-neurosicnes.jpg",
      publishedAt: "2022-03-06T22:22:21Z",
      content:
        "Summary: Multiple sclerosis patients who followed a ketogenic diet experienced less fatigue, improved symptoms of depression, and improved quality of life. Additionally, those who followed a keto die… [+4949 chars]",
    },
    {
      source: { id: null, name: "Express" },
      author: "Christopher Sharp",
      title:
        "Heart disease: Lifestyle factors that can increase risk of developing heart condition - Express",
      description:
        "HEART disease is an umbrella term for a number of conditions including heart attacks, high cholesterol and high blood pressure. There are several ways for a person to reduce their risk in their everyday life.",
      url: "https://www.express.co.uk/life-style/health/1576543/heart-disease-lifestyle-smoking-alcohol",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/11/750x445/1576543.jpg",
      publishedAt: "2022-03-06T21:04:25Z",
      content: null,
    },
    {
      source: { id: null, name: "Leroyfcpress.com" },
      author: "lpadmin",
      title:
        "Attention! Bad breath is one of the most serious problems… – LeRoy Farmer City Press - LeRoy Farmer City Press",
      description:
        "Although bad breath is not taken seriously, it negatively affects the life of the person and his/her environment. It causes discomfort in daily activities. If you have bad breath that you think will g",
      url: "https://www.leroyfcpress.com/attention-bad-breath-is-one-of-the-most-serious-problems/",
      urlToImage:
        "https://www.leroyfcpress.com/wp-content/uploads/2022/03/252-attention-bad-breath-is-one-of-the-most-serious-problems.jpg",
      publishedAt: "2022-03-06T20:07:38Z",
      content:
        "Although bad breath is not taken seriously, it negatively affects the life of the person and his/her environment. It causes discomfort in daily activities. If you have bad breath that you think will … [+1996 chars]",
    },
    {
      source: { id: null, name: "LatestLY" },
      author: "ANI",
      title:
        "Science News | Researchers Examine if Medicines Affect Body's Response to Infections Like COVID-19 - LatestLY",
      description:
        "Get latest articles and stories on Science at LatestLY. A recent study led by a team of clinical researchers have analyzed the immune responses to paracetamol, non-steroidal anti-inflammatory drugs (NSAIDs) and opioid analgesics, with a focus on infectious di…",
      url: "https://www.latestly.com/agency-news/science-news-researchers-examine-if-medicines-affect-bodys-response-to-infections-like-covid-19-3442679.html",
      urlToImage:
        "https://st1.latestly.com/wp-content/uploads/2022/03/gkjhdgdriuytr874658720220306173106-588x441.jpg",
      publishedAt: "2022-03-06T17:44:25Z",
      content:
        "Sydney [Australia], March 6 (ANI): A recent study led by a team of clinical researchers have analyzed the immune responses to paracetamol, non-steroidal anti-inflammatory drugs (NSAIDs) and opioid an… [+5779 chars]",
    },
    {
      source: { id: null, name: "Eatthis.com" },
      author: "Samantha Boesch",
      title: "Best Breakfast Recipes to Help Lose Abdominal Fat - msnNOW",
      description:
        "If you need help thinking of breakfast recipes for weight loss, we've got you covered. Here are some the of easiest, most delicious to try.",
      url: "http://www.eatthis.com/breakfast-recipes-lose-abdominal-fat/",
      urlToImage:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/vegetarian-artichoke-feta-quiche.jpg?quality=82&strip=all",
      publishedAt: "2022-03-06T14:39:38Z",
      content:
        "Breakfast is not just a delicious way to start your day, but an important one for weight lossas long as you're making the right meal. Eating plenty of protein, healthy fats, and fiber for breakfast c… [+2516 chars]",
    },
    {
      source: { id: null, name: "Express" },
      author: "Adam Chapman",
      title: "Dementia: Skipping breakfast may increase risk - Express",
      description:
        "UNDERSTANDING the lifestyle factors that influence the risk of dementia is key to building buffers against it. A study published in Japanese Journal of Human Sciences of Health-Social Services found a particular breakfast habit was 'four times higher' among p…",
      url: "https://www.express.co.uk/life-style/health/1576385/dementia-symptoms-skipping-breakfast-increases-risk",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/11/750x445/1576385.jpg",
      publishedAt: "2022-03-06T13:13:00Z",
      content:
        "It’s a combination of two diets already known to reduce risk of heart and circulatory disease:\r\nThe Mediterranean diet (based on wholegrains, fish, pulses, fruits and vegetables)\r\nThe DASH (Dietary A… [+553 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Zarafshan Shiraz",
      title:
        "Fibroids: Types, causes, symptoms, risk factors, treatment of myomas by doctor - Hindustan Times",
      description:
        "Fibroids of the uterus or myomas as they are often called, are one of the commonest benign tumours of the reproductive tract found in women. Know from a doctor about what happens to a woman who has fibroids, its types, causes, symptoms, risk factors and treat…",
      url: "https://www.hindustantimes.com/lifestyle/health/fibroids-types-causes-symptoms-risk-factors-treatment-of-myomas-by-doctor-101646567549822.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/03/06/1600x900/pjimage_-_2022-03-06T172911.281_1646567887388_1646567897799.jpg",
      publishedAt: "2022-03-06T12:23:35Z",
      content:
        "Uterine fibroids or leiomyomas or myomas are a common type of noncancerous muscular tumour that vary a lot in size, shape and location and can grow in your uterus, on uterine wall, its surface or att… [+5193 chars]",
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
                src="https://media.news9live.com/h-upload/2022/03/08/251366-20-06-0302.jpg"
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

export default Health;
