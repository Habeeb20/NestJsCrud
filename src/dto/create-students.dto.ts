import { IsString, MaxLength, IsNotEmpty, IsNumber, isNotEmpty } from "class-validator";

export class CreateStudentDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name:string;

    @IsNumber()
    readonly roleNumber:number;

    @IsNumber()
    @IsNotEmpty()
    readonly class: string;

  
    @IsNotEmpty()
    readonly gender: string;

    @IsNumber()
    @IsNotEmpty()
    readonly marks: number

    
}