const PostModel = require('../model/Post')
const Object = require('mongoose').Types.ObjectId

// create Post... 
exports.CreatePost = async (req, res) => {
    const { user, name, image, prics, quantity, description, sort } = req.body


    try {
        let post = await PostModel.create({
            user : req.user._id,
            name,
            image,
            prics,
            quantity,
            description,
            sort
        })

        const newPost = await post.save()
        return res.status(201).json(newPost)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }



}


// show all Posts 
exports.AllPost = async (req, res) => {
    try {
        let post = await PostModel.find({})
        if (post) return res.json(post)
        else return res.status(404).jsoun({ message: 'we have not post..' })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

// post id 
exports.postId = async (req, res) => {

    if (!Object.isValid(req.params.id)) return res.status(404).json({
        message: ` id not ${req.params.id}`
    })
    try {
        let post = await PostModel.findById({ _id: req.params.id })
        if (post) return res.status(200).json(post)

        return res.status(404).json({
            message: 'we have not Post id...'
        })


    } catch (error) {


        return res.status(404).json({
            message: error.message
        })
    }
}



// Delete Post.. 
exports.DeletePost = async (req, res) => {

    if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `id ${req.params.id}` })
    try {
        let post = await PostModel.findById({ _id: req.params.id })
        if (post) {
            await post.remove()

            return res.status(201).json({ message: 'remove post id' })
        } else {
            return res.status(201).json({ message: 'we have not post id' })
        }

    } catch (error) {

        return res.status(404).json({
            message: error.message
        })
    }
}


// post Update 
exports.PostEdit = async (req, res) => {
    const { user, name, image, prics, quantity, description, sort } = req.body
    if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `not id ${req.params.id}` })

    try {
        let post = await PostModel.findById({ _id: req.params.id })
        if (post) {


            const saveOk = await PostModel.updateOne({ _id: req.params.id }, { user, name, image, prics, quantity, description, sort })

            return res.status(201).json(saveOk)
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}





// add Commit ... 
exports.AddCommit = async (req, res) => {

    if (!Object.isValid(req.params.id) && !Object.isValid(req.body.username))
        return res.status(404).json({ message: `not id ${req.params.id}` })
    const { username, rating, userCommit } = req.body

    try {
        let post = await PostModel.findById({ _id: req.params.id })
        if (post) {

            const addCommti = {
                username : req.user.username,
                rating,
                userCommit,
                date: Date.now()
            }
            post.commit.push(addCommti)
            post.rating = rating
            const newCommitSave = await post.save()
            return res.status(201).json(newCommitSave)

        } return res.status(404).json({ message: 'not have post id' })
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }


}


// delete my commit ........>>>
exports.deletemYCommit = async (req, res) => {
    if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `id ${req.params.id}` })

    try {

        let post = await PostModel.findById({ _id: req.params.id })
        if (post) {
            const checkId = post.commit.filter((user) => user._id.toString() !== req.params.commitId.toString())
            if (checkId) {

                post.commit = checkId
                const newSave = await post.save()
                return res.status(201).json(newSave)
            }
            else return res.status(404).json(post)
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}



// Update commit ....>
exports.uploadingCommit = async (req, res) => {
    if (!Object.isValid(req.params.id)) return res.status(404).json({ message: `id ${req.params.id}` })

    const {
        username,
        rating,
        userCommit,


    } = req.body

    try {
        let post = await PostModel.findById({ _id: req.params.id })
        if (post) {
            const checkCommit = post.commit.find((cx) => cx.id.toString() === req.params.updateCommit.toString())
            if (checkCommit) {

                checkCommit.username = username
                checkCommit.rating = rating
                checkCommit.userCommit = userCommit
                checkCommit.date = Date.now()


                const newSaveUpdate = await post.save()


                return res.status(200).json(newSaveUpdate)
            } else {
                return res.status(404).json({
                    message: 'not have commit id.'
                })
            }
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}


