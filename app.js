const obj = {
    brand: 'Toyota',
    model: 'C-HR',
    year: 2023,
    src: 'chr.jpg'
}

let but1 = document.getElementById('but1')

let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')
let img = document.getElementById('img')

but1.onclick = f1

function f1() {
    out1.innerText = obj.brand
    out2.innerText = obj.model
    out3.innerText = obj.year
    img.setAttribute('src', obj.src)
}

const chek = [
    {name: 'Молоко', quantity: 1, price: 100,},
    {name: 'Капуста', quantity: 1, price: 50,},
    {name: 'Огурец', quantity: 1, price: 70,},
    {name: 'Мотоцикл', quantity: 1, price: 500000,},
]

let but11 = document.getElementById('but11')
let out11 = document.getElementById('out11')
let out12 = document.getElementById('out12')
let out13 = document.getElementById('out13')

but11.onclick = f2

function f2() {
    let str = ''
    for (x in chek) {
        str += '<tr><td>'+chek[x].name+'</td><td>'+chek[x].quantity+'</td><td>'+chek[x].price+'</td></tr>'
    }
    out11.innerHTML = str

    const total = chek.reduce((total, elem) => {
        total += elem.price + total
        return total
    }, 0)
    console.log(total)
    out12.innerText = 'Cумма всех покупок: '+total

    console.log(chek[0].price)

    let max = 0
    let namePrice = ''
    for (x in chek) {
        if (max > chek[x].price) {
            continue
        }
        else {
            max = chek[x].price
            namePrice = chek[x].name
        }
    }

    out13.innerText = 'Самая дорогая покупка: '+namePrice+' за '+max

}