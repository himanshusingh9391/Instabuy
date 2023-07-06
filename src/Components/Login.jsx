
import {useState} from "react"; 
import {Row,Col,Form,Button} from "react-bootstrap"; 
import {useNavigate} from "react-router-dom";

import LoginImg from '../assets/login.png'

export default function Login({setUser}){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor: '#216ad9'}}>
            <Row style={{padding: 75}}>
                <Col style={{padding: 100}}>
                <div>
                    <h1 style={{color:'white'}}>Instabuy!</h1>
                    <h3 style={{color:'white'}}>One place for all your needs</h3>
                    <Form>
                        <div style={{width:'70%',display:'flex',justifyContent:'space-between'}}>
                            <Form.Group style={{width: '49%'}}className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email"onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group style={{width: '49%'}} className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </div>    
                        <Button onClick={()=>{
                            localStorage.setItem('userEmail',email);
                            setUser(email);
                            navigate('/')
                        }}style={{width:'70%' , marginBottom:26, backgroundColor:'#216ad9', borderWidth:1,borderColor:'white',color:'white'}}variant="primary" type="submit">
                            Start Shopping
                        </Button>
                        <div style={{color:'white'}}>
                            Join the club, <a style={{color:'white'}} onClick={()=> navigate('/signup')}>click here</a>
                        </div>
                    </Form>
                </div>
                </Col>
                <Col>
                <img src={LoginImg} style={{height: '75vh'}}/>
                </Col>
            </Row>
        </div>
    )

}