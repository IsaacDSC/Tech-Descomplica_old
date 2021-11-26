import { prisma } from '../../config'
import { IStudent } from './interfaces'

export class StudentRepository {
    async search() { }
    async create(data: IStudent) {
        try {
            const { nome, CPF, email, status } = data
            return await prisma.student.create({ data: { nome, CPF, email, status } })
        } catch (error) {
            console.log(error)
            throw error.message
        }
    }
    async update() { }
    async delete() { }
}