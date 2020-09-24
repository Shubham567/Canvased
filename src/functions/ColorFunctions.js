export const getRandomColorWithA = (alpha = 1) => {
    let r = Math.floor(255 * Math.random());
    let g = Math.floor(255 * Math.random());
    let b = Math.floor(255 * Math.random());
    return  "rgba("+r+","+g+","+b+","+alpha+")";
}
export const getRGBAString = (r,g,b,a) => {
    return  "rgba("+r+","+g+","+b+","+a+")";
}