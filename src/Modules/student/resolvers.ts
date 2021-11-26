import { StudentRepository } from './respository'
const repository = new StudentRepository


export default {
    Query: {
        getStudents: async (_: any, { data }) => { },
        searchStudentsBy: async (_: any, { data }) => { },
        getStudentsByCPF: async (_: any, { data }) => { },
    },
    Mutation: {
        createStudent: async (_: any, { data }) => { },
        updateStudent: async (_: any, { data }) => { },
        deleteStudent: async (_: any, { data }) => { },
    }
}