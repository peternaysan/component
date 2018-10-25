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
 
}