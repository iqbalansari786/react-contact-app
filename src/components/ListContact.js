import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'

function ListContact(props) {
    const deletContactHandler=(id)=>{
        props.getContactid(id);
    
    };
    return (
        <>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3 className="text-center">Contact List </h3>
                        <Link to='/addContact'>
                        <button className="btn btn-primary">Add Contact</button> 
                        </Link>
                        </div>
                        
                        <div className="panel-body">

                            <ContactCard contactList={props.contact} clickHandler={deletContactHandler}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ListContact
