import React from 'react';
import Room from '../../containers/Room/Room';
import MyComponent from '../Task/Task';
import {Switch, NavLink, Route} from 'react-router-dom';

function Home({children}) {

    const fullscreen = true;

    const sectionClassList = fullscreen ? 'section fullscreen' : 'section';

    const sectionStyles = {
        section: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#222'
        },
        fullscreen: {
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#ddd',
            position: 'absolute'
            // paddingTop: '100px',
        }
    }

    alert('fwefwe');

    return (

        <div 
            className={sectionClassList} 
            style={fullscreen ? sectionStyles.fullscreen : sectionStyles.section}
        >

            
            
            <div className="product__content">
                {/* <Switch>
                    <Route exact path='/' component={Room} />
                    <Route path='/task' component={MyComponent} />
                </Switch> */}
                {children}
            </div>


                {/* <Room></Room> */}
        </div>
    )
}

export default Home;