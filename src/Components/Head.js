import React from 'react'


const Head = (props) => {
  React.useEffect(() => {
    document.title = (props.titulo ? props.titulo : "Cadastro do Usuários")
    document.querySelector("meta[name='description']").setAttribute('content', props.descricao || '')
  }, [])
  return (
    <>      
    </>
  )
}

export default Head
