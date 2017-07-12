import Link from 'next/link'
import {Nav, NavItem} from 'react-bootstrap'

function handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
}

export default ({pathname}) => (
    <div className="row">
        <div className="col-sm-2">

            <Nav bsStyle="pills" className="nav-sidebar" stacked activeKey={pathname}>
                <Link prefetch href='/'>
                    <NavItem eventKey={'/'} >Home</NavItem>
                </Link>
                <Link prefetch href='/about'>
                    <NavItem eventKey={'/about'} >About</NavItem>
                </Link>
                <style jsx>{`
                .nav-sidebar {
    width: 100%;
    padding: 8px 0;
    border-right: 1px solid #ddd;
}
.nav-sidebar a {
    color: #333;
    -webkit-transition: all 0.08s linear;
    -moz-transition: all 0.08s linear;
    -o-transition: all 0.08s linear;
    transition: all 0.08s linear;
    -webkit-border-radius: 4px 0 0 4px;
    -moz-border-radius: 4px 0 0 4px;
    border-radius: 4px 0 0 4px;
}
.nav-sidebar .active a {
    cursor: default;
    background-color: #428bca;
    color: #fff;
    text-shadow: 1px 1px 1px #666;
}
.nav-sidebar .active a:hover {
    background-color: #428bca;
}

                `}</style>
            </Nav>

        </div>
    </div>
)
