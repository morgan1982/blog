const fs = require('fs');

const output = fs.readFileSync('./data.txt', 'utf8')
                .trim()
                .split('\n')
                .map(line => line.split('  '))
                .reduce((customers, line) => {

                    customers[line[0]] = customers[line[0]] || [] // ??? check this line 
                    customers[line[0]].push({
                        name: line[1],
                        price: line[2],
                        quantity: line[3]

                    })

                    return customers
                }, {});

console.log(JSON.stringify(output, null, 2))

// let names = ["kenos", "aroto", "eme", "neme"];

// let obj = {}

// obj[names[1]] = "kairos"

// console.log(obj);