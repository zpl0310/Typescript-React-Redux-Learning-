//src/components/Item.tsx

import * as React from 'react';

export interface ItemProps {
    name: string;
    count?: number;
}
 
export interface ItemState {
    curCount: number;
}
 
class Item extends React.Component<ItemProps, ItemState> {
    constructor(props: ItemProps) {
        super(props);
        this.state = {curCount: props.count || 0};
    }

    onIncrement = () => this.updateCount(this.state.curCount + 1);
    onDecrement = () => this.updateCount(this.state.curCount - 1);
    render() { 
        const { name } = this.props;

        if (this.state.curCount < 0) {
            throw new Error("Number of Item Could Not Be Negative!")
        }

        return (  
            <div>
                <button onClick = {this.onDecrement}>-</button>
                <div>
                    {displayMessage(this.state.curCount,name)}
                </div>
                <button onClick = {this.onIncrement}>+</button>
            </div>
        );
    }

    updateCount(curCount: number) {
        this.setState({curCount});
    }
}
 
export default Item;

function displayMessage(num: number, name: string) {
    return Array(num + 1).join(name+" ");
}