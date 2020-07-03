var React = require('react');
var Translate = require('react-redux-i18n').Translate;
var Localize = require('react-redux-i18n').Localize;

var AwesomeComponent = React.createClass({
  render: function() {
    return (
      <div>
        <Translate value="application.title"/>
          // => returns '<span>Toffe app met i18n!</span>' for locale 'nl'
        <Translate value="application.title" style={{ fontWeight: 'bold', fontSize: '14px' }} />
        // => returns '<span style="font-weight:bold;font-size:14px;">Toffe app met i18n!</span>' for locale 'nl'
        <Translate value="application.hello" name="Aad"/>
          // => returns '<span>Hallo, Aad!</span>' for locale 'nl'
        <Localize value="2015-09-03" dateFormat="date.long"/>
          // => returns '<span>3 september 2015</span> for locale 'nl'
        <Localize value={10/3} options={{style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2}}/>
          // => returns '<span>€ 3,33</span> for locale 'nl'
        <Translate value="export" count={1} />
          // => returns '<span>Exporteer 1 ding</span> for locale 'nl'
        <Translate value="export" count={2} />
          // => returns '<span>Exporteer 2 dingen</span> for locale 'nl'
        <Translate value="two_lines" dangerousHTML />
          // => returns '<span>Regel 1<br />Regel 2</span>'
      </div>
    );
  }
});
