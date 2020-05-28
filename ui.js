class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <!-- Results -->
        <div id="profile">
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
        
                        <div class="repo-info">
                        <!-- repo info -->
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Public Repos: ${user.followers}</span>
                        <span class="badge badge-info">Public Repos: ${user.following}</span>
                        </div>
        
                            <!-- user info -->
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company === null ? 'N/A' : user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog === null ? 'N/A' : user.blog}</li>
                            <li class="list-group-item">Location: ${user.location === null ? 'N/A' : user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
        
                    </div>
                </div>
            </div><!-- End of card -->

            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>

        </div> <!-- End of profile -->
        
        `;
        
    }
}