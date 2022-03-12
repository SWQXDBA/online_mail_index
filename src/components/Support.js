export const host = 'http://localhost:8080/'
export const prefix = host/*+'api/'*/
export const Urls = {
    userRegisterUrl:prefix+'user/register',
    loginUrl:prefix+'login',
    indexImgUrl:prefix+'index/indexImg',
    categoriesUrl:prefix+'index/category',
    productByCategoryIdUrl:prefix+'product/findByCategoryId',
    productImgByIdUrl:prefix+'product/findImgByProductId',
    productByIdUrl:prefix+'product/findById',
    addShoppingCartUrl:prefix+'shoppingCart/add',
    getAllShoppingCartUrl:prefix+'shoppingCart/getAll'

}