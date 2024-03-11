const regexPatterns = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
    username: /^[a-zA-Z0-9_]{3,16}$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    url: /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-]+)*\/?$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    ipv4: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    ipv6: /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:$|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^[0-9a-fA-F]{1,4}::([0-9a-fA-F]{1,4}:){0,4}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}:([0-9a-fA-F]{1,4}:){0,3}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,4}:([0-9a-fA-F]{1,4}:){0,4}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,3}:([0-9a-fA-F]{1,4}:){0,5}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,2}:([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^[0-9a-fA-F]{1,4}::([0-9a-fA-F]{1,4}:){0,6}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,7}|:)$/,
    creditcard: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])?[0-9]{11})$/,
    html: `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>.*?<\\/\\1>|<.*? \\/>`,
    zipus: /^\d{5}(?:[-\s]\d{4})?$/,
    phoneindia: /^\+?(91)?[\s-]?\d{10}$/,
    phoneus: /^\+?1?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    phoneuk: /^\+?(44)?\s?(\(0\))?\s?[0-9]{4}\s?[0-9]{3}\s?[0-9]{3}$/,
    phoneaus: /^\+?(44)?\s?(\(0\))?\s?[0-9]{4}\s?[0-9]{3}\s?[0-9]{3}$/,
    phonecan: /^\+?(1)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/,
    pin: /^\d{6}$/
}

const country = [
    {
        "name": "afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "aland islands",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "americansamoa",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "anguilla",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "antigua and barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "barbados",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "bermuda",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "bolivia, plurinational state of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "bosnia and herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "british indian ocean territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "brunei darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "burkina faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "cape verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "cayman islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "central african republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "china",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "christmas island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "cocos (keeling) islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "congo, the democratic republic of the congo",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "cook islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "costa rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "cote d'ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "cyprus",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "czech republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "dominica",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "dominican republic",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "el salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "equatorial guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "falkland islands (malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "faroe islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "france",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "french guiana",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "french polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "grenada",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "guadeloupe",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "guam",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "guinea-bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "holy see (vatican city state)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "hong kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "india",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "iran, islamic republic of persian gulf",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "isle of man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "korea, democratic people's republic of korea",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "korea, republic of south korea",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "laos",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "libyan arab jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "macedonia",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "marshall islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "micronesia, federated states of micronesia",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "moldova",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "netherlands antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "new caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "new zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "norfolk island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "northern mariana islands",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "palestinian territory, occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "papua new guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "puerto rico",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "reunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "saint barthelemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "saint helena, ascension and tristan da cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "saint kitts and nevis",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "saint lucia",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "saint martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "saint pierre and miquelon",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "saint vincent and the grenadines",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "san marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "sao tome and principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "saudi arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "sierra leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "solomon islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "south africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "south sudan",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "south georgia and the south sandwich islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "sri lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "svalbard and jan mayen",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "syrian arab republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "taiwan",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "tanzania, united republic of tanzania",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "timor-leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "trinidad and tobago",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "turks and caicos islands",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "united arab emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "united kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "united states",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "venezuela, bolivarian republic of venezuela",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "vietnam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "virgin islands, british",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "virgin islands, u.s.",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "wallis and futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    }
]

export function validateString(inputString, regexType = null, userInput = null) {
    if (userInput === null) {
        if (!(regexType in regexPatterns)) {
            console.error('Invalid regex type');
            return false;
        }
        return regexPatterns[regexType].test(inputString);
    } else {
        return userInput.test(inputString);
    }
}

export function analyzeLog(logText) {
    const timestampRegex = /\[(.*?)\]/g;
    const errorRegex = /ERROR: (.*?)(?=\n|$)/g;
    const ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;
    const timestamps = Array.from(logText.matchAll(timestampRegex), match => match[1]);
    const errors = Array.from(logText.matchAll(errorRegex), match => match[1]);
    const ips = Array.from(logText.matchAll(ipRegex), match => match[0]);
    const logResults = timestamps.map((timestamp, index) => ({
        timestamp,
        error: errors[index] || 'N/A',
        ip: ips[index] || 'N/A'
    }));
    return logResults
};

export function searchAndReplace(text, searchTerm, replaceTerm) {
    const regex = new RegExp(`\\b${searchTerm}\\b`, 'g');
    const replacedText = text.replace(regex, replaceTerm);
    return replacedText;
};

export function parseUrl(url) {
    const urlPattern = /^(?:(\w+):\/\/)?([^\/:]+)(?::(\d+))?([^?#]+)?(?:\?([^#]+))?(?:#(.*))?$/;
    const matches = url.match(urlPattern);
    if (matches) {
        const [, protocol, domain, port, path, queryParams, fragment] = matches;
        return {
            protocol: protocol || 'http',
            domain,
            port: port || '80',
            path: path || '/',
            queryParams: queryParams ? queryParams.split('&') : [],
            fragment: fragment || ''
        };
    } else {
        return null;
    }
};

export function getRegex(regexName) {
    if (!(regexName in regexPatterns)) {
        console.error('Invalid regex type');
        return false;
    }
    return regexPatterns[regexName];
}

export function base64ToString(base64) {
    return atob(base64);
}
export function stringToBase64(str) {
    return btoa(str);
}

export function getCountryCallingCode(name = "") {
    if (name === "") {
        return country
    } else {
       return country.filter(obj => obj.name === name.toLowerCase())[0]
    }
}

console.log(getCountryCallingCode("india"));

