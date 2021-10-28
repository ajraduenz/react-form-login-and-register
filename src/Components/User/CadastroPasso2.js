import React from 'react'
import Button from '../Button'
import './Pages.css'
const CadastroPasso2 = ({ types, setTypes }) => {

  const handleChange = e => {
    e.preventDefault()
    console.log(e.target.value)
    setTypes({ ...types, checkPass: { ...types.checkPass, value: e.target.value, notError:(types.checkPass.value === types.pass.value) } })
    console.log(types.checkPass.notError)
  };
  React.useEffect(() => {



    console.log(types.checkPass.notError)
  }, [])
  return (
    <main>
      <section className="intro">

        <h1>Preencha os campos para prosseguir com o cadastro</h1>


        <div className="inputs-section">
          <div className="input-bay">
            <input className="input-field" value={types.nickname.value} name={types.nickname.name} onChange={(e) => setTypes({ ...types, nickname: { ...types.nickname, value: e.target.value } })} type={types.nickname.type} required={types.nickname.required} placeholder={types.nickname.placeHolder}></input>
          </div>
          <p className="observacao">Use letras ou números, mas evite pontos e espaços.</p>


          <div className="input-bay margin-top">
            <input className="input-field" value={types.pass.value} name={types.pass.name} onChange={(e) => setTypes({ ...types, pass: { ...types.pass, value: e.target.value,  notError: types.pass.regex.test(e.target.value) } })} type={types.pass.type} required={types.pass.required} placeholder={types.pass.placeHolder}></input>
        
          </div>
          {
            !(types.pass.notError) &&
            <p style={{ color: "red" }}>{types.pass.errorMessage}</p>
          }
          <div className="input-bay">
            <input className="input-field" value={types.checkPass.value} name={types.checkPass.name} onChange={(e) => setTypes({ ...types, checkPass: { ...types.checkPass, value: e.target.value, notError: (e.target.value === types.pass.value) } })} type={types.checkPass.type} required={types.checkPass.required} placeholder={types.checkPass.placeHolder}></input>
           
          </div>
    
          {
            (
              
            !(types.checkPass.notError) &&(
            <p style={{ color: "red" }}>{types.checkPass.errorMessage}</p>))
          }
        
        </div>
        <p className="observacao">Já tem cadastro? Faça <a href="/">login aqui</a></p>
      </section>
    </main>
  )
}

export default CadastroPasso2
