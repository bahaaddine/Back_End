import React from 'react'
import {Modal,Button,InputGroup,FormControl} from 'react-bootstrap'
import {useState} from 'react'
import {useParams} from 'react-router-dom';

const Addmodel = () => {
  const params = useParams();
  const [image, setImage] = useState("");
  const [actor, setActor] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()

    


    fetch(`http://localhost:4000/api/Article/${params.id}`, {
      method: 'put', headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: image,
        actor: actor,
        date: date,
        title: title,
        content: content,
        
        
      }
      )
    }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        //setName("")
        //setEmail("")
        //setPassword("")
        //setPasswordConfirmation("")
        window.location = "/admindash"
      });



  }

  return (
    <form onSubmit={handleSubmit}>
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Update article</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
    <span>Image</span>
    </InputGroup.Text>
    <input type="text"
                          value={image} onChange={(e) => setImage(e.target.value)} 
                          />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      <span>Actor</span>
    </InputGroup.Text>
    <input type="text" 
                          value={actor} onChange={(e) => setActor(e.target.value)} />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
     <span>Title</span>
    </InputGroup.Text>
    <input type="text"
                          value={title} onChange={(e) => setTitle(e.target.value)} />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
    <span>content</span>
    </InputGroup.Text>
    <input type="text" 
                          value={content} onChange={(e) => setContent(e.target.value)}/>
  </InputGroup>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary" type='submit'>update</Button>
  </Modal.Footer>
</Modal.Dialog>
</form>
  )
}

export default Addmodel