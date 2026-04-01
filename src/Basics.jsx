import React, {Component} from "react";

class Basics extends Component {
    profileIcon(network) {
        const icons = {
            facebook: "fa-brands fa-facebook",
            github: "fa-brands fa-github",
            gitlab: "fa-brands fa-gitlab",
            instagram: "fa-brands fa-instagram",
            linkedin: "fa-brands fa-linkedin",
            stackoverflow: "fa-brands fa-stack-overflow",
            twitter: "fa-brands fa-twitter",
        };

        return icons[network.toLowerCase()] || "fa-solid fa-link";
    }

    iconLink(name, content, prefix, iconClass)
    {
        if(content && iconClass) {
            return(
                    <a key={name} href={prefix + content} aria-label={name}>
                        <p className="d-none d-print-block">{name + ": " + content}</p>
                        <i className={"d-print-none p-2 fs-3 " + iconClass} aria-hidden="true"/>
                    </a>
        )
        }
    }

    profileLinks(){
        let items = [];
        this.props.items.profiles.forEach(element =>
            items.push(this.iconLink(
                element.network.charAt(0).toUpperCase() + element.network.slice(1),
                element.url,
                "",
                this.profileIcon(element.network)
            ))
        );
        return items;
    }

    render() {
        return (
            <div className="bg-light p-5 rounded-3 mb-4">
                <h1>{this.props.items.name}</h1>
                <h3 className="text-muted">{this.props.items.location.city}, {this.props.items.location.region}</h3>
                <hr style={{marginTop: "0.5em", marginBottom: "0.5em"}}/>
                <div className="row">
                        <div className="col-md-4">
                        {this.iconLink("Website", this.props.items.website, "", "fa-solid fa-globe")}
                        {this.iconLink("Email", this.props.items.email, "mailto:", "fa-solid fa-envelope")}
                        {this.iconLink("Phone Number", this.props.items.phone, "tel:", "fa-solid fa-phone")}
                        {this.profileLinks()}
                        </div>
                        <div className="col-md-8">
                            <h3 className="text-muted float-md-end">{this.props.items.summary}</h3>
                        </div>
                </div>
            </div>
        );
    }
}

export default Basics;
