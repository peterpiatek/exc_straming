import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link to="/" className="item"><strong>Streamer</strong></Link>
                <div className="right menu">
                    <Link to="/" className="item">All Streams</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

/*ui item
search in menu
<div className="item">
    <div className="ui icon input">
<input type="text" placeholder="Search..." />
<i className="search link icon" />
</div>
</div>
*/
