import { Tabs, Tab } from "react-bootstrap";
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
    .tab-header {
        border-bottom: 0px;

        li {
            width: 50%;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            
            .nav-link {
                width: 100%;
                color: var(--grey-300);
                font-weight: bold;
                letter-spacing: 0.1rem;
                font-size: 18px;
                text-align: left;
                margin-bottom: 0;
                background-color: var(--grey-100);
                border: 1px solid var(--grey-100);                
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                padding: 15px 30px;
                position: relative;

                &.active {
                    color: var(--grey-50);
                    border: 1px solid var(--grey-700);
                    background-color: var(--grey-700);

                    &::after {
                        content: "";
                        position: absolute;
                        height: 2px;
                        left: 30px;
                        bottom: 8px;
                        background-color: var(--primary-400);
                        width: 40px;
                    }
                }
            }
        }

        @media (min-width: 768px) {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: nowrap;
        }
    }

    .tab-content {
        background-color: var(--grey-200);
        border: 1px solid var(--grey-300);
        border-top: 5px solid var(--grey-700);
        border-radius: 5px;
        border-top-left-radius: 0px;
        padding: 20px;
        padding-top: 30px;
    }
`

const TabSkills = (props) => {

    return (
        <Wrapper>
            <Tabs defaultActiveKey={props.defaultKey} className="tab-header">
                <Tab eventKey={props.firstKey} title={props.firstTitle}>
                    {props.firstChild}
                </Tab>
                <Tab eventKey={props.secondTitle} title={props.secondTitle}>
                    {props.secondChild}
                </Tab>
            </Tabs>
        </Wrapper>
    )
}

TabSkills.propTypes = {
    defaultKey: PropTypes.string.isRequired,
    firstTitle: PropTypes.string.isRequired,
    firstKey: PropTypes.string.isRequired,
    secondTitle: PropTypes.string.isRequired,
    secondKey: PropTypes.string.isRequired,
}


export default TabSkills