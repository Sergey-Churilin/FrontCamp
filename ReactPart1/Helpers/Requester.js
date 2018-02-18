const requester = {
    getPosts: function(){
        const url = "http://localhost:3000/posts";
        return fetch(url)
            .then(response => response.json())
            .then(response => this.fire(response))//return response;
            .catch(error => {
                console.log(error);
                return error;
            });
    }
};

module.exports = requester;