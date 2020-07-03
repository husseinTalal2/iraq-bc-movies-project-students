import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
function ActorInfo({ match }) {
    console.log(match);
    const { id } = useParams();
    let {test} = useParams();
    test = "afterchanging";
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    };
    return (
        <>
            <Button onClick={handleBack}>back</Button>
            <h1>{id} actor id</h1>
            <h1>{test}</h1>
        </>
    );
}

export default ActorInfo;
