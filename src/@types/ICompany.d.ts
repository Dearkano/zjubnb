import { string } from "prop-types";

declare module '@zjubnb' {
    export interface ICompany{
        address: string
        avg_attitude: number
        avg_quality: number
        avg_speed: number
        company_id: number
        company_name: string
        email: string
        head_image: string
        phone: string
        quality_image: string
        service_id: number
        service_introduction: string
        tax_number: string
        type: number
    }
}