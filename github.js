class GitHub{
    //https://api.github.com/users/rissandimo - user
    //https://api.github.com/users/rissandimo/repos - repo
    constructor(){
        this.clientID = '70003a45c0e94445abd7';
        this.clientSecret = 'cfd3fc37b8f01e0f270798347f3571588f4e6629';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.clientID}?
        clientSecret=${this.clientSecret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}