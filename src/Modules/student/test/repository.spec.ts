import { StudentRepository } from '../repository'
const testRepository = new StudentRepository

describe('test repository student', () => {
  test('create student', async () => {
    const mutationStudent = `mutation { createStudent(data: {
      nome:"Teste",
      email:"rodrigo.resende2@tm1.com.br",
      CPF: "796781237123"
    }) {
      id
      nome
      CPF
      email
    }}`
    const student:any = { data: { nome: 'IsaacDSC', email: 'isaac8.silva@hotmail.com', CPF: '17856634572' } }
    const created = await testRepository.create(student)
    console.log(created)
    expect(created)
  })
})
