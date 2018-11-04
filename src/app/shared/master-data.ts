export class MasterData {

    public static get InbondCodeList(): any[] {
        return [
            { id: "36", name: "Warehouse withdrawal for IE" },
            { id: "37", name: "Warehouse withdrawal for T&E" },
            { id: "67", name: "Foreign Trade Zone withdrawal for IE" },
            { id: "68", name: "Foreign Trade Zone withdrawal for T&E" },
            { id: "70", name: "Merchandise NOT shipped inbond" },
        ]
    }

    public static get filingTypeList(): any[] {
        return [
            { id: "2", name: "Predeparture" },
            { id: "3", name: "Advance Export Information (AEI)-For future use" },
            { id: "4", name: "Post departure" },

        ]
    }
    public static get ModeOfTransportList(): any[] {
        return [
            { id: "10", name: "Vessel, Non-containerized" },
            { id: "11", name: "Vessel, Containerized" },
            { id: "34", name: "Road, Other" },
            { id: "40", name: "Air" },
        ]
    }

    public static get partyIdTypeList(): any[] {
        return [
            { id: "D", name: "DUNS" },
            { id: "S", name: "SSN" },
            { id: "E", name: "EIN" },
            { id: "T", name: "Foreign Entity" }

        ]
    }

    public static get partyTypeList(): any[] {
        return [
            { id: "E", name: "US Principal Party in Interest" },
            { id: "F", name: "Forwarding Agent" },
            { id: "C", name: "Ultimate Consignee" },
            { id: "I", name: "Intermediate Consignee" }

        ]
    }

    public static get originGoodsList(): any[] {
        return [
            { id: "D", name: "Domestic" },
            { id: "F", name: "Foreign" }
        ]
    }

    public static get countryList(): any[] {
        return [
                {
                    "name": "Afghanistan",
                    "code": "AF"
                },
                {
                    "name": "Albania",
                    "code": "AL"
                },
                {
                    "name": "Algeria",
                    "code": "DZ"
                },
                {
                    "name": "American Samoa",
                    "code": "AS"
                },
                {
                    "name": "Andorra",
                    "code": "AD"
                },
                {
                    "name": "Angola",
                    "code": "AO"
                },
                {
                    "name": "Anguilla",
                    "code": "AI"
                },
                {
                    "name": "Antigua and Barbuda",
                    "code": "AG"
                },
                {
                    "name": "Argentina",
                    "code": "AR"
                },
                {
                    "name": "Armenia",
                    "code": "AM"
                },
                {
                    "name": "Aruba",
                    "code": "AW"
                },
                {
                    "name": "Australia",
                    "code": "AU"
                },
                {
                    "name": "Austria",
                    "code": "AT"
                },
                {
                    "name": "Azerbaijan",
                    "code": "AZ"
                },
                {
                    "name": "Azores",
                    "code": "PT"
                },
                {
                    "name": "Bahamas",
                    "code": "BS"
                },
                {
                    "name": "Bahrain",
                    "code": "BH"
                },
                {
                    "name": "Bangladesh",
                    "code": "BD"
                },
                {
                    "name": "Barbados",
                    "code": "BB"
                },
                {
                    "name": "Belgium",
                    "code": "BE"
                },
                {
                    "name": "Belize",
                    "code": "BZ"
                },
                {
                    "name": "Benin",
                    "code": "BJ"
                },
                {
                    "name": "Bermuda",
                    "code": "BM"
                },
                {
                    "name": "Bhutan",
                    "code": "BT"
                },
                {
                    "name": "Bolivia",
                    "code": "BO"
                },
                {
                    "name": "Bosnia-Hercegovina",
                    "code": "BA"
                },
                {
                    "name": "Botswana",
                    "code": "BW"
                },
                {
                    "name": "Brazil",
                    "code": "BR"
                },
                {
                    "name": "British Indian Ocean Territory",
                    "code": "IO"
                },
                {
                    "name": "British Virgin Islands",
                    "code": "VG"
                },
                {
                    "name": "Brunei Darussalam",
                    "code": "BN"
                },
                {
                    "name": "Bulgaria",
                    "code": "BG"
                },
                {
                    "name": "Burkina",
                    "code": "BF"
                },
                {
                    "name": "Burma (Myanmar)",
                    "code": "BU"
                },
                {
                    "name": "Burundi",
                    "code": "BI"
                },
                {
                    "name": "Byelarus",
                    "code": "BY"
                },
                {
                    "name": "Cambodia",
                    "code": "KH"
                },
                {
                    "name": "Cameroon",
                    "code": "CM"
                },
                {
                    "name": "Canada",
                    "code": "CA"
                },
                {
                    "name": "Canary Island",
                    "code": "ES"
                },
                {
                    "name": "Canton and Enderbury Islands",
                    "code": "KI"
                },
                {
                    "name": "Cape Verde",
                    "code": "CV"
                },
                {
                    "name": "Cayman Island",
                    "code": "KY"
                },
                {
                    "name": "Central African Republic",
                    "code": "CF"
                },
                {
                    "name": "Chad",
                    "code": "TD"
                },
                {
                    "name": "Chile",
                    "code": "CL"
                },
                {
                    "name": "China",
                    "code": "CN"
                },
                {
                    "name": "Christmas Islands",
                    "code": "CX"
                },
                {
                    "name": "Cocos (Keeling) Island",
                    "code": "CC"
                },
                {
                    "name": "Colombia",
                    "code": "CO"
                },
                {
                    "name": "Comoros",
                    "code": "KM"
                },
                {
                    "name": "Congo (Brazzaville)",
                    "code": "CG"
                },
                {
                    "name": "Cook Islands",
                    "code": "CK"
                },
                {
                    "name": "Costa Rica",
                    "code": "CR"
                },
                {
                    "name": "Croatia",
                    "code": "HR"
                },
                {
                    "name": "Cuba",
                    "code": "CU"
                },
                {
                    "name": "Curacao",
                    "code": "CW"
                },
                {
                    "name": "Cyprus",
                    "code": "CY"
                },
                {
                    "name": "Czech Republic",
                    "code": " The"
                },
                {
                    "name": "Democratic Republic of Congo (Kinshasa)",
                    "code": "CD"
                },
                {
                    "name": "Denmark",
                    "code": "DK"
                },
                {
                    "name": "Djibouti",
                    "code": "DJ"
                },
                {
                    "name": "Dominica",
                    "code": "DM"
                },
                {
                    "name": "Dominican Republic",
                    "code": "DO"
                },
                {
                    "name": "Ecuador",
                    "code": "EC"
                },
                {
                    "name": "Egypt",
                    "code": "EG"
                },
                {
                    "name": "El Salvador",
                    "code": "SV"
                },
                {
                    "name": "Equatorial Guinea",
                    "code": "GQ"
                },
                {
                    "name": "Eritrea",
                    "code": "ER"
                },
                {
                    "name": "Estonia",
                    "code": "EE"
                },
                {
                    "name": "Ethiopia",
                    "code": "ET"
                },
                {
                    "name": "Falkland Islands (Malvinas)",
                    "code": "FK"
                },
                {
                    "name": "Faroe Islands",
                    "code": "FO"
                },
                {
                    "name": "Fiji",
                    "code": "FJ"
                },
                {
                    "name": "Finland",
                    "code": "FI"
                },
                {
                    "name": "France",
                    "code": "FR"
                },
                {
                    "name": "French Guiana",
                    "code": "GF"
                },
                {
                    "name": "French Polynesia",
                    "code": "PF"
                },
                {
                    "name": "French Southern and Antartic Lands",
                    "code": "TF"
                },
                {
                    "name": "Gabon",
                    "code": "GA"
                },
                {
                    "name": "Gambia",
                    "code": " The"
                },
                {
                    "name": "Gaza Strip",
                    "code": "GZ"
                },
                {
                    "name": "Georgia",
                    "code": "GE"
                },
                {
                    "name": "Germany",
                    "code": " Federal Republic of"
                },
                {
                    "name": "Ghana",
                    "code": "GH"
                },
                {
                    "name": "Gibraltar",
                    "code": "GI"
                },
                {
                    "name": "Greece",
                    "code": "GR"
                },
                {
                    "name": "Greenland",
                    "code": "GL"
                },
                {
                    "name": "Grenada",
                    "code": "GD"
                },
                {
                    "name": "Guadeloupe",
                    "code": "GP"
                },
                {
                    "name": "Guam",
                    "code": "GU"
                },
                {
                    "name": "Guatemala",
                    "code": "GT"
                },
                {
                    "name": "Guinea",
                    "code": "GN"
                },
                {
                    "name": "Guinea-Bissau",
                    "code": "GW"
                },
                {
                    "name": "Guyana",
                    "code": "GY"
                },
                {
                    "name": "Haiti",
                    "code": "HT"
                },
                {
                    "name": "Heard Island and Mcdonald Islands",
                    "code": "HM"
                },
                {
                    "name": "Honduras",
                    "code": "HN"
                },
                {
                    "name": "Hong Kong",
                    "code": "HK"
                },
                {
                    "name": "Hungary",
                    "code": "HU"
                },
                {
                    "name": "Iceland",
                    "code": "IS"
                },
                {
                    "name": "India",
                    "code": "IN"
                },
                {
                    "name": "Indonesia",
                    "code": "ID"
                },
                {
                    "name": "Iran",
                    "code": "IR"
                },
                {
                    "name": "Iraq",
                    "code": "IQ"
                },
                {
                    "name": "Ireland",
                    "code": "IE"
                },
                {
                    "name": "Israel",
                    "code": "IL"
                },
                {
                    "name": "Italy",
                    "code": "IT"
                },
                {
                    "name": "Ivory Coast",
                    "code": "CI"
                },
                {
                    "name": "Jamaica",
                    "code": "JM"
                },
                {
                    "name": "Japan",
                    "code": "JP"
                },
                {
                    "name": "Johnston Atoll",
                    "code": "UM"
                },
                {
                    "name": "Jordan",
                    "code": "JO"
                },
                {
                    "name": "Kampuchea",
                    "code": " Democratic"
                },
                {
                    "name": "Kazakhstan",
                    "code": "KZ"
                },
                {
                    "name": "Kenya",
                    "code": "KE"
                },
                {
                    "name": "Kiribati",
                    "code": "KI"
                },
                {
                    "name": "Korea",
                    "code": " Democratic Peoples Republic of"
                },
                {
                    "name": "Korea",
                    "code": " North"
                },
                {
                    "name": "Korea",
                    "code": " Republic of"
                },
                {
                    "name": "Korea",
                    "code": " South"
                },
                {
                    "name": "Kosovo",
                    "code": "KV"
                },
                {
                    "name": "Kuwait",
                    "code": "KW"
                },
                {
                    "name": "Kyrgyzstan",
                    "code": "KG"
                },
                {
                    "name": "Lao Peoples’ Democratic Republic",
                    "code": "LA"
                },
                {
                    "name": "Latvia",
                    "code": "LV"
                },
                {
                    "name": "Lebanon",
                    "code": "LB"
                },
                {
                    "name": "Lesotho",
                    "code": "LS"
                },
                {
                    "name": "Liberia",
                    "code": "LR"
                },
                {
                    "name": "Libya",
                    "code": "LY"
                },
                {
                    "name": "Liechtenstein",
                    "code": "LI"
                },
                {
                    "name": "Lithuania",
                    "code": "LT"
                },
                {
                    "name": "Luxembourg",
                    "code": "LU"
                },
                {
                    "name": "Macau",
                    "code": "MO"
                },
                {
                    "name": "Macedonia (Skopje)",
                    "code": "MK"
                },
                {
                    "name": "Madagascar",
                    "code": "MG"
                },
                {
                    "name": "Madeira Island",
                    "code": "PT"
                },
                {
                    "name": "Malawi",
                    "code": "MW"
                },
                {
                    "name": "Malaysia",
                    "code": "MY"
                },
                {
                    "name": "Maldives",
                    "code": "MV"
                },
                {
                    "name": "Mali",
                    "code": "ML"
                },
                {
                    "name": "Malta",
                    "code": "MT"
                },
                {
                    "name": "Marshall Islands",
                    "code": "MH"
                },
                {
                    "name": "Martinique",
                    "code": "MQ"
                },
                {
                    "name": "Mauritania",
                    "code": "MR"
                },
                {
                    "name": "Mauritius",
                    "code": "MU"
                },
                {
                    "name": "Mayotte",
                    "code": "YT"
                },
                {
                    "name": "Mexico",
                    "code": "MX"
                },
                {
                    "name": "Micronesia",
                    "code": " Federal States of"
                },
                {
                    "name": "Midway Islands",
                    "code": "UM"
                },
                {
                    "name": "Moldova",
                    "code": "MD"
                },
                {
                    "name": "Monaco",
                    "code": "MC"
                },
                {
                    "name": "Mongolia",
                    "code": "MN"
                },
                {
                    "name": "Montenegro",
                    "code": "ME"
                },
                {
                    "name": "Montserat",
                    "code": "MS"
                },
                {
                    "name": "Morocco",
                    "code": "MA"
                },
                {
                    "name": "Mozambique",
                    "code": "MZ"
                },
                {
                    "name": "Myanmar (see Burma)",
                    "code": ""
                },
                {
                    "name": "Namibia",
                    "code": "NA"
                },
                {
                    "name": "Nauru",
                    "code": "NR"
                },
                {
                    "name": "Nepal",
                    "code": "NP"
                },
                {
                    "name": "Netherlands",
                    "code": "NL"
                },
                {
                    "name": "New Caledonia",
                    "code": "NC"
                },
                {
                    "name": "New Zealand",
                    "code": "NZ"
                },
                {
                    "name": "Nicaragua",
                    "code": "NI"
                },
                {
                    "name": "Niger",
                    "code": "NE"
                },
                {
                    "name": "Nigeria",
                    "code": "NG"
                },
                {
                    "name": "Niue",
                    "code": "NU"
                },
                {
                    "name": "Norfolk Island",
                    "code": "NF"
                },
                {
                    "name": "North Korea",
                    "code": "KP"
                },
                {
                    "name": "Northern Mariana Island",
                    "code": "MP"
                },
                {
                    "name": "Norway",
                    "code": "NO"
                },
                {
                    "name": "Oman",
                    "code": "OM"
                },
                {
                    "name": "Pakistan",
                    "code": "PK"
                },
                {
                    "name": "Palau",
                    "code": "PW"
                },
                {
                    "name": "Panama",
                    "code": "PA"
                },
                {
                    "name": "Papua New Guinea",
                    "code": "PG"
                },
                {
                    "name": "Paraguay",
                    "code": "PY"
                },
                {
                    "name": "Peru",
                    "code": "PE"
                },
                {
                    "name": "Philippines",
                    "code": "PH"
                },
                {
                    "name": "Pitcairn Island",
                    "code": "PN"
                },
                {
                    "name": "Poland",
                    "code": "PL"
                },
                {
                    "name": "Portugal",
                    "code": "PT"
                },
                {
                    "name": "Puerto Rico",
                    "code": "PR"
                },
                {
                    "name": "Qatar",
                    "code": "QA"
                },
                {
                    "name": "Reunion",
                    "code": "RE"
                },
                {
                    "name": "Romania",
                    "code": "RO"
                },
                {
                    "name": "Russia",
                    "code": "RU"
                },
                {
                    "name": "Rwanda",
                    "code": "RW"
                },
                {
                    "name": "St. Christopher",
                    "code": "KN"
                },
                {
                    "name": "St. Helena",
                    "code": "SH"
                },
                {
                    "name": "St. Kitts and Nevis",
                    "code": "KN"
                },
                {
                    "name": "Saint Lucia",
                    "code": "LC"
                },
                {
                    "name": "St. Pierre and Miquelon",
                    "code": "PM"
                },
                {
                    "name": "Saint Vincent and the Grenadines",
                    "code": "VC"
                },
                {
                    "name": "Samoa",
                    "code": "WS"
                },
                {
                    "name": "San Marino",
                    "code": "SM"
                },
                {
                    "name": "Sao Tome and Principe",
                    "code": "ST"
                },
                {
                    "name": "Saudi Arabia",
                    "code": "SA"
                },
                {
                    "name": "Senegal",
                    "code": "SN"
                },
                {
                    "name": "Serbia",
                    "code": "RS"
                },
                {
                    "name": "Seychelles",
                    "code": "SC"
                },
                {
                    "name": "Sierra Leone",
                    "code": "SL"
                },
                {
                    "name": "Singapore",
                    "code": "SG"
                },
                {
                    "name": "Sint Maarten",
                    "code": "SX"
                },
                {
                    "name": "Slovakia",
                    "code": "SK"
                },
                {
                    "name": "Slovenia",
                    "code": "SI"
                },
                {
                    "name": "Solomon Islands",
                    "code": "SB"
                },
                {
                    "name": "Somalia",
                    "code": "SO"
                },
                {
                    "name": "South Africa",
                    "code": "ZA"
                },
                {
                    "name": "South Korea",
                    "code": "KR"
                },
                {
                    "name": "South Sudan",
                    "code": "SS"
                },
                {
                    "name": "Spain",
                    "code": "ES"
                },
                {
                    "name": "Spanish Africa",
                    "code": "ES"
                },
                {
                    "name": "Sri Lanka",
                    "code": "LK"
                },
                {
                    "name": "Sudan",
                    "code": "SD"
                },
                {
                    "name": "Suriname",
                    "code": "SR"
                },
                {
                    "name": "Svalvard and Jan Mayen Islands",
                    "code": "SJ"
                },
                {
                    "name": "Swaziland",
                    "code": "SZ"
                },
                {
                    "name": "Sweden",
                    "code": "SE"
                },
                {
                    "name": "Switzerland",
                    "code": "CH"
                },
                {
                    "name": "Syrian Arab Republic",
                    "code": "SY"
                },
                {
                    "name": "Taiwan",
                    "code": "TW"
                },
                {
                    "name": "Tajikistan",
                    "code": "TJ"
                },
                {
                    "name": "Tanzania",
                    "code": " United Republic of"
                },
                {
                    "name": "Thailand",
                    "code": "TH"
                },
                {
                    "name": "Timor-Leste",
                    "code": "TL"
                },
                {
                    "name": "Togo",
                    "code": "TG"
                },
                {
                    "name": "Tokelau",
                    "code": "TK"
                },
                {
                    "name": "Tonga",
                    "code": "TO"
                },
                {
                    "name": "Trinidad and Tobago",
                    "code": "TT"
                },
                {
                    "name": "Tunisia",
                    "code": "TN"
                },
                {
                    "name": "Turkey",
                    "code": "TR"
                },
                {
                    "name": "Turkmenistan",
                    "code": "TM"
                },
                {
                    "name": "Turks and Caicos Island",
                    "code": "TC"
                },
                {
                    "name": "Tuvalu",
                    "code": "TV"
                },
                {
                    "name": "Uganda",
                    "code": "UG"
                },
                {
                    "name": "Ukraine",
                    "code": "UA"
                },
                {
                    "name": "United Arab Emirates",
                    "code": "AE"
                },
                {
                    "name": "United Kingdom",
                    "code": "GB"
                },
                {
                    "name": "United States",
                    "code": "US",                   
                },
                {
                    "name": "United States Minor Outlying Islands",
                    "code": "UM"
                },
                {
                    "name": "Uruguay",
                    "code": "UY"
                },
                {
                    "name": "Uzbekistan",
                    "code": "UZ"
                },
                {
                    "name": "Vanuatu",
                    "code": "VU"
                },
                {
                    "name": "Vatican City",
                    "code": "VA"
                },
                {
                    "name": "Venezuela",
                    "code": "VE"
                },
                {
                    "name": "Viet Nam",
                    "code": "VN"
                },
                {
                    "name": "Virgin Islands of the United States",
                    "code": "VI"
                },
                {
                    "name": "Wake Island",
                    "code": "UM"
                },
                {
                    "name": "Wallis and Futuna Islands",
                    "code": "WF"
                },
                {
                    "name": "West Bank",
                    "code": "WE"
                },
                {
                    "name": "Western Sahara",
                    "code": "EH"
                },
                {
                    "name": "Western Samoa",
                    "code": "WS"
                },
                {
                    "name": "Yemen",
                    "code": " Republic of"
                },
                {
                    "name": "Zambia",
                    "code": "ZM"
                },
                {
                    "name": "Zimbabwe",
                    "code": "ZW"
                }]                    
    }

    public static get portOfExport():any[]{
       return [
            {
                "code": "101",
                "name": "PORTLAND",
                "shortname": " ME"
            },
            {
                "code": "102",
                "name": "BANGOR",
                "shortname": " ME"
            },
            {
                "code": "103",
                "name": "EASTPORT",
                "shortname": " ME"
            },
            {
                "code": "104",
                "name": "JACKMAN",
                "shortname": " ME"
            },
            {
                "code": "105",
                "name": "VANCEBORO",
                "shortname": " ME"
            },
            {
                "code": "106",
                "name": "HOULTON",
                "shortname": " ME"
            },
            {
                "code": "107",
                "name": "FORT FAIRFIELD",
                "shortname": " ME"
            },
            {
                "code": "108",
                "name": "VAN BUREN",
                "shortname": " ME"
            },
            {
                "code": "109",
                "name": "MADAWASKA",
                "shortname": " ME"
            },
            {
                "code": "110",
                "name": "FORT KENT",
                "shortname": " ME"
            },
            {
                "code": "111",
                "name": "BATH",
                "shortname": " ME"
            },
            {
                "code": "112",
                "name": "BAR HARBOR",
                "shortname": " ME"
            },
            {
                "code": "115",
                "name": "CALAIS",
                "shortname": " ME"
            },
            {
                "code": "118",
                "name": "LIMESTONE",
                "shortname": " ME"
            },
            {
                "code": "121",
                "name": "ROCKLAND",
                "shortname": " ME"
            },
            {
                "code": "122",
                "name": "JONESPORT",
                "shortname": " ME"
            },
            {
                "code": "127",
                "name": "BRIDGEWATER",
                "shortname": " ME"
            },
            {
                "code": "131",
                "name": "PORTSMOUTH",
                "shortname": " NH"
            },
            {
                "code": "132",
                "name": "BELFAST",
                "shortname": " ME"
            },
            {
                "code": "152",
                "name": "SEARSPORT",
                "shortname": " ME"
            },
            {
                "code": "181",
                "name": "LEBANON AIRPORT",
                "shortname": ""
            },
            {
                "code": "182",
                "name": "MANCHESTER USER FEE AIRPORT",
                "shortname": " NH"
            },
            {
                "code": "201",
                "name": "ST. ALBANS",
                "shortname": " VT"
            },
            {
                "code": "203",
                "name": "RICHFORD",
                "shortname": " VT"
            },
            {
                "code": "206",
                "name": "BEECHER FALLS",
                "shortname": " VT"
            },
            {
                "code": "207",
                "name": "BURLINGTON",
                "shortname": " VT"
            },
            {
                "code": "209",
                "name": "DERBY LINE",
                "shortname": " VT"
            },
            {
                "code": "211",
                "name": "NORTON",
                "shortname": " VT"
            },
            {
                "code": "212",
                "name": "HIGHGATE SPRINGS/ALBURG",
                "shortname": ""
            },
            {
                "code": "401",
                "name": "BOSTON",
                "shortname": " MA"
            },
            {
                "code": "402",
                "name": "SPRINGFIELD",
                "shortname": " MA"
            },
            {
                "code": "403",
                "name": "WORCESTER",
                "shortname": " MA"
            },
            {
                "code": "404",
                "name": "GLOUCESTER",
                "shortname": " MA"
            },
            {
                "code": "405",
                "name": "NEW BEDFORD",
                "shortname": " MA"
            },
            {
                "code": "406",
                "name": "PLYMOUTH",
                "shortname": " MA"
            },
            {
                "code": "407",
                "name": "FALL RIVER",
                "shortname": " MA"
            },
            {
                "code": "408",
                "name": "SALEM",
                "shortname": " MA"
            },
            {
                "code": "409",
                "name": "PROVINCETOWN",
                "shortname": " MA"
            },
            {
                "code": "410",
                "name": "BRIDGEPORT",
                "shortname": " CT"
            },
            {
                "code": "411",
                "name": "HARTFORD",
                "shortname": " CT"
            },
            {
                "code": "412",
                "name": "NEW HAVEN",
                "shortname": " CT"
            },
            {
                "code": "413",
                "name": "NEW LONDON",
                "shortname": " CT"
            },
            {
                "code": "416",
                "name": "LAWRENCE",
                "shortname": " MA"
            },
            {
                "code": "417",
                "name": "LOGAN AIRPORT",
                "shortname": " MA"
            },
            {
                "code": "481",
                "name": "L.G. HANSCOM FIELD",
                "shortname": " MA"
            },
            {
                "code": "501",
                "name": "NEWPORT",
                "shortname": " RI"
            },
            {
                "code": "502",
                "name": "PROVIDENCE",
                "shortname": " RI"
            },
            {
                "code": "503",
                "name": "MELLVILLE",
                "shortname": " RI"
            },
            {
                "code": "701",
                "name": "OGDENSBURG",
                "shortname": " NY"
            },
            {
                "code": "704",
                "name": "MASSENA",
                "shortname": " NY"
            },
            {
                "code": "706",
                "name": "CAPE VINCENT",
                "shortname": " NY"
            },
            {
                "code": "708",
                "name": "ALEXANDRIA BAY",
                "shortname": " NY"
            },
            {
                "code": "712",
                "name": "CHAMPLAIN",
                "shortname": ""
            },
            {
                "code": "714",
                "name": "CLAYTON",
                "shortname": " NY"
            },
            {
                "code": "715",
                "name": "TROUT RIVER",
                "shortname": "NY"
            },
            {
                "code": "901",
                "name": "BUFFALO",
                "shortname": ""
            },
            {
                "code": "903",
                "name": "ROCHESTER",
                "shortname": "NY"
            },
            {
                "code": "904",
                "name": "OSWEGO",
                "shortname": "NY"
            },
            {
                "code": "905",
                "name": "SODUS POINT",
                "shortname": "NY"
            },
            {
                "code": "906",
                "name": "SYRACUSE",
                "shortname": "NY"
            },
            {
                "code": "907",
                "name": "UTICA",
                "shortname": " NY"
            },
            {
                "code": "971",
                "name": "TNT SKYPAK",
                "shortname": "NY"
            },
            {
                "code": "972",
                "name": "SWIFT SURE COURIER SERVICE",
                "shortname": "NY"
            },
            {
                "code": "981",
                "name": "BINGHAMTON REGIONAL AIRPORT",
                "shortname": "NY"
            },
            {
                "code": "1001",
                "name": "NEW YORK",
                "shortname": " NY"
            },
            {
                "code": "1002",
                "name": "ALBANY",
                "shortname": " NY"
            },
            {
                "code": "1101",
                "name": "PHILADELPHIA",
                "shortname": " PA"
            },
            {
                "code": "1102",
                "name": "CHESTER",
                "shortname": " PA"
            },
            {
                "code": "1103",
                "name": "WILMINGTON",
                "shortname": " DE"
            },
            {
                "code": "1104",
                "name": "PITTSBURGH",
                "shortname": " PA"
            },
            {
                "code": "1105",
                "name": "PAULSBORO",
                "shortname": " NJ"
            },
            {
                "code": "1106",
                "name": "WILKES",
                "shortname": ""
            },
            {
                "code": "1107",
                "name": "CAMDEN",
                "shortname": " NJ"
            },
            {
                "code": "1108",
                "name": "PHILA. INTL. AIRPORT",
                "shortname": " PA"
            },
            {
                "code": "1109",
                "name": "HARRISBURG",
                "shortname": " PA"
            },
            {
                "code": "1113",
                "name": "GLOUCESTER CITY",
                "shortname": " NJ"
            },
            {
                "code": "1119",
                "name": "ALLENTOWN",
                "shortname": " PA "
            },
            {
                "code": "1181",
                "name": "ALLENTOWN",
                "shortname": ""
            },
            {
                "code": "1182",
                "name": "ATLANTIC CITY REGIONAL AIRPORT",
                "shortname": " NJ"
            },
            {
                "code": "1183",
                "name": "TRENTON/MERCER COUNTY AIRPORT",
                "shortname": " NJ"
            },
            {
                "code": "1195",
                "name": "UPS",
                "shortname": " PA"
            },
            {
                "code": "1301",
                "name": "ANNAPOLIS",
                "shortname": " MD"
            },
            {
                "code": "1302",
                "name": "CAMBRIDGE",
                "shortname": " MD"
            },
            {
                "code": "1303",
                "name": "BALTIMORE",
                "shortname": " MD"
            },
            {
                "code": "1304",
                "name": "CRISFIELD",
                "shortname": " MD"
            },
            {
                "code": "1305",
                "name": "BWI AIRPORT",
                "shortname": ""
            },
            {
                "code": "1401",
                "name": "NORFOLK",
                "shortname": ""
            },
            {
                "code": "1404",
                "name": "RICHMOND",
                "shortname": ""
            },
            {
                "code": "1408",
                "name": "HOPEWELL VA",
                "shortname": ""
            },
            {
                "code": "1409",
                "name": "CHARLESTON",
                "shortname": " WV"
            },
            {
                "code": "1410",
                "name": "FRONT ROYAL",
                "shortname": " VA"
            },
            {
                "code": "1412",
                "name": "NEW RIVER VALLEY AIRPORT",
                "shortname": " VA"
            },
            {
                "code": "1501",
                "name": "WILMINGTON",
                "shortname": " NC"
            },
            {
                "code": "1502",
                "name": "WINSTON",
                "shortname": ""
            },
            {
                "code": "1503",
                "name": "DURHAM",
                "shortname": " NC"
            },
            {
                "code": "1511",
                "name": "BEAUFORT",
                "shortname": ""
            },
            {
                "code": "1512",
                "name": "CHARLOTTE",
                "shortname": " NC"
            },
            {
                "code": "1601",
                "name": "CHARLESTON",
                "shortname": " SC"
            },
            {
                "code": "1602",
                "name": "GEORGETOWN",
                "shortname": " SC"
            },
            {
                "code": "1603",
                "name": "GREENVILLE",
                "shortname": ""
            },
            {
                "code": "1604",
                "name": "COLUMBIA",
                "shortname": " SC"
            },
            {
                "code": "1681",
                "name": "MYRTLE BEACH INT’L AIRPORT",
                "shortname": " SC"
            },
            {
                "code": "1701",
                "name": "BRUNSWICK",
                "shortname": " GA"
            },
            {
                "code": "1703",
                "name": "SAVANNAH",
                "shortname": " GA"
            },
            {
                "code": "1704",
                "name": "ATLANTA",
                "shortname": " GA"
            },
            {
                "code": "1801",
                "name": "TAMPA",
                "shortname": " FL"
            },
            {
                "code": "1803",
                "name": "JACKSONVILLE",
                "shortname": " FL"
            },
            {
                "code": "1805",
                "name": "FERNANDINA BEACH",
                "shortname": " FL"
            },
            {
                "code": "1807",
                "name": "BOCA GRANDE",
                "shortname": " FL"
            },
            {
                "code": "1808",
                "name": "ORLANDO",
                "shortname": " FL"
            },
            {
                "code": "1809",
                "name": "ORLANDO",
                "shortname": ""
            },
            {
                "code": "1814",
                "name": "ST. PETERSBURG",
                "shortname": " FL"
            },
            {
                "code": "1816",
                "name": "PORT CANAVERAL",
                "shortname": " FL"
            },
            {
                "code": "1818",
                "name": "PANAMA CITY",
                "shortname": " FL"
            },
            {
                "code": "1819",
                "name": "PENSACOLA",
                "shortname": " FL"
            },
            {
                "code": "1821",
                "name": "PORT MANATEE",
                "shortname": " FL"
            },
            {
                "code": "1822",
                "name": "FORT MYERS AIRPORT",
                "shortname": ""
            },
            {
                "code": "1880",
                "name": "NAPLES MUNICIPAL USER FEE AIRPORT",
                "shortname": ""
            },
            {
                "code": "1883",
                "name": "SARASOTA BRADENTON AIRPT",
                "shortname": ""
            },
            {
                "code": "1884",
                "name": "DAYTONA BEACH INT'L AIRP",
                "shortname": ""
            },
            {
                "code": "1885",
                "name": "MELBOURNE REGIONAL AIRPORT",
                "shortname": " FL"
            },
            {
                "code": "1886",
                "name": "OCALA REGIONAL AIRPORT",
                "shortname": " FL"
            },
            {
                "code": "1887",
                "name": "LEESBURG REGIONAL AIRPORT",
                "shortname": " FL"
            },
            {
                "code": "1888",
                "name": "ORLANDO EXECUTIVE AIRPORT",
                "shortname": " FL"
            },
            {
                "code": "1889",
                "name": "ST. AUGUSTINE AIPRORT",
                "shortname": " FL"
            },
            {
                "code": "1901",
                "name": "MOBILE",
                "shortname": " AL"
            },
            {
                "code": "1902",
                "name": "GULFPORT",
                "shortname": " MS"
            },
            {
                "code": "1903",
                "name": "PASCAGOULA",
                "shortname": " MS"
            },
            {
                "code": "1904",
                "name": "BIRMINGHAM",
                "shortname": " AL"
            },
            {
                "code": "1910",
                "name": "HUNTSVILLE",
                "shortname": " AL"
            },
            {
                "code": "2001",
                "name": "MORGAN CITY",
                "shortname": " LA"
            },
            {
                "code": "2002",
                "name": "NEW ORLEANS",
                "shortname": " LA"
            },
            {
                "code": "2003",
                "name": "LITTLE ROCK",
                "shortname": " AR"
            },
            {
                "code": "2004",
                "name": "BATON ROUGE",
                "shortname": " LA"
            },
            {
                "code": "2005",
                "name": "PORT SULPHUR",
                "shortname": " LA"
            },
            {
                "code": "2006",
                "name": "MEMPHIS",
                "shortname": " TN"
            },
            {
                "code": "2007",
                "name": "NASHVILLE",
                "shortname": " TN"
            },
            {
                "code": "2008",
                "name": "CHATTANOOGA",
                "shortname": " TN"
            },
            {
                "code": "2009",
                "name": "DESTREHAN",
                "shortname": " LA"
            },
            {
                "code": "2010",
                "name": "GRAMERCY",
                "shortname": " LA"
            },
            {
                "code": "2011",
                "name": "GREENVILLE",
                "shortname": " MS"
            },
            {
                "code": "2012",
                "name": "AVONDALE",
                "shortname": " LA"
            },
            {
                "code": "2013",
                "name": "ST. ROSE",
                "shortname": " LA"
            },
            {
                "code": "2014",
                "name": "GOOD HOPE",
                "shortname": " LA"
            },
            {
                "code": "2015",
                "name": "VICKSBURG",
                "shortname": " MS"
            },
            {
                "code": "2016",
                "name": "KNOXVILLE",
                "shortname": " TN"
            },
            {
                "code": "2017",
                "name": "LAKE CHARLES",
                "shortname": " LA"
            },
            {
                "code": "2018",
                "name": "SHREVEPORT/BOSSIER CITY",
                "shortname": ""
            },
            {
                "code": "2027",
                "name": "TRI",
                "shortname": ""
            },
            {
                "code": "2083",
                "name": "AKRANSAS AEROPLEX",
                "shortname": " AR"
            },
            {
                "code": "2095",
                "name": "FEDERAL EXPRESS",
                "shortname": " TN"
            },
            {
                "code": "2101",
                "name": "PORT ARTHUR",
                "shortname": " TX"
            },
            {
                "code": "2102",
                "name": "SABINE",
                "shortname": " TX"
            },
            {
                "code": "2103",
                "name": "ORANGE",
                "shortname": " TX"
            },
            {
                "code": "2104",
                "name": "BEAUMONT",
                "shortname": " TX"
            },
            {
                "code": "2301",
                "name": "BROWNSVILLE",
                "shortname": " TX"
            },
            {
                "code": "2302",
                "name": "DEL RIO",
                "shortname": " TX"
            },
            {
                "code": "2303",
                "name": "EAGLE PASS",
                "shortname": " TX"
            },
            {
                "code": "2304",
                "name": "LAREDO",
                "shortname": " TX"
            },
            {
                "code": "2305",
                "name": "HIDALGO",
                "shortname": "TX"
            },
            {
                "code": "2307",
                "name": "RIO GRANDE CITY",
                "shortname": " TX"
            },
            {
                "code": "2309",
                "name": "PROGRESO",
                "shortname": " TX"
            },
            {
                "code": "2310",
                "name": "ROMA",
                "shortname": " TX"
            },
            {
                "code": "2381",
                "name": "EDINBERG USER FEE AIRPORT",
                "shortname": " TX"
            },
            {
                "code": "2383",
                "name": "VALLEY INT’L. AIRPORT",
                "shortname": " TX"
            },
            {
                "code": "2402",
                "name": "EL PASO",
                "shortname": " TX"
            },
            {
                "code": "2403",
                "name": "PRESIDIO",
                "shortname": " TX"
            },
            {
                "code": "2404",
                "name": "FABENS",
                "shortname": " TX"
            },
            {
                "code": "2406",
                "name": "COLUMBUS",
                "shortname": " NM"
            },
            {
                "code": "2407",
                "name": "ALBUQUERQUE",
                "shortname": " NM"
            },
            {
                "code": "2408",
                "name": "SANTA TERESA",
                "shortname": " NM"
            },
            {
                "code": "2481",
                "name": "SANTA TERESA AIRPORT",
                "shortname": " NM"
            },
            {
                "code": "2501",
                "name": "SAN DIEGO",
                "shortname": " CA"
            },
            {
                "code": "2502",
                "name": "ANDRADE",
                "shortname": " CA"
            },
            {
                "code": "2503",
                "name": "CALEXICO",
                "shortname": " CA"
            },
            {
                "code": "2504",
                "name": "SAN YSIDRO",
                "shortname": " CA"
            },
            {
                "code": "2505",
                "name": "TECATE",
                "shortname": " CA"
            },
            {
                "code": "2506",
                "name": "OTAY MESA",
                "shortname": " CA"
            },
            {
                "code": "2507",
                "name": "CALEXICO",
                "shortname": ""
            },
            {
                "code": "2601",
                "name": "DOUGLAS",
                "shortname": " AZ"
            },
            {
                "code": "2602",
                "name": "LUKEVILLE",
                "shortname": " AZ"
            },
            {
                "code": "2603",
                "name": "NACO",
                "shortname": " AZ"
            },
            {
                "code": "2604",
                "name": "NOGALES",
                "shortname": " AZ"
            },
            {
                "code": "2605",
                "name": "PHOENIX",
                "shortname": " AZ"
            },
            {
                "code": "2606",
                "name": "SASABE",
                "shortname": " AZ"
            },
            {
                "code": "2608",
                "name": "SAN LUIS",
                "shortname": " AZ"
            },
            {
                "code": "2609",
                "name": "TUCSON",
                "shortname": " AZ"
            },
            {
                "code": "2704",
                "name": "LOS ANGELES",
                "shortname": " CA"
            },
            {
                "code": "2709",
                "name": "LONG BEACH",
                "shortname": " CA"
            },
            {
                "code": "2711",
                "name": "SEGUNDO",
                "shortname": " CA"
            },
            {
                "code": "2712",
                "name": "VENTURA",
                "shortname": " CA"
            },
            {
                "code": "2713",
                "name": "PORT HUENEME",
                "shortname": " CA"
            },
            {
                "code": "2715",
                "name": "CAPITAN",
                "shortname": " CA"
            },
            {
                "code": "2719",
                "name": "MORRO BAY",
                "shortname": " CA"
            },
            {
                "code": "2720",
                "name": "LOS ANGELES INT ARPT",
                "shortname": " CA"
            },
            {
                "code": "2721",
                "name": "ONTARIO INTL AIRPORT",
                "shortname": " CA"
            },
            {
                "code": "2722",
                "name": "LAS VEGAS",
                "shortname": " NV"
            },
            {
                "code": "2770",
                "name": "DHL",
                "shortname": " CA"
            },
            {
                "code": "2772",
                "name": "GATEWAY FREIGHT SER. INC",
                "shortname": ""
            },
            {
                "code": "2773",
                "name": "AIR CARGO HANDLING SERV",
                "shortname": ""
            },
            {
                "code": "2774",
                "name": "VIRGIN ATLANTIC CARGO",
                "shortname": ""
            },
            {
                "code": "2775",
                "name": "TNT EXPRESS",
                "shortname": " CA"
            },
            {
                "code": "2776",
                "name": "IBC PACIFIC",
                "shortname": ""
            },
            {
                "code": "2781",
                "name": "PALM SPRINGS USER FEE",
                "shortname": " CA"
            },
            {
                "code": "2782",
                "name": "SAN BERNADINO INTERNATIONAL AIRPORT",
                "shortname": ""
            },
            {
                "code": "2786",
                "name": "MEADOWS FIELD AIRPORT",
                "shortname": " CA"
            },
            {
                "code": "2791",
                "name": "DHL",
                "shortname": ""
            },
            {
                "code": "2792",
                "name": "DHL",
                "shortname": ""
            },
            {
                "code": "2795",
                "name": "UPS",
                "shortname": " CA"
            },
            {
                "code": "2801",
                "name": "SAN FRANCISCO INTL AIRPT",
                "shortname": ""
            },
            {
                "code": "2802",
                "name": "EUREKA",
                "shortname": " CA"
            },
            {
                "code": "2803",
                "name": "FRESNO",
                "shortname": " CA"
            },
            {
                "code": "2805",
                "name": "MONTEREY",
                "shortname": " CA"
            },
            {
                "code": "2809",
                "name": "SAN FRANCISCO",
                "shortname": " CA"
            },
            {
                "code": "2810",
                "name": "STOCKTON",
                "shortname": " CA"
            },
            {
                "code": "2811",
                "name": "OAKLAND",
                "shortname": " CA"
            },
            {
                "code": "2812",
                "name": "RICHMOND",
                "shortname": "CA"
            },
            {
                "code": "2813",
                "name": "ALAMEDA",
                "shortname": "CA"
            },
            {
                "code": "2815",
                "name": "CROCKETT",
                "shortname": "CA"
            },
            {
                "code": "2820",
                "name": "MARTINEZ",
                "shortname": "CA"
            },
            {
                "code": "2821",
                "name": "REDWOOD CITY",
                "shortname": "CA"
            },
            {
                "code": "2827",
                "name": "SELBY",
                "shortname": "CA"
            },
            {
                "code": "2828",
                "name": "SAN JUAQUIN RIVER",
                "shortname": "CA"
            },
            {
                "code": "2829",
                "name": "SAN PABLO BAY",
                "shortname": "CA"
            },
            {
                "code": "2830",
                "name": "CARQUINEZ STRAIT",
                "shortname": "CA"
            },
            {
                "code": "2833",
                "name": "RENO",
                "shortname": " NV"
            },
            {
                "code": "2834",
                "name": "SAN JOSE INTL AIRPORT",
                "shortname": ""
            },
            {
                "code": "2835",
                "name": "SACRAMENTO INT’L AIRPORT",
                "shortname": ""
            },
            {
                "code": "2870",
                "name": "DHL",
                "shortname": " CA"
            },
            {
                "code": "2871",
                "name": "AIRCARGO HANDLING SERVIC",
                "shortname": ""
            },
            {
                "code": "2872",
                "name": "TNT SKYPAK",
                "shortname": ""
            },
            {
                "code": "2873",
                "name": "IBC PACIFIC",
                "shortname": " CA"
            },
            {
                "code": "2895",
                "name": "FEDERAL EXPRESS",
                "shortname": " CA"
            },
            {
                "code": "2901",
                "name": "ASTORIA",
                "shortname": " OR"
            },
            {
                "code": "2902",
                "name": "NEWPORT",
                "shortname": " OR"
            },
            {
                "code": "2903",
                "name": "COOS BAY",
                "shortname": " OR"
            },
            {
                "code": "2904",
                "name": "PORTLAND",
                "shortname": " OR"
            },
            {
                "code": "2905",
                "name": "LONGVIEW",
                "shortname": " WA"
            },
            {
                "code": "2907",
                "name": "BOISE",
                "shortname": " IDAHO"
            },
            {
                "code": "2908",
                "name": "VANCOUVER",
                "shortname": " WA"
            },
            {
                "code": "2909",
                "name": "KALAMA",
                "shortname": " WA"
            },
            {
                "code": "2910",
                "name": "PORTLAND INTL AIRPORT",
                "shortname": " OR"
            },
            {
                "code": "3001",
                "name": "SEATTLE",
                "shortname": " WA"
            },
            {
                "code": "3002",
                "name": "TACOMA",
                "shortname": " WA"
            },
            {
                "code": "3003",
                "name": "ABERDEEN",
                "shortname": " WA"
            },
            {
                "code": "3004",
                "name": "BLAINE",
                "shortname": " WA"
            },
            {
                "code": "3005",
                "name": "BELLINGHAM",
                "shortname": " WA"
            },
            {
                "code": "3006",
                "name": "EVERETT",
                "shortname": " WA"
            },
            {
                "code": "3007",
                "name": "PORT ANGELES",
                "shortname": " WA"
            },
            {
                "code": "3008",
                "name": "PORT TOWNSEND",
                "shortname": " WA"
            },
            {
                "code": "3009",
                "name": "SUMAS",
                "shortname": " WA"
            },
            {
                "code": "3010",
                "name": "ANACORTES",
                "shortname": " WA"
            },
            {
                "code": "3011",
                "name": "NIGHTHAWK",
                "shortname": " WA"
            },
            {
                "code": "3012",
                "name": "DANVILLE",
                "shortname": " WA"
            },
            {
                "code": "3013",
                "name": "FERRY",
                "shortname": " WA"
            },
            {
                "code": "3014",
                "name": "FRIDAY HARBOR",
                "shortname": " WA"
            },
            {
                "code": "3015",
                "name": "BOUNDARY",
                "shortname": " WA"
            },
            {
                "code": "3016",
                "name": "LAURIER",
                "shortname": " WA"
            },
            {
                "code": "3017",
                "name": "POINT ROBERTS",
                "shortname": " WA"
            },
            {
                "code": "3018",
                "name": "KENMORE AIR HARBOR",
                "shortname": " WA"
            },
            {
                "code": "3019",
                "name": "OROVILLE",
                "shortname": " WA"
            },
            {
                "code": "3020",
                "name": "FRONTIER",
                "shortname": " WA"
            },
            {
                "code": "3022",
                "name": "SPOKANE",
                "shortname": " WA"
            },
            {
                "code": "3023",
                "name": "LYNDEN",
                "shortname": " WA"
            },
            {
                "code": "3025",
                "name": "METALINE FALLS",
                "shortname": ""
            },
            {
                "code": "3026",
                "name": "OLYMPIA",
                "shortname": " WA"
            },
            {
                "code": "3027",
                "name": "NEAH BAY",
                "shortname": " WA"
            },
            {
                "code": "3029",
                "name": "SEATTLE",
                "shortname": ""
            },
            {
                "code": "3071",
                "name": "UPS",
                "shortname": " WA"
            },
            {
                "code": "3072",
                "name": "AVION BROKERS @ SEATAC",
                "shortname": ""
            },
            {
                "code": "3073",
                "name": "DHL",
                "shortname": " WA"
            },
            {
                "code": "3074",
                "name": "AIRBORNE EXPRESS @SEATAC",
                "shortname": ""
            },
            {
                "code": "3081",
                "name": "YAKIMA AIR TERMINAL",
                "shortname": " WA"
            },
            {
                "code": "3082",
                "name": "GRANT COUNTY AIRPORT",
                "shortname": " WA"
            },
            {
                "code": "3095",
                "name": "UPS",
                "shortname": " WA"
            },
            {
                "code": "3101",
                "name": "JUNEAU",
                "shortname": " AK"
            },
            {
                "code": "3102",
                "name": "KETCHIKAN",
                "shortname": " AK"
            },
            {
                "code": "3103",
                "name": "SKAGWAY",
                "shortname": " AK"
            },
            {
                "code": "3104",
                "name": "ALCAN",
                "shortname": " AK"
            },
            {
                "code": "3105",
                "name": "WRANGELL",
                "shortname": " AK"
            },
            {
                "code": "3106",
                "name": "DALTON CACHE",
                "shortname": " AK"
            },
            {
                "code": "3107",
                "name": "VALDEZ",
                "shortname": " AK"
            },
            {
                "code": "3111",
                "name": "FAIRBANKS",
                "shortname": " AK"
            },
            {
                "code": "3112",
                "name": "PETERSBURG",
                "shortname": " AK"
            },
            {
                "code": "3115",
                "name": "SITKA",
                "shortname": " AK"
            },
            {
                "code": "3126",
                "name": "ANCHORAGE",
                "shortname": " AK"
            },
            {
                "code": "3195",
                "name": "FEDERAL EXPRESS",
                "shortname": " AK"
            },
            {
                "code": "3196",
                "name": "UPS",
                "shortname": " AK"
            },
            {
                "code": "3201",
                "name": "HONOLULU",
                "shortname": " HI"
            },
            {
                "code": "3202",
                "name": "HIL0",
                "shortname": " HI"
            },
            {
                "code": "3203",
                "name": "KAHULUI",
                "shortname": " HI"
            },
            {
                "code": "3204",
                "name": "NAWILIWILI",
                "shortname": ""
            },
            {
                "code": "3205",
                "name": "HONOLULU INTL AIRPRT",
                "shortname": " HI"
            },
            {
                "code": "3206",
                "name": "KAILUA",
                "shortname": ""
            },
            {
                "code": "3295",
                "name": "UPS",
                "shortname": " HI"
            },
            {
                "code": "3301",
                "name": "RAYMOND",
                "shortname": " MT"
            },
            {
                "code": "3302",
                "name": "EASTPORT",
                "shortname": " ID"
            },
            {
                "code": "3303",
                "name": "SALT LAKE CITY",
                "shortname": " UT"
            },
            {
                "code": "3304",
                "name": "GREAT FALLS",
                "shortname": " MT"
            },
            {
                "code": "3305",
                "name": "BUTTE",
                "shortname": " MT"
            },
            {
                "code": "3306",
                "name": "TURNER",
                "shortname": " MT"
            },
            {
                "code": "3307",
                "name": "DENVER",
                "shortname": " CO"
            },
            {
                "code": "3308",
                "name": "PORTHILL",
                "shortname": " ID"
            },
            {
                "code": "3309",
                "name": "SCOBY",
                "shortname": " MT"
            },
            {
                "code": "3310",
                "name": "SWEETGRASS",
                "shortname": " MT"
            },
            {
                "code": "3316",
                "name": "PIEGAN",
                "shortname": " MT"
            },
            {
                "code": "3317",
                "name": "OPHEIM",
                "shortname": " MT"
            },
            {
                "code": "3318",
                "name": "ROOSVILLE",
                "shortname": " MT"
            },
            {
                "code": "3319",
                "name": "MORGAN",
                "shortname": " MT"
            },
            {
                "code": "3321",
                "name": "WHITLASH",
                "shortname": " MT"
            },
            {
                "code": "3322",
                "name": "DEL BONITA",
                "shortname": " MT"
            },
            {
                "code": "3323",
                "name": "WILDHORSE",
                "shortname": " MT"
            },
            {
                "code": "3324",
                "name": "KALISPELL AIRPORT",
                "shortname": " MT"
            },
            {
                "code": "3325",
                "name": "WILLOW CREEK",
                "shortname": " MT"
            },
            {
                "code": "3332",
                "name": "CASPER",
                "shortname": " WY"
            },
            {
                "code": "3384",
                "name": "ARAPAHOE COUNTY PUBLIC AIRPORT",
                "shortname": " CO"
            },
            {
                "code": "3385",
                "name": "EAGLE COUNTY REGIONAL AIRPORT",
                "shortname": ""
            },
            {
                "code": "3386",
                "name": "BOZEMAN YELLOWSTONE USER FEE AIRPORT",
                "shortname": " MT"
            },
            {
                "code": "3401",
                "name": "PEMBINA",
                "shortname": " ND"
            },
            {
                "code": "3403",
                "name": "PORTAL",
                "shortname": " ND"
            },
            {
                "code": "3404",
                "name": "NECHE",
                "shortname": " ND"
            },
            {
                "code": "3405",
                "name": "ST JOHN",
                "shortname": " ND"
            },
            {
                "code": "3406",
                "name": "NORTHGATE",
                "shortname": " ND"
            },
            {
                "code": "3407",
                "name": "WALHALLA",
                "shortname": " ND"
            },
            {
                "code": "3408",
                "name": "HANNAH",
                "shortname": " ND"
            },
            {
                "code": "3409",
                "name": "SARLES",
                "shortname": " ND"
            },
            {
                "code": "3410",
                "name": "AMBROSE",
                "shortname": " ND"
            },
            {
                "code": "3411",
                "name": "FARGO",
                "shortname": " ND"
            },
            {
                "code": "3413",
                "name": "ANTLER",
                "shortname": " ND"
            },
            {
                "code": "3414",
                "name": "SHERWOOD",
                "shortname": " ND"
            },
            {
                "code": "3415",
                "name": "HANSBORO",
                "shortname": " ND"
            },
            {
                "code": "3416",
                "name": "MAIDA",
                "shortname": " ND"
            },
            {
                "code": "3417",
                "name": "FORTUNA",
                "shortname": " ND"
            },
            {
                "code": "3419",
                "name": "WESTHOPE",
                "shortname": " ND"
            },
            {
                "code": "3420",
                "name": "NOONAN",
                "shortname": " ND"
            },
            {
                "code": "3421",
                "name": "CARBURY",
                "shortname": " ND"
            },
            {
                "code": "3422",
                "name": "DUNSEITH",
                "shortname": " ND"
            },
            {
                "code": "3423",
                "name": "WARROAD",
                "shortname": " MN"
            },
            {
                "code": "3424",
                "name": "BAUDETTE",
                "shortname": " MN"
            },
            {
                "code": "3425",
                "name": "PINECREEK",
                "shortname": " MN"
            },
            {
                "code": "3426",
                "name": "ROSEAU",
                "shortname": " MN"
            },
            {
                "code": "3427",
                "name": "GRAND FORKS",
                "shortname": " ND"
            },
            {
                "code": "3430",
                "name": "LANCASTER",
                "shortname": " MN"
            },
            {
                "code": "3433",
                "name": "WILLISTON AIRPORT",
                "shortname": " ND"
            },
            {
                "code": "3434",
                "name": "MINOT AIRPORT",
                "shortname": " ND"
            },
            {
                "code": "3501",
                "name": "MINNEAPOLIS",
                "shortname": ""
            },
            {
                "code": "3502",
                "name": "SOUIX FALLS",
                "shortname": " SD"
            },
            {
                "code": "3510",
                "name": "DULUTH",
                "shortname": " WI"
            },
            {
                "code": "3511",
                "name": "ASHLAND",
                "shortname": " WI"
            },
            {
                "code": "3512",
                "name": "OMAHA",
                "shortname": " NE"
            },
            {
                "code": "3513",
                "name": "DES MOINES",
                "shortname": " IA"
            },
            {
                "code": "3581",
                "name": "USER FEE AIRPORT",
                "shortname": " MN"
            },
            {
                "code": "3604",
                "name": "INTERNATIONAL FALLS",
                "shortname": " MN"
            },
            {
                "code": "3613",
                "name": "GRAND PORTAGE",
                "shortname": " MN"
            },
            {
                "code": "3701",
                "name": "MILWAUKEE",
                "shortname": " WI"
            },
            {
                "code": "3702",
                "name": "MARINETTE",
                "shortname": " WI"
            },
            {
                "code": "3703",
                "name": "GREEN BAY",
                "shortname": " WI"
            },
            {
                "code": "3706",
                "name": "MANITOWOC",
                "shortname": " WI"
            },
            {
                "code": "3707",
                "name": "SHEBOYGAN",
                "shortname": " WI"
            },
            {
                "code": "3708",
                "name": "RACINE",
                "shortname": " WI"
            },
            {
                "code": "3801",
                "name": "DETROIT",
                "shortname": " MI"
            },
            {
                "code": "3802",
                "name": "PORT HURON",
                "shortname": " MI"
            },
            {
                "code": "3803",
                "name": "SAULT STE. MARIE",
                "shortname": " MI"
            },
            {
                "code": "3804",
                "name": "SAGINAW/BAY CITY",
                "shortname": " MI"
            },
            {
                "code": "3805",
                "name": "BATTLE CREEK",
                "shortname": " MI"
            },
            {
                "code": "3806",
                "name": "GRAND RAPIDS",
                "shortname": " MI"
            },
            {
                "code": "3807",
                "name": "DETROIT METROPOLITAN AIRPORT",
                "shortname": ""
            },
            {
                "code": "3808",
                "name": "ESCANABA",
                "shortname": " MI"
            },
            {
                "code": "3809",
                "name": "MARQUETTE",
                "shortname": " MI"
            },
            {
                "code": "3814",
                "name": "ALGONAC",
                "shortname": " MI"
            },
            {
                "code": "3815",
                "name": "MUSKEGON",
                "shortname": " MI"
            },
            {
                "code": "3816",
                "name": "GRAND HAVEN",
                "shortname": " MI"
            },
            {
                "code": "3818",
                "name": "ROGERS CITY",
                "shortname": " MI"
            },
            {
                "code": "3819",
                "name": "DETOUR",
                "shortname": " MI"
            },
            {
                "code": "3820",
                "name": "MACKINAC ISLE",
                "shortname": " MI"
            },
            {
                "code": "3842",
                "name": "PRESQUE ISLE",
                "shortname": " MI"
            },
            {
                "code": "3843",
                "name": "ALPENA",
                "shortname": " MI"
            },
            {
                "code": "3844",
                "name": "FERRYSBURG",
                "shortname": " MI"
            },
            {
                "code": "3881",
                "name": "OAKLAND/PONTIAC AIRPORT",
                "shortname": " MI"
            },
            {
                "code": "3882",
                "name": "WILLOW RUN AIRPORT",
                "shortname": " MI"
            },
            {
                "code": "3883",
                "name": "CAPITAL REGION I.A",
                "shortname": " MI"
            },
            {
                "code": "3901",
                "name": "CHICAGO",
                "shortname": " IL"
            },
            {
                "code": "3902",
                "name": "PEORIA",
                "shortname": " IL"
            },
            {
                "code": "3905",
                "name": "GARY",
                "shortname": " IN"
            },
            {
                "code": "3908",
                "name": "DAVENPORT",
                "shortname": ""
            },
            {
                "code": "3909",
                "name": "GREATER ROCKFORD AIRPORT",
                "shortname": " IL"
            },
            {
                "code": "3971",
                "name": "TNT EXPRESS CONSIGNMENT",
                "shortname": " IL"
            },
            {
                "code": "3981",
                "name": "WAUKEGAN AIRPORT",
                "shortname": " IL"
            },
            {
                "code": "3983",
                "name": "PAL",
                "shortname": ""
            },
            {
                "code": "3985",
                "name": "DECATUR USER FEE AIRPORT",
                "shortname": " IL"
            },
            {
                "code": "4101",
                "name": "CLEVELAND",
                "shortname": " OH"
            },
            {
                "code": "4102",
                "name": "CINCINNATI",
                "shortname": " OH"
            },
            {
                "code": "4103",
                "name": "COLUMBUS",
                "shortname": " OH"
            },
            {
                "code": "4104",
                "name": "DAYTON",
                "shortname": " OH"
            },
            {
                "code": "4105",
                "name": "TOLEDO",
                "shortname": " OH"
            },
            {
                "code": "4106",
                "name": "ERIE",
                "shortname": " PA"
            },
            {
                "code": "4110",
                "name": "INDIANAPOLIS",
                "shortname": " IN"
            },
            {
                "code": "4112",
                "name": "AKRON",
                "shortname": " OH"
            },
            {
                "code": "4115",
                "name": "LOUISVILLE",
                "shortname": " KY"
            },
            {
                "code": "4116",
                "name": "OWENSBORO",
                "shortname": " KY"
            },
            {
                "code": "4117",
                "name": "HURON",
                "shortname": " OH"
            },
            {
                "code": "4121",
                "name": "LORAIN",
                "shortname": " OH"
            },
            {
                "code": "4122",
                "name": "ASHTABULA/CONNEAUT",
                "shortname": " OH"
            },
            {
                "code": "4183",
                "name": "FORT WAYNE AIRPORT",
                "shortname": " IN"
            },
            {
                "code": "4184",
                "name": "BLUE GRASS AIRPORT",
                "shortname": " KY"
            },
            {
                "code": "4185",
                "name": "HULMAN REGIONAL AIRPORT",
                "shortname": " IN"
            },
            {
                "code": "4192",
                "name": "BURLINGTON AIR EXPRESS",
                "shortname": " OH"
            },
            {
                "code": "4195",
                "name": "EMERY COURIER",
                "shortname": ""
            },
            {
                "code": "4196",
                "name": "UPS",
                "shortname": " KY"
            },
            {
                "code": "4197",
                "name": "DHL CINCINNATI",
                "shortname": " OH"
            },
            {
                "code": "4198",
                "name": "FEDERAL EXPRESS",
                "shortname": " IN"
            },
            {
                "code": "4501",
                "name": "KANSAS CITY",
                "shortname": " MO"
            },
            {
                "code": "4502",
                "name": "ST JOSEPH",
                "shortname": " MO"
            },
            {
                "code": "4503",
                "name": "ST LOUIS",
                "shortname": " MO"
            },
            {
                "code": "4504",
                "name": "WICHITA",
                "shortname": " KS"
            },
            {
                "code": "4505",
                "name": "SPRINGFIELD",
                "shortname": " MO"
            },
            {
                "code": "4506",
                "name": "SPIRIT OF ST. LOUIS",
                "shortname": ""
            },
            {
                "code": "4581",
                "name": "MIDAMERICAN AIRPORT",
                "shortname": " IL"
            },
            {
                "code": "4601",
                "name": "NEWARK",
                "shortname": " NJ"
            },
            {
                "code": "4602",
                "name": "PERTH AMBOY",
                "shortname": " NJ"
            },
            {
                "code": "4670",
                "name": "UPS",
                "shortname": " NJ"
            },
            {
                "code": "4671",
                "name": "FEDERAL EXPRESS",
                "shortname": " NJ"
            },
            {
                "code": "4681",
                "name": "MORRISTOWN AIRPORT",
                "shortname": " NJ"
            },
            {
                "code": "4701",
                "name": "JOHN F KENNEDY AIRPORT",
                "shortname": " NY"
            },
            {
                "code": "4771",
                "name": "NYACC",
                "shortname": ""
            },
            {
                "code": "4772",
                "name": "DHL",
                "shortname": " NY"
            },
            {
                "code": "4773",
                "name": "MICOM",
                "shortname": " NY"
            },
            {
                "code": "4774",
                "name": "AIR FRANCE (MACH PLUS)",
                "shortname": " NY"
            },
            {
                "code": "4778",
                "name": "TNT SKYPAK",
                "shortname": " NY"
            },
            {
                "code": "4901",
                "name": "AGUADILLA",
                "shortname": " PR"
            },
            {
                "code": "4904",
                "name": "FAJARDO",
                "shortname": " PR"
            },
            {
                "code": "4906",
                "name": "HUMACAO",
                "shortname": " PR"
            },
            {
                "code": "4907",
                "name": "MAYAGUEZ",
                "shortname": " PR"
            },
            {
                "code": "4908",
                "name": "PONCE",
                "shortname": " PR"
            },
            {
                "code": "4909",
                "name": "SAN JUAN",
                "shortname": " PR"
            },
            {
                "code": "4911",
                "name": "JOBOS",
                "shortname": " PR"
            },
            {
                "code": "4912",
                "name": "GUAYANILLA",
                "shortname": " PR"
            },
            {
                "code": "4913",
                "name": "INTL AIRPORT",
                "shortname": " PR"
            },
            {
                "code": "5101",
                "name": "CHARLOTTE AMALIE",
                "shortname": " VI"
            },
            {
                "code": "5102",
                "name": "CRUZ BAY",
                "shortname": " VI"
            },
            {
                "code": "5103",
                "name": "CORAL BAY",
                "shortname": " VI"
            },
            {
                "code": "5104",
                "name": "CHRISTIANSTED",
                "shortname": " VI"
            },
            {
                "code": "5105",
                "name": "FREDERIKSTED",
                "shortname": " VI"
            },
            {
                "code": "5201",
                "name": "MIAMI",
                "shortname": " FL"
            },
            {
                "code": "5202",
                "name": "KEY WEST",
                "shortname": " FL"
            },
            {
                "code": "5203",
                "name": "PORT EVERGLADES",
                "shortname": " FL"
            },
            {
                "code": "5204",
                "name": "WEST PALM BEACH",
                "shortname": " FL"
            },
            {
                "code": "5205",
                "name": "FORT PIERCE",
                "shortname": " FL"
            },
            {
                "code": "5206",
                "name": "MIAMI INTL AIRPORT",
                "shortname": " FL"
            },
            {
                "code": "5210",
                "name": "FT. LAUDERDALE",
                "shortname": ""
            },
            {
                "code": "5270",
                "name": "INT. COURIER ASS.",
                "shortname": " FL"
            },
            {
                "code": "5272",
                "name": "MIA/CFS EXP CONSIG FACIL",
                "shortname": " FL"
            },
            {
                "code": "5273",
                "name": "UPS",
                "shortname": " FL"
            },
            {
                "code": "5295",
                "name": "UPS",
                "shortname": " FL"
            },
            {
                "code": "5296",
                "name": "DHL WORLDWIDE EXPRESS",
                "shortname": " FL"
            },
            {
                "code": "5297",
                "name": "FEDERAL EXPRESS",
                "shortname": " FL"
            },
            {
                "code": "5298",
                "name": "IBC COURIER HUB",
                "shortname": " FL"
            },
            {
                "code": "5301",
                "name": "HOUSTON",
                "shortname": " TX"
            },
            {
                "code": "5306",
                "name": "TEXAS CITY",
                "shortname": " TX"
            },
            {
                "code": "5309",
                "name": "HOUSTON INTERCONTL",
                "shortname": " TX"
            },
            {
                "code": "5310",
                "name": "GALVESTON",
                "shortname": " TX"
            },
            {
                "code": "5311",
                "name": "FREEPORT",
                "shortname": " TX"
            },
            {
                "code": "5312",
                "name": "CORPUS CHRISTI",
                "shortname": " TX"
            },
            {
                "code": "5313",
                "name": "PORT LAVACA",
                "shortname": " TX"
            },
            {
                "code": "5381",
                "name": "SUGAR LAND REGIONAL AIRPORT",
                "shortname": " TX"
            },
            {
                "code": "5401",
                "name": "WASHINGTON",
                "shortname": " DC"
            },
            {
                "code": "5402",
                "name": "ALEXANDRIA",
                "shortname": "VA"
            },
            {
                "code": "5501",
                "name": "DALLAS/FT. WORTH",
                "shortname": "TX"
            },
            {
                "code": "5502",
                "name": "AMARILLO",
                "shortname": "TX"
            },
            {
                "code": "5503",
                "name": "LUBBOCK",
                "shortname": "TX"
            },
            {
                "code": "5504",
                "name": "OKLAHOMA CITY",
                "shortname": "OK"
            },
            {
                "code": "5505",
                "name": "TULSA",
                "shortname": "OK"
            },
            {
                "code": "5506",
                "name": "AUSTIN",
                "shortname": "TX"
            },
            {
                "code": "5507",
                "name": "SAN ANTONIO",
                "shortname": "TX"
            },
            {
                "code": "5582",
                "name": "MIDLAND INTER AIRPORT",
                "shortname": "TX"
            },
            {
                "code": "5583",
                "name": "FORTH WORTH ALLIANCE AIRPORT",
                "shortname": "TX"
            },
            {
                "code": "5584",
                "name": "ADDISON AIRPORT",
                "shortname": "TX"
            },
            {
                "code": "5588",
                "name": "DALLAS LOVE FIELD",
                "shortname": ""
            },
            {
                "code": "8000",
                "name": "U.S. MAIL EXPORTS",
                "shortname": ""
            }            
        ]
    }

    public static get portOfUnlading():any[]{
        return [
            {
                "code": "1520",
                "name": "HAMILTON",
                "country": "CANADA"
            },
            {
                "code": "1527",
                "name": "CLARKSON",
                "country": "CANADA"
            },
            {
                "code": "1528",
                "name": "BRITT",
                "country": "CANADA"
            },
            {
                "code": "1530",
                "name": "PORT CREDIT",
                "country": "CANADA"
            },
            {
                "code": "1535",
                "name": "TORONTO",
                "country": "CANADA"
            },
            {
                "code": "1652",
                "name": "PICTON",
                "country": "CANADA"
            },
            {
                "code": "1653",
                "name": "BATH",
                "country": "CANADA"
            },
            {
                "code": "1670",
                "name": "KINGSTON",
                "country": "CANADA"
            },
            {
                "code": "1690",
                "name": "ST. CATHARINES",
                "country": "CANADA"
            },
            {
                "code": "1694",
                "name": "BROCKVILLE",
                "country": "CANADA"
            },
            {
                "code": "1696",
                "name": "MORRISBURG",
                "country": "CANADA"
            },
            {
                "code": "1697",
                "name": "ROCKY POINT",
                "country": " CANADA"
            },
            {
                "code": "1700",
                "name": "PRESCOTT",
                "country": "CANADA"
            },
            {
                "code": "1705",
                "name": "CARDINAL",
                "country": "CANADA"
            },
            {
                "code": "1784",
                "name": "CORNWALL",
                "country": "CANADA"
            },
            {
                "code": "1806",
                "name": "BEAUHARNOI",
                "country": "CANADA"
            },
            {
                "code": "1807",
                "name": "TRACY",
                "country": "CANADA"
            },
            {
                "code": "1822",
                "name": "MONTREAL",
                "country": "CANADA"
            },
            {
                "code": "1832",
                "name": "LEVIS",
                "country": " CANADA"
            },
            {
                "code": "2566",
                "name": "PORT STANLEY",
                "country": "CANADA"
            },
            {
                "code": "2641",
                "name": "PORT COLBORNE",
                "country": "CANADA"
            },
            {
                "code": "2643",
                "name": "ROCKPORT",
                "country": "CANADA"
            },
            {
                "code": "2645",
                "name": "DUNNVILLE",
                "country": "CANADA"
            },
            {
                "code": "2649",
                "name": "THOROLD",
                "country": "CANADA"
            },
            {
                "code": "3504",
                "name": "AMHERSTBURG",
                "country": "CANADA"
            },
            {
                "code": "3506",
                "name": "KINGSVILLE",
                "country": "CANADA"
            },
            {
                "code": "3507",
                "name": "SCUDDER",
                "country": "CANADA"
            },
            {
                "code": "3508",
                "name": "LEAMINGTON",
                "country": "CANADA"
            },
            {
                "code": "3510",
                "name": "OJIBWAY",
                "country": "CANADA"
            },
            {
                "code": "3512",
                "name": "WINDSOR",
                "country": "CANADA"
            },
            {
                "code": "5512",
                "name": "SOMBRA",
                "country": "CANADA"
            },
            {
                "code": "5515",
                "name": "COURTRIGHT",
                "country": "CANADA"
            },
            {
                "code": "5517",
                "name": "CORUNNA",
                "country": "CANADA"
            },
            {
                "code": "5520",
                "name": "SARNIA",
                "country": "CANADA"
            },
            {
                "code": "6533",
                "name": "GODERICH",
                "country": "CANADA"
            },
            {
                "code": "6645",
                "name": "NANTICOKE",
                "country": "CANADA"
            },
            {
                "code": "6682",
                "name": "VICTORIA HARBOR",
                "country": "CANADA"
            },
            {
                "code": "6695",
                "name": "DEPOT HARBOR",
                "country": "CANADA"
            },
            {
                "code": "6697",
                "name": "PARRY SOUND",
                "country": "CANADA"
            },
            {
                "code": "6748",
                "name": "LITTLE CURRENT",
                "country": "CANADA"
            },
            {
                "code": "6766",
                "name": "MELDRUM BAY",
                "country": "CANADA"
            },
            {
                "code": "6767",
                "name": "SPRAGGE",
                "country": "CANADA"
            },
            {
                "code": "6768",
                "name": "OWEN SOUND",
                "country": "CANADA"
            },
            {
                "code": "6770",
                "name": "OAKVILLE",
                "country": "CANADA"
            },
            {
                "code": "7238",
                "name": "OTTAWA",
                "country": "CANADA"
            },
            {
                "code": "8525",
                "name": "ALGOMA",
                "country": "CANADA"
            },
            {
                "code": "8526",
                "name": "BRUCE MINES",
                "country": "CANADA"
            },
            {
                "code": "8527",
                "name": "THESSALON",
                "country": "CANADA"
            },
            {
                "code": "8528",
                "name": "FISHER HARBOUR",
                "country": "CANADA"
            },
            {
                "code": "9000",
                "name": "ALL OTHER CANADA GREAT LAKES REGION PORTS",
                "country": "CANADA"
            },
            {
                "code": "9555",
                "name": "MICHIPICOTEN HARBOR",
                "country": "CANADA"
            },
            {
                "code": "9601",
                "name": "MARATHON",
                "country": "CANADA"
            },
            {
                "code": "9605",
                "name": "WALKERVILLE",
                "country": "CANADA"
            },
            {
                "code": "9662",
                "name": "THUNDER BAY",
                "country": "CANADA"
            },
            {
                "code": "9663",
                "name": "PORT WELLER",
                "country": "CANADA"
            },
            {
                "code": "9665",
                "name": "BOWMANVILLE",
                "country": "CANADA"
            },
            {
                "code": "9667",
                "name": "WHITEFISH RIVER",
                "country": "CANADA"
            },
            {
                "code": "9669",
                "name": "HERON BAY",
                "country": "CANADA"
            },
            {
                "code": "9670",
                "name": "OSHAWA",
                "country": "CANADA"
            },
            {
                "code": "9671",
                "name": "WHITBY",
                "country": " CANADA"
            },
            {
                "code": "10100",
                "name": "ALL OTHER GREENLAND",
                "country": "GREENLAND"
            },
            {
                "code": "10101",
                "name": "THULE",
                "country": "GREENLAND"
            },
            {
                "code": "10125",
                "name": "GODTHAB",
                "country": "GREENLAND"
            },
            {
                "code": "12200",
                "name": "ALL OTHER CANADA PACIFIC REGION PORTS",
                "country": "CANADA"
            },
            {
                "code": "12202",
                "name": "PORT ALBERNI",
                "country": "CANADA"
            },
            {
                "code": "12203",
                "name": "ALERT BAY",
                "country": "CANADA"
            },
            {
                "code": "12204",
                "name": "PORT CLEMENTS",
                "country": "CANADA"
            },
            {
                "code": "12205",
                "name": "SOOKE",
                "country": "CANADA"
            },
            {
                "code": "12206",
                "name": "TEXADA",
                "country": "CANADA"
            },
            {
                "code": "12207",
                "name": "CAMPBELL RIVER",
                "country": "CANADA"
            },
            {
                "code": "12208",
                "name": "HOWIE SOUND",
                "country": "CANADA"
            },
            {
                "code": "12209",
                "name": "LADYSMITH",
                "country": "CANADA"
            },
            {
                "code": "12210",
                "name": "MASSET",
                "country": "CANADA"
            },
            {
                "code": "12211",
                "name": "PORT HARDY",
                "country": "CANADA"
            },
            {
                "code": "12212",
                "name": "WOODFIBRE",
                "country": "CANADA"
            },
            {
                "code": "12213",
                "name": "CAPE BEALE",
                "country": "CANADA"
            },
            {
                "code": "12214",
                "name": "BLUBBER BAY",
                "country": "CANADA"
            },
            {
                "code": "12215",
                "name": "BEALE COVE",
                "country": "CANADA"
            },
            {
                "code": "12216",
                "name": "BELLA COOLA",
                "country": "CANADA"
            },
            {
                "code": "12217",
                "name": "JERVIS INLET",
                "country": "CANADA"
            },
            {
                "code": "12218",
                "name": "UCUELET",
                "country": "CANADA"
            },
            {
                "code": "12219",
                "name": "SECHELT",
                "country": " CANADA"
            },
            {
                "code": "12229",
                "name": "CHEMAINUS",
                "country": "CANADA"
            },
            {
                "code": "12231",
                "name": "COWICHAN BAY",
                "country": "CANADA"
            },
            {
                "code": "12234",
                "name": "CROFTON",
                "country": "CANADA"
            },
            {
                "code": "12237",
                "name": "ELK FALLS",
                "country": "CANADA"
            },
            {
                "code": "12246",
                "name": "DUNCAN BAY",
                "country": "CANADA"
            },
            {
                "code": "12261",
                "name": "FRASER RIVER",
                "country": "CANADA"
            },
            {
                "code": "12275",
                "name": "GOLD RIVER",
                "country": "CANADA"
            },
            {
                "code": "12287",
                "name": "KITIMAT",
                "country": "CANADA"
            },
            {
                "code": "12406",
                "name": "NANAIMO",
                "country": "CANADA"
            },
            {
                "code": "12407",
                "name": "HARMAC",
                "country": "CANADA"
            },
            {
                "code": "12408",
                "name": "NEW WESTMINSTER",
                "country": "CANADA"
            },
            {
                "code": "12420",
                "name": "PORT EDWARD",
                "country": "CANADA"
            },
            {
                "code": "12422",
                "name": "PORT ALICE",
                "country": "CANADA"
            },
            {
                "code": "12426",
                "name": "PORT MANN",
                "country": "CANADA"
            },
            {
                "code": "12428",
                "name": "PORT MELLON",
                "country": "CANADA"
            },
            {
                "code": "12430",
                "name": "PORT MOODY",
                "country": "CANADA"
            },
            {
                "code": "12441",
                "name": "POWELL RIVER",
                "country": "CANADA"
            },
            {
                "code": "12442",
                "name": "PRINCE RUPERT",
                "country": "CANADA"
            },
            {
                "code": "12444",
                "name": "PORT SIMPSON",
                "country": "CANADA"
            },
            {
                "code": "12468",
                "name": "SIDNEY",
                "country": "CANADA"
            },
            {
                "code": "12475",
                "name": "STANOVAN",
                "country": "CANADA"
            },
            {
                "code": "12478",
                "name": "STEWART",
                "country": "CANADA"
            },
            {
                "code": "12482",
                "name": "TAHSIS",
                "country": "CANADA"
            },
            {
                "code": "12488",
                "name": "WHONOK",
                "country": "CANADA"
            },
            {
                "code": "12489",
                "name": "ROBERTS BANK",
                "country": "CANADA"
            },
            {
                "code": "12490",
                "name": "MISSION",
                "country": "CANADA"
            },
            {
                "code": "12491",
                "name": "UNION BAY",
                "country": "CANADA"
            },
            {
                "code": "12492",
                "name": "VAN ANDA",
                "country": "CANADA"
            },
            {
                "code": "12493",
                "name": "VANCOUVER",
                "country": "CANADA"
            },
            {
                "code": "12494",
                "name": "GANGES",
                "country": "CANADA"
            },
            {
                "code": "12495",
                "name": "BURNABY",
                "country": "CANADA"
            },
            {
                "code": "12496",
                "name": "DELTA BC",
                "country": "CANADA"
            },
            {
                "code": "12497",
                "name": "RICHMOND",
                "country": "CANADA"
            },
            {
                "code": "12498",
                "name": "OAK BAY",
                "country": "CANADA"
            },
            {
                "code": "13400",
                "name": "ALL OTHER CANADA ATLANTIC REGION PORTS",
                "country": "CANADA"
            },
            {
                "code": "13410",
                "name": "CACOUNA",
                "country": "CANADA"
            },
            {
                "code": "13420",
                "name": "DIGBY",
                "country": "CANADA"
            },
            {
                "code": "13430",
                "name": "PORT MAITLAND",
                "country": "CANADA"
            },
            {
                "code": "13435",
                "name": "BEAVER HARBOUR",
                "country": "CANADA"
            },
            {
                "code": "13436",
                "name": "MULGRAVE",
                "country": "CANADA"
            },
            {
                "code": "13437",
                "name": "LOUISBURG",
                "country": "CANADA"
            },
            {
                "code": "13441",
                "name": "BECANCOUR",
                "country": "CANADA"
            },
            {
                "code": "13442",
                "name": "BELLEDUNE",
                "country": "CANADA"
            },
            {
                "code": "13444",
                "name": "CAMPBELLTON",
                "country": "CANADA"
            },
            {
                "code": "13445",
                "name": "CHANCE HARBOR",
                "country": "CANADA"
            },
            {
                "code": "13450",
                "name": "BLACKS HARBOR",
                "country": "CANADA"
            },
            {
                "code": "13451",
                "name": "CLARKE'S HARBOUR",
                "country": "CANADA"
            },
            {
                "code": "13452",
                "name": "GOLD RIVER",
                "country": "CANADA"
            },
            {
                "code": "13454",
                "name": "RICHARDSON ISLAND",
                "country": "CANADA"
            },
            {
                "code": "13455",
                "name": "SHELBURNE",
                "country": "CANADA"
            },
            {
                "code": "13456",
                "name": "VICTORIA",
                "country": "CANADA"
            },
            {
                "code": "13457",
                "name": "WELSHPOOL",
                "country": "CANADA"
            },
            {
                "code": "13458",
                "name": "BATHURST",
                "country": "CANADA"
            },
            {
                "code": "13459",
                "name": "BAYSIDE",
                "country": "CANADA"
            },
            {
                "code": "13460",
                "name": "CHATHAM",
                "country": "CANADA"
            },
            {
                "code": "13466",
                "name": "CHANDLER",
                "country": "CANADA"
            },
            {
                "code": "13470",
                "name": "TUKTOYAKTUK",
                "country": "CANADA"
            },
            {
                "code": "13473",
                "name": "CHICOUTIMI",
                "country": "CANADA"
            },
            {
                "code": "13475",
                "name": "DEER ISLAND",
                "country": " CANADA"
            },
            {
                "code": "13476",
                "name": "CLARKE CITY",
                "country": "CANADA"
            },
            {
                "code": "13481",
                "name": "BAIE COMEAU",
                "country": "CANADA"
            },
            {
                "code": "13482",
                "name": "CONTRECOEUR",
                "country": "CANADA"
            },
            {
                "code": "13484",
                "name": "DALHOUSIE",
                "country": "CANADA"
            },
            {
                "code": "13485",
                "name": "DARTMOUTH",
                "country": "CANADA"
            },
            {
                "code": "13493",
                "name": "DONNACONA",
                "country": "CANADA"
            },
            {
                "code": "13819",
                "name": "GASPE",
                "country": "CANADA"
            },
            {
                "code": "13820",
                "name": "GROSCACOUNA",
                "country": "CANADA"
            },
            {
                "code": "13829",
                "name": "GRAND HARBOR",
                "country": "CANADA"
            },
            {
                "code": "13841",
                "name": "HALIFAX",
                "country": "CANADA"
            },
            {
                "code": "13846",
                "name": "AULD'S COVE",
                "country": "CANADA"
            },
            {
                "code": "13847",
                "name": "YARMOUTH",
                "country": "CANADA"
            },
            {
                "code": "13848",
                "name": "HANTSPORT",
                "country": "CANADA"
            },
            {
                "code": "13849",
                "name": "PORT HAWKESBURY",
                "country": "CANADA"
            },
            {
                "code": "13850",
                "name": "BRIDGEWATER",
                "country": "CANADA"
            },
            {
                "code": "13851",
                "name": "LUNENBURG",
                "country": "CANADA"
            },
            {
                "code": "13852",
                "name": "SYDNEY",
                "country": "CANADA"
            },
            {
                "code": "13853",
                "name": "NORTH SYDNEY",
                "country": "CANADA"
            },
            {
                "code": "13854",
                "name": "PICTOU",
                "country": "CANADA"
            },
            {
                "code": "13855",
                "name": "BADDECK",
                "country": "CANADA"
            },
            {
                "code": "13884",
                "name": "LITTLE NARROWS",
                "country": "CANADA"
            },
            {
                "code": "13887",
                "name": "LIVERPOOL",
                "country": "CANADA"
            },
            {
                "code": "13888",
                "name": "SHEET HARBOUR",
                "country": "CANADA"
            },
            {
                "code": "14001",
                "name": "CHURCHILL",
                "country": "CANADA"
            },
            {
                "code": "14021",
                "name": "MONT LOUIS",
                "country": "CANADA"
            },
            {
                "code": "14037",
                "name": "NEWCASTLE",
                "country": "CANADA"
            },
            {
                "code": "14065",
                "name": "POINT TUPPER",
                "country": "CANADA"
            },
            {
                "code": "14066",
                "name": "POINTE AU PIC",
                "country": "CANADA"
            },
            {
                "code": "14067",
                "name": "VALLEYFIELD",
                "country": "CANADA"
            },
            {
                "code": "14068",
                "name": "RIMOUSKI",
                "country": "CANADA"
            },
            {
                "code": "14069",
                "name": "PORT ALFRED",
                "country": "CANADA"
            },
            {
                "code": "14070",
                "name": "MATANE",
                "country": "CANADA"
            },
            {
                "code": "14073",
                "name": "PORT CARTIER",
                "country": "CANADA"
            },
            {
                "code": "14090",
                "name": "ST. ROMAULD",
                "country": " CANADA"
            },
            {
                "code": "14092",
                "name": "SILLERY",
                "country": "CANADA"
            },
            {
                "code": "14094",
                "name": "QUEBEC",
                "country": "CANADA"
            },
            {
                "code": "14095",
                "name": "RUPERT INLET",
                "country": "CANADA"
            },
            {
                "code": "14426",
                "name": "ST. ANDREWS",
                "country": "CANADA"
            },
            {
                "code": "14427",
                "name": "SAINT GEORGE",
                "country": "CANADA"
            },
            {
                "code": "14428",
                "name": "SAINT JOHN",
                "country": "CANADA"
            },
            {
                "code": "14429",
                "name": "SAINT JOHNS",
                "country": "CANADA"
            },
            {
                "code": "14438",
                "name": "SAINT STEPHEN",
                "country": "CANADA"
            },
            {
                "code": "14444",
                "name": "POINTE NOIRE",
                "country": "CANADA"
            },
            {
                "code": "14466",
                "name": "SOREL",
                "country": "CANADA"
            },
            {
                "code": "14467",
                "name": "SOURIS",
                "country": "CANADA"
            },
            {
                "code": "14470",
                "name": "SUMMERSIDE",
                "country": "CANADA"
            },
            {
                "code": "14471",
                "name": "CHARLOTTETOWN",
                "country": "CANADA"
            },
            {
                "code": "14472",
                "name": "MONTAGUE",
                "country": "CANADA"
            },
            {
                "code": "14474",
                "name": "TROIS RIVIERES",
                "country": "CANADA"
            },
            {
                "code": "15200",
                "name": "ALL OTHER NEWFOUNDLAND PORTS",
                "country": "CANADA"
            },
            {
                "code": "15201",
                "name": "BULL ARM",
                "country": "CANADA"
            },
            {
                "code": "15205",
                "name": "BAY ROBERTS",
                "country": "CANADA"
            },
            {
                "code": "15206",
                "name": "CARBONEAR",
                "country": "CANADA"
            },
            {
                "code": "15207",
                "name": "ENGLEE HARBOR",
                "country": "CANADA"
            },
            {
                "code": "15208",
                "name": "FORTUNE",
                "country": "CANADA"
            },
            {
                "code": "15209",
                "name": "GRAND BANK",
                "country": "CANADA"
            },
            {
                "code": "15210",
                "name": "HARBOUR BRETON",
                "country": "CANADA"
            },
            {
                "code": "15211",
                "name": "RAMEA",
                "country": "CANADA"
            },
            {
                "code": "15212",
                "name": "SAINT ANTHONY",
                "country": "CANADA"
            },
            {
                "code": "15213",
                "name": "ARGENTIA",
                "country": "CANADA"
            },
            {
                "code": "15214",
                "name": "BOTWOOD",
                "country": "CANADA"
            },
            {
                "code": "15223",
                "name": "EARLS ISLAND",
                "country": "CANADA"
            },
            {
                "code": "15224",
                "name": "CLARENVILLE",
                "country": "CANADA"
            },
            {
                "code": "15226",
                "name": "COLEY'S POINT",
                "country": "CANADA"
            },
            {
                "code": "15229",
                "name": "COME BY CHANCE",
                "country": "CANADA"
            },
            {
                "code": "15230",
                "name": "WHIFFEN HEAD",
                "country": "CANADA"
            },
            {
                "code": "15231",
                "name": "CORNER BROOK",
                "country": "CANADA"
            },
            {
                "code": "15232",
                "name": "HARBOUR GRACE",
                "country": "CANADA"
            },
            {
                "code": "15233",
                "name": "MARYSTOWN",
                "country": "CANADA"
            },
            {
                "code": "15245",
                "name": "HOLYROOD",
                "country": "CANADA"
            },
            {
                "code": "15255",
                "name": "LONG HARBOR",
                "country": "CANADA"
            },
            {
                "code": "15260",
                "name": "LONG POND",
                "country": "CANADA"
            },
            {
                "code": "15282",
                "name": "SAINT JOHN'S",
                "country": "CANADA"
            },
            {
                "code": "15283",
                "name": "SAINT LAWRENCE",
                "country": "CANADA"
            },
            {
                "code": "15285",
                "name": "STEPHENVILLE",
                "country": "CANADA"
            },
            {
                "code": "15298",
                "name": "ALL OTHER LABRADOR PORTS",
                "country": "CANADA"
            },
            {
                "code": "16101",
                "name": "ST. PIERRE",
                "country": "CANADA"
            },
            {
                "code": "20100",
                "name": "ALL OTHER MEXICO WEST COAST REGION PORTS",
                "country": "MEXICO"
            },
            {
                "code": "20101",
                "name": "ACAPULCO",
                "country": "MEXICO"
            },
            {
                "code": "20104",
                "name": "CERROS ISLAND",
                "country": "MEXICO"
            },
            {
                "code": "20105",
                "name": "LA PAZ",
                "country": "MEXICO"
            },
            {
                "code": "20106",
                "name": "TOPOLOBAMPO",
                "country": "MEXICO"
            },
            {
                "code": "20107",
                "name": "LAZARO CARDENAS",
                "country": "MEXICO"
            },
            {
                "code": "20108",
                "name": "ENSENADA",
                "country": "MEXICO"
            },
            {
                "code": "20113",
                "name": "GUAYMAS",
                "country": "MEXICO"
            },
            {
                "code": "20120",
                "name": "MANZANILLO",
                "country": "MEXICO"
            },
            {
                "code": "20122",
                "name": "MAZATLAN",
                "country": "MEXICO"
            },
            {
                "code": "20125",
                "name": "ROSARITO",
                "country": "MEXICO"
            },
            {
                "code": "20128",
                "name": "ISLAS CORONADOS",
                "country": "MEXICO"
            },
            {
                "code": "20129",
                "name": "SALINA CRUZ",
                "country": "MEXICO"
            },
            {
                "code": "20135",
                "name": "SAN MARCOS ISLAND",
                "country": "MEXICO"
            },
            {
                "code": "20141",
                "name": "SANTA ROSALIA",
                "country": "MEXICO"
            },
            {
                "code": "20142",
                "name": "SAUZAL",
                "country": "MEXICO"
            },
            {
                "code": "20143",
                "name": "PUERTO VALLARTA",
                "country": "MEXICO"
            },
            {
                "code": "20144",
                "name": "CABO SAN LUCAS",
                "country": "MEXICO"
            },
            {
                "code": "20152",
                "name": "CAYO ARCAS",
                "country": "MEXICO"
            },
            {
                "code": "20153",
                "name": "FRONTERA",
                "country": "MEXICO"
            },
            {
                "code": "20154",
                "name": "DOS BOCAS",
                "country": "MEXICO"
            },
            {
                "code": "20155",
                "name": "CAMPECHE",
                "country": "MEXICO"
            },
            {
                "code": "20157",
                "name": "CARMEN",
                "country": "MEXICO"
            },
            {
                "code": "20161",
                "name": "CALICA",
                "country": "MEXICO"
            },
            {
                "code": "20162",
                "name": "CANCUN",
                "country": "MEXICO"
            },
            {
                "code": "20171",
                "name": "PUERTO MEXICO",
                "country": "MEXICO"
            },
            {
                "code": "20173",
                "name": "COZUMEL ISLAND",
                "country": "MEXICO"
            },
            {
                "code": "20174",
                "name": "CHETUMAL",
                "country": "MEXICO"
            },
            {
                "code": "20179",
                "name": "ISLA MUJERES",
                "country": "MEXICO"
            },
            {
                "code": "20181",
                "name": "MINATITLAN",
                "country": "MEXICO"
            },
            {
                "code": "20184",
                "name": "PAJARITOS",
                "country": "MEXICO"
            },
            {
                "code": "20185",
                "name": "PROGRESO",
                "country": "MEXICO"
            },
            {
                "code": "20193",
                "name": "ALTAMIRA",
                "country": "MEXICO"
            },
            {
                "code": "20194",
                "name": "PUERTO DE MORALES",
                "country": "MEXICO"
            },
            {
                "code": "20195",
                "name": "ALL OTHER MEXICO EAST COAST REGION PORTS",
                "country": "MEXICO"
            },
            {
                "code": "20197",
                "name": "TUXPAN",
                "country": "MEXICO"
            },
            {
                "code": "20199",
                "name": "VERACRUZ",
                "country": "MEXICO"
            },
            {
                "code": "20500",
                "name": "ALL OTHER GUATEMALA CARIBBEAN REGION PORTS",
                "country": "GUATEMALA"
            },
            {
                "code": "20505",
                "name": "SANTO TOMAS",
                "country": "GUATEMALA"
            },
            {
                "code": "20506",
                "name": "PUERTO QUETZAL",
                "country": "GUATEMALA"
            },
            {
                "code": "20513",
                "name": "QUATEMA",
                "country": "GUATEMALA"
            },
            {
                "code": "20577",
                "name": "SAN JOSE",
                "country": "GUATEMALA"
            },
            {
                "code": "20599",
                "name": "ALL OTHER GUATEMALA WEST COAST REGION PORTS",
                "country": "GUATEMALA"
            },
            {
                "code": "20800",
                "name": "OTHER BELIZE PORTS",
                "country": "BELIZE"
            },
            {
                "code": "20801",
                "name": "BELIZE",
                "country": "BELIZE"
            },
            {
                "code": "20802",
                "name": "BIG CREEK",
                "country": "BELIZE"
            },
            {
                "code": "20803",
                "name": "STANN CREEK",
                "country": "BELIZE"
            },
            {
                "code": "21101",
                "name": "ACAJUTLA",
                "country": "EL SALVADOR"
            },
            {
                "code": "21137",
                "name": "CUTUCO",
                "country": "EL SALVADOR"
            },
            {
                "code": "21199",
                "name": "ALL OTHER EL SALVADOR PORTS",
                "country": "EL SALVADOR"
            },
            {
                "code": "21500",
                "name": "ALL OTHER HONDURAS CARIBBEAN REGION PORTS",
                "country": "HONDURAS"
            },
            {
                "code": "21515",
                "name": "LA CEIBA",
                "country": "HONDURAS"
            },
            {
                "code": "21519",
                "name": "LIMON",
                "country": "HONDURAS"
            },
            {
                "code": "21527",
                "name": "PUERTO CASTILLA",
                "country": "HONDURAS"
            },
            {
                "code": "21531",
                "name": "PUERTO CORTES",
                "country": "HONDURAS"
            },
            {
                "code": "21535",
                "name": "GUANAJA",
                "country": "HONDURAS"
            },
            {
                "code": "21543",
                "name": "TELA",
                "country": "HONDURAS"
            },
            {
                "code": "21551",
                "name": "AMAPALA",
                "country": "HONDURAS"
            },
            {
                "code": "21552",
                "name": "PUERTO HENECAN",
                "country": "HONDURAS"
            },
            {
                "code": "21599",
                "name": "ALL OTHER HONDURAS WEST COAST REGION PORTS",
                "country": "HONDURAS"
            },
            {
                "code": "21900",
                "name": "ALL OTHER NICARAGUA CARIBBEAN REGION PORTS",
                "country": "NICARAGUA"
            },
            {
                "code": "21901",
                "name": "BLUEFIELDS",
                "country": "NICARAGUA"
            },
            {
                "code": "21902",
                "name": "RAMA",
                "country": "NICARAGUA"
            },
            {
                "code": "21925",
                "name": "PUERTO CABEZAS",
                "country": "NICARAGUA"
            },
            {
                "code": "21951",
                "name": "CORINTO",
                "country": "NICARAGUA"
            },
            {
                "code": "21999",
                "name": "ALL OTHER NICARAGUA WEST COAST REGION PORTS",
                "country": "NICARAGUA"
            },
            {
                "code": "22300",
                "name": "ALL OTHER COSTA RICA CARIBBEAN REGION PORTS",
                "country": "COSTA RICA"
            },
            {
                "code": "22301",
                "name": "COLORADO BAR",
                "country": "COSTA RICA"
            },
            {
                "code": "22313",
                "name": "PUERTO LIMON",
                "country": "COSTA RICA"
            },
            {
                "code": "22315",
                "name": "MOIN",
                "country": "COSTA RICA"
            },
            {
                "code": "22361",
                "name": "CALDERA",
                "country": "COSTA RICA"
            },
            {
                "code": "22363",
                "name": "PUERTO GOLFITO",
                "country": "COSTA RICA"
            },
            {
                "code": "22381",
                "name": "PUNTA QUEPOS",
                "country": "COSTA RICA"
            },
            {
                "code": "22386",
                "name": "PUNTA MORALES",
                "country": "COSTA RICA"
            },
            {
                "code": "22387",
                "name": "PUNTARENAS",
                "country": "COSTA RICA"
            },
            {
                "code": "22389",
                "name": "AGUADULCE",
                "country": "COSTA RICA"
            },
            {
                "code": "22399",
                "name": "ALL OTHER COSTA RICA WEST COAST REGION PORTS",
                "country": "COSTA RICA"
            },
            {
                "code": "22500",
                "name": "ALL OTHER PANAMA CARIBBEAN REGION PORTS",
                "country": "PANAMA"
            },
            {
                "code": "22501",
                "name": "ALMIRANTE",
                "country": "PANAMA"
            },
            {
                "code": "22517",
                "name": "COCO SOLO",
                "country": "PANAMA"
            },
            {
                "code": "22518",
                "name": "CRISTOBAL",
                "country": "PANAMA"
            },
            {
                "code": "22519",
                "name": "PANAMA CANAL CARIBBEAN",
                "country": "PANAMA"
            },
            {
                "code": "22520",
                "name": "CHIRIQUI GRANDE TERMINAL",
                "country": "PANAMA"
            },
            {
                "code": "22525",
                "name": "PARITA",
                "country": "PANAMA"
            },
            {
                "code": "22555",
                "name": "PUERTO BELLO",
                "country": "PANAMA"
            },
            {
                "code": "22556",
                "name": "PUERTO MANZANILLO",
                "country": "PANAMA"
            },
            {
                "code": "22565",
                "name": "LAS MINAS BAY",
                "country": "PANAMA"
            },
            {
                "code": "22575",
                "name": "BALBOA",
                "country": "PANAMA"
            },
            {
                "code": "22577",
                "name": "LA PALMA",
                "country": "PANAMA"
            },
            {
                "code": "22579",
                "name": "PANAMA CANAL PACIFIC",
                "country": "PANAMA"
            },
            {
                "code": "22581",
                "name": "AGUADULCE",
                "country": "PANAMA"
            },
            {
                "code": "22582",
                "name": "PEDREGAL",
                "country": "PANAMA"
            },
            {
                "code": "22587",
                "name": "CHARCO AZUL",
                "country": "PANAMA"
            },
            {
                "code": "22599",
                "name": "ALL OTHER PANAMA WEST COAST REGION PORTS",
                "country": "PANAMA"
            },
            {
                "code": "23201",
                "name": "HAMILTON",
                "country": "BERMUDA"
            },
            {
                "code": "23251",
                "name": "ST. GEORGES",
                "country": "BERMUDA"
            },
            {
                "code": "23299",
                "name": "ALL OTHER BERMUDA PORTS",
                "country": "BERMUDA"
            },
            {
                "code": "23600",
                "name": "ALL OTHER BAHAMAS PORTS",
                "country": "BAHAMAS"
            },
            {
                "code": "23619",
                "name": "ELEUTHERA ISLAND",
                "country": "BAHAMAS"
            },
            {
                "code": "23620",
                "name": "CAT CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23621",
                "name": "EXUMA",
                "country": "BAHAMAS"
            },
            {
                "code": "23622",
                "name": "SPANISH WELLS",
                "country": "BAHAMAS"
            },
            {
                "code": "23623",
                "name": "GOVERNOR'S HARBOUR",
                "country": "BAHAMAS"
            },
            {
                "code": "23624",
                "name": "HALF MOON CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23630",
                "name": "ARAWAK CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23635",
                "name": "CLARENCE TOWN",
                "country": "BAHAMAS"
            },
            {
                "code": "23636",
                "name": "RAGGED ISLAND",
                "country": "BAHAMAS"
            },
            {
                "code": "23640",
                "name": "GREEN TURTLE CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23641",
                "name": "CHUB CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23642",
                "name": "GREAT STIRRUP CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23643",
                "name": "GREAT HARBOUR CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23644",
                "name": "TREASURE CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23645",
                "name": "SOUTH RIDING POINT",
                "country": "BAHAMAS"
            },
            {
                "code": "23646",
                "name": "PORT LUCAYA",
                "country": "BAHAMAS"
            },
            {
                "code": "23647",
                "name": "WEST END",
                "country": "BAHAMAS"
            },
            {
                "code": "23650",
                "name": "RUM CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23653",
                "name": "GREAT INAGUA",
                "country": "BAHAMAS"
            },
            {
                "code": "23660",
                "name": "CAT ISLAND",
                "country": "BAHAMAS"
            },
            {
                "code": "23661",
                "name": "NASSAU",
                "country": "BAHAMAS"
            },
            {
                "code": "23665",
                "name": "OCEAN CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23667",
                "name": "WALKER CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23672",
                "name": "ANDROS ISLAND",
                "country": "BAHAMAS"
            },
            {
                "code": "23675",
                "name": "CLIFTON PIER",
                "country": "BAHAMAS"
            },
            {
                "code": "23683",
                "name": "BIMINI ISLAND",
                "country": "BAHAMAS"
            },
            {
                "code": "23684",
                "name": "CASTAWAY CAY",
                "country": "BAHAMAS"
            },
            {
                "code": "23900",
                "name": "ALL OTHER CUBA PORTS",
                "country": "CUBA"
            },
            {
                "code": "23931",
                "name": "DAIQUIRI BAY",
                "country": "CUBA"
            },
            {
                "code": "23937",
                "name": "ISABELA DEL SAGUA",
                "country": "CUBA"
            },
            {
                "code": "23941",
                "name": "DESEO",
                "country": "CUBA"
            },
            {
                "code": "23944",
                "name": "REGLA",
                "country": "CUBA"
            },
            {
                "code": "23961",
                "name": "LENGUA DE PAJARO",
                "country": "CUBA"
            },
            {
                "code": "23979",
                "name": "TANAMO",
                "country": "CUBA"
            },
            {
                "code": "23983",
                "name": "SANTA CRUZ DEL SUR",
                "country": "CUBA"
            },
            {
                "code": "24100",
                "name": "ALL OTHER JAMAICA PORTS",
                "country": "JAMAICA"
            },
            {
                "code": "24128",
                "name": "PORT BUSTAMANTE",
                "country": "JAMAICA"
            },
            {
                "code": "24145",
                "name": "MONTEGO BAY",
                "country": "JAMAICA"
            },
            {
                "code": "24155",
                "name": "OCHO RIOS",
                "country": "JAMAICA"
            },
            {
                "code": "24163",
                "name": "PORT ESQUIVEL",
                "country": "JAMAICA"
            },
            {
                "code": "24165",
                "name": "LITTLE PEDRO BLUFF",
                "country": "JAMAICA"
            },
            {
                "code": "24167",
                "name": "PORT RHOADES",
                "country": "JAMAICA"
            },
            {
                "code": "24175",
                "name": "ROCKY POINT",
                "country": "JAMAICA"
            },
            {
                "code": "24185",
                "name": "SAVANNA LA MAR",
                "country": "JAMAICA"
            },
            {
                "code": "24300",
                "name": "ALL OTHER CAICOS ISLANDS",
                "country": "Turks and Caicos IS"
            },
            {
                "code": "24310",
                "name": "COCKBURN HARBOR",
                "country": "Turks and Caicos IS"
            },
            {
                "code": "24311",
                "name": "PROVIDENCIALES",
                "country": "Turks and Caicos IS"
            },
            {
                "code": "24320",
                "name": "GRAND TURKS",
                "country": "Turks and Caicos IS"
            },
            {
                "code": "24399",
                "name": "ALL OTHER TURKS ISLANDS PORTS",
                "country": "Turks and Caicos IS"
            },
            {
                "code": "24400",
                "name": "ALL OTHER CAYMAN ISLAND PORTS",
                "country": "CAYMAN ISL"
            },
            {
                "code": "24410",
                "name": "GRAND CAYMAN",
                "country": "CAYMAN ISL"
            },
            {
                "code": "24415",
                "name": "CAYMAN BRAC",
                "country": "CAYMAN ISL"
            },
            {
                "code": "24500",
                "name": "ALL OTHER HAITI PORTS",
                "country": "HAITI"
            },
            {
                "code": "24509",
                "name": "AUX CAYES",
                "country": "HAITI"
            },
            {
                "code": "24513",
                "name": "CAP HAITIEN",
                "country": "HAITI"
            },
            {
                "code": "24514",
                "name": "FORT LIBERTE",
                "country": "HAITI"
            },
            {
                "code": "24515",
                "name": "LABADEE",
                "country": "HAITI"
            },
            {
                "code": "24537",
                "name": "JACMEL",
                "country": "HAITI"
            },
            {
                "code": "24553",
                "name": "LAFITEAU",
                "country": "HAITI"
            },
            {
                "code": "24559",
                "name": "MIRAGOANE",
                "country": "HAITI"
            },
            {
                "code": "24571",
                "name": "PETIT GOAVE",
                "country": "HAITI"
            },
            {
                "code": "24579",
                "name": "PORT AU PRINCE",
                "country": "HAITI"
            },
            {
                "code": "24585",
                "name": "PORT DE PAIX",
                "country": "HAITI"
            },
            {
                "code": "24588",
                "name": "GONAIVES",
                "country": "HAITI"
            },
            {
                "code": "24591",
                "name": "ST. MARC",
                "country": "HAITI"
            },
            {
                "code": "24700",
                "name": "ALL OTHER DOMINICAN REPUBLIC PORTS",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24713",
                "name": "BARAHONA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24720",
                "name": "SAMANA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24721",
                "name": "BOCA CHICA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24722",
                "name": "CAUCEDO",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24727",
                "name": "CABO ROJO",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24731",
                "name": "LAS CALDERAS",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24737",
                "name": "SANTO DOMINGO",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24738",
                "name": "PUNTA TORRECILLA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24741",
                "name": "RIO JAINA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24743",
                "name": "LA ROMANA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24745",
                "name": "MANZANILLO",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24773",
                "name": "PUERTO PLATA",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24774",
                "name": "LUPERON",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24791",
                "name": "SAN PEDRO DE MACORIS",
                "country": "DOMINICAN REPUBLIC"
            },
            {
                "code": "24800",
                "name": "ALL OTHER LEEWARD ISLANDS",
                "country": "UNKNOWN"
            },
            {
                "code": "24813",
                "name": "VIRGIN GORDA",
                "country": "BRITISH VIRGIN"
            },
            {
                "code": "24815",
                "name": "PORT PURCELL",
                "country": "BRITISH VIRGIN"
            },
            {
                "code": "24821",
                "name": "ANGUILLA",
                "country": "ANGUILLA"
            },
            {
                "code": "24823",
                "name": "SOMBRERO ISLAND",
                "country": "ANGUILLA"
            },
            {
                "code": "24831",
                "name": "ST. JOHN'S",
                "country": "ANGUILLA"
            },
            {
                "code": "24835",
                "name": "BASSETERRE",
                "country": "ST. KITTS NEVIS"
            },
            {
                "code": "24837",
                "name": "CHARLESTOWN",
                "country": "ST. KITTS NEVIS"
            },
            {
                "code": "24845",
                "name": "PLYMOUTH",
                "country": "MONTSERRAT"
            },
            {
                "code": "24851",
                "name": "ROUSEAU",
                "country": "DOMINICA"
            },
            {
                "code": "24852",
                "name": "PORTSMOUTH",
                "country": "DOMINICA"
            },
            {
                "code": "24853",
                "name": "WOODBRIDGE BAY",
                "country": "DOMINICA"
            },
            {
                "code": "24865",
                "name": "CASTRIES",
                "country": "ST. LUCIA"
            },
            {
                "code": "24866",
                "name": "CUL DE SAC",
                "country": "ST. LUCIA"
            },
            {
                "code": "24867",
                "name": "VIEUX FORT",
                "country": "ST. LUCIA"
            },
            {
                "code": "24871",
                "name": "KINGSTOWN",
                "country": "ST. VINCENT"
            },
            {
                "code": "24881",
                "name": "ST. GEORGE",
                "country": "GRENADA"
            },
            {
                "code": "24899",
                "name": "ALL OTHER WINDWARD ISLAND PORTS",
                "country": "UNKNOWN"
            },
            {
                "code": "27201",
                "name": "BRIDGETOWN",
                "country": "BARBADOS"
            },
            {
                "code": "27210",
                "name": "OISTINO",
                "country": " BARBADOS"
            },
            {
                "code": "27213",
                "name": "SPEIGHTSTOWN",
                "country": "BARBADOS"
            },
            {
                "code": "27400",
                "name": "ALL OTHER TRINIDAD PORTS",
                "country": "TRINIDAD"
            },
            {
                "code": "27410",
                "name": "GALEOTA POINT",
                "country": "TRINIDAD"
            },
            {
                "code": "27415",
                "name": "POINT A PIERRE",
                "country": "TRINIDAD"
            },
            {
                "code": "27420",
                "name": "POINT FORTIN",
                "country": "TRINIDAD"
            },
            {
                "code": "27425",
                "name": "POINT LISAS",
                "country": "TRINIDAD"
            },
            {
                "code": "27431",
                "name": "PORT OF SPAIN",
                "country": "TRINIDAD"
            },
            {
                "code": "27443",
                "name": "SAN FERNANDO",
                "country": "TRINIDAD"
            },
            {
                "code": "27446",
                "name": "TEMBLADORA",
                "country": "TRINIDAD"
            },
            {
                "code": "27451",
                "name": "SCARBOROUGH",
                "country": "TRINIDAD"
            },
            {
                "code": "27700",
                "name": "ALL OTHER NETHERLANDS ANTILLES PORTS",
                "country": "NETHERLANDS"
            },
            {
                "code": "27701",
                "name": "ORANJESTAD",
                "country": "ARUBA"
            },
            {
                "code": "27702",
                "name": "ST. NICOLAAS",
                "country": "ARUBA"
            },
            {
                "code": "27703",
                "name": "BARCADERA",
                "country": "ARUBA"
            },
            {
                "code": "27705",
                "name": "FORT BAY",
                "country": "ARUBA"
            },
            {
                "code": "27715",
                "name": "KRALENDIJK",
                "country": "NETH ANTILLES"
            },
            {
                "code": "27725",
                "name": "ST. MICHIEL'S BAY",
                "country": "NETH ANTILLES"
            },
            {
                "code": "27726",
                "name": "PHILIPSBOROUGH",
                "country": "NETH ANTILLES"
            },
            {
                "code": "27727",
                "name": "ST. MARTIN",
                "country": "NETH ANTILLES"
            },
            {
                "code": "27730",
                "name": "SINT EUSTATIUS",
                "country": "NETH ANTILLES"
            },
            {
                "code": "28300",
                "name": "ALL OTHER GUADELOUPE PORTS",
                "country": "GUADELOUPE"
            },
            {
                "code": "28313",
                "name": "POINTE A PITRE",
                "country": "GUADELOUPE"
            },
            {
                "code": "28315",
                "name": "BASSE TERRE",
                "country": "GUADELOUPE"
            },
            {
                "code": "28319",
                "name": "GUSTAVIA",
                "country": "GUADELOUPE"
            },
            {
                "code": "28320",
                "name": "MARIGOT",
                "country": "GUADELOUPE"
            },
            {
                "code": "28351",
                "name": "FORT DE FRANCE",
                "country": "MARTINIQUE"
            },
            {
                "code": "28399",
                "name": "ALL OTHER MARTINIQUE PORTS",
                "country": "MARTINIQUE"
            },
            {
                "code": "30100",
                "name": "ALL OTHER COLOMBIAN CARIBBEAN REGION PORTS",
                "country": "COLOMBIA"
            },
            {
                "code": "30104",
                "name": "BARRANQUILLA",
                "country": "COLOMBIA"
            },
            {
                "code": "30107",
                "name": "CARTAGENA",
                "country": "COLOMBIA"
            },
            {
                "code": "30110",
                "name": "COVENAS",
                "country": "COLOMBIA"
            },
            {
                "code": "30121",
                "name": "PUERTO BOLIVAR",
                "country": "COLOMBIA"
            },
            {
                "code": "30125",
                "name": "MAMONAL",
                "country": "COLOMBIA"
            },
            {
                "code": "30130",
                "name": "SAN ANDRES",
                "country": "COLOMBIA"
            },
            {
                "code": "30131",
                "name": "PUERTO COLOMBIA",
                "country": "COLOMBIA"
            },
            {
                "code": "30140",
                "name": "SANTA MARTA",
                "country": "COLOMBIA"
            },
            {
                "code": "30145",
                "name": "TURBO",
                "country": "COLOMBIA"
            },
            {
                "code": "30151",
                "name": "BUENAVENTURA",
                "country": "COLOMBIA"
            },
            {
                "code": "30152",
                "name": "TUMACO",
                "country": "COLOMBIA"
            },
            {
                "code": "30198",
                "name": "ALL COLOMBIA AMAZON REGION PORTS",
                "country": "COLOMBIA"
            },
            {
                "code": "30199",
                "name": "ALL OTHER COLOMBIA WEST COAST REGION PORTS",
                "country": "COLOMBIA"
            },
            {
                "code": "30700",
                "name": "ALL OTHER VENEZUELA PORTS",
                "country": "VENEZUELA"
            },
            {
                "code": "30704",
                "name": "BAHIA DE AMUAY",
                "country": "VENEZUELA"
            },
            {
                "code": "30708",
                "name": "BAJO GRANDE",
                "country": "VENEZUELA"
            },
            {
                "code": "30721",
                "name": "CARUPANO",
                "country": "VENEZUELA"
            },
            {
                "code": "30725",
                "name": "CIUDAD BOLIVAR",
                "country": "VENEZUELA"
            },
            {
                "code": "30735",
                "name": "EL CHAURE",
                "country": "VENEZUELA"
            },
            {
                "code": "30737",
                "name": "EL PALITO",
                "country": "VENEZUELA"
            },
            {
                "code": "30739",
                "name": "EL TABLAZO",
                "country": "VENEZUELA"
            },
            {
                "code": "30741",
                "name": "BAHIA GUANTA",
                "country": "VENEZUELA"
            },
            {
                "code": "30742",
                "name": "GUARANAO",
                "country": "VENEZUELA"
            },
            {
                "code": "30743",
                "name": "JOSE",
                "country": "VENEZUELA"
            },
            {
                "code": "30745",
                "name": "LA GUAIRA",
                "country": "VENEZUELA"
            },
            {
                "code": "30753",
                "name": "LA SALINA",
                "country": "VENEZUELA"
            },
            {
                "code": "30755",
                "name": "LAS PIEDRAS",
                "country": "VENEZUELA"
            },
            {
                "code": "30758",
                "name": "MORON",
                "country": "VENEZUELA"
            },
            {
                "code": "30759",
                "name": "MARACAIBO",
                "country": "VENEZUELA"
            },
            {
                "code": "30760",
                "name": "MATANZAS",
                "country": "VENEZUELA"
            },
            {
                "code": "30761",
                "name": "PALUA",
                "country": "VENEZUELA"
            },
            {
                "code": "30763",
                "name": "PUERTO MIRANDA",
                "country": "VENEZUELA"
            },
            {
                "code": "30764",
                "name": "PUERTO CABELLO",
                "country": "VENEZUELA"
            },
            {
                "code": "30765",
                "name": "CORO",
                "country": "VENEZUELA"
            },
            {
                "code": "30766",
                "name": "CUMAREBO",
                "country": "VENEZUELA"
            },
            {
                "code": "30767",
                "name": "PUNTA CUCHILLO",
                "country": "VENEZUELA"
            },
            {
                "code": "30768",
                "name": "PUERTO ORDAZ",
                "country": "VENEZUELA"
            },
            {
                "code": "30769",
                "name": "CUMANA",
                "country": "VENEZUELA"
            },
            {
                "code": "30770",
                "name": "PUNTA CARDON",
                "country": "VENEZUELA"
            },
            {
                "code": "30771",
                "name": "PUERTO LA CRUZ",
                "country": "VENEZUELA"
            },
            {
                "code": "30772",
                "name": "CARIPITO",
                "country": "VENEZUELA"
            },
            {
                "code": "30773",
                "name": "PUNTA PALMAS",
                "country": "VENEZUELA"
            },
            {
                "code": "30774",
                "name": "EL GUAMACHE",
                "country": "VENEZUELA"
            },
            {
                "code": "30775",
                "name": "PERTIGALETE",
                "country": "VENEZUELA"
            },
            {
                "code": "30780",
                "name": "SAN FELIX",
                "country": "VENEZUELA"
            },
            {
                "code": "31200",
                "name": "ALL OTHER GUYANA PORTS",
                "country": "GUYANA"
            },
            {
                "code": "31201",
                "name": "GEORGETOWN",
                "country": "GUYANA"
            },
            {
                "code": "31202",
                "name": "NEW AMSTERDAM",
                "country": "GUYANA"
            },
            {
                "code": "31215",
                "name": "LINDEN",
                "country": "GUYANA"
            },
            {
                "code": "31230",
                "name": "BARAMA",
                "country": "GUYANA"
            },
            {
                "code": "31235",
                "name": "MCKENZIE",
                "country": "GUYANA"
            },
            {
                "code": "31268",
                "name": "EVERTON",
                "country": "GUYANA"
            },
            {
                "code": "31500",
                "name": "ALL OTHER SURINAME PORTS",
                "country": "SURINAME"
            },
            {
                "code": "31501",
                "name": "MOENGO",
                "country": "SURINAME"
            },
            {
                "code": "31523",
                "name": "PARAMARIBO",
                "country": "SURINAME"
            },
            {
                "code": "31524",
                "name": "PARANAM",
                "country": "SURINAME"
            },
            {
                "code": "31700",
                "name": "ALL OTHER FRENCH GUIANA PORTS",
                "country": "FRENCH GUIANA"
            },
            {
                "code": "31707",
                "name": "DEGRAD DES CANNES",
                "country": "FRENCH GUIANA"
            },
            {
                "code": "33100",
                "name": "ALL OTHER ECUADOR PORTS",
                "country": "ECUADOR"
            },
            {
                "code": "33101",
                "name": "BAHIA DE CARAQUEZ",
                "country": "ECUADOR"
            },
            {
                "code": "33109",
                "name": "BALAO",
                "country": "ECUADOR"
            },
            {
                "code": "33115",
                "name": "SALINAS",
                "country": "ECUADOR"
            },
            {
                "code": "33121",
                "name": "ESMERALDAS",
                "country": "ECUADOR"
            },
            {
                "code": "33131",
                "name": "GUAYAQUIL",
                "country": "ECUADOR"
            },
            {
                "code": "33132",
                "name": "PUERTO NUEVO",
                "country": "ECUADOR"
            },
            {
                "code": "33136",
                "name": "LA LIBERTAD",
                "country": "ECUADOR"
            },
            {
                "code": "33151",
                "name": "MANTA",
                "country": "ECUADOR"
            },
            {
                "code": "33159",
                "name": "PUERTO BOLIVAR",
                "country": "ECUADOR"
            },
            {
                "code": "33300",
                "name": "ALL OTHER PERU PORTS",
                "country": "PERU"
            },
            {
                "code": "33301",
                "name": "ANCON",
                "country": "PERU"
            },
            {
                "code": "33303",
                "name": "CALLAO",
                "country": "PERU"
            },
            {
                "code": "33305",
                "name": "CONCHAN",
                "country": "PERU"
            },
            {
                "code": "33335",
                "name": "ILO",
                "country": "PERU"
            },
            {
                "code": "33337",
                "name": "IQUITOS",
                "country": "PERU"
            },
            {
                "code": "33340",
                "name": "LA PAMPILLA",
                "country": "PERU"
            },
            {
                "code": "33354",
                "name": "MATARANI",
                "country": "PERU"
            },
            {
                "code": "33355",
                "name": "MOLLENDO",
                "country": "PERU"
            },
            {
                "code": "33363",
                "name": "PAITA",
                "country": "PERU"
            },
            {
                "code": "33371",
                "name": "PIMENTEL",
                "country": "PERU"
            },
            {
                "code": "33373",
                "name": "PISCO",
                "country": "PERU"
            },
            {
                "code": "33377",
                "name": "SALAVERRY",
                "country": "PERU"
            },
            {
                "code": "33380",
                "name": "SAN NICOLAS",
                "country": "PERU"
            },
            {
                "code": "33385",
                "name": "SUPE",
                "country": "PERU"
            },
            {
                "code": "33389",
                "name": "TALARA",
                "country": "PERU"
            },
            {
                "code": "33700",
                "name": "ALL OTHER CHILE PORTS",
                "country": "CHILE"
            },
            {
                "code": "33703",
                "name": "ANTOFAGASTA",
                "country": "CHILE"
            },
            {
                "code": "33706",
                "name": "ARICA",
                "country": "CHILE"
            },
            {
                "code": "33708",
                "name": "CALDERA",
                "country": "CHILE"
            },
            {
                "code": "33716",
                "name": "CALETA BARQUITO",
                "country": "CHILE"
            },
            {
                "code": "33721",
                "name": "COQUIMBO",
                "country": "CHILE"
            },
            {
                "code": "33735",
                "name": "GUAYACAN",
                "country": "CHILE"
            },
            {
                "code": "33739",
                "name": "HUASCO",
                "country": "CHILE"
            },
            {
                "code": "33741",
                "name": "IQUIQUE",
                "country": "CHILE"
            },
            {
                "code": "33751",
                "name": "LIRQUEN",
                "country": "CHILE"
            },
            {
                "code": "33765",
                "name": "CALETA PATILLOS",
                "country": "CHILE"
            },
            {
                "code": "33770",
                "name": "PUNTA ARENAS",
                "country": "CHILE"
            },
            {
                "code": "33775",
                "name": "QUINTERO",
                "country": "CHILE"
            },
            {
                "code": "33776",
                "name": "SANTIAGO",
                "country": "CHILE"
            },
            {
                "code": "33779",
                "name": "SAN ANTONIO",
                "country": "CHILE"
            },
            {
                "code": "33780",
                "name": "SAN VICENTE",
                "country": "CHILE"
            },
            {
                "code": "33781",
                "name": "TALCAHUANO",
                "country": "CHILE"
            },
            {
                "code": "33782",
                "name": "PENCO",
                "country": "CHILE"
            },
            {
                "code": "33788",
                "name": "TOCOPILLA",
                "country": "CHILE"
            },
            {
                "code": "33797",
                "name": "LAS SALINAS",
                "country": "CHILE"
            },
            {
                "code": "35107",
                "name": "ANGRA DOS REIS",
                "country": "BRAZIL"
            },
            {
                "code": "35113",
                "name": "MADRE DE DEUS",
                "country": "BRAZIL"
            },
            {
                "code": "35115",
                "name": "ARATU",
                "country": "BRAZIL"
            },
            {
                "code": "35120",
                "name": "PECEM",
                "country": "BRAZIL"
            },
            {
                "code": "35121",
                "name": "BARCARENA",
                "country": "BRAZIL"
            },
            {
                "code": "35123",
                "name": "BREVES",
                "country": "BRAZIL"
            },
            {
                "code": "35127",
                "name": "CABEDELO",
                "country": "BRAZIL"
            },
            {
                "code": "35133",
                "name": "CEARA",
                "country": "BRAZIL"
            },
            {
                "code": "35135",
                "name": "ITAQUI",
                "country": "BRAZIL"
            },
            {
                "code": "35136",
                "name": "NAVEGANTES",
                "country": "BRAZIL"
            },
            {
                "code": "35137",
                "name": "ILHEUS",
                "country": "BRAZIL"
            },
            {
                "code": "35138",
                "name": "ITAJAY",
                "country": "BRAZIL"
            },
            {
                "code": "35139",
                "name": "ITACOATIARA",
                "country": "BRAZIL"
            },
            {
                "code": "35141",
                "name": "MACEIO",
                "country": "BRAZIL"
            },
            {
                "code": "35144",
                "name": "MANAUS",
                "country": "BRAZIL"
            },
            {
                "code": "35157",
                "name": "NATAL",
                "country": "BRAZIL"
            },
            {
                "code": "35158",
                "name": "OBIDOS",
                "country": "BRAZIL"
            },
            {
                "code": "35159",
                "name": "ANTONINA",
                "country": "BRAZIL"
            },
            {
                "code": "35160",
                "name": "PRAIA MOLE",
                "country": "BRAZIL"
            },
            {
                "code": "35161",
                "name": "TRAMANDAI",
                "country": "BRAZIL"
            },
            {
                "code": "35163",
                "name": "PARNAHYBA",
                "country": "BRAZIL"
            },
            {
                "code": "35164",
                "name": "MUNGUBA",
                "country": "BRAZIL"
            },
            {
                "code": "35165",
                "name": "SANTANA",
                "country": "BRAZIL"
            },
            {
                "code": "35166",
                "name": "PONTA DO UBU",
                "country": "BRAZIL"
            },
            {
                "code": "35167",
                "name": "SANTA CLARA",
                "country": "BRAZIL"
            },
            {
                "code": "35168",
                "name": "PONTA DA MADEIRA",
                "country": "BRAZIL"
            },
            {
                "code": "35169",
                "name": "PERNAMBUCO",
                "country": "BRAZIL"
            },
            {
                "code": "35170",
                "name": "SUAPE",
                "country": "BRAZIL"
            },
            {
                "code": "35171",
                "name": "RIO DE JANEIRO",
                "country": "BRAZIL"
            },
            {
                "code": "35173",
                "name": "RIO GRANDE",
                "country": "BRAZIL"
            },
            {
                "code": "35175",
                "name": "SAO SEBASTIO",
                "country": "BRAZIL"
            },
            {
                "code": "35176",
                "name": "TROMBETAS",
                "country": "BRAZIL"
            },
            {
                "code": "35177",
                "name": "SANTOS",
                "country": "BRAZIL"
            },
            {
                "code": "35178",
                "name": "IMBITUBA",
                "country": "BRAZIL"
            },
            {
                "code": "35179",
                "name": "SAO FRANCISCO DO SUL",
                "country": "BRAZIL"
            },
            {
                "code": "35180",
                "name": "PORT ITAPOA",
                "country": "BRAZIL"
            },
            {
                "code": "35181",
                "name": "SALVADOR",
                "country": "BRAZIL"
            },
            {
                "code": "35185",
                "name": "ITAGUAI",
                "country": "BRAZIL"
            },
            {
                "code": "35195",
                "name": "VITORIA",
                "country": "BRAZIL"
            },
            {
                "code": "35198",
                "name": "ALL OTHER BRAZIL PORTS NORTH OF RECIFE",
                "country": "BRAZIL"
            },
            {
                "code": "35199",
                "name": "ALL OTHER BRAZIL PORTS SOUTH OF RECIFE",
                "country": "BRAZIL"
            },
            {
                "code": "35300",
                "name": "ALL OTHER PARAGUAY PORTS",
                "country": "PARAGUAY"
            },
            {
                "code": "35301",
                "name": "ASUNCION",
                "country": "PARAGUAY"
            },
            {
                "code": "35500",
                "name": "ALL OTHER URUGUAY PORTS",
                "country": "URUGUAY"
            },
            {
                "code": "35525",
                "name": "MONTEVIDEO",
                "country": "URUGUAY"
            },
            {
                "code": "35535",
                "name": "NUEVA PALMIRA",
                "country": "URUGUAY"
            },
            {
                "code": "35537",
                "name": "PUNTA DEL ESTE",
                "country": "URUGUAY"
            },
            {
                "code": "35700",
                "name": "ALL OTHER ARGENTINA PORTS",
                "country": "ARGENTINA"
            },
            {
                "code": "35701",
                "name": "BAHIA BLANCA",
                "country": "ARGENTINA"
            },
            {
                "code": "35702",
                "name": "RIVADAVIA",
                "country": "ARGENTINA"
            },
            {
                "code": "35703",
                "name": "CALETA CORDOVA",
                "country": "ARGENTINA"
            },
            {
                "code": "35705",
                "name": "BUENOS AIRES",
                "country": "ARGENTINA"
            },
            {
                "code": "35710",
                "name": "BAGUAL",
                "country": "ARGENTINA"
            },
            {
                "code": "35711",
                "name": "CAMPANA",
                "country": "ARGENTINA"
            },
            {
                "code": "35737",
                "name": "LA PLATA",
                "country": "ARGENTINA"
            },
            {
                "code": "35739",
                "name": "MAR DEL PLATA",
                "country": "ARGENTINA"
            },
            {
                "code": "35740",
                "name": "PUERTO MADRYN",
                "country": "ARGENTINA"
            },
            {
                "code": "35741",
                "name": "NECOCHEA",
                "country": "ARGENTINA"
            },
            {
                "code": "35745",
                "name": "PUERTO DESEADO",
                "country": "ARGENTINA"
            },
            {
                "code": "35771",
                "name": "ROSARIO",
                "country": "ARGENTINA"
            },
            {
                "code": "35779",
                "name": "PUERTO BORGHIO",
                "country": "ARGENTINA"
            },
            {
                "code": "35781",
                "name": "SAN NICOLAS",
                "country": "ARGENTINA"
            },
            {
                "code": "35785",
                "name": "SAN PEDRO",
                "country": "ARGENTINA"
            },
            {
                "code": "35791",
                "name": "SANTA FE",
                "country": "ARGENTINA"
            },
            {
                "code": "35795",
                "name": "VILLA CONSTITUCION",
                "country": "ARGENTINA"
            },
            {
                "code": "35796",
                "name": "ZARATE",
                "country": "ARGENTINA"
            },
            {
                "code": "37200",
                "name": "ALL FALKLAND ISLANDS PORTS",
                "country": "FALKLAND ISLANDS"
            },
            {
                "code": "40000",
                "name": "ALL OTHER ICELAND PORTS",
                "country": "ICELAND"
            },
            {
                "code": "40001",
                "name": "HAFNARFJORDHUR",
                "country": "ICELAND"
            },
            {
                "code": "40002",
                "name": "GRUNDARFJORDUR",
                "country": "ICELAND"
            },
            {
                "code": "40010",
                "name": "NJARDVIK",
                "country": "ICELAND"
            },
            {
                "code": "40036",
                "name": "NESKAUPSTADUR",
                "country": "ICELAND"
            },
            {
                "code": "40037",
                "name": "REYKJAVIK",
                "country": "ICELAND"
            },
            {
                "code": "40038",
                "name": "AKRANES",
                "country": "ICELAND"
            },
            {
                "code": "40039",
                "name": "AKUREYRI",
                "country": "ICELAND"
            },
            {
                "code": "40040",
                "name": "VESTMANNAEYJAR",
                "country": "ICELAND"
            },
            {
                "code": "40100",
                "name": "ALL OTHER SWEDEN PORTS",
                "country": "SWEDEN "
            },
            {
                "code": "40115",
                "name": "GADDVIK",
                "country": "SWEDEN"
            },
            {
                "code": "40116",
                "name": "GAVLE",
                "country": "SWEDEN"
            },
            {
                "code": "40117",
                "name": "GOTHENBURG",
                "country": "SWEDEN"
            },
            {
                "code": "40118",
                "name": "HALLSTAVIK",
                "country": "SWEDEN"
            },
            {
                "code": "40119",
                "name": "HALMSTAD",
                "country": "SWEDEN"
            },
            {
                "code": "40120",
                "name": "HALSINGBORG",
                "country": "SWEDEN"
            },
            {
                "code": "40121",
                "name": "FALKENBERG",
                "country": "SWEDEN"
            },
            {
                "code": "40122",
                "name": "AHUS",
                "country": "SWEDEN"
            },
            {
                "code": "40123",
                "name": "HOGANAS",
                "country": "SWEDEN"
            },
            {
                "code": "40124",
                "name": "SKELLEFTEHAMN",
                "country": "SWEDEN"
            },
            {
                "code": "40125",
                "name": "UMEA",
                "country": "SWEDEN"
            },
            {
                "code": "40127",
                "name": "HOLMSUND",
                "country": "SWEDEN"
            },
            {
                "code": "40129",
                "name": "IGGESUND",
                "country": "SWEDEN"
            },
            {
                "code": "40132",
                "name": "KARLSBORG",
                "country": "SWEDEN"
            },
            {
                "code": "40133",
                "name": "KARLSHAMN",
                "country": "SWEDEN"
            },
            {
                "code": "40142",
                "name": "LULEA",
                "country": "SWEDEN"
            },
            {
                "code": "40143",
                "name": "MALMO",
                "country": "SWEDEN"
            },
            {
                "code": "40148",
                "name": "NORRKOPING",
                "country": "SWEDEN"
            },
            {
                "code": "40149",
                "name": "NORRSUNDET",
                "country": "SWEDEN"
            },
            {
                "code": "40150",
                "name": "LANDSKRONA",
                "country": " SWEDEN"
            },
            {
                "code": "40153",
                "name": "OBBOLA",
                "country": "SWEDEN"
            },
            {
                "code": "40155",
                "name": "ORNSKOLDSVIK",
                "country": "SWEDEN"
            },
            {
                "code": "40157",
                "name": "OSKARSHAMN",
                "country": "SWEDEN"
            },
            {
                "code": "40159",
                "name": "OXELOSUND",
                "country": "SWEDEN"
            },
            {
                "code": "40161",
                "name": "RONNSKER",
                "country": "SWEDEN"
            },
            {
                "code": "40166",
                "name": "SANDARNE",
                "country": "SWEDEN"
            },
            {
                "code": "40174",
                "name": "SODERHAMN",
                "country": "SWEDEN"
            },
            {
                "code": "40176",
                "name": "STENUNGSUND",
                "country": "SWEDEN"
            },
            {
                "code": "40179",
                "name": "STOCKHOLM",
                "country": "SWEDEN"
            },
            {
                "code": "40180",
                "name": "STOCKVIK",
                "country": "SWEDEN"
            },
            {
                "code": "40182",
                "name": "SUNDSVALL",
                "country": "SWEDEN"
            },
            {
                "code": "40185",
                "name": "TRELLEBORG",
                "country": "SWEDEN"
            },
            {
                "code": "40188",
                "name": "UDDEVALLA",
                "country": "SWEDEN"
            },
            {
                "code": "40191",
                "name": "UTANSJO",
                "country": "SWEDEN"
            },
            {
                "code": "40192",
                "name": "VASTERAS",
                "country": "SWEDEN"
            },
            {
                "code": "40194",
                "name": "VASTERVIK",
                "country": "SWEDEN"
            },
            {
                "code": "40196",
                "name": "VALLVIK",
                "country": "SWEDEN"
            },
            {
                "code": "40197",
                "name": "WALLHAMN",
                "country": "SWEDEN"
            },
            {
                "code": "40300",
                "name": "ALL OTHER NORWAY PORTS",
                "country": "NORWAY"
            },
            {
                "code": "40301",
                "name": "AALESUND",
                "country": "NORWAY"
            },
            {
                "code": "40302",
                "name": "AARDALSTANGEN",
                "country": "NORWAY"
            },
            {
                "code": "40311",
                "name": "BERGEN",
                "country": "NORWAY"
            },
            {
                "code": "40313",
                "name": "BREVIK",
                "country": "NORWAY"
            },
            {
                "code": "40320",
                "name": "HOLLA",
                "country": "NORWAY"
            },
            {
                "code": "40321",
                "name": "DRAMMEN",
                "country": "NORWAY"
            },
            {
                "code": "40325",
                "name": "EGERSUND",
                "country": "NORWAY"
            },
            {
                "code": "40327",
                "name": "EYDEHAMN",
                "country": "NORWAY"
            },
            {
                "code": "40329",
                "name": "FARSUND",
                "country": "NORWAY"
            },
            {
                "code": "40334",
                "name": "FREDRIKSTAD",
                "country": "NORWAY"
            },
            {
                "code": "40335",
                "name": "LARVIK",
                "country": "NORWAY"
            },
            {
                "code": "40336",
                "name": "HAMMERFEST",
                "country": "NORWAY"
            },
            {
                "code": "40337",
                "name": "NARVIK",
                "country": "NORWAY"
            },
            {
                "code": "40338",
                "name": "TROMSO",
                "country": "NORWAY"
            },
            {
                "code": "40340",
                "name": "FLORO",
                "country": "NORWAY"
            },
            {
                "code": "40342",
                "name": "HALDEN",
                "country": "NORWAY"
            },
            {
                "code": "40345",
                "name": "HAUGESUND",
                "country": "NORWAY"
            },
            {
                "code": "40348",
                "name": "HEROEN",
                "country": "NORWAY"
            },
            {
                "code": "40363",
                "name": "KRISTIANSAND N",
                "country": "NORWAY"
            },
            {
                "code": "40364",
                "name": "KRISTIANSAND S",
                "country": "NORWAY"
            },
            {
                "code": "40369",
                "name": "BODO",
                "country": "NORWAY"
            },
            {
                "code": "40370",
                "name": "MO I RANA",
                "country": "NORWAY"
            },
            {
                "code": "40371",
                "name": "MOSS",
                "country": "NORWAY"
            },
            {
                "code": "40372",
                "name": "MAALOY",
                "country": "NORWAY"
            },
            {
                "code": "40373",
                "name": "MONGSTAD",
                "country": "NORWAY"
            },
            {
                "code": "40377",
                "name": "LYSAKER",
                "country": "NORWAY"
            },
            {
                "code": "40378",
                "name": "PORSGRUNN",
                "country": "NORWAY"
            },
            {
                "code": "40379",
                "name": "REKEFJORD",
                "country": "NORWAY"
            },
            {
                "code": "40380",
                "name": "SALTEN",
                "country": "NORWAY"
            },
            {
                "code": "40381",
                "name": "SANDNES",
                "country": "NORWAY"
            },
            {
                "code": "40383",
                "name": "SAUDA",
                "country": "NORWAY"
            },
            {
                "code": "40385",
                "name": "SKIEN",
                "country": "NORWAY"
            },
            {
                "code": "40387",
                "name": "STAVANGER",
                "country": "NORWAY"
            },
            {
                "code": "40390",
                "name": "SUNNDALSORA",
                "country": "NORWAY"
            },
            {
                "code": "40392",
                "name": "SVELGEN",
                "country": "NORWAY"
            },
            {
                "code": "40397",
                "name": "TRONDHEIM",
                "country": "NORWAY"
            },
            {
                "code": "40398",
                "name": "SVALBARD",
                "country": "SV JM ISLANDS"
            },
            {
                "code": "40500",
                "name": "ALL OTHER FINLAND PORTS",
                "country": " FINLAND"
            },
            {
                "code": "40504",
                "name": "LAPPOHJA",
                "country": " FINLAND"
            },
            {
                "code": "40520",
                "name": "HAMINA",
                "country": " FINLAND"
            },
            {
                "code": "40523",
                "name": "HANGO",
                "country": " FINLAND"
            },
            {
                "code": "40525",
                "name": "HELSINGFORS",
                "country": " FINLAND"
            },
            {
                "code": "40527",
                "name": "INGA",
                "country": " FINLAND"
            },
            {
                "code": "40531",
                "name": "OULU",
                "country": " FINLAND"
            },
            {
                "code": "40532",
                "name": "KOVERHAR",
                "country": " FINLAND"
            },
            {
                "code": "40533",
                "name": "LOVIISA",
                "country": " FINLAND"
            },
            {
                "code": "40534",
                "name": "SKOLDVIK",
                "country": " FINLAND"
            },
            {
                "code": "40535",
                "name": "RAAHE",
                "country": "FINLAND"
            },
            {
                "code": "40536",
                "name": "SAIMAA CANAL",
                "country": "FINLAND"
            },
            {
                "code": "40537",
                "name": "NYSTAD",
                "country": " FINLAND"
            },
            {
                "code": "40538",
                "name": "VAASA",
                "country": "FINLAND"
            },
            {
                "code": "40543",
                "name": "KEMI",
                "country": "FINLAND"
            },
            {
                "code": "40549",
                "name": "KOTKA",
                "country": "FINLAND"
            },
            {
                "code": "40551",
                "name": "MANTYLUOTO",
                "country": "FINLAND"
            },
            {
                "code": "40552",
                "name": "NAANTALI",
                "country": "FINLAND"
            },
            {
                "code": "40562",
                "name": "PORI",
                "country": " FINLAND"
            },
            {
                "code": "40571",
                "name": "RAUMA",
                "country": "FINLAND"
            },
            {
                "code": "40587",
                "name": "ABO",
                "country": " FINLAND"
            },
            {
                "code": "40591",
                "name": "YKSPIHLAJA",
                "country": " FINLAND"
            },
            {
                "code": "40900",
                "name": "ALL OTHER DENMARK PORTS",
                "country": "DENMARK"
            },
            {
                "code": "40901",
                "name": "AABENRAA",
                "country": "DENMARK"
            },
            {
                "code": "40903",
                "name": "AALBORG",
                "country": "DENMARK"
            },
            {
                "code": "40906",
                "name": "AARHUS",
                "country": "DENMARK"
            },
            {
                "code": "40908",
                "name": "ENSTEADVAERKET",
                "country": "DENMARK"
            },
            {
                "code": "40909",
                "name": "FREDERIKSHAVN",
                "country": "DENMARK"
            },
            {
                "code": "40910",
                "name": "GULFHAVN",
                "country": "DENMARK"
            },
            {
                "code": "40911",
                "name": "HADERSLEV",
                "country": "DENMARK"
            },
            {
                "code": "40912",
                "name": "HOBRO",
                "country": "DENMARK"
            },
            {
                "code": "40913",
                "name": "HOLBAEK",
                "country": "DENMARK"
            },
            {
                "code": "40914",
                "name": "HORSENS",
                "country": "DENMARK"
            },
            {
                "code": "40915",
                "name": "KOGE",
                "country": "DENMARK"
            },
            {
                "code": "40916",
                "name": "KOLDING",
                "country": "DENMARK"
            },
            {
                "code": "40917",
                "name": "KORSOR",
                "country": "DENMARK"
            },
            {
                "code": "40918",
                "name": "KYNDBY",
                "country": "DENMARK"
            },
            {
                "code": "40919",
                "name": "ESBJERG",
                "country": "DENMARK"
            },
            {
                "code": "40921",
                "name": "FREDERICIA",
                "country": "DENMARK"
            },
            {
                "code": "40922",
                "name": "NAKSKOV",
                "country": "DENMARK"
            },
            {
                "code": "40923",
                "name": "NYBORG",
                "country": "DENMARK"
            },
            {
                "code": "40924",
                "name": "NYKOBING",
                "country": "DENMARK"
            },
            {
                "code": "40925",
                "name": "RANDERS",
                "country": "DENMARK"
            },
            {
                "code": "40926",
                "name": "RONNE",
                "country": "DENMARK"
            },
            {
                "code": "40927",
                "name": "STRUER",
                "country": "DENMARK"
            },
            {
                "code": "40928",
                "name": "SVENDBORG",
                "country": "DENMARK"
            },
            {
                "code": "40929",
                "name": "VEILE",
                "country": "DENMARK"
            },
            {
                "code": "40940",
                "name": "ASNAES",
                "country": "DENMARK"
            },
            {
                "code": "40948",
                "name": "COPENHAGEN",
                "country": "DENMARK"
            },
            {
                "code": "40956",
                "name": "NORRESUNDBY",
                "country": "DENMARK"
            },
            {
                "code": "40961",
                "name": "ODENSE",
                "country": "DENMARK"
            },
            {
                "code": "40971",
                "name": "STIGSNAES",
                "country": "DENMARK"
            },
            {
                "code": "40985",
                "name": "ALL FAROE ISLANDS PORTS",
                "country": "FAROE ISLANDS"
            },
            {
                "code": "41201",
                "name": "AVONMOUTH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41207",
                "name": "BIRKENHEAD",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41211",
                "name": "BRISTOL",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41214",
                "name": "BROMSBOROUGH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41216",
                "name": "EASTHAM",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41227",
                "name": "ELLESMERE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41231",
                "name": "ERITH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41249",
                "name": "LAND'S END",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41251",
                "name": "LIVERPOOL",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41253",
                "name": "MANCHESTER",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41258",
                "name": "NEWPORT",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41262",
                "name": "PORTBURY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41264",
                "name": "PRESTON",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41269",
                "name": "SEAFORTH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41299",
                "name": "ALL OTHER ENGLAND WEST COAST PORTS",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41320",
                "name": "DAGENHAM",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41323",
                "name": "FELIXSTOWE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41328",
                "name": "FALMOUTH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41329",
                "name": "FAWLEY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41332",
                "name": "FOWEY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41335",
                "name": "GOOLE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41336",
                "name": "GREENHITE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41337",
                "name": "DOVER",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41338",
                "name": "HARTLEPOOL",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41341",
                "name": "HULL",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41342",
                "name": "IMMINGHAM",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41343",
                "name": "KINGS NORTH",
                "country": "KINGSNORTH"
            },
            {
                "code": "41345",
                "name": "KILLINGHOLME",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41351",
                "name": "THAMESPORT",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41352",
                "name": "CORYTON",
                "country": "LONDON"
            },
            {
                "code": "41355",
                "name": "MIDDLESBROUGH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41356",
                "name": "NEWCASTLE ON TYNE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41357",
                "name": "NEWHAVEN",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41358",
                "name": "OAKHAM NESS",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41359",
                "name": "BERWICK UPON TWEED",
                "country": "BERWICK"
            },
            {
                "code": "41360",
                "name": "PLYMOUTH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41362",
                "name": "REDCAR",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41370",
                "name": "RIDHAM DOCK",
                "country": "SHEERNESS"
            },
            {
                "code": "41371",
                "name": "SHELLHAVEN",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41374",
                "name": "HAMBLE",
                "country": "SOUTHHAMPTON"
            },
            {
                "code": "41376",
                "name": "SUNDERLAND",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41377",
                "name": "TEESPORT",
                "country": "TEES"
            },
            {
                "code": "41378",
                "name": "THAMES HAVEN",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41380",
                "name": "TILBURY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41398",
                "name": "ALL OTHER ENGLAND SOUTH AND EAST COAST PORTS",
                "country": "SUTTON HARBOR"
            },
            {
                "code": "41400",
                "name": "ALL OTHER WALES PORTS",
                "country": "PENARTH"
            },
            {
                "code": "41401",
                "name": "BARRI",
                "country": "BARRY"
            },
            {
                "code": "41415",
                "name": "HOLYHEAD",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41446",
                "name": "MILFORD HAVEN",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41465",
                "name": "PEMBROKE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41477",
                "name": "PORT TALBOT",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41485",
                "name": "SWANSEA",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41486",
                "name": "NEATH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41487",
                "name": "CARDIFF",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41488",
                "name": "NEWPORT",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41600",
                "name": "ALL OTHER SCOTLAND WEST COAST PORTS",
                "country": "BOWLING"
            },
            {
                "code": "41615",
                "name": "CLYDE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41623",
                "name": "GLASGOW",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41625",
                "name": "GREENOCK",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41627",
                "name": "HUNTERSTON",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41630",
                "name": "IRVINE HARBOR",
                "country": "IRVINE"
            },
            {
                "code": "41640",
                "name": "PETERHEAD",
                "country": " UNITED KINGDOM"
            },
            {
                "code": "41650",
                "name": "ABERDEEN",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41659",
                "name": "DUNDEE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41665",
                "name": "GRANGEMOUTH",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41668",
                "name": "HOUND POINT",
                "country": "HOUNDPOINT"
            },
            {
                "code": "41674",
                "name": "INVERKIP",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41675",
                "name": "EDINBURGH",
                "country": "EDINBURG"
            },
            {
                "code": "41680",
                "name": "FLOTTA",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41681",
                "name": "MONTROSE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41682",
                "name": "SULLOM VOE",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41683",
                "name": "INVERNESS",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41684",
                "name": "BRAEFOOT BAY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41685",
                "name": "NIGG BAY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41698",
                "name": "ALL OTHER SCOTLAND EAST COAST PORTS",
                "country": "SCOTLAND"
            },
            {
                "code": "41800",
                "name": "ALL OTHER NORTHERN IRELAND PORTS",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41801",
                "name": "BELFAST",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41802",
                "name": "BANGOR",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41805",
                "name": "WARREN POINT",
                "country": "WARRENPOINT"
            },
            {
                "code": "41815",
                "name": "LONDONDERRY",
                "country": "UNITED KINGDOM"
            },
            {
                "code": "41900",
                "name": "ALL OTHER IRELAND PORTS",
                "country": "IRELAND"
            },
            {
                "code": "41904",
                "name": "LIMERICK",
                "country": "IRELAND"
            },
            {
                "code": "41905",
                "name": "RINGASKIDDY",
                "country": "IRELAND"
            },
            {
                "code": "41906",
                "name": "AUGHINISH",
                "country": "IRELAND"
            },
            {
                "code": "41910",
                "name": "WATERFORD",
                "country": "IRELAND"
            },
            {
                "code": "41911",
                "name": "DUBLIN",
                "country": "IRELAND"
            },
            {
                "code": "41913",
                "name": "FOYNES",
                "country": "IRELAND"
            },
            {
                "code": "41915",
                "name": "MONEYPOINT",
                "country": "IRELAND"
            },
            {
                "code": "41916",
                "name": "ARKLOW",
                "country": "IRELAND"
            },
            {
                "code": "41919",
                "name": "DROGHEDA",
                "country": "IRELAND"
            },
            {
                "code": "41920",
                "name": "TARBERT ISLAND",
                "country": "IRELAND"
            },
            {
                "code": "41922",
                "name": "GREENORE",
                "country": "IRELAND"
            },
            {
                "code": "42100",
                "name": "ALL OTHER NETHERLANDS PORTS",
                "country": "NETHERLANDS"
            },
            {
                "code": "42103",
                "name": "ALPHEN AAN DEN RIJN",
                "country": "NETHERLANDS"
            },
            {
                "code": "42105",
                "name": "AMSTERDAM",
                "country": "NETHERLANDS"
            },
            {
                "code": "42115",
                "name": "BOTLEK",
                "country": "NETHERLANDS"
            },
            {
                "code": "42116",
                "name": "DELFZYL",
                "country": "NETHERLANDS"
            },
            {
                "code": "42117",
                "name": "DORDRECHT",
                "country": "NETHERLANDS"
            },
            {
                "code": "42118",
                "name": "EUROPOORT",
                "country": "NETHERLANDS"
            },
            {
                "code": "42119",
                "name": "MOERDJIK",
                "country": "NETHERLANDS"
            },
            {
                "code": "42123",
                "name": "GRAVENHAGE",
                "country": "NETHERLANDS"
            },
            {
                "code": "42132",
                "name": "EEMSHAVEN",
                "country": " NETHERLANDS"
            },
            {
                "code": "42140",
                "name": "MARDEJK",
                "country": "NETHERLANDS"
            },
            {
                "code": "42151",
                "name": "PERNIS",
                "country": "NETHERLANDS"
            },
            {
                "code": "42157",
                "name": "ROTTERDAM",
                "country": "NETHERLANDS"
            },
            {
                "code": "42165",
                "name": "SLUISKIL",
                "country": "NETHERLANDS"
            },
            {
                "code": "42171",
                "name": "TERNEUZEN",
                "country": "NETHERLANDS"
            },
            {
                "code": "42181",
                "name": "VLAARDINGEN",
                "country": "NETHERLANDS"
            },
            {
                "code": "42185",
                "name": "FLUSHING",
                "country": "NETHERLANDS"
            },
            {
                "code": "42190",
                "name": "IJMUIDEN",
                "country": "NETHERLANDS"
            },
            {
                "code": "42300",
                "name": "ALL OTHER BELGIUM PORTS",
                "country": "BELGIUM"
            },
            {
                "code": "42305",
                "name": "ANTWERP",
                "country": "BELGIUM"
            },
            {
                "code": "42306",
                "name": "SCHELDE",
                "country": "BELGIUM"
            },
            {
                "code": "42311",
                "name": "BRUGES",
                "country": "BELGIUM"
            },
            {
                "code": "42315",
                "name": "BRUXELLES",
                "country": "BELGIUM"
            },
            {
                "code": "42331",
                "name": "GHENT",
                "country": "BELGIUM"
            },
            {
                "code": "42351",
                "name": "OSTEND",
                "country": "BELGIUM"
            },
            {
                "code": "42381",
                "name": "ZEEBRUGGE",
                "country": "BELGIUM"
            },
            {
                "code": "42385",
                "name": "HEMIKSEM",
                "country": "BELGIUM"
            },
            {
                "code": "42700",
                "name": "ALL OTHER FRANCE ATLANTIC REGION PORTS",
                "country": "FRANCE"
            },
            {
                "code": "42701",
                "name": "BASSENS",
                "country": "FRANCE"
            },
            {
                "code": "42702",
                "name": "BAYONNE",
                "country": "FRANCE"
            },
            {
                "code": "42703",
                "name": "BEC DAMBES",
                "country": "FRANCE"
            },
            {
                "code": "42705",
                "name": "BLAYE",
                "country": "FRANCE"
            },
            {
                "code": "42707",
                "name": "BORDEAUX",
                "country": "FRANCE"
            },
            {
                "code": "42708",
                "name": "BOULOGNE",
                "country": "FRANCE"
            },
            {
                "code": "42709",
                "name": "BREST",
                "country": "FRANCE"
            },
            {
                "code": "42711",
                "name": "CAEN",
                "country": "FRANCE"
            },
            {
                "code": "42713",
                "name": "CALAIS",
                "country": "FRANCE"
            },
            {
                "code": "42715",
                "name": "CHERBOURG",
                "country": "FRANCE"
            },
            {
                "code": "42723",
                "name": "DONGES",
                "country": "FRANCE"
            },
            {
                "code": "42727",
                "name": "DUNKERQUE",
                "country": "FRANCE"
            },
            {
                "code": "42733",
                "name": "LA PALLICE",
                "country": "FRANCE"
            },
            {
                "code": "42735",
                "name": "BOUCAU",
                "country": "FRANCE"
            },
            {
                "code": "42736",
                "name": "DIEPPE",
                "country": "FRANCE"
            },
            {
                "code": "42737",
                "name": "LE HAVRE",
                "country": "FRANCE"
            },
            {
                "code": "42742",
                "name": "LE VERDON",
                "country": "FRANCE"
            },
            {
                "code": "42743",
                "name": "LORIENT",
                "country": "FRANCE"
            },
            {
                "code": "42745",
                "name": "MONTOIR",
                "country": "FRANCE"
            },
            {
                "code": "42749",
                "name": "NANTES",
                "country": "FRANCE"
            },
            {
                "code": "42751",
                "name": "PAUILLAC",
                "country": "FRANCE"
            },
            {
                "code": "42754",
                "name": "RADICATEL",
                "country": "FRANCE"
            },
            {
                "code": "42755",
                "name": "PORT JEROME",
                "country": "FRANCE"
            },
            {
                "code": "42757",
                "name": "ROCHEFORT",
                "country": "FRANCE"
            },
            {
                "code": "42759",
                "name": "ROUEN",
                "country": "FRANCE"
            },
            {
                "code": "42762",
                "name": "SAINT NAZAIRE",
                "country": "FRANCE"
            },
            {
                "code": "42773",
                "name": "BERRE",
                "country": "FRANCE"
            },
            {
                "code": "42775",
                "name": "CANNES",
                "country": "FRANCE"
            },
            {
                "code": "42776",
                "name": "FOS",
                "country": "FRANCE"
            },
            {
                "code": "42780",
                "name": "LAVERA",
                "country": "FRANCE"
            },
            {
                "code": "42782",
                "name": "MARSEILLE",
                "country": "FRANCE"
            },
            {
                "code": "42784",
                "name": "CARONTE",
                "country": "FRANCE"
            },
            {
                "code": "42785",
                "name": "ST. LOUIS DU RHON",
                "country": "FRANCE"
            },
            {
                "code": "42786",
                "name": "NICE",
                "country": "FRANCE"
            },
            {
                "code": "42789",
                "name": "SETE",
                "country": "FRANCE"
            },
            {
                "code": "42790",
                "name": "TOULON",
                "country": "FRANCE"
            },
            {
                "code": "42796",
                "name": "ALL CORSICA PORTS",
                "country": "FRANCE"
            },
            {
                "code": "42797",
                "name": "MONTE CARLO",
                "country": "FRANCE"
            },
            {
                "code": "42799",
                "name": "ALL OTHER FRANCE MEDITERRANEAN REGION PORTS",
                "country": "FRANCE"
            },
            {
                "code": "42800",
                "name": "ALL OTHER GERMANY BALTIC REGION PORTS",
                "country": "GERMANY"
            },
            {
                "code": "42811",
                "name": "ROSTOCK",
                "country": "GERMANY"
            },
            {
                "code": "42825",
                "name": "HOLTENAU",
                "country": "GERMANY"
            },
            {
                "code": "42835",
                "name": "WISMAR",
                "country": "GERMANY"
            },
            {
                "code": "42867",
                "name": "BRAKE",
                "country": "GERMANY"
            },
            {
                "code": "42868",
                "name": "ELSFLETH",
                "country": "GERMANY"
            },
            {
                "code": "42869",
                "name": "BREMEN",
                "country": "GERMANY"
            },
            {
                "code": "42870",
                "name": "BREMERHAVEN",
                "country": "GERMANY"
            },
            {
                "code": "42871",
                "name": "BRUNSBUTTEL",
                "country": "GERMANY"
            },
            {
                "code": "42873",
                "name": "CUXHAVEN",
                "country": "GERMANY"
            },
            {
                "code": "42874",
                "name": "EINSWARDEN",
                "country": "GERMANY"
            },
            {
                "code": "42875",
                "name": "EMDEN",
                "country": "GERMANY"
            },
            {
                "code": "42879",
                "name": "STADE",
                "country": "GERMANY"
            },
            {
                "code": "42880",
                "name": "BUTZFLETH",
                "country": "GERMANY"
            },
            {
                "code": "42881",
                "name": "HARBURG",
                "country": "GERMANY"
            },
            {
                "code": "42883",
                "name": "NORDENHAM",
                "country": "GERMANY"
            },
            {
                "code": "42891",
                "name": "WILHELMSHAVEN",
                "country": "GERMANY"
            },
            {
                "code": "42899",
                "name": "ALL OTHER GERMANY ATLANTIC REGION PORTS",
                "country": "GERMANY"
            },
            {
                "code": "44700",
                "name": "ALL OTHER ESTONIA PORTS",
                "country": "ESTONIA"
            },
            {
                "code": "44701",
                "name": "TALLINN",
                "country": "ESTONIA"
            },
            {
                "code": "44702",
                "name": "MUUGA",
                "country": "ESTONIA"
            },
            {
                "code": "44900",
                "name": "ALL OTHER LATVIA PORTS",
                "country": "LATVIA"
            },
            {
                "code": "44911",
                "name": "RIGA",
                "country": "LATVIA"
            },
            {
                "code": "44951",
                "name": "VENTSPILS",
                "country": "LATVIA"
            },
            {
                "code": "45100",
                "name": "ALL OTHER LITHUANIA PORTS",
                "country": "LITHUANIA"
            },
            {
                "code": "45101",
                "name": "KLAIPEDA",
                "country": "LITHUANIA"
            },
            {
                "code": "45500",
                "name": "ALL OTHER POLAND PORTS",
                "country": "POLAND"
            },
            {
                "code": "45505",
                "name": "GDYNIA",
                "country": "POLAND"
            },
            {
                "code": "45507",
                "name": "STETTIN",
                "country": "POLAND"
            },
            {
                "code": "45511",
                "name": "DANZIG",
                "country": "POLAND"
            },
            {
                "code": "45512",
                "name": "SWINEMUNDE",
                "country": "POLAND"
            },
            {
                "code": "45513",
                "name": "POLICE",
                "country": "POLAND"
            },
            {
                "code": "46200",
                "name": "ALL OTHER RUSSIA SIBERIA REGION PORTS",
                "country": "RUSSIA"
            },
            {
                "code": "46208",
                "name": "YANDRAKNNOT",
                "country": "RUSSIA"
            },
            {
                "code": "46209",
                "name": "MURMANSK",
                "country": "RUSSIA"
            },
            {
                "code": "46213",
                "name": "KALININGRAD",
                "country": "RUSSIA"
            },
            {
                "code": "46215",
                "name": "LENINGRAD",
                "country": "RUSSIA"
            },
            {
                "code": "46220",
                "name": "ALL OTHER RUSSIA BALTIC REGION PORTS",
                "country": "RUSSIA"
            },
            {
                "code": "46222",
                "name": "LORINO",
                "country": "RUSSIA"
            },
            {
                "code": "46230",
                "name": "NAKHODKA",
                "country": "RUSSIA"
            },
            {
                "code": "46231",
                "name": "VOSTOCHNYY",
                "country": "RUSSIA"
            },
            {
                "code": "46232",
                "name": "MAGADANSKY",
                "country": "RUSSIA"
            },
            {
                "code": "46233",
                "name": "PETROPAVLOVSK",
                "country": "RUSSIA"
            },
            {
                "code": "46234",
                "name": "VANINO",
                "country": "RUSSIA"
            },
            {
                "code": "46236",
                "name": "KORSAKOV",
                "country": "RUSSIA"
            },
            {
                "code": "46237",
                "name": "PROVIDENIYA",
                "country": "RUSSIA"
            },
            {
                "code": "46238",
                "name": "VLADIVOSTOK",
                "country": "RUSSIA"
            },
            {
                "code": "46239",
                "name": "ALL OTHER RUSSIA EASTERN REGION PORTS",
                "country": "RUSSIA"
            },
            {
                "code": "46241",
                "name": "NOVOROSSIYSK",
                "country": "RUSSIA"
            },
            {
                "code": "46242",
                "name": "TAGANROG",
                "country": "RUSSIA"
            },
            {
                "code": "46245",
                "name": "TUAPSE",
                "country": "RUSSIA"
            },
            {
                "code": "46250",
                "name": "ALL OTHER RUSSIA BLACK SEA REGION PORTS",
                "country": "RUSSIA"
            },
            {
                "code": "46271",
                "name": "ILICHEVSK",
                "country": "UKRAINE"
            },
            {
                "code": "46272",
                "name": "UST DUNAISK",
                "country": "UKRAINE"
            },
            {
                "code": "46274",
                "name": "KERCH",
                "country": "UKRAINE"
            },
            {
                "code": "46275",
                "name": "JUZHNY",
                "country": "UKRAINE"
            },
            {
                "code": "46276",
                "name": "MARIUPOL",
                "country": "UKRAINE"
            },
            {
                "code": "46277",
                "name": "BELGROD DNESTROVSKIY",
                "country": "UKRAINE"
            },
            {
                "code": "46278",
                "name": "BERDYANSK",
                "country": "UKRAINE"
            },
            {
                "code": "46279",
                "name": "ALL OTHER UKRAINE PORTS",
                "country": "UKRAINE"
            },
            {
                "code": "46321",
                "name": "BATUMIYSKAVA BUKHTA",
                "country": "GEORGIA"
            },
            {
                "code": "46337",
                "name": "POTI",
                "country": "GEORGIA"
            },
            {
                "code": "46350",
                "name": "SUKHUMI",
                "country": "GEORGIA"
            },
            {
                "code": "46357",
                "name": "ALL OTHER GEORGIA PORTS",
                "country": "GEORGIA"
            },
            {
                "code": "47000",
                "name": "ALL OTHER SPAIN ATLANTIC REGION PORTS NORTH OF POR",
                "country": "SPAIN"
            },
            {
                "code": "47003",
                "name": "AVILES",
                "country": "SPAIN"
            },
            {
                "code": "47005",
                "name": "BILBAO",
                "country": "SPAIN"
            },
            {
                "code": "47013",
                "name": "SANTANDER",
                "country": "SPAIN"
            },
            {
                "code": "47017",
                "name": "MOSEL",
                "country": "SPAIN"
            },
            {
                "code": "47021",
                "name": "CORUNNA",
                "country": "SPAIN"
            },
            {
                "code": "47022",
                "name": "EL FERROL",
                "country": "SPAIN"
            },
            {
                "code": "47027",
                "name": "PASAGES",
                "country": "SPAIN"
            },
            {
                "code": "47029",
                "name": "VIGO",
                "country": "SPAIN"
            },
            {
                "code": "47031",
                "name": "ALGECIRAS",
                "country": "SPAIN"
            },
            {
                "code": "47032",
                "name": "TARIFA",
                "country": "SPAIN"
            },
            {
                "code": "47035",
                "name": "CADIZ",
                "country": "SPAIN"
            },
            {
                "code": "47036",
                "name": "SAN CIPRIAN",
                "country": "SPAIN"
            },
            {
                "code": "47039",
                "name": "SEVILLA",
                "country": "SPAIN"
            },
            {
                "code": "47044",
                "name": "HUELVA",
                "country": "SPAIN"
            },
            {
                "code": "47049",
                "name": "ALL OTHER SPAIN ATLANTIC REGION PORTS SOUTHEAST OF",
                "country": "SPAIN"
            },
            {
                "code": "47051",
                "name": "ALCANAR",
                "country": "SPAIN"
            },
            {
                "code": "47057",
                "name": "ALICANTE",
                "country": "SPAIN"
            },
            {
                "code": "47059",
                "name": "ALMERIA",
                "country": "SPAIN"
            },
            {
                "code": "47061",
                "name": "BARCELONA",
                "country": "SPAIN"
            },
            {
                "code": "47062",
                "name": "CARBONERAS",
                "country": "SPAIN"
            },
            {
                "code": "47063",
                "name": "CARTAGENA",
                "country": "SPAIN"
            },
            {
                "code": "47065",
                "name": "PALAMOS",
                "country": "SPAIN"
            },
            {
                "code": "47066",
                "name": "PALMA DE MAJORCA",
                "country": "SPAIN"
            },
            {
                "code": "47067",
                "name": "IBIZA",
                "country": "SPAIN"
            },
            {
                "code": "47068",
                "name": "CASTELLON DE LA PLANA",
                "country": "SPAIN"
            },
            {
                "code": "47070",
                "name": "ALL OTHER CANARY ISLANDS PORTS",
                "country": "SPAIN"
            },
            {
                "code": "47071",
                "name": "LAS PALMAS",
                "country": "SPAIN"
            },
            {
                "code": "47072",
                "name": "SANTA CRUZ DE LA PALMA",
                "country": "SPAIN"
            },
            {
                "code": "47073",
                "name": "SANTA CRUZ DE TENERIFE",
                "country": "SPAIN"
            },
            {
                "code": "47076",
                "name": "MALAGA",
                "country": "SPAIN"
            },
            {
                "code": "47077",
                "name": "MOTRIL",
                "country": "SPAIN"
            },
            {
                "code": "47083",
                "name": "PUERTO DE SAGUNTO",
                "country": "SPAIN"
            },
            {
                "code": "47088",
                "name": "SAN FELIU DE GUIXOLS",
                "country": "SPAIN"
            },
            {
                "code": "47090",
                "name": "TORREVIEJA",
                "country": "SPAIN"
            },
            {
                "code": "47092",
                "name": "TARRAGONA",
                "country": "SPAIN"
            },
            {
                "code": "47093",
                "name": "GANDIA",
                "country": "SPAIN"
            },
            {
                "code": "47094",
                "name": "VALENCIA",
                "country": "SPAIN"
            },
            {
                "code": "47095",
                "name": "ALL OTHER SPANISH AFRICA N.E.C. PORTS",
                "country": "SPAIN"
            },
            {
                "code": "47096",
                "name": "CEUTA",
                "country": "SPAIN"
            },
            {
                "code": "47099",
                "name": "ALL OTHER SPAIN MEDITERRANEAN REGION PORTS",
                "country": "SPAIN"
            },
            {
                "code": "47100",
                "name": "ALL OTHER PORTUGAL PORTS",
                "country": "PORTUGAL"
            },
            {
                "code": "47101",
                "name": "FUNCHAL",
                "country": "PORTUGAL"
            },
            {
                "code": "47123",
                "name": "LEIXOES",
                "country": "PORTUGAL"
            },
            {
                "code": "47125",
                "name": "LISBON",
                "country": "PORTUGAL"
            },
            {
                "code": "47126",
                "name": "BARREIRO",
                "country": "PORTUGAL"
            },
            {
                "code": "47127",
                "name": "PORTO DE SINES",
                "country": "PORTUGAL"
            },
            {
                "code": "47130",
                "name": "AVEIRO",
                "country": "PORTUGAL"
            },
            {
                "code": "47133",
                "name": "OPORTO",
                "country": "PORTUGAL"
            },
            {
                "code": "47135",
                "name": "FIGUEIRA DA FOZ",
                "country": "PORTUGAL"
            },
            {
                "code": "47141",
                "name": "SETUBAL",
                "country": "PORTUGAL"
            },
            {
                "code": "47150",
                "name": "ALL OTHER AZORES PORTS",
                "country": "PORTUGAL"
            },
            {
                "code": "47151",
                "name": "PONTA DELGADA",
                "country": "PORTUGAL"
            },
            {
                "code": "47152",
                "name": "PRAIA",
                "country": "PORTUGAL"
            },
            {
                "code": "47155",
                "name": "TERCEIRA ISLAND",
                "country": "PORTUGAL"
            },
            {
                "code": "47201",
                "name": "GIBRALTAR",
                "country": "GIBRALTAR"
            },
            {
                "code": "47300",
                "name": "ALL OTHER MALTA PORTS",
                "country": "MALTA"
            },
            {
                "code": "47305",
                "name": "VALLETTA",
                "country": "MALTA"
            },
            {
                "code": "47306",
                "name": "MARSAXLOKK",
                "country": "MALTA"
            },
            {
                "code": "47500",
                "name": "ALL OTHER ITALY WEST COAST PORTS",
                "country": "ITALY"
            },
            {
                "code": "47505",
                "name": "BAGNOLI",
                "country": "ITALY"
            },
            {
                "code": "47507",
                "name": "NAPLES",
                "country": "ITALY"
            },
            {
                "code": "47515",
                "name": "PORTOVECCHIO DE PIOMBINO",
                "country": "ITALY"
            },
            {
                "code": "47517",
                "name": "SAVONA",
                "country": "ITALY"
            },
            {
                "code": "47519",
                "name": "CIVITAVECCHIA",
                "country": "ITALY"
            },
            {
                "code": "47525",
                "name": "GAETA",
                "country": "ITALY"
            },
            {
                "code": "47527",
                "name": "GENOA",
                "country": "ITALY"
            },
            {
                "code": "47528",
                "name": "MARINA DI CARRARA",
                "country": "ITALY"
            },
            {
                "code": "47531",
                "name": "LA SPEZIA",
                "country": "ITALY"
            },
            {
                "code": "47536",
                "name": "GIOIA TAURO",
                "country": "ITALY"
            },
            {
                "code": "47537",
                "name": "LEGHORN",
                "country": "ITALY"
            },
            {
                "code": "47538",
                "name": "SALERNO",
                "country": "ITALY"
            },
            {
                "code": "47539",
                "name": "VADA",
                "country": "ITALY"
            },
            {
                "code": "47540",
                "name": "RADA DI VADO",
                "country": "ITALY"
            },
            {
                "code": "47541",
                "name": "CANNETO",
                "country": "ITALY"
            },
            {
                "code": "47542",
                "name": "AUGUSTA",
                "country": "ITALY"
            },
            {
                "code": "47543",
                "name": "GELA",
                "country": "ITALY"
            },
            {
                "code": "47548",
                "name": "CATANIA",
                "country": "ITALY"
            },
            {
                "code": "47550",
                "name": "MILAZZO",
                "country": "ITALY"
            },
            {
                "code": "47551",
                "name": "PALERMO",
                "country": "ITALY"
            },
            {
                "code": "47554",
                "name": "PORTO EMPEDOCLE",
                "country": "ITALY"
            },
            {
                "code": "47555",
                "name": "PRIOLO",
                "country": "ITALY"
            },
            {
                "code": "47556",
                "name": "SANTA PANAGIA",
                "country": "ITALY"
            },
            {
                "code": "47558",
                "name": "ALL OTHER SICILY PORTS",
                "country": "ITALY"
            },
            {
                "code": "47561",
                "name": "PORTO TORRES",
                "country": "ITALY"
            },
            {
                "code": "47563",
                "name": "CAGLIARI",
                "country": "ITALY"
            },
            {
                "code": "47565",
                "name": "GOLFO DE PALMAS",
                "country": "ITALY"
            },
            {
                "code": "47567",
                "name": "SARROCH OIL TERMINAL",
                "country": "ITALY"
            },
            {
                "code": "47568",
                "name": "PORTO VESME",
                "country": "ITALY"
            },
            {
                "code": "47569",
                "name": "ALL OTHER SARDINIA PORTS",
                "country": "ITALY"
            },
            {
                "code": "47571",
                "name": "ANCONA",
                "country": "ITALY"
            },
            {
                "code": "47578",
                "name": "BARI",
                "country": "ITALY"
            },
            {
                "code": "47579",
                "name": "BARLETTA",
                "country": "ITALY"
            },
            {
                "code": "47581",
                "name": "CHIOGGIA",
                "country": "ITALY"
            },
            {
                "code": "47582",
                "name": "CROTONE",
                "country": "ITALY"
            },
            {
                "code": "47583",
                "name": "BRINDISI",
                "country": "ITALY"
            },
            {
                "code": "47584",
                "name": "PORTO CORSINI",
                "country": "ITALY"
            },
            {
                "code": "47585",
                "name": "TARANTO",
                "country": "ITALY"
            },
            {
                "code": "47587",
                "name": "TRIESTE",
                "country": "ITALY"
            },
            {
                "code": "47588",
                "name": "MONFALCONE",
                "country": "ITALY"
            },
            {
                "code": "47595",
                "name": "LIDO",
                "country": "ITALY"
            },
            {
                "code": "47598",
                "name": "ALL OTHER ITALY EAST COAST PORTS",
                "country": "ITALY"
            },
            {
                "code": "47900",
                "name": "ZELENIKA",
                "country": "SERBIA"
            },
            {
                "code": "47901",
                "name": "BAR",
                "country": "SERBIA"
            },
            {
                "code": "47902",
                "name": "DUBROVNIK",
                "country": "CROATIA"
            },
            {
                "code": "47905",
                "name": "NOVIGRAD",
                "country": "CROATIA"
            },
            {
                "code": "47906",
                "name": "DUGI RAT",
                "country": "CROATIA"
            },
            {
                "code": "47909",
                "name": "KOPAR",
                "country": "CROATIA"
            },
            {
                "code": "47910",
                "name": "PIRAN",
                "country": "CROATIA"
            },
            {
                "code": "47911",
                "name": "KARDELJEVO",
                "country": "CROATIA"
            },
            {
                "code": "47912",
                "name": "OBROVAC",
                "country": "CROATIA"
            },
            {
                "code": "47920",
                "name": "PULA",
                "country": "CROATIA"
            },
            {
                "code": "47923",
                "name": "BAKAR",
                "country": "CROATIA"
            },
            {
                "code": "47925",
                "name": "SIBVENICO",
                "country": "CROATIA"
            },
            {
                "code": "47931",
                "name": "KASTEL SUCURAC",
                "country": "CROATIA"
            },
            {
                "code": "47933",
                "name": "ZADAR",
                "country": "CROATIA"
            },
            {
                "code": "47998",
                "name": "ALL OTHER CROATIA PORTS",
                "country": "CROATIA"
            },
            {
                "code": "47999",
                "name": "ALL OTHER SLOVENIA PORTS",
                "country": "CROATIA"
            },
            {
                "code": "48100",
                "name": "ALL OTHER ALBANIA PORTS",
                "country": "ALBANIA"
            },
            {
                "code": "48109",
                "name": "DURAZZO",
                "country": "ALBANIA"
            },
            {
                "code": "48400",
                "name": "ALL OTHER GREECE PORTS",
                "country": "GREECE"
            },
            {
                "code": "48402",
                "name": "AYIA MARINA",
                "country": "GREECE"
            },
            {
                "code": "48405",
                "name": "AYIOS NIKOLAOS",
                "country": "GREECE"
            },
            {
                "code": "48406",
                "name": "SOUDA BAY",
                "country": "GREECE"
            },
            {
                "code": "48410",
                "name": "CORINTH",
                "country": "GREECE"
            },
            {
                "code": "48411",
                "name": "HERAKLION",
                "country": "GREECE"
            },
            {
                "code": "48412",
                "name": "KALI LIMENES",
                "country": "GREECE"
            },
            {
                "code": "48421",
                "name": "CALAMATA",
                "country": "GREECE"
            },
            {
                "code": "48425",
                "name": "KALAMAKI",
                "country": "GREECE"
            },
            {
                "code": "48427",
                "name": "KAVALA",
                "country": "GREECE"
            },
            {
                "code": "48445",
                "name": "ELEFSIS",
                "country": "GREECE"
            },
            {
                "code": "48449",
                "name": "MYLAKI",
                "country": "GREECE"
            },
            {
                "code": "48451",
                "name": "PATRAI",
                "country": "GREECE"
            },
            {
                "code": "48452",
                "name": "PIRAEUS",
                "country": "GREECE"
            },
            {
                "code": "48453",
                "name": "ASPROPIRGOS",
                "country": "GREECE"
            },
            {
                "code": "48454",
                "name": "AYIA TRIAS",
                "country": "GREECE"
            },
            {
                "code": "48455",
                "name": "CHIOS",
                "country": "GREECE"
            },
            {
                "code": "48456",
                "name": "CORFU",
                "country": "GREECE"
            },
            {
                "code": "48457",
                "name": "ITEA",
                "country": "GREECE"
            },
            {
                "code": "48458",
                "name": "KATAKOLON",
                "country": "GREECE"
            },
            {
                "code": "48459",
                "name": "KYMASSI",
                "country": "GREECE"
            },
            {
                "code": "48460",
                "name": "MIKONOS",
                "country": "GREECE"
            },
            {
                "code": "48461",
                "name": "PSACHNA",
                "country": "GREECE"
            },
            {
                "code": "48462",
                "name": "MITILINI",
                "country": "GREECE"
            },
            {
                "code": "48463",
                "name": "PILOS",
                "country": "GREECE"
            },
            {
                "code": "48464",
                "name": "SAMOS",
                "country": "GREECE"
            },
            {
                "code": "48465",
                "name": "SERIPHOS ISLAND",
                "country": "GREECE"
            },
            {
                "code": "48466",
                "name": "SYROS",
                "country": "GREECE"
            },
            {
                "code": "48467",
                "name": "ZAKINTHOS",
                "country": "GREECE"
            },
            {
                "code": "48468",
                "name": "MILOS ISLAND",
                "country": "GREECE"
            },
            {
                "code": "48471",
                "name": "SALONIKA",
                "country": "GREECE"
            },
            {
                "code": "48473",
                "name": "VOLOS",
                "country": "GREECE"
            },
            {
                "code": "48475",
                "name": "IALI",
                "country": "GREECE"
            },
            {
                "code": "48476",
                "name": "SKARAMANGA BAY",
                "country": "GREECE"
            },
            {
                "code": "48500",
                "name": "ALL OTHER ROMANIA PORTS",
                "country": "ROMANIA"
            },
            {
                "code": "48511",
                "name": "CONSTANTA",
                "country": "ROMANIA"
            },
            {
                "code": "48700",
                "name": "ALL OTHER PORTS IN BULGARIA",
                "country": "BULGARIA"
            },
            {
                "code": "48702",
                "name": "BURGAS",
                "country": "BULGARIA"
            },
            {
                "code": "48707",
                "name": "VARNA",
                "country": "BULGARIA"
            },
            {
                "code": "48900",
                "name": "ALL OTHER TURKEY MEDITERRANEAN PORTS",
                "country": "TURKEY"
            },
            {
                "code": "48903",
                "name": "ADALIA",
                "country": "TURKEY"
            },
            {
                "code": "48905",
                "name": "DIKILI",
                "country": "TURKEY"
            },
            {
                "code": "48915",
                "name": "ALIAGA",
                "country": "TURKEY"
            },
            {
                "code": "48925",
                "name": "GOCEK",
                "country": "TURKEY"
            },
            {
                "code": "48928",
                "name": "ISDEMIR",
                "country": "TURKEY"
            },
            {
                "code": "48931",
                "name": "GOLOVASI TERMINAL",
                "country": "TURKEY"
            },
            {
                "code": "48932",
                "name": "TOROS GUBRE",
                "country": "TURKEY"
            },
            {
                "code": "48938",
                "name": "MERSIN",
                "country": "TURKEY"
            },
            {
                "code": "48939",
                "name": "IZMIR",
                "country": "TURKEY"
            },
            {
                "code": "48940",
                "name": "IZMIT",
                "country": "TURKEY"
            },
            {
                "code": "48941",
                "name": "DARCIA",
                "country": "TURKEY"
            },
            {
                "code": "48942",
                "name": "DERINCE",
                "country": "TURKEY"
            },
            {
                "code": "48943",
                "name": "EREGLI",
                "country": "TURKEY"
            },
            {
                "code": "48944",
                "name": "GEBZE",
                "country": "TURKEY"
            },
            {
                "code": "48945",
                "name": "AMBARLI",
                "country": "TURKEY"
            },
            {
                "code": "48946",
                "name": "GIRESUN",
                "country": "TURKEY"
            },
            {
                "code": "48947",
                "name": "GHEMLIK",
                "country": "TURKEY"
            },
            {
                "code": "48951",
                "name": "MUDANYA",
                "country": "TURKEY"
            },
            {
                "code": "48963",
                "name": "PANDERMA",
                "country": "TURKEY"
            },
            {
                "code": "48967",
                "name": "SAMSUN",
                "country": "TURKEY"
            },
            {
                "code": "48971",
                "name": "YALOVA",
                "country": "TURKEY"
            },
            {
                "code": "48999",
                "name": "ALL OTHER TURKEY BLACK SEA AND SEA OF MARMARA PORT",
                "country": "TURKEY"
            },
            {
                "code": "49133",
                "name": "LARNACA",
                "country": "CYPRUS"
            },
            {
                "code": "49134",
                "name": "VASSILIKO",
                "country": "CYPRUS"
            },
            {
                "code": "49135",
                "name": "LIMASSOL",
                "country": "CYPRUS"
            },
            {
                "code": "49199",
                "name": "ALL OTHER CYPRUS PORTS",
                "country": "CYPRUS"
            },
            {
                "code": "50200",
                "name": "ALL OTHER SYRIA PORTS",
                "country": "SYRIA"
            },
            {
                "code": "50215",
                "name": "LATAKIA",
                "country": "SYRIA"
            },
            {
                "code": "50220",
                "name": "TARTUS",
                "country": "SYRIA"
            },
            {
                "code": "50400",
                "name": "ALL OTHER LEBANON PORTS",
                "country": "LEBANON"
            },
            {
                "code": "50401",
                "name": "BEIRUT",
                "country": "LEBANON"
            },
            {
                "code": "50500",
                "name": "ALL OTHER IRAQ PORTS",
                "country": "IRAQ"
            },
            {
                "code": "50501",
                "name": "BAGHDAD",
                "country": "IRAQ"
            },
            {
                "code": "50505",
                "name": "MINA AL BAKR",
                "country": "IRAQ"
            },
            {
                "code": "50525",
                "name": "BASRAH",
                "country": "IRAQ"
            },
            {
                "code": "50560",
                "name": "KHOR AL AMAYA",
                "country": "IRAQ"
            },
            {
                "code": "50570",
                "name": "KHOR AL ZUBAIR",
                "country": "IRAQ"
            },
            {
                "code": "50700",
                "name": "ALL OTHER IRAN PORTS",
                "country": "IRAN"
            },
            {
                "code": "50725",
                "name": "AHWAZ",
                "country": "IRAN"
            },
            {
                "code": "50730",
                "name": "BANDAR ABBAS",
                "country": "IRAN"
            },
            {
                "code": "50739",
                "name": "BANDAR E MAH SHAHR",
                "country": "IRAN"
            },
            {
                "code": "50769",
                "name": "LAVAN ISLAND",
                "country": "IRAN"
            },
            {
                "code": "50770",
                "name": "BANDAR KHOMEINI",
                "country": "IRAN"
            },
            {
                "code": "50771",
                "name": "KHARG ISLAND",
                "country": "IRAN"
            },
            {
                "code": "50800",
                "name": "ALL OTHER ISRAEL MEDITERRANEAN AREA PORTS",
                "country": "ISRAEL"
            },
            {
                "code": "50801",
                "name": "HAIFA",
                "country": "ISRAEL"
            },
            {
                "code": "50805",
                "name": "ASHDOD",
                "country": "ISRAEL"
            },
            {
                "code": "50810",
                "name": "ASHKELON",
                "country": "ISRAEL"
            },
            {
                "code": "50815",
                "name": "HADERA",
                "country": "ISRAEL"
            },
            {
                "code": "50845",
                "name": "TEL AVIV YAFO",
                "country": "ISRAEL"
            },
            {
                "code": "50871",
                "name": "EILAT",
                "country": "ISRAEL"
            },
            {
                "code": "51100",
                "name": "ALL OTHER JORDAN PORTS",
                "country": "JORDAN"
            },
            {
                "code": "51105",
                "name": "AL AQABAH",
                "country": "JORDAN"
            },
            {
                "code": "51300",
                "name": "ALL OTHER KUWAIT PORTS",
                "country": "KUWAIT"
            },
            {
                "code": "51321",
                "name": "KUWAIT",
                "country": "KUWAIT"
            },
            {
                "code": "51323",
                "name": "AL FUHAYHIL",
                "country": "KUWAIT"
            },
            {
                "code": "51330",
                "name": "MINA SAUD",
                "country": "KUWAIT"
            },
            {
                "code": "51350",
                "name": "ASH SHUAIBA",
                "country": "KUWAIT"
            },
            {
                "code": "51700",
                "name": "ALL OTHER SAUDI ARABIA PORTS",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51712",
                "name": "AL KHOBAR",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51715",
                "name": "DAMMAN",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51717",
                "name": "DHAHRAN",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51719",
                "name": "GIZAN",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51720",
                "name": "AL JUBAIL",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51721",
                "name": "JUDDA",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51723",
                "name": "AL JUAYMAH",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51727",
                "name": "RAS AT TANNURAH",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51730",
                "name": "YAMBO",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51732",
                "name": "KING ABDULLAH",
                "country": "SAUDI ARABIA"
            },
            {
                "code": "51800",
                "name": "ALL OTHER QATAR PORTS",
                "country": "QATAR"
            },
            {
                "code": "51813",
                "name": "DOHA",
                "country": "QATAR"
            },
            {
                "code": "51814",
                "name": "RAS LAFFAN",
                "country": "QATAR"
            },
            {
                "code": "51825",
                "name": "UMM SAID",
                "country": "QATAR"
            },
            {
                "code": "52000",
                "name": "ALL OTHER UNITED ARAB EMIRATES PORTS",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52001",
                "name": "MINA ZAYED",
                "country": "ABU DHABI"
            },
            {
                "code": "52003",
                "name": "ARZANAH ISLAND",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52005",
                "name": "DUBAYY",
                "country": "DUBAI"
            },
            {
                "code": "52030",
                "name": "DAS",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52040",
                "name": "FATEH TERMINAL",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52050",
                "name": "RUWAIS",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52051",
                "name": "JEBEL ALI",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52060",
                "name": "KHOR FAKKAN",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52070",
                "name": "SHARJAH",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52077",
                "name": "FUJAIRAH",
                "country": "UNITED ARAB EM"
            },
            {
                "code": "52100",
                "name": "ALL OTHER YEMEN PORTS",
                "country": "YEMEN"
            },
            {
                "code": "52101",
                "name": "ADEN",
                "country": "YEMEN"
            },
            {
                "code": "52115",
                "name": "HODEIDAH",
                "country": "YEMEN"
            },
            {
                "code": "52125",
                "name": "AL MOKHA",
                "country": "YEMEN"
            },
            {
                "code": "52300",
                "name": "ALL OTHER OMAN PORTS",
                "country": "OMAN"
            },
            {
                "code": "52310",
                "name": "SUR",
                "country": "OMAN"
            },
            {
                "code": "52312",
                "name": "QALHAT",
                "country": "OMAN"
            },
            {
                "code": "52315",
                "name": "MASIRAH ISLAND",
                "country": "OMAN"
            },
            {
                "code": "52320",
                "name": "MINA AL FAHAL",
                "country": "OMAN"
            },
            {
                "code": "52325",
                "name": "MATRAH",
                "country": "OMAN"
            },
            {
                "code": "52330",
                "name": "SALALAH",
                "country": "OMAN"
            },
            {
                "code": "52335",
                "name": "SOHAR",
                "country": "OMAN"
            },
            {
                "code": "52500",
                "name": "ALL OTHER BAHRAIN PORTS",
                "country": "BAHRAIN"
            },
            {
                "code": "52501",
                "name": "MINA SULMAN",
                "country": "BAHRAIN"
            },
            {
                "code": "52502",
                "name": "AL MANAMAH HARBOR",
                "country": "BAHRAIN"
            },
            {
                "code": "52503",
                "name": "KHALIFA BIN SULMAN",
                "country": " BAHRAIN"
            },
            {
                "code": "53300",
                "name": "ALL OTHER INDIA WEST COAST PORTS",
                "country": "INDIA"
            },
            {
                "code": "53301",
                "name": "ALLEPPEY",
                "country": "INDIA"
            },
            {
                "code": "53303",
                "name": "BHAVNAGAR",
                "country": "INDIA"
            },
            {
                "code": "53304",
                "name": "PIPAVAV",
                "country": "INDIA"
            },
            {
                "code": "53305",
                "name": "SIKKA",
                "country": "INDIA"
            },
            {
                "code": "53306",
                "name": "MUNDRA",
                "country": "INDIA"
            },
            {
                "code": "53307",
                "name": "PORT KANDLA",
                "country": "INDIA"
            },
            {
                "code": "53309",
                "name": "HAZIRA",
                "country": "INDIA"
            },
            {
                "code": "53312",
                "name": "BOMBAY",
                "country": "INDIA"
            },
            {
                "code": "53313",
                "name": "JAWAHARLAL NEHRU",
                "country": "INDIA"
            },
            {
                "code": "53333",
                "name": "COCHIN",
                "country": "INDIA"
            },
            {
                "code": "53340",
                "name": "MARMAGAO BAY",
                "country": "INDIA"
            },
            {
                "code": "53343",
                "name": "MANGALORE",
                "country": "INDIA"
            },
            {
                "code": "53347",
                "name": "VERAVAL",
                "country": "INDIA"
            },
            {
                "code": "53351",
                "name": "BAJ BAJ",
                "country": "INDIA"
            },
            {
                "code": "53353",
                "name": "CALCUTTA",
                "country": "INDIA"
            },
            {
                "code": "53354",
                "name": "HALDIA",
                "country": "INDIA"
            },
            {
                "code": "53357",
                "name": "MADRAS",
                "country": "INDIA"
            },
            {
                "code": "53371",
                "name": "PARADIP",
                "country": "INDIA"
            },
            {
                "code": "53395",
                "name": "TUTICORIN",
                "country": "INDIA"
            },
            {
                "code": "53396",
                "name": "BEYPORE",
                "country": "INDIA"
            },
            {
                "code": "53398",
                "name": "ALL OTHER INDIA EAST COAST PORTS",
                "country": "INDIA"
            },
            {
                "code": "53399",
                "name": "VISAKHAPATNAM",
                "country": "INDIA"
            },
            {
                "code": "53550",
                "name": "KARACHI",
                "country": "PAKISTAN"
            },
            {
                "code": "53551",
                "name": "PORT QASIM",
                "country": "PAKISTAN"
            },
            {
                "code": "53599",
                "name": "ALL OTHER PAKISTAN PORTS",
                "country": "PAKISTAN"
            },
            {
                "code": "53800",
                "name": "ALL OTHER BANGLADESH PORTS",
                "country": "BANGLADESH"
            },
            {
                "code": "53820",
                "name": "KHULNA",
                "country": "BANGLADESH"
            },
            {
                "code": "53827",
                "name": "CHITTAGONG",
                "country": "BANGLADESH"
            },
            {
                "code": "54200",
                "name": "ALL OTHER SRI LANKA PORTS",
                "country": "SRI LANKA"
            },
            {
                "code": "54201",
                "name": "COLOMBO HARBOR",
                "country": "SRI LANKA"
            },
            {
                "code": "54205",
                "name": "TRINCOMALI",
                "country": "SRI LANKA"
            },
            {
                "code": "54600",
                "name": "ALL OTHER BURMA PORTS",
                "country": "BURMA"
            },
            {
                "code": "54601",
                "name": "RANGOON",
                "country": "BURMA"
            },
            {
                "code": "54900",
                "name": "ALL OTHER THAILAND PORTS",
                "country": "THAILAND"
            },
            {
                "code": "54901",
                "name": "BANGKOK",
                "country": "THAILAND"
            },
            {
                "code": "54902",
                "name": "AO PHUKET",
                "country": "THAILAND"
            },
            {
                "code": "54903",
                "name": "MAB TA PUD",
                "country": "THAILAND"
            },
            {
                "code": "54905",
                "name": "SRI RACHA",
                "country": "THAILAND"
            },
            {
                "code": "54920",
                "name": "KO SICHANG",
                "country": "THAILAND"
            },
            {
                "code": "54927",
                "name": "SONGKHLA",
                "country": "THAILAND"
            },
            {
                "code": "54929",
                "name": "KATANG",
                "country": "THAILAND"
            },
            {
                "code": "54930",
                "name": "LAEM CHABANG",
                "country": "THAILAND"
            },
            {
                "code": "55200",
                "name": "ALL OTHER VIET NAM PORTS",
                "country": "VIETNAM"
            },
            {
                "code": "55201",
                "name": "HAIPHONG",
                "country": "VIETNAM"
            },
            {
                "code": "55202",
                "name": "HON GAY",
                "country": "VIETNAM"
            },
            {
                "code": "55204",
                "name": "DA NANG",
                "country": "VIETNAM"
            },
            {
                "code": "55205",
                "name": "CAM PHA",
                "country": "VIETNAM"
            },
            {
                "code": "55206",
                "name": "VUNG TAU",
                "country": "VIETNAM"
            },
            {
                "code": "55207",
                "name": "CAM RAHN BAY",
                "country": "VIETNAM"
            },
            {
                "code": "55208",
                "name": "NHA TRANG",
                "country": "VIETNAM"
            },
            {
                "code": "55224",
                "name": "THANH PHO HO CHI MINH",
                "country": "VIETNAM"
            },
            {
                "code": "55225",
                "name": "TAN CANG VIETNAM",
                "country": "VIETNAM"
            },
            {
                "code": "55500",
                "name": "ALL PORTS IN CAMBODIA",
                "country": "CAMBODIA"
            },
            {
                "code": "55700",
                "name": "ALL OTHER MALAYSIA PORTS",
                "country": "MALAYSIA"
            },
            {
                "code": "55705",
                "name": "BUTTERWORTH",
                "country": "MALAYSIA"
            },
            {
                "code": "55706",
                "name": "SANDAKAN",
                "country": "MALAYSIA"
            },
            {
                "code": "55707",
                "name": "PASIR GUDANG",
                "country": "MALAYSIA"
            },
            {
                "code": "55709",
                "name": "LUMUT",
                "country": "MALAYSIA"
            },
            {
                "code": "55711",
                "name": "KUALA TERENGGANU",
                "country": "MALAYSIA"
            },
            {
                "code": "55713",
                "name": "KUCHING",
                "country": "MALAYSIA"
            },
            {
                "code": "55715",
                "name": "KUANTAN",
                "country": "MALAYSIA"
            },
            {
                "code": "55716",
                "name": "KERETH",
                "country": "MALAYSIA"
            },
            {
                "code": "55717",
                "name": "LABUAN",
                "country": "MALAYSIA"
            },
            {
                "code": "55725",
                "name": "LAHAD DATU",
                "country": "MALAYSIA"
            },
            {
                "code": "55731",
                "name": "MIRI",
                "country": "MALAYSIA"
            },
            {
                "code": "55732",
                "name": "BINTULU",
                "country": "MALAYSIA"
            },
            {
                "code": "55735",
                "name": "PENANG",
                "country": "MALAYSIA"
            },
            {
                "code": "55742",
                "name": "SELANGOR",
                "country": "MALAYSIA"
            },
            {
                "code": "55750",
                "name": "TANJUNG PELEPAS",
                "country": " MALAYSIA"
            },
            {
                "code": "55751",
                "name": "KELANG",
                "country": "MALAYSIA"
            },
            {
                "code": "55752",
                "name": "KOTA KINABALU",
                "country": "MALAYSIA"
            },
            {
                "code": "55753",
                "name": "PORT DICKSON",
                "country": "MALAYSIA"
            },
            {
                "code": "55900",
                "name": "ALL OTHER SINGAPORE PORTS",
                "country": "SINGAPORE"
            },
            {
                "code": "55950",
                "name": "PULUM BUKUM",
                "country": "SINGAPORE"
            },
            {
                "code": "55976",
                "name": "SINGAPORE",
                "country": "SINGAPORE"
            },
            {
                "code": "56000",
                "name": "ALL OTHER INDONESIA PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56001",
                "name": "BELILING",
                "country": "INDONESIA"
            },
            {
                "code": "56002",
                "name": "BENOA",
                "country": "INDONESIA"
            },
            {
                "code": "56003",
                "name": "MUNTOK",
                "country": "INDONESIA"
            },
            {
                "code": "56004",
                "name": "PANGKAL BALAM",
                "country": "INDONESIA"
            },
            {
                "code": "56005",
                "name": "TANJONG PANDAN",
                "country": "INDONESIA"
            },
            {
                "code": "56006",
                "name": "ATTAKA",
                "country": "INDONESIA"
            },
            {
                "code": "56007",
                "name": "BALIKPAPAN",
                "country": "INDONESIA"
            },
            {
                "code": "56009",
                "name": "SENIPAH TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56010",
                "name": "LAWE LAWE TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56011",
                "name": "PONTIANAK",
                "country": "INDONESIA"
            },
            {
                "code": "56012",
                "name": "SAMARINDA",
                "country": "INDONESIA"
            },
            {
                "code": "56013",
                "name": "BANJER MASIN",
                "country": "INDONESIA"
            },
            {
                "code": "56016",
                "name": "SANTAN TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56017",
                "name": "SIBUCO BAY",
                "country": "INDONESIA"
            },
            {
                "code": "56018",
                "name": "TARAKAN ISLAND",
                "country": "INDONESIA"
            },
            {
                "code": "56019",
                "name": "ALLUTH KALIMANTAN",
                "country": "INDONESIA"
            },
            {
                "code": "56020",
                "name": "ALL OTHER KALIMANTAN PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56021",
                "name": "SUKARNAPURA",
                "country": "INDONESIA"
            },
            {
                "code": "56022",
                "name": "KEDIRI",
                "country": "INDONESIA"
            },
            {
                "code": "56023",
                "name": "KASIM",
                "country": "INDONESIA"
            },
            {
                "code": "56025",
                "name": "ALL OTHER WEST NEW GUINEA PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56027",
                "name": "MACASSAR",
                "country": "INDONESIA"
            },
            {
                "code": "56028",
                "name": "BITUNG",
                "country": "INDONESIA"
            },
            {
                "code": "56030",
                "name": "ALL OTHER SULAWESI PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56033",
                "name": "JAKARTA",
                "country": "INDONESIA"
            },
            {
                "code": "56034",
                "name": "GRESIK",
                "country": "INDONESIA"
            },
            {
                "code": "56035",
                "name": "TJIREBON",
                "country": "INDONESIA"
            },
            {
                "code": "56036",
                "name": "CILACAP",
                "country": "INDONESIA"
            },
            {
                "code": "56037",
                "name": "CINTA TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56038",
                "name": "LALANG TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56039",
                "name": "MERAK",
                "country": "INDONESIA"
            },
            {
                "code": "56040",
                "name": "ARJUNA TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56041",
                "name": "AMPENAN",
                "country": "INDONESIA"
            },
            {
                "code": "56042",
                "name": "BALONGAN TERMINAL",
                "country": "INDONESIA"
            },
            {
                "code": "56043",
                "name": "PANARUKAN",
                "country": "INDONESIA"
            },
            {
                "code": "56045",
                "name": "PANTOLOAN",
                "country": "INDONESIA"
            },
            {
                "code": "56051",
                "name": "SEMARANG",
                "country": "INDONESIA"
            },
            {
                "code": "56053",
                "name": "SURABAJA",
                "country": "INDONESIA"
            },
            {
                "code": "56055",
                "name": "TEGAL",
                "country": "INDONESIA"
            },
            {
                "code": "56056",
                "name": "CIGADING",
                "country": "INDONESIA"
            },
            {
                "code": "56058",
                "name": "ALL OTHER JAVA PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56064",
                "name": "ALL MOLUCCAS PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56065",
                "name": "PULAU SAMBU",
                "country": "INDONESIA"
            },
            {
                "code": "56066",
                "name": "KIDJANG",
                "country": "INDONESIA"
            },
            {
                "code": "56067",
                "name": "TIMOR",
                "country": "INDONESIA"
            },
            {
                "code": "56073",
                "name": "BELAWAN",
                "country": "INDONESIA"
            },
            {
                "code": "56074",
                "name": "BIMA",
                "country": "INDONESIA"
            },
            {
                "code": "56075",
                "name": "DUMAI",
                "country": "INDONESIA"
            },
            {
                "code": "56076",
                "name": "KUALA TANJUNG",
                "country": "INDONESIA"
            },
            {
                "code": "56077",
                "name": "BONTANG BAY",
                "country": "INDONESIA"
            },
            {
                "code": "56078",
                "name": "JAMBI",
                "country": "INDONESIA"
            },
            {
                "code": "56079",
                "name": "BENGKULU",
                "country": "INDONESIA"
            },
            {
                "code": "56081",
                "name": "TELUK BAYUR",
                "country": "INDONESIA"
            },
            {
                "code": "56083",
                "name": "PALEMBANG",
                "country": "INDONESIA"
            },
            {
                "code": "56085",
                "name": "PANGKALAN BRANDAN",
                "country": "INDONESIA"
            },
            {
                "code": "56087",
                "name": "PLAJU",
                "country": "INDONESIA"
            },
            {
                "code": "56097",
                "name": "PANDJANG",
                "country": "INDONESIA"
            },
            {
                "code": "56099",
                "name": "ALL OTHER SUMATRA PORTS",
                "country": "INDONESIA"
            },
            {
                "code": "56100",
                "name": "ALL OTHER BRUNEI PORTS",
                "country": "BRUNEI"
            },
            {
                "code": "56150",
                "name": "SERIA",
                "country": "BRUNEI"
            },
            {
                "code": "56151",
                "name": "MUARA PORT",
                "country": "BRUNEI"
            },
            {
                "code": "56500",
                "name": "ALL OTHER PHILIPPINES PORTS",
                "country": "PHILIPPINES"
            },
            {
                "code": "56503",
                "name": "BAIS",
                "country": "PHILIPPINES"
            },
            {
                "code": "56504",
                "name": "BAUAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56506",
                "name": "BATANGAS",
                "country": "PHILIPPINES"
            },
            {
                "code": "56507",
                "name": "BATAAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56508",
                "name": "BISLIG",
                "country": "PHILIPPINES"
            },
            {
                "code": "56513",
                "name": "BUTUAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56514",
                "name": "CAGAYAN DE ORO",
                "country": "PHILIPPINES"
            },
            {
                "code": "56520",
                "name": "SANGI",
                "country": "PHILIPPINES"
            },
            {
                "code": "56522",
                "name": "DADIANGAS",
                "country": "PHILIPPINES"
            },
            {
                "code": "56523",
                "name": "DAVAO",
                "country": "PHILIPPINES"
            },
            {
                "code": "56525",
                "name": "DUMAGUETE",
                "country": "PHILIPPINES"
            },
            {
                "code": "56530",
                "name": "HONDAGUA",
                "country": "PHILIPPINES"
            },
            {
                "code": "56531",
                "name": "ILIGAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56532",
                "name": "ILOILO",
                "country": "PHILIPPINES"
            },
            {
                "code": "56542",
                "name": "LEGASPI",
                "country": "PHILIPPINES"
            },
            {
                "code": "56545",
                "name": "MARIVELES",
                "country": "PHILIPPINES"
            },
            {
                "code": "56549",
                "name": "MANILA",
                "country": "PHILIPPINES"
            },
            {
                "code": "56552",
                "name": "MASINLOC",
                "country": "PHILIPPINES"
            },
            {
                "code": "56554",
                "name": "MASERU",
                "country": "PHILIPPINES"
            },
            {
                "code": "56556",
                "name": "MISAMIS",
                "country": "PHILIPPINES"
            },
            {
                "code": "56569",
                "name": "PULUPANDAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56578",
                "name": "PORO",
                "country": "PHILIPPINES"
            },
            {
                "code": "56585",
                "name": "SUBIC BAY",
                "country": "PHILIPPINES"
            },
            {
                "code": "56588",
                "name": "TABACO",
                "country": "PHILIPPINES"
            },
            {
                "code": "56589",
                "name": "TACLOBAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56590",
                "name": "ISABEL",
                "country": "PHILIPPINES"
            },
            {
                "code": "56591",
                "name": "JOSE PANGANIBAN",
                "country": "PHILIPPINES"
            },
            {
                "code": "56592",
                "name": "LIMAY",
                "country": "PHILIPPINES"
            },
            {
                "code": "56593",
                "name": "SANTA CRUZ",
                "country": "PHILIPPINES"
            },
            {
                "code": "56594",
                "name": "TANDOC",
                "country": "PHILIPPINES"
            },
            {
                "code": "56597",
                "name": "ZAMBOANGA",
                "country": "PHILIPPINES"
            },
            {
                "code": "56649",
                "name": "MACAO",
                "country": "MACAU"
            },
            {
                "code": "56805",
                "name": "MALE",
                "country": "MALDIVES"
            },
            {
                "code": "56899",
                "name": "ALL OTHER SOUTHERN ASIA",
                "country": "UNKNOWN"
            },
            {
                "code": "57000",
                "name": "ALL OTHER PEOPLES REPUBLIC OF CHINA PORTS",
                "country": "CHINA"
            },
            {
                "code": "57003",
                "name": "DONGFENG",
                "country": "CHINA"
            },
            {
                "code": "57005",
                "name": "BEILUN",
                "country": "CHINA"
            },
            {
                "code": "57009",
                "name": "CHIN WANG TAO",
                "country": "CHINA"
            },
            {
                "code": "57011",
                "name": "FUQING",
                "country": "CHINA"
            },
            {
                "code": "57012",
                "name": "HAIKOU",
                "country": "CHINA"
            },
            {
                "code": "57013",
                "name": "WUHAN",
                "country": "CHINA"
            },
            {
                "code": "57014",
                "name": "NAN CHING",
                "country": "CHINA"
            },
            {
                "code": "57015",
                "name": "FUZHOU",
                "country": "CHINA"
            },
            {
                "code": "57016",
                "name": "BEI JAO",
                "country": "CHINA"
            },
            {
                "code": "57017",
                "name": "DAGU/TANGGU",
                "country": "CHINA"
            },
            {
                "code": "57018",
                "name": "SHEKOU",
                "country": "CHINA"
            },
            {
                "code": "57019",
                "name": "ZHENJIANG",
                "country": "CHINA"
            },
            {
                "code": "57020",
                "name": "NINGPO",
                "country": "CHINA"
            },
            {
                "code": "57021",
                "name": "WENZHOW",
                "country": "CHINA"
            },
            {
                "code": "57022",
                "name": "HUIZHOU",
                "country": "CHINA"
            },
            {
                "code": "57024",
                "name": "RIZHAO",
                "country": "CHINA"
            },
            {
                "code": "57025",
                "name": "LIEN YIN CHIANG",
                "country": "CHINA"
            },
            {
                "code": "57030",
                "name": "TANJIAJING",
                "country": "CHINA"
            },
            {
                "code": "57035",
                "name": "SHANG HAI",
                "country": "CHINA"
            },
            {
                "code": "57037",
                "name": "YANGSHAN",
                "country": "CHINA"
            },
            {
                "code": "57038",
                "name": "TAICANG CHINA",
                "country": "CHINA"
            },
            {
                "code": "57043",
                "name": "TIENCHING",
                "country": "CHINA"
            },
            {
                "code": "57044",
                "name": "FANGCHENG",
                "country": "CHINA"
            },
            {
                "code": "57045",
                "name": "DA CHAN BAY",
                "country": "CHINA"
            },
            {
                "code": "57047",
                "name": "TSINGTAO",
                "country": "CHINA"
            },
            {
                "code": "57051",
                "name": "LUDA",
                "country": "CHINA"
            },
            {
                "code": "57052",
                "name": "LUSHUN",
                "country": "CHINA"
            },
            {
                "code": "57053",
                "name": "YINGKOU",
                "country": "CHINA"
            },
            {
                "code": "57055",
                "name": "YENTAI",
                "country": "CHINA"
            },
            {
                "code": "57056",
                "name": "DONGGUAN",
                "country": "CHINA"
            },
            {
                "code": "57067",
                "name": "CHIWAN",
                "country": "CHINA"
            },
            {
                "code": "57069",
                "name": "AMOY",
                "country": "CHINA"
            },
            {
                "code": "57070",
                "name": "SAN T OU",
                "country": "CHINA"
            },
            {
                "code": "57071",
                "name": "QUANZHOU",
                "country": "CHINA"
            },
            {
                "code": "57072",
                "name": "WHAMPOA",
                "country": "CHINA"
            },
            {
                "code": "57073",
                "name": "NANSHA",
                "country": "CHINA"
            },
            {
                "code": "57074",
                "name": "NANTONG",
                "country": "CHINA"
            },
            {
                "code": "57075",
                "name": "ZHANJIANG GANG",
                "country": "CHINA"
            },
            {
                "code": "57076",
                "name": "PAKHO",
                "country": "CHINA"
            },
            {
                "code": "57077",
                "name": "JIUZHOU",
                "country": "CHINA"
            },
            {
                "code": "57078",
                "name": "YANTIAN",
                "country": "CHINA"
            },
            {
                "code": "57079",
                "name": "ZHONGSHAN",
                "country": "CHINA"
            },
            {
                "code": "57080",
                "name": "JIANGYIN",
                "country": "CHINA"
            },
            {
                "code": "57900",
                "name": "ALL OTHER NORTH KOREA PORTS",
                "country": "NORTH KOREA"
            },
            {
                "code": "57910",
                "name": "ONSONG",
                "country": "NORTH KOREA"
            },
            {
                "code": "58000",
                "name": "ALL OTHER SOUTH KOREA PORTS",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58014",
                "name": "BUKPYUNG",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58015",
                "name": "JINHAE",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58023",
                "name": "BUSAN",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58028",
                "name": "KUNSON",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58029",
                "name": "JINSEN",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58030",
                "name": "DAESAN",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58031",
                "name": "KWANGYANG",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58032",
                "name": "PYUNGTAEK",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58033",
                "name": "MASAN",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58034",
                "name": "OKPO",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58035",
                "name": "MOGPO",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58055",
                "name": "POHANG",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58061",
                "name": "ONSAN",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58065",
                "name": "YOSU",
                "country": "SOUTH KOREA"
            },
            {
                "code": "58201",
                "name": "HONG KONG",
                "country": "HONG KONG"
            },
            {
                "code": "58270",
                "name": "KOWLOON",
                "country": "HONG KONG"
            },
            {
                "code": "58300",
                "name": "ALL OTHER CHINA (TAIWAN) PORTS",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58301",
                "name": "SHILONG",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58302",
                "name": "SU AO",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58303",
                "name": "TAICHUNG",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58304",
                "name": "TAIPE",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58305",
                "name": "TAI NAN",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58309",
                "name": "KAO HSIUNG",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58311",
                "name": "TAMSUI",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58312",
                "name": "HUALIEN",
                "country": "CHINA TAIWAN"
            },
            {
                "code": "58800",
                "name": "ALL OTHER JAPAN PORTS",
                "country": "JAPAN"
            },
            {
                "code": "58801",
                "name": "KASHIWAZAKI",
                "country": "JAPAN"
            },
            {
                "code": "58802",
                "name": "IMARI",
                "country": "JAPAN"
            },
            {
                "code": "58803",
                "name": "FUKUYAMA",
                "country": "JAPAN"
            },
            {
                "code": "58804",
                "name": "KEIHIN",
                "country": "JAPAN"
            },
            {
                "code": "58805",
                "name": "OITA",
                "country": "JAPAN"
            },
            {
                "code": "58806",
                "name": "MATSUSHIMA",
                "country": "JAPAN"
            },
            {
                "code": "58807",
                "name": "KAGOSHIMA",
                "country": "JAPAN"
            },
            {
                "code": "58808",
                "name": "HACHINOHE",
                "country": "JAPAN"
            },
            {
                "code": "58809",
                "name": "KANADO",
                "country": "JAPAN"
            },
            {
                "code": "58810",
                "name": "TOYAMA",
                "country": "JAPAN"
            },
            {
                "code": "58811",
                "name": "TOMAKOMAI",
                "country": "JAPAN"
            },
            {
                "code": "58812",
                "name": "MISHIMA KAWANOE",
                "country": "JAPAN"
            },
            {
                "code": "58813",
                "name": "AMAGASAKI",
                "country": "JAPAN"
            },
            {
                "code": "58814",
                "name": "SHIMONOSEKI",
                "country": "JAPAN"
            },
            {
                "code": "58815",
                "name": "KIIRE",
                "country": "JAPAN"
            },
            {
                "code": "58816",
                "name": "SASEBO",
                "country": "JAPAN"
            },
            {
                "code": "58817",
                "name": "KITA KYUSHU",
                "country": "JAPAN"
            },
            {
                "code": "58818",
                "name": "CHIBA",
                "country": "JAPAN"
            },
            {
                "code": "58819",
                "name": "SAIKI",
                "country": "JAPAN"
            },
            {
                "code": "58820",
                "name": "RUMOI",
                "country": "JAPAN"
            },
            {
                "code": "58821",
                "name": "FUNABASHI",
                "country": "JAPAN"
            },
            {
                "code": "58822",
                "name": "SUSAKI",
                "country": "JAPAN"
            },
            {
                "code": "58823",
                "name": "AIOI",
                "country": "JAPAN"
            },
            {
                "code": "58824",
                "name": "FUSHIKI TOYAMA",
                "country": "JAPAN"
            },
            {
                "code": "58825",
                "name": "HAKATA",
                "country": "JAPAN"
            },
            {
                "code": "58826",
                "name": "HAKODATE",
                "country": "JAPAN"
            },
            {
                "code": "58827",
                "name": "KIMITSU",
                "country": "JAPAN"
            },
            {
                "code": "58828",
                "name": "KAKOGAWA",
                "country": "JAPAN"
            },
            {
                "code": "58829",
                "name": "ISHINOMAKI",
                "country": "JAPAN"
            },
            {
                "code": "58830",
                "name": "HIROHATA",
                "country": "JAPAN"
            },
            {
                "code": "58831",
                "name": "HIROSHIMA",
                "country": "JAPAN"
            },
            {
                "code": "58832",
                "name": "AKITA KO",
                "country": "JAPAN"
            },
            {
                "code": "58833",
                "name": "IWAKUNI",
                "country": "JAPAN"
            },
            {
                "code": "58834",
                "name": "KAMAISHI",
                "country": "JAPAN"
            },
            {
                "code": "58835",
                "name": "MOGI",
                "country": "JAPAN"
            },
            {
                "code": "58836",
                "name": "KANOKAWA",
                "country": "JAPAN"
            },
            {
                "code": "58837",
                "name": "KASAOKA",
                "country": "JAPAN"
            },
            {
                "code": "58838",
                "name": "KAWASAKI",
                "country": "JAPAN"
            },
            {
                "code": "58839",
                "name": "KASHIMA KO",
                "country": "JAPAN"
            },
            {
                "code": "58840",
                "name": "KOBE",
                "country": "JAPAN"
            },
            {
                "code": "58841",
                "name": "KOKURA KO",
                "country": "JAPAN"
            },
            {
                "code": "58842",
                "name": "KAWANOE",
                "country": "JAPAN"
            },
            {
                "code": "58843",
                "name": "KUDAMATSU",
                "country": "JAPAN"
            },
            {
                "code": "58844",
                "name": "AOMORI",
                "country": "JAPAN"
            },
            {
                "code": "58845",
                "name": "KURE",
                "country": "JAPAN"
            },
            {
                "code": "58846",
                "name": "KUSHIRO",
                "country": "JAPAN"
            },
            {
                "code": "58847",
                "name": "MATSUNAGA",
                "country": "JAPAN"
            },
            {
                "code": "58848",
                "name": "MAIZURU",
                "country": "JAPAN"
            },
            {
                "code": "58849",
                "name": "MATSUYAMA",
                "country": "JAPAN"
            },
            {
                "code": "58850",
                "name": "MINAMATA",
                "country": "JAPAN"
            },
            {
                "code": "58851",
                "name": "MIIKE",
                "country": "JAPAN"
            },
            {
                "code": "58852",
                "name": "MISUMI",
                "country": "JAPAN"
            },
            {
                "code": "58853",
                "name": "MIYA KO",
                "country": "JAPAN"
            },
            {
                "code": "58854",
                "name": "MIZUSIMA",
                "country": "JAPAN"
            },
            {
                "code": "58855",
                "name": "MURORAN",
                "country": "JAPAN"
            },
            {
                "code": "58856",
                "name": "NAGASAKI",
                "country": "JAPAN"
            },
            {
                "code": "58857",
                "name": "NAGOYA",
                "country": "JAPAN"
            },
            {
                "code": "58858",
                "name": "NIIHAMA",
                "country": "JAPAN"
            },
            {
                "code": "58859",
                "name": "NIIGATA",
                "country": "JAPAN"
            },
            {
                "code": "58860",
                "name": "NAHA",
                "country": "JAPAN"
            },
            {
                "code": "58861",
                "name": "MUTSUI",
                "country": "JAPAN"
            },
            {
                "code": "58862",
                "name": "KANDA",
                "country": "JAPAN"
            },
            {
                "code": "58863",
                "name": "OFUNATO",
                "country": "JAPAN"
            },
            {
                "code": "58864",
                "name": "ONAHAMA",
                "country": "JAPAN"
            },
            {
                "code": "58865",
                "name": "ONAGAWA",
                "country": "JAPAN"
            },
            {
                "code": "58866",
                "name": "MISAKI",
                "country": "JAPAN"
            },
            {
                "code": "58867",
                "name": "OTARU",
                "country": "JAPAN"
            },
            {
                "code": "58868",
                "name": "FUNAKAWA",
                "country": "JAPAN"
            },
            {
                "code": "58869",
                "name": "HITAKI KO",
                "country": "JAPAN"
            },
            {
                "code": "58870",
                "name": "KARATSU",
                "country": "JAPAN"
            },
            {
                "code": "58871",
                "name": "HIMEZI",
                "country": "JAPAN"
            },
            {
                "code": "58872",
                "name": "KINUURA",
                "country": "JAPAN"
            },
            {
                "code": "58873",
                "name": "KOCHI",
                "country": "JAPAN"
            },
            {
                "code": "58874",
                "name": "SAKAI KO",
                "country": "JAPAN"
            },
            {
                "code": "58875",
                "name": "SAKAIDE",
                "country": "JAPAN"
            },
            {
                "code": "58876",
                "name": "SAKATA",
                "country": "JAPAN"
            },
            {
                "code": "58877",
                "name": "SHIOGAMA",
                "country": "JAPAN"
            },
            {
                "code": "58878",
                "name": "SHIMIZU",
                "country": "JAPAN"
            },
            {
                "code": "58879",
                "name": "SHIMOTSU",
                "country": "JAPAN"
            },
            {
                "code": "58880",
                "name": "TAGONOURA",
                "country": "JAPAN"
            },
            {
                "code": "58881",
                "name": "TOBATA",
                "country": "JAPAN"
            },
            {
                "code": "58882",
                "name": "KOMATSUSHIMA",
                "country": "JAPAN"
            },
            {
                "code": "58883",
                "name": "TOYOHASI",
                "country": "JAPAN"
            },
            {
                "code": "58884",
                "name": "UNO",
                "country": "JAPAN"
            },
            {
                "code": "58885",
                "name": "TOKUYAMA",
                "country": "JAPAN"
            },
            {
                "code": "58886",
                "name": "TOKYO",
                "country": "JAPAN"
            },
            {
                "code": "58887",
                "name": "YATSUSIRO",
                "country": "JAPAN"
            },
            {
                "code": "58888",
                "name": "UBE",
                "country": "JAPAN"
            },
            {
                "code": "58889",
                "name": "TSUKUMI",
                "country": "JAPAN"
            },
            {
                "code": "58890",
                "name": "WAKAMATSU KO",
                "country": "JAPAN"
            },
            {
                "code": "58891",
                "name": "WAKAYAMA",
                "country": "JAPAN"
            },
            {
                "code": "58892",
                "name": "NAOETU",
                "country": "JAPAN"
            },
            {
                "code": "58893",
                "name": "YAWATA",
                "country": "JAPAN"
            },
            {
                "code": "58894",
                "name": "YOKKAICHI",
                "country": "JAPAN"
            },
            {
                "code": "58895",
                "name": "YOKOHAMA",
                "country": "JAPAN"
            },
            {
                "code": "58896",
                "name": "YOKOSUKA",
                "country": "JAPAN"
            },
            {
                "code": "58897",
                "name": "SENDAI",
                "country": "JAPAN"
            },
            {
                "code": "58898",
                "name": "SEIBU",
                "country": "JAPAN"
            },
            {
                "code": "58899",
                "name": "SODEGAURA",
                "country": "JAPAN"
            },
            {
                "code": "60200",
                "name": "ALL OTHER AUSTRALIA PORTS",
                "country": "AUSTRALIA"
            },
            {
                "code": "60201",
                "name": "ADELAIDE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60204",
                "name": "MACKAY",
                "country": "AUSTRALIA"
            },
            {
                "code": "60205",
                "name": "BOTANY BAY",
                "country": "AUSTRALIA"
            },
            {
                "code": "60210",
                "name": "BRISBANE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60212",
                "name": "DALRYMPLE BAY",
                "country": "AUSTRALIA"
            },
            {
                "code": "60213",
                "name": "BUNBURY",
                "country": "AUSTRALIA"
            },
            {
                "code": "60214",
                "name": "BUNDABERG",
                "country": "AUSTRALIA"
            },
            {
                "code": "60217",
                "name": "LIEZEN",
                "country": "AUSTRALIA"
            },
            {
                "code": "60218",
                "name": "DAMPIER",
                "country": "AUSTRALIA"
            },
            {
                "code": "60219",
                "name": "PORT HEDLAND",
                "country": "AUSTRALIA"
            },
            {
                "code": "60220",
                "name": "DARWIN",
                "country": "AUSTRALIA"
            },
            {
                "code": "60222",
                "name": "FREMANTLE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60224",
                "name": "GERALDTON",
                "country": "AUSTRALIA"
            },
            {
                "code": "60225",
                "name": "GEELONG",
                "country": "AUSTRALIA"
            },
            {
                "code": "60227",
                "name": "GOVE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60231",
                "name": "GLADSTONE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60234",
                "name": "KWINANA",
                "country": "AUSTRALIA"
            },
            {
                "code": "60237",
                "name": "MELBOURNE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60239",
                "name": "MOURILYAN HARBOUR",
                "country": "AUSTRALIA"
            },
            {
                "code": "60240",
                "name": "NEWCASTLE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60243",
                "name": "PERTH",
                "country": "AUSTRALIA"
            },
            {
                "code": "60249",
                "name": "PORT ALMA",
                "country": "AUSTRALIA"
            },
            {
                "code": "60252",
                "name": "PORT KEMBLA",
                "country": "AUSTRALIA"
            },
            {
                "code": "60258",
                "name": "PORT PIRIE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60261",
                "name": "PORTLAND",
                "country": "AUSTRALIA"
            },
            {
                "code": "60267",
                "name": "SYDNEY",
                "country": "AUSTRALIA"
            },
            {
                "code": "60273",
                "name": "TOWNSVILLE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60275",
                "name": "WEIPA",
                "country": "AUSTRALIA"
            },
            {
                "code": "60276",
                "name": "ANDROSSAN",
                "country": "AUSTRALIA"
            },
            {
                "code": "60280",
                "name": "WESTERNPORT",
                "country": "AUSTRALIA"
            },
            {
                "code": "60281",
                "name": "CLARENCE RIVER",
                "country": "AUSTRALIA"
            },
            {
                "code": "60282",
                "name": "ESPERANCE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60290",
                "name": "BELL BAY",
                "country": "AUSTRALIA"
            },
            {
                "code": "60291",
                "name": "BURNIE",
                "country": "AUSTRALIA"
            },
            {
                "code": "60295",
                "name": "HOBART",
                "country": "AUSTRALIA"
            },
            {
                "code": "60297",
                "name": "LAUNCESTON",
                "country": "AUSTRALIA"
            },
            {
                "code": "60299",
                "name": "ALL OTHER TASMANIA PORTS",
                "country": "AUSTRALIA"
            },
            {
                "code": "60400",
                "name": "ALL OTHER PAPUA NEW GUINEA PORTS",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60431",
                "name": "ANEWA BAY",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60432",
                "name": "ALOTAU",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60433",
                "name": "AMAMAPARE",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60440",
                "name": "UVOL",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60441",
                "name": "LAE",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60447",
                "name": "PORT MORESBY",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60449",
                "name": "RABAUL",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "60450",
                "name": "WEWAK",
                "country": "PAPUA NEW GUINEA"
            },
            {
                "code": "61400",
                "name": "ALL OTHER NEW ZEALAND PORTS",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61401",
                "name": "AUCKLAND",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61403",
                "name": "BLUFF HARBOR",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61405",
                "name": "CHRISTCHURCH",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61406",
                "name": "NELSON",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61407",
                "name": "DUNEDIN",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61408",
                "name": "GISBORNE",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61415",
                "name": "PORT LYTTELTON",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61416",
                "name": "MOUNT MAUNGANUI",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61419",
                "name": "NAPIER",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61423",
                "name": "NEW PLYMOUTH",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61431",
                "name": "PORT CHALMERS",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61443",
                "name": "TAURANGA",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61445",
                "name": "TIMARU",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61447",
                "name": "WELLINGTON",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61460",
                "name": "PENRYN",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61461",
                "name": "AVATIU",
                "country": "NEW ZEALAND"
            },
            {
                "code": "61471",
                "name": "TOKELAU",
                "country": "TOKELAU"
            },
            {
                "code": "61481",
                "name": "ALOFI",
                "country": "NIUE ISLAND"
            },
            {
                "code": "61500",
                "name": "ALL OTHER WESTERN SAMOA PORTS",
                "country": "SAMOA"
            },
            {
                "code": "61501",
                "name": "APIA",
                "country": "SAMOA"
            },
            {
                "code": "62200",
                "name": "ALL SOLOMON ISLANDS PORTS",
                "country": "TULAGI"
            },
            {
                "code": "62201",
                "name": "LUGANVILLE",
                "country": "VANUATU"
            },
            {
                "code": "62207",
                "name": "PALIKULO",
                "country": "VANUATU"
            },
            {
                "code": "62209",
                "name": "PORT VILA",
                "country": "VANUATU"
            },
            {
                "code": "62211",
                "name": "PITCAIRN ISLANDS",
                "country": "PITCAIRN"
            },
            {
                "code": "62215",
                "name": "ALL GILBERT ISLANDS PORTS",
                "country": "KIRIBATI"
            },
            {
                "code": "62220",
                "name": "WASHINGTON ISLAND",
                "country": "KIRIBATI"
            },
            {
                "code": "62223",
                "name": "ENGLISH HARBOR",
                "country": "KIRIBATI"
            },
            {
                "code": "62225",
                "name": "CHRISTMAS ISLAND",
                "country": "KIRIBATI"
            },
            {
                "code": "62227",
                "name": "ALL CAROLINE ISLANDS PORTS",
                "country": "KIRIBATI"
            },
            {
                "code": "62231",
                "name": "FUNAFUTI ATOLL",
                "country": "TUVALU"
            },
            {
                "code": "62299",
                "name": "ALL OTHER SOUTHERN PACIFIC ISLANDS",
                "country": "UNKNOWN"
            },
            {
                "code": "64100",
                "name": "ALL OTHER NEW CALEDONIA PORTS",
                "country": "NEW CALEDONIA"
            },
            {
                "code": "64109",
                "name": "NOUMEA",
                "country": "NEW CALEDONIA"
            },
            {
                "code": "64131",
                "name": "ALL WALLIS AND FUTUNA PORTS",
                "country": "WALLIS"
            },
            {
                "code": "64151",
                "name": "PAPEETE",
                "country": "FRENCH POLYN"
            },
            {
                "code": "64178",
                "name": "ALL OTHER SOCIETY ISLANDS PORTS",
                "country": "FRENCH POLYN"
            },
            {
                "code": "64181",
                "name": "MAKATEA",
                "country": "FRENCH POLYN"
            },
            {
                "code": "64191",
                "name": "MARQUESAS ISLANDS",
                "country": "FRENCH POLYN"
            },
            {
                "code": "64195",
                "name": "CLIPPERTON ISLAND",
                "country": "FRENCH POLYN"
            },
            {
                "code": "68190",
                "name": "ALL MARSHALL ISLAND PORTS",
                "country": "MARSHALL IS"
            },
            {
                "code": "68205",
                "name": "TRUK",
                "country": "MICRONESIA"
            },
            {
                "code": "68206",
                "name": "KOSRAE",
                "country": "MICRONESIA"
            },
            {
                "code": "68207",
                "name": "POHNPEI",
                "country": "MICRONESIA"
            },
            {
                "code": "68209",
                "name": "YAP",
                "country": "MICRONESIA"
            },
            {
                "code": "68394",
                "name": "KOROR",
                "country": "PALAU"
            },
            {
                "code": "68628",
                "name": "SAVU",
                "country": "SUVA"
            },
            {
                "code": "68630",
                "name": "ALL OTHER FIJI ISLANDS PORTS",
                "country": "LAMBASA"
            },
            {
                "code": "68651",
                "name": "NAURU",
                "country": "NAURU"
            },
            {
                "code": "68682",
                "name": "ALL TONGA ISLANDS PORTS",
                "country": "TONGA"
            },
            {
                "code": "68699",
                "name": "ALL OTHER PACIFIC ISLANDS",
                "country": "UNKNOWN"
            },
            {
                "code": "71400",
                "name": "ALL OTHER MOROCCO ATLANTIC REGION PORTS",
                "country": "MOROCCO"
            },
            {
                "code": "71401",
                "name": "CASABLANCA",
                "country": "MOROCCO"
            },
            {
                "code": "71403",
                "name": "AGADIR",
                "country": "MOROCCO"
            },
            {
                "code": "71415",
                "name": "JORF LASFAR",
                "country": "MOROCCO"
            },
            {
                "code": "71417",
                "name": "NADOR",
                "country": "MOROCCO"
            },
            {
                "code": "71418",
                "name": "MOHAMMEDIA",
                "country": "MOROCCO"
            },
            {
                "code": "71419",
                "name": "SAFFI",
                "country": "MOROCCO"
            },
            {
                "code": "71425",
                "name": "TANGER",
                "country": "MOROCCO"
            },
            {
                "code": "71499",
                "name": "ALL OTHER MOROCCO MEDITERRANEAN PORTS",
                "country": "MOROCCO"
            },
            {
                "code": "72100",
                "name": "ALL OTHER ALGERIA PORTS",
                "country": "ALGERIA"
            },
            {
                "code": "72101",
                "name": "EL DJAZAIR",
                "country": "ALGERIA"
            },
            {
                "code": "72105",
                "name": "ARZIW",
                "country": "ALGERIA"
            },
            {
                "code": "72107",
                "name": "BEJAIA",
                "country": "ALGERIA"
            },
            {
                "code": "72123",
                "name": "BONA",
                "country": "ALGERIA"
            },
            {
                "code": "72142",
                "name": "NEMOURS",
                "country": "ALGERIA"
            },
            {
                "code": "72179",
                "name": "WAHRAN",
                "country": "ALGERIA"
            },
            {
                "code": "72189",
                "name": "SKIKDA",
                "country": "ALGERIA"
            },
            {
                "code": "72300",
                "name": "ALL OTHER TUNISIA PORTS",
                "country": "TUNISIA"
            },
            {
                "code": "72301",
                "name": "BANZART",
                "country": "TUNISIA"
            },
            {
                "code": "72305",
                "name": "GABES",
                "country": "TUNISIA"
            },
            {
                "code": "72310",
                "name": "LA GOULETTE",
                "country": "TUNISIA"
            },
            {
                "code": "72315",
                "name": "LA SKHIRA",
                "country": "TUNISIA"
            },
            {
                "code": "72337",
                "name": "SFAX",
                "country": "TUNISIA"
            },
            {
                "code": "72357",
                "name": "SOUSEE",
                "country": "TUNISIA"
            },
            {
                "code": "72373",
                "name": "TUNIS",
                "country": "TUNISIA"
            },
            {
                "code": "72500",
                "name": "ALL OTHER LIBYA PORTS",
                "country": "LIBYA"
            },
            {
                "code": "72501",
                "name": "BENGHAZI",
                "country": "LIBYA"
            },
            {
                "code": "72515",
                "name": "MARSA EL BREGA",
                "country": "LIBYA"
            },
            {
                "code": "72516",
                "name": "MARSA AL HARIGA",
                "country": "LIBYA"
            },
            {
                "code": "72519",
                "name": "AS SIDR",
                "country": "LIBYA"
            },
            {
                "code": "72520",
                "name": "SIRTICA TERMINAL",
                "country": "LIBYA"
            },
            {
                "code": "72525",
                "name": "TRIPOLI",
                "country": "LIBYA"
            },
            {
                "code": "72590",
                "name": "ZAVIA",
                "country": "LIBYA"
            },
            {
                "code": "72591",
                "name": "ZUWARAH",
                "country": "LIBYA"
            },
            {
                "code": "72595",
                "name": "ZUETINA",
                "country": "LIBYA"
            },
            {
                "code": "72900",
                "name": "ALL OTHER EGYPT MEDITERRANEAN REGION PORTS",
                "country": "EGYPT"
            },
            {
                "code": "72901",
                "name": "ALEXANDRIA",
                "country": "EGYPT"
            },
            {
                "code": "72905",
                "name": "ABUKIR",
                "country": "EGYPT"
            },
            {
                "code": "72906",
                "name": "EL ALAMEIN",
                "country": "EGYPT"
            },
            {
                "code": "72912",
                "name": "MINA DUMYAT",
                "country": "EGYPT"
            },
            {
                "code": "72913",
                "name": "BUR SAID",
                "country": "EGYPT"
            },
            {
                "code": "72914",
                "name": "SIDI KERIR",
                "country": "EGYPT"
            },
            {
                "code": "72925",
                "name": "ISMAILIA",
                "country": "EGYPT"
            },
            {
                "code": "72932",
                "name": "AIN SUKHNA",
                "country": "EGYPT"
            },
            {
                "code": "72939",
                "name": "RAS GHARIB",
                "country": "EGYPT"
            },
            {
                "code": "72940",
                "name": "RAS SHUKHEIR",
                "country": "EGYPT"
            },
            {
                "code": "72945",
                "name": "RAS SUDR",
                "country": "EGYPT"
            },
            {
                "code": "72947",
                "name": "EAST ZEIT TERMINAL",
                "country": "EGYPT"
            },
            {
                "code": "72948",
                "name": "SAFAGA",
                "country": "EGYPT"
            },
            {
                "code": "72949",
                "name": "ADABIYA",
                "country": "EGYPT"
            },
            {
                "code": "72999",
                "name": "ALL OTHER EGYPT RED SEA REGION PORTS",
                "country": "EGYPT"
            },
            {
                "code": "73201",
                "name": "PORT SUDAN",
                "country": "SUDAN"
            },
            {
                "code": "73700",
                "name": "ALL OTHER WESTERN SAHARA PORTS",
                "country": "WESTERN SAHARA"
            },
            {
                "code": "73701",
                "name": "LAAYOUNE",
                "country": "WESTERN SAHARA"
            },
            {
                "code": "73800",
                "name": "ALL OTHER EQUATORIAL GUINEA PORTS",
                "country": " EQUATORIAL GUINEA"
            },
            {
                "code": "73801",
                "name": "MALABO",
                "country": " EQUATORIAL GUINEA"
            },
            {
                "code": "73802",
                "name": "ZAFIRA",
                "country": " EQUATORIAL GUINEA"
            },
            {
                "code": "74100",
                "name": "ALL OTHER MAURITANIA PORTS",
                "country": "MAURITANIA"
            },
            {
                "code": "74165",
                "name": "PORT ETIENNE",
                "country": "MAURITANIA"
            },
            {
                "code": "74201",
                "name": "KOLE TERMINAL",
                "country": "CAMEROON"
            },
            {
                "code": "74213",
                "name": "KRIBI",
                "country": "CAMEROON"
            },
            {
                "code": "74296",
                "name": "MOUDI TERMINAL",
                "country": "CAMEROON"
            },
            {
                "code": "74297",
                "name": "GAROUA",
                "country": "CAMEROON"
            },
            {
                "code": "74298",
                "name": "CAP LIMBOAH",
                "country": "CAMEROON"
            },
            {
                "code": "74299",
                "name": "ALL OTHER CAMEROON PORTS",
                "country": "CAMEROON"
            },
            {
                "code": "74473",
                "name": "DAKAR",
                "country": "SENEGAL"
            },
            {
                "code": "74499",
                "name": "ALL OTHER SENEGAL PORTS",
                "country": "SENEGAL"
            },
            {
                "code": "74619",
                "name": "CONAKRY",
                "country": "GUINEA"
            },
            {
                "code": "74625",
                "name": "KAMSAR",
                "country": "GUINEA"
            },
            {
                "code": "74699",
                "name": "ALL OTHER GUINEA PORTS",
                "country": "GUINEA"
            },
            {
                "code": "74751",
                "name": "FREETOWN",
                "country": "SIERRA LEONE"
            },
            {
                "code": "74799",
                "name": "ALL OTHER SIERRA LEONE PORTS",
                "country": "SIERRA LEONE"
            },
            {
                "code": "74825",
                "name": "ABIDJAN",
                "country": "IVORY COAST"
            },
            {
                "code": "74826",
                "name": "BAOBAB OIL FIELD",
                "country": "IVORY COAST"
            },
            {
                "code": "74827",
                "name": "SAN PEDRO",
                "country": "IVORY COAST"
            },
            {
                "code": "74899",
                "name": "ALL OTHER IVORY COAST PORTS",
                "country": "IVORY COAST"
            },
            {
                "code": "74900",
                "name": "ALL OTHER GHANA PORTS",
                "country": "GHANA"
            },
            {
                "code": "74901",
                "name": "ACCRA",
                "country": "GHANA"
            },
            {
                "code": "74985",
                "name": "TAKORADI",
                "country": "GHANA"
            },
            {
                "code": "74990",
                "name": "TEMA",
                "country": "GHANA"
            },
            {
                "code": "75041",
                "name": "BANJUL",
                "country": "GAMBIA"
            },
            {
                "code": "75099",
                "name": "ALL OTHER GAMBIA PORTS",
                "country": "GAMBIA"
            },
            {
                "code": "75200",
                "name": "ALL OTHER TOGO PORTS",
                "country": "TOGO"
            },
            {
                "code": "75291",
                "name": "LOME",
                "country": "TOGO"
            },
            {
                "code": "75300",
                "name": "ALL OTHER NIGERIA PORTS",
                "country": "NIGERIA"
            },
            {
                "code": "75313",
                "name": "APAPA",
                "country": "NIGERIA"
            },
            {
                "code": "75315",
                "name": "ANTAN TERMINAL",
                "country": "NIGERIA"
            },
            {
                "code": "75320",
                "name": "BRASS TERMINAL",
                "country": "NIGERIA"
            },
            {
                "code": "75322",
                "name": "BONNY",
                "country": "NIGERIA"
            },
            {
                "code": "75323",
                "name": "UKPOKITI",
                "country": "NIGERIA"
            },
            {
                "code": "75330",
                "name": "CALABAR",
                "country": "NIGERIA"
            },
            {
                "code": "75345",
                "name": "ESCRAVOS OIL TERMINAL",
                "country": "NIGERIA"
            },
            {
                "code": "75349",
                "name": "FORCADOS",
                "country": "NIGERIA"
            },
            {
                "code": "75361",
                "name": "KOKO",
                "country": "NIGERIA"
            },
            {
                "code": "75367",
                "name": "TIN CAN ISLAND",
                "country": "NIGERIA"
            },
            {
                "code": "75380",
                "name": "PENNINGTON TERMINAL",
                "country": "NIGERIA"
            },
            {
                "code": "75383",
                "name": "SAPELE",
                "country": "NIGERIA"
            },
            {
                "code": "75385",
                "name": "OKRIKA",
                "country": "NIGERIA"
            },
            {
                "code": "75387",
                "name": "WARRI",
                "country": "NIGERIA"
            },
            {
                "code": "75389",
                "name": "KWA IBO TERMINAL",
                "country": "NIGERIA"
            },
            {
                "code": "75500",
                "name": "ALL OTHER GABON PORTS",
                "country": "GABON"
            },
            {
                "code": "75501",
                "name": "LIBREVILLE",
                "country": "GABON"
            },
            {
                "code": "75503",
                "name": "TCHATAMBA",
                "country": "GABON"
            },
            {
                "code": "75505",
                "name": "CAPE LOPEZ",
                "country": "GABON"
            },
            {
                "code": "75515",
                "name": "LUCINA TERMINAL",
                "country": "GABON"
            },
            {
                "code": "75517",
                "name": "OGUENDJO TERMINAL",
                "country": "GABON"
            },
            {
                "code": "75521",
                "name": "OWENDO",
                "country": "GABON"
            },
            {
                "code": "75525",
                "name": "PORT GENTIL",
                "country": "GABON"
            },
            {
                "code": "75898",
                "name": "CLARENCE BAY",
                "country": "ST. HELENA"
            },
            {
                "code": "75899",
                "name": "ALL ST. HELENA PORTS",
                "country": "ST. HELENA"
            },
            {
                "code": "76100",
                "name": "ALL OTHER BENIN PORTS",
                "country": "BENIN"
            },
            {
                "code": "76101",
                "name": "COTONOU",
                "country": "BENIN"
            },
            {
                "code": "76102",
                "name": "SEME TERMINAL",
                "country": "BENIN"
            },
            {
                "code": "76231",
                "name": "CABINDA",
                "country": "ANGOLA"
            },
            {
                "code": "76274",
                "name": "LOBITO",
                "country": "ANGOLA"
            },
            {
                "code": "76278",
                "name": "LUANDA",
                "country": "ANGOLA"
            },
            {
                "code": "76279",
                "name": "NAMIBE",
                "country": "ANGOLA"
            },
            {
                "code": "76281",
                "name": "SOYO QUINFUQUENA TERM.",
                "country": "ANGOLA"
            },
            {
                "code": "76282",
                "name": "MALONGO OIL TERMINAL",
                "country": "ANGOLA"
            },
            {
                "code": "76283",
                "name": "PALANCA TERMINAL",
                "country": "ANGOLA"
            },
            {
                "code": "76284",
                "name": "TAKULA TERMINAL",
                "country": "ANGOLA"
            },
            {
                "code": "76299",
                "name": "ALL OTHER ANGOLA PORTS",
                "country": "ANGOLA"
            },
            {
                "code": "76300",
                "name": "ALL OTHER CONGO(BRAZZAVILLE) PORTS",
                "country": "CONGO BRAZZAVILLE"
            },
            {
                "code": "76330",
                "name": "YOMBO",
                "country": "CONGO(BRAZZAVILLE)"
            },
            {
                "code": "76345",
                "name": "DJENO TERMINAL",
                "country": "CONGO BRAZZAVILLE"
            },
            {
                "code": "76350",
                "name": "POINTE NOIRE",
                "country": "CONGO BRAZZAVILLE"
            },
            {
                "code": "76465",
                "name": "PORTO GRANDE",
                "country": "CAPE VERDE"
            },
            {
                "code": "76475",
                "name": "PORTO PRAIA",
                "country": "CAPE VERDE"
            },
            {
                "code": "76489",
                "name": "ALL GUINEA BISSAU PORTS",
                "country": "BISSAU"
            },
            {
                "code": "76491",
                "name": "SAO TOME (ST. THOMAS)",
                "country": "SAO TOME AND PRINCIPE"
            },
            {
                "code": "76495",
                "name": "ALL OTHER SAO TOME AND PRINCIPE PORTS",
                "country": "SAO TOME AND PRINCIPE"
            },
            {
                "code": "76499",
                "name": "ALL OTHER CAPE VERDE PORTS",
                "country": "CAPE VERDE"
            },
            {
                "code": "76500",
                "name": "ALL OTHER LIBERIA PORTS",
                "country": "LIBERIA"
            },
            {
                "code": "76505",
                "name": "BUCHANAN",
                "country": "LIBERIA"
            },
            {
                "code": "76529",
                "name": "MONROVIA",
                "country": "LIBERIA"
            },
            {
                "code": "76600",
                "name": "ALL OTHER CONGO(KINSHASHA) PORTS",
                "country": "CONGO KINSHASHA"
            },
            {
                "code": "76637",
                "name": "MATADI",
                "country": "CONGO KINSHASHA"
            },
            {
                "code": "76638",
                "name": "BOMA",
                "country": "CONGO KINSHASHA"
            },
            {
                "code": "76639",
                "name": "MOANDA TERMINAL",
                "country": "CONGO KINSHASHA"
            },
            {
                "code": "77000",
                "name": "ALL OTHER SOMALIA NORTHERN REGION PORTS",
                "country": "SOMALIA"
            },
            {
                "code": "77001",
                "name": "BERBERA",
                "country": "SOMALIA"
            },
            {
                "code": "77051",
                "name": "MOGADISCIO",
                "country": "SOMALIA"
            },
            {
                "code": "77099",
                "name": "ALL OTHER SOMALIA EASTERN REGION PORTS",
                "country": "SOMALIA"
            },
            {
                "code": "77405",
                "name": "ASEB",
                "country": "ASSAB"
            },
            {
                "code": "77409",
                "name": "MASSAUA",
                "country": "ERITREA"
            },
            {
                "code": "77419",
                "name": "ALL OTHER ERITREA PORTS",
                "country": "ERITREA"
            },
            {
                "code": "77701",
                "name": "DJIBOUTI",
                "country": "DJIBOUTI"
            },
            {
                "code": "77913",
                "name": "MOMBASA",
                "country": "KENYA"
            },
            {
                "code": "77999",
                "name": "ALL OTHER KENYA PORTS",
                "country": "KENYA"
            },
            {
                "code": "78000",
                "name": "ALL OTHER SEYCHELLES PORTS",
                "country": "SEYCHELLES"
            },
            {
                "code": "78083",
                "name": "PORT VICTORIA",
                "country": "SEYCHELLES"
            },
            {
                "code": "78100",
                "name": "ALL OTHER BRITISH INDIAN OCEAN TERRITORY",
                "country": "BRIT IND OCEAN"
            },
            {
                "code": "78101",
                "name": "DIEGO GARCIA",
                "country": "BRIT IND OCEAN"
            },
            {
                "code": "78351",
                "name": "DAR ES SALAAM",
                "country": "TANZANIA"
            },
            {
                "code": "78379",
                "name": "TANGA",
                "country": "TANZANIA"
            },
            {
                "code": "78387",
                "name": "ZANZIBAR",
                "country": "TANZANIA"
            },
            {
                "code": "78399",
                "name": "ALL OTHER TANZANIA PORTS",
                "country": "TANZANIA"
            },
            {
                "code": "78500",
                "name": "ALL OTHER MAURITIUS PORTS",
                "country": "MAURITIUS"
            },
            {
                "code": "78501",
                "name": "PORT LOUIS",
                "country": "MAURITIUS"
            },
            {
                "code": "78700",
                "name": "ALL OTHER MOZAMBIQUE PORTS",
                "country": "MOZAMBIQUE"
            },
            {
                "code": "78701",
                "name": "BEIRA",
                "country": "MOZAMBIQUE"
            },
            {
                "code": "78717",
                "name": "MAPUTO",
                "country": "MOZAMBIQUE"
            },
            {
                "code": "78725",
                "name": "MOZAMBIQUE ISLAND",
                "country": "MOZAMBIQUE"
            },
            {
                "code": "78735",
                "name": "NACALA",
                "country": "MOZAMBIQUE"
            },
            {
                "code": "78800",
                "name": "ALL OTHER MADAGASCAR PORTS",
                "country": "MADAGASCAR"
            },
            {
                "code": "78845",
                "name": "TAMATAVE",
                "country": "MADAGASCAR"
            },
            {
                "code": "78900",
                "name": "ALL COMOROS PORTS",
                "country": "COMOROS"
            },
            {
                "code": "79051",
                "name": "POINTE DES GALETS",
                "country": "REUNION"
            },
            {
                "code": "79052",
                "name": "SAINT DENIS",
                "country": "REUNION"
            },
            {
                "code": "79060",
                "name": "ALL FRENCH SOUTHERN AND ANTARTIC LANDS",
                "country": "FRENCH SO AND ART"
            },
            {
                "code": "79100",
                "name": "ALL OTHER REPUBLIC OF SOUTH AFRICA PORTS",
                "country": "SOUTH AFRICA"
            },
            {
                "code": "79101",
                "name": "CAPE TOWN",
                "country": "SOUTH AFRICA"
            },
            {
                "code": "79113",
                "name": "DURBAN",
                "country": "SOUTH AFRICA"
            },
            {
                "code": "79125",
                "name": "EAST LONDON",
                "country": "SOUTH AFRICA"
            },
            {
                "code": "79145",
                "name": "PORT ELIZABETH",
                "country": "SOUTH AFRICA"
            },
            {
                "code": "79155",
                "name": "RICHARD'S BAY",
                "country": "SOUTH AFRICA"
            },
            {
                "code": "79286",
                "name": "WALVIS BAAI",
                "country": "NAMIBIA"
            },
            {
                "code": "79299",
                "name": "ALL OTHER NAMIBIA PORTS",
                "country": "NAMIBIA"
            },
            {
                "code": "91115",
                "name": "CHRISTIANSTED",
                "country": "US VIRGIN IS"
            },
            {
                "code": "91125",
                "name": "HESS OIL TERM. ST. CROIX",
                "country": "US VIRGIN IS"
            },
            {
                "code": "91145",
                "name": "FREDERIKSTED",
                "country": "US VIRGIN IS"
            },
            {
                "code": "91149",
                "name": "ALL OTHER ST. CROIX VIRGIN ISLANDS",
                "country": "US VIRGIN IS"
            },
            {
                "code": "91155",
                "name": "SAINT THOMAS",
                "country": "US VIRGIN IS"
            },
            {
                "code": "91160",
                "name": "CRUZ BAY",
                "country": "US VIRGIN IS"
            },
            {
                "code": "91195",
                "name": "ALL OTHER VIRGIN ISLANDS PORTS",
                "country": "US VIRGIN IS"
            },
            {
                "code": "92002",
                "name": "MILITARY NAHA",
                "country": "JAPAN"
            },
            {
                "code": "92003",
                "name": "MILITARY MANNHEIM",
                "country": "GERMANY"
            },
            {
                "code": "92004",
                "name": "MILITARY GERMERSHEIM",
                "country": "GERMANY"
            },
            {
                "code": "92018",
                "name": "MILITARY MINA QABOOS",
                "country": " OMAN"
            },
            {
                "code": "92019",
                "name": "MILITARY MUSCAT",
                "country": " OMAN"
            },
            {
                "code": "93501",
                "name": "GUAM ISLAND",
                "country": "GUAM"
            },
            {
                "code": "95101",
                "name": "PAGO PAGO HARBOR",
                "country": "AMERICAN SAMOA"
            },
            {
                "code": "96165",
                "name": "SAIPAN",
                "country": "NORTHERN MARIAN"
            },
            {
                "code": "96169",
                "name": "TINIAN",
                "country": "NORTHERN MARIAN"
            },
            {
                "code": "98000",
                "name": "ALL UNITED STATES OUTLYING ISLANDS",
                "country": " UNITED STATES"
            },
            {
                "code": "99900",
                "name": "HIGH SEAS",
                "country": " UNITED STATES"
            },
            {
                "code": "99910",
                "name": "HIGH SEAS",
                "country": " UNITED STATES"
            },
            {
                "code": "99920",
                "name": "HIGH SEAS",
                "country": " UNITED STATES"
            },
            {
                "code": "99930",
                "name": "HIGH SEAS",
                "country": " UNITED STATES"
            },
            {
                "code": "99940",
                "name": "HIGH SEAS",
                "country": " UNITED STATES"
            },
            {
                "code": "99950",
                "name": "HIGH SEAS",
                "country": " UNITED STATES"
            }           
        ]
    }


}