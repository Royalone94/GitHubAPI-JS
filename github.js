class Github {
    constructor() {
        this.client_id = 'eab9d91dc484861cbc99';
        this.client_secret = '767f197116775cddd99ccdca7593204719d81c6c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getProfile(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        }
    }
}