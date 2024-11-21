/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";

// reactstrap components
import {Col, Container, Row} from "reactstrap";

export default function PageHeader() {
    const [incidents, setIncidents] = useState([]);
    const [numberOfElements, setNumberOfElements] = useState(-1);

    const fetchIncident = async () => {
        try {
            const paginationRawResponse =
                await fetch("https://api.noflee.com/public/incident/v1?pageRequest=0", {
                    headers: {"Content-Type": "application/json"},
                    method: 'GET',
                });
            console.log(paginationRawResponse)
            console.log("--------")
            const jsonResponse = await paginationRawResponse.json();
            console.log(jsonResponse)

            const {content, numberOfElements} = jsonResponse;
            setIncidents(content);
            setNumberOfElements(numberOfElements);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    useEffect(() => {
        fetchIncident()
    }, []);

    return (
        <div className="page-header header-filter">
            <div className="squares square1"/>
            <div className="squares square2"/>
            <div className="squares square3"/>
            <div className="squares square4"/>
            <div className="squares square5"/>
            <div className="squares square6"/>
            <div className="squares square7"/>
            <Container>
                <ApplicationView>
                    <div className="content-center brand">
                        <Row>
                            <Col>
                                <MobileApplicationDownload/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className="h1-seo">NoFlee</h1>
                                <h3 className="d-none d-sm-block">
                                    noflee.com is a community-driven application designed to combat hit-and-run
                                    incidents by
                                    empowering individuals to capture, report, and share critical evidence. With
                                    features like
                                    real-time incident recording, license plate recognition, and a secure evidence
                                    repository,
                                    the app
                                    ensures victims have the tools they need to hold offenders accountable.

                                    By promoting awareness and accountability, noflee.com helps deter reckless behavior,
                                    fosters
                                    safer
                                    roads, and strengthens community solidarity against irresponsible driving. Together,
                                    we can
                                    take a
                                    stand and ensure justice for all.
                                </h3>
                            </Col>
                            <Col>
                                <PTag>{`Number of Element: ${numberOfElements}`}</PTag>
                                <video width="640" height="360" controls
                                       src={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}/>
                            </Col>
                        </Row>

                    </div>
                </ApplicationView>
            </Container>
        </div>
    );
}

const ApplicationView = (props) => {
    return <div style={{background: 'red'}}>
        {props.children}
    </div>
}

const MobileApplicationDownload = () => {
    return <div style={{background: 'white', borderRadius: 15, padding: 15}}>
        <Row>
            <Col>
                <PTag>iOS</PTag>
            </Col>
            <Col>
                <PTag>Android</PTag>
            </Col>
        </Row>
    </div>
}

const PTag = ({children}) => {
    return <p style={{color: 'black'}}>{children}</p>
}