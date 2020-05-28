                                    //App Properties
const github = new GitHub(); 
const ui = new UI();
 
                                    // Dom Properties
const searchUser = document.getElementById('searchUser');


                                // Event Handler
function fetchUserProfile(){
    const userQuery = searchUser.value;

    if(userQuery != ''){ // user query

        //make HTTP call
        github.getUser(userQuery).then(data => {
            if(data.profile.message === 'Not Found'){ // User not found
                ui.showAlert('User not found', 'alert alert-danger');
            }else{  // user found
                console.log(data.profile);
                ui.showProfile(data.profile);
            }
        });
    }
    else{ // no user query / cleared inputs
        ui.clearProfile();
    }
    
}


                                    // Event listeners
searchUser.addEventListener('input', fetchUserProfile);