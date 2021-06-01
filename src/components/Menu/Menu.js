import React, { Component } from 'react';
import { Route,Link} from 'react-router-dom';

const MenuLink=({label,to, activeOnlyWhenExact})=>{
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
          var active=match?'my-active':'';
          return (
            <li className={active}>
                <Link to={to} className="my-link">{label}</Link>
            </li>
          )
      }}></Route>
    )
  }

  const menus=[
        {
            name:'Trang Chủ',
            to:'/',
            exact:true
        },
        {
            name:'Quản Lý Sản Phẩm',
            to:'/products-list',
            exact:false
        },
  ]
class Menu extends Component {
    showMenu=(menus)=>{
        var result=null;
        if(menus.length>0){
            result=menus.map((item,index)=>{
                return (
                    <MenuLink key={index} label={item.name} to={item.to} activeOnlyWhenExact={item.exact}></MenuLink>
                )
            })
        }
        return result;
    }
    render() {
        return (
            <div className="navbar navbar-inverse">
                <span className="navbar-brand">CALL API</span>
                <ul className="nav navbar-nav">
                   {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;