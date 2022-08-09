// I want good control flow and function encapsulation for this project. 
// I don't want just lines and lines of code written in the global scope or in one huge function.

// When page loads, make a get request that gets all users and creates divs for each user. 
    // Each user div should have the users name, username, and city they are located in.
    // when a div is clicked on, it should fetch all posts associated with the user id.
 
    
    const container = document.querySelector('#container')
    const containerPost = document.createElement("div")
    const backButton = document.createElement('button')
    backButton.innerText = "Back"
    // example()
    // function example() {
    //     $.get([some url here], [some callback function that gets access to data here])
    // }
    buttonEvent()
    backBtn()
    hidePost()
    function buttonEvent() {
        const getBtn = document.getElementById("btn")
        getBtn.addEventListener('click', getUsers)
    }
    function getUsers() {
        $.get("https://jsonplaceholder.typicode.com/users", logUsers)
    }
    function logUsers(userInfo) {
        for (var i = 0; i < userInfo.length; i++) {
            const currentUser = userInfo[i]
            createDiv(currentUser)
        }
    }
    function createDiv(object) {
        const currentUserDiv = document.createElement('div')
        currentUserDiv.className = "homePage"
        currentUserDiv.id = object.id
        currentUserDiv.innerText = `Name: ${object.name}, Username: ${object.username}, City: ${object.address.city}`
        container.appendChild(currentUserDiv)
        clickId(object.id)
    }
    function clickId(id) {
        const idUser = document.getElementById(id)
        idUser.addEventListener('click', function (e) {
            const id = e.target.id
            $.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, getPost)
        })
    }
    function getPost(postData) {
        for (var i = 0; i < postData.length; i++) {
            var userPost = postData[i]
            createDivPost(userPost)
        }
    }
    function createDivPost(userPost) {
        const postDiv = document.createElement("div")
        postDiv.className = "postPage"
        postDiv.innerText = `${userPost.title}`
        containerPost.append(postDiv)
        document.body.append(containerPost)
    }
    function backBtn() {
        containerPost.appendChild(backButton)
        backButton.addEventListener('click', () => {
            $(container).show()
            hidePost()
        })
    }
    function hidePost() {
        backButton.addEventListener('click', () => {
            $(containerPost).hide()
            backBtn()
        })
    }  
    


    // // example()

// // function example() {
// //     $.get([some url here], [some callback function that gets access to data here])
// // }

