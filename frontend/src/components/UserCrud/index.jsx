import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Main from '../Main'


const headerProps ={
    icon: 'user',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialUser = {name: '', email: ''} 
const initialList = []

function UserCrud() {
  
  const [user, setUser] = useState(initialUser)
  const [list, setList] = useState(initialList)
  
  useEffect(() => {
    async function loadList(){
      axios(baseUrl).then(resp => {
        const newList = resp.data
        setList(newList)
      })
    }

    loadList()
  }, [])
  

  function clear() {
    setUser(initialUser)
  }

  function save() {
    const newUser = user
    const method = newUser.id ? 'put' : 'post'
    const url = newUser.id ? `${baseUrl}/${newUser.id}` : baseUrl
    axios[method](url, newUser)
      .then(resp => {
        const newList = getUpdatedList(resp.data)
        setList(newList)
      })
    clear()
  }

  function getUpdatedList(user, add = true){
    const newList = list.filter(u => u.id !== user.id)
    if (add) newList.unshift(user)
    return newList
  }

  function updateField(event){
    const newUser = {...user}
    newUser[event.target.name] = event.target.value
    setUser({...newUser})
  }

  function renderForm(){
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" name="name" className="form-control"
                value={user.name}
                onChange={e => updateField(e)}
                placeholder="Digite o nome ..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control"
                value={user.email}
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
    setUser(user)
  }

  function remove(user){
    axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
      const newList = getUpdatedList(user, false)
      setList(newList)
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
    return(list.map(user =>{
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
      {console.log(list)}
    </Main>
  );
}

export default UserCrud;