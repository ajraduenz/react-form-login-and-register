import React from 'react'
import Button from '../Button'
import CadastroPasso1 from './CadastroPasso1'
import CadastroPasso2 from './CadastroPasso2'
import './Pages.css'

const Cadastro = () => {
  const [modal, setModal] = React.useState('fechado')
   const [types, setTypes] = React.useState({
    fullName: {
      value: '',
      regex: /\w+\s+\w/,
      errorMessage: 'Digite um nome válido',
      notError: false,
      name: "fullName",
      type: "text",
      placeHolder: "Nome Completo",
      required: true
    },
    email: {
      value: '',
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      errorMessage: 'Digite um email válido',
      notError: false,
      name: "email",
      type: "email",
      placeHolder: "E-mail",
      required: true
    },
    birthday: {
      value: '',
      regex: /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/,
      errorMessage: 'Digite uma data válida (DD/MM/AAAA)',
      notError: false,
      name: "birthday",
      type: "text",
      placeHolder: "Data de nascimento",
      required: true
    },
    cpfCnpj: {
      value: '',
      regex: /([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
      errorMessage: 'Digite um CPF válido',
      notError: false,
      name: "cpf", type: "text", placeHolder: "CPF", required: true
    },
    pass: {
      value: '',
      regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      errorMessage: 'Mínimo de oito caracteres, pelo menos uma letra e um número.',
      notError: false,
      type: "password",
      name: 'pass',
      required: true,
      placeHolder: "Confirmar senha"
    },
    checkPass: {
      value: '',
      errorMessage: 'Senha e Confirmar senha devem ser iguais.',
      notError: false,
      type: "password",
      name: 'checkPass',
      required: true,
      placeHolder: "Confirmar senha"
    },
    nickname: {
      value: '',
      errorMessage: 'Nome de Usuário inválido',
      notError: false,
      name: "nickname",
      type: "text",
      required: true,
      placeHolder: "Nome de Usuário"
    }

  })



  const [passoAtivo, setPassoAtivo] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener("input", verificador)
    function verificador(event) {
      if (event.data !== null && event.data !== undefined) {
        if (types.birthday.value.length === 2) {
          setTypes({
            ...types, birthday: { ...types.birthday, value: types.birthday.value += "/" }
          })
        }
        if (types.birthday.value.length === 5) {
          setTypes({
            ...types, birthday: { ...types.birthday, value: types.birthday.value += "/" }
          })
        }
        if (types.cpfCnpj.value.length === 3) {
          setTypes({
            ...types, cpfCnpj: { ...types.cpfCnpj, value: types.cpfCnpj.value += "." }
          })
        }
        if (types.cpfCnpj.value.length === 7) {
          setTypes({
            ...types, cpfCnpj: { ...types.cpfCnpj, value: types.cpfCnpj.value += "." }
          })
        }
        if (types.cpfCnpj.value.length === 11 && event.key !== "-") {
          setTypes({
            ...types, cpfCnpj: { ...types.cpfCnpj, value: types.cpfCnpj.value += "-" }
          })
        }

      }

    }
    return () => {
      window.removeEventListener("input", verificador);
    };
  }, [types, setTypes])




  function handleClick(event) {
    document.querySelectorAll('.passo').forEach((cada, index) => {
      if (cada === event.target) {
        setPassoAtivo(index)
      }
    })

  }
  React.useEffect(() => {
    document.querySelectorAll('.passo').forEach(cada => {
      if (cada === document.querySelectorAll('.passo')[passoAtivo]) {
        cada.classList.add('ativo')
      } else {
        cada.classList.remove('ativo')
      }
    })
  }, [passoAtivo])

  function nextAction() {
    setPassoAtivo(1)
  }


  async function handleFormSubmit(event) {
    event.preventDefault();
    // console.log(Object.keys(types))
    const checkError = []
    Object.keys(types).forEach(key => { if (!types[key].notError) { checkError.push([key, types[key].notError]) } })

    Object.keys(types).map((cada) => {console.log(types[cada].notError)})
    console.log("checkError ", Object.keys(types))
   


    // const response = await fetch('http://travelingbetapi-env.eba-2riiwc2y.us-east-1.elasticbeanstalk.com/api/o/customer',
    //   {
    //     method: 'GET',
    //     headers: { "Content-Type": "application/json" },
    //     body: {
    //       "fullName": "Cliente Teste Final",
    //       "email": "cliente_1@email.com",
    //       "nickname": "customerTest",
    //       "birthday": "1991-11-20",
    //       "cpfCnpj": "44153507040",
    //       "account": {
    //         "id": "cliente_1@email.com",
    //         "pass": "abcd1234",
    //         "checkPass": "abcd1234"
    //       }
    //     }
    //   });


    // console.log(
    //   eMail,
    //   nomeCompleto,
    //   dataNascimento,
    //   CPF,
    //   usuario,
    //   senha,
    //   confirmarSenha
    // )

  }

  return (
    <main>
      <section className="intro">
        <div className="container-passo">
          <div className={`passo um`} onClick={handleClick}>1</div>
          <div className="separator">&#8212;</div>
          <div className={`passo dois `} onClick={handleClick} >2</div>
        </div>
        <form >
          {passoAtivo === 0 ?
            <>
              <CadastroPasso1 types={types} setTypes={setTypes} />
              <Button referencia="botao" content="Proxima" action={nextAction} />
            </>
            :
            <>
              <CadastroPasso2 types={types} setTypes={setTypes} />
              <Button referencia="botao" content="Concluir" action={handleFormSubmit} style={{ color: "#fff" }} />
            </>}
        </form>
      </section>
    </main>

  )
}

export default Cadastro
