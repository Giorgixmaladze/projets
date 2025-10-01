const { User } = require('../model/users.model');

//ყველა მომხმარებლის წამოღება(at this time for test)
const getAllUsers = catchAsync(async (req, res) => {

    const users = await User.find();
    res.json(users)


})
// მხოლოდ ერთი მომხმარებლის წამოღება id ის ან email ის მეშვეობით(როცა ავთენტიკაცია მოხდება მომხმარებლის პროფილზე უნდა გამოჩნდეს მისი მონაცემები)
const getSingleUser = catchAsync(async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.json(user)

})
// ახალი მომხმარებლის დამატება(რეგისტრაციისთვის)
const addUser = catchAsync(async (req, res) => {
    const user = await User.create(req.body);
    res.json(user)


})

module.exports = {
    getAllUsers, addUser, getSingleUser
}
