import React from 'react'
import './ModalEnvio.css';

const ModalEnvio = ({ values, setModalEnvio }) => {
  const [statusEnvio, setStatusEnvio] = React.useState("enviando")

  React.useEffect(() => {
    var formData = new FormData();
    formData.append('nome', values.nome,)
    formData.append('email', values.email)
    formData.append('telefone', values.telefone)
    formData.append('interesse', values.interesse)
    formData.append('mensagem', values.mensagem)
    formData.append('pagina', values.pagina)
    async function enviar() {
      try {
        const response = await fetch("./enviar.php", {
          method: 'POST',
          body: formData
        })
        console.log(response);
        if(response.status === 200){
          setStatusEnvio("enviado")
        }else{
          setStatusEnvio("erro-de-servidor")
        }
        
      } catch (erro) {
        console.log(erro)
        setStatusEnvio("erro-de-conexao")
      }
    }
    enviar()
  }, [values])

  return (
    <>
      <div id="entrada">
        <div className="enviando">
          {
            (statusEnvio === "enviando")
              ?
              (
                <>
                  Enviando
                  <div className="spinner"></div>
                </>
              )
              :
              (statusEnvio === "enviado" ? (
                <>
                  {<div onClick={() => setModalEnvio(false)} className="close-modal">&#10005;</div>}
                  Enviado com sucesso.
                </>) :
                (
                  <>
                    <div onClick={() => setModalEnvio(false)} className="close-modal">&#10005;</div>
                    Falha ao enviar. Por favor, tente novamente mais tarde.
                  </>

                )
              )
          }
        </div>
      </div>
    </>
  )
}

export default ModalEnvio
