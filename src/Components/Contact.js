import React, { Component } from 'react';

export default class Contact extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            message: '',
            sentMessage: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({sentMessage: 'Message envoyé !', name: '', email: '', tel: '', message: ''});
    }

    render() {
        return (
            <div className="container page-section section-contact" id={this.props.id}>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contactez-nous</h2>
                </div>
                <div className="alert alert-success" role="alert" style={{"display": this.state.sentMessage !== "" ? "block" : "none"}}>
                    {this.state.sentMessage}
                </div>
                <form id="contactForm" onSubmit={this.submitHandler}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" name="name" placeholder="Votre Nom *" value={this.state.name} onChange={this.changeHandler} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" name="email" placeholder="Votre Email *" value={this.state.email} onChange={this.changeHandler} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="te" type="tel" name="tel" placeholder="Votre Téléphone" value={this.state.tel} onChange={this.changeHandler} />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" name="message" placeholder="Votre Message *" value={this.state.message} onChange={this.changeHandler}></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Envoyer Message</button>
                    </div>
                </form>
            </div>
        );
    }
}











