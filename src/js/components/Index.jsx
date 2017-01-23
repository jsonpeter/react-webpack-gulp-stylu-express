import  React from 'react';
import  {Link}  from "react-router";
import  Footer from './Footer';
import  Header from './Header';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>React test</h1>
                <p>Welcome to test</p>
                <a href="#/">link1</a>
                <li><Link to="/foo">About</Link></li>
                <li><Link to="/bar">Repos</Link></li>
                <Footer/>
            </div>
        );
    }
}
export default Index;