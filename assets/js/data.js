// Data for all 81 Turkish provinces
// This data includes province information, political party, mayor details, and status
const provincesData = {
    "1": {
        name: "Adana",
        party: "chp",
        mayor: "?",
        status: "detained",
        population: 0,
        description: ""
    },
    "2": { // Adıyaman
        name: "Adıyaman",
        party: "chp",
        mayor: "?",
        status: "detained",
        population: 0,
        description: ""
    },
    "3": { // Afyonkarahisar
        name: "Afyonkarahisar",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "4": { // Ağrı
        name: "Ağrı",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "5": { // Amasya
        name: "Amasya",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "6": { // Ankara
        name: "Ankara",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "7": { // Antalya
        name: "Antalya",
        party: "chp",
        mayor: "?",
        status: "detained",
        population: 0,
        description: ""
    },
    "8": { // Artvin
        name: "Artvin",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "9": { // Aydın
        name: "Aydın",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "10": { // Balıkesir
        name: "Balıkesir",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "11": { // Bilecik
        name: "Bilecik",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "12": { // Bingöl
        name: "Bingöl",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "13": { // Bitlis
        name: "Bitlis",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "14": { // Bolu
        name: "Bolu",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "15": { // Burdur
        name: "Burdur",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "16": { // Bursa
        name: "Bursa",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "17": { // Çanakkale
        name: "Çanakkale",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "18": { // Çankırı
        name: "Çankırı",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "19": { // Çorum
        name: "Çorum",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "20": { // Denizli
        name: "Denizli",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "21": { // Diyarbakır
        name: "Diyarbakır",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "22": { // Edirne
        name: "Edirne",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "23": { // Elazığ
        name: "Elazığ",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "24": { // Erzincan
        name: "Erzincan",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "25": { // Erzurum
        name: "Erzurum",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "26": { // Eskişehir
        name: "Eskişehir",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "27": { // Gaziantep
        name: "Gaziantep",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "28": { // Giresun
        name: "Giresun",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "29": { // Gümüşhane
        name: "Gümüşhane",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "30": { // Hakkâri
        name: "Hakkâri",
        party: "dem",
        mayor: "?",
        status: "trustee",
        population: 0,
        description: ""
    },
    "31": { // Hatay
        name: "Hatay",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "32": { // Isparta
        name: "Isparta",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "33": { // Mersin
        name: "Mersin",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "34": { // İstanbul
        name: "İstanbul",
        party: "chp",
        mayor: "?",
        status: "detained",
        population: 0,
        description: ""
    },
    "35": { // İzmir
        name: "İzmir",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "36": { // Kars
        name: "Kars",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "37": { // Kastamonu
        name: "Kastamonu",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "38": { // Kayseri
        name: "Kayseri",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "39": { // Kırklareli
        name: "Kırklareli",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "40": { // Kırşehir
        name: "Kırşehir",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "41": { // Kocaeli
        name: "Kocaeli",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "42": { // Konya
        name: "Konya",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "43": { // Kütahya
        name: "Kütahya",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "44": { // Malatya
        name: "Malatya",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "45": { // Manisa
        name: "Manisa",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "46": { // Kahramanmaraş
        name: "Kahramanmaraş",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "47": { // Mardin
        name: "Mardin",
        party: "dem",
        mayor: "?",
        status: "trustee",
        population: 0,
        description: ""
    },
    "48": { // Muğla
        name: "Muğla",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "49": { // Muş
        name: "Muş",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "50": { // Nevşehir
        name: "Nevşehir",
        party: "iyi-parti",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "51": { // Niğde
        name: "Niğde",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "52": { // Ordu
        name: "Ordu",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "53": { // Rize
        name: "Rize",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "54": { // Sakarya
        name: "Sakarya",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "55": { // Samsun
        name: "Samsun",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "56": { // Siirt
        name: "Siirt",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "57": { // Sinop
        name: "Sinop",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "58": { // Sivas
        name: "Sivas",
        party: "bbp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "59": { // Tekirdağ
        name: "Tekirdağ",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "60": { // Tokat
        name: "Tokat",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "61": { // Trabzon
        name: "Trabzon",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "62": { // Tunceli
        name: "Tunceli",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "63": { // Şanlıurfa
        name: "Şanlıurfa",
        party: "yrp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "64": { // Uşak
        name: "Uşak",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "65": { // Van
        name: "Van",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "66": { // Yozgat
        name: "Yozgat",
        party: "yrp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "67": { // Zonguldak
        name: "Zonguldak",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "68": { // Aksaray
        name: "Aksaray",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "69": { // Bayburt
        name: "Bayburt",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "70": { // Karaman
        name: "Karaman",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "71": { // Kırıkkale
        name: "Kırıkkale",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "72": { // Batman
        name: "Batman",
        party: "dem",
        mayor: "?",
        status: "trustee",
        population: 0,
        description: ""
    },
    "73": { // Şırnak
        name: "Şırnak",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "74": { // Bartın
        name: "Bartın",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "75": { // Ardahan
        name: "Ardahan",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "76": { // Iğdır
        name: "Iğdır",
        party: "dem",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "77": { // Yalova
        name: "Yalova",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "78": { // Karabük
        name: "Karabük",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "79": { // Kilis
        name: "Kilis",
        party: "chp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "80": { // Osmaniye
        name: "Osmaniye",
        party: "mhp",
        mayor: "?",
        status: "normal",
        population: 0,
        description: ""
    },
    "81": { // Düzce
        name: "Düzce",
        party: "akp",
        mayor: "?",
        status: "normal",
        population: 0,
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
    // "independent": { name: "Bağımsız", fullname: "Bağımsız", color: "#95a5a6" }
};

// Status information
const statusInfo = {
    "normal": { name: "Normal", description: "Belediye başkanı görevde", color: "#e0301d" },
    "arrested": { name: "Tutuklu", description: "Belediye başkanı tutuklu durumda", color: "#1de04e" },
    "detained": { name: "Gözaltında", description: "Belediye başkanı gözaltında", color: "#e07b1d" },
    "trustee": { name: "Kayyum", description: "Belediyeye kayyum atanmış", color: "#872ac9"}
};