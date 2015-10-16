export default function(resolve) {
  return `${resolve.copyright}

var React = require('react');
var IntlMixin = require('${resolve.context}mixins/GrommetIntlMixin');

var CLASS_ROOT = "control-icon";

var Icon = React.createClass({

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string,
    colorIndex: React.PropTypes.string,
    large: React.PropTypes.bool
  },

  mixins: [IntlMixin],

  getDefaultProps: function () {
    return {
      a11yTitleId: '${resolve.fileName}-title'
    };
  },

  render: function() {
    var classes = [CLASS_ROOT, CLASS_ROOT + '-${resolve.fileName}'];
    if (this.props.large) {
      classes.push(CLASS_ROOT + "--large");
    }
    if (this.props.colorIndex) {
      classes.push("color-index-" + this.props.colorIndex);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var a11yTitle = this.getGrommetIntlMessage(
      typeof this.props.a11yTitle !== "undefined" ?
        this.props.a11yTitle : "${resolve.fileName}");

    return (
      ${resolve.svg}
    );
  }

});

module.exports = Icon;
`;

};
