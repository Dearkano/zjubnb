import { string } from "prop-types";

declare module '@zjubnb' {
    export interface IComment{
        "commentId": number,
        "companyId": number,
        "orderId": number,
        "clientId": number,
        "clientName": string,
        "attitude": number,
        "speed": nunber,
        "quality": number,
        "date": string,
        "content": string,
    }
}