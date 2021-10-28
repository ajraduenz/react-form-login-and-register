import React from 'react'
import './Pages.css'
const CadastroPasso1 = ({ types, setTypes }) => {
  // React.useEffect(() => {
  //   window.addEventListener("keydown", verificador)
  //   function verificador(event) {
  //     if (event.key !== "Backspace" && event.key !== "Delete") {
  //       if (types.birthday.value.length === 2 && event.key !== "/") {
  //         setTypes({
  //           ...types, birthday: { ...types.birthday, value: types.birthday.value += "/" }
  //         })
  //       }
  //       if (types.birthday.value.length === 5 && event.key !== "/") {
  //         setTypes({
  //           ...types, birthday: { ...types.birthday, value: types.birthday.value += "/" }
  //         })
  //       }
  //       if (types.cpfCnpj.value.length === 3 && event.key !== ".") {
  //         setTypes({
  //           ...types, cpfCnpj: { ...types.cpfCnpj, value: types.cpfCnpj.value += "." }
  //         })
  //       }
  //       if (types.cpfCnpj.value.length === 7 && event.key !== ".") {
  //         setTypes({
  //           ...types, cpfCnpj: { ...types.cpfCnpj, value: types.cpfCnpj.value += "." }
  //         })
  //       }
  //       if (types.cpfCnpj.value.length === 11 && event.key !== "-") {
  //         setTypes({
  //           ...types, cpfCnpj: { ...types.cpfCnpj, value: types.cpfCnpj.value += "-" }
  //         })
  //       }
  //       console.log(types.checkPass.notError)
  //       if (types.checkPass.value === types.pass.value ) {
  //         setTypes({
  //           ...types, checkPass: { ...types.checkPass, notError: true }
  //         })
         
  //       }

  //     }

  //   }
  //   return () => {
  //     window.removeEventListener("keydown", verificador);
  //   };
  // }, [types, setTypes])

  return (
    <main>
      <section className="intro">
        <h1>Preencha os campos para prosseguir com o cadastro</h1>
        <div className="inputs-section">
          <div className="input-bay">
            <input className="input-field" value={types.fullName.value} name={types.fullName.name} onChange={(e) => setTypes({ ...types, fullName: { ...types.fullName, value: e.target.value, notError: types.fullName.regex.test(e.target.value) } })} type={types.fullName.type} required={types.fullName.required} placeholder={types.fullName.placeHolder}></input>
          </div>
          {
            (types.fullName.value !== '') && (!types.fullName.notError) && <p style={{ color: "red" }}>{types.fullName.errorMessage}</p>
          }
          <div className="input-bay">
            <input className="input-field" value={types.email.value} name={types.email.name} onChange={(e) => setTypes({ ...types, email: { ...types.email, value: e.target.value, notError: types.email.regex.test(types.email.value) } })} type={types.email.type} required={types.email.required} placeholder={types.email.placeHolder}></input>
          </div>
          {
            (types.email.value !== '') && !types.email.notError &&
            <p style={{ color: "red" }}>{types.email.errorMessage}</p>
          }
          <div className="input-bay margin-top">
            <input className="input-field" value={types.birthday.value} name={types.birthday.name} onChange={(e) => setTypes({ ...types, birthday: { ...types.birthday, value: e.target.value, notError: (types.birthday.regex.test(types.birthday.value), console.log(types.birthday.regex.test(types.birthday.value))) } })} type={types.birthday.type} required={types.birthday.required} placeholder={types.birthday.placeHolder}></input>
          </div>
          {
            (types.birthday.value !== '') && !types.birthday.notError &&
            <p style={{ color: "red" }}>{`${types.birthday.value}`}</p>
          }
          <div className="input-bay">
            <input className="input-field" value={types.cpfCnpj.value} name={types.cpfCnpj.name} onChange={(e) => setTypes({
              ...types, cpfCnpj: {
                ...types.cpfCnpj,
                value: e.target.value,

                notError: types.cpfCnpj.regex.test(e.target.value)
              }
            })} type={types.cpfCnpj.type} required={types.cpfCnpj.required} placeholder={types.cpfCnpj.placeHolder}></input>
          </div>
          {

            (types.cpfCnpj.value !== '') && !types.cpfCnpj.notError &&
            <p style={{ color: "red" }}>{types.cpfCnpj.errorMessage}</p>
          }
        </div>
        <p className="observacao">Já tem cadastro? Faça <a href="/">login aqui</a></p>
      </section>
    </main>
  )
}

export default CadastroPasso1
