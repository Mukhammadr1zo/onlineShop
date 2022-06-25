

function product(arr, search) {
    try{
    let products = []
        for (let i in arr) {
            let counter = 0
            let length = 0
            for (let j in search) {
                if (search[j] == arr[i][j]) {
                    counter++
                }
                length += 1
            }
            if (counter == length) {   
                products.push(arr[i]);
            }
        }

        return products
    }catch(err){
        console.log(err);
    }  

}


export default {
    product
}