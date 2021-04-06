import React, {Component} from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {

    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        let val= this.state.showSideDrawer;
        this.setState({showSideDrawer:!val});
    }


    render() {
        return (
            <Aux>
                <Toolbar click={this.sideDrawerClosedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <div>Toolbar, sidebar and Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
