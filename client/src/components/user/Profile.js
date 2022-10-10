import React, { Fragment, useState, useEffect } from 'react' 
import MetaData from '../layout/MetaData'
  
const Profile = () => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('profile'));
    if (items) {
        setProfile(items);
    }
    }, []);
   

   console.log('profile',profile)
   
   const UserList = ({name}) => {
    const [firstname, setFirstname] = useState(name);
     
    
    return(
        <div className="row wrapper">
        <div className="col-10 col-lg-5">
            <form className="shadow-lg p-3 mb-5 bg-white rounded">
             <h1 className="mb-3">Authentication</h1>
             <div className="col-md-8">
                   {firstname.substring(0,2)}
                </div>
                <div className='row'>
                <div className="col-6"> 
                <button
                        id="login_button"
                        type="submit"
                        className="btn btn-block py-3">
                        LOGIN
                </button>
                </div>
            </div>  
             </form>
        </div>
    </div> 
     )
   }

    return (
        <Fragment>
               <MetaData title={'Profile'} />
                {profile.map((item, id) =>{
                    return (
                      
                     <UserList key={id} data={item} name={item.firstname}/>
                     

                   )
                })}
                
        </Fragment>         
       
    )
}

export default Profile
