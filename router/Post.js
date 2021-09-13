const router = require('express').Router()
const PostController = require('../controller/ModelPostController')
const verify = require('../Jwt/Verfiy')
const Admin    = require('../Jwt/isAdmin')

// ALL posts... 
router.get('/post/post/', PostController.AllPost)


// create post... first params..
router.post('/post/create/', verify, Admin, PostController.CreatePost )

router.get('/post/post/:id/', PostController.postId)


router.delete('/post/post/:id/', PostController.DeletePost)



router.put('/post/post/edit/:id/',PostController.PostEdit)

// add commit... 
router.post('/post/post/commit/:id/',  verify, PostController.AddCommit)

// delete commit from post. 
router.delete('/post/post/:id/:commitId/', PostController.deletemYCommit)



// update commit..... test. 
router.put('/post/post/update/:id/:updateCommit/',PostController.uploadingCommit)



module.exports = router