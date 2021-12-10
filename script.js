function checkageindays() {
    let birth_year =   prompt('Enter Your Birth Year. :)')
    let ageindays = ( 2021 - birth_year) * 365


    let h1 = document.createElement('h1')

    h1.setAttribute('id', 'result_in_days')

    let Text_wirte = document.createTextNode('Your Are ' + ageindays + " Days Old" )

    h1.appendChild(Text_wirte)
    
    document.getElementById('result').appendChild(h1)
}

function reset_all() {
    document.getElementById('result_in_days').remove()
}