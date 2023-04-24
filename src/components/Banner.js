import logo from '../assets/logo.png'

function Banner() {
    return <div className='kasa-banner'>
        <img src={logo} alt='La maison jungle' className='kasa-logo'/>
        {/*<h1>Kasa</h1>*/}
    </div>
}

export default Banner