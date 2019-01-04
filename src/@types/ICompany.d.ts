import { string } from "prop-types";

declare module '@zjubnb' {
    export interface ICompany{
        id: number;
        name: string;
        src: string;
        taxNumber: string;
        qualityImage: string;
        intro: string;
        address: string;
        phone: string;
        rate: number;
    }
}