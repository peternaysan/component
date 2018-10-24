export class MasterData {

    public static get InbondCodeList(): any[] {
        return [
            { id: "36", name: "36-Warehouse withdrawal for IE" },
            { id: "37", name: "37-Warehouse withdrawal for T&E" },
            { id: "67", name: "67-Foreign Trade Zone withdrawal for IE" },
            { id: "68", name: "68-Foreign Trade Zone withdrawal for T&E" },
            { id: "70", name: "70-Merchandise NOT shipped inbond" },
        ]
    }

    public static get filingTypeList(): any[] {
        return [
            { id: "2", name: "2 - Predeparture" },
            { id: "3", name: "3 - Advance Export Information (AEI)-For future use" },
            { id: "4", name: "4 - Post departure" },

        ]
    }

    public static get partyIdTypeList(): any[] {
        return [
            { id: "D", name: "D - DUNS" },
            { id: "S", name: "S - SSN" },
            { id: "E", name: "E - EIN" },
            { id: "T", name: "T - Foreign Entity" }

        ]
    }

    public static get partyTypeList(): any[] {
        return [
            { id: "E", name: "E - US Principal Party in Interest" },
            { id: "F", name: "F - Forwarding Agent" },
            { id: "C", name: "C - Ultimate Consignee" },
            { id: "I", name: "I - Intermediate Consignee" }

        ]
    }

}