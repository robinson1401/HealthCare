import db from '../models/index';
let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render('homePage.ejs',{
            data: JSON.stringify(data),
        });
    } catch(e){
        console.log(e);
    }

    // return res.render('homePage.ejs');
}

module.exports = {
    getHomePage: getHomePage,
}