class SearchService {
    constructor(){
        this._token = localStorage.getItem("social_user_token");
    }
    serchPeople(userName){
        return new Promise((resolve, reject) => {
            fetch(` ${env.apiUrl}/public/users/search-users/`, {
                method: 'POST',
                body: JSON.stringify({
                    search_text: userName
                }),
                headers: {
                    "Content-type": "application/json",
                    "x-access-token": this._token
                }
            })
                .then(response => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
}
