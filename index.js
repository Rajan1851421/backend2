require('dotenv').config()
const express = require('express')
const app = express()



data={
    "login": "Rajan1851421",
    "id": 105105537,
    "node_id": "U_kgDOBkPIgQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/105105537?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rajan1851421",
    "html_url": "https://github.com/Rajan1851421",
    "followers_url": "https://api.github.com/users/Rajan1851421/followers",
    "following_url": "https://api.github.com/users/Rajan1851421/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rajan1851421/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rajan1851421/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rajan1851421/subscriptions",
    "organizations_url": "https://api.github.com/users/Rajan1851421/orgs",
    "repos_url": "https://api.github.com/users/Rajan1851421/repos",
    "events_url": "https://api.github.com/users/Rajan1851421/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rajan1851421/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rajan prajapati",
    "company": "crazy soft coder pvt ltd.",
    "blog": "",
    "location": "Varanasi",
    "email": null,
    "hireable": null,
    "bio": "01/04/1998",
    "twitter_username": null,
    "public_repos": 61,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-05-07T09:31:13Z",
    "updated_at": "2024-03-18T12:18:04Z"
    }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/git',(req,res)=>{
    res.send(data)

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})