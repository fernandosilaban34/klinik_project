let variable
const { hostname, port } = window.location

console.log('location', hostname)
if (['10.28.2.101'].includes(hostname)) {

    variable = {
        url_ibonline: 'http://10.28.2.101:5556/'
    }

} else if (['10.28.2.101', 'localhost'].includes(hostname)) {

    variable = {
        url_ibonline: 'http://10.28.2.101:5556/'
    }

} else {

    variable = {
        url_ibonline: 'http://10.28.2.101:5556/'
    }

}

export default variable;