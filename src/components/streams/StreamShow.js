import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../actions";
import flvjs from 'flv.js';


class StreamShow extends Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {

        this.props.fetchStream(this.props.match.params.id);
        //initiate player only if ref is loaded below. Ref will be loaded only if stream id is loaded by async fetchStream
        //first time component renders - no stream id so Ref is not generated
        this.initPlayer();
    }

    componentDidUpdate() {
        this.initPlayer();
    }

    //we MUST cleanup streaming session if user is moving out to another screen
    componentWillUnmount() {
        this.player.destroy();
    }

    initPlayer = () => {
        if (this.player || !this.props.stream) { // if player exists or if there is no stream yet
            return;
        }
        const {id} = this.props.match.params;
        if (flvjs.isSupported()) {
            this.player = flvjs.createPlayer({
                type: 'flv',
                url: `http://localhost:8000/live/${id}.flv`
            });
            this.player.attachMediaElement(this.videoRef.current);
            this.player.load();
            // flvPlayer.play(); // not used because some most of browsers is blocking autoplay nowadays
        }
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        const {title, description} = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls/>
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);
