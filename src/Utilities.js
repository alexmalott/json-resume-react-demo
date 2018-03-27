import React from "react"

function dateString(date) {
    let result = date;
    let parsedDate = new Date(date);

    if (!isNaN(parsedDate.getMilliseconds())) {
        result = parsedDate.toLocaleString("en-us", {month: "long"}) + " " + parsedDate.getFullYear();
    }
    return result;
}

function arrayToList(array){
    let content = [];

    for (let i = 0; i < array.length; i++){
        content.push( <li>{array[i]}</li> )
    }

    return (
        <ul>{content}</ul>
    )
}

export {arrayToList, dateString}