import { prisma } from '../../config'
import { IStudent, IWhereStudent } from './interfaces'

export class StudentRepository {
    async searchAll() {
        try {
            return await prisma.student.findMany()
        } catch (error) {
            throw error.message
        }
    }
    async searchABy(data: object) {
        try {
            return await prisma.student.findMany({ where: data })
        } catch (error) {
            console.log(error)
            throw error.message
        }
    }
    async create(data: IStudent) {
        try {
            const { nome, CPF, email } = data
            return await prisma.student.create({ data: { nome, CPF, email } })
        } catch (error) {
            console.log(error)
            throw error.message
        }
    }
    async update(idUser: IWhereStudent, data: object) {
        try {
            const { id } = idUser
            return prisma.student.update({ where: idUser, data })
        } catch (error) {
            throw error.message
        }
    }
    async delete(idUser: IWhereStudent) {
        const { id } = idUser
        return prisma.student.delete({ where: { id } })
    }
}