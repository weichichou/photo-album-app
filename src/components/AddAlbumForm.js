import React from 'react';

export default class AddAlbumForm extends React.Component {
    state = {}

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('clicked')
        if (this.state.title){
            this.props.createAlbum(this.state.title)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type='text' name='title' value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <button type='submit'>Add</button>
            </form>
        )
    }
}