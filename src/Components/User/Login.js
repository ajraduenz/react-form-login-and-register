import React from 'react'
import Button from '../Button'
import './Pages.css'

const Login = () => {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  console.log(senha)
  return (
    <main>
      <section className="intro">
        <h1>Olá! Seja bem-vindo ao site</h1>
        <p>Entre com seu nome de usuário e senha.</p>

        <div className="inputs-section">
          <div className="input-bay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#828BA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#828BA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input className="input-field" type="text" placeholder="Usuário" value={usuario}
          onChange={(e) => setUsuario(e.target.value)}></input>
          </div>

          <div className="input-bay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4118 9.41176C16.6275 10.1961 15.3725 10.1961 14.5882 9.41176C13.8039 8.62745 13.8039 7.37255 14.5882 6.58824C15.3725 5.80392 16.6275 5.80392 17.4118 6.58824C18.1961 7.35686 18.1961 8.62745 17.4118 9.41176Z" fill="#828BA1" />
              <path d="M10.0406 4.04482C8.22642 5.85921 7.61684 8.41386 8.2119 10.7218L2 16.9342V22H7.06531V19.4889H9.56168V16.9923H12.0726L13.2772 15.7875C15.5849 16.3681 18.1393 15.7585 19.9536 13.9586C22.6821 11.2298 22.6821 6.78817 19.9536 4.05933C17.2104 1.31598 12.7837 1.31598 10.0406 4.04482Z" stroke="#828BA1" stroke-width="2" stroke-miterlimit="10" />
            </svg>
            <input className="input-field" type="password" placeholder="Senha"value={senha}
          onChange={(e) => setSenha(e.target.value)}></input>
          </div>

        </div>
        <p className="senha-esquecida">Esqueceu a senha?</p>
        <Button referencia="botao" content="Entrar" />
        <p className="observacao">Não tem uma conta? <a href="/cadastro">Cadastre-se</a>    </p>
        <hr class="divider"></hr>
        <div className="entrar-por-redes google"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M5.31891 14.5034L4.4835 17.6221L1.43011 17.6867C0.517594 15.9942 0 14.0577 0 11.9999C0 10.01 0.483938 8.1335 1.34175 6.4812H1.34241L4.06078 6.97958L5.25159 9.68164C5.00236 10.4082 4.86652 11.1882 4.86652 11.9999C4.86661 12.8808 5.02617 13.7247 5.31891 14.5034Z" fill="#FBBB00" />
            <path d="M23.7902 9.7583C23.928 10.4842 23.9999 11.2339 23.9999 12.0001C23.9999 12.8592 23.9095 13.6972 23.7375 14.5056C23.1533 17.2563 21.6269 19.6583 19.5124 21.3581L19.5118 21.3574L16.0878 21.1827L15.6032 18.1576C17.0063 17.3348 18.1028 16.0471 18.6804 14.5056H12.2637V9.7583H18.774H23.7902Z" fill="#518EF8" />
            <path d="M19.5119 21.3575L19.5126 21.3581C17.4561 23.0111 14.8438 24.0001 12.0001 24.0001C7.43018 24.0001 3.457 21.4458 1.43018 17.6869L5.31897 14.5037C6.33236 17.2083 8.94138 19.1336 12.0001 19.1336C13.3148 19.1336 14.5465 18.7781 15.6033 18.1577L19.5119 21.3575Z" fill="#28B446" />
            <path d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87213 4.86656 6.21431 6.88017 5.25169 9.68175L1.34245 6.48131H1.3418C3.33895 2.63077 7.36223 0 12 0C14.9117 0 17.5814 1.03716 19.6596 2.76262Z" fill="#F14336" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
          Entrar com Goole</div>
        <div className="entrar-por-redes facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.32513 12.7824H8.95589V23.6129C8.95589 23.8267 9.12914 24 9.34299 24H13.8036C14.0174 24 14.1907 23.8267 14.1907 23.6129V12.8334H17.215C17.4116 12.8334 17.5771 12.6859 17.5996 12.4905L18.0589 8.50331C18.0715 8.39363 18.0368 8.28375 17.9633 8.20144C17.8899 8.11908 17.7848 8.07192 17.6744 8.07192H14.1908V5.5725C14.1908 4.81908 14.5965 4.437 15.3968 4.437C15.5108 4.437 17.6744 4.437 17.6744 4.437C17.8883 4.437 18.0615 4.26366 18.0615 4.04991V0.389953C18.0615 0.176109 17.8883 0.00285937 17.6744 0.00285937H14.5354C14.5133 0.00178125 14.4641 0 14.3917 0C13.847 0 11.9539 0.106922 10.4584 1.48266C8.80149 3.00722 9.03183 4.83258 9.08686 5.14908V8.07183H6.32508C6.11124 8.07183 5.93799 8.24508 5.93799 8.45892V12.3953C5.93804 12.609 6.11128 12.7824 6.32513 12.7824Z" fill="white" />
        </svg>
          Entrar com Facebook</div>

      </section>
    </main>
  )
}

export default Login
