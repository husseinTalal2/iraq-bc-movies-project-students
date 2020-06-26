import React from "react";
import { Form, FormControl, Button, Spinner } from "react-bootstrap";
function SearchBox(props) {
    return (
        <Form inline>
            <Spinner className = {props.spin} animation="border" variant="danger" />
            <FormControl onChange={props.handle} type="text" placeholder="Search" className="mr-sm-2" />

            <Button variant="outline-success">Search</Button>
        </Form>
    );
}

export default SearchBox;
