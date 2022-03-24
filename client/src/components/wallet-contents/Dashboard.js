import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
 
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

    // Insert Employee Records 
    const submitEmployeeRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        await axios.post("http://localhost:4000/api/Article",article);
        alert('Data Inserted');
         
        loadEmployeeDetail();
    };
    const searchRecords = () =>
    {
        alert(search)
        axios.get(`http://localhost:4000/api/v1/employee/searchRecord/${search}`)
        .then(response => {
          setRecord(response.data);
        });
    }
    const deleteRecord = (ArticleId) =>
    {
      axios.delete(`http://localhost:4000/api/Article/${ArticleId}`)
      .then((result)=>{
        loadEmployeeDetail();
      })
      .catch(()=>{
        alert('Error in the Code');
      });
    };

  return (
    <div>
    <section>  
     <nav class="navbar navbar-expand-lg navbar-light bg-dark">
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
       <li class="nav-item active ">
         <a class="nav-link text-white" >Crypto {JSON.parse(localStorage.getItem("user"))}</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
       <li class="nav-item">
          <a class="nav-link text-white" href="#">Detail</a>
      </li>
       <li class="nav-item">
          <a class="nav-link text-white" href="#">Address</a>
       </li>
       <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
       </li>
      </ul>
     </div>
    </nav>   
   
    <div class="container">  
    <h4 className="mb-3 text-center mt-4">CRUD Operation in MERN</h4>
      <div class="row mt-3">
       <div class="col-sm-4">
          <div className="box p-3 mb-3 mt-5" style={{border:"1px solid #d0d0d0"}}>
            <form onSubmit={submitEmployeeRecord}> 
            <h5 className="mb-3 ">Insert Article Records</h5>
                <div class="form-group">
                   <input type="text" class="form-control  mb-4" name="image"  onChange={e => onInputChange(e)} placeholder="Link Image"></input>
                </div>
                  
                <div class="form-group">
                   <input type="text" class="form-control  mb-4" name="actor"  value={actor} onChange={e => onInputChange(e)} placeholder="actor name" />
                </div>
     
                <div class="form-group">
                   <input type="text" class="form-control mb-4" name="date" value={date} onChange={e => onInputChange(e)}  placeholder="date" />
                </div>
               
                <div class="form-group">
                   <input type="text" class="form-control mb-4" name="title" value={title} onChange={e => onInputChange(e)} placeholder="title" />
                </div>
 
                <div class="form-group">
                   <textarea rows="5" cols="33" class="form-control mb-2" name="content"   onChange={e => onInputChange(e)} placeholder="Content Article" />
                </div>
               
                <button type="submit" class="btn btn-primary btn-block mt-4">Insert New article</button>
             </form>
        </div>
      </div>
      <div class="col-sm-8"> 
        <table class="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>id</th>
                <th>image link</th>
                <th>actor</th>
                <th>date</th>
                <th>title</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
     
            { record.map((name)=>
                <tr>
                <td>{name._id}</td>
                <td>{name.image}</td>
                <td>{name.actor}</td>
                <td>{name.date}</td>
                <td>{name.title}</td>
        
        
        
                <td>
                      <a  className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete "+ name.title
                          )
                          if (confirmBox === true) {
                            deleteRecord(name._id)
                          }
                        }}> <i class="far fa-trash-alt" style={{fontSize:"18px",marginRight:"5px"}}></i> </a>
                   
                    <Link class=" mr-2" to={`/update/${name._id}`}>
                       <i class="fa fa-edit" aria-hidden="true"></i> 
                    </Link>
                </td>
                </tr>
                )}  
            </tbody>
        </table>
      </div>
      </div>
    </div>
   </section>
    </div> 
  )
}

export default Dashboard