class WuBuzz {
    wuChant(value){
        let output = "";
        for(let i = 1; i <= value; i++) {
            if(i % 3 == 0 && i % 5 == 0) {
                output += "WuTangForever";
            } else if (i % 3 == 0) {
                output += "Wu";
            } else if (i % 5 == 0) {
                output += "Tang"
            } else {
                output += i;
            }
            output += "\n"
        }
        return output;
    }
}


module.exports = WuBuzz;