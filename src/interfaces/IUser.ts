export interface IUserInfo {
    cep: number,
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string,
    numero?: number,
    complemento?: string
}