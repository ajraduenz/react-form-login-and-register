import React from 'react'

const useForm = () => {
  const [types, setTypes] = React.useState({
    fullName: {
      value: '',
      errorMessage: 'Nome inválido',
      error: null,
      name: "fullName",
      type: "text",
      placeHolder:"Nome Completo",
      required:"true"
    },
    email: {
      value: '',
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      errorMessage: 'Email inválido',
      error: null,
      name: "email",
      type: "email",
      placeHolder:"E-mail",
      required:"true"
    },
    birthday: {
      value: '',
      regex: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      errorMessage: 'Data Incorreta',
      error: null,
      name: "birthday",
      type: "text",
      placeHolder: "Data de nascimento",
      required: "true"
    },
    cpfCnpj: {
      value: '',
      regex: /([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
      message: 'CPF/CNPJ inválido',
      error: null,
      name: "cpf", type: "text", placeholder: "CPF", required: "true"
    },
    pass: {
      value: '',
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: 'Mínimo de oito caracteres, pelo menos uma letra e um número.',
      error: null,
      type: "password", 
      name: 'pass', 
      required: "true", 
      placeholder:"Confirmar senha"
    },
    checkPass: {
      value: '',
      message: 'Mínimo de oito caracteres, pelo menos uma letra e um número.',
      error: null,
      type: "password", 
      name: 'pass', 
      required: "true", 
      placeholder:"Confirmar senha"
    }

  })


}

export default useForm
