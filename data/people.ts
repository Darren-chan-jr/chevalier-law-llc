export type Person = {
  slug: string;
  name: string;
  title: string;
  practiceAreas: string[];
  biography: string[];
  experience: string[];
  awards: string[];
  email?: string;
  phone?: string;   // T:
  mobile?: string;  // M:
  qualifications?: string[];
  photo?: string;   // "/people/lim-bee-li.jpg"
  banner?: string;  // "/people/lim-hero@2x.jpg" (falls back if missing)
};

export const people: Person[] = [
  {
    slug: "chong-eng-wee",
    name: "Chong Eng Wee",
    title: "Managing Director",
    practiceAreas: ["Corporate", "Commercial", "Dispute Resolution", "Banking & Finance"],
    biography: [
      "Eng Wee is the Managing Director and heads the Corporate & Capital Markets and China Practices at Chevalier Law LLC. He has deep expertise spanning corporate and securities laws, capital markets, mergers and acquisitions (both public & private), private equity, China, banking and finance, corporate restructuring, joint ventures, corporate and commercial contracts, regulatory compliance, corporate governance advisory and corporate secretarial work. He is qualified to practise in Singapore, Hong Kong, New South Wales, Australia, and New Zealand.",
      "Eng Wee has practised at leading international and local law firms in Singapore and as in–house counsel advising large companies listed on the main board of Singapore Exchange Securities Trading Limited (“SGX-ST”). He gained a good working knowledge of foreign investment laws in China while acting as the Representative for the Shanghai Representative Office of a previous law firm and was also previously joint Company Secretary for three SGX-ST main board listed companies.",
      "Eng Wee has advised listed companies, issue managers, underwriters and placement agents, private equity funds, multinational corporations, Chinese conglomerates, developers, high net-worth individuals and small and medium enterprises on a wide range of corporate, capital markets and private equity transactions including initial public offerings, pre-IPO investment, dual listings, reverse takeovers, public takeovers, de-listings, rights and warrants issues, placement, local and cross border acquisitions and disposals of shares, businesses and assets, downstream investment and compliance by private equity funds, joint ventures, corporate restructuring, various corporate actions by listed companies, and general corporate advisory work.",
      "Eng Wee has advised on various cross-border transactions with PRC elements, and frequently advises listed companies on their regulatory compliance and corporate governance issues. He has also advised licensed fund managers on matters and/or documentation pertaining to variable capital companies.",
      "Eng Wee has acted for both banking and financial institutions and borrowers on facility loans and security documents and has been involved in corporate real estate transactions involving sale and lease back of land and buildings, and acquisitions and disposals of office, commercial and residential buildings.",      
      "He is currently the Independent and Non-Executive Chairman of Polaris Limited and Heatec Jietong Holdings Ltd, both listed on the Catalist Board of the SGX-ST, and the Lead Independent and Non-Executive director (“INED”) at Willas-Array Electronics Limited, listed on the mainboard of both the SGX-ST and Hong Kong Stock Exchange (“HKSE”). He is also an INED at China Yuanbang Property Holdings Limited, a SGX-ST mainboard listed company, and Accrelist Limited and AJJ Medtech (Holdings) Limited, both SGX-ST Catalist listed companies. He was also formerly an INED of 2 SGX-ST main board listed companies, a company listed on both the main board of the HKSE and SGX-ST and another SGX-ST Catalist listed company.",
      "He is currently the Company Secretary of LHN Limited, a company dual-listed on the main board of SGX-ST and HKSE, China Vanadium Titano-Magnetite Mining Company Limited, a company listed on the main board of the HKSE, Shanghai Turbo Enterprises Ltd, a SGX-ST main board listed company and Sincap Group Limited, a SGX-ST Catalist listed company."
    ],
    experience: [
      "Advised on a reverse takeover by a Singapore main board listed company of a People's Republic of China (PRC) property developer for S$600 million.",
      "Advised the issuer on its initial public offering by way of placement of shares achieving a market capitalisation of approximately S$129 million.",
      "Advised a main board listed company on its S$220.5 million placement to its controlling shareholder comprising 350 million shares at S$0.63 each.",
      "Advised a multinational corporation on its acquisition of shares in a Singapore company for US$210 million",
      "Advised the offeror in its voluntary general offer for a dual listed company",
      "Advised a private equity fund on its US$50 million investment in a BVI company (a joint venture with a major international bank) whereby the BVI company indirectly holds interests in 3 wholly foreign owned enterprises in PRC which collectively own a residential building in China"
    ],
    awards: [
      "Singapore's Top 40 Most Influential Lawyers aged under 40 - Singapore Business Review (2015)"
    ],
    email: "engwee.chong@chevalierlawllc.com",
    //phone: "67858507",
    mobile: "+65 9850 7055",
    qualifications: [
      "University of Manchester",
      "National University of Singapore"
    ],
    photo: "/chong_eng_wee.png",
    banner: "/chong_eng_wee.png"
  },
  {
    slug: "lim-bee-li",
    name: "Lim Bee Li",
    title: "Director",
    practiceAreas: ["Corporate", "Commercial", "Dispute Resolution", "Banking & Finance"],
    biography: [
      "Bee Li is the Director of Chevalier Law LLC and she heads the International Arbitration and Commercial Litigation Practice at Chevalier Law LLC. Bee Li graduated from the University of Manchester (UK) in 2006 and she is admitted to the Singapore Bar.",
      "Bee Li has advised her clients on disputes and general business matters across a wide spectrum of industry sectors. Bee Li is experienced in landlord & tenants disputes, and has dealt extensively in construction related disputes and arbitration proceedings throughout her career.",
      "Other than her main area of work in dispute resolution, Bee Li also advised and represented sellers in two en-bloc sale involving a condominium estate and an industrial property. She also advised numerous Management Corporation Strata Titles of their duties and obligations under the Building Management & Strata Management Act in Singapore."
    ],
    experience: [
      "Acted for Appellants in a landmark case involving conversion of several machinery valued at S$ 1.2 million (approximate) and the issue of law to be determined involves whether contractual rights restricted the bailor’s rights under common law.",
      "Acted for Plaintiff in a landmark case involving the law of passing off and the intellectual property rights of a company as against the front cover of their horse-punting publication, with an estimated damages at S$ 1 million.",
      "Acted for Defendants in a construction claim amounting involving a hotel development in Maldives and the claim involves the construction of the terms of the contract pertaining to lump sum contract and/or remeasurement terms.",
      "Acted for Plaintiff in a claim amounting to approximately S$ 3 million involving conspiracy, breaches of fiduciary duties and breach of employment contract.",
      "Acted for Respondents in an arbitration proceeding involving a claim of over S$40 million for repudiatory breach of a Sub-Contract involving piling works relating to the construction of the Mass Rapid Transit (MRT) System in Singapore.",
      "Acted for a Hong Kong company as Respondents in an arbitration proceeding amounting to approximately S$ 10 million under the SIAC Rules for a claim involving breach of contract and fraudulent misrepresentation against a Canadian company over a Share Sales Agreement.",
      "Acted for Claimant in an arbitration proceeding involving a claim for various breaches of construction contract including issues relating to delay, disruption, defective works and consequential damages up to S$ 250,000.00.",
      "Acted for a listed company in Singapore involving a warehousing service agreement over rectification of contract and repudiatory breach of contract and for damages up to S$ 1.3 million",
      "Advised in relation to a shareholders’ agreement and joint venture agreement for a medical facility in Bangkok, Thailand.",
      "Advised in a hotel management agreement to set up a hospitality infrastructure in Penang, Malaysia.",
      "Advised in the development and management of a condominium estate in Cambodia and Myanmar.",
      "Advised in relation to a sale, supply and distributorship agreement for an international bedding company.",
      "Advised in relation to multiple residential developments in Kenya, Myanmar and Cambodia, involving the shareholders’ agreement, joint venture agreement and the construction agreement.",
      "Advised an international bank in relation to the use of universal life policies in Singapore as a form of loan collateral in its bank."
    ],
    awards: [],
    email: "beeli.lim@chevalierlawllc.com",
    phone: "+65 6980 8713",
    mobile: "+65 9337 7413",
    qualifications: [
      "University of Manchester",
    ],
    photo: "/lim_bee_li.png",
    banner: "/lim_bee_li.png"
  },
  {
    slug: "alvin-lim",
    name: "Alvin Lim",
    title: "Director",
    practiceAreas: ["Intellectual Property and Intangible Asset Acquisition", "Management", "Commercialization", "Enforcement", "Brand Protection Strategy"],
    biography: [
      "Alvin is a Director of Chevalier Law LLC and leads its Intellectual Property and Technology practice.",
      "Alvin has a strong IP litigation and enforcement practice, regularly acting for clients in patent, trademark, geographical indications, registered designs, copyright infringement cases, confidential information and trade secrets disputes, technology contracts litigation in Singapore and also cross border IP and technology related disputes including shareholder disputes involving IP ownership issues. Alvin also advises clients in data breach cases including data breach response, mitigation and prevention of further fraudulent activity such as identify theft.",
      "Alvin's experience in handling pharmacological advisory and patent linkage work has seen him act for multinational pharmaceutical companies such as Eli Lilly, F. Hoffmann-LA Roche AG, OSI Pharmaceuticals, Merck & Co, Bristol-Myers Squib Pharma Co and AstraZeneca. Other notable clients Alvin has acted for include Nokia Corporation, Asahi Glass, NexPlanar Corporation, Rokko Holdings, JCS Echigo Pte Ltd, Aurigin Technology Pte Ltd, Swiss Ranks Pte Ltd, Staywell Hospitality Pty Limited, ERS Electronic GMBH, Lenzing, Virtual Map, and TMRG Pte Ltd.",
      "Several of the cases in which Alvin has done involve novel issues of law and/or have been reported in the law journals and law reports of Singapore, including:",
      "IBI Group Hellas Single Member Societe Anonyme v Saber Holdings Pte Ltd [2023] SGDC 95",
      "Ncode Consultant Pte Ltd v We Are Perspective Pte Ltd [2023] SGDC 58",
      "Syed Ibrahim Shaik Mohideen v Wavoo Abdusalam Shahul Hameed & Ors [2022] SGHC 228",
      "TMRG Pte Ltd & Anor v Caerus Holding Pte Ltd & Anor [2022] SGHC(A) 4",
      "Consorzio del Formaggio Parmigiano Reggiano v Fonterra Brands (Singapore) Pte. Ltd. [2022] SGIPOS 7",
      "Sun Electric Pte Ltd v Sunseap Group Pte Ltd and Ors [2020] SGHCR 1",
      "Sun Electric Pte Ltd v Sunseap Group Pte Ltd and Ors [2019] SGHCR 11",
      "Novartis (Jiangsu) Pte Ltd v Bristol-Myers Squib Pharma Co [2018] 3 SLR 1194",
      "Dr Babor Gmbh & Co KG & Anor v Sante De Beaute Pte Ltd [2018] SGHC 159",
      "Starwood Hotels & Resorts Worldwide Inc and Sheraton International IP LLC v Staywell Hospitality Pty Limited [2018] SGIPOS 11",
      "Rohm & Haas Electronic Materials CMP Holdings Inc v NexPlanar Corp [2017] SGHC 310",
      "Ship's Equipment Centre Bremen GmbH v Fuji Trading (Jiangsu) Pte Ltd [2015] 4 SLR 781",
      "Invenpro (M) Sdn Bhd v JC Automation Pte Ltd [2014] 2 SLR 1045",
      "Astra Zeneca AB (SE) v Sanofi-Aventis Singapore Pte Ltd [2012] SGHC 16; [2013] SGHCR 7",
      "Hoya Corp v Asahi Glass Co Ltd [2010] SGHC 15",
      "ASM Assembly Automation Ltd v Aurigin Technology Pte Ltd [2010] 1 SLR 1",
      "Love & Co Pte Ltd v The Carat Club Pte Ltd [2009] 1 SLR(R) 561",
      "Virtual Map (Jiangsu) Pte Ltd v Singapore Land Authority [2007] SGDC",
      "N.V. Sumatra Tobacco Trading Company v British American Tobacco (brands) Inc [2008] SGIPOS1",
      "The non-contentious aspects of Alvin's practice include conducting IP and intangible asset audits, IP registration and prosecution work, acting for clients in commercial IP transactions, drafting and review of technology contracts, providing advice on regulatory law and compliance in respect of data privacy, medical, advertising and fintech laws. Alvin's past and present clients in this fields include Singapore Airlines, Global Schools Holdings, LingoAce, Teva Pharmaceuticals, House of Teak, Lao Ban Soyabean and several deep tech start-ups.",
      "Alvin has also been retained by clients as external 'in-house counsel' in diverse fields such as med tech, semiconductor manufacturing, beauty and aesthetics and automation, where he worked directly with and provided legal support to business stakeholders and executives.",
      "Alvin is a member of the Asian Patent Attorneys Association and serves on the Singapore Law Society's Inquiry Panel representing the Law Society in disciplinary proceedings. Alvin also served as a IPOS appointed consultant on IPOS’ IP Legal Clinic on IP infringement, opposition, invalidation or revocation matters from 2019 to 2024."
    ],
    experience: [
      "Acted for Appellants in a landmark case involving conversion of several machinery valued at S$ 1.2 million (approximate) and the issue of law to be determined involves whether contractual rights restricted the bailor’s rights under common law.",
      "Acted for Plaintiff in a landmark case involving the law of passing off and the intellectual property rights of a company as against the front cover of their horse-punting publication, with an estimated damages at S$ 1 million.",
      "Acted for Defendants in a construction claim amounting involving a hotel development in Maldives and the claim involves the construction of the terms of the contract pertaining to lump sum contract and/or remeasurement terms.",
      "Acted for Plaintiff in a claim amounting to approximately S$ 3 million involving conspiracy, breaches of fiduciary duties and breach of employment contract.",
      "Acted for Respondents in an arbitration proceeding involving a claim of over S$40 million for repudiatory breach of a Sub-Contract involving piling works relating to the construction of the Mass Rapid Transit (MRT) System in Singapore.",
      "Acted for a Hong Kong company as Respondents in an arbitration proceeding amounting to approximately S$ 10 million under the SIAC Rules for a claim involving breach of contract and fraudulent misrepresentation against a Canadian company over a Share Sales Agreement.",
      "Acted for Claimant in an arbitration proceeding involving a claim for various breaches of construction contract including issues relating to delay, disruption, defective works and consequential damages up to S$ 250,000.00.",
      "Acted for a listed company in Singapore involving a warehousing service agreement over rectification of contract and repudiatory breach of contract and for damages up to S$ 1.3 million",
      "Advised in relation to a shareholders’ agreement and joint venture agreement for a medical facility in Bangkok, Thailand.",
      "Advised in a hotel management agreement to set up a hospitality infrastructure in Penang, Malaysia.",
      "Advised in the development and management of a condominium estate in Cambodia and Myanmar.",
      "Advised in relation to a sale, supply and distributorship agreement for an international bedding company.",
      "Advised in relation to multiple residential developments in Kenya, Myanmar and Cambodia, involving the shareholders’ agreement, joint venture agreement and the construction agreement.",
      "Advised an international bank in relation to the use of universal life policies in Singapore as a form of loan collateral in its bank."
    ],
    awards: [
      "Leading Lawyer in Intellectual Property - AsiaLaw Leading Lawyers (2017 - 2018)",
      "Patent Star - Managing Intellectual Property's IP Stars (2019 - 2023)",
      "Silver Band in Enforcement & Litigation Singapore - World Trademark Review (2023)" 
    ],
    email: "alvin.lim@chevalierlawllc.com",
    //phone: "+65 6980 8713",
    mobile: "+65 9828 9770",
    qualifications: [
      "University of Manchester",
    ],
    photo: "/alvin_lim.png",
    banner: "/alvin_lim.png"
  },
  {
    slug: "melissa-leong",
    name: "Melissa Leong",
    title: "Director",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/melissa_leong.png",
    banner: "/melissa_leong.png"
  },
  {
    slug: "mark-go",
    name: "Mark Go",
    title: "Of Counsel",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/mark.png",
    banner: "/mark.png"
  },
  {
    slug: "nadiah-masud",
    name: "Nadiah Masud",
    title: "Associate Director",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/nadiah_masud.png",
    banner: "/nadiah_masud.png"
  },
  {
    slug: "ng-fang-yao",
    name: "Ng Fang Yao",
    title: "Associate Director",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/ng_fang_yao.png",
    banner: "/ng_fang_yao.png"
  },
  {
    slug: "wong-zhen-yang",
    name: "Wong Zhen Yang",
    title: "Senior Associate",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/wong_zhen_yang.png",
    banner: "/wong_zhen_yang.png"
  },
  {
    slug: "kurzbock-tsang-yu-han-kenn",
    name: "Kurzbock Tsang Yu Han Kenn",
    title: "Associate",
    practiceAreas: ["Employment", "Regulatory","Banking & Finance"],
    biography: [
      "Amelia counsels clients on employment and regulatory matters.",
      "She regularly conducts internal investigations and compliance reviews."
    ],
    experience: [
      "Defended multinational in tripartite dispute proceedings.",
      "Advised fintech on MAS regulatory licensing."
    ],
    awards: ["IFLR Rising Star (2023)."],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/kenn.png",
    banner: "/kenn.png"
  },
  {
    slug: "vanessa-poon",
    name: "Vanessa Poon",
    title: "Associate",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/vanessa_poon.png",
    banner: "/vanessa_poon.png"
  },
  {
    slug: "casey-yew",
    name: "Casey Yew",
    title: "Associate",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/casey_yew.png",
    banner: "/casey_yew.png"
  },
  {
    slug: "zhao-bing-ying",
    name: "Zhao Bing Ying",
    title: "Associate",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/zhao_bing_ying.png",
    banner: "/zhao_bing_ying.png"
  },
  {
    slug: "wong-tuck-yan",
    name: "Wong Tuck Yan",
    title: "Paralegal",
    practiceAreas: ["Family Law", "Probate and Administration", "Estate Planning"],
    biography: [
      "Melissa is a Director of Chevalier Law LLC’s Commercial Litigation practice, and heads the firm’s Private Client practice.",
      "Prior to joining Chevalier Law LLC, Melissa worked in the Litigation and Dispute Resolution department of reputable law firms where she was involved in a broad range of general litigation and arbitration disputes. Melissa has appeared as lead and assisting counsel in all levels of the Singapore Courts.",
      "Melissa’s focus is on general litigation work and her practice includes family law, probate and administration and estate planning. Melissa also acts for clients in contentious and non-contentious divorces, including advising on domestic and international family law issues, issues of child custody, division of matrimonial assets, separation, enforcement of maintenance orders, and family violence.",      
      "Melissa’s practice also includes non-contentious matters. She has advised local businesses and small medium enterprises on corporate advisory matters, restructuring and employment matters. She also regularly handles conveyancing work for corporate and individual clients involving commercial, private and public (HDB) properties."
    ],
    experience: [
      "Involved in complex matrimonial dispute concerning jurisdictional challenges and disclosure and preservation of assets spanning over 3 jurisdictions.",
      "Involved in Court of Appeal hearing in relation to the division of matrimonial assets worth in excess of S$6 million.",
      "Acted for the wife in a contentious divorce involving discovery orders and asset-tracing. Wife was successful in drawing an adverse inference against the husband for non-disclosure of shares in various companies.",
      "Acted for a homemaker husband in successfully obtaining shared care and control of the children and an equal division of matrimonial assets.",
      "Acting as assisting counsel in a claim against a co-executor and trustee for breach of fiduciary duties and account of profits on behalf of the deceased’s estate worth in excess of S$16 million.",
      "Acted for a local food and beverage chain in a dispute with its franchisee in a SIAC arbitration.",
      "Acting as assisting counsel for Japanese majority shareholders in a coffee plantation and coffee chain company in minority oppression claim, where disputes were agreed to be resolved in a SIAC arbitration.",
      "Assisted in a professional negligence action brought by a company that was formerly listed on the Singapore Stock Exchange against one of Singapore’s largest professional accounting firms.",
      "Acted for clients in contentious and non-contentious divorces and judicial separation.",
      "Advising on issues of child custody orders, variation of parenting agreements, relocation of custodial parent and child, international abduction / unlawful retention of child, and family violence.",
      "Represented clients in applications made under the Adoption of Children Act and Guardianship of Infants Act.",
      "Drafting, reviewing and advising on residential and commercial leases and tenancies.",
      "Drafting, reviewing and advising on wide range of commercial contracts including distributorship agreements, licensing agreements, shareholders’ agreements, loan agreements, non-disclosure agreements and share sale agreements.",
      "Representing and advising corporate and individual clients in the sale, purchase, mortgage and refinancing of commercial and residential properties.",
      "Representing and advising financial institutions in financing on secured lending.",
      "Advising clients on asset management including drafting of Wills, appointment of donees pursuant to a Lasting Power of Attorney and acting for clients in the appointment of Deputies pursuant to the Mental Capacity Act."
    ],
    awards: [
    ],
    email: "melissa.leong@chevalierlawllc.com",
    phone: "+65 6980 8713",
    //mobile: "+65 6980 8715",
    qualifications: [
      
    ],
    photo: "/wong_tuck_yan.png",
    banner: "/wong_tuck_yan.png"
  }
];

const norm = (s: string) =>
  s.trim().toLowerCase().replace(/_/g, "-").replace(/\s+/g, "-");

export const getPerson = (slug: string) => {
  const found = people.find((p) => norm(p.slug) === norm(slug));
  return found ?? null;
}
