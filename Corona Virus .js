const str2 = "coronavirus"
const N = 4
if(N <= 1 && N >= 10) {
    console.log("N between 1 to 10")
}
else {
    const sample = ["abcde","crnas","onerous","viruscorona"]
    let count = 0
    let n = str2.length
    while(count < N) {
        let m = sample[count].length
        if(m >= 1 && m <= (10^5) || n <= 1 && n <= (10^5)) {
            let j = 0
            let i = 0
            while(j < m && i < n) {
                if(sample[count][j] == str2[i]) {
                    j = j + 1
                }
                i = i + 1
            }
            if(j == m) {
                console.log("POSITIVE")
            } else {
                console.log("NEGATIVE")
            }
        } else {
            console.log("sample or virus is invalid")
        }
        count = count + 1
    }
}
