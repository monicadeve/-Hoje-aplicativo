import * as yup from 'yup' 

export const loginValidationsSchema =yup.object().shape({
Email: yup.string().email("Por favor insira um email valido"),
Password: yup.string().min(8,({min})=> `A senha deve ter no minimo ${min} digitos`)
})

export const cadastrovalidationsShema= yup.object().shape({
    Email: yup.string().Email("Por favor insira um email valido"),
    Password: yup.string().min(8,({min})=> `A senha deve ter no minimo ${min} digitos`),
    CPF: yup.string().min(11, ({min})=>`Coloque um cpf valido com no minimo ${min} digitos`)
})