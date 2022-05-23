export const host = 'http://localhost:8080/'
export const prefix = host/*+'api/'*/
export const Urls = {
    IMGUrl:prefix+'imgs/',
    userRegisterUrl:prefix+'user/register',
    loginUrl:prefix+'login',
    isLoginUrl:prefix+'user/isLogin',

    indexImgUrl:prefix+'index/indexImg',
    categoriesUrl:prefix+'index/category',

    productByCategoryIdUrl:prefix+'product/findByCategoryId',
    productImgByIdUrl:prefix+'product/findImgByProductId',
    productByIdUrl:prefix+'product/findById',

    addShoppingCartUrl:prefix+'shoppingCart/add',
    getAllShoppingCartUrl:prefix+'shoppingCart/getAll',
    deleteShoppingCartUrl:prefix+'shoppingCart/delete',

    getAllUserAddressUrl:prefix+'userAddress/getAll',
    addUserAddressUrl:prefix+'userAddress/add',
    placeOrderUrl:prefix+'order/placeOrder'


}