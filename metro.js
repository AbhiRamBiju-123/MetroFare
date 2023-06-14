const start = document.getElementById('from')
const end = document.getElementById('to')
const payment = document.getElementById('payment')
const answer = document.getElementById('result')

let n1, n2, mode;

start.addEventListener('change', ()=> {
    n1 = start.selectedIndex
})
end.addEventListener('change', () => {
    n2 = end.selectedIndex
})

payment.addEventListener('change', () => {
    mode = payment.selectedIndex
})

const calc = () => {
    let fare
    let totalstations = (Math.abs(n1 - n2)+1)
    if(totalstations<=2)fare =10
    else if(totalstations<=5)fare =20
    else if(totalstations<=8)fare =30
    else if(totalstations<=12)fare =40
    else if(totalstations<=17)fare =50
    else if(totalstations<=24)fare =60
    else {
        fare = Math.ceil(totalstations/4)*10
    }
    if(fare > 60)fare = 60
    if(mode == 1 && fare >=20)fare = (fare)*0.9
    answer.innerHTML = fare
}