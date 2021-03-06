const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if(userText !== '') {
        console.log("User Text: ", userText);
        //Make Http call
        github.getProfile(userText)
            .then(data => {
                console.log("Data: ", data);
                if(data.profile.message === 'Not Found') {
                    //Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show Profile
                    ui.showProfile(data.profile);
                    //Show Repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear Profile 
        ui.clearProfile();
    }
});