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
  
  function componentWillMount(){
    const user = state.user
    axios(baseUrl).then(resp => {
      setState({ list: resp.data})
      
    })
    setState({...state, user})
  }
  
  function clear() {
    setState({...state, user: initialState.user})
  }

  function save() {
    const user = state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        const list = getUpdatedList(resp.data)
        setState({...state, list})
      })
  }

  function getUpdatedList(user, add = true){
    const list = state.list.filter(u => u.id !== user.id)
    if (add) list.unshift(user)
    return list
  }

  function updateField(event){
    const user = {...state.user}
    user[event.target.name] = event.target.value
    setState({...state, user: user })
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

  function load(user){
    setState({...state,  user: user })
  }

  function remove(user){
    axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
      const list = getUpdatedList(user, false)
      setState({...state,  list: list })
    })
  }

  function renderTable(){
    return(
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    )
  }

  function renderRows(){
    return(state.list.map(user =>{
      return(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning"
              onClick={() => load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml2"
              onClick={() => remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    }))
  }

  return( 
    <Main {...headerProps}>
      {renderForm()}
      {renderTable()}
    </Main>
  );
}

export default UserCrud;