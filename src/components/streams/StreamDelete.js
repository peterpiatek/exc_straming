import React, {Component} from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        const {id} = this.props.stream;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)}
                        className="ui button negative">Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream';
        }
        return `Are you sure you want to delete this stream: ${this.props.stream.title}`;
    }

    render() {
        return (
            <Modal
                title={this.renderContent()}
                content="Are you sure you want to delete this stream?"
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete);
