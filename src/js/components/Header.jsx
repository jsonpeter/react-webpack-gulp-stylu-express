import  React from 'react';
class Header extends React.Component {
    handleChange(event) {
        this.setState({menuClass: 'show-menu'});
        console.log(event.target)
     }
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            text: 'testing....',
            menuClass:''
        };
        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <header className={this.state.menuClass}>
                <a className='bar flex-one' onClick={this.handleChange}><i className="icon-reorder"></i></a>
                <a className='bar flex-three'>{this.state.text}</a>
                <a className='bar flex-one'><i className="icon-user"></i></a>
            </header>
        );
    }
}
export default Header;