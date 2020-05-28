class GitHub{
    //https://api.github.com/users/rissandimo - user
    //https://api.github.com/users/rissandimo/repos - repo
    constructor(){
        this.clientID = '70003a45c0e94445abd7';
        this.clientSecret = 'cfd3fc37b8f01e0f270798347f3571588f4e6629';
        this.reposQuantity = 5;
        this.repos_sort_asc = 'created: asc';
    }

    async getUser(user){

        //profile API call
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.clientID}?
        clientSecret=${this.clientSecret}`);

        //Repo API call - 5 latest repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposQuantity}&sort=${this.repos_sort_asc}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);
                                    

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}