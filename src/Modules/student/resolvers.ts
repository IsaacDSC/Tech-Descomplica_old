import { StudentRepository } from './repository'
const repository = new StudentRepository


export default {
    Query: {
        // getStudents: async (_: any, { data }) => {
        //     console.log(data)
        // },
        searchStudentsBy: async (_: any, { data }) => { },
        getStudentsByCPF: async (_: any, { data }) => { },
    },
    Mutation: {
        createStudent: async (_: any, { data }) => {
           return await repository.create(data)
        },
        updateStudent: async (_: any, { data }) => { },
        deleteStudent: async (_: any, { data }) => { },
    }
}