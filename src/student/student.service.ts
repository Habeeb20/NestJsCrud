import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-students.dto';
import { UpdateStudentDto } from 'src/dto/update-students.dto';
import { IStudent } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private studentModel:Model<IStudent>){
        
    }
    async createStudent(createStudentDto:CreateStudentDto):Promise<IStudent>{
        const newStudent = await new this.studentModel(createStudentDto)
        return newStudent.save()
    }

    async getAllStudent():Promise<IStudent[]>{
        const studentData = await this.studentModel.find()
        if(!studentData || studentData.length == 0){
            throw new NotFoundException("student not found")
        }
        return studentData
    }


    async getStudent(studentId :  string):Promise<IStudent>{
        const existingsStudent = await this.studentModel.findById(studentId)
        if(!existingsStudent){
            throw new NotFoundException(`student with ${studentId} does not exist`)
        }
        return existingsStudent
    }

    async deleteStudent(studentId:string):Promise<IStudent>{
        const deleteAStudent = await this.studentModel.findByIdAndDelete(studentId)
        if(!deleteAStudent){
            throw new NotFoundException(`the selected student with ${studentId} not found `)
        }
        return deleteAStudent
    }

    async updateStudent(studentId:string, updateStudent: UpdateStudentDto):Promise<IStudent>{
        const updatedStudent = await this.studentModel.findByIdAndUpdate(studentId, updateStudent, {new: true})
        if(!updatedStudent){
            throw new NotFoundException(`the selected student with ${studentId} not found `)
        }
        return updatedStudent
    }
};




