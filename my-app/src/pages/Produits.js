import React from 'react'
import '../pagecss/produit.css';
import { Link } from 'react-router-dom';

function Produits  (props){

  console.log(props.info.image)
    return(

   <div >

<div className="card-container">
  <div className="card">
    <div className="card-header">
      
      
        { <img  style={{width:'100%'}}    src={props.info.image}  alt="ffffff" /> }
      
    </div>
    <div className="card-body">

      <h1 style={{ color: "red" , fontSize:"3em" }}>                    {props.info.name}</h1> 
      <h2 style={{marginTop:'1%'}}>                                     {props.info.description}</h2>
      <h2 style={{ color: "green" , fontSize:'2.5em' ,marginTop:'2%'}}> {props.info.price}</h2>

      <Link to={`/product/${props.info.slug}`}>
      
      <h3 style={{textAlign:'center' ,fontSize:"x-large"}}>   voir plus</h3>

      </Link>


    </div>
  </div>
</div>

   </div>


    )
}

export default Produits;