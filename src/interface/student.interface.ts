import { Document } from "mongoose";
export interface IStudent extends Document{
    readonly name:string;
    readonly rolenumber:number;
    readonly class: number;
    readonly gender:string;
    readonly marks: number;
}