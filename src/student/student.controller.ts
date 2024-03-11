import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import { response } from 'express';
import { CreateStudentDto } from 'src/dto/create-students.dto';
import { UpdateStudentDto } from 'src/dto/update-students.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}

    @Post()
    async createStudent(@Res() response,@Body()createStudentDto: CreateStudentDto){
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto)
            return response.status(HttpStatus.CREATED).json({
                message: "student is newly created",
                newStudent

            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode:400,
                message:"error student not created",
                error
            })
        }
    }
    @Get()
    async getStudents(@Res() response){
        try{
            const studentData = await this.studentService.getAllStudent()
            return response.status(HttpStatus.OK).json({
                message:"all students are successfully gotten",
                studentData
            })
        } catch(error){

        }

    }


    @Put('/:id')
    async updateStudent(@Res() response, @Param('id')studentId:string, @Body() updateStudentDto:UpdateStudentDto){
        try {
            const existingsStudent= await this.studentService.updateStudent(studentId, updateStudentDto)
            return response.status(HttpStatus.OK).json({
                message: "student details has been successfully updated",
                existingsStudent
            })
        } catch (error) {
            
        }
    }

    @Delete("/:id")
    async deleteStudent(@Res() response, @Param('id') studentId:string){
        try {
            const deletedStudent = await this.studentService.deleteStudent(studentId)
            return response.status(HttpStatus.OK).json({
                message:"student deleted successfully",
                deletedStudent
            })
        } catch (error) {
            
        }
    }

    @Get("/:id")
    async getStudent(@Res() response, @Param('id') studentId:string){
        try {
            const getStudent = await this.studentService.getStudent(studentId)
            return response.status(HttpStatus.OK).json({
                message:"student gotten successfully",
                getStudent
            })
        } catch (error) {
            
        }
    }


        
    }

