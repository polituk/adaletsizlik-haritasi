// Data for all 81 Turkish provinces
// This data includes province information, political party, mayor details, and status
const provincesData = {
    "1": { // Adana
        name: "Adana",
        party: "chp",
        mayor: "Zeydan Karalar",
        status: "detained",
        population: 2270298,
        description: ""
    },
    "2": { // Adıyaman
        name: "Adıyaman",
        party: "chp",
        mayor: "Abdurrahman Tutdere",
        status: "detained",
        population: 611037,
        description: ""
    },
    "3": { // Afyonkarahisar
        name: "Afyonkarahisar",
        party: "chp",
        mayor: "Burcu Köksal",
        status: "normal",
        population: 750193,
        description: ""
    },
    "4": { // Ağrı
        name: "Ağrı",
        party: "dem",
        mayor: "Hazal Aras",
        status: "normal",
        population: 499801,
        description: ""
    },
    "5": { // Amasya
        name: "Amasya",
        party: "chp",
        mayor: "Turgay Sevindi",
        status: "normal",
        population: 342378,
        description: ""
    },
    "6": { // Ankara
        name: "Ankara",
        party: "chp",
        mayor: "Mansur Yavaş",
        status: "normal",
        population: 5864049,
        description: ""
    },
    "7": { // Antalya
        name: "Antalya",
        party: "chp",
        mayor: "Muhittin Böcek",
        status: "detained",
        population: 2722103,
        description: ""
    },
    "8": { // Artvin
        name: "Artvin",
        party: "chp",
        mayor: "Bilgehan Erdem",
        status: "normal",
        population: 169280,
        description: ""
    },
    "9": { // Aydın
        name: "Aydın",
        party: "chp",
        mayor: "Özlem Çerçioğlu",
        status: "normal",
        population: 1165943,
        description: ""
    },
    "10": { // Balıkesir
        name: "Balıkesir",
        party: "chp",
        mayor: "Ahmet Akın",
        status: "normal",
        population: 1276096,
        description: ""
    },
    "11": { // Bilecik
        name: "Bilecik",
        party: "chp",
        mayor: "Melek Mızrak Subaşı",
        status: "normal",
        population: 228495,
        description: ""
    },
    "12": { // Bingöl
        name: "Bingöl",
        party: "akp",
        mayor: "Erdal Arıkan",
        status: "normal",
        population: 283276,
        description: ""
    },
    "13": { // Bitlis
        name: "Bitlis",
        party: "akp",
        mayor: "Nesrullah Tanğlay",
        status: "normal",
        population: 359808,
        description: ""
    },
    "14": { // Bolu
        name: "Bolu",
        party: "chp",
        mayor: "Tanju Özcan",
        status: "normal",
        population: 326409,
        description: ""
    },
    "15": { // Burdur
        name: "Burdur",
        party: "chp",
        mayor: "Ali Orkun Ercengiz",
        status: "normal",
        population: 275826,
        description: ""
    },
    "16": { // Bursa
        name: "Bursa",
        party: "chp",
        mayor: "Mustafa Bozbey",
        status: "normal",
        population: 3238618,
        description: ""
    },
    "17": { // Çanakkale
        name: "Çanakkale",
        party: "chp",
        mayor: "Muharrem Erkek",
        status: "normal",
        population: 568966,
        description: ""
    },
    "18": { // Çankırı
        name: "Çankırı",
        party: "mhp",
        mayor: "İsmail Hakkı Esen",
        status: "normal",
        population: 199981,
        description: ""
    },
    "19": { // Çorum
        name: "Çorum",
        party: "akp",
        mayor: "Halil İbrahim Aşgın",
        status: "normal",
        population: 521335,
        description: ""
    },
    "20": { // Denizli
        name: "Denizli",
        party: "chp",
        mayor: "Bülent Nuri Çavuşoğlu",
        status: "normal",
        population: 1061371,
        description: ""
    },
    "21": { // Diyarbakır
        name: "Diyarbakır",
        party: "dem",
        mayor: "Ayşe Serra Bucak Küçük",
        status: "normal",
        population: 1833684,
        description: ""
    },
    "22": { // Edirne
        name: "Edirne",
        party: "chp",
        mayor: "Filiz Gencan Akın",
        status: "normal",
        population: 421247,
        description: ""
    },
    "23": { // Elazığ
        name: "Elazığ",
        party: "akp",
        mayor: "Şahin Şerifoğulları",
        status: "normal",
        population: 603941,
        description: ""
    },
    "24": { // Erzincan
        name: "Erzincan",
        party: "mhp",
        mayor: "Bekir Aksun",
        status: "normal",
        population: 241239,
        description: ""
    },
    "25": { // Erzurum
        name: "Erzurum",
        party: "akp",
        mayor: "Mehmet Sekmen",
        status: "normal",
        population: 745005,
        description: ""
    },
    "26": { // Eskişehir
        name: "Eskişehir",
        party: "chp",
        mayor: "Ayşe Ünlüce",
        status: "normal",
        population: 921630,
        description: ""
    },
    "27": { // Gaziantep
        name: "Gaziantep",
        party: "akp",
        mayor: "Fatma Şahin",
        status: "normal",
        population: 2193363,
        description: ""
    },
    "28": { // Giresun
        name: "Giresun",
        party: "chp",
        mayor: "Fuat Köse",
        status: "normal",
        population: 455922,
        description: ""
    },
    "29": { // Gümüşhane
        name: "Gümüşhane",
        party: "mhp",
        mayor: "Vedat Soner Başer",
        status: "normal",
        population: 142617,
        description: ""
    },
    "30": { // Hakkâri
        name: "Hakkâri",
        party: "dem",
        mayor: "Mehmet Sıddık Akış",
        status: "trustee",
        population: 282191,
        description: ""
    },
    "31": { // Hatay
        name: "Hatay",
        party: "akp",
        mayor: "Mehmet Öntürk",
        status: "normal",
        population: 1562185,
        description: ""
    },
    "32": { // Isparta
        name: "Isparta",
        party: "akp",
        mayor: "Şükrü Başdeğirmen",
        status: "normal",
        population: 446409,
        description: ""
    },
    "33": { // Mersin
        name: "Mersin",
        party: "chp",
        mayor: "Vahap Seçer",
        status: "normal",
        population: 1954279,
        description: ""
    },
    "34": { // İstanbul
        name: "İstanbul",
        party: "chp",
        mayor: "Ekrem İmamoğlu",
        status: "arrested",
        population: 15701602,
        description: ""
    },
    "35": { // İzmir
        name: "İzmir",
        party: "chp",
        mayor: "Cemil Tugay",
        status: "normal",
        population: 4493242,
        description: ""
    },
    "36": { // Kars
        name: "Kars",
        party: "mhp",
        mayor: "Ötüken Senger",
        status: "normal",
        population: 272300,
        description: ""
    },
    "37": { // Kastamonu
        name: "Kastamonu",
        party: "chp",
        mayor: "Hasan Baltacı",
        status: "normal",
        population: 381991,
        description: ""
    },
    "38": { // Kayseri
        name: "Kayseri",
        party: "akp",
        mayor: "Memduh Büyükkılıç",
        status: "normal",
        population: 1452458,
        description: ""
    },
    "39": { // Kırklareli
        name: "Kırklareli",
        party: "mhp",
        mayor: "Derya Bulut",
        status: "normal",
        population: 379031,
        description: ""
    },
    "40": { // Kırşehir
        name: "Kırşehir",
        party: "chp",
        mayor: "Selahattin Ekicioğlu",
        status: "normal",
        population: 244546,
        description: ""
    },
    "41": { // Kocaeli
        name: "Kocaeli",
        party: "akp",
        mayor: "Tahir Büyükakın",
        status: "normal",
        population: 2130006,
        description: ""
    },
    "42": { // Konya
        name: "Konya",
        party: "akp",
        mayor: "Uğur İbrahim Altay",
        status: "normal",
        population: 2330024,
        description: ""
    },
    "43": { // Kütahya
        name: "Kütahya",
        party: "chp",
        mayor: "Eyüp Kahveci",
        status: "normal",
        population: 571078,
        description: ""
    },
    "44": { // Malatya
        name: "Malatya",
        party: "akp",
        mayor: "Sami Er",
        status: "normal",
        population: 750491,
        description: ""
    },
    "45": { // Manisa
        name: "Manisa",
        party: "chp",
        mayor: "Ferdi Zeyrek",
        status: "normal",
        population: 1475353,
        description: ""
    },
    "46": { // Kahramanmaraş
        name: "Kahramanmaraş",
        party: "akp",
        mayor: "Fırat Görgel",
        status: "normal",
        population: 1134105,
        description: ""
    },
    "47": { // Mardin
        name: "Mardin",
        party: "dem",
        mayor: "Ahmet Türk",
        status: "trustee",
        population: 895911,
        description: ""
    },
    "48": { // Muğla
        name: "Muğla",
        party: "chp",
        mayor: "Ahmet Aras",
        status: "normal",
        population: 1081867,
        description: ""
    },
    "49": { // Muş
        name: "Muş",
        party: "dem",
        mayor: "Sırrı Söylemez",
        status: "normal",
        population: 392301,
        description: ""
    },
    "50": { // Nevşehir
        name: "Nevşehir",
        party: "iyi-parti",
        mayor: "Rasim Arı",
        status: "normal",
        population: 317952,
        description: ""
    },
    "51": { // Niğde
        name: "Niğde",
        party: "akp",
        mayor: "Emrah Özdemir",
        status: "normal",
        population: 372708,
        description: ""
    },
    "52": { // Ordu
        name: "Ordu",
        party: "akp",
        mayor: "Mehmet Hilmi Güler",
        status: "normal",
        population: 770711,
        description: ""
    },
    "53": { // Rize
        name: "Rize",
        party: "akp",
        mayor: "Rahmi Metin",
        status: "normal",
        population: 346977,
        description: ""
    },
    "54": { // Sakarya
        name: "Sakarya",
        party: "akp",
        mayor: "Yusuf Alemdar",
        status: "normal",
        population: 1110735,
        description: ""
    },
    "55": { // Samsun
        name: "Samsun",
        party: "akp",
        mayor: "Halit Doğan",
        status: "normal",
        population: 1382376,
        description: ""
    },
    "56": { // Siirt
        name: "Siirt",
        party: "dem",
        mayor: "Sofya Alağaş",
        status: "trustee",
        population: 336453,
        description: ""
    },
    "57": { // Sinop
        name: "Sinop",
        party: "chp",
        mayor: "Metin Gürbüz",
        status: "normal",
        population: 226957,
        description: ""
    },
    "58": { // Sivas
        name: "Sivas",
        party: "bbp",
        mayor: "Adem Uzun",
        status: "normal",
        population: 637007,
        description: ""
    },
    "59": { // Tekirdağ
        name: "Tekirdağ",
        party: "chp",
        mayor: "Candan Yüceer",
        status: "normal",
        population: 1187162,
        description: ""
    },
    "60": { // Tokat
        name: "Tokat",
        party: "akp",
        mayor: "Mehmet Kemal Yazıcıoğlu",
        status: "normal",
        population: 612674,
        description: ""
    },
    "61": { // Trabzon
        name: "Trabzon",
        party: "akp",
        mayor: "Ahmet Metin Genç",
        status: "normal",
        population: 822270,
        description: ""
    },
    "62": { // Tunceli
        name: "Tunceli",
        party: "dem",
        mayor: "Cevdet Konak",
        status: "trustee",
        population: 86612,
        description: ""
    },
    "63": { // Şanlıurfa
        name: "Şanlıurfa",
        party: "yrp",
        mayor: "Mehmet Kasım Gülpınar",
        status: "normal",
        population: 2237745,
        description: ""
    },
    "64": { // Uşak
        name: "Uşak",
        party: "chp",
        mayor: "Özkan Yalım",
        status: "normal",
        population: 375310,
        description: ""
    },
    "65": { // Van
        name: "Van",
        party: "dem",
        mayor: "Abdullah Zeydan",
        status: "trustee",
        population: 1118087,
        description: ""
    },
    "66": { // Yozgat
        name: "Yozgat",
        party: "yrp",
        mayor: "Kazım Arslan",
        status: "normal",
        population: 413161,
        description: ""
    },
    "67": { // Zonguldak
        name: "Zonguldak",
        party: "chp",
        mayor: "Tahsin Erdem",
        status: "normal",
        population: 586802,
        description: ""
    },
    "68": { // Aksaray
        name: "Aksaray",
        party: "akp",
        mayor: "Evren Dinçer",
        status: "normal",
        population: 439474,
        description: ""
    },
    "69": { // Bayburt
        name: "Bayburt",
        party: "akp",
        mayor: "Mete Memiş",
        status: "normal",
        population: 83676,
        description: ""
    },
    "70": { // Karaman
        name: "Karaman",
        party: "mhp",
        mayor: "Savaş Kalaycı",
        status: "normal",
        population: 262791,
        description: ""
    },
    "71": { // Kırıkkale
        name: "Kırıkkale",
        party: "chp",
        mayor: "Ahmet Önal",
        status: "normal",
        population: 283053,
        description: ""
    },
    "72": { // Batman
        name: "Batman",
        party: "dem",
        mayor: "Gülüstan Sönük",
        status: "trustee",
        population: 654528,
        description: ""
    },
    "73": { // Şırnak
        name: "Şırnak",
        party: "akp",
        mayor: "Mehmet Yarka",
        status: "normal",
        population: 570826,
        description: ""
    },
    "74": { // Bartın
        name: "Bartın",
        party: "chp",
        mayor: "Muhammet Rıza Yalçınkaya",
        status: "normal",
        population: 206715,
        description: ""
    },
    "75": { // Ardahan
        name: "Ardahan",
        party: "chp",
        mayor: "Faruk Demir",
        status: "normal",
        population: 91354,
        description: ""
    },
    "76": { // Iğdır
        name: "Iğdır",
        party: "dem",
        mayor: "Mehmet Nuri Güneş",
        status: "normal",
        population: 206857,
        description: ""
    },
    "77": { // Yalova
        name: "Yalova",
        party: "chp",
        mayor: "Mehmet Gürel",
        status: "normal",
        population: 307882,
        description: ""
    },
    "78": { // Karabük
        name: "Karabük",
        party: "akp",
        mayor: "Özkan Çetinkaya",
        status: "normal",
        population: 250478,
        description: ""
    },
    "79": { // Kilis
        name: "Kilis",
        party: "chp",
        mayor: "Hakan Bilecen",
        status: "normal",
        population: 156739,
        description: ""
    },
    "80": { // Osmaniye
        name: "Osmaniye",
        party: "mhp",
        mayor: "İbrahim Çenet",
        status: "normal",
        population: 561061,
        description: ""
    },
    "81": { // Düzce
        name: "Düzce",
        party: "akp",
        mayor: "Faruk Özlü",
        status: "normal",
        population: 412344,
        description: ""
    }
};

