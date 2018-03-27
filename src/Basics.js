import React, {Component} from "react";

class Basics extends Component {
    iconlink(name, content, prefix, icon)
    {
        if(content && icon) {
            return(
                    <a href={prefix + content} aria-label={name}><p className="d-none d-print-block">{name + ": " + content}<br/></p><i className={"d-print-none p-2 fa fa-2x " + icon}/></a>
        )
        }
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>{this.props.items.name}</h1>
                <h3 className="text-muted">{this.props.items.location.city}, {this.props.items.location.region}</h3>
                <hr/>
                <div className="row">
                        <div className="col-md-4">
                        {this.iconlink("Website", this.props.items.website, "", "fa-globe")}
                        {this.iconlink("Email", this.props.items.email, "mailto:", "fa-envelope")}
                        {this.iconlink("Phone Number", this.props.items.phone, "tel:", "fa-phone")}
                        {this.iconlink("GitHub", this.props.items.profiles[0].url, "", "fa-github")}
                        </div>
                        <div className="col-md-8">
                            <h3 className="text-muted float-right">{this.props.items.summary}</h3>
                        </div>
                </div>
            </div>
        );
    }
}

export default Basics;