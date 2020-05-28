class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.gists_url}</span>
                    <span class="badge badge-success">Public Repos: ${user.followers}</span>
                    <span class="badge badge-info">Public Repos: ${user.following}</span>
                </div>
                <ul class="list-group">
                <li class="list-group-item">Company: ${user.company === null ? 'N/A' : user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog === null ? 'N/A' : user.blog}</li>
                <li class="list-group-item">Location: ${user.location === null ? 'N/A' : user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
        </div>

        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>

            </div>
    </div>
        
        
        
        
        
        
        
        `;
        
    }
}