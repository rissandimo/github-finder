//App Properties
const github = new GitHub(); 
 
 // Dom Properties
const searchUser = document.getElementById('searchUser');


                                // Event Handler
function fetchUserProfile(){
    const userQuery = searchUser.value;

    if(userQuery != ''){
        
        //make HTTP call
        github.getUser(userQuery).then(data => {
            console.log(data);
        });

    }
    
}


                                    // Event listeners
searchUser.addEventListener('input', fetchUserProfile);