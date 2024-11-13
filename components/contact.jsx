import '../style_css/contact.css'
import Header from './header'
import { useState } from 'react';
export default function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    const endpoint = `${import.meta.env.VITE_IP_Address}EmailServer/api`;

    function handleNameInput(e){
        setName(e.target.value)
    }
    function handleEmailInput(e){
        setEmail(e.target.value)
    }
    function handleMessageInput(e){
        setMessage(e.target.value)
    }

    function handleSubject(e){
        setSubject(e.target.value)
    }

    async function handleSendBtn(){
        let data = {
            "Name": name,
            "Email": email,
            "Subject": subject,
            "Message": message
        }
       
        await fetch(endpoint,{
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(res =>{
            if (res.ok){
                return res.json()
            }
            if(res === 400){
                return res.json()
            }
        })
        .then(data =>{
            if (data.message){
                alert(data.message)
                setEmail('')
                setSubject('')
                setName('')
                setMessage('')
            }
        })

        .catch(error=>{
            console.log(error)
        })

    }

    return(
        <div className='ContactContainer'>  
            <h1 id='text' style={{textAlign:'center', marginBottom:'100px'}}>Get in Touch</h1>
            <div className='bodyContactPage'>
                <div className='leftSectionContactPage'>
                    <div className='leftSectionContainerContact'>
                        <h3 className='findmeText'>Find Me</h3>
                        <div className='infoEmailText'>
                            <p>Email: minhlu14206@gmal.com</p>
                        </div>
                        <div className='infoTelText'>
                            <p>Tel: +45 503598--</p>
                        </div>
                    </div>
                </div>
                <div className='rightSectionContact'>
                    <div className='inputContainer'>
                       
                        <textarea value={name} onChange={handleNameInput} id='inputField' className='inputInfo' type="text" placeholder='Name'/>
                        
                        <textarea value={email} onChange={handleEmailInput} id='inputField' className='inputInfo' type="text" name="" placeholder='Email' />
                    </div>

                    <div className='subjectContainer'>
                      
                        <textarea value={subject} onChange={handleSubject} id='inputField' className='subjectInput' type="text" name="" placeholder='Subject' />
                    </div>
                    
                    <div className='messageInputContainer'>
                        <textarea  value={message} onChange={handleMessageInput} id='inputField' className='messageInput' type="text" name="" placeholder='Message' />
                        <button onClick={handleSendBtn} className='send-btn'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}