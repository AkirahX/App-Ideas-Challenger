class bin2dec {
    async bin2dec(bin){
        let binary = bin
        let dec = parseInt(binary, 2)

        console.log(`O binário ${bin} é equivalente ao decimal ${dec}.`)
    }
}

module.exports = bin2dec