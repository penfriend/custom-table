import { TablePage } from "../support/page-objects/tablePage";
let table = new TablePage();

describe('Test get the row by ID', () => {
    beforeEach('open baseUrl', () => {
        cy.visit('/');
    })

    it('should return the row with id=8', () => {
        const expectedRow = { "ID": 8, "Car type": 'MINIVAN', "Brand": 'Honda', "Model": 'Odyssey', "Owner": 'Ivanov Oleg' };
        table.assertEqualByStringReturnedRowByIdAndExpectedRow(expectedRow);
    })

    it('should return the row with id=3', () => {
        const expectedRow = {"ID": 3, "Car type": 'SEDAN', "Brand": 'Nissan', "Model": 'Versa', "Owner": 'Ivanov Petr'};
        table.assertEqualByStringReturnedRowByIdAndExpectedRow(expectedRow);
    })
})

describe('Test should return the cars of the certain owner', () => {
    beforeEach('open baseUrl', () => {
        cy.visit('/');
    })
    it('should return one car of the certain owner', () => {
        const expectedCars: string = 'SEDAN Toyota Avalon';
        let owner: string = 'Sidorov Oleg';
        table.assertEqualByStringReturnedCarsOfOwnerAndExpectedCars(owner, expectedCars);
    })
    it('should return three cars of the certain owner', () => {
        const expectedCars: string = 'SPORTS CAR Ford Mustang SPORTS CAR Ferrari 488 SEDAN Kia Rio';
        let owner: string = 'Petrov Petr';
        table.assertEqualByStringReturnedCarsOfOwnerAndExpectedCars(owner, expectedCars);
    })
})

describe('Test returning all the dublicates rows of the table', () => {
    it('should return all dublicates rows', () => {
        const expectedDuplicates: Array<string> = ["MINIVAN Honda Odyssey Ivanov Oleg 6,8", "CONVERTIBLE Mazda Miata Ivanov Ivan 1,11"];
        table.assertEqualByStringReturnedAllDuplicatesAndExpectedDuplicates(expectedDuplicates);
    })
})
