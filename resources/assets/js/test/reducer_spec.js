import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {add} from '../react/actions';

import reducer from '../react/reducer';

describe('reducer', () => {

    it('handles SET_ENTRIES', () => {
        const state = Map();
        const initialState = reducer(state, {type: 'INIT_STATE'});
        const action = {
            type: 'SET_SEARCH_RESULTS',
            payload: [{
                "id": 1,
                "name": "Dorris Willms",
                "description": "However, it was getting quite crowded with the other: he came trotting along in a louder tone. 'ARE you to sit down without being invited,' said the Duck. 'Found IT,' the Mouse only growled in.",
                "created_at": "1990-12-24 13:30:54",
                "updated_at": null
            }]
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
                searchResults: [{
                    "id": 1,
                    "name": "Dorris Willms",
                    "description": "However, it was getting quite crowded with the other: he came trotting along in a louder tone. 'ARE you to sit down without being invited,' said the Duck. 'Found IT,' the Mouse only growled in.",
                    "created_at": "1990-12-24 13:30:54",
                    "updated_at": null
                }]
            })
        );
    });
});