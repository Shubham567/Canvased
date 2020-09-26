export const posToArray = (pos,width,height) => {
    let ci = 0;
    let arr = [];
    for (let i = 0; i < height; i++){
        let subArr = [];
        for(let j = 0; j < width; j++){
            subArr.push(pos[ci++]);
        }
        arr.push(subArr);
    }

    return arr;
}