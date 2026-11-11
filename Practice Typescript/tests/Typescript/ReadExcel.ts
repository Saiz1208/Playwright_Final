import * as XLSX from 'xlsx';
import * as path from 'node:path';
import * as fs from 'node:fs';

const excelFilePath = path.join(__dirname, '..', 'Playwright', 'Test Data', 'Employee.xlsx');

if (!fs.existsSync(excelFilePath)) {
    throw new Error(`Excel file not found at: ${excelFilePath}`);
}

const workbook = XLSX.readFile(excelFilePath);
const sheet = workbook.Sheets['Sheet1'];

if (!sheet) {
    throw new Error('Sheet1 worksheet was not found in the Excel file.');
}

interface Employee {
    EMPID?: number | string;
    EMPNAME?: string;
    EMPMAIL?: string;
    EMPMOBILE?: number | string;
}

// Only keep rows that actually hold employee data. Cells written outside the
// table (e.g. F10 below) otherwise show up as an extra "undefined" row.
const data = XLSX.utils
    .sheet_to_json<Employee>(sheet)
    .filter((row) => row.EMPID !== undefined && row.EMPID !== '');
const totalrows = data.length;

console.log('Total Rows : ' + totalrows);

for (const { EMPID, EMPNAME, EMPMAIL, EMPMOBILE } of data) {
    console.log(EMPID + ' || ' + EMPNAME + ' || ' + EMPMAIL + ' || ' + EMPMOBILE);
}

XLSX.utils.sheet_add_aoa(sheet, [['Saiz']], { origin: 'F8' });
XLSX.writeFile(workbook, excelFilePath);
console.log('Data written to cell F8 successfully.');
