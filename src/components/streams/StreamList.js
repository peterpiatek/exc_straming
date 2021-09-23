import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import {Link} from "react-router-dom";

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (this.props.currentUserId === stream.userId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button small primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button small negative">Delete</Link>
                </div>
            );
        }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/create" className="ui button small primary">Create a new stream</Link>
                </div>
            );
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div style={{padding: '8px 0'}} className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    const userId = state.auth.profile !== null ? state.auth.profile.userId : null;
    return {
        streams: Object.values(state.streams),
        currentUserId: userId,
        isSignedIn: state.auth.isSignedIn
        // use isSignedIn to verify if the user is signed in instead od userId as this value is truly intended for this purpose
    };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
