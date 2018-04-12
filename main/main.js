// Write your cade below:
function guess_number(system,user) {
    let count = [0,0]
    for(let i = 0;i < system.length;i++){
        for(let j = 0;j < user.length;j++){
            if(system[i] == user[j]){
                if(i==j){
                    count[0]++
                }else{
                    count[1]++
                }
            }
        }
    }
    console.log(`${count[0]}A${count[1]}B`)
    return `${count[0]}A${count[1]}B`
};
module.exports = guess_number;