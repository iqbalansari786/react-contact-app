import React from 'react'
import ContactCard from './ContactCard'

function ListContact(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <h3 className="panel-heading">Contact List</h3>
                        <div className="panel-body">

                            <ContactCard contactList={props.contact}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ListContact
