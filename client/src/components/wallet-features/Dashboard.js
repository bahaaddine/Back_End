import React from 'react'
import { useState,useEffect } from "react";
import {Card, Button} from  "react-bootstrap"
function Dashboard() {
  const [search,setSearch] =useState('');
    const [record,setRecord] = useState([]);
    const username = JSON.parse(localStorage.getItem('user'));
    const [article, setArticle] = useState({
        id:"",
        image: "",
        actor: "",
        date: "",
        title: "",
        content: ""
      });
      const { image, actor, date,title,content} = article;
      const onInputChange = e => {
      setArticle({ ...article, [e.target.name]: e.target.value });

  };
  const loadEmployeeDetail = async () =>  
    {
      var response = fetch('http://localhost:4000/api/Article')
         .then(function(response){
            return response.json();
          })
         .then(function(myJson) {
            setRecord(myJson);
          });
    }
    useEffect(() => {
      loadEmployeeDetail();
    }, []);


    
  return (
    <div className="bb">
       { record.map((name)=>
        <Card style={{ width: '18rem' }}>
        <img src={name.image}  />
        <Card.Body>
          <Card.Title>{name.title}</Card.Title>
          <Card.Title><h6>{name.actor}</h6></Card.Title>
          <Card.Text>
            {name.content}
          </Card.Text>
        </Card.Body>
      </Card>
)} 
    </div>
  )
}

export default Dashboard