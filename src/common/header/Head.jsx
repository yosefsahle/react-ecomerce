import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            
            <label> <a href=""><i className='fa fa-phone'></i>+251 94 744 9009</a></label>
            
            <label> <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"><i className='fa fa-envelope'></i>zohar@info.com</a></label>
          </div>
          <div className='right row RText'>
            <label><a href="https://github.com/ab3lT" target="_blank"><i class="fa-brands fa-github"></i>Abel</a> </label>
            <label><a href="https://github.com/chalacol" target="_blank"><i class="fa-brands fa-github"></i>Chala</a></label>
            {/* <span>🏳️‍⚧️</span> */}
            <label><a href="https://github.com/t-ageru24" target="_blank"><i class="fa-brands fa-github"></i>Tadesse</a></label>
            {/* <span>🏳️‍⚧️</span> */}
            <label><a href="https://github.com/yosefsahle" target="_blank"><i class="fa-brands fa-github"></i>Yosef</a></label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
