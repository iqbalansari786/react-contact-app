import React from 'react'
import { logo } from '../images/contactLogo.png'

const ContactCard = (props) => {
    var contactListDetail=null;
    if(! props.contactList.length > 0) {
        contactListDetail=<h3 className="text-center">there is no contact </h3>;
    }
   else {
     contactListDetail = props.contactList.map(contact => {

        return (
            <>

                <div className="row">
                    <div className="col-md-4">
                        <div className="col-md-12">${contact.email}</div>
                        <div className="col-md-12">${contact.mobile}</div>
                    </div>
                    <div className="col-md-8">
                        <p class="text-right" onClick={()=>{props.clickHandler(contact.id)}} style={{cursor:"pointer"}}>Delete</p></div>

                </div>
                <hr />


            </>
        )
    });
}

    return (
        <>
            {contactListDetail}
        </>
    )
}
export default ContactCard;