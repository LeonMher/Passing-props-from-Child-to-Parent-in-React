import React from 'react';


class Child extends React.Component {
    render() {
        return (
            <>
                <h1>Child</h1>
                <h2>{this.props.data.name}</h2>
                <button onClick={() => this.props.data.changeName("Child name")}>child buton</button>

            </>
        )
    }
}


export default Child;