var React = require('react');

var usedEmotions = require('../consts/usedEmotions');

var Emotion = React.createClass({
    select: function (event, emotion) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        this.props.onSelect(emotion);
    },
    render: function () {
        return (
            <div className="dFace">
                <div className="facelist">
                {
                    usedEmotions.map(function (emotion) {
                        return (
                            <a
                                className="face-ele"
                                href="javascript:;"
                                title={ emotion }
                                onClick={function (e) {
                                    this.select(e, emotion);
                                }.bind(this)}
                                key={ emotion }></a>
                        );
                    }.bind(this))
                }
                </div>
            </div>
        );
    }
});

module.exports = Emotion;
