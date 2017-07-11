/**
 * Created by asimz on 09/01/2017.
 */
export interface IJobQuote {
    id: string;
    type: string;
    size: string;
    paper_type: string;
    printed_side: string;
    service_type: string;
    finish_type: string;
    pricing: string;
    own_design: boolean;
    design_price: number;
    addOnsPrice : number;
    status:string;
    createdBy:string;
    createdDate:string;
    IArtwork:string;
}