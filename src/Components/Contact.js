import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: this.state
        }).then((response) => {
          if(response.data.status === 'success'){
            alert("Le message est envoyé."); 
            this.resetForm()
          } else if(response.data.status === 'fail'){
            alert("Le message n'a pas pu être envoyé.")
          }
        })
    }
    
    resetForm(){    
        this.setState({name: "", email: "", message: ""})
    }

    render() {
        return (
            <div className="container page-section section-contact" id={this.props.id}>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contactez-nous</h2>
                </div>
                <form id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Votre Nom *" required="required" data-validation-required-message="Vous n'avez pas encore entré votre nom." value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Votre Email *" required="required" data-validation-required-message="Vous n'avez pas encore entré votre email." value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Votre Message *" required="required" data-validation-required-message="Vous n'avez pas encore entré votre message." value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
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

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}











