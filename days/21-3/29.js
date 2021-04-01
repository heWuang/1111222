// 打印一个三角形
function sanjiaoxing(str) {
    let len = str.length
    let res = []
    let n = 0
    let last = ''
    while (Math.pow(n + 1, 2) <= len) {
        res.push(str.substring(Math.pow(n, 2), Math.pow(n + 1, 2)))
        n++
    }
    if (len - Math.pow(n, 2)) {
        last = str.substring(n * n)
        res.push(last)
    }
    let leng = res.length
    console.log(res);
    res.forEach(ele => {
        console.log(' '.repeat(leng--) + ele)
    })
}

sanjiaoxing('sdhakjldhaskldhlaskdhlsa')


// 爬楼梯

function louti(n) {
    let f = []
    f[1] = 1
    f[2] = 2
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
}