import React from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
export class Item {
    @observable name
    @observable completed = false
    constructor(name) {
        this.name = name
    }

    render(){
        let item = this.props.item
        return(
            <div>
                {item.name}
            </div>
        )
    }
}