import SearchResults from './components/SearchResults/SearchResults';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import { connect } from 'react-redux';

export const SearchResultsContainer = connect(
    function mapStateToProps(state) {
        return {searchResults: state};
    }
)(SearchResults);
