class Contact {
  nome: string
  telefone: string
  email: string
  id: number
  static id: number

  constructor(nome: string, telefone: string, email: string, id: number) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}
export default Contact
