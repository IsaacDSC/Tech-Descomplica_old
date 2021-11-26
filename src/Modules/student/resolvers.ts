import { StudentRepository } from './repository'
const repository = new StudentRepository


export default {
    Query: {
        getStudents: async (_: any, { data }) => {
            return await repository.searchAll()
        },
        searchStudentsBy: async (_: any, { data }) => {
            return await repository.searchABy(data)
        },
        getStudentsByCPF: async (_: any, { data }) => { },
    },
    Mutation: {
        createStudent: async (_: any, { data }) => {
            return await repository.create(data)
        },
        updateStudent: async (_: any, { idUser, data }) => {
            return await repository.update(idUser, data)
        },
        deleteStudent: async (_: any, { idUser }) => {
            return await repository.delete(idUser)
        },
    }
}