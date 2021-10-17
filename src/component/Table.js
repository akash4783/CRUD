import React from 'react'
import {Table,Button,Modal} from 'react-bootstrap'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


 function Tables (){
     const[store,setstore]=useState([])
     const [show, setshow] = useState(false)

     const [fadata, setFadata] = useState([])

useEffect(()=>{
    axios.get("https://reqres.in/api/users").then((resp)=>{
        console.log(resp.data.data)
        setstore(resp.data.data)
    })

},[])


    
const handle=(index)=>{
    const newstore=[...store]
    newstore.splice(index,1)
    setstore(newstore)
}
const handleClose = () => setshow(false);
const handleShow = (index) => {
    setshow(true);
    const newdata = [...store];
    const fdata = newdata.splice(index, 1);
    setFadata(fdata)
};


    return(
        <div>
            <Table bordered striped hover className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>


                    </tr>
                    </thead>
                    <tbody>
                        
                          {store.map((item,index)=>{
                              return (<tr key={index}><td>{item.id}</td>
                              
                              <td>{item.first_name}</td>
                              <td>{item.last_name}</td>
                              <td>{item.email}</td>
                              <td>
                             <Link to={`/edit/${item.id}`}> <Button variant="outline-success">Update</Button></Link>
                             <Button variant="outline-secondary" onClick={() => handleShow(index)} >Details</Button>
                              <Button onClick={()=>{handle(index)}} variant="outline-danger">Delete</Button>
                              </td>
                              </tr>)
                              })}
                              </tbody>
                              {fadata.map((item, index) => {
                        return (<Modal show={show} onHide={() => handleClose()} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Header><h4>First Name</h4></Modal.Header>
                            <Modal.Body>{item.first_name}</Modal.Body>
                            <Modal.Body>Last Name</Modal.Body>
                            <Modal.Body>{item.last_name}</Modal.Body>
                            <Modal.Body>Email</Modal.Body>
                            <Modal.Body>{item.email}</Modal.Body>
                            <Modal.Body><img src={item.avatar} /></Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>)
                    })}
                     </Table>

        </div>
    )
}

export default Tables