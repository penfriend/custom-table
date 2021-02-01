export class TablePage {

    assertEqualByStringReturnedRowByIdAndExpectedRow(expectedRow: object): void{
        cy.get(`tr:contains(${expectedRow.ID})`).each(function (tableRow) {
            if (tableRow.find('td').eq(0).text().trim() == String(expectedRow.ID)) {
                expect(tableRow.find('td').text().trim()).to.be.equal(Object.values(expectedRow).join('  '));
            }
        });
    }

    assertEqualByStringReturnedCarsOfOwnerAndExpectedCars(owner: string, expectedCars: string): void{
        let resArr: Array<string> = [];
        cy.get(`tr:contains(${owner})`).then(function (tableRows) {
            cy.wrap(tableRows).each(function (tableRow, index, list) {
                let textRow = tableRow.text().trim().split('  ');
                textRow.shift();
                textRow.pop();
                resArr.push(textRow.join(' '));
                if (index === list.length - 1) {
                    expect(resArr.join(' ')).to.be.equal(expectedCars);
                }
            })
        })
    }

    assertEqualByStringReturnedAllDuplicatesAndExpectedDuplicates(expectedDuplicates: Array<string>): void{
        let resObj = {};
        let resArr: Array<string> = [];
        cy.get('tr').first().siblings().then(function (tableRows) {
            cy.wrap(tableRows).each(function (tableRow, index, list) {
                let textRow = tableRow.text().trim().split('  ');
                let propValue: string = textRow.shift();
                let propName: string = textRow.join(' ');
                if (resObj[propName] === undefined) {
                    resObj[propName] = [];
                    resObj[propName].push(propValue);
                } else {
                    resObj[propName].push(propValue);
                    resArr.push(propName + ' ' + resObj[propName]);
                }
                if (index === list.length - 1) {
                    expect(resArr).to.deep.equal(expectedDuplicates);
                }
            })
        })
    }
}