// Party colors and names
const partyInfo = {
    "akp": { name: "AKP", fullname: "Adalet ve Kalkınma Partisi", color: "#fc8403" },
    "chp": { name: "CHP", fullname: "Cumhuriyet Halk Partisi", color: "#e9141d" },
    "mhp": { name: "MHP", fullname: "Milliyetçi Hareket Partisi", color: "#26389e" },
    "iyi-parti": { name: "İYİP", fullname: "İYİ Parti", color: "#3498db" },
    "dem": { name: "DEM", fullname: "Halkların Eşitlik ve Demokrasi Partisi", color: "#9b59b6" },
    "yrp": { name: "YRP", fullname: "Yeniden Refah Partisi", color: "#21841f" },
    "bbp": { name: "BBP", fullname: "Büyük Birlik Partisi", color: "#7d3b34" },
    // "independent": { name: "Bağımsız", fullname: "Bağımsız", color: "#95a5a6" },
};

// Status information
const statusInfo = {
    "normal": { name: "Görevde", description: "Belediye başkanı görevde", color: "#95a5a6", details: "belediye başkanı görevde."},
    "arrested": { name: "Tutuklu", description: "Belediye başkanı tutuklu durumda", color: "#ed0b03", details: "belediye başkanı tutuklu." },
    "trustee": { name: "Kayyum", description: "Belediyeye kayyum atanmış", color: "#fa9023", details: "belediyesine kayyum atanmış." },
    "detained": { name: "Gözaltında", description: "Belediye başkanı gözaltında", color: "#fed400", details: "belediye başkanı gözaltında." },
};