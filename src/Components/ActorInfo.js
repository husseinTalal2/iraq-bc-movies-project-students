import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
function ActorInfo() {
    const { id } = useParams();

    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    };
    return (
        <>
            <Button onClick={handleBack}>back</Button>
            <h1>{id} actor id</h1>
        </>
    );
}

export default ActorInfo;
