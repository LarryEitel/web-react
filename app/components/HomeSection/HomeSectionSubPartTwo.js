// LIBRARY
import React from 'react';
import marked from 'marked';

// FLUX
import AppActions from '../../actions/AppActions';

let { PropTypes } = React;

export default class HomeSectionSubPartTwo extends React.Component {
  constructor() {
    super();
    this.propsTypes = {
      apiData: PropTypes.object.isRequired
    };
  }

  render() {
    var contentMarkup = 'dispatching zone 2';
    if (this.props.apiData.data) {
      contentMarkup = marked('```json\n' + JSON.stringify(this.props.apiData.data, null, 2) + '```', {breaks: true});
    }

    return (
      <div className='home-section-sub-part-two' dangerouslySetInnerHTML={{__html: contentMarkup}}></div>
    );
  }

  _onClick() {
    AppActions.fetch();
  }
}

HomeSectionSubPartTwo.prototype.displayName = 'HomeSectionSubPartTwo';
