/* eslint-disable no-undef */
import { arraySort } from "../helpers/arraySort";

// Tests that arraySort sorts an array of objects by id in ascending order
describe('should to return the array sorted right', () => {
    it('test_sort_by_id_ascending', () => {
        const array = [
            { id: 3 },
            { id: 1 },
            { id: 2 }
        ]
        const expected = [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]
        expect(arraySort(array, true, 'id')).toEqual(expected)
    })

    // Tests that arraySort sorts an array of objects by id in descending order
    it('test_sort_by_id_descending', () => {
        const array = [
            { id: 3 },
            { id: 1 },
            { id: 2 }
        ]
        const expected = [
            { id: 3 },
            { id: 2 },
            { id: 1 }
        ]
        expect(arraySort(array, false, 'id')).toEqual(expected)
    })

    // Tests that arraySort sorts an array of objects by company name in ascending order
    it('test_sort_by_company_name_ascending', () => {
        const array = [
            { company: { name: 'C' } },
            { company: { name: 'A' } },
            { company: { name: 'B' } }
        ]
        const expected = [
            { company: { name: 'A' } },
            { company: { name: 'B' } },
            { company: { name: 'C' } }
        ]
        expect(arraySort(array, true, 'company')).toEqual(expected)
    })

    // Tests that arraySort sorts an array of objects by company name in descending order
    it('test_sort_by_company_name_descending', () => {
        const array = [
            { company: { name: 'C' } },
            { company: { name: 'A' } },
            { company: { name: 'B' } }
        ]
        const expected = [
            { company: { name: 'C' } },
            { company: { name: 'B' } },
            { company: { name: 'A' } }
        ]
        expect(arraySort(array, false, 'company')).toEqual(expected)
    })

    // Tests that arraySort sorts an array of objects by city name in ascending order
    it('test_sort_by_city_name_ascending', () => {
        const array = [
            { address: { city: 'C' } },
            { address: { city: 'A' } },
            { address: { city: 'B' } }
        ]
        const expected = [
            { address: { city: 'A' } },
            { address: { city: 'B' } },
            { address: { city: 'C' } }
        ]
        expect(arraySort(array, true, 'city')).toEqual(expected)
    })

    // Tests that arraySort sorts an array of objects by city name in descending order
    it('test_sort_by_city_name_descending', () => {
        const array = [
            { address: { city: 'C' } },
            { address: { city: 'A' } },
            { address: { city: 'B' } }
        ]
        const expected = [
            { address: { city: 'C' } },
            { address: { city: 'B' } },
            { address: { city: 'A' } }
        ]
        expect(arraySort(array, false, 'city')).toEqual(expected)
    })

    // Tests that arraySort sorts an array of objects by non-string property in ascending order
    it('test_sort_by_non_string_property_ascending', () => {
        const array = [
            { id: 3, age: 25 },
            { id: 1, age: 30 },
            { id: 2, age: 20 }
        ]
        const expectedArray = [
            { id: 1, age: 30 },
            { id: 2, age: 20 },
            { id: 3, age: 25 }
        ]
        expect(arraySort(array, true, 'id')).toEqual(expectedArray)
    })

    // Tests that arraySort sorts an array of objects by non-string property in descending order
    it('test_sort_by_non_string_property_descending', () => {
        const array = [
            { id: 3, age: 25 },
            { id: 1, age: 30 },
            { id: 2, age: 20 }
        ]
        const expectedArray = [
            { id: 3, age: 25 },
            { id: 2, age: 20 },
            { id: 1, age: 30 }
        ]
        expect(arraySort(array, false, 'id')).toEqual(expectedArray)
    })

    // Tests sorting an empty array
    it('test_sort_empty_array', () => {
        const array = []
        const expectedArray = []
        expect(arraySort(array, true, 'id')).toEqual(expectedArray)
    })
})
