                                    //App Properties
const github = new GitHub(); 
const ui = new UI();
 
                                    // Dom Properties
const searchUser = document.getElementById('searchUser');


                                // Event Handler
function fetchUserProfile(){
    const userQuery = searchUser.value;

    if(userQuery != ''){
        
        //make HTTP call
        github.getUser(userQuery).then(data => {
            if(data.profile.message === 'Not Found'){ // User not found
                //Show alert
            }else{
                console.log(data.profile);
                
                ui.showProfile(data.profile);
            }
        });

    }
    else{ // clear inputs
        //clear profile
    }
    
}


                                    // Event listeners
searchUser.addEventListener('input', fetchUserProfile);