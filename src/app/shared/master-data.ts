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

    public static get OriginGoods(): any[] {
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

}