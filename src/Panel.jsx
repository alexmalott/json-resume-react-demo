import React, {Component} from "react";

class Panel extends Component {
    icon = "fa-solid fa-circle-question";
    title = "Panel";
    prefix = "Pan";
    constructor(props){
        super(props);
        this.populate = this.populate.bind(this);
    }

    itemMethod(item, key) {
        return {item, key};
    }

    populate(){
        let content = [];

        for (let i = 0; i < this.props.items.length; i++){
            if( i > 0 ){
                content.push( <hr key={this.prefix + i + "hr"}/> )
            }
            content.push( this.itemMethod( this.props.items[i], this.prefix + i ) )
        }

        return (
            content
        )
    }

    render(){
        if(this.props.items) {
            return (
                <div className="card">
                    <h3 className="card-header">
                        <i className={this.icon + " me-2"} aria-hidden="true"/> {this.title}
                    </h3>
                    {this.populate()}
                </div>
            )
        }
        else{
            return null;
        }
    }
}

export default Panel;
