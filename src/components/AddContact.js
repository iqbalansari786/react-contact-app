import React,{useState} from 'react'

function AddContact(props) {
    const [contact, setContact] = useState({
        email: "",
        mobile: "",
    })
    const onchageInputEvent = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value })
        
    }
    const formSubmit =  (e) => {
        e.preventDefault();
        if(contact.email === "" || contact.mobile === "") {
            alert("all are mandatory field !");
            return;
        }
        props.addContactHandler(contact);
        setContact({
            email:"",
            mobile: ""
        })
     
    }
    return (
        <>
            <div className="row ">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <h3 className="panel-heading">Contact form</h3>
                        <div className="panel-body">
                            <form  onSubmit={e => formSubmit(e)} method="POST">
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                     placeholder="Enter userEmail"
                                     name="email"
                                    value={contact.email}
                                    onChange={e => onchageInputEvent(e)}
                                     />

                                </div>
                                <div className="form-group">
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Enter userMobile no"
                                    name="mobile"
                                    value={contact.mobile}
                                    onChange={e => onchageInputEvent(e)}
                                    />

                                </div>
                                <input 
                                type="submit" 
                                className="btn btn-success-outline"
                                 value="Add Contact" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddContact
