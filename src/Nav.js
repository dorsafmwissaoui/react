import React from 'react';
const Nav = ({activeTab, onTabChange}) => (                           //#3
   <nav className="App-nav">
   <ul>
   <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
      <NavLink index={0} onClick={onTabChange}>Items</NavLink> 
   </li>
   <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
      <NavLink index={1} onClick={onTabChange}>Cart</NavLink>
   </li>                      
   </ul>
   </nav>
);                                                                       //#3


class NavLink extends React.Component{                                    //#4
   handleClick = () =>{
      this.props.onClick(this.props.index);
   }
   render(){
      return(
         <a onClick={this.handleClick}>
            {this.props.children}
         </a>
      );
   }
}                                                                          //#4
export default Nav;

   
