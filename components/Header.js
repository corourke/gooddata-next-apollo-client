import Link from 'next/link'

export default ({ pathname }) => (
  <header>
    <Link prefetch href='/'>
      <a className={pathname === '/' && 'is-active'}>Home</a>
    </Link>

    <Link prefetch href='/about'>
      <a className={pathname === '/about' && 'is-active'}>About</a>
    </Link>

    <style jsx>{`
      header {
        margin-bottom: 50px;
        background-color: #EEE;
        padding: 10px 0px;
      }
      a {
        font-size: 16px;
        margin: 0;
        padding: 8px 20px;
        text-decoration: none;
        color: grey;
      }
      a.hover {
        background-color: #DDD;
      }
      .is-active {
        border-style: none none solid;
        color: #4B9696;
        border-width: 2px;

      }
    `}</style>
  </header>
)
