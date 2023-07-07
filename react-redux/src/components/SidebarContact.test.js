import SidebarContact from "./SidebarContact";
import {renderWithProviders} from "../utils/test-utils.js";
import reducer from '../redux/contactSlice.js'
import contactData from '../data/contactData.json'

describe('Sidebar Contact', () => {
    it('Uses preloaded state to render', () => {
        const initialContact = {
            "data": [
                {
                    "name": "John Doe",
                    "position": "Technical support",
                    "mail": "it@example.com"
                }
            ],
            "isLoading": false
        }

        const {getByText} = renderWithProviders(<SidebarContact/>, {
            preloadedState: {
                contacts: initialContact
            }
        })
    });

    it('should return the initial state', function () {
        expect(reducer(undefined, {type: undefined})).toEqual(contactData)
    });
});