import {React,useEffect,useState} from 'react'
import axios from 'axios'
import {Form,Container,Button} from 'react-bootstrap'
import {useHistory,useParams,Link} from 'react-router-dom'

 
export default function Edit(){
    let  history = useHistory();
    const{id} = useParams();
    const[details,setdetatils]=useState({
        first_name:"",
        last_name:"",
        email:""
    })
const{first_name,last_name,email}=details

const handleme=(e)=>{
    setdetatils({...details,[e.target.name]:e.target.value})
}

const louder= async ()=>{
    const result = await axios.get(`https://reqres.in/api/users/${id}`)
    setdetatils(result.data.data)
}

useEffect(()=>{
    louder()
},[])
const handlesubmit= async(e)=>{
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`,details);
    history.push('/')
}
return(
    <div>
        <Container>
            <Form onSubmit={handlesubmit} >
               <Form.Label>Update Employee</Form.Label>
               <Form.Group>
                   <Form.Label>First Name</Form.Label>
                   <Form.Control type="text" name="first_name" value={first_name} placeholder="Enter First Name" onChange={handleme}/>
                    </Form.Group>
                    <Form.Group className="mb-3" ControlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="last_name" value={last_name} placeholder="enter last name" onChange={handleme}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" ControlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" value={email} placeholder="enter email" onChange={handleme}></Form.Control>
                        </Form.Group>
               
            </Form>
        </Container>

        
    </div>
)


}

