import React, { useState } from 'react'
import axios from 'axios'

import Main from '../Main'

// import { Container } from './styles';

const headerProps ={
    icon: 'user',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: ''},
  list: []
}

function UserCrud(props) {
  
  const [state, setState] = useState({...initialState})

  function clear() {
    setState({user: initialState.user})
  }

  function save() {
    const user = state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        const list = getUpdatedList(resp.data)
        setState({user: initialState.user, list})
      })
  }

  function getUpdatedList(user){
    const list = state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list
  }

  function updateField(event){
    const user = {...state.user}
    user[event.target.name] = event.target.value
    setState({ user })
  }

  function renderForm(){
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" name="name" className="form-control"
                value={state.user.name}
                onChange={e => updateField(e)}
                placeholder="Digite o nome ..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control"
                value={state.user.email}
                onChange={e => updateField(e)}
                placeholder="Digite o email ..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={e => save(e)}>
              Salvar
            </button>
            <button className="btn btn-secondary ml-2"
              onClick={e => clear(e)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return <Main {...headerProps}>
      {renderForm()}
  </Main>;
}

export default UserCrud;