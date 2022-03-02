import React, {Component} from 'react';
import {UserContext} from '../../App'

export class HomePage extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {
                    (context) => (
                        <div>
                            666
                            我是 homepage {context.username}


                        </div>
                    )
                }
            </UserContext.Consumer>

        );
    }
}
